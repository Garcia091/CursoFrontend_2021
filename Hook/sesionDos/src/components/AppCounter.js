import React, { useCallback, useState } from 'react'
import Encabezado from '../components/Encabezado'
import CounterHijo from './CounterHijo'

const AppCounter = () => {

    const [counter1, setCounter1] = useState(1)
    const [counter2, setCounter2] = useState(1)
    const [counter3, setCounter3] = useState(1)

    const increment1 = useCallback((num)=>{
        setCounter1(c => c+num)
    },[counter1]) 

    const increment2 = useCallback((num)=>{
        setCounter2(counter2+num)
    },[counter2]) 

    const increment3 = useCallback((num)=>{
        setCounter3(counter3+num)
    },[counter3]) 

    return (
        <div>
            <Encabezado  />
            <CounterHijo  texto="Contadator 1" cuenta={counter1} increment={increment1}/>
            <CounterHijo  texto="Contadator 2" cuenta={counter2} increment={increment2}/>
            <CounterHijo  texto="Contadator 3"cuenta={counter3} increment={increment3}/>
        </div>
    )
}

export default AppCounter
