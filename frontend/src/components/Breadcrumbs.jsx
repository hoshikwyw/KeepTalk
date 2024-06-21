import React from 'react'
import { NavLink } from 'react-router-dom'

const Breadcrumbs = (props) => {
    return (
        <div className="text-sm breadcrumbs">
            <ul>
                <li><NavLink to={"/"}>{props.parent}</NavLink></li>
                <li><a>{props.child}</a></li>
            </ul>
        </div>
    )
}

export default Breadcrumbs
