import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import { styles } from "../../css/css";

export default function Login() {
  return (
    <View>
      <View style={styles.boasVindas}>
        <Image
          source={require("../../assets/icon-pets.jpg")}
          resizeMode="contain"
        />

        <Text style={styles.mensagem}>Acessar conta:</Text>
      </View>
      <View style={styles.alinhamentoCentro}>
        <TextInput
          style={styles.textField}
          keyboardType="email-address"
          placeholder="E-mail"
          placeholderTextColor="gray"
        />
        <TextInput
          style={styles.textField}
          type="password"
          placeholder="senha"
          placeholderTextColor="gray"
          secureTextEntry={true}
        />

        <Switch></Switch>
        <TouchableOpacity style={styles.botaoAcessar}>
          <Text style={styles.textoBotaoAcessar}>Acessar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.botoesNovaContaEEsqueceuSenha}>
        <TouchableOpacity>
          <Text style={styles.botaoLink}>Esqueci a senha</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.botaoLink}>Criar nova conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
