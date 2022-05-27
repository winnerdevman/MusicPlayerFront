import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SideNav from '../components/SideNav';
import NewAlbums from '../components/carousels/new-albums/NewAlbums';
import FeaturedPlaylists from '../components/carousels/featured-playlists/FeaturedPlaylists';

import SpotifyPlayer from 'react-spotify-player';
function HomePage() {
  const size = {
    width: '100%',
    height: 300,
  };
  const view = 'list'; // or 'coverart'
  const theme = 'black'; // or 'white'

  const [toggleMenu, setToggleMenu] = useState("");

  const toggleMobileMenu = function(){
    setToggleMenu(toggleMenu === "" ? "active" : "");
  };

  const useEffect = (()=> {
  });

  const downResizeBar = ((e)=>{
    e = e || window.event;
    var target = e.target;
    var start = 0, diff = 0;
    if( e.pageX) start = e.pageX;
    else if( e.clientX) start = e.clientX;

    document.body.onmousemove = function(e) {
        e = e || window.event;
        var end = 0;
        if( e.pageX) end = e.pageX;
        else if( e.clientX) end = e.clientX;
        if (end < 120) return;

        diff = Math.abs(end - start);
        target.style.left = end+"px";
        document.getElementById("navWrap").style.width = end + "px";
        document.getElementById("mainSection").style.width = "calc(100% - " + end + "px)";
        document.getElementById("mainSection").style.left = end + "px";
    };
    document.body.onmouseup = function() {
        document.body.onmousemove = document.body.onmouseup = null;
    };
  });

  return (
    <div>
        <div className="navWrap" id="navWrap">
          <div className="logo-section">
              <h1>JellyJam</h1>
              <div className="search-container">
                  <Link to="/search">
                  <button>Search</button>
                  </Link>
              </div>
              <div className="mobile_menu" onClick={toggleMobileMenu}>
                  <div className="dash_line"></div>
                  <div className="dash_line"></div>
                  <div className="dash_line"></div>
              </div>
          </div>
          <SideNav toggleMenu={toggleMenu} />
        </div>
        <div className="resizeBar" id="resizeBar" onMouseDown={downResizeBar}></div>
        <div className="mainSection" id="mainSection">
            <NewAlbums />
            <FeaturedPlaylists />
            <SpotifyPlayer
              uri="spotify:album:1TIUsv8qmYLpBEhvmBmyBk"
              size={size}
              view={view}
              theme={theme}
            />
        </div>
    </div>
  )
}

export default HomePage