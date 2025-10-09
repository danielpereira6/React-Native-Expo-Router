// import { useContext } from 'react';
import { Button, Text } from 'react-native';
import Spacer from '../components/Spacer';

const AccountScreen = () => {
  // const { signout } = useContext(AuthContext);
  const signout = () => {
    console.log('Sign out')
  }

  return (
    <>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </>
  );
};

export default AccountScreen;
