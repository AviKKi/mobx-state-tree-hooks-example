import React from 'react'
import { useCounterStore } from "../utils/store";


const CounterView = ({ dec, inc, count }) => {
  return (
    <div>
      <span className="btn" onClick={() => dec()}>-</span>
      <span className="counter-label">{count}</span>
      <span className="btn" onClick={() => inc()}>+</span>
    </div>
  )
}

export default () => {
  const counter = useCounterStore(store => ({
    count: store.count,
    inc: store.inc,
    dec: store.dec,
  }))
  return <CounterView {...counter} />
}