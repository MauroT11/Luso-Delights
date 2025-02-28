export default function Guidelines({title, subtitle, guidelines = []}) {

    // console.log(title, subtitle, guidelines)

    return (
        <div className="w-full max-w-xl mx-auto mt-4 sm:mt-6">
            <div className="bg-gradient-to-br from-white to-accent/5 rounded-lg shadow-md border border-accent/20 overflow-hidden">
                {/* Header Section - More compact */}
                <div className="bg-accent/10 px-3 py-3 md:py-4 border-b border-accent/20">
                    <h3 className="text-xl md:text-2xl text-primary text-center font-bold">
                        {title}
                    </h3>
                    <p className="text-sm md:text-base text-center text-gray-700">
                        {subtitle}
                    </p>
                </div>
                
                {/* Guidelines List - More compact */}
                <div className="p-3 md:p-4">
                    <ul className="space-y-2 md:space-y-3">
                        {guidelines.map((guideline, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <div className="bg-accent/10 rounded-full p-1 mt-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p className="text-xs md:text-sm leading-tight">
                                    {guideline.text || (
                                        <>
                                            {guideline.prefix}
                                            {guideline.emphasis && (
                                                <span className="font-bold text-primary"> {guideline.emphasis} </span>
                                            )}
                                            {guideline.suffix || ''}
                                        </>
                                    )}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}