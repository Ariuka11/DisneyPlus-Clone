import Image from "next/image";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-6 px-8 max-w-[1400px] mx-auto">
      <div className="hero group">
        <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover"
        >
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero group">
        <Image src="/images/.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline object-cover rounded-lg"
        >
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero group">
        <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline object-cover rounded-lg"
        >
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero group">
        <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline object-cover rounded-lg"
        >
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero group">
        <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden group-hover:inline object-cover rounded-lg"
        >
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Hero;
