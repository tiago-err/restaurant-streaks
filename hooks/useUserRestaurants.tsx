import {User} from "firebase/auth";
import {Firestore, getDocs, collection, query, where} from "firebase/firestore";
import {useContext, useEffect, useState} from "react";
import {StoreContext} from "../firebase/StoreContext";
import {Restaurant, UserRestaurant} from "../interfaces";

export default function useUserRestaurants(props: User) {
	const {store} = useContext(StoreContext);
	const [userRestaurants, setUserRestaurants] = useState<UserRestaurant[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const getRestaurants = async () => {
			const userRestaurantsRef = collection(store, "restaurant_users");
			const q = query(userRestaurantsRef, where("userID", "==", props.uid));
			const querySnapshot = await getDocs(q);
			setUserRestaurants(querySnapshot.docs.map((doc) => ({id: doc.id, ...(doc.data() as UserRestaurant)})));
			setIsLoading(false);
		};

		getRestaurants();
	}, [store, props]);

	return {userRestaurants, isLoading};
}
