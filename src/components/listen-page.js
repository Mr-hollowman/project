import React, {useState } from "react";
import {Link} from 'react-router-dom';
import {menuData} from "./menu-data";
import PageContent from "./Page-Content";
import { AlbumData } from "./albumData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {faWindowClose} from '@fortawesome/free-solid-svg-icons';
import {faLanguage} from '@fortawesome/free-solid-svg-icons';



function ListenPage() {
  const [sidebar, setSidebar]=useState(false);// for show/hide sidebar
  const [myLibrary ,setMyLibrary]=useState(false);//for show/hide mylibrary
  const [searchTerm, setSearchTerm]=useState('');//for getting value from search fields
  const showSidebar=()=>setSidebar(!sidebar);//function for change classname for sidebar
  const showMyLibrary=()=>setMyLibrary(!myLibrary);//function for change classname for mylibrary
  const [searchBox,setSearchBar]=useState(false)
  const showSearchBox=()=>setSearchBar(!searchBox)
  return (
    <div>
      <div className="Listen-page-header">
      <div className="left">
      <div className="navbar">
      <Link to='#'>
        {/* <img src={Menu} alt='menu' width='35px' onClick={showSidebar}></img> */}
        <FontAwesomeIcon icon={faBars} size='2x' onClick={showSidebar} style={{color:'black'}}/>
      </Link>
      <nav className={sidebar ? 'nav-menu-active':'nav-menu'}>
        <ul className="nav-menu-items" >
          <li className="navbar-toggle">
            <Link to='#' className="menu-bars">
              <FontAwesomeIcon icon={faWindowClose} size='2x' onClick={showSidebar} style={{color:'black'}}/>
            </Link>
          </li>
          <li><h2>Categories</h2></li>
          {menuData.map((item,index)=>{
            return(
              <li key={index} className={item.cName}><Link to={item.path}>
                <span>{item.title}</span></Link></li>
            )
          })}
        </ul>
      </nav>
      </div>
      <h2 className="content">Azure</h2>
      </div>
      <div className="right">
      <h2 className="content">Podcast</h2>
      <h2 onClick={showMyLibrary} className="content">My Library</h2>
      <div  className={myLibrary ? 'my-library-active':'my-library'}>
          <Link to='#'className="Link"><b>my playlist</b></Link>
          <hr></hr>
          <Link to='#'className="Link"><b>history</b></Link>
      </div>
      <input className="content" type='search' placeholder="Search Podcasts" onFocus={showSearchBox} onBlur={showSearchBox} onChange={(e)=>setSearchTerm(e.target.value)}></input>
      <FontAwesomeIcon className="language-icon" icon={faLanguage} size='3x' />
      <div className={searchBox?"searchBox-Active":"searchBox-Inactive"}>{AlbumData.filter((val)=>{
                if(searchTerm===""){
                    return val;
                }
                else if(val.artistName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
                    return val;
                }
            }).map((val,key)=>{ return <li className="search-result" key={key}>{val.artistName}</li>})}</div>
      {/* <img src={Translation} alt='translate'></img> */}
      </div>
    </div>
    <PageContent></PageContent>
    </div>
  );
}

export default ListenPage;