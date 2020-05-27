import { types } from 'mobx-state-tree'

export const Counter = types.model('Counter', {
  count: types.number,
})
  .actions(self => ({
    inc(delta = 1) {
      self.count += delta
    },
    dec(delta = 1) {
      self.count -= delta
    }
  }))