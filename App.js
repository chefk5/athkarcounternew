import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/Store';
import Test from './Test';

export default function App() {
  return (
    <View>
      <Text>hello new</Text>
    </View>
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //     <Test />
    //   </PersistGate>
    // </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
