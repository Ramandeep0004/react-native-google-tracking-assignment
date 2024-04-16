import { Icon, Input } from '@rneui/themed';
import { Text, View, FlatList, ImageBackground, StatusBar } from 'react-native';
import { base } from '../../../assets/base';
import { styles } from './style';
import { Icons, IconsType } from '../../../assets/icons';
import { colors } from '../../../assets/colors';
import { hp } from '../../../assets/fontsize';
import { useIsFocused } from '@react-navigation/native';
import HomeProductComponent from '../../components/homeProductCard';


export const Home = (props) => {
    const cards = [
        {
            sliderValue: 10,
            image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            sliderValue: 30,
            image: 'https://plus.unsplash.com/premium_photo-1675864662211-b60c700a0123?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            sliderValue: 50,
            image: 'https://images.unsplash.com/photo-1545239705-1564e58b9e4a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            sliderValue: 20,
            image: 'https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fHBsYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            sliderValue: 0,
            image: 'https://images.unsplash.com/photo-1678662054844-350c1b00001c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            sliderValue: 50,
            image: 'https://images.unsplash.com/photo-1678481642675-4008af285081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        }
    ]


    return (
        <View style={styles.container}>
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
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe9gsn9Bs_tJjfVwasxdzCrwou3b_vUvZCx8Afc6BjaZx3P3eSdfgpYSP8VoKtRzErEjg&usqp=CAU', }}
                style={base.imageStyle}
            >
                <View style={styles.containerHeader}>
                    <Text style={styles.header}>Daftar Pengiriman</Text>
                </View>
                <View style={styles.mainBody}>
                    <View style={styles.searchConatiner}>
                        <View style={base.col9}>
                            <Input
                                placeholder='Search here'
                                containerStyle={styles.inputStyle}
                                inputContainerStyle={styles.inputContainerStyle}
                                rightIcon={
                                    <Icon
                                        type={IconsType.feather}
                                        name={Icons.search}
                                        color={colors.secondPrimary}
                                        size={hp(20)}
                                    />
                                }
                            />
                        </View>
                        <View style={[base.col3, { alignItems: 'flex-end' }]}>
                            <View style={[base.row, { alignItems: 'center' }]}>
                                <Icon
                                    type={IconsType.ionIcon}
                                    name={Icons.options}
                                    color={colors.secondPrimary}
                                    size={hp(26)}
                                />
                                <Text style={styles.filter}>FILTER</Text>
                            </View>
                        </View>
                    </View>
                    <FlatList
                        data={cards}
                        style={styles.flatlist}
                        contentContainerStyle={styles.flatContentContainer}
                        keyExtractor={(index, item) => (index, item)}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <HomeProductComponent
                                item={item}
                                navigation={props.navigation}
                            />
                        )}
                    />
                </View>
            </ImageBackground>
        </View>
    )
};
