import React from "react"
import PropTypes from "prop-types"

export default class SearchBtn extends React.Component {
    render() {
        const { onClick } = this.props
        
        return (
            <div 
                className="center">
                <button 
                    className="btn waves-effect waves-light" 
                    onClick={onClick} 
                    type="submit" 
                    name="action">
                        Search
                    <i 
                    className="material-icons right">
                        send
                    </i>
                </button>
            </div>
        )
    }
}

SearchBtn.props = {
    onClick: PropTypes.func
}