import React from 'react';

class MinusButton extends React.Component{

   
    render()
    {
        const {Dicrese, count } = this.props
        return(
            <div>
                <button type="submit" onClick={() => Dicrese(count - 1)}>-</button>
            </div>
        )
    }
}

export default MinusButton;