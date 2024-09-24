import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Calculadora_IMC = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    const pesoemKg = parseFloat(peso);
    const alturaemMetros = parseFloat(altura) / 100;                           // converter altura para metros

    if (pesoInKg > 0 && alturaemMetros > 0) {
      const calculatedBMI = pesoemKg / (alturaemMetros * alturaemMetros);
      setBmi(calculatedBMI.toFixed(2));
      setMessage(getBMIMessage(calculatedBMI));
    } else {
      alert("Digite valores válidos para o peso (Kg) e altura (cm)");
    }
  };

  const getBMIMessage = (bmi) => {
    if (bmi < 18.5) return 'Baixo peso';
    else if (bmi >= 18.5 && bmi < 24.9) return 'Peso normal';
    else if (bmi >= 25 && bmi < 29.9) return 'Sobrepeso';
    else return 'Obesidade';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora IMC</Text>
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <Button title="Calcular  IMC" onPress={calculateBMI} />
      {bmi && (
        <View style={styles.result}>
          <Text style={styles.resultText}>IMC : {bmi}</Text>
          <Text style={styles.resultText}>{message}</Text>
        </View>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
  },
});

export default Calculadora_IMC;