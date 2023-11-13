import { useEffect, useState } from "react"

export default function CharacterGenerator() {

    const [count, setCount] = useState(3)
    const [pool, setPool] = useState([])
    // const [string, setString] = useState ( "" )

    const [str, setStr] = useState(3)
    const [dex, setDex] = useState(3)
    const [con, setCon] = useState(3)
    const [int, setInt] = useState(3)
    const [wis, setWis] = useState(3)
    const [cha, setCha] = useState(3)

    //const [strBonus, setStrBonus] = useState(0)
    //const [dexBonus, setDexBonus] = useState(0)
    const [conBonus, setConBonus] = useState(0)
    //const [intBonus, setIntBonus] = useState(0)
    const [wisBonus, setWisBonus] = useState(0)
    //const [chaBonus, setChaBonus] = useState(0)

    const { strBonus, openDoors } = calculateStrBonus(str);
    const { dexBonus, initiative } = calculateDexBonus(dex);
    const { intBonus, languages, literacy } = calculateIntBonus(int);
    const { chaBonus, maxRetainers, loyalty } = calculateChaBonus(cha);


    //stat-specific functions for derived statistics

    function calculateStrBonus(attributeScore) {
        if (attributeScore < 3) {
            attributeScore = 3
        }

        if (attributeScore > 18) {
            attributeScore = 18
        }

        const bonusTable = {
            3: { strBonus: -3, openDoors: 1 },
            4: { strBonus: -2, openDoors: 1 },
            5: { strBonus: -2, openDoors: 1 },
            6: { strBonus: -1, openDoors: 1 },
            7: { strBonus: -1, openDoors: 1 },
            8: { strBonus: -1, openDoors: 1 },
            9: { strBonus: 0, openDoors: 2 },
            10: { strBonus: 0, openDoors: 2 },
            11: { strBonus: 0, openDoors: 2 },
            12: { strBonus: 0, openDoors: 2 },
            13: { strBonus: 1, openDoors: 3 },
            14: { strBonus: 1, openDoors: 3 },
            15: { strBonus: 1, openDoors: 3 },
            16: { strBonus: 2, openDoors: 4 },
            17: { strBonus: 2, openDoors: 4 },
            18: { strBonus: 3, openDoors: 5 },
        };

        return bonusTable[attributeScore] || { strBonus: "?", openDoors: "?" };
    }

    function calculateDexBonus(attributeScore) {
        if (attributeScore < 3) {
            attributeScore = 3
        }

        if (attributeScore > 18) {
            attributeScore = 18
        }

        const bonusTable = {
            3: { dexBonus: -3, initiative: -2 },
            4: { dexBonus: -2, initiative: -1 },
            5: { dexBonus: -2, initiative: -1 },
            6: { dexBonus: -1, initiative: -1 },
            7: { dexBonus: -1, initiative: -1 },
            8: { dexBonus: -1, initiative: -1 },
            9: { dexBonus: 0,  initiative: 0 },
            10: { dexBonus: 0, initiative: 0 },
            11: { dexBonus: 0, initiative: 0 },
            12: { dexBonus: 0, initiative: 0 },
            13: { dexBonus: 1, initiative: 1 },
            14: { dexBonus: 1, initiative: 1 },
            15: { dexBonus: 1, initiative: 1 },
            16: { dexBonus: 2, initiative: 1 },
            17: { dexBonus: 2, initiative: 1 },
            18: { dexBonus: 3, initiative: 2 },
        };

        return bonusTable[attributeScore] || { strBonus: "?", openDoors: "?" };
    }

    function calculateIntBonus(attributeScore) {
        if (attributeScore < 3) {
            attributeScore = 3
        }

        if (attributeScore > 18) {
            attributeScore = 18
        }

        const bonusTable = {
            3: { intBonus: -3, languages: "Native (Broken)", literacy: "Illiterate" },
            4: { intBonus: -2, languages: "Native", literacy: "Illiterate" },
            5: { intBonus: -2, languages: "Native", literacy: "Illiterate" },
            6: { intBonus: -1, languages: "Native", literacy: "Basic" },
            7: { intBonus: -1, languages: "Native", literacy: "Basic" },
            8: { intBonus: -1, languages: "Native", literacy: "Basic" },
            9: { intBonus: 0,  languages: "Native", literacy: "Literate" },
            10: { intBonus: 0, languages: "Native", literacy: "Literate" },
            11: { intBonus: 0, languages: "Native", literacy: "Literate" },
            12: { intBonus: 0, languages: "Native", literacy: "Literate" },
            13: { intBonus: 1, languages: "Native + 1 Additional", literacy: "Literate" },
            14: { intBonus: 1, languages: "Native + 1 Additional", literacy: "Literate" },
            15: { intBonus: 1, languages: "Native + 1 Additional", literacy: "Literate" },
            16: { intBonus: 2, languages: "Native + 2 Additional", literacy: "Literate" },
            17: { intBonus: 2, languages: "Native + 2 Additional", literacy: "Literate" },
            18: { intBonus: 3, languages: "Native + 3 Additional", literacy: "Literate"  },
        };

        return bonusTable[attributeScore] || { intBonus: "?", languages: "?", literacy: "?" };
    } 

    function calculateChaBonus(attributeScore) {
        if (attributeScore < 3) {
            attributeScore = 3
        }

        if (attributeScore > 18) {
            attributeScore = 18
        }

        const bonusTable = {
            3: { chaBonus: -2, maxRetainers: 1, loyalty: 4 },
            4: { chaBonus: -1, maxRetainers: 2, loyalty: 5 },
            5: { chaBonus: -1, maxRetainers: 2, loyalty: 5 },
            6: { chaBonus: -1, maxRetainers: 3, loyalty: 6 },
            7: { chaBonus: -1, maxRetainers: 3, loyalty: 6 },
            8: { chaBonus: -1, maxRetainers: 3, loyalty: 6 },
            9: { chaBonus: 0, maxRetainers: 4, loyalty: 9 },
            10: { chaBonus: 0, maxRetainers: 4, loyalty: 9 },
            11: { chaBonus: 0, maxRetainers: 4, loyalty: 9 },
            12: { chaBonus: 0, maxRetainers: 4, loyalty: 9 },
            13: { chaBonus: 1, maxRetainers: 5, loyalty: 8 },
            14: { chaBonus: 1, maxRetainers: 5, loyalty: 8 },
            15: { chaBonus: 1, maxRetainers: 5, loyalty: 8 },
            16: { chaBonus: 1, maxRetainers: 6, loyalty: 9 },
            17: { chaBonus: 1, maxRetainers: 6, loyalty: 9 },
            18: { chaBonus: 2, maxRetainers: 7, loyalty: 10 },
        };

        return bonusTable[attributeScore] || { chaBonus: "?", maxRetainers: "?", loyalty: "?" };
    }

    //Initialize stats
    useEffect(() => {
        const total1 = addPool(count);
        setStr(total1);
        const total2 = addPool(count);
        setDex(total2);
        const total3 = addPool(count);
        setCon(total3);
        const total4 = addPool(count);
        setInt(total4);
        const total5 = addPool(count);
        setWis(total5);
        const total6 = addPool(count);
        setCha(total6);
    }, [count]);


    //useEffect(() => {
    //    setStrBonus(bxBonus(str))
    //}, [str])

    //useEffect(() => {
    //    setDexBonus(bxBonus(dex))
    //}, [dex])

    useEffect(() => {
        setConBonus(bxBonus(con))
    }, [con])

    //useEffect(() => {
    //    setIntBonus(bxBonus(int))
    //}, [int])

    useEffect(() => {
        setWisBonus(bxBonus(wis))
    }, [wis])

    //  useEffect(() => {
    //      setChaBonus(bxBonus(cha))
    //  }, [cha])



    //generates random number
    function randomSingle() {
        return Math.floor(Math.random() * (7 - 1) + 1)
    }

    //uses count field to determine the number of values to write into array
    function randomMany(numberOfValues) {
        let tempArray = []
        for (let i = 0; i < numberOfValues; i++) {
            tempArray.push(randomSingle())
        }
        return tempArray
    }

    //calls randomMany to produce a random array and then returns the sum of values
    function addPool(numberOfPoolValues) {
        const poolValues = randomMany(numberOfPoolValues)
        setPool(poolValues)
        //console.log(pool)
        const total = poolValues.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        return total
    }

    // generate generic BX stat bonuses
    function bxBonus(stat) {
        let bonus = 0

        if (stat >= 18) {
            bonus = 3
        }

        if (stat <= 17) {
            bonus = 2
        }

        if (stat <= 15) {
            bonus = 1
        }

        if (stat <= 12) {
            bonus = 0
        }

        if (stat <= 8) {
            bonus = -1
        }

        if (stat <= 5) {
            bonus = -2
        }

        if (stat <= 3) {
            bonus = -3
        }
        return bonus
    }

/*
    function handleRandomMany() {
        setPool(randomMany(count))
        //console.log(pool)
    }
    */


    function handleRerollStats() {
        setStr(addPool(count))
        setDex(addPool(count))
        setCon(addPool(count))
        setInt(addPool(count))
        setWis(addPool(count))
        setCha(addPool(count))
    }

    /*
        function handleRoll() {
            setNum
        }
    
        function handleGenerateNumbers() {
            setArray(generateRandomNumbers(count))
    }
    
    */

    return (
        <div>
            <h1>Character Generator</h1>

            <div>
                # of dice: {count}<br />
                pool: {pool}<br />
            </div>

            <p> Number of dice to roll: 
                <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
            </p>


            <p>
                <button onClick={handleRerollStats}>Reroll Stats</button>
            </p>

           

            <p style= {{ textAlign: 'left', margin: 'auto', width: '60%' }}>
                STR &nbsp;<input type="number" value={str} onChange={(e) => setStr(e.target.value)} /> Melee Bonus: {strBonus} | Open Doors: {openDoors}-in-6 <br />
                DEX &nbsp;<input type="number" value={dex} onChange={(e) => setDex(e.target.value)} /> AC Bonus: {dexBonus} | Missile Bonus: {dexBonus} | Initiative Bonus {initiative}<br />
                CON <input type="number" value={con} onChange={(e) => setCon(e.target.value)} /> Hit Points per Level: {conBonus} <br />
                INT  &nbsp; <input type="number" value={int} onChange={(e) => setInt(e.target.value)} /> Bonus: {intBonus} | Languages: {languages} | Literacy: {literacy} <br />
                WIS &nbsp;<input type="number" value={wis} onChange={(e) => setWis(e.target.value)} /> Magic Save Bonus: {wisBonus} <br />
                CHA <input type="number" value={cha} onChange={(e) => setCha(e.target.value)} /> NPC Reactions: {chaBonus} | Max Retainers: {maxRetainers} | Loyalty: {loyalty} <br />
            </p>

        </div>
    )


}


