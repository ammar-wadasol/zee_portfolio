function Home() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center px-24 py-3 mx-20 text-center text-white bg-red-500 ">
        Enrollment closing soon! - Summer Web Development Bootcamp kicks off June 14th.
     </div>
      <div className="items-center justify-center w-1/2 px-32 py-3 m-20 bg-yellow-600 h-96">
        <div className="pt-12 text-sm">Learn to Code in Toronto - Courses, Workshops & IT Training</div>
        <div className="pt-4 text-6xl">Launch your career in tech, fast.</div>
        <div className="pt-4 text-2xl">With award-winning courses and support proven to help you find success.</div>
        <div className="pt-4">
          <button className='px-5 py-2 text-white bg-red-600'>Explore Courses</button>
        </div>
      </div>
      <div className="items-center justify-center px-32 py-3 m-20 text-center ">
        <p className="text-5xl">Our Proven Process</p>
        <p className="pt-2 text-lg">Time-Tested by Over 3,000 Alumni</p>
      </div >
      <div className="flex items-center justify-between px-20 py-4 mx-16 ">
        <div className="mx-4 bg-yellow-500" >
          <div className="px-12 py-4 pt-16 text-2xl text-center">
            <p className="pb-24 text-4xl">Image In-Demand Employable Skill Sets</p>
          </div>
          <p className="px-8 text-center">Each of our courses is designed to fill a demand in today’s booming tech industry. You’ll learn practical skills that make you more valuable and appealing to employers.</p>
        </div>
        <div className="mx-4 bg-yellow-500">
          <div className="px-20 py-4 pt-16 text-2xl text-center"><p className="pb-24 text-4xl">Image</p>Hands-On Project-Based Learning</div>
          <p className="px-12 text-center">Every class at Juno teaches new languages and tools through exercises and interactive codealongs. You’ll graduate with portfolio-worthy projects showcasing your skills.</p>
        </div>
        <div className="mx-8 bg-yellow-500">
          <p className="pb-24 text-4xl">Image</p>
          <p className="px-16 py-4 pt-16 text-2xl text-center">Content Created by Industry Experts</p>
          <p className="px-8 text-center">All of our courses are built, delivered, and updated by experts working in the industry. You’ll always be learning the most up-to-date industry standards and best practices.</p>
        </div>
      </div>
      <div className="items-center h-auto px-20 py-4 mx-16 text-center bg-blue-100 ">
        <div>
          <div className="pt-8 text-4xl">Our Courses</div>
          <p>Available In-Person or Live Online</p>
        </div>
        <div className="flex items-center justify-between p-8 mx-4" >
          <div className="justify-center p-16 text-2xl bg-white ">Web Development</div>
          <div className="justify-center p-16 text-2xl bg-white ">JavaScript</div>
          <div className="justify-center p-16 text-2xl bg-white ">Data Analytics</div>
          <div className="justify-center p-16 text-2xl bg-white ">UX Design</div>
        </div>

        <div className="flex justify-between p-8 mx-4 " >
          <div className="justify-between p-16 text-2xl bg-white ">Web # Bootcamp</div>
          <div className="justify-between p-16 text-2xl bg-white ">Word press </div>
          <div className="justify-between p-16 text-2xl bg-white ">react native </div>
          <div className="justify-between p-16 text-2xl bg-white ">fullstack-dev</div>
        </div>
      </div>
      <div className="flex items-center justify-center w-full px-12 py-3 m-8 text-center" >
        <p className="justify-center p-6 text-2xl bg-yellow-100">logo#1</p>
        <p className="justify-center p-6 text-2xl bg-yellow-100">logo#2</p>
        <p className="justify-center p-6 text-2xl bg-yellow-100">logo#3</p>
        <p className="justify-center p-6 text-2xl bg-yellow-100">logo#4</p>
        <p className="justify-center p-6 text-2xl bg-yellow-100">logo#5</p>
        <p className="justify-center p-6 text-2xl bg-yellow-100">logo#6</p>
        <p className="justify-center p-6 text-2xl bg-yellow-100">logo#7</p>
      </div>

      <div className="flex items-center justify-between p-12">
        <div className="text center pl-96">image</div>
        <div className=" pl-96 pr-52">
          <p className="text-4xl text-red-500 text-semibold">Pay What You Can For Your New Career</p>
          <p className="pt-4 text-xl text center">We’re proud to be the first school in Canada to offer Income Share Agreements.</p>
          <p>Our Web Development Immersive Bootcamp will give you the skills, experience, and support you need to make a career change. With Juno's Pay What You Can Income Share Agreements you can pay as much as you’d like, or as little as $1 upfront, for your education, and only pay us back once you’re making at least $50,000 per year. We're the experts in helping people with non-technical backgrounds build careers as web developers.</p>
          <button className="px-5 py-2 mt-4 bg-yellow-500 ">Find Out More</button>
        </div>
      </div>
    </div>
  );
}

export default Home;