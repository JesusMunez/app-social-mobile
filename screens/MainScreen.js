import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import axios from 'axios';
import styled from 'styled-components/native'

import AppHeader from '../components/app-header/app-header';
import PostAddForm from '../components/post-add-form/post-add-form';
import PostList from '../components/post-list/post-list';
import SearchPanel from '../components/search-panel/search-panel';
import PostStatusFilter from '../components/post-status-filter/post-status-filter';

const MainScreen = function({ navigation }) {
  const [items, setItems] = React.useState([]);
  // const [maxId, setMaxId] = React.useState(items.length + 1);
  const [filter, setFilter] = React.useState('all');
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    axios
      .get('https://63109dc536e6a2a04ef2ffee.mockapi.io/POSTTSS')
      .then(({data}) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        alert('Не удалось получить данные');
      })
  }, [])

  console.log(items);
  // console.log(maxId);
  const allLike = items.filter(item => item.like).length;
  const allPost = items.length;

  function addItem(text) {
    const newItem = {
        label: text,
        important: false,
        like: false,
        id: Date.now().toString()
        // id: maxId.toString()
    }
    setItems((prevItems) => {
        const newArr = [...prevItems, newItem];
        return (
            newArr
        )
    })
    // setMaxId(prev => prev + 1);
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      const index = prevItems.findIndex(elem => elem.id === id);

      const before = prevItems.slice(0, index);
      const after = prevItems.slice(index + 1);

      const newArr = [...before, ...after];

      console.log(prevItems);

      return (
        newArr
      )
    })
  }

  function onToggleLiked(id) {
    setItems((prevItems) => {
      const index = prevItems.findIndex(elem => elem.id === id);

      const old = prevItems[index];
      const newItem = {...old, like: !old.like};

      const newArr = [...prevItems.slice(0, index), newItem, ...prevItems.slice(index + 1)];

      return (
        newArr
      )
    }) 
  }

  function onFilterSelect(filter) {
    setFilter(filter)
  }

  function searchPost(items, search) {
    if (search.length === 0) {
        return items
    }

    return items.filter((item) => {
        return item.label.indexOf(search) > -1
    })
  }

  function filterPost(items, filter) {
    if (filter === 'like') {
        return items.filter(item => item.like)
    } else {
        return items
    }
  }

  function updateSearch(search) {
      setSearch(search)
  }

  const visiblePosts = filterPost(searchPost(items, search), filter);

  return (    
    <View style={styles.container}>
      {/* <StatusBar theme="auto"/> */}
      <AppHeader 
        allLike = {allLike}
        allPost = {allPost}
        />
      <WrapperView>
        <SearchPanel
          updateSearch={updateSearch}/>
        <PostStatusFilter
          filter = {filter}
          onFilterSelect = {onFilterSelect}/>
      </WrapperView>
      <PostAddForm
        onAdd = {addItem}/>
      <PostList
        posts = {visiblePosts}
        onDelete = {deleteItem}
        onToggleLiked = {onToggleLiked}
        navigation = {navigation} />
    </View>    
  );  
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    paddingHorizontal: 3,
    paddingTop: 10,
    backgroundColor: 'aliceblue',    
  },
});

const WrapperView = styled.View`
  flex-direction: row;
`;