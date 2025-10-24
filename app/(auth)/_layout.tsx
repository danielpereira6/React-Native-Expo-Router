// app/(auth)/_layout.tsx
import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />  {/* AuthScreen */}
      <Stack.Screen name="login" options={{ title: 'Log In' }} />
      <Stack.Screen name="signup" options={{ title: 'Sign Up' }}/>
    </Stack>
  );
}
