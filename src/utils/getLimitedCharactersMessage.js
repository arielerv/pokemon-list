// eslint-disable-next-line max-len
const getLimitedCharactersMessage = (characters, isMinimum) => `Debe ingresar ${isMinimum ? 'mínimo' : 'máximo'} ${characters} caracteres.`;

export default getLimitedCharactersMessage;
