import { SafeAreaView, View, Button, StyleSheet } from "react-native"
import DiceButton from "../components/DiceButton"
import { useState } from "react"

export default function MainScreen() {
    const [diceResult, setDiceResult] = useState('null')
    /** 
    * @param (number)
    * @returns(number)
    * @description Sorteia um número entre 1 e x, retornando o valor sorteado aleatoriamente
    */
    function rollDice(x){
       // return Math.random()
        setDiceResult((Math.randon() * 10).toFixed(0))
    }

    return(
        <SafeAreaView>
            <View style={styles.header}>
                <Text>{}</Text>
                <Text></Text>
            </View>

            <View style={styles.footer}>
                <View style={styles.containerDiv}>
                    <View style={styles.div}>
                        <DiceButton dice='2' rollDice={() => rollDice(2)}/>
                        <DiceButton dice='4' rollDice={() => rollDice(4)}/>
                        <DiceButton dice='6' rollDice={() => rollDice(6)}/>
                        <DiceButton dice='8' rollDice={() => rollDice(8)}/>
                    </View>
                    <View style={styles.div}>
                        <Button> D10 </Button>
                        <Button> D12 </Button>
                        <Button> D20 </Button>
                        <Button> D100 </Button>
                    </View>
                </View>    
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'pink'
    },
    footer:{
        backgroundColor: 'red'
    },
    containerDiv:{
        backgroundColor: 'green'
    },
    div:{
        backgroundColor: 'yellow'
    }
})