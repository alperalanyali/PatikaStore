import {Image, Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import styles from './Card-styles';

const Card = ({store})=>{
    return (
        <TouchableOpacity style={styles.container}>
            <Image
                style={styles.image}
                source={{
                    uri:store.imgURL
                }}
            />
            <Text style={styles.title}>{store.title}</Text>
         {
            store.inStock &&    <Text style={styles.price}>{store.price}</Text>
         }
            {
                !store.inStock && <Text style={styles.noStock}>STOKTA YOK</Text>
            }
        </TouchableOpacity>

    );
}
export default Card;