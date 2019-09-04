import React, {Fragment, useState, useEffect} from 'react';
import {StyleSheet, View, Modal, FlatList} from 'react-native';
import {
  Button,
  Text,
  Container,
  Header,
  Left,
  Body,
  Title,
  Right,
  Icon,
  Fab,
} from 'native-base';
import TodoItem from '../TodoItem/TodoItem';
import AddTodo from '../AddTodo/AddTodo';

const TodoContainer = props => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const todos = [
      {
        id: '1',
        title: 'first todo',
        description: 'hello',
      },
      {
        id: '2',
        title: 'second todo',
        description: 'world',
      },
      {
        id: '3',
        title: 'second todo',
        description: 'world',
      },
      {
        id: '4',
        title: 'second todo',
        description: 'world',
      },
      {
        id: '5',
        title: 'second todo',
        description: 'world',
      },
      {
        id: '6',
        title: 'second todo',
        description: 'world',
      },
      {
        id: '7',
        title: 'second todo',
        description: 'world',
      },
      {
        id: '8',
        title: 'second todo',
        description: 'world',
      },
    ];
    setTodoList(todos);
  }, []);

  return (
    <Fragment>
      <Header noLeft>
        <Left />
        <Body>
          <Title>Todo App</Title>
        </Body>
        <Right />
      </Header>
      <Container style={styles.body}>
        <FlatList
          data={todoList}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TodoItem
              key={item.id}
              title={item.title}
              description={item.description}
            />
          )}
          keyExtractor={item => item.id}
        />
        <Fab position="bottomRight" onPress={toggleModal}>
          <Icon name="add" type="MaterialIcons" />
        </Fab>
      </Container>
      <Modal
        animationType="fade"
        transparent={false}
        visible={showModal}
        onRequestClose={toggleModal}>
        <AddTodo />
      </Modal>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#eee',
    position: 'relative',
    paddingLeft: 8,
    paddingRight: 8,
  },
  addButtonStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 10,
    borderRadius: 50,
  },
});

TodoContainer.propTypes = {};

export default TodoContainer;
