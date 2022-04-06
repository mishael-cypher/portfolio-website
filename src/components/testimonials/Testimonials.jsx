import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur perspiciatis accusantium modi quo. Dolorem quasi consectetur incidunt officia modi repellat hic temporibus ut, qui dicta aliquam cum, earum, repudiandae nihil?",
  },
  {
    avatar: AVTR2,
    name: "Timothy Smith",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur perspiciatis accusantium modi quo. Dolorem quasi consectetur incidunt officia modi repellat hic temporibus ut, qui dicta aliquam cum, earum, repudiandae nihil?",
  },
  {
    avatar: AVTR3,
    name: "Shatta Wale",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur perspiciatis accusantium modi quo. Dolorem quasi consectetur incidunt officia modi repellat hic temporibus ut, qui dicta aliquam cum, earum, repudiandae nihil?",
  },
  {
    avatar: AVTR4,
    name: "James Chidera",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur perspiciatis accusantium modi quo. Dolorem quasi consectetur incidunt officia modi repellat hic temporibus ut, qui dicta aliquam cum, earum, repudiandae nihil?",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
      // install Swiper modules
      module={[Pagination, Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}
      >
        {data.map(({ avatar, name, review }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt="Avatar" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
