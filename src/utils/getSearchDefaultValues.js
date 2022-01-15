const getSearchDefaultValues = (params) => params.reduce((acc, obj) => ({ ...acc, [obj.key]: obj.defaultValue }), {});

export default getSearchDefaultValues;
