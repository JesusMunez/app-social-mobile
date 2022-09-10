import React from "react";
import { StyleSheet, TextInput, View, Button } from 'react-native';
import styled from 'styled-components/native';


const PostAddForm = (props) => {    
    const [value, setValue] = React.useState('');    

    function onPress() {        
        if (value !== '') {            
            props.onAdd(value);
            setValue('')
        }        
    }
    
    console.log(value);        

    return (
        <AddView>
            <AddInput
                value= {value}
                placeholder="О чем вы думаете?"                
                onChangeText={(text) => setValue(text)}                
            />
            <Button
                title="Добавить"                    
                color='#1E90FF'
                onPress={onPress}                    
            />
        </AddView>
    )
    
}

export default PostAddForm;

const AddView = styled.View`
    margin-top: 20px;
    flex-direction: row;
`;

const AddInput = styled.TextInput`
    /* flex-grow: 1; */
    width: 73%;    
    margin-right: 4px;
    padding-left: 4px;
    background-color: #fff;
`;