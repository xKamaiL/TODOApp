import React, { Component } from 'react';

import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Left,
  Right,
  Title,
  Body
} from 'native-base';

import { Col, Row, Grid } from 'react-native-easy-grid';
import Home from '../components/home';

class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>xKamaiL</Title>
          </Body>
          <Right />
        </Header>
        <Home />
      </Container>
    );
  }
}
export default HomeScreen;
