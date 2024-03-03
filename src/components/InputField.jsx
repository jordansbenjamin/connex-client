import React, { useState } from 'react';
import { Button, Input } from "@nextui-org/react";

function InputField() {
  const [inputValue, setInputValue] = useState(''); // State to hold the input value

  const handleChange = (e) => {
    setInputValue(e.target.value); // Update state with input value
  };

  const handleClick = async () => {
    const prompt = encodeURIComponent(inputValue); // Ensure the prompt is URL-encoded
    const url = `http://ec2-52-62-214-60.ap-southeast-2.compute.amazonaws.com/openai?prompt=${prompt}`;
      
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error('There was a problem with your fetch operation:', error);
    }
  };

  return (
    <div className='flex flex-col space-y-2 absolute bottom-1 items-center flex-1 inset-x-0'>
         <Input type="text" label="Text" onChange={handleChange} />
         <Button onClick={handleClick}>Generate</Button>
    </div>
  );
}

export default InputField;
