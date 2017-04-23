import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
  {
    title: 'АЛЕКСАНДР БРАТЕЦКИЙ',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
  },
  {
    title: 'АЛСУ МУБАРАШКИНА',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
  },
  {
    title: 'ИРИНА ТОЛСТОГУЗОВА',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui in tempore blanditiis maxime odio deleniti explicabo ipsa quidem pariatur quibusdam cum voluptate dolores, minima nesciunt harum molestias, nam quisquam facere.',
  },
];

export default class Masters extends Component {
  _renderHeader(section) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    );
  }
  _renderContent(section) {
    return (
        <Text style={styles.textContent}>{section.content}</Text>
    );
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <Accordion
          sections={SECTIONS}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
        />
      </ScrollView>
    );
  }
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     paddingTop: 0,
     backgroundColor: '#f4520f'
   },
   header: {
     flex: 1,
     //width: null,
     //padding: 10,
     backgroundColor: '#f4520f'
   },
   headerText: {
     flex: 1,
     textAlign: 'center',
     fontSize: 27,
     color: '#f9f6fb',
     fontWeight: '300',
     alignItems: 'center',
     paddingTop: 10,
     paddingLeft: 10,
     paddingRight: 10,
     paddingBottom: 10,
     fontFamily: "HelveticaNeue-CondensedBold",
     //backgroundColor: 'green'
   },
   textContent: {
     paddingTop: 10,
     paddingLeft: 10,
     paddingRight: 10,
     paddingBottom: 10,
     backgroundColor: '#f26c2a'
   }
 });
