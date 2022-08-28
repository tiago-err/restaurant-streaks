import {useState} from "react";
import RestaurantCard, {Props} from "../RestaurantCard";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, HashNavigation} from "swiper";
import RewardCounter from "../RewardCounter";

export default function RestaurantCarousel(props: {restaurants: Props[]}) {
	return (
		<div className="h-full w-full flex items-center justify-center">
			<Swiper
				modules={[Pagination, HashNavigation]}
				pagination={{dynamicBullets: true, bulletActiveClass: "!bg-black swiper-pagination-bullet-active"}}
				slidesPerView={1}
				style={{height: "100%"}}
				loop
				centeredSlides
				centeredSlidesBounds
				hashNavigation
				initialSlide={0}
				grabCursor>
				{props.restaurants.map((restaurant) => (
					<SwiperSlide key={restaurant.id} data-hash={restaurant.id}>
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
