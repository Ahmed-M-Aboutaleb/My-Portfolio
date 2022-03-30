import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    username: string;
    token: string;
}

var initialState: UserState = {
    username: null,
    token: null,
};

const ISSERVER = typeof window === 'undefined';
if (!ISSERVER) {
    if (localStorage.getItem('fireToken')) {
        initialState = {
            username: null,
            token: localStorage.getItem('fireToken'),
        };
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: {
            reducer: (state, action: PayloadAction<UserState>) => {
                state = action.payload;
            },
            prepare: (username?: string, token?: string) => ({
                payload: { username: username || null, token: token || null },
            }),
        },
    },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
