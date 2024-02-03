import { Icon, Image, Input } from '@rneui/themed';
import { Text, TouchableOpacity, ImageBackground, Linking } from 'react-native';
import { View } from 'react-native-ui-lib';
import { base } from '../../assets/base';
import { colors } from '../../assets/colors';
import { Dimension } from '../../assets/dimension';
import { hp } from '../../assets/fontsize';
import { Icons, IconsType } from '../../assets/icons';
import { styles } from './style';


export const DetailScreen = (props: any) => {


    return (
        <View style={styles.conatainer}>
            <ImageBackground
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe9gsn9Bs_tJjfVwasxdzCrwou3b_vUvZCx8Afc6BjaZx3P3eSdfgpYSP8VoKtRzErEjg&usqp=CAU', }}
                style={{ width: '100%', height: '100%', }}
            >
                <View style={styles.body}>
                    <View style={styles.containerHeader}>
                        <View style={base.col1}>
                            <Icon
                                type={IconsType.material}
                                name={Icons.keyboardBackspace}
                                color={colors.white}
                                size={hp(32)}
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
                            <Text style={styles.rate}>Rp 120,123 - </Text>
                            <Text style={styles.quentity}>Qty : 2 Pack</Text>
                        </View>
                    </View>
                    <View style={styles.mainBody}>
                        <View style={styles.rowOne}>
                            <View style={base.col5}>
                                <TouchableOpacity onPress={() => props.navigation.navigate('TrackingOrder')}>
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
                                <Text style={styles.name1} numberOfLines={1}>Suelent Rare -</Text>
                                <Text style={styles.name2} numberOfLines={1}>New Familiea Cord</Text>
                                 <Text style={styles.link} onPress={() => Linking.openURL('https://instaasignmnt.page.link/Login')}>https://instaasignmnt.page.link/Login</Text>
                                <View style={styles.codeMina}>
                                    <Text style={styles.code}>PS1990YZX</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.deatilContainer}>
                            <View style={styles.detailRow}>
                                <View style={base.col3}>
                                    <Text style={styles.text1} numberOfLines={1}>Berat Kotor</Text>
                                    <Text style={styles.text2} numberOfLines={1}>2.56 Kg</Text>
                                </View>
                                <View style={base.col3}>
                                    <Text style={styles.text1} numberOfLines={1}>Jenis</Text>
                                    <Text style={styles.text2} numberOfLines={1}>Tamamam</Text>
                                </View>
                                <View style={base.col6}>
                                    <Text style={styles.text1} numberOfLines={1}>Estimasi</Text>
                                    <Text style={styles.text2} numberOfLines={1}>24 jun - 28 jun</Text>
                                </View>
                            </View>
                            <View style={styles.resCodeContainer}>
                                <View style={styles.resCodeMian}>
                                    <View style={base.col9}>
                                        <Text style={styles.name1} numberOfLines={1}>Resi : PB90898ZXYTK</Text>
                                    </View>
                                    <View style={[base.col3, { alignItems: 'flex-end' }]}>
                                        <Text style={styles.code2}>Salin</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.rowThree}>
                                <View style={base.col8}>
                                    <Text style={styles.text3} numberOfLines={1}>Catatan Pengirinam</Text>
                                </View>
                                <View style={[base.col4, { alignItems: 'flex-end' }]}>
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
                            <View style={[base.row, styles.mainRow]}>
                                <View style={[base.col2, styles.circulMain]}>
                                    <View style={[styles.circle, styles.statusColor]}>
                                        <Icon
                                            type={IconsType.material}
                                            name={Icons.check2}
                                            color={colors.white}
                                            size={Dimension.medium}
                                        />
                                    </View>
                                    <View style={[styles.line]} /><View />
                                </View>
                                <View style={[base.col10]}>
                                    <View style={base.row}>
                                        <View style={base.col8}>
                                            <Text style={styles.titte}>Dispetpo Ola pento</Text>
                                        </View>
                                        <View style={[base.col4, { alignItems: 'flex-end' }]}>
                                            <Text style={styles.time}>08.56</Text>
                                        </View>
                                    </View>
                                    <View style={styles.iconsContainer}>
                                        <View style={[styles.timeRow]}>
                                            <View style={[base.col1, { alignItems: 'flex-start' }]}>
                                                <Icon
                                                    type={IconsType.antDesign}
                                                    name={Icons.calendar}
                                                    color={colors.primary}
                                                    size={Dimension.medium}
                                                />
                                            </View>
                                            <View style={[base.col11]}>
                                                <Text style={styles.date}>19 Augest 2023</Text>
                                            </View>
                                        </View>
                                        <View style={[styles.timeRow]}>
                                            <View style={[base.col1]}>
                                                <Icon
                                                    type={IconsType.octIcon}
                                                    name={Icons.location2}
                                                    color={colors.primary}
                                                    size={hp(18)}
                                                />
                                            </View>
                                            <View style={[base.col11]}>
                                                <Text style={styles.date}> Los Angles, USA</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={[base.row, styles.mainRow]}>
                                <View style={[base.col2, styles.circulMain]}>
                                    <View style={[styles.circle, styles.statusColor]}>
                                        <Icon
                                            type={IconsType.material}
                                            name={Icons.check2}
                                            color={colors.white}
                                            size={Dimension.medium}
                                        />
                                    </View>
                                    <View style={[styles.line]} /><View />
                                </View>
                                <View style={[base.col10]}>
                                    <View style={base.row}>
                                        <View style={base.col8}>
                                            <Text style={styles.titte}>Dispetpo Ola pento</Text>
                                        </View>
                                        <View style={[base.col4, { alignItems: 'flex-end' }]}>
                                            <Text style={styles.time}>08.56</Text>
                                        </View>
                                    </View>
                                    <View style={styles.iconsContainer}>
                                        <View style={[styles.timeRow]}>
                                            <View style={[base.col1, { alignItems: 'flex-start' }]}>
                                                <Icon
                                                    type={IconsType.antDesign}
                                                    name={Icons.calendar}
                                                    color={colors.primary}
                                                    size={Dimension.medium}
                                                />
                                            </View>
                                            <View style={[base.col11]}>
                                                <Text style={styles.date}>19 Augest 2023</Text>
                                            </View>
                                        </View>
                                        <View style={[styles.timeRow]}>
                                            <View style={[[base.col1]]}>
                                                <Icon
                                                    type={IconsType.octIcon}
                                                    name={Icons.location2}
                                                    color={colors.primary}
                                                    size={hp(18)}
                                                />
                                            </View>
                                            <View style={[base.col11]}>
                                                <Text style={styles.date}> Los Angles, USA</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={[base.row, styles.mainRow]}>
                                <View style={[base.col2, styles.circulMain]}>
                                    <View style={[styles.circle, styles.statusColor]}>
                                        <Icon
                                            type={IconsType.material}
                                            name={Icons.check2}
                                            color={colors.white}
                                            size={Dimension.medium}
                                        />
                                    </View>
                                    <View style={[styles.line]} /><View />
                                </View>
                                <View style={[base.col10]}>
                                    <View style={base.row}>
                                        <View style={base.col8}>
                                            <Text style={styles.titte}>Dispetpo Ola pento</Text>
                                        </View>
                                        <View style={[base.col4, { alignItems: 'flex-end' }]}>
                                            <Text style={styles.time}>08.56</Text>
                                        </View>
                                    </View>
                                    <View style={styles.iconsContainer}>
                                        <View style={[styles.timeRow]}>
                                            <View style={[base.col1, { alignItems: 'flex-start' }]}>
                                                <Icon
                                                    type={IconsType.antDesign}
                                                    name={Icons.calendar}
                                                    color={colors.primary}
                                                    size={Dimension.medium}
                                                />
                                            </View>
                                            <View style={[base.col11]}>
                                                <Text style={styles.date}>19 Augest 2023</Text>
                                            </View>
                                        </View>
                                        <View style={[styles.timeRow]}>
                                            <View style={[base.col1]}>
                                                <Icon
                                                    type={IconsType.octIcon}
                                                    name={Icons.location2}
                                                    color={colors.primary}
                                                    size={hp(18)}
                                                />
                                            </View>
                                            <View style={[base.col11]}>
                                                <Text style={styles.date}> Los Angles, USA</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={[base.row, styles.mainRow]}>
                                <View style={[base.col2, styles.circulMain]}>
                                    <View style={[styles.circle, styles.statusColor]}>
                                        <Icon
                                            type={IconsType.material}
                                            name={Icons.check2}
                                            color={colors.white}
                                            size={Dimension.medium}
                                        />
                                    </View>
                                    <View style={[styles.line]} /><View />
                                </View>
                                <View style={[base.col10]}>
                                    <View style={base.row}>
                                        <View style={base.col8}>
                                            <Text style={styles.titte}>Dispetpo Ola pento</Text>
                                        </View>
                                        <View style={[base.col4, { alignItems: 'flex-end' }]}>
                                            <Text style={styles.time}>08.56</Text>
                                        </View>
                                    </View>
                                    <View style={styles.iconsContainer}>
                                        <View style={[styles.timeRow]}>
                                            <View style={[base.col1, { alignItems: 'flex-start' }]}>
                                                <Icon
                                                    type={IconsType.antDesign}
                                                    name={Icons.calendar}
                                                    color={colors.primary}
                                                    size={Dimension.medium}
                                                />
                                            </View>
                                            <View style={[base.col11]}>
                                                <Text style={styles.date}>19 Augest 2023</Text>
                                            </View>
                                        </View>
                                        <View style={[styles.timeRow]}>
                                            <View style={[base.col1]}>
                                                <Icon
                                                    type={IconsType.octIcon}
                                                    name={Icons.location2}
                                                    color={colors.primary}
                                                    size={hp(18)}
                                                />
                                            </View>
                                            <View style={[base.col11]}>
                                                <Text style={styles.date}> Los Angles, USA</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}
