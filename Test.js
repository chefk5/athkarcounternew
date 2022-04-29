import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { incrementAction, resetAction } from './redux/Actions';

const Test = (props) => {

    function resetCounter() {
        if (props.counter > 0){
            Alert.alert(
                "Do you want to reset the counter to 0 ?",
                "",
                [
                    { text: "Yes", onPress: () => props.dispatch(resetAction()) },
                    {
                        text: "Cancel",
                        onPress: () => null,
                        style: "cancel"
                    }
                ]
            );
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar style='dark' />
            <View style={styles.topbarView}>
                <TouchableOpacity style={styles.refreshView} onPress={() => resetCounter()}>
                    <Icon name="redo" color='white' size={20} />
                </TouchableOpacity>
            </View>
            <TouchableWithoutFeedback onPress={() => {
                props.dispatch(incrementAction())}}>
                <View style={styles.counterButtonTouchable} >
                    <Text style={styles.counterText}>
                        {props.counter}
                    </Text>
                </View>
            </TouchableWithoutFeedback>

        </View>
    )
}

function mapStateToProps(state) {
    return {
        counter: state.counter.amount,
    }
}



export default connect(mapStateToProps)(Test);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    counterButtonTouchable: {
        // height: '95%',
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterText: {
        color: 'white',
        fontSize: 37,

    },
    topbarView: {
        //  marginTop: Constants.statusBarHeight,
        position: 'absolute',
        right: 5,
        top: 35,
        zIndex: 1,
        //padding: 10

    },
    refreshView: {
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginRight: 10,
        padding: 15
    }
})


