import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, HeaderProps, Icon, Image } from '@rneui/themed'
import { colors } from '../../assets/colors';
import { Icons, IconsType } from '../../assets/icons';
import { fp, hp, vp } from '../../assets/fontsize';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native"
import { Font } from '../../assets/fontfamily';
import { RootStackParamList } from '../stack';

type HeaderComponentProps = {
  title: string;
  view?: string;
  left?: undefined | string | null;
  right?: Element | undefined;
  leftComponent?: undefined | Element | null
  navigation: undefined
};


type homeScreenProp = StackNavigationProp<RootStackParamList>;

export const HeaderComponet: React.FunctionComponent<HeaderComponentProps> = (props) => {
  const navigation = useNavigation<homeScreenProp>()


  return (
    <Header
      placement="center"
      containerStyle={styles.container}
      style={styles.header}
      leftComponent={
        props.left === 'back'
          ?
          <View style={styles.iconMian}>
            <Icon
              type={IconsType.material}
              name={Icons.keyboardBackspace}
              color={colors.black}
              size={hp(26)}
              onPress={() => navigation.goBack()}
            />
          </View>
          :
          undefined
      }
      centerComponent={{ text: props.title, style: styles.title }}
      rightComponent={
        props.right === 'search'
          ?
          <View style={styles.iconMian}>
            <Icon
              type={IconsType.feather}
              name={Icons.search}
              color={colors.black}
              size={hp(25)}
              // onPress={() => navigation.navigate('')}
            />
          </View>
          :
          props.right === 'profile'
            ?
            <View style={styles.iconMian}>
              <Icon
                type={IconsType.ionIcon}
                name={Icons.mdMenuOutline}
                color={colors.black}
                size={hp(25)}
                // onPress={() => navigation.navigate('search')}
              />
            </View>
            :
            props.right === 'heart' ?
              <View style={styles.iconMian}>
                <Icon
                  type={IconsType.antDesign}
                  name={Icons.hearto}
                  color={colors.black}
                  size={hp(25)}
                  // onPress={() => navigation.navigate('search')}
                />
              </View>
              :
              undefined
      }
      statusBarProps={{
        barStyle: 'light-content',
        backgroundColor: colors.black,
        translucent: true
      }}
    />
  );
};


const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0,
    backgroundColor: colors.white,
    paddingBottom: hp(22),
    paddingTop: hp(30),
    paddingHorizontal: vp(10),
    alignItems: 'center'
  },
  header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222222'
  },
  title: {
    fontSize: fp(24),
    color: colors.textColor,
    fontFamily: Font.medium,
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'capitalize'
  },
  iconMian: {
    backgroundColor: colors.white,
    paddingVertical: hp(5),
    paddingHorizontal: hp(15),
    // width: '%',
    borderRadius: 10,
  },
  icon: {
    height: hp(50),
    width: hp(50),
    alignItems: 'center',
    justifyContent: 'center',
    // fontFamily: Font.regular,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  mainimage: {
    height: hp(54),
    width: hp(54),
    borderRadius: hp(27),
    overflow: 'hidden',
  },
});
export default Header;