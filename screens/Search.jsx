import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./search.style";
import { Feather, Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants";
import axios from "axios";
import { ProductCardView, ProductList } from "../components";
import { FlatList } from "react-native-gesture-handler";

const Search = () => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // console.log(searchKey);
  //http://localhost:3004/api/products/search/${searchKey}
  const searchProductApi = "http://localhost:3004/api/products/search/";

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${searchProductApi}${searchKey}`);
      setSearchResult(response.data);
    } catch (error) {
      console.log("Failed to get products", error);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons
            style={styles.searchIcon}
            name="camera-outline"
            size={SIZES.xLarge}
          />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="What are you looking for"
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => handleSearch()}
          >
            <Feather name="search" size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
      {searchResult.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={require("../assets/images/Pose23.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResult}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCardView item={item} />}
        />
      )}
      <View>{/* <ProductList /> */}</View>
    </SafeAreaView>
  );
};

export default Search;
