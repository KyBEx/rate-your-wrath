import React from "react";
import ModalWrapper from "./ModalWrapper";
import { connect } from "react-redux";
import { addData } from "../../redux/dbReducer"

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
        this.props.addData(this.state)
        // will have to use middleware to do an axios call here to submit the data
        // create another reducer file for dB interactions
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
    const style = {
        textarea: {width: "100%",
        height: "300px",
        lineHeight:"300px",
        verticalAlign: "top"},
        main: {
            width: "50%"
        }
    }

    return (
        <main>
        {show && <ModalWrapper>
                <form onSubmit={this.handleSubmit}id="add">
                    <input name="date" onChange={this.onChange} type="date" value={this.state.date}/>
                    <input name="hellion" onChange={this.onChange} type="text" value={this.state.hellion} placeholder="Hellion responsible"/>
                    <select onChange={this.onChange} name="frustration" initialvalue="default">
                        <option value="default">Cause of Anger</option>
                        <option value="Insubordination">Insubordination</option>
                        <option value="Just plain stupid">Just plain stupid</option>
                        <option value="Shades of Damien">Shades of Damien</option>
                        <option value="BLARGH!">BLARGH!</option>
                    </select>
                    <input onChange={this.onChange} name="severity" value="1" type="radio"/>1
                    <input onChange={this.onChange} name="severity" value="2" type="radio"/>2
                    <input onChange={this.onChange} name="severity" value="3" type="radio"/>3
                    <input onChange={this.onChange} name="severity" value="4" type="radio"/>4
                    <input onChange={this.onChange} name="severity" value="5" type="radio"/>5
                    <select name="punishment" onChange={this.onChange} initialvalue="default">
                        <option name="" value="default">Choose your Wrath</option>
                        <option value="grounding">Grounding</option>
                        <option value="dishes">Dishes</option>
                        <option value="banishment">Banishment</option>
                    </select>
                    <select name="punDone" onChange={this.onChange} initialvalue="default">
                        <option value="default">Justice Dispensed?</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <textarea onChange={this.onChange} name="message"></textarea>
                    <button>Submit</button>
                </form>

        </ModalWrapper>}
        </main>

    )
  }
}


export default connect(null, { addData })(AddModal)
