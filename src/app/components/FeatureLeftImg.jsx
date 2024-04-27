"use client"

import { CheckIcon } from '@heroicons/react/20/solid'
import { Button, Timeline, Progress } from 'flowbite-react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const includedFeatures = [
  'Private forum access',
  'Member resources',
  'Entry to annual conference',
  'Official member t-shirt',
]

const FeatureLeftImg = () => {
  return (
    <>
      <div className="bg-white py-5 sm:py-5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-0 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-0 lg:mx-0 lg:flex lg:max-w-none">
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-5 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-5">
                <div className="mx-auto max-w-xs px-8">
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <img src="/assets/images/profile-pic.JPG" alt="" className="profileImg" />
                  </p>
                  <p className="text-base font-semibold text-gray-600">Web/Front End Developer</p>
                  <p className="mt-2 text-xs leading-5 text-gray-600">
                    Coffee lover and Web Coder
                  </p>
                  <a
                    href="#"
                    className="mt-5 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Download My Resume
                  </a>
                </div>
              </div>
              <div className="rounded-2xl bg-gray-50 py-5  mt-10 text-left ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-5">
                <div className="prog-container">
                  <div className="progress-element">
                    <p className="text-base font-semibold text-gray-600 text-center">Web Development Skills</p>
                    <div className="text-base font-small prog-label">Wordpress</div>
                    <Progress progress={90} color="indigo" />
                    <div className="text-base font-medium prog-label">PHP</div>
                    <Progress progress={80} color="indigo" />
                    <div className="text-base font-medium prog-label">Reactjs</div>
                    <Progress progress={70} color="indigo" />
                    <div className="text-base font-medium prog-label">CSS</div>
                    <Progress progress={90} color="indigo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">Juross Jude Madrid</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Combined years of being experience web developer, I can manage to find solution in an issue that is related on wordpress I always completed the website what is being planned or find another alternative way which can be workout by the client.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h3 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h3>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-10 mb-5 flex items-center gap-x-4">
                <h3 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Work Experience</h3>
                <div className="h-px flex-auto bg-gray-100" />
              </div>

              <Timeline>
                <Timeline.Item>
                  <Timeline.Point />
                  <Timeline.Content>
                    <Timeline.Time>February 2022</Timeline.Time>
                    <Timeline.Title className="custom-title-time">Application UI code in Tailwind CSS</Timeline.Title>
                    <Timeline.Body>
                      Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                      E-commerce & Marketing pages.
                    </Timeline.Body>
                    <Button color="gray">
                      Learn More
                      <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Point />
                  <Timeline.Content>
                    <Timeline.Time>March 2022</Timeline.Time>
                    <Timeline.Title className="custom-title-time">Marketing UI design in Figma</Timeline.Title>
                    <Timeline.Body>
                      All of the pages and components are first designed in Figma and we keep a parity between the two versions
                      even as we update the project.
                    </Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
                <Timeline.Item>
                  <Timeline.Point />
                  <Timeline.Content>
                    <Timeline.Time>April 2022</Timeline.Time>
                    <Timeline.Title className="custom-title-time">E-Commerce UI code in Tailwind CSS</Timeline.Title>
                    <Timeline.Body>
                      Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                    </Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
              </Timeline>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureLeftImg
