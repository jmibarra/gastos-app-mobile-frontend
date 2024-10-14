import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const mockData = {
  period: "Octubre 2024",
  expenses: [
    { id: "1", description: "Compra supermercado", amount: 100 },
    { id: "2", description: "Pago luz", amount: 50 },
  ],
  income: [
    { id: "1", description: "Sueldo", amount: 2000 },
    { id: "2", description: "Freelance", amount: 500 },
  ],
  savings: 200,
};

const MiniTable = ({ title, data }) => (
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

const PeriodOverview = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.periodTitle}>{mockData.period}</Text>

      <MiniTable title="Gastos" data={mockData.expenses} />
      <MiniTable title="Ingresos" data={mockData.income} />

      <View style={styles.savingsContainer}>
        <Text
          style={styles.savingsText}
        >{`Ahorros: $${mockData.savings}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  periodTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
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
  savingsContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#dff0d8",
  },
  savingsText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PeriodOverview;
