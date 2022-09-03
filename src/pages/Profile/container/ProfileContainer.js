import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProfileLayout from "../components/ProfileLayout";

import { postsSelector } from "../selectors/";

import { CREATE_POST, REMOVE_POST } from "../actions";

import { useForm } from "../../../hooks";

const ProfileContainer = () => {
  const dispatch = useDispatch();

  const posts = useSelector(postsSelector);

  const [formData, handleFormChange, handleFormReset] = useForm({
    postText: "",
  });

  const handlePostCreate = useCallback(
    (event) => {
      event.preventDefault();

      dispatch(CREATE_POST(formData.postText));

      handleFormReset();
    },
    [formData.postText, dispatch, handleFormReset]
  );

  const handlePostRemove = useCallback(
    (id) => {
      dispatch(REMOVE_POST(id));
    },
    [dispatch]
  );

  const handlePostIncrementLike = useCallback(
    (id) => {
      dispatch(REMOVE_POST(id));
    },
    [dispatch]
  );

  const handlePostDecrementLike = useCallback(
    (id) => {
      dispatch(REMOVE_POST(id));
    },
    [dispatch]
  );

  return (
    <ProfileLayout
      posts={posts}
      postText={formData.postText}
      onFormChange={handleFormChange}
      onPostCreate={handlePostCreate}
      onPostRemove={handlePostRemove}
      onPostIncrementLike={handlePostIncrementLike}
      onPostDecrementLike={handlePostDecrementLike}
    />
  );
};

export default ProfileContainer;
