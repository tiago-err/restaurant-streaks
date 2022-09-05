import {Restaurant} from "../../interfaces";
import {AnimatePresence, motion} from "framer-motion";

export interface Props extends Restaurant {
	userAmount: number;
	onClick?: () => void;
}

export default function RestaurantCard(props: Props) {
	const computeIndicatorColor = () => {
		switch (props.rewardAmount - props.userAmount) {
			case 0:
				return "bg-success border-success";
			case 1:
				return "bg-amber-500 border-amber-500";
			default:
				return "bg-info border-info";
		}
	};

	return (
		<AnimatePresence>
			<motion.div className="indicator text-center" whileHover={{scale: 1.1}} whileTap={{scale: 0.8}} onClick={props.onClick}>
				<span
					className={`indicator-item badge text-white font-semibold text-lg rounded-xl w-9 h-9 mr-2 mt-2 drop-shadow-[0_0_0.75rem_rgba(0,0,0,0.25)] ${computeIndicatorColor()}`}>
					{props.rewardAmount - props.userAmount === 0 ? "!" : props.rewardAmount - props.userAmount}
				</span>
				<motion.div
					exit={{scale: 0, opacity: 0}}
					initial={{scale: 0.3, opacity: 0}}
					animate={{scale: 1, opacity: 1}}
					className="rounded-xl p-8 flex items-center justify-center w-44 h-28 drop-shadow-xl"
					style={{color: props.color, backgroundColor: props.bgColor}}>
					<h2 className="font-bold text-xl drop-shadow-2xl">{props.name}</h2>
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}
