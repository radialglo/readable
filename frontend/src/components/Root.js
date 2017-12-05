import React from 'react';
import  PlusIcon from 'react-icons/lib/fa/plus-circle';
import {  Link } from 'react-router-dom'

const Root = ({categories}) => (
    <div>
        <PlusIcon size={30}/>

        <ul>
            {categories.map((category) => (
                <li key={category.name}>
                    <Link to={category.path}>{category.name}</Link>
                </li>

            ))}
        </ul>
    </div>
)



export default Root;