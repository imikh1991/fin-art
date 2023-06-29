import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Switch } from '@headlessui/react';
import config from '../../config/index.json';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

// set up interface object
interface FormData {
  name: string;
  surname: string;
  company: string;
  email: string;
  telephone: string;
  message: string;
  agreeToTerms: boolean;
}

export default function Form() {
  const [status, setStatus] = useState('Submit');
  const [agreed, setAgreed] = useState(false);
  const { contact } = config;

  /*
  нужно сделать сброс значений после отправки формы 
  const defaultValues = useMemo(
    () => ({
      name: '',
      surname: '',
      company: '',
      email: '',
      telephone: '',
      message: '',
      agreeToTerms: false,
    }),
    []
  );
  */

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<FormData>({});
  // данные внутри формы
  const [data, setData] = React.useState<FormData[]>([]);

  const onSubmit = async (data: FormData, event) => {
    try {
      setStatus('Sending...');
      console.log('Из формы data >>', data);
      console.log('Из формы data >>', setData);
      event.preventDefault();
      // обработаем отправку данных
      const response = await fetch('http://cloud-resta.ru/send.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data),
      });
      setStatus('Submit');
      const result = await response.json();
      console.log('Result:', result);
      alert(result.status);
    } catch (e) {
      alert(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-16 max-w-xl sm:mt-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            {contact.name}
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              id="first-name"
              {...register('name', { required: true })}
              autoComplete="given-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.name && <span className="label--error text-rose-500 ">Заполните поле</span>}
          </div>
        </div>
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Фамилия
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              id="last-name"
              {...register('surname', { required: true })}
              autoComplete="family-name"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.surname && <span className="label--error text-rose-500 ">Заполните поле</span>}
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
            Компания
          </label>
          <div className="mt-2.5">
            <input
              type="text"
              id="company"
              {...register('company', { required: true })}
              autoComplete="organization"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.company && <span className="label--error text-rose-500 ">Заполните поле</span>}
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2.5">
            <input
              type="email"
              id="email"
              {...register('email', { required: true })}
              autoComplete="email"
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.email && <span className="label--error text-rose-500 ">Заполните поле</span>}
          </div>
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="phone-number"
            className="block text-sm font-semibold leading-6 text-gray-900"
          >
            Номер телефона
          </label>
          <div className="relative mt-2.5">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <label htmlFor="country" className="sr-only">
                Страна
              </label>
              <select
                id="country"
                name="country"
                className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option>РФ</option>
                <option>РБ</option>
                <option>КЗ</option>
              </select>
            </div>
            <input
              type="tel"
              id="phone-number"
              {...register('telephone', { required: true })}
              autoComplete="tel"
              className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
            {errors.telephone && (
              <span className="label--error text-rose-500 ">Заполните поле</span>
            )}
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
            Сообщение для нас
          </label>
          <div className="mt-2.5">
            <textarea
              id="message"
              {...register('message', { required: false })}
              rows={4}
              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              defaultValue={''}
            />
          </div>
        </div>
        <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
          <div className="flex h-6 items-center">
            <Switch
              checked={agreed}
              onChange={setAgreed}
              className={classNames(
                agreed ? 'bg-indigo-600' : 'bg-gray-200',
                'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              )}
            >
              <span className="sr-only">Agree to policies</span>
              <span
                aria-hidden="true"
                className={classNames(
                  agreed ? 'translate-x-3.5' : 'translate-x-0',
                  'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                )}
              />
            </Switch>
          </div>
          <Switch.Label className="text-sm leading-6 text-gray-600">
            By selecting this, you agree to our{' '}
            <a href="#" className="font-semibold text-indigo-600">
              privacy&nbsp;policy
            </a>
            .
          </Switch.Label>
        </Switch.Group>
      </div>
      <div className="mt-10">
        <button
          disabled={!data}
          type="submit"
          className="block w-full rounded-md bg-sky-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {status}
        </button>
      </div>
    </form>
  );
}
