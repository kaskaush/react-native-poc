/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import TodoContainer from './src/components/TodoContainer/TodoContainer';

const App = () => {
  return (
    <Fragment>
      <StatusBar />
      <SafeAreaView style={{flex: 1, backgroundColor: '#000'}}>
        <TodoContainer />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
