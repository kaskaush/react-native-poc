import React, {Fragment, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Modal,
  TouchableHighlight,
} from 'react-native';

const TodoContainer = props => {
  const [counter, setCounter] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const resetCounter = () => {
    if (counter > 0) {
      setCounter(0);
      toggleModal();
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <Fragment>
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.counterDisplay}>{counter}</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Button onPress={incrementCounter} title={'Click me!'} />
        </View>
        <View style={styles.resetCounterStyle}>
          <Button onPress={resetCounter} title={'Reset'} />
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={showModal}
        onRequestClose={toggleModal}>
        <View>
          <Text>Counter reset!</Text>
          <TouchableHighlight onPress={toggleModal}>
            <Text>Hide Modal</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#000',
    display: 'flex',
    position: 'relative',
  },
  sectionContainer: {
    display: 'flex',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  highlight: {
    fontWeight: '700',
  },
  counterDisplay: {color: '#fff'},
  stickyHeader: {
    backgroundColor: '#464646',
    color: '#fff',
    paddingTop: 8,
    paddingLeft: 6,
    paddingBottom: 8,
    top: 0,
    left: 0,
    position: 'absolute',
  },
  resetCounterStyle: {
    display: 'flex',
    marginTop: 20,
    paddingHorizontal: 24,
  },
});

TodoContainer.propTypes = {};

export default TodoContainer;
