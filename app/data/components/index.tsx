import {PlusIcon} from '@/components/ui/icons'
import { useMemo, useState } from 'react'
import { Column} from '@/types'
import {ColumnContainer} from './ColumnContainer'
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import { SortableContext, arrayMove } from '@dnd-kit/sortable'
import { createPortal } from 'react-dom'

import { nanoid } from '@/lib/utils'
import { Chat } from '@/components/chat'
import TextEditor from '@/components/editor/text-editor'

const id = nanoid()
function DocComponent() {

  return (
<a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</a>
  )
}


const defaultCols: Column[] = [
  {
    id: 'todo',
    title: 'Todo',
    component: <TextEditor />,
    className: ' w-[900px] '
    // className: 'rounded-lg border  bg-background  w-[700px]'
  },
  {
    id: 'doing',
    title: 'Work in progress',
    component: <Chat id={id} />,
    className: ' w-[500px]'
  }
]



function MultipleContainers() {
  const [columns, setColumns] = useState<Column[]>(defaultCols)
  const columnsId = useMemo(() => columns.map(col => col.id), [columns])

  const [activeColumn, setActiveColumn] = useState<Column | null>(null)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10
      }
    })
  )

  return (
    <div
      className="
        m-auto
        flex

        w-full
        items-center
        overflow-x-auto
        overflow-y-hidden

    "
    >
      <DndContext
        sensors={sensors}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragOver={onDragOver}
      >
        <div className="m-auto flex gap-4">
          <div className="flex gap-4">
            <SortableContext items={columnsId}>
              {columns.map(col => (
                <ColumnContainer
                  key={col.id}
                  column={col}
                  component={col.component}
                  className={col.className}

                />
              ))}
            </SortableContext>
          </div>
        </div>
      </DndContext>
    </div>
  )

  function onDragStart(event: DragStartEvent) {
    if (event.active.data.current?.type === 'Column') {
      setActiveColumn(event.active.data.current.column)
      return
    }
  }
  function onDragEnd(event: DragEndEvent) {
    setActiveColumn(null)
    const { active, over } = event
    if (!over) return
    const activeId = active.id
    const overId = over.id

    if (activeId === overId) return

    const isActiveAColumn = active.data.current?.type === 'Column'
    if (!isActiveAColumn) return

    console.log('DRAG END')

    setColumns(columns => {
      const activeColumnIndex = columns.findIndex(col => col.id === activeId)

      const overColumnIndex = columns.findIndex(col => col.id === overId)

      return arrayMove(columns, activeColumnIndex, overColumnIndex)
    })
  }

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event
    if (!over) return

    const activeId = active.id
    const overId = over.id

    if (activeId === overId) return

    const isOverAColumn = over.data.current?.type === 'Column'
  }
}


export default MultipleContainers
