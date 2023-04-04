import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity  } from 'react-native';



export default function App() {

  var [P, setp] = useState(" ");
  var [H, seth] = useState(" ");
  var [IMC, setimc] = useState(" ");

  function Calcular_IMC(){
    IMC = ((parseFloat(P))/(parseFloat(H)*parseFloat(H)));
    if (parseFloat(IMC)< 18.5){
      alert("Seu IMC é: "+IMC + ", e você está ABAIXO DO PESO ideal!");
    }else if (parseFloat(IMC)>= 18.5 && parseFloat(IMC)<= 24.9){
      alert("Seu IMC é: "+ IMC + ", e você está com PESO NORMAL!");
    }else if (parseFloat(IMC)>= 25 && parseFloat(IMC)<= 29.9){
      alert("Seu IMC é: "+ IMC + ", e você está com SOBREPESO!");
    }else if (parseFloat(IMC)>= 30 && parseFloat(IMC)<= 34.9){
      alert("Seu IMC é: "+ IMC + ", e você está com OBESIDADE GRAU 1!");
    }else if (parseFloat(IMC)>= 35 && parseFloat(IMC)<= 39.9){
      alert("Seu IMC é: "+ IMC + ", e você está com OBESIDADE GRAU 2!");
    }else{
      alert("Seu IMC é: "+ IMC + ", e você está com OBESIDADE GRAU 3 ou MÓRBIDA!");
    }
  }



  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Calculadora de IMC
      </Text>

      <TextInput style = {styles.corpo_kg}
      placeholder="Digite seu peso em Kg: " 
      keyboardType = "numeric"
      onChangeText = {(P) =>setp(P)}
      />

      <TextInput style = {styles.corpo_altura}
      placeholder="Digite sua altura em metros: " 
      keyboardType = "numeric"
      onChangeText = {(H) =>seth(H)}
      />

      <TouchableOpacity style={styles.botao_calcular_imc} onPress = {Calcular_IMC}>
        <Text style ={styles.botao_calcular_imc}>Calcular IMC</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 8,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 38,
    marginTop: 70,
    marginBottom: 70,
    fontWeight: 'bold',
    color: "#FFF"
  },

  corpo_kg:{
    backgroundColor: "#FFF",
    margin: 12,
    padding: 15,
    fontSize:20,
    borderRadius: 40,
  },

  corpo_altura:{
    backgroundColor: "#FFF",
    margin: 12,
    padding: 15,
    fontSize:20,
    borderRadius: 40,
  },

  botao_calcular_imc:{
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0099ff",
    margin: 12,
    padding: 5,
    fontSize:20,
    borderRadius: 40
   
  },

});
