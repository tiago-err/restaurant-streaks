export enum COLORS {
	"blue" = "blue",
	"red" = "red",
}
type Translation = {
	[key in COLORS]: {
		background: string;
		text: string;
	};
};

const translations: Translation = {
	[COLORS.blue]: {
		background: "bg-blue-500",
		text: "text-blue-500",
	},
	[COLORS.red]: {
		background: "bg-red-500",
		text: "text-red-500",
	},
};

export default translations;
