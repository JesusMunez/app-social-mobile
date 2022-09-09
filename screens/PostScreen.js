import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import styled from "styled-components";

const PostScreen = function({route}) {
    const {label} = route.params;
    // console.log(route);
    return (
        <PostView>
            <PostText>{label}</PostText>            
        </PostView>
    )
}

export default PostScreen;

const PostView = styled.View`
    flex: 1;
    padding: 10px;
`;

const PostText = styled.Text`
    font-size: 17px;
`;