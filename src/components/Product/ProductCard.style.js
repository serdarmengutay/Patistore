import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    product_container: {
        flex: 1,
        backgroundColor: "#eceff1",
        marginTop: 10,
        margin: 5,
        borderRadius: 10
    },
    product_body: {
        padding: 5,
        width: Dimensions.get('window').width / 2.3,
    },
    product_image: {
        height: Dimensions.get('window').height / 4
    },
    product_title: {
        fontSize: 16,
        fontWeight: "bold",
        color: 'black',
    },
    product_price: {
        fontWeight: 'bold',
    },
    product_stock: {
        top: 10,
        fontWeight: 'bold',
        color: 'red',
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 5
    }
});