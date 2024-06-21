import React from 'react'
import { NavLink } from 'react-router-dom'

const Main = () => {
    return (
        <div className=' min-h-[calc(100vh-160px)] my-5'>
            <div className=" w-full h-full flex justify-center items-center gap-5">
                <div className="talk">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src='/chat.jpg' alt="Shoes" className="rounded-xl h-60 w-80" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Chat With Friends!!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <NavLink className="btn btn-primary" to="/chat">Chat Now</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="videoCall">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="/vc.jpg" alt="Shoes" className="rounded-xl h-60 w-80" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Face Time with Friends!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                            <NavLink className="btn btn-primary" to="/call">Call Now</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bot">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="/bot.jpg" alt="Shoes" className="rounded-xl h-60 w-80" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Talk with AI bot!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                            <NavLink className="btn btn-primary" to="/bot">Talk Now</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
