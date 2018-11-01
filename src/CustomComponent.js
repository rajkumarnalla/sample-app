import React, {Component} from 'react'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexColumn: {
        display: 'flex',
        flexDirection: 'column'
    },
    label: {
        fontSize: '16px',
        fontWeight: 'bold',
        paddingBottom: '8px',
        paddingTop: '10px'
    },
    input: {
        padding: '5px',
        border: '1px solid lightgrey',
        width: '300px',
        fontSize: '14px'
    },
    submit: {
        border: 'none', 
        background: 'dodgerblue',
        boxShadow: '0 0 1px grey',
        color: 'white', 
        padding: '8px 16px',
        marginTop: '30px',
        cursor: 'pointer'
    }
}

const TextInput = (props) => {
    return (
        <div style={styles.flexColumn}>
            <label style={styles.label}>{props.label}</label>
            <input 
                style={styles.input} 
                type="text" 
                value={props.value} 
                onChange={(ev) => props.handleInputChange(ev.target.value, props.name)}/>
        </div>
    )
}

const DropDown = (props) => {
    return (
        <div style={styles.flexColumn}>
            <label style={styles.label}>{props.label}</label>
            <select 
                style={styles.input} 
                type="text" 
                value={props.value} 
                onChange={(ev) => props.handleInputChange(ev.target.value, props.name)}>
                <option></option>
                {Array.isArray(props.items) ? props.items.map((el, index) => <option key={index}>{el}</option>) : null}
            </select>
        </div>
    )
}

export default class CustomComponent extends Component {
    constructor(props) {
        super();
        var initialState = {};
        props.config.items.forEach(el => {
            initialState[el.name] = ''
        })
        this.state = initialState;
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(value, field) {
        this.setState({
            [field]: value
        })
    }
    render() {
        const {config} = this.props;
        return (
            <div style={styles.container}>
                {config && Array.isArray(config.items) ? config.items.map((el, index) => {
                    if (el.type === 'TextField') {
                        return (
                            <TextInput 
                                key={index} 
                                handleInputChange={this.handleInputChange} 
                                name={el.name} 
                                label={el.label} 
                                value={this.state[el.name]}
                            />
                        )
                    } else if (el.type === 'DropDown') {
                        return (
                            <DropDown
                                key={index} 
                                handleInputChange={this.handleInputChange} 
                                name={el.name} 
                                label={el.label} 
                                value={this.state[el.name]}
                                items={el.values}
                            />
                        )
                    }
                }) : <div style={{textAlign: 'center'}}>Home Page</div>}
                <button style={styles.submit} onClick={() => this.props.handleSubmit(this.state)}>Submit</button>
            </div>
        )
    }
}