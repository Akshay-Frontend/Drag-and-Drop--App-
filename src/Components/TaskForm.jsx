// import React, { useState } from 'react'
// import { useTasks } from '../context/TaskContext'
// import { v4 as uuidv4 } from 'uuid'
// import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

// const TaskForm = ({ close }) => {
//   const { addTask } = useTasks()

//   const [form, setForm] = useState({
//     id: uuidv4(),
//     title: '',
//     description: '',
//     status: 'To Do',
//     priority: 'Medium'
//   })

//   const submit = (e) => {
//     e.preventDefault()
//     if (!form.title.trim()) return alert('Please add a title')
//     addTask(form)
//     close()
//   }

//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg p-6 w-[420px]">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-lg font-semibold">Add New Task</h3>
//           <button onClick={close} className="text-gray-500 cursor-pointer">✕</button>
//         </div>

//         <form onSubmit={submit} className="space-y-3">
//           <input value={form.title} onChange={e => setForm({...form, title: e.target.value})}
//             className="w-full border p-2 rounded" placeholder="Title" />

//           <select value={form.status} onChange={e => setForm({...form, status: e.target.value})} className="w-full border p-2 rounded">
//             <option>To Do</option>
//             <option>In Progress</option>
//             <option>Done</option>
//           </select>

//           <select value={form.priority} onChange={e => setForm({...form, priority: e.target.value})} className="w-full border p-2 rounded">
//             <option>High</option>
//             <option>Medium</option>
//             <option>Low</option>
//           </select>

//           <textarea value={form.description} onChange={e => setForm({...form, description: e.target.value})} className="w-full border p-2 rounded" placeholder="Description" />

//           <div className="flex justify-between items-center pt-2">
//             <button type="button" onClick={close} className="text-gray-600 cursor-pointer ">Cancel</button>
//             <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded cursor-pointer ">Create</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default TaskForm

import React, { useState, useEffect } from 'react'
import { useTasks } from '../context/TaskContext'
import { v4 as uuidv4 } from 'uuid'

const TaskForm = ({ close, editTask }) => {
  const { addTask, updateTask } = useTasks()

  const [form, setForm] = useState({
    id: uuidv4(),
    title: '',
    description: '',
    status: 'To Do',
    priority: 'Medium',
  })

 
  useEffect(() => {
    if (editTask) {
      setForm(editTask)
    }
  }, [editTask])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.title.trim()) return alert("Task is Required") 

    if (editTask) {
      updateTask(form)
    } else {
      addTask(form)
    }

    close()
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[420px]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            {editTask ? 'Edit Task' : 'Add New Task' }
          </h3>
          <button onClick={close} className="text-gray-500 cursor-pointer">
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full border p-2 rounded"
            placeholder="Title"
          />

          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value })}
            className="w-full border p-2 rounded"
          >
            <option>To Do</option>
            <option>In Progress</option>
            <option>Done</option>
          </select>

          <select
            value={form.priority}
            onChange={(e) => setForm({ ...form, priority: e.target.value })}
            className="w-full border p-2 rounded"
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            className="w-full border p-2 rounded"
            placeholder="Description"
          />

          <div className="flex justify-between items-center pt-2">
            <button
              type="button"
              onClick={close}
              className="text-gray-600 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded cursor-pointer"
            >
              {editTask ? 'Update Task' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TaskForm
