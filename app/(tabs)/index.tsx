import React, { useContext, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { MiniTable } from "@/components/periods/Table";
import { AuthContext } from "@/context/AuthContext";
import moment from "moment";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";
import { VStack } from "@/components/ui/vstack";

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
                    <Heading size="2xl">{selectedPeriod}</Heading>
                </TouchableOpacity>
            </Box>
        </Center>
        <Divider className="my-0.5" />
        <VStack>
            <Box>
                <MiniTable title="Gastos" data={mockData.expenses} />
            </Box>
            <Box>
                <MiniTable title="Ingresos" data={mockData.income} />
            </Box>
            <Center>
                <Box className="px-3 h-8 rounded border">
                    <Text >{`Ahorros: $${mockData.savings}`}</Text>
                </Box>
            </Center>
        </VStack>
        
        
        
    </View>
  );
};


export default PeriodOverview;
