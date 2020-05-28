import { types } from 'mobx-state-tree'
import { Counter } from './counter'
import { WishList } from './wishList'
import makeInspectable from 'mobx-devtools-mst'

export const RootStore = types.model('RootStore', {
  counter: types.optional(Counter, { count: 0 }),
  wishList: types.optional(WishList, {}),
})


export const getDefaultStore = () => RootStore.create({})

const store = getDefaultStore()
makeInspectable(store)
export { store }