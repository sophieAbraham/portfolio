import { RxLinkedinLogo, RxGithubLogo } from 'react-icons/rx';
import { BiCopyright } from 'react-icons/bi';

import '../css/App.css';


function App() {

  return (
    <div className="App bg-darkblue h-screen">

      <div className='container w-fit h-3/4 mx-auto flex flex-col justify-center items-start tracking-widest'>

        <h1 className='text-5xl text-pastellblue py-9'>portfolio.</h1>

        <div className="home__img my-5 w-full"></div>

        <h2 className='text-beige text-4xl mt-6'>sophie abraham</h2>
        <h3 className='text-beige text-3xl mt-6'>junior frontend developer.</h3>

        <div className='flex justify-center items-start text-pastellgreen text-5xl mt-24'>
          <a
            href="https://www.linkedin.com/in/sophie-abraham/"
            target="_blank"
          >
            <RxLinkedinLogo className='hover:scale-110 transition duration-300 ease-in-out' />
          </a>

          <a
            href="https://github.com/sophieAbraham"
            target="_blank"
          >
            <RxGithubLogo className='ml-5 hover:scale-110 transition duration-300 ease-in-out' />
          </a>
        </div>

      </div>

      <footer className='fixed bottom-5 right-0 flex justify-center items-center w-full'>
        <ul className="flex justify-around items-center w-full md:w-1/2 tracking-widest text-pastellblue md:text-2xl text-base">

          <li>sophie abraham</li>

          <li className="flex justify-center items-center">
            <BiCopyright className="text-3xl mr-1" />
            Copyright 2023
          </li>

        </ul>
      </footer>

    </div>
  );
}

export default App;
