import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css'

function Album({ albums }) {
  const params = {
    slidesPerView: 5,
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      1280: {
        slidesPerView: 4,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  } 

 
  useEffect(() => {
    var evt = window.document.createEvent('UIEvents'); 
    evt.initUIEvent('resize', true, false, window, 0); 
    window.dispatchEvent(evt);
  });

  return (
    <div>

        {/* <div > */}
        <div className="new-albums"> 

            <Swiper {...params}>
                {
                  albums.slice(0, 10).map((album, i) => {
                    return (
                      //link to album page by id
                      <div key={i}>
                          <div>
                              <h2>{album.name}</h2>
                          </div>
                          <div key={i} className="album" >
                              {album.images.length && <img className="album-img" src={album.images[1].url} />}
                          </div>
                      </div>
                    )
                  })
                }
            </Swiper> 
        </div>
    </div>
  )
}

export default Album