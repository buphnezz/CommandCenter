import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions/characterActions';

const CharacterDirectory = ({ dispatch, loading, characters, hasErrors }) => {
    useEffect(() => {
        dispatch(fetchCharacters())
    }, [dispatch])

    const renderCharacters = () => {
        if (loading) return <p>Loading characters...</p>
        if (hasErrors) return <p>Unable to display characters.</p>
        return characters.map(character => <p key={character.id}>{character.name}</p>)
    }

    return (
        <div>
            <h1>Character Directory</h1>
            {renderCharacters()}
        </div>
    )
}

const mapStateToProps = state => ({
    loading: state.characters.loading,
    characters: state.characters.characters,
    hasErrors: state.characters.hasErrors,
})

export default connect(mapStateToProps)(CharacterDirectory);
