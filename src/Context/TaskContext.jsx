// import React, { createContext, useContext, useEffect, useState } from 'react'

// const TaskContext = createContext()

// export const TaskProvider = ({ children }) => {
//   const [tasks, setTasks] = useState(() => {
//     try {
//       const raw = localStorage.getItem('tasks')
//       return raw ? JSON.parse(raw) : []
//     } catch (e) {
//       console.log(e);
      
//       return []
//     }
//   })

//   useEffect(() => {
//     localStorage.setItem('tasks', JSON.stringify(tasks))
//   }, [tasks])

//   const addTask = (task) => setTasks((s) => [...s, task])
//   const updateTask = (task) => setTasks((s) => s.map(t => t.id === task.id ? task : t))
//   const deleteTask = (id) => setTasks((s) => s.filter(t => t.id !== id))

//   return (
//     <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
//       {children}
//     </TaskContext.Provider>
//   )
// }

// export const useTasks = () => useContext(TaskContext)

import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState( localStorage.getItem("tasks") ?  JSON.parse(localStorage.getItem("tasks")) : []);

  // 🔹 Load from localStorage on mount
  // useEffect(() => {
  //   const stored = localStorage.getItem("tasks");
  //   if (stored) setTasks(JSON.parse(stored));
  // }, []);

  // 🔹 Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task] ,
     toast.success("✅ Task added successfully!")
  );

  const updateTask = (updated) =>
    setTasks(tasks.map((item) => (item.id === updated.id ? updated : item)) ,
    toast.success("Task updated successfully!")
);

  const deleteTask = (id) => setTasks(tasks.filter((item) => item.id !== id), 
    toast.error("Task deleted!")
)

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
