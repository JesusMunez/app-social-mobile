import React from "react";
import { StyleSheet, TextInput, View, Button } from 'react-native';
import styled from 'styled-components/native';

// import '../post-add-form/post-add-form.css'

const PostAddForm = (props) => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         text: ''
    //     }
    //     // this.valueChange = this.valueChange.bind(this);
    //     // this.onSubmit = this.onSubmit.bind(this);
    // }
    const [value, setValue] = React.useState('');    

    function onPress() {        
        if (value !== '') {            
            props.onAdd(value);
            setValue('')
        }        
    }
    
    console.log(value);        

    return (
        <AddView
            className="bottom-panel d-flex">
            <AddInput
                value= {value}
                placeholder="О чем вы думаете?"                
                onChangeText={(text) => setValue(text)}
                // value={this.state.text}
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