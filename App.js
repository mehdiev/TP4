import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import AppDrawer from "./navigation/AppDrawer";
import LoginScreen from "./screens/LoginScreen";

function RootNavigator() {
  const { user } = useContext(AuthContext);
  return user ? <AppDrawer /> : <LoginScreen />;
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}

/* ===== VERSION REDUX (COMMENTAIRE) ===== */
/*
import { Provider } from "react-redux";
import { store } from "./store/store";

<Provider store={store}>
  <NavigationContainer>
    <RootNavigator />
  </NavigationContainer>
</Provider>
*/
