import AdviceCard from "./components/AdviceCard";
import { useAdvice } from "./hooks/useAdvice";

function App({ cooldownMs }) {
  const { advice, error, fetchAdvice, isCoolingDown, isLoading } = useAdvice({
    cooldownMs,
  });

  return (
    <main className="app-shell">
      <AdviceCard
        adviceId={advice?.id ?? null}
        adviceText={advice?.text ?? ""}
        error={error}
        isCoolingDown={isCoolingDown}
        isLoading={isLoading}
        onGenerateAdvice={fetchAdvice}
      />
    </main>
  );
}

export default App;

// App jsx should begin like this:
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//       <h1>Testing</h1>
//       </section>
//     </>
//   )
// }

// export default App
// Delete App.css
// Index.css

// useState is a React Hook that lets you add a state variable to your component.

// const [state, setState] = useState(initialState)
