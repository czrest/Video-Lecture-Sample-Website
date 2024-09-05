export default function Card({ title, description, imageSrc, color, ...props }) {
  const colorStyle = {
    cyan: {
      borderAndShadow: "border-cyan-200 shadow-cyan-500",
      bgAndShadow: "bg-cyan-500 shadow-cyan-500/50",
      gradient: "from-cyan-500/20"
    },
    emerald: {
      borderAndShadow: "border-emerald-200 shadow-emerald-500",
      bgAndShadow: "bg-emerald-500 shadow-emerald-500/50",
      gradient: "from-emerald-500/20"
    },
    amber: {
      borderAndShadow: "border-amber-200 shadow-amber-500",
      bgAndShadow: "bg-amber-500 shadow-amber-500/50",
      gradient: "from-amber-500/20"
    },
    red: {
      borderAndShadow: "border-red-200 shadow-red-500",
      bgAndShadow: "bg-red-500 shadow-red-500/50",
      gradient: "from-red-500/20"
    }
  }

  return (
    <div {...props} className={`w-full h-screen sticky top-0 z-10 card`}>
      <div className={`bg-slate-800/50 backdrop-blur-xl grid grid-cols-2 gap-10 border-2 shadow-2xl w-full h-full rounded-3xl p-10 
        ${colorStyle["cyan"].borderAndShadow}
      `}>
        <div className="flex flex-col justify-center gap-5 text-white">
          <h1 className="font-bold text-8xl">{title}</h1>
          <p className="text-justify">  
            {description}
          </p>
          <button className={`font-bold text-white py-2 px-6 w-fit rounded-3xl shadow-lg uppercase
            ${colorStyle[color].bgAndShadow}
          `}>
            Learn more
          </button>
        </div>
        <div className={`w-full h-full flex items-center justify-center rounded-3xl rounded-tr-[20rem] overflow-hidden bg-gradient-to-r
          ${colorStyle[color].gradient}
        `}>
          <img src={imageSrc} className="w-full aspect-square p-10" />
        </div>
      </div>
    </div>
  );
}