
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Pressable
} from 'react-native';




export default function ScreenB({ navigation }) {
    return (
        <View style={Styles.view}>
            <Text style={Styles.text}>This is Screen 2</Text>
            <Pressable
                style={Styles.button}
                android_ripple={{ color: 'darkgrey' }}
                onPress={() => navigation.navigate('Screen_1')}

            >
                <Text style={Styles.text}> Go Back </Text>
            </Pressable>
        </View>
    )

}

const Styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    button: {
        margin: 4,
        backgroundColor: 'lightgrey'

    }
})