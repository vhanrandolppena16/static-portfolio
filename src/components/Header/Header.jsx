import React, {useState, useEffect} from 'react'
import {FiMenu, FiX} from 'react-icons/fi'
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll",  handleScroll)
  }, [])
  
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId),
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  const menuItems = [
    {id: "about", label: "About"},
    {id: "skills", label: "Skills"},
    {id: "projects", label: "Projects"},
    // {id: "experience", label: "Experience"},
    {id: "education", label: "Education"}
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-200 px-[3vw]
        ${isScrolled ? "bg-[#050414]" : "bg-[#050414]/30"}
    `}>
      <div className=' text-white px-5 py-6 flex justify-between'>
        <div className=' text-lg font-semibold cursor-pointer text-center
            px-5 py-3 rounded-lg transition-all duration-300
          hover:bg-white/15 hover:text-green-400 hover:scale-105'>
            VHAN RANDOLP S. PEÑA
        </div>
        
        {/** Desktop Menu */}
        <ul className=' hidden lg:flex space-x-8 text-gray-400 py-1'>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button onClick={() => handleMenuItemClick(item.id)}
                className={`
                  px-5 py-3 block cursor-pointer rounded-md transition
                hover:bg-white/10 hover:text-green-600 hover:scale-105 hover:font-semibold
                        ${activeSection === item.id
                            ? `
                              text-green-400 bg-white/15 scale-120 font-bold
                              after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
                              after:w-3/4 after:h-[3px] after:bg-green-400 after:rounded-full
                              after:transition-all after:duration-300 after:ease-out
                              after:opacity-100 after:scale-x-100
                            `
                            : `
                              text-gray-400
                              after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0
                              after:w-3/4 after:h-[3px] after:bg-green-400 after:rounded-full
                              after:transition-all after:duration-300 after:ease-out
                              after:opacity-0 after:scale-x-0
                            `
                          }
                        `}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        
        <div className=' hidden lg:flex space-x-4 py-3'>
          <a 
            href='https://github.com/vhanrandolppena16'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-200 hover:text-gray-400'
          >
            <FaGithub size={32}/>
          </a>
          <a 
            href='https://www.linkedin.com/in/vhan-randolp-pe%C3%B1a-8a2247352/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-300 hover:text-blue-400'
          >
            <FaLinkedin size={32}/>
          </a>          
        </div>

        <div className='lg:hidden py-3'>
          {
            isOpen ? (
              <FiX className='text-3xl hover:text-red-200 text-green-400 cursor-pointer'
                onClick={() => setIsOpen(false)} />
            ) : (
              <FiMenu className='text-3xl hover:text-green-200  cursor-pointer'
                onClick={() => setIsOpen(true)}/>
            )
          }          
        </div>     
      </div>
    
    {
      isOpen && (
        <div className="py-6 md:hidden fixed left-1/2 transform -translate-x-1/2 w-4/5 
            bg-white/10 bg-opacity-100 backdrop-filter backdrop-blur-2xl z-9999 rounded-lg shadow-lg">
          <ul className="flex flex-col items-center space-y-5 text-gray-950">
            {menuItems.map((item) => (
              <li key={item.id} className="w-full">
                <button
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`
                    w-full px-3 py-3 rounded-md transition-all duration-300
                    text-center cursor-pointer 
                    hover:bg-green-700/20 hover:text-green-950 hover:scale-105 hover:font-semibold
                    ${activeSection === item.id ? "bg-green-950/50 text-green-400 font-bold" : ""}
                  `}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <div className='flex space-x-4'>
              <a 
                href='https://github.com/vhanrandolppena16'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-gray-400'
              >
                <FaGithub size={24}/>
              </a>
              <a 
                href='https://www.linkedin.com/in/vhan-randolp-pe%C3%B1a-8a2247352/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-green-400'
              >
                <FaLinkedin size={24}/>
              </a>
            </div>
          </ul>
        </div>    
      )
    }
        
    </nav>
  )
}

export default Header
