import HeroSection from "./(home)/components/HeroSection";
import Navbar from "./(home)/components/Navbar";

const page = () => {
  return (
    <div className="min-h-screen bg-black text-neutral-200">
      <div className="dark:bg-black bg-white  dark:bg-grid-white/[0.13] bg-grid-black/[0.13]">
        <div className="max-w-7xl mx-auto py-6 px-5">
          {/* we wont use max-w-lg bcoz nav needs to be streched as much as possible */}
          <Navbar />
          <HeroSection />
        </div>
      </div>
    </div>
  );
};

export default page;
