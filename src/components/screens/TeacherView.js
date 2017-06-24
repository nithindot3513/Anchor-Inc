import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CardSection from '../common/CardSection';
import Header from '../common/Header'

class TeacherView extends Component {
  
  static navigationOptions = {
    header: null,
    tabBarIcon: () => <Icon size={24} name="directions-run" color="#01152d" />,
  }
  render() {
     return (
      <View>
        {/*<View>
          <Image source={{ uri: props.person.Header }} />
          <View>
            <Image source={{ uri: props.person.Profile }} />
          </View>
        </View>
        <CardSection>
          <Text>Hello</Text>
        </CardSection>
        <CardSection>
          <Text>Hello</Text>
        </CardSection>
        <CardSection>
          <Text>Hello</Text>
        </CardSection>
        <CardSection>
          <Text>Hello</Text>
        </CardSection>*/}
        <Text>TeacherView</Text>
      </View>
    );
  }
}

export default TeacherView;
