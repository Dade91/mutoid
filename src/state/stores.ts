// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Stores {
    _S: '_M'
}

export type storeName = keyof Stores
export type mutationName<SN extends storeName> = Stores[SN]
export type allMutationName = Stores[storeName]