import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/home';
import History from '../screens/History/history';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name='History'
                component={History}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>
    );
}