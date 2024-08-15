import viteLogo from "/vite.svg";
import componentLogo from "./assets/component.png";
import jsxLogo from "./assets/jsx.png";
import propsLogo from "./assets/props.png";
import stateLogo from "./assets/state.png";
import bgImage from "./assets/bg-img.jpg";

function App() {
  return (
    <>
      <main className="flex flex-col w-full overflow-clip relative text-gray-900">

        <section id="Hero-Section" className="sticky top-0 w-full min-h-screen p-16 flex flex-col justify-center z-10 pointer-events-none items-center">
          <div className="flex flex-col w-full -skew-y-3">
            <h1 className="text-14xl font-barbraI pr-28 mb-5 after:skew-x-6 z-10">ITCC 5</h1>
            <h1 className="relative inline-block text-14xl font-barbraI self-end">
              <span className="relative">Essentials in</span>
            </h1>
            <div className="flex w-full gap-10">
              <h1 className="text-14xl font-barbraI">React</h1>
              <div className="w-full flex-grow border border-black rounded-full flex justify-center items-center p-10 backdrop-blur-3xl">
                <p className="line-clamp-5 text-justify text-lg">
                  Fundamental React concepts you will need for almost
                  any app you are going to build. Explore the foundational 
                  concepts, including components, JSX, props, and state. 
                  Let's dive in and start mastering the essentials in React!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="card-Section" className="w-full min-h-screen flex flex-col gap-20 justify-center items-center z-20">
          
          <div id="card" className="w-full h-screen p-24 sticky top-0 z-10">
            <div className="bg-cyan-100 grid grid-cols-2 gap-10 border-black border-2 w-full h-full rounded-3xl p-10">
              <div className="flex flex-col justify-center gap-5">
                <h1 className="font-bold text-8xl">Components</h1>
                <p className="text-justify">
                  Components are the building blocks of React applications. 
                  A component is a self-contained module (HTML + optional CSS + JS) 
                  that renders some output.
                </p>
                <button className="bg-cyan-500 font-bold text-white py-2 px-6 w-fit rounded-3xl shadow-lg shadow-cyan-500/50 uppercase">Learn more</button>
              </div>
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-cyan-500/50 rounded-3xl rounded-tr-[20rem] overflow-hidden">
                <img src={componentLogo} className="w-full aspect-square p-10"/>
              </div>
            </div>
          </div>

          <div id="card" className="w-full h-screen p-20 sticky top-0 z-10">
            <div className="bg-emerald-100 grid grid-cols-2 gap-10 border-black border-2 w-full h-full rounded-3xl p-10">
              <div className="flex flex-col justify-center gap-5">
                <h1 className="font-bold text-8xl">JSX</h1>
                <p className="text-justify">
                  JSX is a syntax extension to JavaScript. It is similar to a 
                  template language, but it has full power of JavaScript 
                  (e.g., it may output dynamic content).
                </p>
                <button className="bg-emerald-500 font-bold text-white py-2 px-6 w-fit rounded-3xl shadow-lg shadow-emerald-500/50 uppercase">Learn more</button>
              </div>
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-emerald-500/50 rounded-3xl rounded-tr-[20rem] overflow-hidden">
                <img src={jsxLogo} className="w-full aspect-square p-10"/>
              </div>
            </div>
          </div>

          <div id="card" className="w-full h-screen p-16 sticky top-0 z-10">
            <div className="bg-amber-100 grid grid-cols-2 gap-10 border-black border-2 w-full h-full rounded-3xl p-10">
              <div className="flex flex-col justify-center gap-5">
                <h1 className="font-bold text-8xl">Props</h1>
                <p className="text-justify">
                  Make components configurable (and therefore reusable) by passing 
                  input data to them. Components accept arbitrary inputs called props. 
                  They are like function arguments.
                </p>
                <button className="bg-amber-500 font-bold text-white py-2 px-6 w-fit rounded-3xl shadow-lg shadow-amber-500/50 uppercase">Learn more</button>
              </div>
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-amber-500/50 rounded-3xl rounded-tr-[20rem] overflow-hidden">
                <img src={propsLogo} className="w-full aspect-square p-10"/>
              </div>
            </div>
          </div>

          <div id="card" className="w-full h-screen p-12 sticky top-0 z-10">
            <div className="bg-red-100 grid grid-cols-2 gap-10 border-black border-2 w-full h-full rounded-3xl p-10">
              <div className="flex flex-col justify-center gap-5">
                <h1 className="font-bold text-8xl">State</h1>
                <p className="text-justify">
                  React-managed data which, when changed, causes the component to
                  re-render & the UI to update.
                </p>
                <button className="bg-red-500 font-bold text-white py-2 px-6 w-fit rounded-3xl shadow-lg shadow-red-500/50 uppercase">Learn more</button>
              </div>
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-red-500/50 rounded-3xl rounded-tr-[20rem] overflow-hidden">
                <img src={stateLogo} className="w-full aspect-square p-10"/>
              </div>
            </div>
          </div>

        </section>
      </main>
    </>
  );
}

export default App;
