import React from "react";
import { connect } from "react-redux";
import { getAllData } from "../../redux/dbReducer";

 class BlogContainer extends React.Component {
    constructor() {
        super();
        this.state = {

        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.getAllData();
    }

    handleChange(e) {

        let value = e.target.value;
        if(e.target.name === "severity" && e.target.value !== "default") {
            value = Number(e.target.value)
        }
        this.setState({
            [e.target.name]: value
        });
    }

    render() {
        // setting up the options for the 'hellion' filter
        const hellion = Object.keys(this.props.data).length ? this.props.data.results.map((data, i) => {
            let check = this.props.data.results.findIndex(item=> item.hellion === data.hellion);
            if (check === i) {
                return <option value = {data.hellion} key = {data._id+data.hellion}>{data.hellion}</option>
            }

        }) : null
        // setting up the options for the 'severity' filter
        const severity = Object.keys(this.props.data).length ? this.props.data.results.map((data, i) => {
            let check = this.props.data.results.findIndex(item => item.severity === data.severity);
            if (check === i) {
                return <option value = {data.severity} key = {data._id+data.severity}>{data.severity}</option>
            }

        }) : null
        console.log(severity)

        const stateData = this.state;
        console.log(stateData)

        const filteredData = Object.keys(this.props.data).length ? this.props.data.results.filter(data => {
            for (let key in stateData) {

                if(stateData[key] !== data[key] && stateData[key] !== "default") {
                    return false
                }
            }
            return true
        }) : null

        const data = Object.keys(stateData).length ?
            filteredData.length ?
            filteredData.map(data => {
            return (
                <div key={data._id}>
                    <p>Date: {data.date}</p>
                    <p>Hellion: {data.hellion}</p>
                    <p>Frustration: {data.frustration}</p>
                    <p>Severity: {data.severity}</p>
                    <p>Message: {data.message}</p>
                    <p>Punishment: {data.punishment}</p>
                    <p>Punishment Completed: {data.punDone}</p>
                </div>
            )
        })
        : <p>That selection has no data</p>

        : Object.keys(this.props.data).length ? this.props.data.results.map(data => {
            return (
                <div key={data._id}>
                    <p>Date: {data.date}</p>
                    <p>Hellion: {data.hellion}</p>
                    <p>Frustration: {data.frustration}</p>
                    <p>Severity: {data.severity}</p>
                    <p>Message: {data.message}</p>
                    <p>Punishment: {data.punishment}</p>
                    <p>Punishment Completed: {data.punDone}</p>
                </div>
            )
        })

        : null

        return (
            <main>
            <select onChange = {this.handleChange} name="hellion" initialvalue="default">
                <option value="default">Filter by Hellion</option>
                {hellion}
            </select>
            <select onChange = {this.handleChange} name="severity" initialvalue="default">
                <option value="default">Filter by Severity</option>
                {severity}
            </select>
                <div>
                  {data}
                </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { getAllData })(BlogContainer)
