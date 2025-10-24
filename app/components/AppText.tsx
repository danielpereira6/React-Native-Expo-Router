import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

type AppTextProps = {
  children: React.ReactNode;
};

export default function AppText({ children }: AppTextProps) {
  return (
    <>
      <Stack.Screen />
      <View style={styles.container}>
        <Link href="/">{children}</Link>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});