export interface FavoriteOUT {
    status: number;
    id: number;
    itemName: string;
    itemUrl: string;
    itemImage: string;
    users: string[];
}

export interface NewFavorite {
    itemName: string;
    itemUrl: string;
    itemImage: string;
    users: string[];
}

export interface UpdateFavorite {
    users: string[];
}