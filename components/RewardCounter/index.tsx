import translations, {COLORS} from "../../public/shared/colors";

interface Props {
	color: COLORS;
	total: number;
	current: number;
}

export default function RewardCounter({total, current, color}: Props) {
	return (
		<span className="font-semibold">
			Just{" "}
			<span className={`${translations[color].text} font-bold text-xl`}>
				{total - current} more meal{total - current > 1 && "s"}
			</span>{" "}
			to receive your reward!
		</span>
	);
}
