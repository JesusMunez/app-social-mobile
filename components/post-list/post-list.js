import React from "react";
import { TextInput, View, FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'

import PostListItem from "../post-list-item/post-list-item"


const PostList = ({posts, onDelete, onToggleLiked, navigation}) => {

    // const elements = posts.map((item) => {
    //     return (
    //         <View key = {item.id}>
    //             <PostListItem 
    //                 label = {item.label}                    
    //                 like = {item.like} 
    //                 onDelete = { () => onDelete(item.id)}                    
    //                 onToggleLiked = { () => onToggleLiked(item.id)} />
    //         </View>
    //     )
    // })

    // return (        
    //     <PostView>
    //         {elements}
    //     </PostView>
    // )

    return (
        <FlatListPosts
            data={posts}
            renderItem={({item}) => (                
                <View key = {item.id}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Post', { label: item.label})}>
                        <PostListItem 
                            label = {item.label}                    
                            like = {item.like} 
                            onDelete = { () => onDelete(item.id)}                    
                            onToggleLiked = { () => onToggleLiked(item.id)} />
                    </TouchableOpacity>                    
                </View> 
            )}/>
    )
}

export default PostList;

const FlatListPosts = styled.FlatList`    
    margin-top: 16px;
`;