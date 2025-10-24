// app/(auth)/signup.tsx
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AppStyles } from '../AppStyles';
import LoadingModal from '../components/LoadingModal';

export default function SignupScreen() {
  const router = useRouter();
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.leftTitle]}>Create new account</Text>
      <View style={styles.cameraContainer}>
        <Image style={styles.cameraIcon} source={AppIcon.images.cameraFilled} />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="Full Name"
          onChangeText={setFullname}
          value={fullname}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="Phone Number"
          onChangeText={setPhone}
          value={phone}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="E-mail Address"
          onChangeText={setEmail}
          value={email}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer}>
        <TextInput
          style={styles.body}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <TouchableOpacity
        style={[styles.facebookContainer, { marginTop: 50 }]}
        onPress={() => onRegister()}>
        <Text style={styles.facebookText}>Sign Up</Text>
      </TouchableOpacity>

      <LoadingModal isVisible={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.tint,
    marginTop: 20,
    marginBottom: 20,
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 20,
  },
  cameraContainer: {
    backgroundColor: AppStyles.color.background,
    width: 120,
    height: 120,
    tintColor: 'white',
    borderRadius: '50%',
    padding: 20,
  },
  cameraIcon: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: 'center',
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text,
  },
  loginContainer: {
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
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  facebookText: {
    color: AppStyles.color.white,
  },
});
