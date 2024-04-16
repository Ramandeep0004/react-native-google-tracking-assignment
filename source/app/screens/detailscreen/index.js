import { Icon, Image } from '@rneui/themed';
import { Text, TouchableOpacity, ImageBackground, Linking, StatusBar, FlatList } from 'react-native';
import { View } from 'react-native-ui-lib';
import { base } from '../../../assets/base';
import { colors } from '../../../assets/colors';
import { hp } from '../../../assets/fontsize';
import { Icons, IconsType } from '../../../assets/icons';
import { styles } from './style';
import { useIsFocused } from '@react-navigation/native';
import TrakerComponent from '../../components/tracker';


export const DetailScreen = (props) => {
    return (
        <View style={styles.conatainer}>
            {
                useIsFocused() ?
                    <StatusBar
                        translucent={true}
                        backgroundColor={colors.transparent}
                    />
                    :
                    null
            }
            <ImageBackground
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe9gsn9Bs_tJjfVwasxdzCrwou3b_vUvZCx8Afc6BjaZx3P3eSdfgpYSP8VoKtRzErEjg&usqp=CAU' }}
                style={base.imageStyle}
            >
                <View style={styles.topContainer}>
                    <View style={styles.containerHeader}>
                        <View style={base.col1}>
                            <Icon
                                type={IconsType.material}
                                name={Icons.keyboardBackspace}
                                color={colors.white}
                                size={hp(32)}
                                onPress={() => props.navigation.goBack()}
                            />
                        </View>
                        <View style={base.col11}>
                            <Text style={styles.header}>Detail Order</Text>
                        </View>
                    </View>
                    <View style={styles.MainTittle}>
                        <View style={base.col5}>
                        </View>
                        <View style={base.col7}>
                            <Text style={styles.rate} numberOfLines={1}>Rp 120,909 - </Text>
                            <Text style={styles.quentity} numberOfLines={1}>Qty : 2 Pack</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.mainBody}>
                    <View style={styles.rowOne}>
                        <View style={base.col5}>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={() => props.navigation.navigate('match')}
                            >
                                <View style={styles.maiImage}>
                                    <View style={styles.imageContainer}>
                                        <Image
                                            source={{ uri: 'https://images.unsplash.com/photo-1494515740382-c1c0585affeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMwfHxwbGFudCUyMGluJTIwdGhlJTIwcG90fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' }}
                                            style={styles.image}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={[base.col7, { marginLeft: hp(8) }]}>
                            <Text style={styles.name1}>Suelent Rare -</Text>
                            <Text style={styles.name2}>New Familiea Cord</Text>
                            <Text style={styles.link} onPress={() => Linking.openURL('https://instaasignmnt.page.link/Login')}>https://instaasignmnt.page.link/Login</Text>
                            <View style={styles.rowOne}>
                                <Text style={styles.code}>PS1990YZX</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.deatilContainer}>
                        <View style={styles.detailRow}>
                            <View style={base.col3}>
                                <Text style={styles.text1}>Berat Kotor</Text>
                                <Text style={styles.text2}>2.56 Kg</Text>
                            </View>
                            <View style={base.col3}>
                                <Text style={styles.text1}>Jenis</Text>
                                <Text style={styles.text2}>Tamamam</Text>
                            </View>
                            <View style={base.col6}>
                                <Text style={styles.text1}>Estimasi</Text>
                                <Text style={styles.text2}>24 jun - 28 jun</Text>
                            </View>
                        </View>
                        <View style={styles.resCodeMian}>
                            <View style={base.col8}>
                                <Text style={styles.name1}>Resi : PB90898ZXYTK</Text>
                            </View>
                            <View style={[base.col4, styles.flexAlignEnd]}>
                                <Text style={styles.code2}>Salin</Text>
                            </View>
                        </View>
                        <View style={styles.rowThree}>
                            <View style={base.col8}>
                                <Text style={styles.text3}>Catatan Pengirinam</Text>
                            </View>
                            <View style={[base.col4, styles.flexAlignEnd]}>
                                <View style={styles.labelContainer}>
                                    <Icon
                                        type={IconsType.fontAwesome}
                                        name={Icons.shirtsinbulk}
                                        color={colors.primary}
                                        size={hp(18)}
                                    />
                                    <Text style={styles.label}>Lahat di Peta</Text>
                                </View>
                            </View>
                        </View>
                        <FlatList
                            style={styles.flatList}
                            contentContainerStyle={styles.flatListConentContainer}
                            showsVerticalScrollIndicator={false}
                            data={[1, 2, 3, 4, 5, 6, 7]}
                            keyExtractor={(index, item) => (index, item)}
                            renderItem={({ item }) => (
                                <TrakerComponent />
                            )}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
};
