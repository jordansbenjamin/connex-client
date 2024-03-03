

import React, {useState, useEffect} from 'react'
import {Button, Input} from "@nextui-org/react";
import { useRouter } from 'next/navigation'

function InputField() {
  const router = useRouter()

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
        let response_raw = localStorage.getItem('ai_response');
      if (response_raw !== null) {
        let ai_response = JSON.parse(response_raw);
        ai_response.push(data);
        localStorage.setItem('ai_response', JSON.stringify(ai_response));
        console.log(ai_response);
      } else {
        let ai_response = [data];
        localStorage.setItem('ai_response', JSON.stringify(ai_response));
      }
        router.refresh();
        router.push('/flashcard');

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
