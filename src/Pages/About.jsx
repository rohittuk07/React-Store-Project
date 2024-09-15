const About = () => {
    return (
      <>
      <div className="flex flex-wrap gap-2 mt-16 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking -tight sm:text-6xl">We love</h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              React Store
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-md leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis saepe exercitationem ea dolor praesentium aspernatur architecto ullam velit cupiditate quas, mollitia blanditiis molestiae, repellat delectus. Molestias minima iure magni ut.
      </p>
      </>
    )
  };
  export default About;