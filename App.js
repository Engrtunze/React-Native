import React from 'react';
import {Home} from './app/views/Home';
import {Contact} from "./app/views/Contact";
import {createStackNavigator} from 'react-navigation-stack'


const Myroutes = createStackNavigator({

  HomeRt : Home,
  ContactRt : Contact
})


export default function App() {
  return (
    <Myroutes />
  );
}


