import React from 'react';

 const PlusButton = ({count, Increase}) =>{
     
         return(
            <div>
                <button type="submit" onClick={() => Increase(count + 1)} >+</button>
                {/* This button takes Increase callback function as props and pass count value from props and increase by one. */}
            </div>
        )
   
}

export default PlusButton;