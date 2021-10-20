import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Result(props) {

    const { errorMessage, capital, interest, months, total } = props;

    return (
        <View style={styles.content}>

            {total && (
                <View style={styles.boxResult}>
                    <Text style={styles.title}>RESUMEN</Text>

                    <DataResult title="Cantidad Solicitada:" value={`${capital}$`} />
                    <DataResult title="Interes (%):" value={`${interest}%`} />
                    <DataResult title="Plazos:" value={`${months} meses`} />
                    <DataResult title="Pago mensual:" value={`${total.monthlyFee}$`} />
                    <DataResult title="Pago total:" value={`${total.totalToPay}$`} />

                </View>
            )}

            <View>
                <Text style={styles.error}>{errorMessage}</Text>
            </View>

        </View>
    )
}

function DataResult(props) {

    const { title, value } = props;

    return (
        <View style={styles.value}>
            <Text style={styles.valores}>{title}</Text>
            <Text style={styles.valores}>{value}</Text>
        </View>
    );

}


const styles = StyleSheet.create({
    error: {
        textAlign: "center",
        color: "red",
        fontWeight: "bold",
        fontSize: 18
    },
    boxResult: {
        padding: 30
    },
    title: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "bold",
        marginBottom: 20
    },
    valores: {
        fontSize: 20
    },
    value: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8
    }
})
