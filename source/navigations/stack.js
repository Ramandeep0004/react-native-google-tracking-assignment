import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailScreen } from "../app/screens/detailscreen";
import { BottomTab } from "./tabBar/bottomsTabs";


let Stack = createNativeStackNavigator()

export const StackScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="bottom_tab"
      screenOptions={({ route, navigation }) => ({
        presentation: 'modal',
        headerMode: 'screen'
      })}
    >
      <Stack.Screen
        name="bottom_tab"
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="product_detail"
        component={DetailScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
};