import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from '../supabaseclient';

const TaskManager = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const onSubmit = async (data) => {
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = data;
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, data]);
    }
    const {error} = await supabase.from("Task").insert([{ title : data.title , description : data.description }]).single(); 
    if (error){
        console.error("Error on adding task" , error.message)
    }
    reset();
  };

  const fetchTask = async () => {

    const { data , error } = await supabase
    .from("Task")
    .select("*")
    .order("id" , {ascending : false})

  }

  const handleEdit = (index) => {
    const task = tasks[index];
    setValue('title', task.title);
    setValue('description', task.description);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    if (editIndex === index) {
      reset();
      setEditIndex(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">Task Manager CRUD</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-4">
        <input
          placeholder="Task Title"
          {...register('title', { required: true })}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
        />
        <input
          placeholder="Task Description"
          {...register('description', { required: true })}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full"
        >
          {editIndex !== null ? 'Update Task' : 'Add Task'}
        </button>
      </form>

      <div className="mt-10 w-full max-w-md space-y-4">
        {tasks.map((task, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded shadow">
            <h2 className="font-bold text-xl">{task.title}</h2>
            <p className="text-gray-300">{task.description}</p>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => handleEdit(index)}
                className="bg-yellow-500 hover:bg-yellow-600 px-4 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskManager;
