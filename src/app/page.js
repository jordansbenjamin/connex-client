'use client'

import {DndContext} from '@dnd-kit/core';


import StartButton from "@/components/StartButton";
import InputField from "@/components/InputField";

export default function Home() {
  return (
    <main>
        <DndContext>
          <InputField />
        </DndContext>
    </main>
  );
}
