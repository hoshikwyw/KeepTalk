import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../pages/Main'
import Chat from '../pages/Chat'
import VideoCall from '../pages/VideoCall'
import ChatBot from '../pages/ChatBot'

const Paths = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='/call' element={<VideoCall />} />
      <Route path='/bot' element={<ChatBot />} />
    </Routes>
  )
}

export default Paths
