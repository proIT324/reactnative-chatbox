import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import { View } from 'react-native';
import { Comments } from './src/containers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Comments />
      </View>
    </Provider>
  );
};

export default App;
