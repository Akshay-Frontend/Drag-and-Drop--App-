
import React from 'react';
import TaskBoard from './components/TaskBoard';
import { TaskProvider } from './Context/TaskContext';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen p-6 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
        <header className="max-w-5xl mx-auto mb-8">
          <h1 className="text-4xl font-extrabold text-center text-gray-700 drop-shadow-sm">
             Todo App
          </h1>
          <p className="text-center text-gray-500 mt-2">
             Let's Start 
          </p>
        </header>

        <main className="max-w-5xl mx-auto bg-white backdrop-blur-sm rounded-2xl shadow-lg p-6">
          <TaskBoard />
        </main>

      </div>
       <Toaster position="right-left" reverseOrder={false} />
    </TaskProvider>
  );
}



// Old 
// import React from 'react'

// import TaskBoard from './components/TaskBoard'
// import { TaskProvider } from './Context/TaskContext'


// export default function App() {
//   return (

//     <TaskProvider> 
//       <div className="min-h-screen p-6  ">
//         <header className="max-w-5xl mx-auto mb-6">
//           <h1 className="text-3xl font-bold text-center text-gray-600">Todo App </h1>
//         </header>
//         <main className="max-w-5xl mx-auto">
//           <TaskBoard />
//         </main>
//       </div>
//     </TaskProvider>

//   )
// }