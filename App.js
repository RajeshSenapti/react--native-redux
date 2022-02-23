import React, {Component, useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Button, Text} from 'react-native';
import {connect} from 'react-redux';
import {changeCount} from './actions/counts';
import {bindActionCreators} from 'redux';
import configureStore from './store/configureStore';
import {CounterFunction} from './components/counter/counterFunction';
import Counter from './components/counter/counter';

function App() {
  return (
    <SafeAreaView>
      <View className="App">
        {/* <Counter /> */}

        <CounterFunction />
      </View>
    </SafeAreaView>
  );
}

export default App;
