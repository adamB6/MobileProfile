import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './style';
import { ProfileContext } from '../contexts/ProfileContext';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import EditableInput from '../components/EditableInput'

const EditPhone = () => {
  // Accessing and updating profile context, initializing state with phone number
  const { profile, handleUpdate } = useContext(ProfileContext);
  const [phoneNumber, setPhoneNumber] = useState(profile.phone);
  const navigation = useNavigation();

  // Function to handle phone number update
  const formatPhoneNumber = (input) => {
    // Remove all non-digit characters
    const digits = input.replace(/\D/g, '');

    // Slice the string to match the desired format and return it
    const areaCode = digits.slice(0, 3);
    const middle = digits.slice(3, 6);
    const last = digits.slice(6, 10);

    if (digits.length < 4) return digits;
    if (digits.length < 7) return `(${areaCode}) ${middle}`;
    return `(${areaCode}) ${middle}-${last}`;
  };

  // Function to handle phone number update
  const handleUpdatePress = () => {
    // Format the phone number
    const formattedPhone = formatPhoneNumber(phoneNumber);

    // Check if the formatted phone number has exactly 10 digits
    if (formattedPhone.replace(/\D/g, '').length === 10) {
      // Update the phone number and navigate back
      handleUpdate('phone', formattedPhone);
      navigation.goBack();
    } else {
      // Alert the user if the phone number is not valid
      alert('Please enter a valid phone number in the format (XXX) XXX-XXXX');
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

      <Text style={styles.headerTextBlack}>What's your phone number?</Text>

      {/* Editable input for phone number */}
      <View style={styles.inputGroup}>
        <EditableInput
          label="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />
      </View>

      {/* Button for submitting the updated phone number */}
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdatePress}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default EditPhone;
