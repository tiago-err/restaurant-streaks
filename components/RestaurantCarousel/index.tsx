import {useState} from "react";
import RestaurantCard, {Props} from "../RestaurantCard";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper";
import RewardCounter from "../RewardCounter";

export default function RestaurantCarousel(props: {restaurants: Props[]}) {
	const [current, setCurrent] = useState(0);

	return (
		<div className="h-full w-1/3 flex items-center justify-center">
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
						<div className="h-full flex flex-col items-center justify-center gap-16">
							<RestaurantCard {...restaurant} />
							<RewardCounter
								restaurantColor={restaurant.bgColor}
								rewardAmount={restaurant.rewardAmount}
								userAmount={restaurant.userAmount}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
