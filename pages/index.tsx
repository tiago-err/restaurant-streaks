import {collection, getDocs} from "firebase/firestore";
import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import Router from "next/router";
import {useContext, useEffect, useState} from "react";
import Header from "../components/Header";
import RestaurantCard, {Props} from "../components/RestaurantCard";
import RestaurantCarousel from "../components/RestaurantCarousel";
import RewardCounter from "../components/RewardCounter";
import {AuthContext} from "../firebase/AuthContext";
import useRestaurants from "../hooks/useRestaurants";
import useUserRestaurants from "../hooks/useUserRestaurants";
import {CompleteRestaurant, Restaurant} from "../interfaces";

const Home: NextPage = () => {
	const {user} = useContext(AuthContext);
	const {restaurants, isLoading: isLoadingRestaurants} = useRestaurants();
	const {userRestaurants, isLoading: isUserRestaurantsLoading} = useUserRestaurants(user);
	const [selectedRestaurant, selectRestaurant] = useState<CompleteRestaurant | undefined>(undefined);

	useEffect(() => {
		if (!user) {
			Router.push("/login");
		}
	}, [user]);

	useEffect(() => {
		console.log({userRestaurants});
	}, [userRestaurants]);

	const completeRestaurant = (restaurant: Restaurant): CompleteRestaurant => {
		const userRestaurant = getUserRestaurantFromRestaurantID(restaurant.id);
		return {...restaurant, qrCode: userRestaurant.qrCode ?? "", userAmount: userRestaurant.userAmount ?? 0};
	};

	const getUserRestaurantFromRestaurantID = (id: string) => {
		return userRestaurants.find((item) => id === item.restaurantID);
	};

	return (
		<div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700 relative">
			<Head>
				<title>Streaks</title>
				<meta name="description" content="Restaurant Rewards Platform" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="h-screen w-full lg:w-5/12 flex flex-col items-center justify-center bg-white dark:bg-gray-800 lg:rounded-xl drop-shadow-xl">
				<div className="p-8 w-full mb-8">
					<Header user={user} />
				</div>
				<div className="mt-8 h-full w-full grid grid-cols-1 lg:grid-cols-2 gap-8 place-content-start place-items-center ">
					{restaurants &&
						userRestaurants &&
						restaurants
							.map(completeRestaurant)
							.map((restaurant) => <RestaurantCard key={restaurant.id} {...restaurant} onClick={() => selectRestaurant(restaurant)} />)}
				</div>
			</main>
		</div>
	);
};

export default Home;
