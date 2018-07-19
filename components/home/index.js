import React, { Component } from 'react';

import { Col, Row, Grid } from 'react-native-easy-grid';
import { H1, Button, Text } from 'native-base';
import { inject, observer } from 'mobx-react';
import CreateScreen from '../../screens/CreateScreen';

@inject('todo')
@observer
class Home extends Component {
  render() {
    if (this.props.todo.is_adding) {
      return <CreateScreen />;
    }
    return (
      <Grid>
        <Row size={1}>
          <Col size={40} />
          <Col size={40}>
            <H1 style={{ marginTop: 23 }}>Todo list</H1>
            <Button
              dark
              full
              style={{ marginTop: 20 }}
              small
              onPress={this.props.todo.toggleAddTodo}
            >
              <Text>เพิ่ม</Text>
            </Button>
          </Col>
          <Col size={40} />
        </Row>
        <Row size={3}>
          <Col size={100}>
            <Text>{JSON.stringify(this.props.todo.is_adding)}</Text>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
