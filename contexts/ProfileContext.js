import React, { createContext, useState } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    firstName: 'Micah',
    lastName: 'Smith',
    phone: '(208) 206-5039',
    email: 'micahsmith@gmail.com',
    about: 'Hi my name is Micah Smith. I am from Mesa but\
    go to school in Salt Lake City. I make this drive all\
    the time and have plenty',
    image: null,
  });

  const handleUpdate = (field, value) => {
    setProfile(prevProfile => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  return (
    <ProfileContext.Provider value={{ profile, handleUpdate }}>
      {children}
    </ProfileContext.Provider>
  );
};
