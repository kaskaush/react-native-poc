import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';
import {Card, Text, CardItem, Body, H2} from 'native-base';

const TodoItem = ({id, title, description}) => {
  return (
    <TouchableOpacity key={id}>
      <Card>
        <CardItem header>
          <Text>
            <H2>{title}</H2>
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>{description}</Text>
          </Body>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

TodoItem.propTypes = {};

export default TodoItem;
