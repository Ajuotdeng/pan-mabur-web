
import { Link } from 'react-router-dom'; 

const PreviewCard = ({ title, description, intro, link }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    }

    return (
        <div className="h-full p-4 border rounded-lg shadow-sm">
            <h3 className="mb-1 text-xl font-semi-bold">{title}</h3>
            <p className="mb-2 text-sm text-gray-600"> {description}</p>
             <p className="mb-2 text-base text-gray-700"> {intro}</p>
             
            <Link to={link} className="inline-block mt-auto text-sm text-blue-600 hover:underline" onclick={scrollToTop} 
            > See more
            </Link>
        </div>
    );
};

export default PreviewCard;

