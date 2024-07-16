import Link from "next/link"
import { Blog1, Blog2, Blog3, Blog3s, Blog4, Blog4s, Blog5, Blog6 } from "./asset/blog"
import Image from "next/image"
import SectionHeader from "./SectionHeader"


const Blog = () => {
  return (
    <div className="flex justify-center items-center" id="blog">

 <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">


 <SectionHeader
    title="Blogs"
    brief="If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough"
/>

    <div className="lg:flex items-stretch md:mt-12 mt-8">
      <div className="lg:w-1/2">
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
          <div className="sm:w-1/2 relative">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">Mar 22, 2024</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold text-white">Figma Dev Mode </h2>
                <p className="text-base leading-4 text-white mt-2">What it can and can&apos;t do for a UX designer</p>
                <Link href="https://blog.logrocket.com/ux-design/figma-dev-mode/" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://blog.logrocket.com/ux-design/figma-dev-mode/">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
            <Image src={Blog1} className="w-full rounded-3xl" alt="chair" />
          </div>
          <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">Mar 14, 2024</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold text-white">Cross-platform TV app</h2>
                <p className="text-base leading-4 text-white mt-2">Developing a cross-platform TV app with React Native</p>
                <Link href="https://blog.logrocket.com/developing-cross-platform-tv-app-react-native/" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://blog.logrocket.com/developing-cross-platform-tv-app-react-native/">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
            <Image src={Blog2} className="w-full rounded-3xl" alt="Cross-platform" />
          </div>
        </div>
        <div className="relative">
          <div>
            <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">Mar 25, 2024</p>
            <div className="absolute bottom-0 left-0 md:p-10 p-6">
              <h2 className="text-xl font-semibold 5 text-white">Next.js and SignalR</h2>
              <p className="text-base leading-4 text-white mt-2">Integrating Next.js and SignalR to build real-time web apps</p>
              <Link href="https://blog.logrocket.com/integrating-next-js-signalr/" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://blog.logrocket.com/integrating-next-js-signalr/">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
          <Image src={Blog4} alt="Next.js blog"  className="w-full mt-8 md:mt-6 hidden sm:block rounded-3xl" />
          <Image className="w-full mt-4 sm:hidden rounded-3xl"  src={Blog4s} alt="Next.js blog" />
        </div>
      </div>
      <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
        <div className="relative">
          <div>
            <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">Feb 28, 2024</p>
            <div className="absolute bottom-0 left-0 md:p-10 p-6">
              <h2 className="text-xl font-semibold 5 text-white">34 UX GPTs</h2>
              <p className="text-base leading-4 text-white mt-2">UX GPTs you can use today</p>
              <Link href="https://blog.logrocket.com/ux-design/34-ux-gpts/" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://blog.logrocket.com/ux-design/34-ux-gpts/">
                  <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
          <Image src={Blog3} alt="sitting place" className="w-full sm:block hidden rounded-3xl" />
          <Image className="w-full sm:hidden" src={Blog3s} alt="sitting place rounded-3xl" />
        </div>
        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
          <div className="relative w-full">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">Feb 9, 2024</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">Axios GET requests</h2>
                <p className="text-base leading-4 text-white mt-2">Understanding Axios GET requests</p>
                <Link href="https://blog.logrocket.com/understanding-axios-get-requests/" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://blog.logrocket.com/understanding-axios-get-requests/">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
            <Image src={Blog5} class="w-full rounded-3xl" alt="chair" />
          </div>
          <div className="relative w-full sm:mt-0 mt-4">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">Mar 5, 2024</p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">React Hooks</h2>
                <p className="text-base leading-4 text-white mt-2">Using localStorage with React Hooks</p>
                <Link href="https://blog.logrocket.com/using-localstorage-react-hooks/" class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                  <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="https://blog.logrocket.com/using-localstorage-react-hooks/">
                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
            <Image src={Blog6} className="w-full rounded-3xl" alt="wall design" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Blog