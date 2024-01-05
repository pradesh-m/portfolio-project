import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import {styles} from '../styles'
import {navLinks} from '../constants'
import {logo, menu, close } from '../assets'


//visit tailwind documentation to understand what the classes mean

const Navbar = () => {

  const [active, setActive] = useState('')

  return (
    <nav className = {'${styles.paddindx} w-full flex items-center py-5 fixed top-0 z-20 bg-primary'}>

      <div className = "w-full flex justify-between items-center max-w-7xl mx-auto">
        <link to = "/" 
        className = "flex item-center gap-2"
        //keeps track where u are on page 
        onClick = { () => {
          setActive(""); 
          window.scrollTo(0,0);
        }}
      >       
        </link>
      </div>
    

    </nav>

    

  )}

export default Navbar