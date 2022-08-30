import {collection, getDocs} from "firebase/firestore";
import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import {useContext, useEffect, useState} from "react";
import Header from "../components/Header";
import {Props} from "../components/RestaurantCard";
import RestaurantCarousel from "../components/RestaurantCarousel";
import RewardCounter from "../components/RewardCounter";
import {AuthContext} from "../firebase/AuthContext";
import useRestaurants from "../hooks/useRestaurants";
import useUserRestaurants from "../hooks/useUserRestaurants";
import {Restaurant} from "../interfaces";

const Home: NextPage = () => {
	const {user} = useContext(AuthContext);
	const {restaurants, isLoading: isLoadingRestaurants} = useRestaurants();
	const {userRestaurants, isLoading: isUserRestaurantsLoading} = useUserRestaurants(user);
	const [currentRestaurant, setCurrentRestaurant] = useState<Restaurant | undefined>(undefined);

	useEffect(() => {
		console.log(user);
	}, [user]);

	useEffect(() => {
		console.log({userRestaurants});
	}, [userRestaurants]);

	const completeRestaurant = (restaurant: Restaurant) => {
		const userRestaurant = getUserRestaurantFromRestaurantID(restaurant.id);
		return {...restaurant, qrCode: userRestaurant.qrCode ?? "", userAmount: userRestaurant.userAmount ?? 0};
	};

	const getUserRestaurantFromRestaurantID = (id: string) => {
		return userRestaurants.find((item) => id === item.restaurantID);
	};

	const onSlideChange = (index: number, restaurant: Props) => {
		console.log({restaurant, index});
		setCurrentRestaurant(restaurants.find((item) => item.id === restaurant.id));
	};

	return (
		<div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100 relative">
			<Head>
				<title>Streaks</title>
				<meta name="description" content="Restaurant Rewards Platform" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="h-screen w-full lg:w-5/12 flex flex-col items-center justify-center relative bg-white px-4 rounded-xl drop-shadow-xl">
				<div className="absolute top-8 left-0 px-8 w-full">
					<Header user={user} />
				</div>
				<div className="h-1/3 w-full grid grid-cols-1 gap-8 ">
					<RestaurantCarousel restaurants={restaurants.map(completeRestaurant)} onSlideChange={onSlideChange} />
					<RewardCounter
						restaurantColor={currentRestaurant.bgColor}
						rewardAmount={currentRestaurant.rewardAmount}
						userAmount={getUserRestaurantFromRestaurantID(currentRestaurant.id).userAmount}
					/>
				</div>
			</main>
		</div>
	);
};

export default Home;
