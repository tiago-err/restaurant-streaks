interface Props {
	text: string;
	type?: Type;
	onClick: () => void;
}

type Type = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | "ghost" | "link" | "outline" | "disabled";

export default function Button({text, type, onClick}: Props) {
	return (
		<button className={`btn btn-${type}`} onClick={onClick}>
			{text}
		</button>
	);
}
