import posts from "../data/posts";

export const getPosts = async () => {
  return posts;
};

export const getPostById = async (
  postId
) => {
  return posts.find(
    (post) => post.id === Number(postId)
  );
};

export const createPost = async (
  postData
) => {
  console.log(
    "Create post:",
    postData
  );

  return postData;
};