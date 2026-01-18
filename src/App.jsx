import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const [col,setcol]=useState("olive")
  return (
    <div className='w-full h-screen duration-200'
    style={{background:col}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button 
          onClick={()=>setcol("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor:"RED"}}>RED</button>
          <button
          onClick={()=>setcol("green")}
           className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor:"GREEN"}}>GREEN</button>
          <button 
          onClick={()=>setcol("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor:"BLUE"}}>BLUE</button>
          <button 
          onClick={()=>setcol("black")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor:"BLACK"}}>BLACK</button>
          <button 
          onClick={()=>setcol("pink")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor:"PINK"}}>PINK</button>
          <button 
          onClick={()=>setcol("orange")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor:"ORANGE"}}>ORANGE</button>
          <button 
          onClick={()=>setcol("purple")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor:"PURPLE"}}>PURPLE</button>
          <button 
          onClick={()=>setcol("grey")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg '
          style={{backgroundColor:"GREY"}}>GREY</button>
        </div>
      </div>
    </div>  
  )
}

export default App
