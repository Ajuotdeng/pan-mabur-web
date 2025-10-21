import PreviewCard from './PreviewCard';
import blogs from '../data/blogs.json';
import { Link } from 'react-router-dom';

const HomePreviews = () => {
    const firstBlog = blogs[0];

    return (
        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2">
            <div className="md:col-span-2">
                <PreviewCard
                    title="Commmunity Blogs"
                    description="Community stories and updates"
                    intro="Discover the latest news, stories, and updates from our commnunity."
                >
                    {/* Blog Preview inside Community Blogs */}
                    {firstBlog && (
                        <div className="flex flex-col w-full max-w-xl p-4 mx-auto mt-6 bg-white rounded-lg shadow">
                            <img
                                src={firstBlog.image}
                                alt={firstBlog.title}
                                className="object-cover w-full h-48 mb-4 rounded"
                            />
                            <h3 className="mb-2 text-xl font-bold">{firstBlog.title}</h3>
                            <p className="mb-4">{firstBlog.summary}</p>
                            <Link
                                to={`/blogs/${firstBlog.id}`}
                                className="self-start text-blue-600 hover:underline"
                            >
                                Read more &rarr;
                            </Link>
                        </div>
                    )}
                </PreviewCard>
            </div>
        </div>
    );
};

export default HomePreviews; 