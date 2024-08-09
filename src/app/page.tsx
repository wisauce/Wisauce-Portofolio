'use client';
import { use, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import './animation.css'; 

function Home() {
  const [showBiodata, setShowBiodata] = useState(true);
  const [showCoding, setShowCoding] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  function Experience() {
    return (
        <div className='w-96 bg-slate-100 border-2 border-blue-500 flex flex-col items-center fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div id='header' className='w-full h-10 bg-blue-500 flex content-end justify-end'>
            <button onClick={()=> setShowExperience(false)} className='bg-red-600 m-0.5 size-9 font-bold'>
              X
            </button>
          </div>
          <ul className='text-blue-500 m-2'>
            <li className='m-2'>General Manager of External Affairs at BPA STEI-K 2023</li>
            <li className='m-2'>Head of Event Department at Aksi Angkatan STEI-K 2023 (STEI-KOOL)</li>
            <li className='m-2'>General Secretary at Senandika Exhibition 2024</li>
            <li className='m-2'>Social Media and Branding Staff of Photography at LFM ITB 2024</li>
            <li className='m-2'>Staff of Documentation at Wisuda Oktober 2023</li>
            <li className='m-2'>Staff of Seremonial at OSKM ITB 2024</li>
            <li className='m-2'>Staff of Grand Seminar Department at The Sandbox 2024 by IEEE ITB</li>
            <li className='m-2'>Head of Legislation Committee at MPK SMA Negeri 47 Jakarta</li>
            <li className='m-2'>President of Student Council at SMP Negeri 19 Jakarta</li>
          </ul>
        </div>
      );
    }

    function Biodata() {
      return (
        <div className='w-96 bg-slate-100 border-2 border-blue-500 flex flex-col items-center fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div id='header' className='w-full h-10 bg-blue-500 flex content-end justify-end'>
            <button onClick={() => setShowBiodata(false)} className='bg-red-600 m-0.5 size-9 font-bold'>
              X
            </button>
          </div>
          <Image
            src="/profile.jpg"
            width={150}
            height={150}
            alt=''
            className='mt-2'
          />
          <p className='text-blue-500 m-2'>The name is Wisa Ahmaduta Dinutama. I was bitten by a laba-laba sunda, which led me to pursue System and Information Technology at Bandung Institute of Technology. People often describe me in various ways—some call me a programmer, a photographer, or even a manager. At heart, I am just a student who is continuously learning and improving. I am passionate about software engineering. When I am not online playing games, you might find me cycling or spending time with cats. Thank you for visiting (sorry for not offering any cookie). I genuinely hope the strings of fate destined us to do great things together.</p>
        </div>
      );
    }

    function Coding() {
      return (
        <div className='bg-slate-100 w-96 border-2 border-blue-500 flex flex-col items-center fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div id='header' className='w-full h-10 bg-blue-500 flex content-end justify-end'>
            <button onClick={() => setShowCoding(false)} className='bg-red-600 m-0.5 size-9 font-bold'>
              X
            </button>
          </div>
          <ul className='text-blue-500 m-2'>
            <a href="https://progate.com/path_certificate/9e38a16fr2a4mu" target="_blank" rel="noopener noreferrer"><li className='m-2 hover:bg-blue-500 hover:text-white'><span className='blinking-text'>&gt;</span>Progate Web Development (Node.js) Course</li></a>
            <a href="https://progate.com/course_certificate/852a5770r0ggaz" target="_blank" rel="noopener noreferrer"><li className='m-2 hover:bg-blue-500 hover:text-white'><span className='blinking-text'>&gt;</span>Progate HTML and CSS Course</li></a>
            <a href="https://progate.com/course_certificate/5d3376d2r1uaw2" target="_blank" rel="noopener noreferrer"><li className='m-2 hover:bg-blue-500 hover:text-white'><span className='blinking-text'>&gt;</span>Progate Javascript Course</li></a>
            <a href="https://progate.com/course_certificate/2be7369dr1xpgl" target="_blank" rel="noopener noreferrer"><li className='m-2 hover:bg-blue-500 hover:text-white'><span className='blinking-text'>&gt;</span>Progate SQL Course</li></a>
            <a href="https://www.ou-festival.com/certificate/1104" target="_blank" rel="noopener noreferrer"><li className='m-2 hover:bg-blue-500 hover:text-white'><span className='blinking-text'>&gt;</span>Silver Medalist in OPSILON VII National Informatics Olympiad 2022</li></a>
            <a href="https://drive.google.com/file/d/1C1ceUuG6YZU_9iHeUkKMi_rmz09SR7tZ/view" target="_blank" rel="noopener noreferrer"><li className='m-2 hover:bg-blue-500 hover:text-white'><span className='blinking-text'>&gt;</span>Runner Up in Immerse Essay Competition 2021 on the Computer Science Category</li></a>
            <a href="https://drive.google.com/drive/folders/1yYEDNZ8PnDytjDv9AA9iRLwIu3P9a2Kn" target="_blank" rel="noopener noreferrer"><li className='m-2 hover:bg-blue-500 hover:text-white'><span className='blinking-text'>&gt;</span>Silver Medalist in Informatics Olympiad, Telkom University Competition 2022</li></a>
          </ul>
        </div>
    );
  }

  return (
    <>
      <head>
        <title>Wisauce Portofolio</title>
        <link rel="icon" type="image/png" href="/w.png" />
      </head>
      <body>
      <div className='bg-wallpaper bg-cover bg-left-bottom w-screen h-screen text-white'>
        <div className='flex'>
          <div className='size-24 m-1 p-0'>
            <div onClick={()=> {
              setShowExperience(true)
              setShowCoding(false)
              setShowBiodata(false)}} className='size-24 hover:bg-blue-500 hover:border-blue-400 hover:opacity-50 hover:border-2 absolute hover:cursor-pointer'></div>
            <Image
              src="/Experience.png"
              width={70}
              height={70}
              alt=''
              className='aspect-square object-cover align-middle justify-items-center m-auto mt-1 pointer-events-none relative'
            />
            <p className='text-xs text-center pointer-events-none relative'>Experience</p>
          </div>
          <div className='size-24 m-1 p-0'>
            <div onClick={()=> {
              setShowExperience(false)
              setShowCoding(true)
              setShowBiodata(false)}} className='size-24 hover:bg-blue-500 hover:border-blue-400 hover:opacity-50 hover:border-2 absolute hover:cursor-pointer'></div>
            <Image
              src="/Start Menu Programs Alt.png"
              width={70}
              height={70}
              alt=''
              className='aspect-square object-cover align-middle justify-items-center m-auto mt-1 pointer-events-none relative'
            />
            <p className='text-xs text-center pointer-events-none relative'>Coding</p>
          </div>
          <div className='size-24 m-1 p-0'>
            <div onClick={()=> {
              setShowExperience(false)
              setShowCoding(false)
              setShowBiodata(true)}} className='size-24 hover:bg-blue-500 hover:border-blue-400 hover:opacity-50 hover:border-2 absolute hover:cursor-pointer'></div>
            <Image
              src="/wisa.JPG"
              width={70}
              height={70}
              alt=''
              className='rotate-90 aspect-square rounded-full object-cover align-middle justify-items-center m-auto mt-1 pointer-events-none'
            />
            <p className='text-xs text-center pointer-events-none relative'>About Me</p>
          </div>
        </div>
        <div className='flex'>
          <div className='size-24 m-1 p-0'>
            <a href='https://www.canva.com/design/DAF228c2zxg/sREkTQjsf155nz0IeE4flA/view?utm_content=DAF228c2zxg&utm_campaign=designshare&utm_medium=link&utm_source=editor' target="_blank" rel="noopener noreferrer"><div className='size-24 hover:bg-blue-500 hover:border-blue-400 hover:opacity-50 hover:border-2 absolute hover:cursor-pointer'></div></a>
            <Image
              src="/Sanctuary.png"
              width={70}
              height={70}
              alt=''
              className='aspect-square object-cover align-middle justify-items-center m-auto mt-1 pointer-events-none relative'
            />
            <p className='text-xs text-center pointer-events-none relative'>Sanctuary</p>
          </div>
          <div className='size-24 m-1 p-0'>
            <a href='https://www.linkedin.com/in/wisaahmaduta/' target="_blank" rel="noopener noreferrer"><div className='size-24 hover:bg-blue-500 hover:border-blue-400 hover:opacity-50 hover:border-2 absolute hover:cursor-pointer'></div></a>
            <Image
              src="/Linkedin.png"
              width={70}
              height={70}
              alt=''
              className='aspect-square object-cover align-middle justify-items-center m-auto mt-1 pointer-events-none relative'
            />
            <p className='text-xs text-center pointer-events-none relative'>Linkedin</p>
          </div>
          <div className='size-24 m-1 p-0'>
            <a href='https://github.com/wisauce' target="_blank" rel="noopener noreferrer"><div className='size-24 hover:bg-blue-500 hover:border-blue-400 hover:opacity-50 hover:border-2 absolute hover:cursor-pointer'></div></a>
            <Image
              src="/Github.png"
              width={70}
              height={70}
              alt=''
              className='aspect-square object-cover align-middle justify-items-center m-auto mt-1 pointer-events-none relative'
            />
            <p className='text-xs text-center pointer-events-none relative'>Github</p>
          </div>
        </div>
        <div className='flex'>
          <div className='size-24 m-1 p-0'>
            <a href='https://x.com/wisauce' target="_blank" rel="noopener noreferrer"><div className='size-24 hover:bg-blue-500 hover:border-blue-400 hover:opacity-50 hover:border-2 absolute hover:cursor-pointer'></div></a>
            <Image
              src="/x.jpg"
              width={70}
              height={70}
              alt=''
              className='aspect-square object-cover align-middle justify-items-center m-auto mt-1 pointer-events-none relative'
            />
            <p className='text-xs text-center pointer-events-none relative'>X</p>
          </div>
          <div className='size-24 m-1 p-0'>
            <a href='https://www.instagram.com/wisaahmaduta' target="_blank" rel="noopener noreferrer"><div className='size-24 hover:bg-blue-500 hover:border-blue-400 hover:opacity-50 hover:border-2 absolute hover:cursor-pointer'></div></a>
            <Image
              src="/Instagram.png"
              width={70}
              height={70}
              alt=''
              className='aspect-square object-cover align-middle justify-items-center m-auto mt-1 pointer-events-none relative'
            />
            <p className='text-xs text-center pointer-events-none relative'>Instagram</p>
          </div>
          <div className='size-24 m-1 p-0'>
            <a href='https://open.spotify.com/user/ryukyu0813?si=94f9a9dbb4df4a45' target="_blank" rel="noopener noreferrer"><div className='size-24 hover:bg-blue-500 hover:border-blue-400 hover:opacity-50 hover:border-2 absolute hover:cursor-pointer'></div></a>
            <Image
              src="/Spotify.png"
              width={70}
              height={70}
              alt=''
              className='aspect-square object-cover align-middle justify-items-center m-auto mt-1 pointer-events-none relative'
            />
            <p className='text-xs text-center pointer-events-none relative'>Spotify</p>
          </div>
        </div>
        <div className='flex'>
          <div className='size-24 m-1 p-0'>
            <a href='https://steamcommunity.com/profiles/76561198841447470/' target="_blank" rel="noopener noreferrer"><div className='size-24 hover:bg-blue-500 hover:border-blue-400 hover:opacity-50 hover:border-2 absolute hover:cursor-pointer'></div></a>
            <Image
              src="/Steam.png"
              width={70}
              height={70}
              alt=''
              className='aspect-square object-cover align-middle justify-items-center m-auto mt-1 pointer-events-none relative'
            />
            <p className='text-xs text-center pointer-events-none relative'>Steam</p>
          </div>
          <div className='size-24 m-1 p-0'>
            <a href='https://letterboxd.com/wisauce/' target="_blank" rel="noopener noreferrer"><div className='size-24 hover:bg-blue-500 hover:border-blue-400 hover:opacity-50 hover:border-2 absolute hover:cursor-pointer'></div></a>
            <Image
              src="/Letterboxd.png"
              width={70}
              height={70}
              alt=''
              className='aspect-square object-cover align-middle justify-items-center m-auto mt-1 pointer-events-none relative'
            />
            <p className='text-xs text-center pointer-events-none relative'>Letterboxd</p>
          </div>
          <div className='size-24 m-1 p-0'>
            <a href='https://myanimelist.net/profile/wisauce' target="_blank" rel="noopener noreferrer"><div className='size-24 hover:bg-blue-500 hover:border-blue-400 hover:opacity-50 hover:border-2 absolute hover:cursor-pointer'></div></a>
            <Image
              src="/MyAnimeList.png"
              width={70}
              height={70}
              alt=''
              className='aspect-square object-cover align-middle justify-items-center m-auto mt-1 pointer-events-none relative'
            />
            <p className='text-xs text-center pointer-events-none relative'>MyAnimeList</p>
          </div>
        </div>
        <footer className='fixed bottom-0 flex flex-row'>
          <div className='h-10 w-28 bg-gray-400 fixed bottom-0 left-0 z-10'>
            <p className='fixed left-9 bottom-0'>isauce</p>
          </div>
          <div className='h-10 w-full bg-blue-700 fixed bottom-0'></div>
          <Image
            src="/w.png"
            width={40}
            height={40}
            className='fixed left-0 bottom-0 z-20'
            alt=''
          />
        </footer>
      </div>
      {showBiodata && <Biodata />}
      {showCoding && <Coding />}
      {showExperience && <Experience />}
      </body>
    </>
  );
}

export default Home;
