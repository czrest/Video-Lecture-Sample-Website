import Hero from "./components/Hero";
import Card from "./components/Card";
import BgElements from "./components/BgElements";
import { cardDetails } from "./data";
import { useState } from "react";

function App() {

  const [text, setText] = useState(0);

  function handleClick(){
    setText(text+1);
    console.log(text);
  }

  return (
    <>
      <main className="flex flex-col w-full overflow-clip relative text-gray-900 bg-slate-900 contrast-125">
        <BgElements />
        <BgElements customClassName={"scale-[-1]"} />
        <section
          id="card-Section"
          className="w-full min-h-screen flex flex-col gap-20 justify-center items-center z-50"
        >
          <Hero />
          {cardDetails.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
              color={item.color}
            />
          ))}
        </section>

        <section className="w-full gap-10 h-screen flex items-center justify-center bg-slate-700/50 backdrop-blur-xl rounded-t-3xl relative z-50">
        
          <button
            type="button"
            onClick={handleClick}
            className="font-semibold text-xl bg-blue-500 px-5 py-2 text-white rounded-full hover:ring-2 hover:ring-white duration-300"
          >
            Click me
          </button>

          <h1 className="text-white text-3xl px-5 py-2 rounded-lg bg-blue-500">{text}</h1>
  
        </section>
      </main>
    </>
  );
}

export default App;
