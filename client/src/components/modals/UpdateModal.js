import React from "react";
import ModalWrapper from "./ModalWrapper";
import { connect } from "react-redux";
import { updateData } from "../../redux/dbReducer";



class UpdateModal extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            date: this.props.data.update.date,
            hellion: this.props.data.update.hellion,
            frustration: this.props.data.update.frustration,
            severity: this.props.data.update.severity,
            message: this.props.data.update.message,
            punishment: this.props.data.update.punishment,
            punDone: this.props.data.update.punDone,
            id: this.props.data.update._id
            }

          this.handleSubmit = this.handleSubmit.bind(this);
          this.onChange = this.onChange.bind(this);
        }

        componentDidUpdate() {
            if(this.props.data.update._id !== this.state.id)
                {
                this.setState({
                    date: this.props.data.update.date,
                    hellion: this.props.data.update.hellion,
                    frustration: this.props.data.update.frustration,
                    severity: this.props.data.update.severity,
                    message: this.props.data.update.message,
                    punishment: this.props.data.update.punishment,
                    punDone: this.props.data.update.punDone,
                    id: this.props.data.update._id
                })
            }
        }
        handleSubmit(e){
            e.preventDefault();
            this.props.updateData(this.props.data.update._id, this.state)


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
        let show = this.props.data.update ? true : false;

        function selectOptions(stateValue, options, arr){
            for (let i = 0; i < options.length; i++) {
                if(options[i] === stateValue) {
                    arr.push(<option key = {i + Math.random()}>{stateValue}</option>)
                } else {
                    arr.push(<option key = {i + Math.random()}>{options[i]}</option>)
                }

                }
            }

        const frustration = [];
        const frustOptions = ["Insubordination", "Just plain stupid", "Shades of Damien", "BLARGH!"]
        let myFrustration = this.state.frustration;
        selectOptions(myFrustration, frustOptions, frustration)

        const severity = [];
        const sevOptions=[1,2,3,4,5]
        let mySeverity = this.state.severity;
        selectOptions(mySeverity, sevOptions, severity)

        const punishment = [];
        const punOptions = ["Dishes", "Banishment", "Grounding"]
        let myPunishment = this.state.punishment;
        selectOptions(myPunishment, punOptions, punishment)

        const justice = [];
        const justOptions = ["true", "false"]
        let myJustice = this.state.punDone;
        selectOptions(myJustice, justOptions, justice)


        return (
        <main>
        {show && <ModalWrapper>
            <div>
            <form onSubmit={this.handleSubmit}id="add">
                <label>Date of Incident
                <input className="modal-stuff update-input" name="date" onChange={this.onChange} type="date" value={this.state.date}/>
                </label>

                <label>Hellion
                <input className="modal-stuff update-input" name="hellion" onChange={this.onChange} type="text" value={this.state.hellion}/>
                </label>

                <label>Cause of Anger
                    <select className="modal-stuff update-input" onChange={this.onChange} name="frustration" value={myFrustration}>
                    {frustration}
                    </select>
                </label>

                <label>Rate Your Anger
                    <select className="modal-stuff update-input" onChange={this.onChange} name="severity" value={mySeverity}>
                    {severity}
                </select>
                </label>

                <label>Choose Your Wrath
                <select className="modal-stuff update-input" name="punishment" onChange={this.onChange} initialvalue="default">
                    <option value="grounding">Grounding</option>
                    <option value="dishes">Dishes</option>
                    <option value="banishment">Banishment</option>
                </select>
                </label>

                <label>Justice Dispensed?
                <select className="modal-stuff update-input" name="punDone" onChange={this.onChange} initialvalue="default">
                    {justice}
                </select>
                </label>

                <label>Message
                <textarea className="modal-stuff update-input" onChange={this.onChange} name="message" value={this.state.message}></textarea>
                </label>
                <button className="search-button">Save Update</button>
            </form>
            </div>
        </ModalWrapper>}
        </main>

        )
    }
  }


function mapStateToProps (state) {
    return state
}

export default connect(mapStateToProps, { updateData })(UpdateModal)
