import Apply from "./Apply";
import Header from "./Header";
import nextWaveVideo from "../assets/nxt_wave_bg.mp4"
import nxWaveHero from "../assets/nx_wave_hero.png"

const TopSection = () => {
  return (
    <div className="relative flex min-h-screen justify-center items-center">
      <Header />
      <div className="max-w-6xl w-full bg-transparent z-10 h-full p-6 md:flex md:flex-row-reverse">
        <img
          className="w-60 mb-6 md:mb-0 md:w-96 md:ml-10"
          src={nxWaveHero}
          alt="hero"
        />
        <div>
          <span className="text-3xl md:text-6xl mt-6">
            <strong>NX Wave.</strong>
            <span className="md:text-5xl text-justify">
              The next-gen credit card for those who love rewards.
            </span>
          </span>
          <div className="space-x-2 text-sm mt-2 md:text-base">
            <span>1% cashback</span>
            <span>+</span>
            <span>5x rewards</span>
            <span>+</span>
            <span>Zero forex markup</span>
          </div>
          <div className="hidden md:block">
            <Apply className="mt-4" />
          </div>
        </div>
      </div>
      <video
        className="absolute top-0 -z-10 min-h-screen object-cover"
        autoPlay
        muted
        loop
      >
        <source
          src={nextWaveVideo}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default TopSection;
