import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-linear-to-r from-purple-300 to to-blue-300'>
    <div className="hero w-8xl flex items-center justify-center flex-col p-32 ">
        <h1 className=' font-bold text-8xl'>School Managment  </h1>
        <p p className='text-2xl mt-15 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam beatae vitae <br /> accusantium laboriosam modi nulla !</p>
     <Link to={"/slist"}>   <button  className='bg-blue-400 text-white rounded-2xl text-2xl  float-left mt-6  p-6 p-4'>Exlpore</button> </Link>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/male-student-reading-book-illustration-svg-download-png-10370179.png" alt="no" />
        
        </div> 
    </div>
  )
}

