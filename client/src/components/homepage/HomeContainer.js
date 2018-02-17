import React from "react";
import { connect } from "react-redux";
import { addModal, updateModal } from "../../redux/modalReducer";
import Navigation from "../navigation/Navbar";

 function Home (props) {
    return (
        <main>
        <Navigation/>
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

        </div>
        </main>
    )
}

function mapStateToProps (state) {
    return state
}

export default connect(mapStateToProps, {addModal, updateModal})(Home)
