import React, { useRef, useState } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import { io } from 'socket.io-client'

const socket = io.connect('http://localhost:5000')
const VideoCall = () => {
    const [me, setMe] = useState("")
    const [stream, setStream] = useState()
    const [receivingCall, setReceivingCall] = useState(false)
    const [caller, setCaller] = useState("")
    const [callerSignal, setCallerSignal] = useState()
    const [callAccepted, setCallAccepted] = useState(false)
    const [idToCall, setIdToCall] = useState("")
    const [callEnded, setCallEnded] = useState(false)
    const [name, setName] = useState("")
    const myVideo = useRef()
    const userVideo = useRef()
    const connectionRef = useRef()
    
  return (
    <div>
      <Breadcrumbs parent="Home" child="Video Call" />
    </div>
  )
}

export default VideoCall
