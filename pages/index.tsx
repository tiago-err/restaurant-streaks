import {collection, getDocs} from "firebase/firestore";
import type {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import {useContext, useEffect} from "react";
import Header from "../components/Header";
import RestaurantCarousel from "../components/RestaurantCarousel";
import {AuthContext} from "../firebase/AuthContext";
import {StoreContext} from "../firebase/StoreContext";
import useRestaurants from "../hooks/useRestaurants";
import useUserRestaurants from "../hooks/useUserRestaurants";
import {Restaurant} from "../interfaces";

const Card = (props: {title: string; href: string; text: string}) => (
	<a
		href={props.href}
		className="m-4 p-6 text-left no-underline rounded-xl max-w-xs border-gray-100 border-2 hover:text-blue-500 hover:border-blue-500 focus:text-blue-500 focus:border-blue-500 active:text-blue-500 active:border-blue-500">
		<h2 className="m-0 mb-4 text-2xl">{props.title} &rarr;</h2>
		<p className="m-0 text-xl">{props.text}</p>
	</a>
);

const Home: NextPage = () => {
	const {user} = useContext(AuthContext);
	const {restaurants, isLoading: isLoadingRestaurants} = useRestaurants();
	const {userRestaurants, isLoading: isUserRestaurantsLoading} = useUserRestaurants(user);

	useEffect(() => {
		console.log(user);
	}, [user]);

	useEffect(() => {
		console.log({userRestaurants});
	}, [userRestaurants]);

	const completeRestaurant = (restaurant: Restaurant) => {
		const userRestaurant = userRestaurants.find((item) => restaurant.id === item.restaurantID);
		return {...restaurant, qrCode: userRestaurant.qrCode, userAmount: userRestaurant.userAmount};
	};

	return (
		<div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100 relative">
			<Head>
				<title>Streaks</title>
				<meta name="description" content="Restaurant Rewards Platform" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="h-screen w-full md:w-5/12 flex flex-col items-center justify-center relative bg-white px-4 rounded-xl drop-shadow-xl">
				<div className="absolute top-8 left-0 px-8 w-full">
					<Header user={user} />
				</div>
				<RestaurantCarousel restaurants={restaurants.map(completeRestaurant)} />
			</main>
		</div>
	);
};

export default Home;
