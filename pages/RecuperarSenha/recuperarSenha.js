import { Text, TextInput, View, Image, TouchableOpacity } from "react-native";
import { styles } from "../../css/css";

export default function RecuperarSenha({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.boasVindas}>
        <Image
          style={styles.image}
          source={require("../../assets/epinha.png")}
          resizeMode="contain"
        />

        <Text style={styles.mensagem}>Recuperar Senha:</Text>
      </View>
      <View style={styles.alinhamentoCentro}>
        <TextInput
          style={styles.textField}
          keyboardType="email-address"
          placeholder="E-mail"
          placeholderTextColor="gray"
        />
        <TouchableOpacity style={styles.botaoAcessar}>
          <Text style={styles.textoBotaoAcessar}>Recuperar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.botaoLink}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
