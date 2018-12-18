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
		height: 55, // I increased the height so it looks a bit better and less cramped
		textAlignVertical: 'center',
		backgroundColor: RkTheme.current.colors.primary,
		elevation: 10, // "elevates" the element. (adds shadow) ANDROID ONLY
		// justifyContent: 'center', // Centers the children in elements flexDirection;
		alignItems: 'center', // Centers the children perpendicular to the elements flexDirection
		flexDirection: 'row', // Setting the flexDirection to row. Default is perpendicular
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
