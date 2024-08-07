export interface Post {
    _id: string;
    title: string;
    content: string;
    authorId: string;
    createdAt: string;
  }
  
  export interface User {
    _id: string;
    email: string;
  }