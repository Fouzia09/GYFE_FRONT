export interface FavoriteOUTFromUserOUT {
    id: number;
    itemName: string;
    itemUrl: string;
    itemImage: string;
}

export interface FavoriteOUT {
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