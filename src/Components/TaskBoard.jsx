// import React, { useState } from 'react'
// import Column from './Column'
// import TaskForm from './TaskForm'

// const TaskBoard = () => {
//   const [open, setOpen] = useState(false)

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         {/* <div className="flex gap-2 items-center">
//           <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">TaskFlow</button>
//         </div> */}
//         {/* <div>
//           <button onClick={() => setOpen(true)} className="bg-indigo-600 text-white px-4 py-2 rounded-lg">+ Add Task</button>
//         </div> */}
//       </div>

//       {open && <TaskForm close={() => setOpen(false)} />}

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         <Column status="To Do" />
//         <Column status="In Progress" />
//         <Column status="Done" />
//       </div><br />
//          <div>
//           <button onClick={() => setOpen(true)} className="cursor-pointer  bg-indigo-600 w-sm text-white px-4 py-2 rounded-lg">+ Add Task</button>
//         </div>
//     </div>
    
//   )
// }

// export default TaskBoard
import React, { useState } from 'react'
import Column from './Column'
import TaskForm from './TaskForm'

const TaskBoard = () => {
  const [open, setOpen] = useState(false)
  const [editableTask, setEditableTask] = useState(null)

  const handleEdit = (task) => {
    setEditableTask(task)
    setOpen(true)
  }

  return (
    <div>
      {open && (
        <TaskForm
          close={() => {
            setOpen(false)
            setEditableTask(null)
          }}
          editTask={editableTask}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
        <Column status="To Do" onEdit={handleEdit} />
        <Column status="In Progress" onEdit={handleEdit} />
        <Column status="Done" onEdit={handleEdit} />
      </div>

      <br />
      <div>
        <button
          onClick={() => setOpen(true)}
          className="cursor-pointer bg-indigo-600 w-1/3 text-white px-4 py-2 rounded-lg"
        >
          + Add Task
        </button>
      </div>
    </div>
  )
}

export default TaskBoard
