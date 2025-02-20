import React from "react";

function HogsList ( {hogsToShow, selectedHog, onHandleClick}) {


    const hogsList = hogsToShow.map( (hog, index) => {
        return (
            <tr key={index} className={hog.name} onClick={()=>onHandleClick(hog.name)}>
                <td className=""> <img className="ui grid container" src={hog.image} alt={hog.name}/> </td>
                <td className="">{hog.name}</td>
                
                {selectedHog == hog.name ? 
                    <td className=""> {hog.weight} </td>
                : null}

                {selectedHog == hog.name ? 
                    <td className=""> 
                        { hog.greased ? "greased" : "not greased" } 
                    </td>
                : null}

                {selectedHog == hog.name ? 
                    <td className=""> {hog.specialty} </td>
                : null}

                {selectedHog == hog.name ? 
                    <td className=""> {hog["highest medal achieved"]} </td>
                : null}   
            </tr>
        )
    })

    return (
        <div>
            <table className="">
                <thead>
                    <tr className="">
                        <th className="">Image</th>
                        <th className="">Name</th>
                        <th className="">Weight</th>
                        <th className="">Greased?</th>
                        <th className="">Specialty</th>
                        <th className="">achievement</th>
                    </tr>
                </thead>
                <br>
                </br>
                <tbody>
                    {hogsList}
                </tbody>
            </table>
        </div>
    )
}

export default HogsList;