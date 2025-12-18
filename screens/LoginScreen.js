import { useState, useContext } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen() {
  const [name, setName] = useState("");
  const { login } = useContext(AuthContext);

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 26, textAlign: "center" }}>Connexion</Text>
      <TextInput
        placeholder="Votre nom"
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, padding: 10, marginVertical: 20 }}
      />
      <Button title="Se connecter" onPress={() => login(name)} />
    </View>
  );
}
