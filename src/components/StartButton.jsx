import React from "react";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

export default function StartButton() {
  return (
    <Popover placement="right">
      <PopoverTrigger>
        <Button>Create New</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col px-1 py-2">
            <Button>Text</Button>
            <Button>Recording</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
