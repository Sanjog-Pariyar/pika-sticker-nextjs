"use client"
import { observer } from "mobx-react"
import store from "../store/store"

const Input = () => {

    const filter = store.filter

  return (
    <div>
        <input 
            className="input input-bordered input-secondary w-full max-w-xs mt-5"
            placeholder="Search stickers"
            value={filter}
            onChange={(e) => store.setFilter(e.target.value)}
        />
    </div>
  )
}

export default observer(Input)