import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import TransactionScreen from './Screens/TransactionScreen'
import SearchScreen from './Screens/SearchScreen'
export default class App extends Component {
  render(){
  return (
    <View>
      <AppContainer/>
    </View>
    
  );
  }
}

const TabNavigator=createBottomTabNavigator({
  Transaction:{Screen:TransactionScreen},
  Search:{Screen:SearchScreen}
})

const AppContainer=createAppContainer({TabNavigator})
