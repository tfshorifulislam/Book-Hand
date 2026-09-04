export type User = {
  id: string;
  name: string;
  email: string;
  image?: string | null;
};

export type UserState = {
  user: User | null;
};

export const initialState: UserState = {
  user: null,
};