import React from "react";
import { connect } from "react-redux";
import { getAllData, deleteData, getSpecificData} from "../../redux/dbReducer";
import { updateModal } from "../../redux/modalReducer";

 class BlogContainer extends React.Component {
    constructor() {
        super();
        this.state = {

        }
        this.handleChange = this.handleChange.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
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

    delete(url) {
        this.props.deleteData(url)
    }

    update(url) {
        console.log(url);
        this.props.getSpecificData(url);
        this.props.updateModal();
    }

    render() {
        // setting up the options for the filter

        const hellion = this.props.results ? this.props.results.map((data, i) => {
            let check = this.props.results.findIndex(item=> item.hellion === data.hellion);
            if (check === i) {
                return <option value = {data.hellion} key = {data._id+data.hellion}>{data.hellion}</option>
            }

        }) : null

        const severity=[];
        function fillArray() {
            for (let i = 1; i < 6; i++){
                severity.push(<option key={i} value={i}>{i}</option>)
            }
        }
        fillArray();


        const stateData = this.state;

        const filteredData = this.props.results ? this.props.results.filter(data => {
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
                <div className="blog-post" key={data._id}>
                    <p>Date: {data.date}</p>
                    <p>Hellion: {data.hellion}</p>
                    <p>Frustration: {data.frustration}</p>
                    <p>Severity: {data.severity}</p>
                    <p>Message: {data.message}</p>
                    <p>Punishment: {data.punishment}</p>
                    <p>Punishment Completed: {data.punDone}</p>
                    <button onClick={()=> {this.delete(data._id)}}>Delete</button>
                    <button onClick={() => {this.update(data._id)}}>Update</button>
                </div>
            )
        })
        : <p>That selection has no data</p>

        : this.props.results ? this.props.results.map(data => {
            return (
                <div className="blog-post" key={data._id}>
                    <p>Date: {data.date}</p>
                    <p>Hellion: {data.hellion}</p>
                    <p>Frustration: {data.frustration}</p>
                    <p>Severity: {data.severity}</p>
                    <p>Message: {data.message}</p>
                    <p>Punishment: {data.punishment}</p>
                    <p>Punishment Completed: {data.punDone}</p>
                    <button onClick={()=> {this.delete(data._id)}}>Delete</button>
                    <button onClick={() => {this.update(data._id)}}>Update</button>
                </div>
            )
        })

        : null



        return (
            <main>
                <div className="search">
                <h3>Filter Options</h3>
                <select className="search-select" onChange = {this.handleChange} name="hellion" initialvalue="default">
                    <option value="default">Hellion</option>
                    {hellion}
                    </select>
                    <select className="search-select" onChange = {this.handleChange} name="severity" initialvalue="default">
                    <option value="default">Severity</option>
                    {severity}
                    </select>
                    <select className="search-select" onChange = {this.handleChange} name = "punDone" initialvalue="default">
                    <option value = "default">Punishment Completed</option>
                    <option value = "true">True</option>
                    <option value = "false">False</option>
                </select>
                </div>
                <div>
                    {data}
                </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return state.data
}

export default connect(mapStateToProps, { getAllData, deleteData, updateModal, getSpecificData })(BlogContainer)
