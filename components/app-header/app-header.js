import React from "react";
import { Text, View } from 'react-native';
import styled from 'styled-components/native';


const AppHeader = ({allLike, allPost}) => {
    let note = 'записей';
    if (allPost === 2 || allPost === 3 || allPost === 4) {
        note = 'записи'
    }
    else if (allPost === 1) note = 'запись';
    return (
        <Header>
            <NameText>Andrew Avdyukov</NameText>
            <CountText>{allPost} {note}, из них понравилось {allLike}</CountText>
        </Header>
    )
}

export default AppHeader;

const Header = styled.View`
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 15px;
`;

const NameText = styled.Text`
    font-size: 17px;
    margin-left: 2px;
    color: #3c4560;
    font-weight: 500;
`;

const CountText = styled.Text`
    font-size: 15px;
    color: #b8bece;
    font-weight: 500;
    width: 140px;
`;