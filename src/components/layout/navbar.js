import Link from 'next/link'
import {BsChevronDown} from 'react-icons/bs'

function Navbar() {
  return (
    <div>

   <div className=" mx-20 w-screen flex justify-between items-center px-12 py-4" >
      <div className="flex items-center space-x-14">
        <Link href="/home" className="cursor-pointer">
          <a className="flex items-center text-red-500 space-x-3">
            <p className="text-5xl font-semibold ">Juno </p>
            <div className="capitalize">
              <p className="text-sm ">formerly </p>
              <p className="text-sm">hackeryou </p>
            </div>
          </a>
        </Link>

        <div className="flex items-center space-x-9">
          <Link href="/booking">Free Events</Link>

          <Link href="/booking">
            <a className="flex items-center space-x-2">
             <p>
           Courses  
              </p>
              <BsChevronDown className="w-3 h-3"/>
            </a>
          </Link>

          <Link href="/batches">
          <a className="flex items-center space-x-2">
             <p>
           Bootcamps  
              </p>
              <BsChevronDown className="w-3 h-3"/>
            </a>
            </Link>
          <Link href="/settings">
          <a className="flex items-center space-x-2">
             <p>
             About
              </p>
              <BsChevronDown className="w-3 h-3"/>
            </a>
            </Link>
          <Link href="/settings">
          <a className="flex items-center space-x-2">
             <p>
           ForCompanies
              </p>
              <BsChevronDown className="w-3 h-3"/>
            </a>
            </Link>
        </div>
      </div>
      <div className="pr-32 mr-10">
        <button className="bg-red-500 text-white px-5 py-2 capitalize">
          apply now
</button>
      </div>
    </div>
    <div className=" mx-20 flex justify-center items-center px-24 py-3 text-center bg-red-500 text-white ">
    Enrollment closing soon! - Summer Web Development Bootcamp kicks off June 14th.
     </div>
     <div className="m-20  justify-center items-center px-32 py-3 w-1/2 bg-yellow-600 h-96">
      <div className=" text-sm pt-12">
      Learn to Code in Toronto - Courses, Workshops & IT Training
      </div>
      <div className="text-6xl pt-4">
      Launch your career in tech, fast.
      </div>
      <div className="pt-4 text-2xl">
      With award-winning courses and support proven to help you find success.
      </div>
      <div className="pt-4">
        <button className='bg-red-600 text-white px-5 py-2'>
        Explore Courses
        </button>
      </div>
      
     </div>
     <div className="m-20  justify-center items-center px-32 py-3 text-center ">
       <p className="text-5xl">
     Our Proven Process
       </p>
       <p className="text-lg pt-2">
       Time-Tested by Over 3,000 Alumni
       </p>
     </div >
     <div className=" mx-16 flex justify-between items-center px-20 py-4 ">
     <div className="bg-yellow-500 mx-4" >
       <p className="text-2xl px-12 text-center py-4 pt-16">
         <p className="text-4xl pb-24">
           Image
         </p>
       In-Demand Employable Skill Sets
       </p>
       <p className="px-8 text-center">
       Each of our courses is designed to fill a demand in today’s booming tech industry. You’ll learn practical skills that make you more valuable and appealing to employers.
       </p>
     </div>
     <div className="bg-yellow-500 mx-4">
       <p  className="text-2xl px-20 text-center py-4 pt-16">
       <p className="text-4xl pb-24">
           Image
         </p>
       Hands-On Project-Based Learning
       </p>
       <p className="px-12 text-center">
       Every class at Juno teaches new languages and tools through exercises and interactive codealongs. You’ll graduate with portfolio-worthy projects showcasing your skills.
       </p>
     </div>
     <div className="bg-yellow-500 mx-8">
     <p className="text-4xl pb-24">
           Image
         </p>
       <p  className="text-2xl px-16 text-center py-4 pt-16">
       Content Created by Industry Experts
       </p>
       <p className="px-8 text-center">
       All of our courses are built, delivered, and updated by experts working in the industry. You’ll always be learning the most up-to-date industry standards and best practices.
       </p>
      </div>
     </div>
     <div  className=" mx-16 items-center px-20 py-4 text-center bg-blue-100 h-auto">

     <div >
      <p className="text-4xl pt-8 ">
      Our Courses
      </p>
      <p>
      Available In-Person or Live Online
      </p>
     </div>
     <div className="justify-between p-8 items-center flex mx-4" >

     <div className="justify-center p-16 bg-white text-2xl ">Web Development</div>
     <div className="justify-center p-16 bg-white text-2xl ">JavaScript</div>
     <div className="justify-center p-16 bg-white text-2xl ">Data Analytics</div>
     <div className="justify-center p-16 bg-white text-2xl ">UX Design</div>
       </div>

       <div className="flex justify-between p-8 mx-4 " >

     <div className="justify-between p-16 bg-white text-2xl ">Web # Bootcamp</div>
     <div className="justify-between p-16 bg-white text-2xl ">Word press </div>
     <div className="justify-between p-16 bg-white text-2xl ">react native </div>
     <div className="justify-between p-16 bg-white text-2xl ">fullstack-dev</div>
       </div>
         </div>
         <div className="m-8  justify-center items-center px-12 py-3 text-center flex w-full" > 
           <p className="justify-center p-6 bg-yellow-100 text-2xl">logo#1</p>
           <p className="justify-center p-6 bg-yellow-100 text-2xl">logo#2</p>
           <p className="justify-center p-6 bg-yellow-100 text-2xl">logo#3</p>
           <p className="justify-center p-6 bg-yellow-100 text-2xl">logo#4</p>
           <p className="justify-center p-6 bg-yellow-100 text-2xl">logo#5</p>
           <p className="justify-center p-6 bg-yellow-100 text-2xl">logo#6</p>
           <p className="justify-center p-6 bg-yellow-100 text-2xl">logo#7</p>
         </div>

         <div className="flex p-12 justify-between items-center">
           <div className="text center pl-96">image</div>
           <div className=" pl-96 pr-52">
             <p className="text-4xl text-red-500 text-semibold">
             Pay What You Can For Your New Career
             </p>
             <p className="text center pt-4 text-xl">
             We’re proud to be the first school in Canada to offer Income Share Agreements.
             </p>
             <p>
             Our Web Development Immersive Bootcamp will give you the skills, experience, and support you need to make a career change. With Juno's Pay What You Can Income Share Agreements you can pay as much as you’d like, or as little as $1 upfront, for your education, and only pay us back once you’re making at least $50,000 per year. We're the experts in helping people with non-technical backgrounds build careers as web developers.
             </p> 
             <p>
               <button className=" mt-4 bg-yellow-500 px-5 py-2">
                 Find Out More
               </button>
             </p>

           </div>
           
         </div>
         
     </div>
    
    
  )
}

export default Navbar;