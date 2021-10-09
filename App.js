import React, { Component } from "react";
import axios from "axios";
import { render } from "react-dom";

const api = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com/posts"
})

class App extends Component{
    state = {
        courses : []
    }
    constructor(){
        super();
        api.get('/').then(res => {
            console.log(res.data)
            this.setState({courses : res.data})
        })
    }

    createCourse = async () => {
        let res = await api.post('/', {userUd : "101", id : "101" , title : "EKIMPORT"})
        console.log(res);
    }
    render(){
        return(
            <button onClick = {this.createCourse}>CreateCourse</button>,
            this.state.courses.map(course => <table><tr>
                <td>{course.id}</td>    
                <td>{course.title}</td>
                </tr></table>)
            );
    }
}
export default App;

