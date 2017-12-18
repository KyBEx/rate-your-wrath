import React from "react";
import "./home.css";
import { connect } from "react-redux";
import { addModal, updateModal } from "../../redux/modalReducer"

 function Home (props) {
     console.log(props)
    return (
        <main>
            <h1>RATE YOUR WRATH</h1>
            <h3>Do Your Children Frustrate You?</h3>
            <h3>Do You Frustrate Yourself By Not Punishing Them?</h3>
            <button onClick={() => {props.addModal()}}>Add New</button>
            <button onClick={() => {props.updateModal()}}>Update Existing</button>




        </main>

    )
}

function mapStateToProps (state) {
    return state
}

export default connect(mapStateToProps, {addModal, updateModal})(Home)
