import React from "react";
import "./home.css";
import { connect } from "react-redux";
import { addModal, updateModal } from "../../redux/modalReducer"

 function Home (props) {
    return (
        <main>
        <div className="body-center top-box">
            <h1 className="header-text">RATE YOUR WRATH</h1>
        </div>
        <div className="body-center middle-box">
            <h1>Do Your Children Frustrate You?</h1>
        </div>
        <div className="body-center bottom-box">
            <h1>Do You Frustrate Yourself By Not Punishing Them?</h1>
        </div>
        <div className = "body-center footer">
            <button onClick={() => {props.addModal()}}>Add New</button>
            <button onClick={() => {props.updateModal()}}>Update Existing</button>
        </div>
        </main>
    )
}

function mapStateToProps (state) {
    return state
}

export default connect(mapStateToProps, {addModal, updateModal})(Home)
