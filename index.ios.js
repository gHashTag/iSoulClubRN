import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView
} from 'react-native';
import Main from './components/main';
//import Masters from './components/masters';

var ScrollableTabView = require('react-native-scrollable-tab-view');
//import ScrollableTabView from 'react-native-scrollable-tab-view'
// class iSoulClub extends Component {
//   _renderHeader(section) {
//     return (
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Header1</Text>
//       </View>
//     );
//   }
//
//   _renderContent(section) {
//     return (
//         <Text style={styles.textContent}>Content1</Text>
//     );
//   }
//
//   _renderHeader2(section) {
//     return (
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Header2</Text>
//       </View>
//     );
//   }
//
//   _renderContent2(section) {
//     return (
//         <Text style={styles.textContent}>Content2</Text>
//     );
//   }
//
//
//   render() {
//     return (
//       <ScrollView style={styles.container}>
//         <Accordion
//           sections={['Section 1', 'Section 2', 'Section 3']}
//           renderHeader={this._renderHeader}
//           renderContent={this._renderContent}
//         />
//         <Accordion
//           sections={['Section 1', 'Section 2']}
//           renderHeader={this._renderHeader2}
//           renderContent={this._renderContent2}
//         />
//         <Masters />
//       </ScrollView>
//     );
//   }
// }

class iSoulClub extends Component {
  render() {
    return (
      <Main />
    );
  }
}


AppRegistry.registerComponent('iSoulClub', () => iSoulClub);
