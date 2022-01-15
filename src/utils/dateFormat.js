import { isDate } from 'lodash';

const LOCALE = 'es-AR';

export const convertToDate = (input) => {
    if (!input) {
        return null;
    }
    if (!isDate(new Date(input))) {
        return null;
    }
    return new Date(input);
};

export const formattedDateTime = (input) => {
    if (!input) {
        return null;
    }
    const newDate = convertToDate(input);
    if (!isDate(newDate)) {
        return null;
    }
    return newDate.toISOString().slice(0, 19).replace('T', ' ');
};

export const formattedDate = (input) => {
    if (!input) {
        return null;
    }
    const date = convertToDate(input);
    if (!isDate(date)) {
        return null;
    }
    return date.toLocaleDateString(LOCALE);
};
