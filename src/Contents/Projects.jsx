import React from 'react'
import { motion } from "framer-motion";

import { Input } from "@/components/lightswind/input";
import { Button } from "@/components/lightswind/button";
import { Textarea } from "@/components/lightswind/textarea";
 const submitHandler=() =>{
    alert("Message Sent");
  }

function Projects() {
  return (
    <div className='bg-black p-40'>
      <p className='Pricedown text-8xl text-purple-600'>Projects</p>

      <p className='text-white text-xl mt-10 mb-10 Pricedown uppercase border p-5 border-purple-600 '> 
       <u className='bg-violet-600'> Chatting Application (MERN + Socket.io) </u><br />
Developed a real-time chatting application using the MERN stack (MongoDB, Express.js, React.js, Node.js) integrated with Socket.io for instant, bidirectional communication between users. The application supports user authentication, private and group chats, message notifications, and persistent chat history. Implemented responsive UI with React for seamless experience across devices. Optimized backend APIs with Node.js and Express.js to handle real-time events efficiently. Used MongoDB for storing user details and chat logs securely.<br />

This project showcases expertise in real-time web applications, WebSocket-based communication, and scalable architecture design using modern full-stack technologies.
      </p>

      <p className='text-white text-xl mt-10 mb-10 Pricedown border p-5 border-purple-600 uppercase'>
    <u className='bg-violet-600'> Performance Management System – IKSC Knowledge Bridge</u> <br/>
Developed and contributed to a Performance Management System aimed at tracking, evaluating, and improving employee performance within organizations. The system was designed with an intuitive React-based frontend to provide dashboards, performance metrics, and role-based access for employees, managers, and administrators. <br/>Implemented features such as goal setting, progress tracking, feedback management, and performance reviews. Focused on creating a responsive and user-friendly interface, ensuring smooth navigation across devices. Collaborated with the team to align technical implementation with business objectives and enhance overall <br/>productivity.

This project demonstrates skills in React development, state management, UI/UX design, and integration of performance workflows into a scalable system.
      </p>
       
    </div>
  )
}

export default Projects
