'use client'

import React from 'react'
import { DndContext, closestCorners } from '@dnd-kit/core'
import Column from './column'

function AssemblyFlashcard() {
	const tasks = [
	{
		id:'1', title:"card 1"
	},
	{
		id:'2', title:"card 2"
	},{
		id:'3', title:"card 3"
	}]
	return (
		<div>
			<DndContext collisionDetection={closestCorners}>
				<Column 
					tasks={tasks}
				/>
			</DndContext>
		</div>
	)
}

export default AssemblyFlashcard
