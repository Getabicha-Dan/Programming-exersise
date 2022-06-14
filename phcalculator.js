/*Write a function that takes a ph value and 
returns whether the value is acidic, neutral or alkaline. 
(PH value < 7 is acidic, 7 is neutral, > 7 alkaline)*/

function elementProperty(PH){

    
    if(PH > 7 && PH < 14){

        Element = 'alkaline';

    } else if(PH < 7 && PH > 0){

      Element = 'acidic';
    } else if(PH === 7){ 

      Element = 'neutral';

    }else{
      Element ='inavlid'}

    return Element;
}

elementProperty(9);