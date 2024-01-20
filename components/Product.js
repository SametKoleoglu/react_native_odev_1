import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import productList from "../data";
import { Card, PaperProvider, TextInput } from "react-native-paper";

const Product = () => {
  const [product, setProduct] = useState(productList);

  const searchByName = (name) => {
    var name = name.trim();

    let filteredProduct = productList.filter((item) =>
      item.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );

    setProduct(filteredProduct)
  };

  const renderItem = ({ item }) => (
    <Card style={styles.card} key={item.id}>
      <Card.Cover style={styles.cardImage} source={{ uri: item.image }} />
      <Card.Content>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardPrice}>{item.unitPrice} $</Text>
      </Card.Content>
    </Card>
  );

  return (
    <PaperProvider style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Text style={{fontSize:23,color:'steelblue',marginBottom:'2%'}}>Product List : </Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Seacrh by Product Name"
          onChangeText={(txt) => searchByName(txt)}
        />

        <FlatList
          data={product}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </SafeAreaView>
    </PaperProvider>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f2f2f2",
  },
  header: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 16,
  },
  flatList: {
    marginTop: 8,
  },
  card: {
    marginBottom: 16,
  },
  cardImage: {
    height: 200,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardPrice: {
    marginTop: 8,
    color: "green",
  },
  searchInput: {
    height: 40,
    borderColor: "grey",
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    backgroundColor:'steelblue',
    
  },
});
