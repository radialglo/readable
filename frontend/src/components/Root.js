import React from 'react';
import  PlusIcon from 'react-icons/lib/fa/plus-circle';
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants';

const Root = ({categories}) => (
    <div>
        <Link to={ROUTES.CREATE_POST}>
            <PlusIcon size={30} color={"#000"}/>
        </Link>

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