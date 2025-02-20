import React from "react";

function SortButtons ( {name, onHandleSort}) {
	return (
		<button type="button" onClick={()=> onHandleSort(name)}>{name}</button>
	);
};

export default SortButtons;