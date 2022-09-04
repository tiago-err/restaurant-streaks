import {Restaurant} from "../../interfaces";
import QRCode from "react-qr-code";
import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

export interface Props extends Restaurant {
	userAmount: number;
	qrCode: string;
	onClick?: () => void;
}

export default function RestaurantCard(props: Props) {
	const [showQRCode, setShowQRCode] = useState(false);
	const [hasBeenClicked, setHasBeenClicked] = useState(false);

	useEffect(() => {
		if (showQRCode) setHasBeenClicked(true);
	}, [showQRCode]);

	const computeIndicatorColor = () => {
		return props.rewardAmount - props.userAmount === 0 ? "bg-success border-success" : "bg-primary border-primary";
	};

	return (
		<AnimatePresence>
			<motion.div className="indicator text-center" whileHover={{scale: 1.1}} whileTap={{scale: 0.8}} onClick={props.onClick}>
				{!showQRCode && (
					<div className="flex flex-col w-full">
						<span
							className={`indicator-item badge text-white font-semibold text-lg rounded-xl w-9 h-9 mr-2 mt-2 ${computeIndicatorColor()}`}>
							{props.rewardAmount - props.userAmount === 0 ? "!" : props.rewardAmount - props.userAmount}
						</span>
						<motion.div
							exit={{scale: 0, opacity: 0}}
							initial={{scale: 0.3, opacity: 0}}
							animate={{scale: 1, opacity: 1}}
							className="rounded-xl p-8 flex items-center justify-center w-48 h-32 drop-shadow-md"
							style={{color: props.color, backgroundColor: props.bgColor}}>
							<h2 className="font-bold text-xl">{props.name}</h2>
						</motion.div>
						{!hasBeenClicked && <span className="font-light italic text-sm">Click to show the QR Code</span>}
					</div>
				)}
				{showQRCode && (
					<motion.div
						exit={{scale: 0, opacity: 0}}
						initial={{scale: 0.3, opacity: 0}}
						animate={{scale: 1, opacity: 1}}
						className="h-32 w-48 flex items-center justify-center">
						<QRCode value={props.qrCode} size={128} title={props.name} level="H" />
					</motion.div>
				)}
			</motion.div>
		</AnimatePresence>
	);
}
