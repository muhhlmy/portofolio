import Image from "next/image";

const ServicesSection = () => {
  const loop = 3;

  return (
    <section className="flex flex-col w-full p-28 gap-20">
      <div
        className="flex justify-center items-center flex-col gap-2"
        data-aos="fade-up"
      >
        <h2 className="font-bold text-slate-400">SERVICES</h2>
        <h1 className="text-4xl font-medium">Provided services</h1>
      </div>
      <div className="flex gap-4 w-fit justify-center items-center">
        {Array.from({ length: loop }).map((_, index) => (
          <div
            data-aos="fade-up"
            key={index}
            className="w-fit flex flex-col justify-center items-center py-20 px-4 bg-white rounded-xl shadow-xl border border-slate-200 hover:shadow-2xl duration-300"
          >
            <Image
              src={`/images/image-wrapper.png`}
              width={164}
              height={0}
              alt="Image Icon"
            />
            <div>
              <h2 className="text-xl text-center mb-2">UI/UX Design</h2>
              <p className="text-center">
                Design user-friendly websites and landing pages, optimizing
                experience and aligning with the brand.
              </p>
            </div>
          </div>
        ))}
        ;
      </div>
    </section>
  );
};

export default ServicesSection;
