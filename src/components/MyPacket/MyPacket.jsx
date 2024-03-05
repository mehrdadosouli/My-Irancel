import React from 'react'
import RightSide from '../RightSide/RightSide'
import LeftSide from '../LeftSide/LeftSide'
import BoxSuggest from '../CenterSide/BoxSuggest'

export default function MyPanel() {
  return (
    <div className="flex bg-white-300 h-full">
        <RightSide />
        <BoxSuggest />
        <LeftSide />
      </div>
  )
}
