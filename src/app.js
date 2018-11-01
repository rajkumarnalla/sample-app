import React, {Component} from 'react'
import ReactDOM from 'react-dom';

import CustomComponent from './CustomComponent';

const config = {
    items: [{
        name: "person_name",
        label: "Person's Name",
        type: "TextField"
    }, {
        name: "states",
        label: "Person's State",
        type: "DropDown",
        values: [
            "Maharashtra",
            "Kerala",
            "Tamil Nadu"
        ]
    }]
}

class Main extends Component {
    handlSubmit(data) {
        console.log(data);
    }
    render() {
        return (
            <CustomComponent handleSubmit={(data) => this.handlSubmit(data)} config={config}/>
        )
    }
}

ReactDOM.render(<Main/>, document.getElementById('app'))