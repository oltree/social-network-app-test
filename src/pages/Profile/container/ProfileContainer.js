import { useState } from "react";
import { v4 as uuid } from "uuid";

import ProfileLayout from "../components/ProfileLayout";

import { allProjectData } from "../../../static/allProjectData";

const ProfileContainer = () => {
  const [posts, setPosts] = useState(allProjectData.profilePage?.postList);

  const handleAddPost = (textPost) => {
    setPosts((state) => {
      const postsCopy = [...state];

      const newPost = {
        id: uuid(),
        textPost,
      };

      return [newPost, ...postsCopy];
    });
  };

  const handleRemovePost = (id) => {
    setPosts((state) => {
      const postsCopy = [...state];

      return postsCopy.filter((post) => post.id !== id);
    });
  };

  return (
    <ProfileLayout
      posts={posts}
      handleAddPost={handleAddPost}
      handleRemovePost={handleRemovePost}
    />
  );
};

export default ProfileContainer;
