import { Icon, Image, Input, Slider } from '@rneui/themed';
import { Text, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import { View } from 'react-native-ui-lib';
import { base } from '../../assets/base';
import { Images } from '../../assets/images';
import { useState, useRef } from 'react'
import { styles } from './style';
import { Icons, IconsType } from '../../assets/icons';
import { colors } from '../../assets/colors';
import { hp } from '../../assets/fontsize';



export const Home = (props: any) => {
    const cardRef = useRef<null>(null);
    const [emptyCard, setEmptyards] = useState(false)
    const [cards, setCards] = useState([
        {
            image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1675864662211-b60c700a0123?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            image: 'https://images.unsplash.com/photo-1545239705-1564e58b9e4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            image: 'https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            image: 'https://images.unsplash.com/photo-1678662054844-350c1b00001c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            image: 'https://images.unsplash.com/photo-1678481642675-4008af285081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        }
    ])


    return (
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe9gsn9Bs_tJjfVwasxdzCrwou3b_vUvZCx8Afc6BjaZx3P3eSdfgpYSP8VoKtRzErEjg&usqp=CAU', }}
                style={{ width: '100%', height: '100%', }}
            >
                <View style={styles.body}>
                    <View style={styles.containerHeader}>
                        <Icon
                            type={IconsType.material}
                            name={Icons.keyboardBackspace}
                            color={colors.white}
                            size={hp(30)}
                        />
                    </View>
                    <View style={styles.MainTittle}>
                        <Text style={styles.header}>Daftar Pengiriman</Text>
                    </View>
                    <View style={styles.mainBody}>
                        <View style={styles.searchConatiner}>
                            <View style={base.col8}>
                                <Input
                                    placeholder='Cari barange / Muskan Resi'
                                    style={styles.inputtextStyle}
                                    inputContainerStyle={styles.inputContainerStyle}
                                    rightIcon={
                                        <Icon
                                            type={IconsType.feather}
                                            name={Icons.search}
                                            color={colors.secondPrimary}
                                            size={hp(20)}
                                            style={{ marginHorizontal: hp(8) }}
                                        />
                                    }
                                />
                            </View>
                            <View style={[base.col4, { alignItems: 'flex-end' }]}>
                                <View style={[base.row, { alignItems: 'center' }]}>
                                    <Icon
                                        type={IconsType.ionIcon}
                                        name={Icons.options}
                                        color={colors.secondPrimary}
                                        size={hp(30)}
                                    />
                                    <Text style={styles.filter}>FILTER</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <FlatList
                                contentContainerStyle={styles.flat}
                                data={cards}
                                // keyExtractor={(index, item) => (index, item)}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() =>props.navigation.navigate('profileDetail')}>
                                        <View style={styles.mainTag}>
                                            <View style={styles.firstRow}>
                                                <View style={base.col2}>
                                                    <View style={styles.imageContainer}>
                                                        <Image
                                                            source={{ uri: item.image }}
                                                            style={styles.image}
                                                        />
                                                    </View>
                                                </View>
                                                <View style={[base.col5, { marginLeft: hp(15) }]}>
                                                    <View style={styles.codeMina}>
                                                        <Text style={styles.code}>PS1990YZX</Text>
                                                    </View>
                                                    <Text style={styles.name1}>Katcus Slukent</Text>
                                                    <Text style={styles.name2}>Familiea Cordata</Text>
                                                </View>
                                                <View style={[base.col5, { alignItems: 'center' }]}>
                                                    <Text style={styles.rate}>Rp 120,123</Text>
                                                    <Text style={styles.quentity}>Qty : 2 Pack</Text>
                                                </View>
                                            </View>
                                            <Slider
                                                // disabled
                                                value={10}
                                                onValueChange={() => ''}
                                                maximumValue={50}
                                                minimumValue={20}
                                                step={1}
                                                style={styles.sliderMian}
                                                trackStyle={{ height: 0.8, backgroundColor: colors.primary }}
                                                thumbStyle={{ height: 8, width: 8, backgroundColor: colors.primary }}
                                                maximumTrackTintColor={'transparent'}
                                                minimumTrackTintColor={colors.primary}
                                            />
                                            <View style={styles.roewTwo}>
                                                <View style={base.col4}>
                                                    <View style={styles.bottomRow1st}>
                                                        <View style={base.col3}>
                                                            <View style={styles.iconMain}>
                                                                <Icon
                                                                    type={IconsType.materialCommunity}
                                                                    name={Icons.busSchool}
                                                                    color={colors.primary}
                                                                    size={hp(16)}
                                                                />
                                                            </View>
                                                        </View>
                                                        <View style={[base.col7, { alignItems: 'flex-start' }]}>
                                                            <Text style={styles.iconText} numberOfLines={1}>Bandung</Text>
                                                            <Text style={styles.iconText2} numberOfLines={1}>JABAR</Text>
                                                        </View>
                                                        <View style={[base.col2, { alignItems: 'flex-start' }]}>
                                                            <View style={styles.iconMain2}>
                                                                <Icon
                                                                    type={IconsType.fontAwesome}
                                                                    name={Icons.caretRight}
                                                                    color={colors.secondPrimary}
                                                                    size={hp(18)}
                                                                />
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={[base.col4, { alignItems: 'center' }]}>
                                                    <View style={styles.bottomRow2nd}>
                                                        <View style={[base.col5, { alignItems: 'flex-end' }]}>
                                                            <View style={styles.iconMain}>
                                                                <Icon
                                                                    type={IconsType.ionIcon}
                                                                    name={Icons.iosLocation}
                                                                    color={colors.primary}
                                                                    size={hp(14)}
                                                                />
                                                            </View>
                                                        </View>
                                                        <View style={[base.col7, { alignItems: 'flex-start' }]}>
                                                            <Text style={styles.iconText} numberOfLines={1}>Kletan</Text>
                                                            <Text style={styles.iconText2} numberOfLines={1}>NAHAR</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <View style={[base.col4, { alignItems: 'flex-end' }]}>
                                                    <View style={styles.bottomRow3rd}>
                                                        <View style={[base.col8, { alignItems: 'flex-end' }]}>
                                                            <Text style={styles.iconText3} numberOfLines={1}>Bandung</Text>
                                                        </View>
                                                        <View style={[base.col4, { alignItems: 'flex-end' }]}>
                                                            <View style={[styles.iconMain, { backgroundColor: colors.primary }]}>
                                                                <Icon
                                                                    type={IconsType.fontAwesome5}
                                                                    name={Icons.check2}
                                                                    color={colors.white}
                                                                    size={hp(14)}
                                                                />
                                                            </View>
                                                        </View>
                                                    </View>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )

}
