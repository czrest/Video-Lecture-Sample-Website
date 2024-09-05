import componentLogo from "./assets/component.png";
import jsxLogo from "./assets/JSX.png";
import propsLogo from "./assets/props.png";
import stateLogo from "./assets/state.png";

export const cardDetails = [
    {
      title: "Components",
      description: "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
      imageSrc: componentLogo,
      color: "cyan",
    },
    {
      title: "JSX",
      description: "Make components configurable (and therefore reusable) by passing input data to them. Components accept arbitrary inputs called props. They are like function arguments.",
      imageSrc: jsxLogo,
      color: "emerald",
    },
    {
      title: "Props",
      description: "Make components configurable (and therefore reusable) by passing input data to them. Components accept arbitrary inputs called props. They are like function arguments.",
      imageSrc: propsLogo,
      color: "amber",
    },
    {
      title: "State",
      description: "React-managed data which, when changed, causes the component to re-render & the UI to update.",
      imageSrc: stateLogo,
      color: "red",
    },
];