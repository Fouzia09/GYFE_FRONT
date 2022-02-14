import { CommentOUT } from "./comment";
import { FavoriteOUTFromUserOUT } from "./favorite";
import { RestaurantOUT } from "./restaurant";
import { RoomOUT } from "./room";

export interface User{
  id?: number,
  email: string,
  roles: [],
  name: string,
  plainPassword: string,
  username: string
}
export interface UserToken{
  roles: string[],
  username: string,
  email: string,
  exp: number,
  iat: number
}

export interface UserOUT {
  id: number;
  username: string;
  name: string;
  email: string;
  siret: string;
  roles: string[];
  createdAt: Date;
  favorites?: FavoriteOUTFromUserOUT[];
  comments?: CommentOUT[];
  restaurants?: RestaurantOUT[];
  rooms?: RoomOUT[];
}
