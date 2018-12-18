import {StyleSheet} from "react-native";
import {RkTheme} from "react-native-ui-kitten";

export default StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	header: {
		width: "100%",
		height: 45,
		textAlignVertical: 'center',
		backgroundColor: RkTheme.current.colors.primary
	},
	header_content: {
		height: "100%",
		textAlignVertical: 'center',
		color: RkTheme.current.colors.background
	},
	menu_btn: {
		backgroundColor: "transparent"
	}
});