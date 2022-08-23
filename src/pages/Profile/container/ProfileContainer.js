import { useState, useCallback } from "react";
import { v4 as uuid } from "uuid";

import ProfileLayout from "../components/ProfileLayout";

import { data } from "../../../static/Data";

const ProfileContainer = () => {
  const [posts, setPosts] = useState(data.profilePage?.postList);
  const [newTextPost, setNewTextPost] = useState("");

  const handleAddPost = useCallback((textPost) => {
    setPosts((state) => {
      const postsCopy = [...state];

      const newPost = {
        id: uuid(),
        textPost,
        likes: 0,
      };

      return [newPost, ...postsCopy];
    });
  }, []);

  const handleRemovePost = useCallback((id) => {
    setPosts((state) => {
      const postsCopy = [...state];

      return postsCopy.filter((post) => post.id !== id);
    });
  }, []);

  const handleFormChange = useCallback((event) => {
    setNewTextPost(event.target.value);
  }, []);

  const handleFormSubmit = useCallback((event) => {
    event.preventDefault();
    setNewTextPost("");
  }, []);

  const handleClearForm = useCallback(() => {
    setNewTextPost("");
  }, []);

  const handleIncrementLikes = useCallback((id) => {
    setPosts((state) => {
      const postsCopy = [...state];

      const updateValueLikes = postsCopy.find((post) => post.id === id);

      updateValueLikes.likes += 1;

      return postsCopy;
    });
  }, []);

  const handleDecrementLikes = useCallback((id) => {
    setPosts((state) => {
      const postsCopy = [...state];

      const updateValueLikes = postsCopy.find((post) => post.id === id);

      updateValueLikes.likes -= 1;

      return postsCopy;
    });
  }, []);

  return (
    <ProfileLayout
      posts={posts}
      onAddPost={handleAddPost}
      onRemovePost={handleRemovePost}
      newTextPost={newTextPost}
      onFormChange={handleFormChange}
      onFormSubmit={handleFormSubmit}
      onClearForm={handleClearForm}
      onIncrementLikes={handleIncrementLikes}
      onDecrementLikes={handleDecrementLikes}
    />
  );
};

export default ProfileContainer;
