import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import Routes from './src/Routes/BottomTabNav/routes';
import { CityProvider } from './src/CityContext';
import { ThemeProvider, ThemeContext } from './src/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <CityProvider>
        <ThemeProviderComponent />
      </CityProvider>
    </ThemeProvider>
  );
}

function ThemeProviderComponent() {
  const { isDarkTheme } = React.useContext(ThemeContext);
  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
      <Routes />
    </NavigationContainer>
  );
}
