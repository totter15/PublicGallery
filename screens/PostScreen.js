import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ScrollView, StyleSheet} from 'react-native';
import PostCard from '../compoenets/PostCard';
import {useEffect} from 'react/cjs/react.production.min';
import events from '../lib/events';

const PostScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {post} = route.params;

  useEffect(() => {
    const handler = ({description}) => {
      navigation.setParams({posts: {...post, description}});
    };
    events.addListener('updatePost', handler);
    return () => {
      events.removeListener('updatePost', handler);
    };
  }, [post, navigation]);

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <PostCard
        user={post.user}
        photoURL={post.photoURL}
        description={post.description}
        createdAt={post.createdAt}
        id={post.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  block: {flex: 1},
  contentContainer: {
    paddingBottom: 40,
  },
});

export default PostScreen;
