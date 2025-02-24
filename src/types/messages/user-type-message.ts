import { createContext } from "react";

export interface User {
  iduser: number;
  name_user: string;
  first_name: string;
  birthday: Date;
  photo_user: string;
  email: string;
}
export const UserContext = createContext<User | null>(null);
