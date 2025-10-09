import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function DetailsScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <Button title="Back to Home" onPress={() => router.navigate('/')} />;
    </View>
  );
}
