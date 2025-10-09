import { useRouter } from "expo-router";
import { View } from "react-native";

import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
// import { Context } from '../context/AuthContext';
// import { AuthContext } from "../navigation/AppNavigator"; // adjust path if needed

const SigninScreen = () => {
  const router = useRouter();
  const { state, signin } = {};
  // const { setUser } = useContext(AuthContext);

  const handleSignin = () => {
    // Perform sign-in logic...
    // setUser({ name: "John" }); // Simulate login success
    console.log('user')
  };

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to Your Account"
        errorMessage={(state && state.errorMessage) ? state.errorMessage : ""}
        onSubmit={handleSignin}
        submitButtonText="Sign In"
      />
      <NavLink
        text="Dont have an account? Sign up instead"
        routeName="/screens/signup"
      />
      {/* <Button title="Sign In" onPress={handleSignin} /> */}
      {/* <Button
        title="Go to Sign Up"
        onPress={() => router.navigate("/signup")}
      /> */}
    </View>
  );
}
SigninScreen.navigationOptions = {
  header: () => false,
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
};

export default SigninScreen;