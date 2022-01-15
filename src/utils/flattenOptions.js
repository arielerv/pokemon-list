import flatMap from 'lodash/flatMap';

const flattenSubOptions = (option) => (option.subOptions ? flatMap(option.subOptions, flattenSubOptions) : option);

const flattenOptions = (options) => flatMap(options, flattenSubOptions);

export default flattenOptions;
