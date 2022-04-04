import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export interface UserState {
    username: string;
    token: string;
}

let token = null;

const ISSERVER = typeof window === 'undefined';
if (!ISSERVER) {
    const itemGot = localStorage.getItem('fireToken');
    itemGot ? (token = itemGot) : (token = null);
}

var initialState: UserState = {
    username: null,
    token: token,
};

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
