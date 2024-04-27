'use client';

import { Card } from 'flowbite-react';

const portfolioGrid = ({portObj}) => {

    return (
        <>
            <div className="grid grid-cols-3 gap-5 lg:grid-cols-3 custom-sec-div1">
                {portObj.map((port, index) => (
                    <article key={index} className="flex max-w-xl flex-col items-start justify-between">
                        <Card
                            className="max-w-sm"
                            renderImage={() =>  <img src={port.imgUrl} width="500" heigh="500" />}
                        >
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {port.title}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {port.desc}
                            </p>
                        </Card>
                    </article>
                ))}

            </div>
        </>
    )
}

export default portfolioGrid
