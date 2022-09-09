import React from "react";
import { TextInput, View } from 'react-native';
import styled from 'styled-components/native';


const SearchPanel = ({updateSearch}) => {   
    const [search, setSearch] = React.useState('')

    function onUpdateSearch(text) {
        const search = text;
        setSearch({search});
        updateSearch(search);        
    }
    
    return (
        <SearchInput            
            // value={value}
            placeholder="Поиск по записям"
            onChangeText={(text) => onUpdateSearch(text)}
        />
    )
    
}

export default SearchPanel;

const SearchInput = styled.TextInput`
    /* flex-grow: 1; */
    width: 53%;
    margin-right: 4px;
    padding-left: 4px;
    background-color: #fff;
`;