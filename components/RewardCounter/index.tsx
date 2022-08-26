import translations, {COLORS} from "../../public/shared/colors";
import {mdiCheckboxMarkedOutline, mdiCheckboxBlankOutline, mdiCheckboxBlankBadgeOutline} from "@mdi/js";
import {Icon} from "@mdi/react";
import {motion} from "framer-motion";

interface Props {
	restaurantColor: string;
	rewardAmount: number;
	userAmount: number;
}

export default function RewardCounter(props: Props) {
	return (
		<div className="grid grid-cols-5 place-items-center w-full gap-6">
			{[...Array(props.rewardAmount)].map((_, index) => (
				<motion.div animate={{scale: 1, opacity: 1}} initial={{scale: 0, opacity: 0}} transition={{duration: 0.15 * (index + 1)}} key={index}>
					<Icon
						color={props.restaurantColor}
						size={2}
						path={
							props.userAmount > index
								? mdiCheckboxMarkedOutline
								: index === props.rewardAmount - 1
								? mdiCheckboxBlankBadgeOutline
								: mdiCheckboxBlankOutline
						}
					/>
				</motion.div>
			))}
		</div>
	);
}
