import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

const SearchProduct = () => {
    return (
        <View>
             <Text style={styles.header_text}>PATIKASTORE</Text>
              <TextInput 
                     style={styles.input}
                     placeholder='Ara...'
                     selectionColor={'black'}
                    />
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 45,
        backgroundColor: "#eceff1",
        borderRadius: 10,
    },
    header_text: {
        color: "purple",
        fontSize: 40,
        fontWeight: "bold",
        margin: 5,
      },
});

export default SearchProduct;