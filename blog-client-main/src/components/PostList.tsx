import React from 'react';
import { Post } from '../types';
import PostCard from './PostCard';
import Logon from './Logon';

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    // <div>
    //   {posts.map((post) => (
    //     // <div key={post._id}>
    //     //   <h2>{post.title}</h2>
    //     //   <p>{post.content.substring(0, 100)}...</p>
    //     //   <small>Created at: {new Date(post.createdAt).toLocaleString()}</small>
    //     // </div>

    //     <PostCard key={post._id} post={post} />
    //   ))}
    // </div>
    <div className="container w-screen h-screen my-12 mx-auto px-4 md:px-12 ">
    <div className="flex flex-wrap -mx-1 lg:-mx-4">

        {posts.map((post) => (

        <PostCard key={post._id} post={post} />
      ))}
   

    </div>
</div>
  );
};

export default PostList;