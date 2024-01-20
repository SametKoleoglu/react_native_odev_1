import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import productList from "../data";
import { Card, TextInput } from "react-native-paper";

const ProducsFilter = () => {
  const [products, setProducts] = useState(productList);
  const searchByName = (productName) => {
    var productName = productName.trim();

    let filteredProducts = productList.filter((item) =>
      item.name.toLocaleLowerCase().includes(productName.toLocaleLowerCase())
    );

    setProducts(filteredProducts);
  };

  return (
    <ScrollView>
      <TextInput
        label={"Search by name"}
        onChangeText={(text) => searchByName(text)}
        style={{ marginBottom: "3%" }}
      />

      {products.map((item, index) => {
        return (
          <Card key={item.id}>
            <Card.Cover source={{ uri: item.image }} />
            <Card.Title titleStyle={{ fontSize: 23 }} title={item.name} />
            <Card.Content>
              <Text>{item.unitPrice}</Text>
            </Card.Content>
          </Card>
        );
      })}
    </ScrollView>
  );
};

export default ProducsFilter;

const styles = StyleSheet.create({});
