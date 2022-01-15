const getTypesOptions = (types) => {
    const language = process.env.REACT_APP_LANGUAGE;
    if (types) {
        return types.map((t) => ({
            value: t.name,
            label: t.names.find((name) => name.language.name === language)?.name,
        }));
    }
    return [];
};

export default getTypesOptions;
