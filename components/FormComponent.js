import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const FormComponent = () => {
  const [idade, setIdade] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Digite seu Idade"
        value={idade}
        onChangeText={setIdade}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
      />
      <Text style={styles.text}>Você tem {idade} anos</Text>
      <Text style={styles.text}>Sua senha é {senha}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
  },
});

export default FormComponent;
