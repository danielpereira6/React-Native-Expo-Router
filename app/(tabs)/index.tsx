import { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
// import { connect, useSelector } from 'react-redux';
import { AppStyles } from '../AppStyles';
import { Configuration } from '../Configuration';

function HomeScreen() {
  const [user, setUser] = useState(null);
  // const auth = useAppSelector((state) => state.auth);
  // console.log('auth', auth)
  
  // const getUserName = () => {
  //   setUser(auth.user);
  // };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        Welcome {user ? user : 'User'}
      </Text>
    </ScrollView>
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
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.tint,
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
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

// const mapStateToProps = (state) => ({
//   user: state.auth.user,
// });

// export default connect(mapStateToProps)(HomeScreen);
export default HomeScreen;
