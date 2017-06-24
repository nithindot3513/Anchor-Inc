import React, { Component } from 'react';
import { setCustomText } from 'react-native-global-props';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import MainScreen from './components/screens/MainScreen';
import reducers from './reducers';

const customTextProps = {
  style: {
    fontFamily: 'avenir_book',
  },
};

setCustomText(customTextProps);

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    firebase.initializeApp({
        apiKey: 'AIzaSyBJlKq6rsEVUQlaJOrFYKJc15HLWpHjMII',
        authDomain: 'anchorapp-feed3.firebaseapp.com',
        databaseURL: 'https://anchorapp-feed3.firebaseio.com',
        projectId: 'anchorapp-feed3',
        storageBucket: 'anchorapp-feed3.appspot.com',
        messagingSenderId: '489771714033',
    });
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <MainScreen />
      </Provider>
    );
  }
}

export default App;
