import { useCallback, useState, useRef, useEffect } from 'react'
import type { Observable, Subscription } from 'rxjs'
import { takeUntil } from 'rxjs/operators'
import type * as ROR from '../http/ReaderObservableResource'
import * as RES from '../http/Resource'

export function useFetchReaderObservableResource<
    F extends (...p: any) => ROR.ReaderObservableResource<R, E, A>,
    R = F extends (...p: any) => ROR.ReaderObservableResource<infer T, any, any> ? T : never,
    E = F extends (...p: any) => ROR.ReaderObservableResource<any, infer T, any> ? T : never,
    A = F extends (...p: any) => ROR.ReaderObservableResource<any, any, infer T> ? T : never,
    P extends Array<unknown> = Parameters<F>
>(
    fetch: F,
    deps: R,
    options?: {
        notifierTakeUntil?: Observable<unknown>
        iniState?: RES.Resource<E, A>
    }
): [RES.Resource<E, A>, (...p: P) => void] {
    const [value, setValue] = useState<RES.Resource<E, A>>(options?.iniState || RES.init)

    const subscriptionRef = useRef<Subscription | null>(null)
    const fetchRef = useRef(fetch)
    const depsRef = useRef(deps)
    const notifierTakeUntilRef = useRef(options?.notifierTakeUntil)

    useEffect(() => {
        fetchRef.current = fetch
        depsRef.current = deps
        notifierTakeUntilRef.current = options?.notifierTakeUntil
    })

    return [
        value,
        useCallback((...p: P) => {
            if (subscriptionRef.current && subscriptionRef.current.closed !== true) {
                subscriptionRef.current.unsubscribe()
            }

            const resource$ = fetchRef.current(...p)(depsRef.current)

            const resourceTaken$ = notifierTakeUntilRef.current
                ? resource$.pipe(takeUntil(notifierTakeUntilRef.current))
                : resource$

            subscriptionRef.current = resourceTaken$.subscribe(setValue)
        }, []),
    ]
}
