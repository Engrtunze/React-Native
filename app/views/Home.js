import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header} from "../sections/Header";

export class Home extends React.Component{

    render() {
        return(
            <View>
                <Header message = 'Press to Login'/>
                <Text>This will be the homepage</Text>
                <Text>Welcome homepage</Text>
                <Text>This will be the homepage</Text>

            </View>

        );
    }

}