import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import colors from '../utils/colors';

export default function Form(props) {

    const {setCapital, setInterest, setMonths, calcular} = props;

    return (

        <View style={styles.viewForm}>
            <View style={styles.viewInputs}>
                <TextInput
                    placeholder="Cantidad a pedir ($)"
                    keyboardType="numeric"
                    style={styles.input}
                    onChange={(e) => setCapital(e.nativeEvent.text)}
                />
                <TextInput
                    placeholder="Intereses (%)"
                    keyboardType="numeric"
                    style={[styles.input, styles.inputPercentage]}
                    onChange={(e) => setInterest(e.nativeEvent.text)}
                />
            </View>

            <Picker
                onValueChange={(value, index) => setMonths(value)} //Se debe cambiar por un setState
                mode="dropdown" // Android only
                style={pickerSelectStyle}
            >
                <Picker.Item label="Selecciona los meses" value="0" />
                <Picker.Item label="2 meses" value="2" />
                <Picker.Item label="4 meses" value="4" />
                <Picker.Item label="6 meses" value="6" />
                <Picker.Item label="12 meses" value="12" />
                <Picker.Item label="24 meses" value="24" />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    viewForm: {
        position: 'absolute',
        marginTop: 90,
        width: "85%",
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: "center"
    },
    viewInputs: {
        flexDirection: "row",
        marginBottom: 25,

    },
    input: {
        height: 50,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: colors.PRIMARY_COLOR,
        borderRadius: 5,
        width: "50%",
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal: 20,
    },
    inputPercentage: {
        width: "50%",
        marginLeft: 5,
    }
});

const pickerSelectStyle = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 4,
        color: "#000",
        paddingRight: 30,
        backgroundColor: "#fff",
        marginLeft: -5,
        marginRight: -5
    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 8,
        color: "black",
        paddingRight: 30,
        backgroundColor: "#fff"
    }
});