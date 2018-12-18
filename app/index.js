/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import {RkTheme, RkButton, RkTextInput, RkText} from "react-native-ui-kitten";
import styles from './style/home.js';

RkTheme.setType('RkTextInput', 'frame', {
	underlineColor: "#333",
	underlineWidth: 2,
	container: {
		marginHorizontal: 20
	}
});

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}><RkButton style={styles.menu_btn}>Menu</RkButton><RkText style={styles.header_content}>Hello World</RkText></View>
				<Text>Paste URL below</Text>
				<RkTextInput rkType="frame"/>
				<RkButton>Download</RkButton>
			</View>
		);
	}
}
