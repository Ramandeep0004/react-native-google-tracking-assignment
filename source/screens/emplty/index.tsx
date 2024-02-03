import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native-ui-lib';
import { colors } from '../../assets/colors';


export const Empty = () =>{
  

    return(
        <View style={styles.conatainer}>
         <Text>empty</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conatainer : {
        height  :'100%',
        width : '100%',
        backgroundColor : colors.white
    }
})