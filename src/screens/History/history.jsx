import React from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import styles from './styleHistory';
import { useRoute } from '@react-navigation/native';

export default function History() {
    const route = useRoute();
    const { history } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>History</Text>
                <FlatList
                    data={history}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Text>{`${item.diceType}: [${item.rolls.join(', ')}]`}</Text>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}