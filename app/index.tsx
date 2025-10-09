import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ height: "100%" }}>
      <View style={{ width: "100%", display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
        <Button title="Login" onPress={() => router.push("/screens/signin")} />
        <Button title="Go to Account" onPress={() => router.push("/screens/account")} />
      </View>
      {/* <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}> */}
      <View />
      <View>
        <Text style={{ textAlign: "center" }}>Home Screen</Text>
        {/* <Link href="/details">Go to Details</Link> */}
        {/* <Button title="Sign up" onPress={() => router.push("/screens/account")} /> */}
      </View>
      <View style={{ position: "absolute", bottom: '5%', width: "100%" }}>
        <Text style={{ textAlign: "center" }}>Footer</Text>
      </View>
    </View>
  );
}
