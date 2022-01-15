const DATA = 'DATA';

export const getData = () => {
    const data = localStorage.getItem(DATA) || '';
    return data ? JSON.parse(data) : {};
};

export const setData = (data) => localStorage.setItem(DATA, JSON.stringify(data));

export const setKeyData = (key, data) => localStorage.setItem(key, JSON.stringify(data));
