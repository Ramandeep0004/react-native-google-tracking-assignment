import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icons, IconsType } from "../../assets/icons"
import { Icon } from '@rneui/themed'
import { hp } from "../../assets/fontsize"
import { colors } from "../../assets/colors"
import { View } from "react-native"
import { Home } from "../../app/screens/home"
import { NoScreen } from "../../app/screens/empty"
import Match from "../../app/screens/match"
import { styles } from "./styles"
import useKeyboard from "../../helpers/keywordStatus"


let Tab = createBottomTabNavigator();

export const BottomTab = () => {
    let keywordSatus = useKeyboard();

    return (
        <View style={styles.container}>
            <Tab.Navigator
                initialRouteName="home"
                screenOptions={({ route, navigation }) => {
                    return {
                        tabBarHideOnKeyboard: true,
                        tabBarStyle: styles.tabMain,
                        tabBarActiveTintColor: colors.primary,
                        tabBarInactiveTintColor: colors.textColor2,
                        tabBarLabelStyle: styles.tabBarLabel,
                        tabBarLabel: route.name === 'match' ? '' : route.name
                    }
                }}
            >
                <Tab.Screen
                    name="home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <View style={styles.iconMian2}>
                                <Icon
                                    type={IconsType.fontAwesome5}
                                    name={Icons.clipboardList}
                                    color={color}
                                    size={hp(26)}
                                />
                            </View>
                        ),
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name="inbox"
                    component={NoScreen}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <View style={styles.iconMian2}>
                                <Icon
                                    type={IconsType.ionIcon}
                                    name={Icons.chatbubbleOutline}
                                    color={color}
                                    size={hp(28)}
                                />
                            </View>
                        ),
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name="match"
                    component={Match}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <View style={keywordSatus ? null : styles.centreIconContainer}>
                                <View style={keywordSatus ? null : styles.iconMian}>
                                    <Icon
                                        type={IconsType.material}
                                        name={Icons.centerFocusWeak}
                                        color={colors.white}
                                        size={hp(32)}
                                    />
                                </View>
                            </View>
                        ),
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Notifications"
                    component={NoScreen}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <View style={styles.iconMian2}>
                                <Icon
                                    type={IconsType.fontAwesome}
                                    name={Icons.bellO}
                                    color={focused ? colors.primary : colors.textColor2}
                                    size={hp(28)}
                                />
                            </View>
                        ),
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Account"
                    component={NoScreen}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <View style={styles.iconMian2}>
                                <Icon
                                    type={IconsType.antDesign}
                                    name={Icons.user2}
                                    color={focused ? colors.primary : colors.textColor}
                                    size={hp(28)}
                                />
                            </View>
                        ),
                        headerShown: false,
                    }}
                />
            </Tab.Navigator>
        </View>
    )
};