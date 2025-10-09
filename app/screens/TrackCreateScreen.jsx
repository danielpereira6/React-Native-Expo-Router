// import '../_mockLocation';
import { useContext } from 'react';
import { /*Text,*/ View } from "react-native";
import { Text } from 'react-native-elements';
// import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(addLocation);

  return (
    <View forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      {/* <Map /> */}
      {err ? <Text>Please enable location services</Text> : null}
    </View>
  );
};

export default TrackCreateScreen;
