// app/_layout.jsx
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="details" options={{ title: "Details" }} />
      <Stack.Screen name="screens/account" options={{ title: "Account" }} />
      <Stack.Screen name="screens/signin" options={{ title: "Login" }} />
      <Stack.Screen name="screens/signup" options={{ title: "Sign Up" }} />
    </Stack>
  );
}
