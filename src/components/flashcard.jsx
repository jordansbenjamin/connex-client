import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import EditCardModal from './EditCardModal';



function Flashcard({id, title, content}) {
    return (
        <Card className="max-w-[400px]">
          <CardHeader className="flex gap-3">
            {/* <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            /> */}
            <div className="flex flex-col">
                {title}
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            <p>content: {content}</p>
          </CardBody>
          <Divider/>
          
         
        </Card>
      );
}

export default Flashcard
