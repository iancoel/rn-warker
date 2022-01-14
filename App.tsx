import { StyleSheet, SafeAreaView } from 'react-native';
import Explore from './src/screens/Explore';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Explore />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    flex: 1,
  },
});
