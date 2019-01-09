import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../style/home.js';
import {RkButton} from "react-native-ui-kitten";

function openMenu() {

}

export default function Header () {
	return (
		<View style={styles.header}>
			<RkButton onTap={openMenu} style={{padding: 0, width: 'auto'}}>
				<Image source={require('../icons/menu.png')} style={{width: 20, height: 20}}/>
			</RkButton>
			<Text style={styles.header_content}>Hello World</Text>
		</View>
	);
}