// src/Pages/Config/config.js
import { useContext } from "react";
import { Text, View, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CityContext } from "../../CityContext";
import { ThemeContext } from "../../ThemeContext";
import { styles } from "./styles";

export default function Config() {
  const { cidade, setCidade } = useContext(CityContext);
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  const navigation = useNavigation();

  const handleBuscar = () => {
    setCidade(cidade.trim()); // Remove espaços em branco
    navigation.navigate('Home');
  };

  const dadoEntrada = (evento) => {
    setCidade(evento.nativeEvent.text.trim());
  };

  return (
    <View style={isDarkTheme ? styles.darkContainer : styles.lightContainer}>
      <Text style={isDarkTheme ? styles.darkTitle : styles.lightTitle}>Configurações do Clima</Text>
      <TextInput
        style={styles.input}
        placeholder="Insira o nome da cidade"
        value={cidade}
        onChange={dadoEntrada}
      />
      <View style={styles.button}>
        <Button title="Buscar" onPress={handleBuscar} />
      </View>
      <View style={styles.button}>
        <Button title="Alternar Tema" onPress={toggleTheme} />
      </View>
    </View>
  );
}
