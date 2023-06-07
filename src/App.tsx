import {FlatList, SafeAreaView, Text, View} from 'react-native'

import Card from './components/Card/Card';
import React from 'react';
import Search  from './components/Search/Search'
import data from './data.json';

const App = ()=>{
  const renderStore = ({item}) => <Card store={item}/>
  return(
    <SafeAreaView>
        <View>
          <Search/>
          <FlatList
              keyExtractor={item=>item.id.toString()}
            numColumns={2}
          data={data}
          renderItem={renderStore}
          />
          
          </View>   
    </SafeAreaView>

  );
}

export default App;