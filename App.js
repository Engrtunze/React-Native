import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';


import {Home} from './app/views/Home';
import {Contact} from "./app/views/Contact";
import {Video} from "./app/views/Video";
import {VideoDetail} from "./app/views/VideoDetail";
import {Register} from "./app/views/Register";
import {Login} from "./app/views/Login";


import { Quiz } from './app/views/Quiz.js';
import { Finish } from './app/views/QuizFinish.js';

import { Blog } from './app/views/Blog.js';
import { BlogDetail } from './app/views/BlogDetail.js';

import { About } from './app/views/About.js';


const Myroutes = createStackNavigator({


  Home: {
    screen: Home
  },
  Contact: {
    screen: Contact
  },
  Lesson:{
    screen: Video
  },
  VideoDetailRT: {
    screen: VideoDetail
  },
  RegisterRT:{
    screen: Register
  },
  LoginRT:{
    screen:Login
  },
  QuizRT: {
    screen: Quiz
  },
  FinishRT: {
    screen: Finish
  },
  BlogRT: {
    screen: Blog
  },
  BlogDetailRT: {
    screen: BlogDetail
  },
  AboutRT: {
    screen: About
  }


});

const App = createAppContainer(Myroutes);
// export default function App() {
//   return (
//     <Myroutes />
//   );
// }

export  default  App;


