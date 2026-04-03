import React from 'react'
import './Header.css'
import netflix from '../../Assets/Images/netflix.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
const Header = () => {
  return (
    <div className='header-outer-container'>
      <div className='header-container'>
      <div className='header-container-left'>



<ul >
    <li><img  src={netflix} alt="Netflix Logo" className='netflix-logo' /></li>
          <li>Netflix</li>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>latest</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>


    </div>
    <ul>
      <li><SearchIcon /></li>
      <li><NotificationsNoneIcon /></li>
      <li><AccountBoxIcon /></li>
      <li><ArrowDropDownCircleIcon /></li>

    </ul>
    </div>
    </div>
  )
}

export default Header
