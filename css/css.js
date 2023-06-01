import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#383b40',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 14
    },

    alinhamentoCentro: {
      alignItems: 'center',
    },

    boasVindas: {
      marginTop: '20%',
      marginBottom: '10%',
      alignItems: 'center',
    },

    mensagem: {
      marginTop: '5%',
      fontSize: 20,
      color: '#ffffff'
    },

    textField: {
      width: 226,
      height: 40,
      borderBottomWidth: 1,
      color: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
    },

    botaoAcessar: {
      backgroundColor: '#fbd10c',
      width: '30%',
      marginTop: '10%',
      marginBottom: '5%',
      paddingVertical: 10,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
  
    },

    botoesNovaContaEEsqueceuSenha: {
      marginTop: '5%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      // alignItems: 'flex-start',
    },

    botaoLink: {
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      color: '#FFFFFF'
    },
  });

export {
    styles
}