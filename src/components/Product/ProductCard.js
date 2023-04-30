import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import styles from './ProductCard.style'

const ProductCard = ({ products }) => {
    return (
        <View style={styles.product_container}>
            <View style={styles.product_body}>
                <Image style={styles.product_image} source={{ uri: products.imgURL }} />
                <Text style={styles.product_title}>{products.title}</Text>
                <Text style={styles.product_price}>{products.price}</Text>
                {products.inStock === false ? <Text style={styles.product_stock}>STOKTA YOK </Text> : null}
            </View>
        </View>
    )
}
export default ProductCard;