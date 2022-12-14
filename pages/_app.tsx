import "../styles/globals.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type {AppProps} from "next/app";
import AuthProvider from "../firebase/AuthContext";
import StoreProvider from "../firebase/StoreContext";

function MyApp({Component, pageProps}: AppProps) {
	return (
		<AuthProvider>
			<StoreProvider>
				<Component {...pageProps} />
			</StoreProvider>
		</AuthProvider>
	);
}

export default MyApp;
