import React, {useState} from "react";
import Nav from "./Nav";
import HogsList from "./HogsList";
import SortButtons from "./SortButtons";

import hogs from "../porkers_data";
import GreasedFilter from "./GreasedFilter";

function App() {

	const [selectedHog, setSelectedHog] = useState("")
    const [hogsToShow, setHogsToShow] = useState([...hogs])
	const [greased, setGreased] = useState(false)

	function handleSort(name){
        let updatedHogsToShow = [...hogsToShow]
        if(name === "Sort By Name"){
            updatedHogsToShow.sort((a,b) => {
                const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                // names must be equal
                return 0;
            })
        }else if(name === "Sort By Age"){
            updatedHogsToShow.sort((a,b) => {
                return a.weight - b.weight
            })
        }
        setHogsToShow(updatedHogsToShow)
    }

	function handleClick(name){
        setSelectedHog(name)
    }

	function handleCheck(check){
		setGreased(check)
		const greasedHogs = (check ? hogs.filter(hog => hog.greased) : hogs)
		setHogsToShow(greasedHogs)
	}

	return (
		<div className="App">
			<Nav />
			<SortButtons name="Sort By Name" onHandleSort={handleSort}/>
            <SortButtons name="Sort By Age" onHandleSort={handleSort}/>
			<GreasedFilter greased={greased} onHandleCheck={handleCheck} />
			<HogsList selectedHog={selectedHog} hogsToShow={hogsToShow} onHandleClick={handleClick}/>
		</div>
	);
}

export default App;
