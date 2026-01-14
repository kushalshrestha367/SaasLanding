"use client"
import React from 'react'

function Navbar() {
  return (
    <div className="bg-amber-100 shadow-md mx-auto p-1 fixed w-full z-10 ">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">SaaS Landing Page</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-gray-700 hover:text-green-500 font-semibold">Home</a></li>
            <li><a href="#features" className="text-gray-700 hover:text-green-500 font-semibold">Features</a></li>
            <li><a href="#pricing" className="text-gray-700 hover:text-green-500 font-semibold">Pricing</a></li>
            <li><a href="#testimonials" className="text-gray-700 hover:text-green-500 font-semibold">Testimonials</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
