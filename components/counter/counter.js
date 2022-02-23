import React, {Component, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Button, Text} from 'react-native';
import {store} from '../../store/store';
import {countReducer} from '../../reducers/countReducer';
import {increment, decrement} from '../../actions/counts';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  componentDidMount() {
    this.updateCounter();
    store.subscribe(() => this.updateCounter.bind(this));
  }

  updateCounter() {
    const state = store.getState();
    console.log(state);
    this.setState({count: state.count});
  }

  onIncrement() {
    store.dispatch(increment());
    console.log(this.state.count);
  }
  onDecrement() {
    store.dispatch(decrement());
    console.log(this.state.count);
  }
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>Counter Component</Text>
          <Text>{this.state.count}</Text>
        </View>
        <Button title="Increment" onPress={this.onIncrement()} />
        <Button title="Decrement" onPress={this.onDecrement()} />
      </SafeAreaView>
    );
  }
}
