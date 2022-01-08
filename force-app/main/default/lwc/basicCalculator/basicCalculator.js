import { LightningElement } from 'lwc';

export default class BasicCalculator extends LightningElement {

    currentResult;
    firstNumber;
    secondNumber;
    previousResults = [];
    showPreviousResults = false;
    
    //function to take input based on from where event is fired
    numberChangeHandler(event){
        const inputBoxName = event.target.name;
        if(inputBoxName === 'firstNumber'){
            this.firstNumber = event.target.value;
        }else if(inputBoxName === 'secondNumber'){
            this.secondNumber = event.target.value;
        }
    }

    
    addHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        
        this.currentResult = `Result of ${firstN} + ${secondN} is ${firstN+secondN}`;
        this.previousResults.push(this.currentResult);
    }
    subHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        
        this.currentResult = `Result of ${firstN} - ${secondN} is ${firstN - secondN}`;
        this.previousResults.push(this.currentResult);
    }
    multHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        
        this.currentResult = `Result of ${firstN} * ${secondN} is ${firstN * secondN}`;
        this.previousResults.push(this.currentResult);
    }
    divHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);
        
        this.currentResult = `Result of ${firstN} / ${secondN} is ${firstN / secondN}`;
        this.previousResults.push(this.currentResult);
    }

    showPreviousResultToggle(event){
        this.showPreviousResults = event.target.checked;
    }
}