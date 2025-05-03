export interface User {
  id: number;
  firstName: string;
  name: string;
  age: number;
  email: string;
  address: any;
  city: string;
  phone: number;
}

export interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}
