import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import Form from './src/components/Form';
import Footer from './src/components/Footer';
import Result from './src/components/Result';
import colors from './src/utils/colors'
import numberWithCommas from './src/utils/helpers';

export default function App() {

  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null);
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);


  useEffect(() => {

    if(capital && interest && months){
      calcular();

    }else {
      reset();
      
    }

  }, [capital, interest, months]);



  const calcular = () => {

    reset();

    if(!capital || !interest || !months || months == '0'){
      setErrorMessage('Completa todos los campos');
    } else{

      setErrorMessage('')

      const i = interest / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i);

      console.log(numberWithCommas(fee.toFixed(2)));
      console.log(numberWithCommas((fee * months).toFixed(2)));

      setTotal({
        monthlyFee: numberWithCommas(fee.toFixed(2)),
        totalToPay: numberWithCommas((fee * months).toFixed(2)) 
      })

    }

  }

  const reset = () => {
    setErrorMessage("");
    setTotal(null);
  }

  return (

    <>
    <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.text}>Cotizador de Prestamos</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
          calcular={calcular}
        />
      </SafeAreaView>

      <Result 
        errorMessage={errorMessage} 
        capital={capital}
        interest={interest}
        total={total}
        months={months}
      />

      <Footer calcular={calcular}/>
    </>

  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 280,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center"
  },
  text: {
    marginTop: 45,
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff"
  }
})