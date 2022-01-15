const getStatName = (stats, statName) => {
    const language = process.env.REACT_APP_LANGUAGE;

    const stat = stats.filter((s) => s.name === statName?.name);
    if (stat[0]) {
        return stat[0].names?.find((name) => name.language.name === language)?.name || '';
    }
    return '';
};

export default getStatName;
