
import { About, Contact, Hero, Works, StarsCanvas } from "./components";

const Home = () => (

    <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Hero />
        </div>
        <About />
        <Works />
        <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
        </div>
    </div>

)

export default Home;