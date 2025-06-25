
import PreviewCard from './PreviewCard';

const HomePreviews = () => {
    return (
        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2">
            <div className="md:col-span-2">
            <PreviewCard
            title="From the Blog"
            description="Community stories and updates"
            intro="Discover the latest news, stories, and updates from our commnunity."
            link="blogs"
            />
            </div>


            <PreviewCard
            title="From About"
            description="Pan Mabur family background"
             intro="Learn about our heritage, values, and the journey that brought us to where we are today."
            link="about" 
            />

        
             <PreviewCard
            title="From the contact"
            description="Get intouch with us"
             intro="Have questions or want to collaborate? Reach out to our team through various contact channels."
            link="contact"
            />
        </div>
    );
};

export default HomePreviews;

