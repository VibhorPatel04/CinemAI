import { IMG_CDN_URL } from "../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const MovieCard = ({ movies }) => {
  return (
    <>
      {movies && (
        <div className="w-full px-8">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 7,
                spaceBetween: 15,
              },
            }}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper w-full"
          >
            {movies.map((movie) => {
              return (
                <SwiperSlide key={movie.id}>
                  <img
                    className="object-cover h-40 w-52 rounded-md"
                    src={IMG_CDN_URL + movie.poster_path}
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default MovieCard;
