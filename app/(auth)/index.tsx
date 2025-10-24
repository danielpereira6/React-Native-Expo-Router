import { useRouter } from 'expo-router';
import { ReactNode } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppIcon, AppStyles } from '../AppStyles';
import { Configuration } from '../Configuration';

export default function AuthScreen(): ReactNode {
  const router = useRouter();

  const handleLogin = () => router.push('/(auth)/login');
  const handleSignup = () => router.push('/(auth)/signup');

  return (
    <View style={styles.container}>
      <View style={AppIcon.container}>
        <Image style={AppIcon.style} source={AppIcon.images.home} />
      </View>
      <TouchableOpacity style={styles.loginContainer} onPress={handleLogin}>
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupContainer} onPress={handleSignup}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Configuration.home.listing_item.offset,
  },
  loginContainer: {
    alignItems: 'center',
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  button: {
    // width: '90%',
    // backgroundColor: AppStyles.color.tint,
    color: 'white',
    fontSize: 25,
    margin: '15%',
    // borderRadius: '25%',
    alignItems: 'center',
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.white,
    borderRadius: AppStyles.borderRadius.main,
    padding: 8,
    borderWidth: 1,
    borderColor: AppStyles.color.tint,
    marginTop: 15,
  },
  loginText: {
    color: AppStyles.color.white,
  },
  signupContainer: {
    alignItems: 'center',
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.white,
    borderRadius: AppStyles.borderRadius.main,
    padding: 8,
    borderWidth: 1,
    borderColor: AppStyles.color.tint,
    marginTop: 15,
  },
  signupText: {
    color: AppStyles.color.tint,
  },
});
