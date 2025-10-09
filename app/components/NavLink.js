import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from 'react-native';
import Spacer from './Spacer';

const NavLink = ({ text, routeName }) => {
  const router = useRouter();

  return (
    <View>
      <TouchableOpacity onPress={() => router.navigate(routeName)}>
        <Spacer>
          <Text style={{ textAlign: "center", color: 'blue' }}>{text}</Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  );
};

export default NavLink;
