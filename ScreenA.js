
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


export default function ScreenA({ navigation }) {
    return (
        <View style={Styles.view}>
            <Text style={Styles.text}>Screen 1</Text>
            <Pressable
                style={Styles.button}
                android_ripple={{ color: 'red' }}
                onPress={() => navigation.navigate('Screen_2')}
            >
                <Text style={Styles.text}>Go to Screen 2</Text>
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