const PreviewCard = ({ title, description, intro, children }) => {
    return (
        <div className="h-full p-4 border rounded-lg shadow-sm">
            <h3 className="mb-2 text-2xl font-bold md:text-3xl">{title}</h3>
            <p className="mb-2 text-base text-gray-600 md:text-lg">{description}</p>
            <p className="mb-4 text-lg text-gray-700 md:text-xl">{intro}</p>
            {children}
        </div>
    );
};

export default PreviewCard;