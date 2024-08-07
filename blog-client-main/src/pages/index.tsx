import { GetServerSideProps } from 'next';
import Layout from '../components/Layout';
import PostList from '../components/PostList';
import { Post } from '../types';
import api from '../utils/api';

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <Layout>
      <h1 className="text-2xl font-bold hover:text-gray-900 text-center mt-4">Latest Posts</h1>
      <PostList posts={posts} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const token = context.req.cookies.token; // Assuming you store the token in a cookie
    const config = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
    const res = await api.get('/posts', config);
    const posts = res.data;

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error('Failed to fetch posts', error);
    return {
      props: {
        posts: [],
      },
    };
  }
};