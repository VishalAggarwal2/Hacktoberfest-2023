import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Footer } from "./components";
import AnimatedCursor from "react-animated-cursor"

const App = () => {
  return (
    <BrowserRouter>

    <div className='relative z-0 bg-primary'>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>

        <Navbar />
        <Hero />

      </div>
      
      <About />
      <Experience />
      {/* <Tech /> */}
      <Works />
      <Feedbacks />

      <div className='relative z-0'>
        <Contact />
        {/* <StarsCanvas /> */}

      </div>

        <Footer></Footer>

    </div>
    <AnimatedCursor
    innerSize={8}
    outerSize={8}
    color='255,255,255'
    outerAlpha={0.2}
    innerScale={1.5}

    outerScale={7}
    trailingSpeed={10}
    clickables={[
      'a',
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      'label[for]',
      'select',
      'textarea',
      'button',
      '.link',
   '.sppee',
      {
        target: '.custom',
        options: {
          innerSize: 12,
          outerSize: 12,
          color: '255, 255, 255',
          outerAlpha: 0.3,
          innerScale: 0.7,
          outerScale: 5
        }
      }
    ]}
    ></AnimatedCursor>
  </BrowserRouter>
  )
}

export default App
