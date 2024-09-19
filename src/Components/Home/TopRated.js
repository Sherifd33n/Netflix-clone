import React, { useState } from "react";
import Title from "../Title";
import { FaBookmark, FaCaretLeft, FaCaretRight, FaHeart } from "react-icons/fa";
import { Movies } from "../../Data/MovieData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Rating from "./Stars";
import { Autoplay, Navigation } from "swiper/modules";

function TopRated() {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const classNames =
    "hover:bg-dry transitions text-sm rounded border border-subMain w-8 h-8 hover:  flex-colo bg-subMain text-white";
  return (
    <div className="my-16">
      <Title title="Top Rated" Icon={FaBookmark} />
      <div className="mt-10">
        <Swiper
          navigation={{ nextEl, prevEl }}
          autoplay={true}
          speed={500}
          loop={true}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {Movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 hovered transitions h-72 border border-border bg-dry rounded-lg overflow-hidden">
                <img
                  src={`/images/movies/${movie.image}`}
                  alt={movie.name}
                  className="w-full  h-full object-cover rounded-lg"
                />

                <div className="px-4 hovers  gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0">
                  <button className="w-9 h-9 flex-colo transitions hover:bg-subMain rounded-full bg-white bg-opacity-70 text-white">
                    <FaHeart />
                  </button>
                  <Link
                    className="font-semibold text-xl truncated line-clamp-2"
                    to={`/movie/${movie.name}`}
                  >
                    {movie.name}
                  </Link>
                  <div className="flex gap-2 text-star">
                    <Rating value={movie.rate} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="w-full flex px-1 mt-6 flex-rows gap-6 mx-auto pt-2">
          <button className={classNames} ref={(node) => setPrevEl(node)}>
            <FaCaretLeft />
          </button>
          <button className={classNames} ref={(node) => setNextEl(node)}>
            <FaCaretRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopRated;
