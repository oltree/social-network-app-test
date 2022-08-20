import { useState } from "react";
import { v4 as uuid } from "uuid";

import ProfileLayout from "../components/ProfileLayout";

import { allProjectData } from "../../../static/allProjectData";

const ProfileContainer = () => {
  const [posts, setPosts] = useState(allProjectData.profilePage?.postList);

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
