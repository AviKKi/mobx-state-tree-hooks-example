import { types } from 'mobx-state-tree'
import { Counter } from './counter'
import { WishList } from './wishList'

export const RootStore = types.model('RootStore', {
  counter: types.optional(Counter, { count: 0 }),
  wishList: types.optional(WishList, {}),
})


export const getDefaultStore = () => RootStore.create({})