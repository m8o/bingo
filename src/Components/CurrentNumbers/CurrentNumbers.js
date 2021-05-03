import React from 'react';
import './CurrentNumbers.css';
import Number from './Number';

const CurrentNumbers = (props) => {
    
    if(props.roundNumbers !== undefined){

    

        let firstFive = [null];
        let remainingNumbers = [null];
        
        props.roundNumbers.forEach((element, i) => {
            if(i < 5){
                firstFive[i] = <Number key = {i}>{element}</Number>
            }else{
                remainingNumbers[i-5] = <Number key = {i}>{element}</Number>
            }
        });

        return(
            <div className = 'currentNumbers'>
                <div className = "firstFive"> 
                    {firstFive}
                </div>
                <div className="remainingNumbers">
                    {remainingNumbers}
                </div>
            </div>
    
        );
    }
    else return null;
    
}

export default CurrentNumbers;

    // let endTime = props.roundEndTime;
    
    // function setFunction(numberParam){
    //     if(numbersState.index < 5) {
            
    //     setNumbersState({...numbersState,firstFive: numbersState.firstFive.push(parseInt(numberParam, 10)),
    //                     index: numbersState.index++});
    //     console.log(numbersState.firstFive);
    //                 }
    //     else {
    //         setNumbersState({...numbersState,remainingNumbers: numbersState.remainingNumbers.push(parseInt(numberParam, 10)),
    //             index: numbersState.index++});
    //             console.log(numbersState.remainingNumbers);
    //     }
    //     // splitArrayFun();
    // }
    
 
    // // function splitArrayFun() {
    // //     let index = numbersState.numbers.length -1;
    // //     console.log(index);
    
    // //     if(index<5){
    // //         setNumbersState({...firstFive[index]:numbersState.numbers[index]});
    // //     }else{
    // //         remainingNumbers[index -5] = numbersState.numbers[index];

    // //     }
        
    // // }
    // let firstFiveFunc;
    // if(numbersState.firstFive === []){
    // firstFiveFunc = numbersState.firstFive.map((number) => {
    //     return <Number>{number}</Number>
    //   });
    // }
    // let remainingNumbersFunc = numbersState.remainingNumbers.map((number) => {
    //     return <Number>{number}</Number>
    // })
    // // console.log(firstFiveFunc);



    // if(numbersState.index < 35){
    //     setInterval(() => {
    //         setFunction(props.roundNumbers[numbersState.index])
    //     }, 1000);
    // }else{
        
    // }

