import { useParams } from 'react-router-dom';
import blogs from '../data/blogs.json';


export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id);

  if (!blog) return <div className="p-8 text-center text-red-500">Blog not found.</div>;

  return (
    <div className="max-w-4xl min-h-screen p-8 mx-auto bg-white">
      <img src={blog.image} alt={blog.title} className="object-cover w-full h-64 mb-6 rounded-xl" />
      <h1 className="mb-4 text-4xl font-bold text-blue-700">{blog.title}</h1>
      <p className="leading-relaxed text-gray-700 whitespace-pre-line">{blog.content}</p>
    </div>
  );
}
