import React from "react";


export default function ModalForm(props) {
    const severity=[];
    function fillArray() {
        for (let i = 1; i < 6; i++){
            if(props.state.severity === i) {
                severity.push(<option key={i} value={i} checked="checked">{i}</option>)
            } else {
                severity.push(<option key={i} value={i}>{i}</option>)
            }

        }
    }
    fillArray();
    return(
        <form onSubmit={props.submit}id="add">
            <input className="modal-stuff" name="date" onChange={props.change} type="date" value={props.state.date}/>
            <input className="modal-stuff" name="hellion" onChange={props.change} type="text" value={props.state.hellion} placeholder="Hellion responsible"/>
            <select className="modal-stuff" onChange={props.change} name="frustration">
                <option value="default">Cause of Anger</option>
                <option value="Insubordination">Insubordination</option>
                <option value="Just plain stupid">Just plain stupid</option>
                <option value="Shades of Damien">Shades of Damien</option>
                <option value="BLARGH!">BLARGH!</option>
            </select>
            <p className="modal-text">How angry are you?</p>
            <label className="radio"><input className="modal-stuff inline" onChange={props.change} name="severity" value="1" type="radio"/>1</label>
            <label className="radio"><input className="modal-stuff inline" onChange={props.change} name="severity" value="2" type="radio"/>2</label>
            <label className="radio"><input className="modal-stuff inline" onChange={props.change} name="severity" value="3" type="radio"/>3</label>
            <label className="radio"><input className="modal-stuff inline" onChange={props.change} name="severity" value="4" type="radio"/>4</label>
            <label className="radio"><input className="modal-stuff inline" onChange={props.change} name="severity" value="5" type="radio"/>5</label>
            <select className="modal-stuff" name="punishment" onChange={props.change} initialvalue="default">
                <option name="" value="default">Choose your Wrath</option>
                <option value="Grounding">Grounding</option>
                <option value="Dishes">Dishes</option>
                <option value="Banishment">Banishment</option>
            </select>
            <select className="modal-stuff" name="punDone" onChange={props.change} initialvalue="default">
                <option value="default">Justice Dispensed?</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            <textarea className="modal-stuff" onChange={props.change} name="message"></textarea>
            <button className="modal-stuff search-button">{props.type}</button>
        </form>
    )
}
