import React from 'react'
import {Button, Input} from "@nextui-org/react";

function InputField() {
  return (
    <div className='flex flex-col space-y-2 absolute bottom-0 items-center flex-1 inset-x-0'>
         <Input type="text" label="Text" />
         <Button>Generate</Button>
    </div>
  )
}

export default InputField
