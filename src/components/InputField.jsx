'use client'

import React from 'react'
import {Button, Input} from "@nextui-org/react";

function InputField() {


  const handleClick = () => {

  }
  return (
    <div className='flex flex-col space-y-2 items-center flex-1'>
         <Input type="text" label="Text" />
         <Button onClick={handleClick}>Generate</Button>
    </div>
  )
}

export default InputField
