import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './edit.style';
import { ProfileContext } from '../contexts/ProfileContext';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import EditableInput from '../components/EditableInput'

const EditName = () => {
  // Accessing and updating profile context, initializing state with first and last name
  const { profile, handleUpdate } = useContext(ProfileContext);
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const navigation = useNavigation();

  const handleUpdatePress = () => {
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    if (trimmedFirstName.length > 0 && trimmedLastName.length > 0) {
      handleUpdate('firstName', firstName.trim());
      handleUpdate('lastName', lastName.trim());
      navigation.goBack();
    } else {
      alert('Please enter both first and last names');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      
      {/* Back button for navigation */}
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerText}>What's your name?</Text>

      <View style={styles.inputGroup}>
      
        {/* Editable input for names */}
        <EditableInput
          label="First Name"
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Enter your first name"
          left={true}
        />
        <EditableInput
          label="Last Name"
          value={lastName}
          onChangeText={setLastName}
          placeholder="Enter your last name"
        />
      </View>

      {/* Update button */}
      <TouchableOpacity style={styles.button} onPress={handleUpdatePress}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default EditName;
