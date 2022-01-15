import isBoolean from 'lodash/isBoolean';
import mapValues from 'lodash/mapValues';
import trim from 'lodash/trim';

const buildQueryString = (searchParams) => {
    const params = new URLSearchParams();
    mapValues(searchParams, (value, key) => {
        if (value || isBoolean(value)) {
            params.set(key, key === 'term' ? encodeURIComponent(trim(value)) : value);
        }
    });
    return `?${params.toString()}`;
};

export default buildQueryString;
