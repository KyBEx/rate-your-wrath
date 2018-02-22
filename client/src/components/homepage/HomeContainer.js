import React from "react";
import { connect } from "react-redux";
import { addModal, updateModal } from "../../redux/modalReducer";
import Navigation from "../navigation/Navbar";

 function Home (props) {
    return (
        <main>
        <div className="body-center top-box">
        <Navigation/>
            <h1 className = "home-info">Rate Your Wrath</h1>
            <h3 className = "home-info">Do Your Children Frustrate You? Do You Frustrate Yourself By Not Punishing Them?</h3>
            <h3 className = "home-info">Rate Your Wrath can help--clinically proven to lead to more well behaved children.</h3>
        </div>
        </main>
    )
}

function mapStateToProps (state) {
    return state
}

export default connect(mapStateToProps, {addModal, updateModal})(Home)
