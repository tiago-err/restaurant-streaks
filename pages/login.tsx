import {getAuth, GoogleAuthProvider} from "firebase/auth";
import Head from "next/head";
import Router from "next/router";
import {useContext, useEffect} from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase";
import {AuthContext} from "../firebase/AuthContext";

const uiConfig = {
	// Popup signin flow rather than redirect flow.
	signInFlow: "popup",
	// Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
	signInSuccessUrl: "/",
	// We will display Google and Facebook as auth providers.
	signInOptions: [GoogleAuthProvider.PROVIDER_ID],
};

export default function Login() {
	const {user} = useContext(AuthContext);

	useEffect(() => {
		if (user) Router.push("/");
	}, [user]);

	return (
		<div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-700 relative">
			<Head>
				<title>Streaks | Login</title>
				<meta name="description" content="Restaurant Rewards Platform" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 className="font-bold text-3xl absolute top-48">Streaks</h1>
			<p>Please sign-in:</p>
			<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={getAuth(firebase)} />
		</div>
	);
}
