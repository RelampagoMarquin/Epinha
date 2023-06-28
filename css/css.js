import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f6e3c1',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#000',
      fontSize: 14
    },

    image: {
      height: 220
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
      color: '#000'
    },

    textField: {
      width: 226,
      height: 40,
      borderBottomWidth: 1,
      color: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },

    botaoAcessar: {
      backgroundColor: '#a6de91',
      width: 200,
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
    },

    botaoLink: {
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      color: '#000',
      margin: '2%'
    },
  });

export {
    styles
}