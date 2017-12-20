import React from "react";
import { connect } from "react-redux";
import { getData, getAllData } from "../../redux/dbReducer";

 class BlogContainer extends React.Component {
    constructor() {
        super();
        this.state = {

        }
        this.getAll = this.getAll.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.filter = this.filter.bind(this);
    }

    getAll() {
        this.props.getAllData();
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    filter() {
        this.props.getData(this.state)
    }


    render() {
        const hellion = Object.keys(this.props.data).length ? this.props.data.filterData.map((data, i) => {
            let check = this.props.data.filterData.findIndex(item=> item.hellion === data.hellion);
            if (check === i) {
                return <option value = {data.hellion} key = {data._id}>{data.hellion}</option>
            }

        }) : null

        const data = Object.keys(this.props.data).length ? this.props.data.results.map(data => {
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
        }) : null

        return (
            <main>
            <button onClick={this.getAll}>Fetch</button>
            <select onChange = {this.handleChange} name="hellion" initialvalue="default">
                <option value="default">Filter by Hellion</option>
                {hellion}
            </select>
            <button onClick={this.filter}>Filter By Name</button>
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

export default connect(mapStateToProps, {getData, getAllData })(BlogContainer)
