import { Text, TouchableOpacity, View } from "react-native";
import { COLORS, SIZES } from "../../constants";
import React from "react";
import styles from "./heading.style";
import { Ionicons } from "@expo/vector-icons";
const Heading = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity>
          <Ionicons name="ios-grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Heading;
