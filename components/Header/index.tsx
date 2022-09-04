import {User} from "firebase/auth";
import Image from "next/image";

export default function Header({user}: {user: User}) {
	return (
		<div className="h-full w-full relative">
			<h1 className="font-bold text-4xl">Hello, {user.displayName.split(" ")[0]}!</h1>
			<h2 className="font-semibold text-3xl">Where will you eat today?</h2>
		</div>
	);
}
