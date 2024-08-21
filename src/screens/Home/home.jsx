import React, { useState } from 'react';
import styles from './styleHome';
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();

    const [selectedDice, setSelectedDice] = useState('D6');
    const [diceCounts, setDiceCounts] = useState({
        D2: 1,
        D4: 1,
        D6: 1,
        D8: 1,
        D10: 1,
        D12: 1,
        D20: 1,
        D100: 1,
    });

    const [results, setResults] = useState({
        D2: 0,
        D4: 0,
        D6: 0,
        D8: 0,
        D10: 0,
        D12: 0,
        D20: 0,
        D100: 0,
    });

    const [history, setHistory] = useState([]);

    const rollDice = (diceType, sides) => {
        const newResults = Array.from({ length: diceCounts[diceType] }, () =>
            Math.floor(Math.random() * sides) + 1
        );

        const sum = newResults.reduce((acc, curr) => acc + curr, 0);

        setResults(prevResults => ({ ...prevResults, [diceType]: sum }));

        const newEntry = { diceType, rolls: newResults };
        setHistory(prevHistory => [...prevHistory, newEntry]);

        setSelectedDice(diceType);
    };

    const updateDiceCount = (increment) => {
        setDiceCounts(prevCounts => {
            const newCount = prevCounts[selectedDice] + increment;
            return {
                ...prevCounts,
                [selectedDice]: Math.min(100, Math.max(1, newCount)),
            };
        });
    };

    const resetDice = () => {
        setDiceCounts({
            D2: 1,
            D4: 1,
            D6: 1,
            D8: 1,
            D10: 1,
            D12: 1,
            D20: 1,
            D100: 1,
        });
    
        setResults({
            D2: 0,
            D4: 0,
            D6: 0,
            D8: 0,
            D10: 0,
            D12: 0,
            D20: 0,
            D100: 0,
        });
    
        setSelectedDice('D6');
    };    

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.historyButton} onPress={() => navigation.navigate('History', { history })}>
                    <Text style={styles.headerText}>View History</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.main}>
                <View style={styles.slaView}>
                    <TouchableOpacity style={styles.minusButton} onPress={() => updateDiceCount(-1)}>
                        <Image style={styles.minusImage} source={require('../../assets/MinusSign.png')}/>
                    </TouchableOpacity>

                    <View style={styles.resultView}>
                        <Text style={styles.resultText}>
                            {selectedDice}: {results[selectedDice]}
                        </Text>
                        <Text style={styles.diceCountText}>
                            Quantidade: {diceCounts[selectedDice]}
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.plusButton} onPress={() => updateDiceCount(1)}>
                        <Image style={styles.plusImage} source={require('../../assets/PlusSign.png')}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.resetButton} onPress={resetDice}>
                    <Image style={styles.resetImage} source={require('../../assets/Reset.png')}/>
                </TouchableOpacity>

                <View style={styles.diceView}>
                    <TouchableOpacity style={styles.rollButton} onPress={() => rollDice('D2', 2)}>
                        <View style={styles.diceContainer}>
                            <Image style={styles.diceImage} source={require('../../assets/Circle.png')}/>
                            <Text style={styles.diceText}>D2</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.rollButton} onPress={() => rollDice('D4', 4)}>
                        <View style={styles.diceContainer}>
                            <Image style={styles.diceImage} source={require('../../assets/Triangle.png')}/>
                            <Text style={styles.diceText}>D4</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.rollButton} onPress={() => rollDice('D6', 6)}>
                        <View style={styles.diceContainer}>
                            <Image style={styles.diceImage} source={require('../../assets/Square.png')}/>
                            <Text style={styles.diceText}>D6</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.rollButton} onPress={() => rollDice('D8', 8)}>
                        <View style={styles.diceContainer}>
                            <Image style={styles.diceImage} source={require('../../assets/Diamond.png')}/>
                            <Text style={styles.diceText}>D8</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.diceView}>
                    <TouchableOpacity style={styles.rollButton} onPress={() => rollDice('D10', 10)}>
                        <View style={styles.diceContainer}>
                            <Image style={styles.diceImage} source={require('../../assets/Diamond 90º.png')}/>
                            <Text style={styles.diceText}>D10</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.rollButton} onPress={() => rollDice('D12', 12)}>
                        <View style={styles.diceContainer}>
                            <Image style={styles.diceImage} source={require('../../assets/Pentagon.png')}/>
                            <Text style={styles.diceText}>D12</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.rollButton} onPress={() => rollDice('D20', 20)}>
                        <View style={styles.diceContainer}>
                            <Image style={styles.diceImage} source={require('../../assets/Hexagon.png')}/>
                            <Text style={styles.diceText}>D20</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.rollButton} onPress={() => rollDice('D100', 100)}>
                        <View style={styles.diceContainer}>
                            <Image style={styles.diceImage} source={require('../../assets/Diamond 90º.png')}/>
                            <Text style={styles.diceText}>D100</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}