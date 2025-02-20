import React from "react";

function GreasedFilter ( {greased, onHandleCheck}) {
    return (
        <label>
            Greased
            <input type="checkbox" checked={greased} onChange={(e)=> onHandleCheck(e.target.checked)}/>
        </label>   
    );
};

export default GreasedFilter;