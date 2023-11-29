import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    headerTextBlack: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 40,
        marginTop: 50,
        marginLeft: 15,
    },
    headerTextBlue: {
        color: '#4169E1',
        fontSize: 30,
        padding: 10,
        marginTop: 50,
        alignItems: 'center',
        alignSelf: 'center',
    },
    labelText: {
        color: 'gray',
    },
    fullLengthButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    fullLengthText: {
        flex: 1,
        fontSize: 16,
        paddingRight: 10,
        fontWeight: 'bold',
    },
    image: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 4,
        borderColor: '#4169E1',
    },
    imageUpdate: {
        alignSelf: 'center',
        width: '90%',
        height: '66%',
        borderWidth: 1,
        borderColor: '#4169E1',
    },
    imageContainer: {
        backgroundColor: '#fff',
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    backButton: {
        marginTop: 15,
        marginLeft: 15,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    arrowIcon: {
        width: 20,
        height: 20,
    },
    editIcon: {
        position: 'absolute',
        width: 25,
        height: 25,
        backgroundColor: 'white',
        borderRadius: 18,
        padding: 2,
        marginLeft: 200,
    },
    updateButton: {
        backgroundColor: '#000',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 15,
        marginRight: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,

        elevation: 5,
    },
    updateButtonText: {
        color: '#fff', 
        fontSize: 18,
        fontWeight: 'bold',
    },
});