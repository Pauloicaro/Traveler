import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Route from './routes/RouteScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import UiContextProvider from './components/Context/ContextApi';




export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <UiContextProvider>
          <Route />
        </UiContextProvider>
      </NavigationContainer>
      <StatusBar style="auto" />
    </GestureHandlerRootView>

  );
}
