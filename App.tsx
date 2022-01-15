import 'react-native-gesture-handler';
import { BreadProvider } from 'material-bread';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Explore from './src/screens/Explore';
import Filter from './src/screens/Filter';

export default function App() {
  return (
    <BreadProvider>
      <SafeAreaView style={styles.container}>
        <Filter />
      </SafeAreaView>
    </BreadProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
