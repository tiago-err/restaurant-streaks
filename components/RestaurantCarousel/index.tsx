import {useEffect, useState} from "react";
import RestaurantCard, {Props} from "../RestaurantCard";
import Slider from "react-slick";

export default function RestaurantCarousel(props: {restaurants: Props[]; onSlideChange: (index: number, restaurant: Props) => void}) {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		console.log("hehe");
		props.onSlideChange(0, props.restaurants[0]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const settings = {
		centerMode: true,
		infinite: true,
		slidesToShow: 1,
		speed: 500,
		swipeToSlide: true,
		focusOnSelect: true,
		arrows: false,
		afterChange: (index) => {
			props.onSlideChange(index, props.restaurants[index]);
			setCurrentIndex(index);
		},
	};

	return (
		<Slider className="center w-full relative" {...settings}>
			{props.restaurants.map((restaurant, index) => (
				<div key={restaurant.id} className={`self-center h-full p-4 m-auto ${index === currentIndex ? "" : "opacity-70 blur-sm"}`}>
					<RestaurantCard {...restaurant} isClickable={index === currentIndex} />
				</div>
			))}
		</Slider>
	);
}
