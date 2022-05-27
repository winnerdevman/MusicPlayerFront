import React from 'react'
import { Link } from 'react-router-dom';
import '../../../assets/css/itemCarousel.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Swiper from 'react-id-swiper';

function FeaturedPlaylist({ featuredPlaylists }) {
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

  return (
    <div>

        <div className="featured-playlists">
            <Swiper {...params}>
                {
                    featuredPlaylists.slice(0, 10).map((playlist, i) => {
                        return (
                            //link to album page by id
                            <div key={i} className="link">
                                <div>
                                    <h2>{playlist.name}</h2>
                                </div>
                                <div key={i} className="playlist" >
                                    {playlist.images && <img className="playlist-img" src={playlist.images[0].url} />}
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

export default FeaturedPlaylist