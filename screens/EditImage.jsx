import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { ProfileContext } from '../contexts/ProfileContext';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import styles from './edit.style'

const EditImage = () => {
  // Accessing and updating profile context, initializing state with current image
  const { profile, handleUpdate } = useContext(ProfileContext);
  const [image, setImage] = useState(profile.image);
  const navigation = useNavigation();

  console.log('Current image:', image); // Log the current image URI

  // Function to handle image selection
  const handleChooseImage = async () => {
    // Requesting permission to access media library
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera roll permissions to make this work!');
      return;
    }

    // Launching the image picker
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // Handling the image selection result
    if (!result.cancelled && result.assets && result.assets.length > 0) {
      const newImageUri = result.assets[0].uri;
      setImage(newImageUri);
      handleUpdate('image', newImageUri);
    }
  };

  const handleUpdatePress = () => {
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

      <Text style={styles.headerText}>Upload a photo of yourself:</Text>

      {/* Touchable area for selecting an image */}
      <TouchableOpacity onPress={handleChooseImage} style={styles.imageContainer}>
        {typeof image === 'string' ? (
          <Image source={{ uri: image }} style={styles.image} onError={(e) => console.log('Image load error:', e)} />
        ) : (
          <Image source={require('../assets/avatar.png')} style={styles.image} onError={(e) => console.log('Image load error:', e)} />
        )}
      </TouchableOpacity>

      {/* Update button */}
      <TouchableOpacity style={styles.button} onPress={handleUpdatePress}>
        <Text style={styles.buttonText}>Update</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EditImage;
