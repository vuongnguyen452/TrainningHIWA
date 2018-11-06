/**
 * Created by vuong-nguyen on 30/04/2017.
 */
import React, {Component} from "react";
import Header from "../Admin/Header";

class Vuong extends Component {
    constructor(props){
        super(props)
        this.state ={
            displaySearch:'none',
            hideSearch: true,
            showMau:'yellow',
            changeMau:true,
            showInput:'none',
            showText:true,
            isRegister: false,
            password:'none'
        }
        this.state = {
            data:
                [
                    {
                        id:1,
                        name:"Foo",
                        age:"20"
                    },

                    {
                        id:2,
                        name:"Bar",
                        "age":"30"
                    },

                    {
                        id:3,
                        name:"Baz",
                        age:"40"
                    }
                ]
        }
        this.openSearch=this.openSearch.bind(this);
        this.change=this.change.bind(this);
    };
    show(){
        this.setState ({
            password:this.state.showText ==true ?'block' :'none',
            password: !this.state.password
        })
    }
    change(){
      this.setState({
          showMau:this.state.changeMau ===true ? 'yellow' :'red',
          changeMau:!this.state.changeMau
      })
    };
    openSearch() {
        this.setState({
            displaySearch: this.state.hideSearch === true ? 'block' : 'none',
            hideSearch: !this.state.hideSearch
        });
    }

    render() {
    return (
        <div>
            <Headers/>
            <table>
                <tbody>
                {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
                </tbody>
            </table>
        </div>
    )
}
}
class Headers extends Component {
    render() {
        return (
            <div>
                <h1>Headers</h1>
            </div>
        );
    }
}

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        );
    }
}
export default Vuong;