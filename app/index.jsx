import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { Link } from "expo-router";

const App = () => {




  return (
    <>

      <View className="w-full flex justify-center items-center h-full px-4">

        <Text className="font-black text-3xl text-black-200 mt-7 text-center">
        MotionWave
        </Text>

        <StatusBar style="auto" />

        <Link href="/home" style={{ color: 'blue' }}>  Go Home </Link>
      </View>
    </>

  );
};

export default App;