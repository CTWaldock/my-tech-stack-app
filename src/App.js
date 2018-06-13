import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './Reducers';
import Header from './Components/Common/Header';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
        <Header headerText="My Tech Stack"/>
      </View>
    </Provider>
  );
};

export default App;
