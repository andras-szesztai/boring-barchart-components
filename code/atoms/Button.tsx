import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"


export function Button(props){

  return (
    <Frame
    height={20}
    width={20}
    >
      <button>
        {props.text}
      </button>
    </Frame>
  )
}