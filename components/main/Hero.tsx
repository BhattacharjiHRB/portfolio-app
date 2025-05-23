import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div>
      <div className="h-[50rem] w-full bg-transparent bg-dot-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
