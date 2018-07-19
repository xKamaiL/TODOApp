import React, { Component } from 'react';

import { Col, Row, Grid } from 'react-native-easy-grid';
import { H1, Button, Text } from 'native-base';
class Home extends Component {
  render() {
    return (
      <Row style={{ marginTop: 15 }}>
        <Col />
        <Col>
          <H1>Todo list</H1>
          <Button dark full style={{ marginTop: 10 }}>
            <Text>Add</Text>
          </Button>
        </Col>
        <Col />
      </Row>
    );
  }
}

export default Home;
