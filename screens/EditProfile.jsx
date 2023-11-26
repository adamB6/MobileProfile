import React, { useContext } from 'react';
import { View, ScrollView, SafeAreaView, TouchableOpacity, Image, Text } from 'react-native';
import { COLORS, SIZES } from '../constants';
import { styles } from './editprofile.style';
import { useNavigation } from '@react-navigation/native';
import { ProfileContext } from '../contexts/ProfileContext';
import { AntDesign } from '@expo/vector-icons';

const EditProfile = () => {
  // Accessing profile data and functions from context
  const { profile, handleUpdate } = useContext(ProfileContext);
  // Hook for handling navigation
  const navigation = useNavigation();

  return (
    // Safe area wrapper to avoid overlap with system UI
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <Text style={styles.headerText}>Edit Profile</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
      
        {/* Touchable area for profile image, navigates to image edit screen */}
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <TouchableOpacity onPress={() => navigation.navigate("EditImage")}>
            <Image
              source={profile.image ? { uri: profile.image } : require('../assets/avatar.png')}
              style={styles.image}
              onError={(e) => console.log('Image load error:', e)}
            />
            <Image source={require('../assets/pencil_22.png')} style={styles.editIcon} />
          </TouchableOpacity>

          {/* Section for editing name, navigates to name edit screen */}
          <View>
            <Text style={styles.labelText}>Name</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("EditName")}
            >
              <Text style={styles.buttonText}>{profile.firstName} {profile.lastName}</Text>

              <AntDesign name="right" size={20} color="gray" />
            </TouchableOpacity>
          </View>

          {/* Section for editing phone number, navigates to phone edit screen */}
          <View>
            <Text style={styles.labelText}>Phone</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("EditPhone")}
            >
              <Text style={styles.buttonText}>{profile.phone}</Text>

              <AntDesign name="right" size={20} color="gray" />
            </TouchableOpacity>
          </View>

          {/* Section for editing email, navigates to email edit screen */}
          <View>
            <Text style={styles.labelText}>Email</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("EditEmail")}
            >
              <Text style={styles.buttonText}>{profile.email}</Text>

              <AntDesign name="right" size={20} color="gray" />
            </TouchableOpacity>
          </View>

          {/* Section for editing 'About' information, navigates to about edit screen */}
          <View style={styles.inputContainer}>
            <Text style={styles.labelText}>Tell us about yourself</Text>
            <TouchableOpacity
              style={styles.fullLengthButton}
              onPress={() => navigation.navigate("EditAbout")}
            >
              <Text style={styles.fullLengthText}>{profile.about}</Text>

              <AntDesign name="right" size={20} color="gray" />
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfile;
