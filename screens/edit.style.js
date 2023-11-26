import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff', 
        padding: 20, 
    },
    backButton: {
        marginTop: 15,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40, 
        marginTop: 100,
        marginLeft: 15,
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        marginBottom: 20, 
    },
    button: {
        backgroundColor: '#000', 
        padding: 15, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 175,
        marginLeft: 15,
        marginRight: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,

        elevation: 5,
    },
    buttonText: {
        color: '#fff', 
        fontSize: 18,
        fontWeight: 'bold',
    },
    image: {
        alignSelf: 'center',
        width: 250,
        height: 250,
        borderWidth: 1,
        borderColor: '#4169E1',
    },
});

export default styles;