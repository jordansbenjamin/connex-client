'use client'

import React, {useState, useEffect} from 'react'
import {Button, Input} from "@nextui-org/react";

function InputField() {
  const {saveData} = useData()

  const [content, setContent] = useState()
  
  const url = 'http://ec2-52-62-214-60.ap-southeast-2.compute.amazonaws.com/openai';

  const data = {
  "token":"e3SH7aEDCBxdHFgatoK1",
  "message":content
  }
  
  const handleClick = () => {
    // Use the fetch API to send the POST request
      fetch(url, {
        method: 'POST', // Specify the request method
        headers: {
          'Content-Type': 'application/json', // Specify the content type as JSON
        },
        body: JSON.stringify(data), // Convert the JavaScript object to a JSON string
      })
      .then(response => {
        console.log("res:", response);
        if (!response.ok) {
          // If the response is not ok, throw an error
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON response body
      })
      .then(data => {
        // Use the data from the response
        console.log("data:::", data);
        localStorage.setItem("content", "data");
        
      })
      .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('There was a problem with your fetch operation:', error);
      }).finally(
        console.log("finish!")
      )

  }

  const handleChange = (event) => {
    setContent(event.target.value);
  };


  return (
    <div className='flex flex-col space-y-2 items-center flex-1'>
         <Input type="text" onChange={handleChange} value={content}/>
         <Button onClick={handleClick}>Generate</Button>
    </div>
  )
}

export default InputField
