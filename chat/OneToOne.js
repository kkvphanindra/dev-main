import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TextInput,
    Pressable,
    ImageBackground,

} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');

const OneToOne = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.top}>
                    <Pressable onPress={() => navigation.navigate('groupCreation')} style={styles.smallButtonContainer}>
                        <Text style={styles.skipText}>
                            Skip
                        </Text>
                    </Pressable>
                    <Text style={styles.heading}>OneToOne</Text>
                </View>
                <View style={styles.bottom}>
                    <Pressable onPress={() => navigation.navigate('groupCreation')} style={styles.buttonContainer}>
                        <LinearGradient colors={['#5E6BFF', '#212FCC']} style={styles.buttonWrapper}>
                            <Text style={styles.buttonText}>
                                Proceed
                            </Text>
                        </LinearGradient>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default OneToOne;

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: '#FFFFF',
        display: 'flex',
        padding: 40,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    wrapper: {
        height: height / 1.2,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    },
    top: {
        // marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom: 'auto'
    },
    smallButtonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%',
    },
    skipText: {
        height: 35,
        width: 90,
        borderRadius: 6,
        color: '#505EF4',
        fontSize: 16,
        lineHeight: 32,
        textAlign: 'center',
        fontFamily: 'Inter',
        borderColor: '#505EF4',
        borderWidth: 1

    },
    heading: {
        textAlign: 'center',
        fontFamily: 'Inter',
        fontSize: 22,
        lineHeight: 27,
        color: '#2C2C2C',
        paddingTop: 20,
        paddingBottom: 20,
    },
    listFlex: {
        marginTop: 20,
        height: height / 2,
        width: '100%',
        display: 'flex',
        // flexDirection: 'row',
        // flexWrap: 'nowrap',
        // backgroundColor: 'red'
    },
    bottom: {
        marginTop: 'auto',
        width: '100%'
    },
    buttonContainer: {
        height: 60,
    },
    buttonWrapper: {
        height: 60,
        borderRadius: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        lineHeight: 19,
        textAlign: 'center',
        fontFamily: 'Inter'
    }

})