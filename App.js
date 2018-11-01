/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, CenterView, Text, Content, Container, Spinner, TextInput, Header, Footer, Col, Row, Grid, Zooming, Sliding } from 'fantastic-native-components';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header><Text dark >Header</Text></Header>
        <Content full>
          <Text dark animation="slideInDown" direction="alternate">Example Text</Text>
          <Zooming animation="InLeft">
            <CenterView>
              <Text primary animation="pulse" easing="ease-out" iterationCount="infinite" >{'Text primary '}</Text>
              <Text secondary animation="bounce" iterationCount="infinite" >{'Text secondary '}</Text>
              <Text info animation="flash" iterationCount="infinite">{'Text info '}</Text>
              <Text warning animation="jello" iterationCount="infinite">{'Text warning '}</Text>
              <Text danger>{'Text danger '}</Text>
              <Text light>{'Text light'}</Text>
              <Text dark>{'Text dark '}</Text>
            </CenterView>
          </Zooming>

          <Text dark >Example Spinner</Text>
          <Sliding>
            <CenterView>
              <Spinner size="small" primary />
              <Spinner size="large" primary />
              <Spinner size="large" secondary />
              <Spinner size="large" info />
              <Spinner size="large" warning />
              <Spinner size="large" danger />
              <Spinner size="large" dark />
            </CenterView>
          </Sliding>
          <Text dark >Example Button</Text>
          <Text dark>{' '}</Text>
          <Sliding>
            <Button primary full onPress={() => { alert("hi") }}>
              <CenterView>
                <Text dark>{'Click Me '}</Text>
              </CenterView>
            </Button>
          </Sliding>
          <Text dark>{' '}</Text>
          <Sliding animation="InDown">
            <Button secondary full onPress={() => { alert("hi") }}>
              <CenterView>
                <Text light>{'Click Me '}</Text>
              </CenterView>
            </Button>
          </Sliding>
          <Text dark>{' '}</Text>
          <Sliding animation="InLeft">
            <Button info full onPress={() => { alert("hi") }}>
              <CenterView>
                <Text dark>{'Click Me '}</Text>
              </CenterView>
            </Button>
          </Sliding>
          <Text dark>{' '}</Text>
          <Sliding animation="InRight">
            <Button warning full onPress={() => { alert("hi") }}>
              <CenterView>
                <Text dark>{'Click Me '}</Text>
              </CenterView>
            </Button>
          </Sliding>
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
          <View style={{ padding: 20 }} >
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
          <Text dark >{'Example Grid'}</Text>
          <View style={{ padding: 20, height: 500 }} >
            <Grid>
              <Col>
                <Row style={{ backgroundColor: "red" }} size={3}>
                  <CenterView>
                    <Text dark>{'3'}</Text>
                  </CenterView>
                </Row>
                <Row style={{ backgroundColor: "blue" }} size={1}>
                  <CenterView>
                    <Text dark>{'1'}</Text>
                  </CenterView>
                </Row>
              </Col>
              <Col>
                <Row style={{ backgroundColor: "blue" }} >
                  <CenterView>
                    <Text dark>{'50%'}</Text>
                  </CenterView>
                </Row>
                <Row style={{ backgroundColor: "purple" }}>
                  <CenterView>
                    <Text dark>{'50%'}</Text>
                  </CenterView>
                </Row>
              </Col>
              <Col>
                <Row style={{ backgroundColor: "pink" }} size={1}>
                  <CenterView>
                    <Text dark>{'1'}</Text>
                  </CenterView>
                </Row>
                <Row style={{ backgroundColor: "red" }} size={1}>
                  <CenterView>
                    <Text dark>{'1'}</Text>
                  </CenterView>
                </Row>
                <Row style={{ backgroundColor: "yellow" }} size={1}>
                  <CenterView>
                    <Text dark>{'1'}</Text>
                  </CenterView>
                </Row>
                <Row style={{ backgroundColor: "grey" }} size={1}>
                  <CenterView>
                    <Text dark>{'1'}</Text>
                  </CenterView>
                </Row>
              </Col>
            </Grid>
          </View>
          <Text dark >{' '}</Text>
        </Content>
        <Footer secondary><Text dark >Footer</Text></Footer>
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
