import {TextInput, View} from 'react-native';

import React from 'react';
import styles from './Search-styles'

const Search = ()=>{
    return(
        <View style={styles.container}>
            <TextInput placeholder='Ara'/>
        </View>
    );
}

export default Search;