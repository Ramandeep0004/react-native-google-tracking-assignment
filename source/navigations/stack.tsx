import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DetailScreen } from "../screens/detailscreen";
import TrackingOrder from "../screens/match";
import { Tabs } from "./bottomsTabs";
import { HeaderComponet } from "./header/Header";



export type RootStackParamList = {
  profileDetail: undefined
  bottomContainer: undefined
  TrackingOrders: undefined
}

let Stack = createNativeStackNavigator<RootStackParamList>()


export const StackScreens = (props: any) => {

  return (
    <Stack.Navigator
      initialRouteName="bottomContainer"
      screenOptions={({ route, navigation }) => ({
        presentation: 'modal',
        headerMode: 'screen'
      })}
      >
      <Stack.Screen
        name="profileDetail"
        component={DetailScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TrackingOrders"
        component={TrackingOrder}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="bottomContainer"
        component={Tabs}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}