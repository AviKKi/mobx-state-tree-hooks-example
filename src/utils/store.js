import * as React from 'react'
import { useLocalStore, useObserver } from 'mobx-react-lite'
import makeInspectable from 'mobx-devtools-mst';

import { getDefaultStore } from "../models/root";

export const storeContext = React.createContext(null)

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(getDefaultStore)
  makeInspectable(store)


  return (
    <storeContext.Provider value={store}>
      {children}
    </storeContext.Provider>
  )
}

/**
 * hook to use store data
 * @param {*} storeSelector 
 * @param {*} dataSelector 
 */
export const useStoreData = (storeSelector, dataSelector) => {
  const value = React.useContext(storeContext)
  if (!value)
    throw new Error("React context not found, wrap your app around StoreProvider")
  const store = storeSelector(value)
  return useObserver(() => dataSelector(store))
}

export const useCounterStore = dataSelector => {
  return useStoreData(store => store.counter, dataSelector)
}