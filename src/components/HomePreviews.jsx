
import PreviewCard from './PreviewCard';

const HomePreviews = () => {
    return (
        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2">
            <div className="md:col-span-2">
            <PreviewCard
            title="Commmunity Blogs"
            description="Community stories and updates"
            intro="Discover the latest news, stories, and updates from our commnunity."
            link="blogs"
            />
            </div>


          
        </div>
    );
};

export default HomePreviews;

