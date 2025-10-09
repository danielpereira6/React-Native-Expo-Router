import { View } from "react-native";
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => {
  const { state } = {};
  // const { setUser } = useContext(AuthContext);

  const handleSignup = () => {
    // Perform sign-in logic...
    console.log('sign up')
  };

  return (
    <View style={styles.container}>
      {/* <TextInput></TextInput> */}
      {/* <Button title="Save"></Button> */}

      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state ? state.errorMessage : ""}
        submitButtonText="Register"
        onSubmit={handleSignup}
      />
      <NavLink
        routeName="/screens/signin"
        text="Already have an account? Sign in instead!"
      />
    </View>
  );
}
SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
};

export default SignupScreen;
