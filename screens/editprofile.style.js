import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    padding: 20, 
  },
  headerText: {
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
});
