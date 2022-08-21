import { useState, useCallback } from "react";
import { v4 as uuid } from "uuid";

import ProfileLayout from "../components/ProfileLayout";

import { data } from "../../../static/Data";

const ProfileContainer = () => {
  const [posts, setPosts] = useState(data.profilePage?.postList);

  const handleAddPost = useCallback((textPost) => {
    setPosts((state) => {
      const postsCopy = [...state];

      const newPost = {
        id: uuid(),
        textPost,
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

  return (
    <ProfileLayout
      posts={posts}
      handleAddPost={handleAddPost}
      handleRemovePost={handleRemovePost}
    />
  );
};

export default ProfileContainer;
