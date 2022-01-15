import isEmpty from 'lodash/isEmpty';

const getValuesOrDefault = (values, defaultValues) => {
    if (!values) {
        return null;
    }
    return Object.keys(defaultValues).reduce((acc, key) => {
        if (Array.isArray(values[key]) && isEmpty(values[key])) {
            return { ...acc, [key]: defaultValues[key] };
        }
        return { ...acc, [key]: values[key] || defaultValues[key] };
    }, {});
};

export default getValuesOrDefault;
