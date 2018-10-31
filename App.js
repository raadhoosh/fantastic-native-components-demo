/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { Button, CenterView, Text, Content, Container, Spinner, TextInput } from 'fantastic-native-components';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Text dark >Example Text</Text>
          <CenterView>
            <Text primary>{'Text primary '}</Text>
            <Text secondary>{'Text secondary '}</Text>
            <Text info>{'Text info '}</Text>
            <Text warning>{'Text warning '}</Text>
            <Text danger>{'Text danger '}</Text>
            <Text light>{'Text light'}</Text>
            <Text dark>{'Text dark '}</Text>
          </CenterView>

          <Text dark >Example Spinner</Text>
          <CenterView>
            <Spinner size="small" primary />
            <Spinner size="large" primary />
            <Spinner size="large" secondary />
            <Spinner size="large" info />
            <Spinner size="large" warning />
            <Spinner size="large" danger />
            <Spinner size="large" dark />
          </CenterView>
          <Text dark >Example Button</Text>
          <Text dark>{' '}</Text>
          <Button primary full onPress={() => { alert("hi") }}>
            <CenterView>
              <Text dark>{'Click Me '}</Text>
            </CenterView>
          </Button>
          <Text dark>{' '}</Text>
          <Button secondary full onPress={() => { alert("hi") }}>
            <CenterView>
              <Text light>{'Click Me '}</Text>
            </CenterView>
          </Button>
          <Text dark>{' '}</Text>
          <Button info full onPress={() => { alert("hi") }}>
            <CenterView>
              <Text dark>{'Click Me '}</Text>
            </CenterView>
          </Button>

          <Text dark>{' '}</Text>
          <Button warning full onPress={() => { alert("hi") }}>
            <CenterView>
              <Text dark>{'Click Me '}</Text>
            </CenterView>
          </Button>
          <Text dark>{' '}</Text>
          <Button danger full onPress={() => { alert("hi") }}>
            <CenterView>
              <Text dark>{'Click Me '}</Text>
            </CenterView>
          </Button>

          <Text dark>{' '}</Text>
          <Button info size="small" onPress={() => { alert("hi") }}>
            <CenterView>
              <Text dark>{'Click Me '}</Text>
            </CenterView>
          </Button>
          <Text dark>{' '}</Text>
          <Button size="large" primary full onPress={() => { alert("hi") }}>
            <CenterView>
              <Text dark>{'Click Me '}</Text>
            </CenterView>
          </Button>

          <Text dark >{' '}</Text>
          <Text dark >Example TextInput</Text>
          <Text dark >{' '}</Text>
          <View style={{padding : 20}} >
            <TextInput
              primary
              full
              placeholder="email"
              onChangeText={(t) => { console.log(t) }}
            />
            <Text dark >{' '}</Text>
            <TextInput
              danger
              full
              rounded
              placeholder="email"
              onChangeText={(t) => { console.log(t) }}
            />
          </View>
          <Text dark >{' '}</Text>
          <Text dark >{' '}</Text>
        </Content>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
