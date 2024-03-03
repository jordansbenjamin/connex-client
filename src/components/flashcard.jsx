'use client'

import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button, useDisclosure} from "@nextui-org/react";
import EditCardModal from './EditCardModal'
import { useData } from '../app/context/cardContext';


function Flashcard({id, title, content}) {
   

    return (
      <Card className="max-w-[340px]">
        <CardHeader className="justify-between">
          <div className="flex gap-5">
            title:{title}
          </div>
          <EditCardModal />

        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-400">
          content: {content}
        </CardBody>
        <CardFooter className="gap-3">
         
        </CardFooter>
      </Card>
    );
  }
  

export default Flashcard
