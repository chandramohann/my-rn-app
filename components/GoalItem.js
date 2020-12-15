import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} activeOpacity={0.5}>
            <View style={styles.listItems}>
                <Text>{props.title}</Text >
            </ View>
        </TouchableOpacity>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    listItems: {
        width: '80%',
        borderBottomColor: 'black',
        borderWidth: 1,
        backgroundColor: 'cyan',
        marginVertical: 5,
        alignContent: 'flex-end'
    }
}); 