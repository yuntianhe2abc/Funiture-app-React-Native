import { FlatList, View, Text, ActivityIndicator } from "react-native";
import React from "react";
import styles from "./productList.style";
import useFetch from "../../hooks/useFetch";
import { COLORS, SIZES } from "../../constants";
import ProductCardView from "./ProductCardView";
const ProductList = () => {
  const { data, isLoading, error } = useFetch();
  //   console.log(data);
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => <ProductCardView item={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      />
    </View>
  );
  return (
    <View>
      <Text>ProductList</Text>
    </View>
  );
};

export default ProductList;
