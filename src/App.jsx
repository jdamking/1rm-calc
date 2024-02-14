import { useState } from "react"
import CalculateButton from "./components/CalculateButton"
import Calculated from "./components/Calculated"
import RepSlider from "./components/RepSlider"
import WeightSlider from "./components/WeightSlider"
import Layout from "./components/layout"

function App() {

  const [repAmount, setRepAmount] = useState(0)
  const [weightAmount, setWeightAmount] = useState(0)
  const [finalValue, setFinalValue] = useState(null)

  function calculateOneRM() {
    let oneRepMax = parseInt(weightAmount / (1.0278 - 0.0278 * repAmount))
    let fiftyPercentORM = parseInt(oneRepMax * .5)
    setFinalValue(oneRepMax)
    console.log(oneRepMax)
    console.log(fiftyPercentORM)
  }

  return (
    <Layout>
      <RepSlider title={"Number of Repetitions"} symbol={'reps'} value={repAmount} setRep={setRepAmount} />
      <WeightSlider title={"Weight"} symbol={'lbs'} value={weightAmount} setWeight={setWeightAmount} />
      <CalculateButton evaluate={calculateOneRM} />
      {finalValue && <Calculated />}
    </Layout>
  )
}

export default App
