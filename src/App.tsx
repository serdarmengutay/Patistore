import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

import ProductCard from "./components/Product/ProductCard";
import SearchProduct from "./components/SearchProduct";
import products from "./data/products.json";

const renderProduct = ({ item }: any) => <ProductCard products={item} />;

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <FlatList
          ListHeaderComponent={SearchProduct}
          data={products}
          numColumns={2}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  body: {},
});

export default App;
