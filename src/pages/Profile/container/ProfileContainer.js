import { useState } from "react";
import { v4 as uuid } from "uuid";

import ProfileLayout from "../components/ProfileLayout";

const data = [];

const ProfileContainer = () => {
  const [posts, setPosts] = useState(data);

  const handleAddPost = (textPost) => {
    setPosts([{ id: uuid(), textPost }, ...posts]);
  };

  const handleRemovePost = (id) => {
    setPosts([...posts].filter((post) => post.id !== id));
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
