/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	useColorScheme,
	View,
} from 'react-native';

import {
	Colors,
} from 'react-native/Libraries/NewAppScreen';

const Section = (): Node => {
	const normalSoftSymbol = '\u00AD';
	const androidSoftSymbol = '\u200B';

	const testString = 'WillHaveAnHyphenWhenBreakingForNewLine';
	const testStringNormalSymbol = `WillHave${normalSoftSymbol}AnHyphen${normalSoftSymbol}When${normalSoftSymbol}Breaking${normalSoftSymbol}ForNew${normalSoftSymbol}Line`;
	const testStringAndroidSymbol = `WillHave${androidSoftSymbol}AnHyphen${androidSoftSymbol}When${androidSoftSymbol}Breaking${androidSoftSymbol}ForNew${androidSoftSymbol}Line`;
	const textBreakStrategy = 'simple'; // 'simple', 'highQuality', 'balanced'

	return (
		<View style={styles.sectionContainer}>
			<Text
				style={{backgroundColor: '#0f0'}}
				android_hyphenationFrequency={'full'}
				textBreakStrategy={textBreakStrategy}>
				{testString}
				{testStringNormalSymbol}
				{testStringAndroidSymbol}
			</Text>
			<Text
				style={{backgroundColor: '#f00'}}
				android_hyphenationFrequency={'none'}
				textBreakStrategy={textBreakStrategy}>
				{testString}
				{testStringNormalSymbol}
				{testStringAndroidSymbol}
			</Text>
			<Text
				style={{backgroundColor: '#00f'}}
				android_hyphenationFrequency={'balanced'}
				textBreakStrategy={textBreakStrategy}>
				{testString}
				{testStringNormalSymbol}
				{testStringAndroidSymbol}
			</Text>
			<Text
				style={{backgroundColor: '#0ff'}}
				android_hyphenationFrequency={'high'}
				textBreakStrategy={textBreakStrategy}>
				{testString}
				{testStringNormalSymbol}
				{testStringAndroidSymbol}
			</Text>
		</View>
	);
};

const App: () => Node = () => {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	return (
		<SafeAreaView style={backgroundStyle}>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<ScrollView
				contentInsetAdjustmentBehavior="automatic"
				style={backgroundStyle}>
				<View
					style={{
						backgroundColor: isDarkMode ? Colors.black : Colors.white,
					}}>
					<Section />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
		width: 300,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
	},
	highlight: {
		fontWeight: '700',
	},
});

export default App;
