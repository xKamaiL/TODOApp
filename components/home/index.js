import React, { Component } from 'react';

import { Col, Row, Grid } from 'react-native-easy-grid';
import { H1, Button, Text } from 'native-base';
import { inject, observer } from 'mobx-react';

@inject('todo')
@observer
class Home extends Component {
  render() {
    return (
      <Row style={{ marginTop: 23 }}>
        <Col />
        <Col>
          <H1>Todo list</H1>
          <Button
            dark
            full
            style={{ marginTop: 20 }}
            small
            onAccessibilityTap={this.props.todo.toggleAddTodo}
          >
            <Text>เพิ่ม</Text>
          </Button>
        </Col>
        <Col />
      </Row>
    );
  }
}

export default Home;
