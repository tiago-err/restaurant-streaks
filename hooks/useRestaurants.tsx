import {Firestore, getDocs, collection} from "firebase/firestore";
import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../firebase/StoreContext";
import {Restaurant} from "../interfaces";

export default function useRestaurants() {
	const {store} = useContext(StoreContext);
	const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getRestaurants = async () => {
			const querySnapshot = await getDocs(collection(store, "restaurants"));
			setRestaurants(querySnapshot.docs.map((doc) => ({id: doc.id, ...(doc.data() as Restaurant)})));
			setIsLoading(false);
		};

		getRestaurants();
	}, [store]);

	return {restaurants, isLoading};
}
