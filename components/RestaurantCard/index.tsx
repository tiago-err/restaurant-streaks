import {Restaurant} from "../../interfaces";

interface Props extends Restaurant {
	userAmount: number;
}

export default function RestaurantCard(props: Props) {
	const computeIndicatorColor = () => {
		return props.rewardAmount - props.userAmount === 0 ? "bg-success border-success" : "bg-primary border-primary";
	};

	return (
		<div className="indicator hover:scale-110 text-center">
			<span className={`indicator-item badge text-white font-semibold text-lg rounded-xl w-9 h-9 mr-2 mt-2 ${computeIndicatorColor()}`}>
				{props.rewardAmount - props.userAmount === 0 ? "!" : props.rewardAmount - props.userAmount}
			</span>
			<div className="rounded-xl p-8 flex items-center justify-center w-48 h-32" style={{color: props.color, backgroundColor: props.bgColor}}>
				<h2 className="font-bold text-xl">{props.name}</h2>
			</div>
		</div>
	);
}
