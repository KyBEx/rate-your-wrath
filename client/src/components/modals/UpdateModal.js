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
            punDone: this.props.data.update.punDone
            }

          this.handleSubmit = this.handleSubmit.bind(this);
          this.onChange = this.onChange.bind(this);
        }

        componentDidUpdate() {
            if(this.props.data.update.date !== this.state.date) {
                this.setState({
                    date: this.props.data.update.date,
                    hellion: this.props.data.update.hellion,
                    frustration: this.props.data.update.frustration,
                    severity: this.props.data.update.severity,
                    message: this.props.data.update.message,
                    punishment: this.props.data.update.punishment,
                    punDone: this.props.data.update.punDone
                })
            }
        }
        handleSubmit(e){
            e.preventDefault();
            this.props.addData(this.state)
            this.setState({
                date: "",
                hellion:"",
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
        let show = this.props.data.update ? true : false;

        const frustration = [];
        let myFrustration = this.state.frustration;
        function showFrust(){
            for (let i = 0; i < 4; i++) {
                const options = ["Insubordination", "Just plain stupid", "Shades of Damien", "BLARGH!"];
                if(options[i] === myFrustration) {
                    frustration.push(<option key = {i + Math.random()}>{myFrustration}</option>)
                } else {
                    frustration.push(<option key = {i + Math.random()}>{options[i]}</option>)
                }

                }
            }
        show ? showFrust() : null

        const severity = [];
        let mySeverity = this.state.severity;
        const showSeverity = () => {
            for (let i = 1; i < 6; i++) {
                if(i === mySeverity) {
                    severity.push(<label><input key={i+1} name="severity"
                     value={mySeverity} onChange={this.onChange} checked="true" type="radio"/>{mySeverity}</label>)
                } else {
                    severity.push(<label><input  name="severity"
                     value={i} onChange={this.onChange} key = {i + Math.random()} type="radio"/>{i}</label>)
                }
            }
        }
        show ? showSeverity() : null
        console.log(severity)


        return (
        <main>
        {show && <ModalWrapper>
            <div>
            <form onSubmit={this.handleSubmit}id="add">
                <input name="date" onChange={this.onChange} type="date" value={this.state.date}/>
                <input name="hellion" onChange={this.onChange} type="text" value={this.state.hellion}/>
                <select onChange={this.onChange} name="frustration" value={myFrustration}>
                    {frustration}
                </select>
                {severity}
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
                <button>Save Update</button>
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
