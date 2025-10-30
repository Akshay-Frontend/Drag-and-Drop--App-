// import React from 'react'
// import { useTasks } from '../context/TaskContext'

// const TaskCard = ({ task }) => {
//   const { deleteTask } = useTasks()

//   const dragStart = (e) => {
//     e.dataTransfer.setData('text/plain', task.id)
//     // optional: set drag image or effect
//   }

//   return (
//     <div
//       draggable
//       onDragStart={dragStart}
//       className="bg-white p-4 rounded shadow-sm border flex flex-col"
//     >
//       <div className="flex justify-between items-start">
//         <h3 className="font-semibold">{task.title}</h3>
//         <span className={
//           `text-xs px-2 py-1 rounded-full ${task.priority === 'High' ? 'bg-red-200' : task.priority === 'Medium' ? 'bg-yellow-200' : 'bg-green-200'}`
//         }>{task.priority}</span>
//       </div>

//       {task.description && <p className="text-sm text-gray-600 mt-2">{task.description}</p>}

//       <div className="mt-3 flex gap-2 justify-end">
//         <button className="text-indigo-600 text-sm">Edit</button>
//         <button onClick={() => deleteTask(task.id)} className="text-red-600 text-sm">Delete</button>
//       </div>
//     </div>
//   )
// }

// export default TaskCard

import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskCard = ({ task, onEdit }) => {
  const { deleteTask } = useTasks();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", task.id);
  };

  return (
    <>
    
      <div
  draggable
  onDragStart={handleDragStart}
  className="p-4 rounded-xl border border-indigo-100 shadow-md bg-gradient-to-br from-white/90 via-indigo-50/60 to-purple-50/70 backdrop-blur-sm transition-all hover:shadow-lg hover:scale-[1.02]"
>
        <div className="flex justify-between items-start  ">
          <h3 className="font-semibold">{task.title}</h3>
          <span 
            className={` cursor-pointer text-xs px-2 py-1 rounded ${
              task.priority === "High"
                ? "bg-red-500"
                : task.priority === "Medium"
                ? "bg-green-400"
                : "bg-gray-400"
            }`}
          >
            {task.priority}
          </span>
        </div>

        <p className="text-gray-600 ">{task.description}</p>
        <div className="flex items-center gap-6 mt-4">
          {/* Edit Button */}
          <button
            onClick={onEdit}
            className=" cursor-pointer flex items-center gap-1 text-blue-600 text-sm hover:underline"
          >
            <EditIcon fontSize="small" />
            <span>Edit</span>
          </button>

          {/* Delete Button */}
          <button
            onClick={() => setShowConfirm(true)}
            className=" cursor-pointer flex items-center gap-1 text-red-600 text-sm hover:underline"
          >
            <DeleteIcon fontSize="small" />
            <span>Delete</span>
          </button>
        </div>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[350px]">
            <h2 className="text-lg font-semibold mb-2 text-red-600">
              Delete Task
            </h2>
            <p className="text-gray-700 mb-4">
              This action cannot be undone. This will permanently delete the
              task.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowConfirm(false)}
                className=" cursor-pointer  px-3 py-1 rounded border"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  deleteTask(task.id);
                  setShowConfirm(false);
                }}
                className="bg-red-600 cursor-pointer   text-white px-4 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskCard;
