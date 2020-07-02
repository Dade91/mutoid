import { Lazy } from 'fp-ts/lib/function'
import { useCallback } from 'react'
import { Observable, Subscription } from 'rxjs'
import * as MS from '../state'

export const useMutation = <N extends string, NM extends string, P extends Array<unknown>, S, SS extends S>(
    s: Lazy<MS.Store<N, S>>,
    mutationL: Lazy<MS.Mutation<NM, P, S, SS>>,
    notifierTakeUntil?: Observable<unknown>
): ((...payload: P) => Subscription) =>
    // can't eta reduction for warning eslint
    useCallback((...payload: P) => MS.mutationRunner(s, mutationL, notifierTakeUntil)(...payload), [
        s,
        mutationL,
        notifierTakeUntil,
    ])
