# Mutoid

Reactive library for state management, data fetching, caching for isomorphic applications

## Installation

To install the last version

```sh
npm install mutoid
```

_If you use npm >= 7 otherwise you need to install peer dependencies manually_

If you want to use [`io-ts`](https://github.com/gcanti/io-ts) decoder in data fetching or cache

```sh
npm install io-ts
```

If you want also to use it with [`react`](https://github.com/facebook/react)

```sh
npm install react
```

**Note** [`rxjs`](https://github.com/ReactiveX/rxjs), [`fp-ts`](https://github.com/gcanti/fp-ts),[`fp-ts-rxjs`](https://github.com/gcanti/fp-ts-rxjs) are required peer dependencies.
Instead [`react`](https://github.com/facebook/react) and [`io-ts`](https://github.com/gcanti/io-ts) are an optional peer dependencies.

## Docs

[Docs](https://engineering.facile.it/mutoid)

## Example

If you want to see a simple [app](https://github.com/facile-it/mutoid/tree/master/example)  
If you clone this repo, you can run the example with

```console
npm install
npm run dev-server
```

## Test

### Unit, lint and cs

```console
npm run test
```

### Type level

```console
npm run test-type
```
