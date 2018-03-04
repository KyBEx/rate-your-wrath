import React from "react";
import { connect } from "react-redux";
import { getAllData, deleteData, getSpecificData} from "../../redux/dbReducer";
import { addModal, updateModal } from "../../redux/modalReducer";
import { persistLogin, logout } from "../../redux/authorization";
import {withRouter} from "react-router-dom";

 class BlogContainer extends React.Component {
    constructor() {
        super();
        this.state = {

        }
        this.handleChange = this.handleChange.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    componentDidMount() {
        if (Object.keys(this.props.userLogin).length === 0) {
            this.props.persistLogin(localStorage.getItem("token"))
        }

        if (this.props.userLogin.user) {
            this.props.getAllData(this.props.userLogin.user._id)
        }

        if (!localStorage.getItem("token")) {
            this.props.history.push("/login")
        }
    }


    componentWillReceiveProps(nextProps) {
        if (!this.props.userLogin.user) {
            this.props.getAllData(nextProps.userLogin.user._id);
        }
    }

    refresh() {
        this.setState({
            addNew: true
        })
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
        // pulling in User post data
        // this.props.userLogin.user ? this.props.getAllData(this.props.userLogin.user._id) : null;
        // setting up the options for the filter
        const hellion = this.props.data.results ? this.props.data.results.map((data, i) => {
            let check = this.props.data.results.findIndex(item=> item.hellion === data.hellion);
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

        const filteredData = this.props.data.results ? this.props.data.results.filter(data => {
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
                    <button className="search-button" onClick={()=> {this.delete(data._id)}}>Delete</button>
                    <button className="search-button" onClick={() => {this.update(data._id)}}>Update</button>
                </div>
            )
        })
        : <div className="blog-err-container"><p className="blog-err">That selection has no data</p></div>

        : this.props.data.results ? this.props.data.results.map(data => {
            return (
                <div className="blog-post" key={data._id}>
                    <p><span>Date:</span> {data.date}</p>
                    <p><span>Hellion:</span> {data.hellion}</p>
                    <p><span>Frustration:</span> {data.frustration}</p>
                    <p><span>Severity:</span> {data.severity}</p>
                    <p><span>Message:</span> {data.message}</p>
                    <p><span>Punishment:</span> {data.punishment}</p>
                    <p><span>Punishment Completed:</span> {data.punDone}</p>
                    <button className="search-button" onClick={()=> {this.delete(data._id)} }>Delete</button>
                    <button className="search-button" onClick={() => {this.update(data._id)}}>Update</button>
                </div>
            )
        })

        : null


        return (
            <main className="window-view">
                <div className="search">
                    <h2>Menu</h2>
                    <h4>Filter Options</h4>
                    <select className="search-select one" onChange = {this.handleChange} name="hellion" initialvalue="default">
                        <option value="default">Hellion</option>
                            {hellion}
                        </select>
                    <select className="search-select two" onChange = {this.handleChange} name="severity" initialvalue="default">
                        <option value="default">Severity</option>
                            {severity}
                    </select>
                    <select className="search-select three" onChange = {this.handleChange} name = "punDone" initialvalue="default">
                        <option value = "default">Punishment Completed</option>
                        <option value = "true">True</option>
                        <option value = "false">False</option>
                    </select>
                    <h4>Add</h4>
                    <button className="search-button b1" onClick={() => {this.props.addModal()}}>Add New</button>
                    <h4>Logout</h4>
                    <button className="search-button b2" onClick={() => {this.props.logout(this.props.history)}}>Logout</button>
                </div>
                <div className="blog-container">
                    {data}
                </div>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return state
}

export default withRouter(
    connect(mapStateToProps, { getAllData, deleteData, logout, addModal, updateModal, getSpecificData, persistLogin })(BlogContainer)
)
