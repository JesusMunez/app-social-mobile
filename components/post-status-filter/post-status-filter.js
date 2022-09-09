import React from "react";
import { TextInput, View, Button } from 'react-native';
import styled from 'styled-components/native';


const PostStatusFilter = ({filter, onFilterSelect}) => {    
    let colorBtn = '';
    const buttons = [
                {name: 'all', label: 'Все'},
                {name: 'like', label: 'Понравилось'}
            ]
   
    const buttonsView = buttons.map(({name, label}) => {
        const active = filter === name;

        if (active) colorBtn = '#1E90FF'
        else colorBtn = '#aeaeae';        

        return (
            <Button 
                key={name} 
                title={label}
                color={colorBtn}
                onPress={ () => onFilterSelect(name)}/>
        )
    })
    return (
        <ButtonsView>
            {buttonsView}
        </ButtonsView>
    )   
}

export default PostStatusFilter;

const ButtonsView = styled.View`
    flex-direction: row;
`;