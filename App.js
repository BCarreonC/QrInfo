import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Pantalla de inicio
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 4, alignItems: 'left', justifyContent: 'left' }}>
      <Button
        title="Scan"
        onPress={() => navigation.navigate('Scan')}
      />
      <Button
        title="Historial"
        onPress={() => navigation.navigate('History')}
      />
      <Button
        title="Configuration"
        onPress={() => navigation.navigate('Configuration')}
      />
    </View>
  );
}

// Pantalla de escaneo
function ScanScreen({ navigation }) {
  // Aquí iría la lógica para escanear códigos QR
  return (
    <View style={{ flex: 1, alignItems: 'left', justifyContent: 'center' }}>
      <Text>¡Esta es la pantalla de escaneo de códigos QR!</Text>
    </View>
  );
}

// Pantalla de historial
function HistoryScreen({ navigation }) {
  // Aquí iría la lógica para mostrar el historial de escaneos
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>¡Esta es la pantalla de historial de escaneos!</Text>
    </View>
  );
}

// Pantalla de configuración
function ConfigurationScreen({ navigation }) {
  // Aquí iría la lógica para configurar la aplicación
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>¡Esta es la pantalla de configuración!</Text>
    </View>
  );
}

// Componente principal de la aplicación
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
        <Stack.Screen name="History" component={HistoryScreen} options={{ title: 'Historial' }} />
        <Stack.Screen name="Configuration" component={ConfigurationScreen} options={{ title: 'Configuración' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
