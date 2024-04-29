import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={style.headerContainer}>
        <Text style={style.headerText}>Ecommerce Store</Text>
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  headerContainer: {
    // height: '20%',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    padding: 5,
  },
});
export default App;
