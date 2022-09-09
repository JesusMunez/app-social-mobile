import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTrashCan, faHeart} from '@fortawesome/free-solid-svg-icons'
import { TextInput, View, Text, Pressable } from 'react-native';
import styled from 'styled-components/native'


const PostListItem = function({label, onDelete, onToggleLiked, like}) {
    if (like) {
        IconHeart.color = 'red'
    }  else IconHeart.color = '#aeaeae';

    return (
        <PostView>            
            <PostText>
                {label}
            </PostText>
            <IconsWrapper>
                <Pressable
                onPress={onToggleLiked}>
                    <FontAwesomeIcon icon={ faHeart } color={IconHeart.color} size={21}/>  
                </Pressable> 
                <Pressable                    
                onPress={onDelete}>
                    <FontAwesomeIcon icon={ faTrashCan } color={'red'} size={21} />
                </Pressable>                                 
            </IconsWrapper>
        </PostView>
    )    
}

export default PostListItem;

const PostView = styled.View`
    justify-content: space-between;
    flex-direction: row;
    padding: 20px;
    background-color: #fff;
    margin-top: 10px;
    border-radius: 20px;
`;

const IconsWrapper = styled.View`
    width: 18%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;

const PostText = styled.Text`
    width: 80%;
    font-size: 18px;    
    line-height: 35px;    
    user-select: none;
    transition: 0.5s all;
`;

const IconHeart = styled.View`
    /* color: #aeaeae; */
`;