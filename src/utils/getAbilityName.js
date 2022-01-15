const getAbilityName = (ability) => {
    const language = process.env.REACT_APP_LANGUAGE;
    return ability.names.find((name) => name.language.name === language)?.name;
};

export default getAbilityName;
