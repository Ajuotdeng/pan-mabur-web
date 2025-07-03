import blogs from '../data/blogs.json';
import { Link } from 'react-router-dom';


export default function Blogs() {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <h2 className="mb-8 text-3xl font-bold text-center text-blue-800">Pan Mabur Blog Archive</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {blogs.map(blog => (
          <div key={blog.id} className="p-4 bg-white shadow rounded-xl">
            <img src={blog.image} alt={blog.title} className="object-cover w-full h-48 mb-4 rounded-xl" />
            <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{blog.summary}</p>
            <Link to={`/blogs/${blog.id}`} className="inline-block mt-4 text-blue-600 hover:underline">
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
