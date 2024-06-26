import { RiTailwindCssFill } from "react-icons/ri";
import { MdLeaderboard } from "react-icons/md";
import { BiSolidCustomize } from "react-icons/bi";
import { FaLaptopFile } from "react-icons/fa6";

const Features = () => {
  return (
    <div>
      <section className="text-gray-400">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              🫴 What we offer to developers 📦
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="feature-card">
                <div className="border border-sky-500 border-opacity-75 p-6 rounded-lg hover:bg-blue-950 hover:border-sky-300 backdrop-blur-sm cursor-pointer transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-sky-500 text-white mb-4">
                    <RiTailwindCssFill size={23} />
                  </div>
                  <h2 className="text-lg text-white font-medium title-font mb-2">Responsive Design</h2>
                  <p className="leading-relaxed text-base">All components are from best sources and designed to be fully responsive 📝ensuring they look great on any device📱</p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="feature-card">
                <div className="border border-sky-500 border-opacity-75 p-6 rounded-lg hover:bg-blue-950 hover:border-sky-300 backdrop-blur-sm cursor-pointer transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-sky-500 text-white mb-4">
                    <MdLeaderboard size={23} />
                  </div>
                  <h2 className="text-lg text-white font-medium title-font mb-2">Leaderboard</h2>
                  <p className="leading-relaxed text-base">Compete with other developers and 🪜climb the leaderboard by sharing your best components and get recognized 🥇</p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="feature-card">
                <div className="border border-sky-500 border-opacity-75 p-6 rounded-lg hover:bg-blue-950 hover:border-sky-300 backdrop-blur-sm cursor-pointer transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-sky-500 text-white mb-4">
                    <FaLaptopFile size={23} />
                  </div>
                  <h2 className="text-lg text-white font-medium title-font mb-2">Personalization</h2>
                  <p className="leading-relaxed text-base">Engage with the community by 👍/👎components. Save your 💖 components for quick access in your future projects.</p>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="feature-card">
                <div className="border border-sky-500 border-opacity-75 p-6 rounded-lg hover:bg-blue-950 hover:border-sky-300 backdrop-blur-sm cursor-pointer transform hover:-translate-y-2 transition-transform duration-300">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-sky-500 text-white mb-4">
                    <BiSolidCustomize size={23} />
                  </div>
                  <h2 className="text-lg text-white font-medium title-font mb-2">Customizable Code Snippets</h2>
                  <p className="leading-relaxed text-base">Easily customize and preview code 👀 snippets with our built-in editor and A.I tailored specifically for Tailwind CSS 💅</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
