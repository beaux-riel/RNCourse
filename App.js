import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>Hello Beaux!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#132b36',
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    color: '#FFFFFF',
    fontWeight: '900',
    fontSize: '20px',
  },
});
