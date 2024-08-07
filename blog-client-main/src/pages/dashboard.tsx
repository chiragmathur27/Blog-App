// import { useState, useEffect } from 'react';
// import Layout from '../components/Layout';
// import ProtectedRoute from '../components/ProtectedRoute';
// import PostList from '../components/PostList';
// import { Post } from '../types';
// import api from '../utils/api';
// import { getUserId } from '../utils/auth';
// import { delay } from '../utils/helper';

// export default function Dashboard() {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   // const [userId, setUserId] = useState<string | null>(null);

//   useEffect(() => {

//     fetchUserPosts();
  
//   }, []);


//   // useEffect(()=>{
//   //   if(userId !== "null"){
//   //     fetchUserPosts();
//   //     // setUserId
//   //   }
//   // },[])

//   const fetchUserPosts = async () => {
//     try {
//       // const res = await api.get('/posts');
//       // setPosts(res.data);
//       // console.log(res.data)
//       const id = getUserId();
//       console.log('Logged in user ID:', id);
//       const res = await api.get(`/posts/author?author=${id}`);
//       console.log(res.data)
//       setPosts(res.data);
//     } catch (error) {
//       console.error('Failed to fetch user posts', error);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await api.post('/posts', { title, content });
//       setTitle('');
//       setContent('');
//       fetchUserPosts();
//     } catch (error) {
//       console.error('Failed to create post', error);
//     }
//   };

//   return (
//     <ProtectedRoute>
//       <Layout>
//         <h1>Dashboard</h1>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Title"
//             required
//           />
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             placeholder="Content"
//             required
//           />
//           <button type="submit">Create Post</button>
//         </form>
//         <h2>Your Posts</h2>
//         <div className='w-screen h-screen bg-slate-300'>
//         <PostList posts={posts} />
//         </div>
//       </Layout>
//     </ProtectedRoute>
//   );
// }

// import { useState, useEffect } from 'react';
// import Layout from '../components/Layout';
// import ProtectedRoute from '../components/ProtectedRoute';
// import PostList from '../components/PostList';
// import { Post } from '../types';
// import api from '../utils/api';
// import { getUserId } from '../utils/auth';
// import { delay } from '../utils/helper';

// export default function Dashboard() {
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   useEffect(() => {
//     fetchUserPosts();
//   }, []);

//   const fetchUserPosts = async () => {
//     try {
//       const id = getUserId();
//       console.log('Logged in user ID:', id);
//       const res = await api.get(`/posts/author?author=${id}`);
//       console.log(res.data);
//       setPosts(res.data);
//     } catch (error) {
//       console.error('Failed to fetch user posts', error);
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await api.post('/posts', { title, content });
//       setTitle('');
//       setContent('');
//       fetchUserPosts();
//     } catch (error) {
//       console.error('Failed to create post', error);
//     }
//   };

//   return (
//     <ProtectedRoute>
//       <Layout>
//         <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
//           <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
//           <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-4">
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               placeholder="Title"
//               required
//               className="w-full p-2 pl-10 text-sm text-gray-700"
//             />
//             <textarea
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               placeholder="Content"
//               required
//               className="w-full p-2 pl-10 text-sm text-gray-700"
//             />
//             <button
//               type="submit"
//               className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
//             >
//               Create Post
//             </button>
//           </form>
//           <h2 className="text-2xl font-bold mb-4">Your Posts</h2>
//           <div className="flex flex-wrap -mx-4">
//             <PostList posts={posts} />
//           </div>
//         </div>
//       </Layout>
//     </ProtectedRoute>
//   );
// }

import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import ProtectedRoute from '../components/ProtectedRoute';
import PostList from '../components/PostList';
import { Post } from '../types';
import api from '../utils/api';
import { getUserId } from '../utils/auth';
import { delay } from '../utils/helper';
import ReactQuill from 'react-quill';

export default function Dashboard() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchUserPosts();
  }, []);

  const fetchUserPosts = async () => {
    try {
      const id = getUserId();
      console.log('Logged in user ID:', id);
      const res = await api.get(`/posts/author?author=${id}`);
      console.log(res.data);
      setPosts(res.data);
    } catch (error) {
      console.error('Failed to fetch user posts', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const authorId = getUserId();
      await api.post('/posts', { title, content,authorId });
      setTitle('');
      setContent('');
      fetchUserPosts();
    } catch (error) {
      console.error('Failed to create post', error);
    }
  };

  return (
    <ProtectedRoute>
      <Layout>
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
          <h1 className="text-3xl font-bold mb-4 text-center">Dashboard</h1>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-4">

    

<div className="w-72">
  <div className="relative w-full min-w-[200px] h-10">
    <input
    type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
          
              required
      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 
      focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border
       placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
      placeholder=" " /><label
      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">Title
    </label>
  </div>
</div> 
            <div className="relative w-[32rem] mt-4">
  <div className="relative w-full min-w-[200px]">
    <textarea rows={8}
    value={content}
    onChange={(e) => setContent(e.target.value)}
    required
      className="peer h-full min-h-[100px] w-full !resize-none  rounded-[7px] border border-blue-gray-400 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-400 placeholder-shown:border-t-blue-gray-400 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-400"
      placeholder=" "></textarea>
    <label
      className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Your Blog
    </label>
  </div>
  <div className="flex w-full justify-between py-1.5">

    <div className="flex gap-2">
      <button
        className="select-none rounded-md bg-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="submit"> Create Post
      </button>
    </div>
  </div>
</div>

      
          </form>
          <h2 className="text-2xl font-bold mb-4">Your Posts</h2>
          <div className="flex flex-wrap -mx-4">
            <PostList posts={posts} />
          </div>
        </div>
      </Layout>
    </ProtectedRoute>
  );
}