import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { styles } from './style';
import { ProfileContext } from '../contexts/ProfileContext';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import EditableInput from '../components/EditableInput'

const EditAbout = () => {
  const { profile, handleUpdate } = useContext(ProfileContext);
  const [about, setAbout] = useState(profile.about);
  const navigation = useNavigation();

  const handleUpdatePress = () => {
    handleUpdate('about', about.trim());
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Back button for navigation */}
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Text style={styles.headerTextBlack}>Tell us about yourself</Text>

      {/* Editable Input for About */}
      <View style={styles.inputGroup}>
        <EditableInput
          label="About"
          value={about}
          onChangeText={setAbout}
          placeholder="Share something about yourself"
          multiline={true}
          maxLength={500}
        />
      </View>

      {/* Update Button */}
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdatePress}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditAbout;
