// app/(auth)/login.tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  // Alert,
  // ActivityIndicator,
  TouchableOpacity,
  View,
} from 'react-native';
import { AppStyles } from '../AppStyles';
import LoadingModal from '../components/LoadingModal';
import { useAuth } from '../context/AuthContext';

export default function LoginScreen() {
  const router = useRouter();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // TODO: Replace with real authentication logic
    login();

    // Navigate to main app
    router.replace('/(tabs)');
  };
  
  const handleFacebookLogin = async () => {
    // TODO: Replace with real facebook authentication logic
    await AsyncStorage.setItem('userToken', 'dummy-token');
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>

      {/* Title */}
      <Text style={[styles.title]}>Log In</Text>

      {/* Inputs */}
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="E-mail or phone number"
          onChangeText={setEmail}
          value={email}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.loginContainer} onPress={handleLogin}>
        <Text style={styles.loginText}>Log in</Text>
      </TouchableOpacity>
      
      <Text style={styles.or}>OR</Text>

      <TouchableOpacity style={styles.facebookContainer} onPress={handleFacebookLogin}>
        <Text style={styles.facebookText}>Login with Facebook</Text>
      </TouchableOpacity>
      <LoadingModal isVisible={loading} />

      {/* <GoogleSigninButton
        style={styles.googleContainer}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={onPressGoogle}
      /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  or: {
    color: 'black',
    marginTop: 40,
    marginBottom: 10,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    textAlign: 'center',
    color: AppStyles.color.tint,
    marginTop: 20,
    marginBottom: 20,
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: 'center',
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text,
  },
  loginContainer: {
    alignItems: 'center',
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  loginText: {
    color: AppStyles.color.white,
  },
  placeholder: {
    color: 'red',
  },
  InputContainer: {
    width: AppStyles.textInputWidth.main,
    marginTop: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  },
  facebookContainer: {
    alignItems: 'center',
    width: 192,
    backgroundColor: AppStyles.color.facebook,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  facebookText: {
    color: AppStyles.color.white,
  },
  googleContainer: {
    width: 192,
    height: 48,
    marginTop: 30,
  },
  googleText: {
    color: AppStyles.color.white,
  },
});
