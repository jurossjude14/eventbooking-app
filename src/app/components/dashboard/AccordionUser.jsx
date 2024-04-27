'use client';

import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react';
import RatingsUser from './RatingsUser';

const AccordionUser = () => {
    return (
        <div>
            <Accordion>
                <AccordionPanel>
                    <AccordionTitle>What is Flowbite?</AccordionTitle>
                    <AccordionContent>
                        <RatingsUser />
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel>
                    <AccordionTitle>Is there a Figma file available?</AccordionTitle>
                    <AccordionContent>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                            has a design equivalent in our Figma file.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Check out the
                            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                Figma design system
                            </a>
                            based on the utility classes from Tailwind CSS and components from Flowbite.
                        </p>
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>

        </div>
    )
}

export default AccordionUser
