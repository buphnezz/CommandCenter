export const GET_CHARACTERS = 'GET_CHARACTERS';
export const GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS_FAILURE = 'GET_CHARACTERS_FAILURE';

export const getCharacters = () => ({ type: GET_CHARACTERS });
export const getCharactersSuccess = characters => ({
    type: GET_CHARACTERS_SUCCESS,
    payload: characters,
});
export const getCharactersFailure = () => ({ type: GET_CHARACTERS_FAILURE });

export function fetchCharacters() {
    return async dispatch => {
        dispatch(getCharacters());

        try {
            const response = await fetch('http://localhost:3000/characters');
            const data = await response.json();

            dispatch(getCharactersSuccess(data));
        } catch (error) {
            dispatch(getCharactersFailure());
        }
    }
}
