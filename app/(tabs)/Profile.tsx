import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AppIcon, AppStyles } from '../AppStyles';
import LoadingModal from '../components/LoadingModal';
// import { useDispatch } from 'react-redux';

function ProfileScreen() {
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();

  const save = () => {
    console.log('User updated')
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.leftTitle]}>Account</Text>

      <View style={styles.cameraContainer}>
        <Image style={styles.cameraIcon} source={AppIcon.images.defaultUser} />
      </View>

      <View style={styles.InputContainer}>
        <TextInput style={styles.body}
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
        style={[styles.saveButtonContainer, { marginTop: 50 }]}
        onPress={() => save()}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
      <LoadingModal isVisible={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
  cameraContainer: {
    backgroundColor: AppStyles.color.background,
    width: 120,
    height: 120,
    tintColor: 'white',
    borderRadius: '50%',
    // padding: 20,
  },
  cameraIcon: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 20,
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
  saveButtonContainer: {
    alignItems: 'center',
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  saveButtonText: {
    color: AppStyles.color.white,
  },
});

export default ProfileScreen;
