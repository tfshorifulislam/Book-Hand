export type User = {
    id: string;
    name: string;
    email: string;
    image?: string | null;
};

export type UserState = {
    user: User | null;
    pending: boolean;
};

export const initialState: UserState = {
    user: null,
    pending: true,
};