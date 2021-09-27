import React, { useEffect, useState } from 'react';
import * as S from './styles';
import axios from 'axios';

//Components
import molde from '../../../images/molde_card.png'

const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getCharacters();
    }, [])

    const charactersAPI = axios.create({
        baseURL: "http://hp-api.herokuapp.com/api/characters"
    })

    const getCharacters = async () => {
        const response = await charactersAPI.get();
        setCharacters(response.data);
    }

    return (
        <S.BoxCharacters>
            {characters.map((item, index) => (
                <S.Card>
                    <S.Molde src={molde} />
                    <S.BoxPerson>
                        <S.Person src={item.image} />
                    </S.BoxPerson>
                    <S.Name>{item.name.split(' ').slice(0, -1).join(' ')}</S.Name>
                </S.Card>
            ))}
        </S.BoxCharacters>
    )
}

export default Characters;