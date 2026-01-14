const AboutMeSection = () => {
  return (
    <section className="w-full p-28 bg-slate-100 flex justify-center items-center">
      <div className="flex w-fit h-fit gap-52">
        <div className="flex flex-col gap-4 w-full" data-aos="fade-up">
          <h2 className="font-bold text-slate-400">ABOUT ME</h2>
          <h1 className="font-medium text-4xl tracking-wide">
            Introduction about myself
          </h1>
          <p className="text-justify">
            I am a freelancer with over 5 years of experience in the creative
            field, from design, content writing to media consulting. I always
            seek clarity, consistency, and real value for each project. I have
            worked with tech startups, marketing agencies, and local fashion
            brands.
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full  h-fit" data-aos="fade-up">
          <h2 className="font-bold text-slate-400 w-fit">SKILL</h2>
          <h1 className="font-medium text-4xl tracking-wide w-fit">
            Core skills
          </h1>
          <ul className="w-full list-disc list-inside list">
            <li>UX/UI design (Figma, Webflow)</li>
            <li>SEO and brand content writing</li>
            <li>Media strategy & positioning</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
