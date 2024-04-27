'use client';

const HeadingInnerPage = ({heading}) => {
    return (
        <>
            <div className="bg-white py-10 sm:py-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 border-b border-gray-200">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{heading.title}</h2>
                        <p className="mt-2 text-lg leading-8 text-gray-600">{heading.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadingInnerPage
