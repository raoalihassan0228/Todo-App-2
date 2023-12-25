"use client";
import Image from "next/image";
import { useState } from "react";
import { CiEdit } from "react-icons/ci";

export default function Home() {
  // Defining States
  const [todos, setTodos] = useState([
    { book: "Holy Quran", id: 1 },
    { book: "A Great Man", id:2 },
  ]);

  const [inputVal, setInputVal] = useState("")
  const [id, setId] = useState(0)

// defining a function
const addItem = () => {
  let obj:any = todos.find(item => item.id==id)
  if (obj){
    let newArr = todos.filter(item => item.id !==obj.id)
    setTodos([...newArr,{book:inputVal, id:id}])
    setInputVal("")
    setId(0)
    return
  }
  setTodos([...todos,{book:inputVal, id:id}])
    setInputVal("")
    setId(0)

}

// function
const editItem = (id:any) => {
  let obj:any = todos.find(item => item.id==id)
  setInputVal(obj.book)
  setId(obj.id)
}

// Delete function
const delItem = (id:any) => {
  let newArr = todos.filter(item => item.id !==id)
  setTodos([...newArr])
}

  return (
    <div>
      <div className="max-w-[480px] bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto text-gray-200 p-4 text-2xl font-semibold font-serif mt-7 shadow-xl">
        <div className="text-center">Todo App</div>
      </div>

      {/* Input div */}
      <div className="flex justify-center mt-6 gap-4">
        <input
        type="text"
        value={inputVal}
        onChange={(e)=>{setInputVal(e.target.value)}}
          className="border-2 border-gray-300 w-[400px]"
          placeholder="Write book name..."
        />
        <input
        type="number"
        value={id}
        onChange={(e:any)=>setId(e.target.value)}
          className="border-2 border-gray-300 w-[150px]"
          placeholder="Enter serial no..."
        />
        <button onClick={addItem} className="bg-indigo-500 py-2 px-3 rounded-md text-white hover:bg-indigo-400 active:bg-indigo-300">
          Add
        </button>
      </div>

      <h1 className="text-gray-200 p-3 text-xl font-semibold bg-gradient-to-r from-zinc-600 to-neutral-500 text-center w-[200px] mx-auto mt-12 shadow-xl">
        Books List
      </h1>

      <div className="grid grid-cols-3 gap-4 mx-7 m-6">
        {todos.map((item,i) => {
          return (
            <div className="shadow-xl p-4 border border-gray-300 mt-5 rounded" key={i}>
              <div className="flex justify-between">
                <span className="px-3 py-1 rounded-full ">{i+1}</span>
                <span onClick={()=>delItem(item.id)} className="px-3 py-1 bg-red-500 text-center rounded-full text-gray-200 cursor-pointer active:bg-red-600 active:bg-red-500">
                  X
                </span>
              </div>
              <div className="mt-5 text-lg text-gray-900">{item.book}</div>
              <div onClick={()=>editItem(item.id)} className="text-gray-900 text-right cursor-pointer hover:text-blue-500 underline">
                Edit
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
