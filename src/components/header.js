/* This example requires Tailwind CSS v2.0+ */
import { Fragment} from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link';
import {  BrowserRouter as Router  } from 'react-router-dom';
import logo from '../assets/logo.png'
import { Disclosure } from '@headlessui/react'
import {  MenuIcon, XIcon } from '@heroicons/react/outline'
import '../styles/header.scss'
import Routes from '../utils/routes'
const navigation = [
  { name: 'About', current: true,href:"/#study" },
  { name: 'FAQ', current: true,href:"/#faq" },
  { name: 'Features', current: true,href:"/#features" },
  { name: 'Journey', current: true,href:"/#journey" },

  { name: 'Am I eligible?', current: true,href:"/#eligible" },

  
]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
 return (
    <Router>
       <Disclosure as="nav" className="bg-light h-47">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-11">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-8 w-auto"
                    src={logo}
                    alt="iConnect"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src={logo}
                    alt="iConnect"
                  />
                <span className="text-base font-bold font-jost ml-2">iConnect</span>  
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <NavLink to={item.href}
                        key={item.name}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-xs font-medium'
                        )}
                        className={classNames(
                          item.name =='Am I eligible?' ? 'bg-primary text-fontLight rounded-none' : 'bg-transparent',
                          'px-3 py-2 rounded-md text-xs font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1  font-jost">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300  hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    <Routes/>
    </Router>
  )
}