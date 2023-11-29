import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { ProfileContext } from '../contexts/ProfileContext';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { styles } from './style'

const EditImage = () => {
    // Accessing and updating profile context, initializing state with current image
    const { profile, handleUpdate } = useContext(ProfileContext);
    const [image, setImage] = useState(profile.image);
    const navigation = useNavigation();

    // Function to handle image selection
    const handleChooseImage = async () => {
        try {
            // Requesting permission to access media library
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
                return;
            }

            // Launching the image picker
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            // Handling the image selection result
            if (!result.canceled && result.assets && result.assets.length > 0) {
                const newImageUri = result.assets[0].uri;
                setImage(newImageUri);
            }
            
        } catch (error) {
            console.error('Error picking image:', error);
        }
    };

    const handleUpdatePress = () => {
        if (image) {
            handleUpdate('image', image);
            navigation.goBack();
        } else {
            alert('No image selected');
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

            <Text style={styles.headerTextBlack}>Upload a photo of yourself:</Text>

            {/* Touchable area for selecting an image */}
            <TouchableOpacity onPress={handleChooseImage} style={styles.imageContainer}>
                {typeof image === 'string' ? (
                    <Image source={{ uri: image }} style={styles.imageUpdate} onError={(e) => console.log('Image load error:', e)} />
                ) : (
                    <Image source={require('../assets/avatar.png')} style={styles.imageUpdate} onError={(e) => console.log('Image load error:', e)} />
                )}
            </TouchableOpacity>

            {/* Update button */}
            <TouchableOpacity style={styles.updateButton} onPress={handleUpdatePress}>
                <Text style={styles.updateButtonText}>Update</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default EditImage;
