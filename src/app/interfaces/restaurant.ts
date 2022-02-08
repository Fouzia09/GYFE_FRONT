export interface Restaurant{
  id?: number,
  name: string,
  descriptif: string,
  country: string,
  city: string,
  namePlat: string,
  descriptifPlat: string,
  price: 0,
  image1: string,
  image2: string,
  image3: string,
  descriptifPlat2: string,
  descriptifPlat3: string,
  rangePrice2: number,
  rangePrice1: number,
  address: string,
  zipcode: number
}

export interface RestaurantOUT {
  id: number;
  name: string;
  description: string;
  country: string;
  city: string;
  dishName: string;
  price: number;
  image1: string;
  image2?: string;
  image3?: string;
  createdAt: Date;
  dishDescription: string;
  dishDescription2?: string;
  dishDescription3?: string;
  rangePrice1: number;
  rangePrice2: number;
  address: string;
  zipCode?: number;
  isPublished?: boolean;
  updatedAt?: Date;
  slug: string;
}
