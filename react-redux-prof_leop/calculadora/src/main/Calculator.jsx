import React, { Component } from 'react'
import './Calculator.css'
    
import Button from '../components/Button'
import Display from '../components/Display';


const initialState = {
    displayValue: 0,
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {

    state = { ...initialState }

    clearMemory = () => {
        this.setState({ ...initialState })
    }

    setOperation = (operation) => {
        const executeCalc = (v1, v2, op) => {
            const isMulti = op === '*' && parseFloat(v1) * parseFloat(v2)
            const isDiv = op === '/' && parseFloat(v1) / parseFloat(v2)
            const isSum = op === '+' && parseFloat(v1) + parseFloat(v2)
            const isSub = op === '-' && parseFloat(v1) - parseFloat(v2)

            return  isMulti || isDiv || isSum || isSub 
        }


        if(this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [ ...this.state.values ]

            try {
                // values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
                values[0] = executeCalc(values[0], values[1], currentOperation )
            } catch (e) {
                values[0] = this.state.values[0]                
            }
            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clear: !equals,
                values
            })
        }

    }

    addDigit = (n) => {
        
        const stateNow = [ ...Array.from(this.state) ]
        
        try {
            
            const isExistsDot = (n, displayValue) => 
                n === '.' && displayValue.includes('.')  
            
            if(isExistsDot(n, this.state.displayValue)) { return }
            
            const clearDisplay = parseFloat(this.state.displayValue) === 0.00
                || this.state.clearDisplay
            const currentValue = clearDisplay ? '' : this.state.displayValue
            const displayValue = currentValue + n
            this.setState({ displayValue, clearDisplay: false })   
            
            if(n !== '.') {
                const i = this.state.current
                const newValue = parseFloat(displayValue)
                const values = [ ...this.state.values ]
                values[i] = newValue
                this.setState({ values })
            }
        } catch(error) {
            console.log(error)
            this.setState(stateNow)
        }

    }

    render() {
        return (
            <div className="calculator">
                <Display value={ this.state.displayValue } />
                <Button label="AC" click={this.clearMemory} tripleColumn />
                <Button label="/" click={this.setOperation} operation />
                <Button label="7" click={this.addDigit} />
                <Button label="8" click={this.addDigit} />
                <Button label="9" click={this.addDigit} />
                <Button label="*" click={this.setOperation} operation />
                <Button label="4" click={this.addDigit} />
                <Button label="5" click={this.addDigit} />
                <Button label="6" click={this.addDigit} />
                <Button label="-" click={this.setOperation} operation />
                <Button label="1" click={this.addDigit} />
                <Button label="2" click={this.addDigit} />
                <Button label="3" click={this.addDigit} />
                <Button label="+" click={this.setOperation} operation />
                <Button label="0" click={this.addDigit} doubleColumn />
                <Button label="." click={this.addDigit} />
                <Button label="=" click={this.setOperation} operation />
            </div>
        )
    }
}