import {getAuth, User} from "firebase/auth";
import React, {useEffect, useState} from "react";
import app from ".";

export const AuthContext = React.createContext({
	user: null,
} as {user: User | null});

const AuthProvider = ({children}: {children: React.ReactElement}) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const [pending, setPending] = useState(true);

	useEffect(() => {
		getAuth(app).onAuthStateChanged((user) => {
			setCurrentUser(user);
			setPending(false);
		});
	}, []);

	if (pending) {
		return <>Loading...</>;
	}

	return <AuthContext.Provider value={{user: currentUser}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
