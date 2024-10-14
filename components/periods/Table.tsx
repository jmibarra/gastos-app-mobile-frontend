import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export const MiniTable = ({ title, data }: { title: string; data: any[] }) => (
  <View style={styles.tableContainer}>
    <Text style={styles.tableTitle}>{title}</Text>
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Text>{item.description}</Text>
          <Text>{`$${item.amount}`}</Text>
        </View>
      )}
      ListEmptyComponent={<Text>No data</Text>}
    />
  </View>
);

const styles = StyleSheet.create({
  tableContainer: {
    marginBottom: 20,
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
});
