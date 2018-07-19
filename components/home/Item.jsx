import React, { Component } from 'react';
import { observer, inject } from '../../node_modules/mobx-react';
import { View, Text } from 'native-base';

@inject('todo')
@observer
class Item extends Component {
  render() {
    return (
      <View>
        <Text>asd</Text>
      </View>
    );
  }
}

export default Item;
