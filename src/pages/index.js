import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

function Home() {
  return (
    <div className="flex flex-col h-screen">
      <nav className="flex justify-between items-center py-4 px-8 bg-white">
        <div className="flex items-center">
        PlanMaster
        </div>
        <div className="flex items-center">
          <button className="text-gray-600 mr-4">login</button>
          <Link className='px-6 py-2 bg-indigo-500 rounded-lg text-white text-xl' href={`/login`}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              sign up
            </button>
          </Link>
        </div>
      </nav>
      <div className=" flex flex-col items-center justify-center flex-1 bg-gray-100">
        <Image
          src="/home.jpeg"
          alt="Hero"
          width={1000}
          height={1000}
          objectFit="cover"
          className="rounded-full "
        />
       <h2 className="mr-4 text-6xl absolute font-bold text-8xl text-white mb-90 bg-green-500 bg-opacity-8 font-sans">PlanMaster</h2>
      </div>
    </div>
  );
}

export default Home;