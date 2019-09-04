import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {
  Container,
  Form,
  Input,
  Item,
  Content,
  Textarea,
  Button,
  Text,
  Header,
  Left,
  Body,
  Right,
  Title,
  Icon,
  Label,
  H3,
} from 'native-base';

const AddTodo = props => {
  return (
    <Fragment>
      <Header>
        <Left>
          <Button transparent>
            <Icon type="MaterialIcons" name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Todo App</Title>
        </Body>
        <Right />
      </Header>
      <Container style={styles.addTodoWrapper}>
        <Content padder enableAutomaticScroll style={{flex: 1}}>
          <Form>
            <Item floatingLabel>
              <Label>Title</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Note</Label>
              <Textarea multiline rowSpan={5} />
            </Item>
          </Form>
        </Content>
        <Button full style={styles.addButton} large>
          <Text>
            <H3 style={{color: '#fff'}}>Add</H3>
          </Text>
        </Button>
      </Container>
    </Fragment>
  );
};

AddTodo.propTypes = {};

const styles = StyleSheet.create({
  addTodoWrapper: {
    paddingTop: 10,
    backgroundColor: '#eee',
  },
  addButton: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default AddTodo;
