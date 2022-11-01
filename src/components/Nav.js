import React from 'react'
import "./Nav.css"
// import Logo from "../components/deepthroughtlogo.svg"

function Nav() {
  return (
    <div className='total-navbar'>
        <div className='logo'>
            <img src='https://deepthought.education/assets/images/logo/logo.svg' alt='logo'/>
        </div>

        <div className='icons'>
            <p className='round-background'><i class="fa-solid fa-house-chimney"></i></p>
            <p className='round-background'><i class="fa-solid fa-binoculars"></i></p>
            <p className='round-background'><i class="fa-solid fa-screwdriver-wrench"></i></p>
            <p className='round-background'><i class="fa-regular fa-bell" id='bell'></i></p>
            <p className='round-background' id='backgroundpic'></p>
            <p><i class="fa-solid fa-ellipsis-vertical" id='three-dots'></i></p>
        </div>
    </div>
  )
}

export default Nav
