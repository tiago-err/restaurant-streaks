import {Firestore, getFirestore} from "firebase/firestore";
import React from "react";
import app from ".";

export const StoreContext = React.createContext({
	store: null,
} as {store: Firestore | null});

const StoreProvider = ({children}: {children: React.ReactElement}) => {
	return <StoreContext.Provider value={{store: getFirestore(app)}}>{children}</StoreContext.Provider>;
};

export default StoreProvider;
