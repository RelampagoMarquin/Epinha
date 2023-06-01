import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Login from './pages/Login/login';
import { styles } from './css/css';

export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
      <StatusBar style="auto" />
    </View>
  );
}

