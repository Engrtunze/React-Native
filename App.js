import React from 'react';
import {Home} from './app/views/Home';
import {Contact} from "./app/views/Contact";
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';


const Myroutes = createStackNavigator({


  Home: {
    screen: Home
  },
  Contact: {
    screen: Contact
  }


});

const App = createAppContainer(Myroutes);
// export default function App() {
//   return (
//     <Myroutes />
//   );
// }

export  default  App;


