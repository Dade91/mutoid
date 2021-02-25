# Mutoid - State management

`import * as MS from 'mutoid/state'`

## Create store

```typescript
declare module 'mutoid/state/stores' {
    interface Stores {
        appStore: 'mutation' | 'partialMutation'
    }
}

const appStore = MS.ctor(() => ({ name: 'appStore', initState: { userName: 'Marco' } }))
```

## Read the status from anywhere

```typescript
import { pipe } from 'fp-ts/pipeable'
import * as T from 'fp-ts/Task'
import * as C from 'fp-ts/Console'

const program = pipe(
    MS.toTask(appStore),
    T.map(s => `Hello ${s.userName}`),
    T.chainIOK(C.log)
)

program()
```

## Mutation

### ctorMutation

```typescript
declare const store: Lazy<Store<S>>
declare const id: number

const mutation = () => MS.ctorMutation('mutation', (id: number) => (currentState: S): Observable<S> => of(s))

const mutationR = MS.mutationRunner(store, mutation)

// run
mutationR(id)
```

_mutation with deps_

```typescript
declare const store: Lazy<Store<S>>
declare const id: number
declare const deps: {
    someService: someService
}

const mutation = (deps: typeof deps) =>
    MS.ctorMutation('mutation', (id: number) => (currentState: S): Observable<S> => of(s))

const mutationR = MS.mutationRunner(store, mutation, { deps: { someService } })

// run
mutationR(id)
```

### ctorPartialMutation

_mutation runs only if the state matches the predicate, useful if your store is a state machine_

```typescript
declare const store: Lazy<Store<S>>
declare const id: number

const mutation = () =>
    MS.ctorPartialMutation(
        'partialMutation',
        (currentState: S): currentState is SS => currentState.type === 'ss',
        (id: number) => (currentState: SS): Observable<S> => of(s)
    )

const mutationR = MS.mutationRunner(store, mutation)

// run
mutationR(id)
```

if you want to kill the mutation `MS.mutationRunner` accept as third parameter "options" with propriety `notifierTakeUntil?: Observable<unknown>`

## Store notifier

emit: `initStore`, `mutationLoad`, `mutationStart`, `mutationEnd`

```typescript
declare const store: Lazy<Store<S>>

store().notifier$.subscribe(e =>
    Sentry.addBreadcrumb({
        category: 'mutation',
        message: action.type,
        level: Severity.Info,
        data: e,
    })
)
```