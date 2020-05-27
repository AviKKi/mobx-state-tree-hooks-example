import React from 'react'
import { useCounterStore } from "../utils/store";


const CounterView = ({ counter, count }) => {
  return (
    <div>
      <span className="btn" onClick={() => counter.dec()}>-</span>
      <span className="counter-label">{count}</span>
      <span className="btn" onClick={() => counter.inc()}>+</span>
    </div>
  )
}

export default () => {
  const counter = useCounterStore(store => ({
    count: store.count,
    counter: store
  }))
  return <CounterView {...counter} />
}