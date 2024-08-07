import React from 'react'
import { Post } from '../types';

interface PostCardProps {
    post: Post;
  }

const PostCard : React.FC<PostCardProps> = ({post}:any) => {

  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
{/* <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
<article className="overflow-hidden rounded-lg shadow-lg">
    <header className="flex items-center justify-between leading-tight p-2 md:p-4">
        <h1 className="text-lg no-underline hover:underline text-black">
                Article Title
        </h1>
        <p className="text-grey-darker text-sm">
            11/1/19
        </p>
    </header>
    <footer className="flex items-center justify-between leading-none p-2 md:p-4">
        <a className="flex items-center no-underline hover:underline text-black" href="#">
            <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
            <p className="ml-2 text-sm">
                Author Name
            </p>
        </a>
    </footer>
</article> 


// </div>*/}
  return (
    // <div className='w-48 h-10 bg-slate-500'>
    //     <div key={post._id} className='w-48 bg-slate-500'>
    //       <h2>{post.title}</h2>
    //       <p>{post.content.substring(0, 100)}...</p>
    //       <small>{formattedDate}</small>
    //     </div>
    // </div>

    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
<article className="overflow-hidden rounded-lg shadow-lg bg-slate-50">
    <header className="flex items-center justify-between leading-tight p-2 md:p-4 mt-2">
        <h1 className="text-2xl font-bold text-black">
        {post.title}
        </h1>
        <p className="text-grey-darker text-m">
        {formattedDate}
        </p>
    </header>
    <footer className="flex items-center justify-between leading-none p-2 md:p-4 h-48">
    <p className="text-sm text-gray-800 leading-relaxed">
    {post.content.substring(0, 245)}...
    
            </p>
    </footer>
</article> 
</div>

  )
}

export default PostCard

