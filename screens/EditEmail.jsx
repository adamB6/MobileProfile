import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './style'; 
import { ProfileContext } from '../contexts/ProfileContext';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import EditableInput from '../components/EditableInput';

const EditEmail = () => {
  const { profile, handleUpdate } = useContext(ProfileContext);
  const [email, setEmail] = useState(profile.email);
  const navigation = useNavigation();
  const validator = require("validator");

  const handleUpdatePress = () => {
    // Use validator to ensure valid email format
    if(validator.isEmail(email)){
      handleUpdate('email', email.trim());
      navigation.goBack();
    }else{
      alert("Please enter a valid email.");
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

      <Text style={styles.headerTextBlack}>What's your email?</Text>

      {/* Editable input for email */}
      <View style={styles.inputGroup}>
        <EditableInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address" // Set keyboardType for email input
        />
      </View>

      {/* Update Button */}
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdatePress}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditEmail;
