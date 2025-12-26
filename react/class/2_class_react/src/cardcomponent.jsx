import React, {Component} from 'react'
import "./css/card.css"
class CardComponent extends Component{
    render(){
                return(
            <>
                <div className='user-card'>
                    <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png" alt="" />
                    
                    <button>Follow</button>
                    <p>This is paragraph</p>
                    
                     </div>
             </>
        )   
    }
}

export default CardComponent;