import React,{ useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button'
import  './navbar.css'

function Navbar() {
    const [see,setSee] = useState(false)
    const [button,setButton] = useState(true)
    const handleToggle=()=>{
        setSee(!see)
    }

    const closeMenu=()=>{
        setSee(false)
    }
    const showButton=()=>{
        if(window.innerWidth <=960)
        {
            setButton(false)
        }
        else{
            setButton(true)
        }
    };
    useEffect(()=>{
        showButton()
    },[])

    window.addEventListener('resize',showButton)
    return (
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMenu}>
                    The Sparks Covid Care  
                    <img 
                    className='spark-img'
                    src='https://media-exp3.licdn.com/dms/image/C560BAQFgHU3sTF4LfQ/company-logo_200_200/0/1519895156650?e=1633564800&v=beta&t=C0GzYj28_sIoiLRsh1Hb2YmRN03kJVt8GF-kiPT5haA' alt='Spark Image'></img></Link>
                <div className='menu-icon' onClick={handleToggle}>
                    <i className={see?'fas fa-times':'fas fa-bars'}></i>
                </div>
                <ul className={see?'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMenu}>
                            Contact
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Donate' className='nav-links' onClick={closeMenu}>
                            Donate
                        </Link>
                    </li>
                </ul>
                {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
            </div>
        </nav>
        </>
   
              
      );
}

export default Navbar
