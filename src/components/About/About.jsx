import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import profileImage from  '../../assets/Profile/WhatsApp Image 2025-05-22 at 10.34.06_4b901cd0.jpg'; 

const About = () => {
  return (
    <section
      id='about'
      className='py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >
   <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
          <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          <h1 className='text-3xl sm:text-5xl md:text-6xl  font-bold text-white md-2 leading-tight'>
            Hi, I am
          </h1>
    <h2 className='text-4xl sm:text-5xl font-bold text-white md-4 leading-tight'>
      Ganesh shelake
    </h2>
    <br/>
    <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold md-4 text-[#8245ec] leading-tight'>
    <h3 className='text-white'>I am </h3>
        <TypeAnimation
        sequence={[
          'Software Engineer',
          "Frontend developer",
          "BackEnd Developer",
        ]}
          speed ={400}
          eraseSpeed ={60}
          typingDelay ={100}
          eraseDelay ={1000}
          cursorRenderer ={(cursor)=>{
            <span className='text-[#8245ec]'>{cursor}</span>
          }}
     ></TypeAnimation>
    </h3>
       <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
       I am a software engineer with 2.4 year of experience in building scalable web applications, skilled in both frontend and backend development. 
        and backend development, I specialize in the frontend developer modern technologies to create seamless user experiences and efficient solutions.
          </p>
          <a href='Blank'
           target='_blank'
           rel='noopener noreferrer'
           className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold  transition duration-300 transform hover:curser'
           style={{
            background : "linear-gradient(90deg,#8245ec,#a855f7)",
            boxShadow : "0 0 2px #8245ec,0 0 2px #8245ec, 0 0 40px #8245ec",
           }}
          >
           DOWNLOAD  CV
          </a>
          </div>
          <div className='md:w-1/2 flex justify-center md:justify-end'>
          <Tilt className='w-48  h-48 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full'
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
          perspective={1000}
          scale={1.05}
          transitionSpeed={1000}
          gyroscope={true}
          >
          <img src={profileImage}
           alt='Ganesh shelake'
          className ='w-full h-full rounded-full object-cover drop-shadow-[(0_10px_20px_rgba[130,69,236,0,.5)]'/>
          </Tilt>
          </div>
        </div>
    </section>
  )
}
export default About;

