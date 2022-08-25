import {useState} from "react";
import RestaurantCard, {Props} from "../RestaurantCard";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

export default function RestaurantCarousel(props: {restaurants: Props[]}) {
	const [current, setCurrent] = useState(0);

	return (
		<div className="w-1/3 h-48 flex items-center justify-center">
			<Swiper
				modules={[Pagination]}
				pagination={{dynamicBullets: true, bulletActiveClass: "!bg-black swiper-pagination-bullet-active"}}
				slidesPerView={1}
				style={{height: "100%"}}
				loop
				centeredSlides
				centeredSlidesBounds
				grabCursor>
				{props.restaurants.map((restaurant) => (
					<SwiperSlide key={restaurant.id}>
						<div className="h-full flex items-center justify-center">
							<RestaurantCard {...restaurant} />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
