import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
    container:{
        backgroundColor:'lightgray',
        borderRadius:10,
        marginTop:10,
        marginLeft:5,
        marginRight:2,
        padding:10 ,
        width: 180 ,
        
    },
    image:{
        width: 160,
        height: 180,
        borderRadius:5
    },
    title:{
        fontSize:20,
        fontWeight:'900'
    },
    price:{
        color:'darkgrey',
        fontSize:16,
        fontWeight:'bold'
    },
    noStock:{
        color:'red',
        fontSize:18,
        fontWeight:'bold'
    }
});