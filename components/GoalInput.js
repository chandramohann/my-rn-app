import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoal = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }
    return (
        <Modal visible={props.enableAddMode} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder='Course Goals' style={styles.inputField} onChangeText={goalInputHandler}
                    value={enteredGoal} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Cancel' color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title='Add' onPress={addGoal} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: 40,
    },
    inputField: {
        width: '90%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
    },
    buttonContainer: {
        marginHorizontal: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        width: '50%',

    },
    button: {
        width: '60%',

    }
});

export default GoalInput;