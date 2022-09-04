export interface Restaurant {
	id: string;
	name: string;
	color: string;
	bgColor: string;
	rewardAmount: number;
}

export interface UserRestaurant {
	id: string;
	restaurantID: string;
	userID: string;
	qrCode: string;
	userAmount: number;
}

export interface CompleteRestaurant extends Restaurant {
	qrCode: string;
	userAmount: number;
}
