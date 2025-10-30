// import React from 'react'
// import { useTasks } from '../context/TaskContext'
// import TaskCard from './TaskCard'

// const Column = ({ status }) => {
//   const { tasks, updateTask } = useTasks()

//   const handleDrop = (e) => {
//     e.preventDefault()
//     const id = e.dataTransfer.getData('text/plain')
//     const t = tasks.find(x => x.id === id)
//     if (!t) return
//     updateTask({ ...t, status })
//   }

//   return (
//     <div
//       onDragOver={(e) => e.preventDefault()}
//       onDrop={handleDrop}
//       className="bg-white/60 p-4 rounded-lg  min-h-[320px] border"
//     >
//       <h2 className="text-lg font-semibold mb-3 text-indigo-700">{status}</h2>
//       <div className="space-y-3">
//         {tasks.filter(t => t.status === status).map(t => <TaskCard key={t.id} task={t} />)}
//       </div>
//     </div>
//   )
// }

// export default Column
 
import React from 'react'
import { useTasks } from '../context/TaskContext'
import TaskCard from './TaskCard'

const Column = ({ status, onEdit }) => {
  const { tasks, updateTask } = useTasks()
 
  //   Drag-and-drop task and push to all task  another dive 

  const handleDrop = (e) => {
    e.preventDefault()
    const id = e.dataTransfer.getData('text/plain')
    const t = tasks.find(item => item.id === id)
    if (!t ) return
    updateTask({ ...t, status })
  }

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="bg-white/60 p-4 rounded-lg min-h-[320px] border  "
    >
      <h2 className="text-lg font-semibold mb-3 text-indigo-700">{status}</h2>
      <div className="space-y-3">
        {tasks
          .filter(t => t.status === status)
          .map(t => (
            <TaskCard key={t.id} task={t} onEdit={() => onEdit(t)} />
          ))}
      </div>
    </div>  
  )
}

export default Column
