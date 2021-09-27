import styled from "styled-components";

export const BoxCharacters = styled.div`
    max-width: 1500px;
    width: 93%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const Card = styled.div`
    cursor: pointer;
    position: relative;
    width: 407px;
    height: 382px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 50px;
    transition: .5s;
    
    &:hover{
        transform: scale(1.05);
    }

    @media (max-width: 470px){
        width: 207px;
        height: 182px;
    }
`;

export const Molde = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
`;

export const BoxPerson = styled.figure`
    width: 50%;
    height: 70%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background: purple;
    display: flex;
    overflow: hidden;
`;

export const Person = styled.img`
    width: 130%;
`;  

export const Name = styled.p`
    position: absolute;
    bottom: 8px;
    z-index: 22;
    font-size: 20px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;

    @media (max-width: 470px){
        font-size: 12px;
        bottom: 11.5px;
        margin: 0;
    }
`;
