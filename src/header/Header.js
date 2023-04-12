import React from 'react'
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='logo'>
                    <NavLink  to="/">
                        <img src='assets/image/_static_images_logo.png'/>
                    </NavLink>
                    </div>
                </div>
                <div className='col-md-6'>
                    <ul>
                        <li>
                        <NavLink className='primary-btn'>
                            start a project
                        </NavLink>
                        </li>
                        <li>
                        <button class="hamburger-btn">
                            <img src='assets/image/_static_images_hamburger-icon.png'/>
                        </button>
                        </li>
                    </ul>
                   
                </div>
            </div>
            </div>
    </div>
  )
}

export default Header