
// app/_layout.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { ReactNode, useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function RootLayout(): ReactNode {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const [loaded] = useFonts({
    NotoSans: require('../assets/fonts/Noto-Sans.ttf'),
  });

  if (!loaded) {
    return null;
  }

  useEffect(() => {
    if (loaded) {
      SplashScreen.hide();
    }
  }, [loaded]);

  useEffect(() => {
    // const userToken = null;
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('userToken') || null;
      setIsLoggedIn(!!token);
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (isLoggedIn) {
        router.replace('/(tabs)');
      } else {
        router.replace('/(auth)');
      }
    }
  }, [isLoading, isLoggedIn]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
