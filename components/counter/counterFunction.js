import React, {useEffect, useState} from 'react';
import {store} from '../../store/store';
import {increment, decrement} from '../../actions/counts';

import {SafeAreaView, StyleSheet, View, Button, Text} from 'react-native';

export function CounterFunction(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    updateState();
    store.subscribe(updateState);
  }, []);

  function updateState() {
    const state = store.getState();
    setCount(state.count);
  }
  function onIncrement() {
    store.dispatch(increment());
  }

  function onDecrement() {
    store.dispatch(decrement());
  }
  return (
    <SafeAreaView>
      <Text>Counter Function</Text>
      <Text>{count}</Text>
      <Button onPress={onIncrement} title="Increment"></Button>
      <Button onPress={onDecrement} title="Decrement"></Button>
    </SafeAreaView>
  );
}
