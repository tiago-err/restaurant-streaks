import {getAuth, GoogleAuthProvider} from "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../firebase";

const uiConfig = {
	// Popup signin flow rather than redirect flow.
	signInFlow: "popup",
	// Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
	signInSuccessUrl: "/",
	// We will display Google and Facebook as auth providers.
	signInOptions: [GoogleAuthProvider.PROVIDER_ID],
};

export default function Login() {
	return (
		<div>
			<h1>My App</h1>
			<p>Please sign-in:</p>
			<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={getAuth(firebase)} />
		</div>
	);
}
