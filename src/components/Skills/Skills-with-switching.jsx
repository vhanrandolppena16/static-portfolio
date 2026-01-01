import { FiChevronDown } from 'react-icons/fi';
import { useState , useEffect} from 'react'
import { SkillsInfo } from './skills_constant'

const Skills = () => {
  return (
    <section id="skills"
      className='py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[12vw] font-sans bg-linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)'
    >
      <div className='text-center mb-8'>
        <h2 className='text-3xl sm:text-4xl font-bold text-white'>
          SKILLS
        </h2>

        <div className='w-24 h-1 bg-green-900 mx-auto mt-2'/>

        <p className='text-gray-400 mt-4 text-lg font-semibold'>
          An overview of my technical skills and expertise developed through education, hands-on projects, and experience, 
          demonstrating my ability to adapt, continuously learn, and  apply knowledge to solve complex real-world engineering problems.
        </p>
      </div>    

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-10 w-full justify-center items-center">
        {SkillsInfo.map((category) => (
          <CategoryCard key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Skills

const CategoryCard = ({ category }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  // Auto-switch logic
  useEffect(() => {
    if (showAll || !category.categories?.length) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        (prev + 1) % category.categories.length
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [showAll, category.categories]);

  const activeCategory = category.categories?.[activeIndex];

  return (
    <div
      className="
        rounded-2xl overflow-y-auto
        border border-white bg-gray-900 backdrop-blur-md
        shadow-[0_10px_20px_rgba(22,185,130,0.5)]
      "
    >
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-gray-900 backdrop-blur-md center center">
        <div className="flex justify-center py-4">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="
              flex items-center gap-2 px-10 cursor-pointer
              text-2xl sm:text-3xl font-semibold text-gray-400
              p-2 m-3 rounded-full border border-gray-600
              hover:bg-green-800/20 transition
            "
            aria-label={showAll ? 'Collapse category' : 'Expand category'}
          >
            <span>{category.title}</span>

            <FiChevronDown
              className={`text-xl transition-transform duration-300 ${
                showAll ? 'rotate-180' : 'rotate-0'
              }`}
            />
          </button>
        </div>

        <div className="h-px bg-gray-700" />
      </div>


      {/* Content */}
      <div className="px-6 py-6 space-y-6 items-center">
        {(showAll ? category.categories : [activeCategory])?.map(
          (sub) =>
            sub && (
              <div key={sub.name}>
                <h4 className="text-lg sm:text-xl font-medium text-gray-500 mb-3">
                  {sub.name}
                </h4>

                <div className="h-1 mb-4 bg-green-900" />

                <div className="flex flex-wrap justify-center gap-3">
                  {sub.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="
                        flex items-center space-x-2
                        border-2 border-gray-700 rounded-3xl
                        py-2 px-3 cursor-pointer
                        hover:bg-green-800/20 hover:scale-105
                        transition
                      "
                    >
                      {skill.logo ? (
                        <img
                          src={skill.logo}
                          alt=""
                          className="w-6 h-6 sm:w-8 sm:h-8"
                        />
                      ) : (
                        <div className="text-center" />
                      )}

                      <span className="text-xs sm:text-sm text-gray-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};
