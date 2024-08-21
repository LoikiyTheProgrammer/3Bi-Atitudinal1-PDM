import { StyleSheet } from 'react-native';
import { width, height} from '../../constants/dimensions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    header: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    historyButton: {
        width: '40%',
        height: '30%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d9d9d9',
    },

    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    main: {
        width: '100%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },

    slaView: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        paddingHorizontal: '20%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-between',
    },

    minusButton: {
        width: 30,
        height: 30,
    },

    minusImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    plusButton: {
        width: 30,
        height: 30,
    },

    plusImage: {
        width: '100%',
        height: '100%',
    },

    footer: {
        width: '100%',
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#d9d9d9',
    },

    resetButton: {
        width: 50,
        height: 50,
        position: 'relative',
    },

    resetImage: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },

    diceView: {
        width: '95%',
        height: '50%',
        paddingBottom: 25,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    rollButton: {
        width: '20%',
        height: '100%',
    },

    diceContainer: {
        width: '100%',
        height: '100%',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },

    diceImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    diceText: {
        position: 'absolute',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default styles;