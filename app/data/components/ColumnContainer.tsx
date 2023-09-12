import {  useSortable } from '@dnd-kit/sortable'
import { GrabIcon, TrashIcon } from '@/components/ui/icons'
import { Column } from '@/types'
import { CSS } from '@dnd-kit/utilities'
import React, { useMemo, useState } from 'react'
import {PlusIcon} from '@/components/ui/icons'


interface Props {
  column: Column
  component: React.ReactNode,
  className: string
}

export const ColumnContainer = ({ column, component, className }: Props) => {
  const [editMode, setEditMode] = useState(false)

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,

  } = useSortable({
    id: column.id,
    data: {
      type: 'Column',
      column
    },
    disabled: editMode
  })

  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
      bg-columnBackgroundColor
      opacity-40
      border
      border-pink-500
      w-full
      h-[500px]
      max-h-full
      rounded-md
      flex
      flex-col
      "
      ></div>
    )
  }

  return (
    <div ref={setNodeRef} style={style} className={className}>
      {/* Column title */}
      <div
        // onClick={() => {
        //   setEditMode(true)
        // }}
        className="
      bg-mainBackgroundColor
      text-md
      h-[60px]

     rounded
      p-3
      font-bold
      border-columnBackgroundColor
      border
      flex
      items-center
      justify-between
      "
      >
        <div className="flex gap-2">
          <div
            {...attributes}
            {...listeners}
            className="
        flex
        justify-center
        items-center
        bg-columnBackgroundColor
        px-2
        cursor-grab
        py-1
        text-sm
        rounded-full
        "
          >
            <GrabIcon />
          </div>
          {/*
          {!editMode && (
            <h1 className="text-lg font-extrabold text-gray-900 dark:text-white md:text-lg lg:text-lg">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                Better Data{' '}
              </span>
              Scalable AI.
            </h1>
          )} */}
        </div>
      </div>

      {/* Column task container */}
      <div className="flex flex-grow flex-col gap-4  overflow-x-hidden overflow-y-auto">
        {component}
      </div>

    </div>
  )
}
