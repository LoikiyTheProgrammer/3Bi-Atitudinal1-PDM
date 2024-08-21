import { TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function DiceButton({ dices, rollDice }) {

  return (
    <TouchableOpacity onPress={rollDice} style={styles.button}>
      <SvgComponent />
    </TouchableOpacity>
  );
}