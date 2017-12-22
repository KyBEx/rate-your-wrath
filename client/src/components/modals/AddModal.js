import React from "react";
import ModalWrapper from "./ModalWrapper";
import { connect } from "react-redux";
import { addData } from "../../redux/dbReducer";
import ModalForm from "./ModalForm"

class AddModal extends React.Component {
    constructor() {
        super();
        this.state = {
            date: "",
            hellion: "",
            frustration: "",
            severity: "",
            message: "",
            punishment: "",
            punDone:""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        let date = new Date();
        console.log(typeof date)
        this.props.addData(this.state)
        this.setState({
            date: "",
            hellion: "",
            frustration: "",
            severity: "",
            message: "",
            punDone: "",
            punishment:"",
        })
        e.target.reset();
    }

    onChange(e){
        let value = e.target.value;
        if (e.target.name === "severity") {
            value = Number(e.target.value);
        }

        this.setState({
            [e.target.name]: value
        })

    }

    render() {

    let show = this.props.modal.modalShow ? true : false;

    return (
        <main>
        {show && <ModalWrapper>
                <ModalForm submit={this.handleSubmit} change={this.onChange}
                state={this.state} type={this.props.modal.type}/>
        </ModalWrapper>}
        </main>

    )
  }
}
function mapStateToProps (state) {
    return state
}

export default connect(mapStateToProps, { addData })(AddModal)
