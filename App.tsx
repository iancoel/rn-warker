import 'react-native-gesture-handler';
import { BreadProvider } from 'material-bread';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Explore from './src/screens/Explore';
import Filter from './src/screens/Filter';

export default function App() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <BreadProvider>
        <SafeAreaView style={styles.container}>
          <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Explore" component={Explore} />
            <Screen name="Filter" component={Filter} />
          </Navigator>
        </SafeAreaView>
      </BreadProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
