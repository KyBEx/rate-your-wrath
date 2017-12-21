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
            <input name="date" onChange={props.change} type="date" value={props.state.date}/>
            <input name="hellion" onChange={props.change} type="text" value={props.state.hellion} placeholder="Hellion responsible"/>
            <select onChange={props.change} name="frustration">
                <option value="default">Cause of Anger</option>
                <option value="Insubordination">Insubordination</option>
                <option value="Just plain stupid">Just plain stupid</option>
                <option value="Shades of Damien">Shades of Damien</option>
                <option value="BLARGH!">BLARGH!</option>
            </select>
            <input onChange={props.change} name="severity" value="1" type="radio"/>1
            <input onChange={props.change} name="severity" value="2" type="radio"/>2
            <input onChange={props.change} name="severity" value="3" type="radio"/>3
            <input onChange={props.change} name="severity" value="4" type="radio"/>4
            <input onChange={props.change} name="severity" value="5" type="radio"/>5
            <select name="punishment" onChange={props.change} initialvalue="default">
                <option name="" value="default">Choose your Wrath</option>
                <option value="grounding">Grounding</option>
                <option value="dishes">Dishes</option>
                <option value="banishment">Banishment</option>
            </select>
            <select name="punDone" onChange={props.change} initialvalue="default">
                <option value="default">Justice Dispensed?</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
            <textarea onChange={props.change} name="message"></textarea>
            <button>{props.type}</button>
        </form>
    )
}
