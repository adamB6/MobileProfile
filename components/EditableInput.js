import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

// EditableInput: A reusable input component
// Accepts props for customization and functionality
const EditableInput = ({
    label,          // Label text for the input
    value,          // Current value of the input
    onChangeText,   // Function to call when the input text changes
    placeholder,    // Placeholder text for the input
    multiline = false, // Boolean to determine if the input should be multiline
    maxLength,      // Maximum length of the input
    left = false    // Boolean to determine the alignment of the input
}) => {
    const handleChangeText = (text) => {
        // Checks if maxLength is set and if the text length is within the limit
        if (!maxLength || text.length <= maxLength) {
            onChangeText(text);
        }
    };

    return (
        // View container, style changes based on the 'left' prop...not a great solution
        <View style={left ? styles.leftContainer : styles.container}>
            {/* Text component for the label, shown only if multiline is false. This is to handle differences
            between About input vs. others */} 
            <Text style={styles.label}>{!multiline ? label : ''}</Text>
            <TextInput
                style={multiline ? styles.inputMultiline : styles.input}
                onChangeText={handleChangeText}
                value={value}
                placeholder={placeholder}
                multiline={multiline}
                maxLength={maxLength}
                left={left}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginLeft: 15,
        marginRight: 15,
    },
    label: {
        fontSize: 16,
        color: 'gray',
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10,
    },
    input: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    inputMultiline: {
        padding: 10,
        fontSize: 16,
        height: 150,
        textAlignVertical: 'top',
    },
    leftContainer: {
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginLeft: 15,
        flex: 1,
    }
});

export default EditableInput;
