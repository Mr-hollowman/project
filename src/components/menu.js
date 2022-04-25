import React,{useState} from 'react';
import { menuData } from "./menu-data";
import {Link} from 'react-router-dom';

function Menu(props) {
    const [sidebar, setSidebar]=useState(false)
  const showSidebar=()=>setSidebar(!sidebar)
    return (
    <div className="navbar">
      <Link to='#'><img src={Menu} alt='menu' width='50px' onClick={showSidebar}></img></Link>
      <nav className={sidebar ? 'nav-menu-active':'nav-menu'}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to='#' className="menu-bars">
              <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png" width='30px'></img>
            </Link>
          </li>
          {menuData.map((item,index)=>{
            return(
              <li key={index} className={item.cName}><Link to={item.path}>
                <span>{item.title}</span></Link></li>
            )
          })}
        </ul>
      </nav>
      </div>
    );
}

export default Menu;