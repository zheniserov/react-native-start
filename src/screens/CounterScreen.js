import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const reducer = (state, action) =>{
    switch(action.type){
        case 'DEC':
            return {...state, counter: state.counter - action.payload};
        case 'INC':
            return {...state, counter: state.counter + action.payload}
        default:
            return state;
    }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0});
    return (
        <View>
            <Text>Current count: </Text>
            <Button
                title="Decrease"
                onPress={() => dispatch({type: 'DEC', payload: 1 })}
            />
            <Button
                title="Increase"
                onPress={() => dispatch({type: 'INC', payload: 1 })}
            />
            <Text>{state.counter}</Text>

        </View>
    );
};

const styles = StyleSheet.create({

});

export default CounterScreen;