
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 py-6">
            <p className="text-yellow-500">---{subHeading}---</p>
            
            <h3 className="text-4xl border-y-2 py-3 mt-4 uppercase">{heading}</h3>
            
        </div>
    );
};

export default SectionTitle;