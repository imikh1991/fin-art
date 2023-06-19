// import { useState } from 'react';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
// import { Switch } from '@headlessui/react';
import config from '../../config/index.json';
import Form from '../form';

/* function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
*/
export default function Contact() {
  // const [agreed, setAgreed] = useState(false);
  const { contact } = config;

  return (
    <div className="isolate px-6 py-4 sm:py-2 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      ></div>
      <div className="mx-auto max-w-2xl text-center">
        <img className="h-6/6" src={contact.img} alt={contact?.header} />
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {contact.header}
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">{contact.description}</p>
      </div>
      <Form />
    </div>
  );
}
