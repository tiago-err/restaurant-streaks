import type {NextPage} from "next";
import Head from "next/head";
import Router from "next/router";
import {Fragment, useContext, useEffect, useState} from "react";
import Header from "../components/Header";
import RestaurantCard from "../components/RestaurantCard";
import {AuthContext} from "../firebase/AuthContext";
import useRestaurants from "../hooks/useRestaurants";
import useUserRestaurants from "../hooks/useUserRestaurants";
import {CompleteRestaurant, Restaurant} from "../interfaces";
import {Transition} from "@headlessui/react";
import QrCodeModal from "../components/QrCodeModal";

const Home: NextPage = () => {
	const {user} = useContext(AuthContext);
	const {restaurants, isLoading: isLoadingRestaurants} = useRestaurants();
	const {userRestaurants, isLoading: isUserRestaurantsLoading} = useUserRestaurants(user);
	const [selectedRestaurant, selectRestaurant] = useState<CompleteRestaurant | undefined>(undefined);
	const [qrModalOpen, setQrModalOpen] = useState(false);

	useEffect(() => {
		if (!user) Router.push("/login");
	}, [user]);

	useEffect(() => {
		if (!qrModalOpen) setTimeout(() => selectRestaurant(undefined), 300);
	}, [qrModalOpen]);

	const completeRestaurant = (restaurant: Restaurant): CompleteRestaurant => {
		const userRestaurant = getUserRestaurantFromRestaurantID(restaurant.id);
		return {...restaurant, qrCode: userRestaurant?.qrCode || "", userAmount: userRestaurant?.userAmount || 0};
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

			<main className="h-screen w-full lg:w-5/12 flex flex-col items-center justify-center bg-white dark:bg-gray-800 lg:rounded-xl">
				<div className="p-8 w-full mb-4">
					<Header user={user} />
				</div>
				<div className="mt-4 h-full w-full grid grid-cols-2 place-content-start place-items-center px-1">
					{restaurants &&
						userRestaurants &&
						restaurants.map(completeRestaurant).map((restaurant) => (
							<RestaurantCard
								key={restaurant.id}
								{...restaurant}
								onClick={() => {
									selectRestaurant(restaurant);
									setQrModalOpen(true);
								}}
							/>
						))}
				</div>
				<QrCodeModal isOpen={qrModalOpen} onClose={() => setQrModalOpen(false)} qrCode={selectedRestaurant?.qrCode || "qrCode"} />
			</main>

			<footer className="w-full bg-white">
				<div className="border-t-2 border-gray-200 mx-4 p-4 h-full flex items-center justify-center">
					<span className="font-thin text-xs">Developed by Tiago Ribeiro</span>
				</div>
			</footer>
		</div>
	);
};

export default Home;
