import { MiniTable } from "@/components/periods/Table";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

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

const InvestmentOverview = () => {
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

export default InvestmentOverview;
