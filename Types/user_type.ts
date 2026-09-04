export type User = {
  id: string;
  name: string;
  image?: string | null;
};

export type UserState = {
  user: User | null;
};

export const initialState: UserState = {
  user: null,
};