export interface Room {
    id: number;
    name: string;
    descriptif: string;
    country: string;
    city: string;
    price: number;
    image1: string;
    image2: string;
    image3: string;
    isKingSize: boolean;
    nbBed: number;
    squarFeet: number;
    address: string;
    zipcode: number;
}

export interface RoomOUT {
    id: number;
    name: string;
    description: string;
    country: string;
    city: string;
    price: number;
    image1: string;
    image2?: string;
    image3?: string;
    createdAt: Date;
    isKingSize: boolean;
    nbBed: number;
    squarFeet: number;
    address?: string;
    zipCode: number;
    isPublished?: boolean;
    updatedAt?: Date;
    slug: string;
}
