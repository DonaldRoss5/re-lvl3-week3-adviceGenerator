// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import "./App.css";

import { useState } from "react";
import AdviceCard from "./components/AdviceCard";

const SAMPLE_ADVICE = [
  {
    id: 117,
    text: "It is easy to sit up and take notice; what is difficult is getting up and taking action.",
  },
  {
    id: 42,
    text: "Do one thing every day that moves you closer to the person you want to become.",
  },
  {
    id: 88,
    text: "A clear solution usually begins with a clear description of the problem.",
  },
];

function App() {
  const [adviceIndex, setAdviceIndex] = useState[0];
  const currentAdvice = SAMPLE_ADVICE[adviceIndex];

  const handleGenerateAdvice = () => {
    setAdviceIndex[(currentIndex) => (currentIndex + 1) % SAMPLE_ADVICE.length];
  };

  return (
    <main className="app-shell">
      <AdviceCard
        adviceId={currentAdvice.id}
        adviceText={currentAdvice.text}
        onGenerateAdvice={handleGenerateAdvice}
      />
    </main>
  );
}

export default App;

// const SAMPLE_ADVICE = [
//   {
//     id: 117,
//     text: "It is easy to sit up and take notice; what is difficult is getting up and taking action.",
//   },
//   {
//     id: 42,
//     text: "Do one thing every day that moves you closer to the person you want to become.",
//   },
//   {
//     id: 88,
//     text: "A clear solution usually begins with a clear description of the problem.",
//   },
// ];

// function App() {
//   const [adviceIndex, setAdviceIndex] = useState[0];
//   const currentAdvice = SAMPLE_ADVICE[adviceIndex];

//   const handleGenerateAdvice = () => {
//     setAdviceIndex((currentIndex) => (currentIndex + 1) % SAMPLE_ADVICE.length);
//   };

//   return (
//     <>
//       <main className="app-shell">
//         <AdviceCard
//           adviceId={currentAdvice.id}
//           adviceText={currentAdvice.text}
//           onGenerateAdvice={handleGenerateAdvice}
//         />
//       </main>
//     </>
//   );
// }

// export default App;
