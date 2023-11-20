import { RxLinkedinLogo, RxGithubLogo } from 'react-icons/rx';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { BiCopyright } from 'react-icons/bi';

import { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter'

import '../css/App.css';


function App() {

  const [theme, setTheme] = useState('dark');

  const element = document.documentElement;
  const icons = [MdOutlineLightMode, MdOutlineDarkMode];

  const options = [
    { icon: 'MdOutlineLightMode', text: 'light' },
    { icon: 'MdOutlineDarkMode', text: 'dark' },
  ];

  useEffect(() => {
    switch (theme) {
      case 'dark':
        element.classList.add('dark');
        break;

      case 'light':
        element.classList.remove('dark');
        break;

      default:
        break;
    }
  }, [theme]);


  return (
    <div className="App dark:bg-darkblue bg-beige duration-100 w-full min-h-screen">

      <div className='container w-fit h-3/4 mx-auto flex flex-col justify-center items-start tracking-widest'>

        <div className='w-full flex justify-end items-end mt-2 pt-4'>

          {options?.map((opt, index) => {

            const Icon = icons[index];

            return (
              <button
                key={opt.text}
                className={`dark:bg-darkblue bg-beige text-slate-400 p-2 rounded-full mr-2 ${theme === opt.text && 'border border-slate-400'}`}
                onClick={() => setTheme(opt.text)}
              >
                <Icon title={opt.text} className={`text-2xl sm:text-3xl`} />
              </button>
            )
          })}

        </div>

        <h1 className='text-4xl sm:text-5xl text-pastellblue py-9'>portfolio.</h1>

        <div className="home__img bg-img-bg bg-center bg-no-repeat bg-cover shadow-3xl justify-self-center w-[250px] md:w-[300px] h-[200px] md:h-[300px] my-5"></div>

        <h2 className='dark:text-beige text-darkblue text-3xl sm:text-4xl mt-6'>sophie abraham</h2>
        <h3 className='dark:text-beige text-darkblue text-2xl sm:text-3xl mt-1 sm:mt-2'>junior frontend developer</h3>

        <h4 className='dark:text-beige text-darkblue text-xl sm:text-2xl mt-4 sm:mt-5'>
          current.
        </h4>

        <a href="http://www.shiatsu-leipzig.org" target="_blank" className='uppercase dark:text-beige text-darkblue text-xl sm:text-2xl'>
          <Typewriter
            words={['shiatsu leipzig', 'shiatsu-leipzig.org']}
            loop={1}
            cursor
            cursorStyle='_'
            typeSpeed={200}
            deleteSpeed={200}
            delaySpeed={1000}
          />
        </a>


        <div className='flex justify-center items-start dark:text-pastellgreen text-pastellblue text-4xl sm:text-5xl mt-20'>
          {/* <a
            href="https://www.linkedin.com/in/sophie-abraham/"
            target="_blank"
          >
            <RxLinkedinLogo className='hover:scale-110' />
          </a> */}

          <a
            href="https://github.com/sophieAbraham"
            target="_blank"
          >
            <RxGithubLogo className='hover:scale-110' />
          </a>
        </div>

        <a href="mailto:sophie.abraham@posteo.de" className='dark:text-pastellgreen text-pastellblue hover:scale-105 text-2xl sm:text-3xl mt-2 pb-20'>get in touch</a>


      </div>

      <footer className='fixed bottom-5 right-0 flex justify-center items-center w-full'>
        <ul className="flex justify-around items-center w-full md:w-1/2 tracking-widest text-pastellblue md:text-2xl text-base">

          <li>sophie abraham</li>

          <li className="flex justify-center items-center">
            <BiCopyright className="text-3xl mr-1" />
            copyright 2023
          </li>

        </ul>
      </footer>

    </div>
  );
}

export default App;
