const TOKEN_KEY = 'id_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const USER_KEY = 'user';

export const getToken = () => localStorage.getItem(TOKEN_KEY) || '';

export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY) || '';

export const setRefreshToken = (refreshToken) => localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);

export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token);

export const setUser = (user) => localStorage.setItem(USER_KEY, JSON.stringify(user));

export const getUser = () => {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : {};
};

export const removeTokens = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
};
