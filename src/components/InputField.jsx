import React from 'react'
import {Button, Input} from "@nextui-org/react";

function InputField() {
  return (
    <div className='absolute inset-x-0 bottom-0 flex flex-col items-center'>
        <Input type="text" label="Text" />
        <Button>Generate</Button>
        
    </div>
  )
}

export default InputField
