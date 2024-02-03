import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Icons, IconsType } from "../assets/icons"
import { Icon } from '@rneui/themed'
import { fp, hp } from "../assets/fontsize"
import { colors } from "../assets/colors"
import { View, StyleSheet } from "react-native"
import { Font } from "../assets/fontfamily"
import { Home } from "../screens/home"
import { Empty } from '../screens/emplty'
import { DetailScreen } from "../screens/detailscreen"
import TrackingOrder from "../screens/match"



export type TabParamList = {
    'Orcer List': undefined
    'Inbox': undefined
    Favourite: undefined
    Notifications: undefined
    Account: undefined
    TrackingOrder: undefined
}


let Tab = createBottomTabNavigator<TabParamList>()
export const Tabs = (props: any) => {

    return (
        <Tab.Navigator
            screenOptions={({ route, navigation }) => {
                return {
                    tabBarStyle: {
                        backgroundColor: colors.white,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderBottomStartRadius: 0,
                        borderBottomRightRadius: 0,
                        height: 70,
                        paddingHorizontal: 5,
                        borderTopWidth: 0.2,
                        marginBottom: 0,
                        marginHorizontal: 0,
                        borderRadius: 15,
                        paddingTop : 5,
                        shadowColor: 'black',
                        shadowOpacity: 0.9,
                        elevation: 5,
                    },
                    tabBarActiveTintColor: colors.primary,
                    tabBarInactiveTintColor: colors.textColor2,
                    tabBarLabelStyle: {
                        fontFamily: Font.regular,
                        fontSize: fp(14),
                        marginBottom: hp(15),
                    },
                    tabBarLabel: route.name === 'TrackingOrder' ? '' : route.name
                }
            }}
        >
            <Tab.Screen
                name="Orcer List"
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
                name="Inbox"
                component={Empty}
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
                name="TrackingOrder"
                component={TrackingOrder}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <View style={styles.centreIconContainer}>
                            <View style={styles.iconMian}>
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
                component={TrackingOrder}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <>
                            <View style={styles.iconMian2}>
                                <Icon
                                    type={IconsType.fontAwesome}
                                    name={Icons.bellO}
                                    color={focused ? colors.primary : colors.textColor2}
                                    size={hp(28)}
                                />
                            </View>
                        </>
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Account"
                component={Empty}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <>
                            <View style={styles.iconMian2}>
                                <Icon
                                    type={IconsType.antDesign}
                                    name={Icons.user2}
                                    color={focused ? colors.primary : colors.textColor}
                                    size={hp(28)}
                                />
                            </View>
                        </>
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    iconMain: {
        height: hp(32),
        width: hp(32),
        backgroundColor: colors.secondPrimary
    },
    iconMian: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(60),
        width: hp(60),
        marginBottom: hp(5),
        backgroundColor: '#f9731f',
        borderRadius: hp(16),
        shadowColor: colors.primary,
        shadowOpacity:0.9,
        elevation: 5,
    },
    centreIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp(95),
        width: hp(90),
        marginBottom: hp(5),
        backgroundColor: colors.white,
        borderRadius: hp(12),
        shadowColor: colors.textColor3,
        shadowOpacity: 0.9,
        elevation: 10,
    },
    iconMian2: {
        height: hp(50),
        width: hp(50),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: hp(10)
    }
});