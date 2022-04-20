import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Profile from '../compoenets/Profile';

const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {userId, displayName} = route.params ?? {};

  useEffect(() => {
    navigation.setOptions({
      title: displayName,
    });
  }, [navigation, displayName]);

  return <Profile userId={userId} />;
};

export default ProfileScreen;
