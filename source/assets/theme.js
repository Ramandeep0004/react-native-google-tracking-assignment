import { createTheme } from '@rneui/themed';
import { colors } from './colors';
import { fp, hp, hzp, vp, wp } from './fontsize';
import { Font } from './fontfamily';


export const Theme = createTheme({
    components: {
        Button: {
            type: 'solid',
            titleStyle: {
                color: colors.white,
                fontSize: fp(18),
                fontFamily: Font.regular,
                textAlign: 'center',
                alignItems: 'center',
                width: '100%',
            },
            buttonStyle: {
                borderRadius: wp(10),
                paddingVertical: vp(18),
                paddingHorizontal: hzp(18),
                backgroundColor: colors.primary,
            },
            containerStyle: {
                borderRadius: wp(10),
                marginHorizontal: hp(15),
                shadowRadius: 5,
                elevation: 5,
                shadowOpacity: 0.5,
                shadowColor: '#000',
                justifyContent: 'center',
                shadowOffset: { width: 0, height: 5 },
            },
        },
        Input: {
            labelStyle: {
                color: colors.black,
                fontFamily: Font.bold,
                fontSize: fp(16),
                fontWeight: 'normal',
            },
            placeholderTextColor: colors.textColor,
            containerStyle: {
                paddingRight: vp(0),
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 0,
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 0,
                marginRight: 0,
                margin: 0,
                marginHorizontal: 0
            },
            inputContainerStyle: {
                elevation: 2,
                borderWidth: 1,
                height: hp(60),
                shadowRadius: 3.84,
                fontSize: fp(18),
                shadowOpacity: 0.5,
                shadowColor: '#000',
                borderColor: '#eaeaea',
                borderRadius: hp(15),
                fontFamily: Font.regular,
                backgroundColor: colors.white,
                shadowOffset: { width: 0, height: 5 },
                marginVertical: hp(-2),
                width: '100%'
            },
            errorStyle: {
                color: colors.primary,
                fontFamily: Font.regular,
                fontSize: fp(14),
                margin: hp(5),
                padding: 0,
            },
            fontFamily: Font.regular,
            fontSize: fp(17),
        },
    },
});
