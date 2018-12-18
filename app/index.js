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
		// Here i added a wrapping view the contains the app. It has flex 1 so it stretches the whole screen
		// The header view has a fixed height, so it only takes that away from the total screen
		// and the main container view can expand to the full height of the screen minus the header
		return (
			<View style={{flex : 1}}>
				<View style={styles.header}>
					<RkButton style={styles.menu_btn}>Menu</RkButton>
					<RkText style={styles.header_content}>Hello World</RkText>
				</View>
				<View style={styles.container}>

					<Text>Paste URL below</Text>
					<RkTextInput rkType="frame"/>
					<RkButton>Download</RkButton>
				</View>
			</View>
		);
	}
}
