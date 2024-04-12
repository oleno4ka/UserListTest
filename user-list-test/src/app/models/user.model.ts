import { UserType } from "./user-type.enum";

export class User {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    user_type: UserType;
}