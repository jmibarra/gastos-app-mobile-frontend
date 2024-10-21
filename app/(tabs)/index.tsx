import React, { useContext, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { MiniTable } from "@/components/periods/Table";
import { AuthContext } from "@/context/AuthContext";
import moment from "moment";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";

const mockData = {
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

const PeriodOverview = () => {
  const { user } = useContext(AuthContext)!;
  const [selectedPeriod, setSelectedPeriod] = useState("Octubre 2024");

  return (
    <View >
        <Center>
            <Box>
                <TouchableOpacity>
                    <Text >{selectedPeriod}</Text>
                </TouchableOpacity>
            </Box>
        </Center>
        <Box>
            <MiniTable title="Gastos" data={mockData.expenses} />
        </Box>
        <Box>
            <MiniTable title="Ingresos" data={mockData.income} />
        </Box>
        <Box>
            <Text >{`Ahorros: $${mockData.savings}`}</Text>
        </Box>
        
        
    </View>
  );
};


export default PeriodOverview;
