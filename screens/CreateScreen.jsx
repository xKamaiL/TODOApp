import React, { Component } from 'react';
import { Container, Header, Left, Right, Title, Body } from 'native-base';
import Create from '../components/create';
class CreateScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button hasText transparent>
              <Text>ย้อนกลับ</Text>
            </Button>
          </Left>
          <Body>
            <Title>สร้างใหม่</Title>
          </Body>
          <Right />
        </Header>
        <Create />
      </Container>
    );
  }
}

export default CreateScreen;
