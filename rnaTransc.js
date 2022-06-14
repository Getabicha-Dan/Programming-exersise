
/*(The science of this might not be accurate)
Write a function that takes DNA strand as a parameter. 
The four nucleotides found in DNA are 
adenine (A), cytosine (C), guanine (G) and thymine (T).
So, the function should accept any sequence of A, C, G, & T, in any order. 
A matches with T, G matches with C. 

Your function should return the complement of the given strand. 

e.g. if given G, A, T, C the output should be C, T, A, G

(inspired by: 	https://exercism.org/tracks/javascript/exercises/rna-transcription)*/




function complementStrand(dnaStrand){
    let dnaComplement=[ ] ;
   
    for(i = 0 ; i < dnaStrand.length ; i++ ){
        if(dnaStrand[i] == 'A' ){ 

            dnaComplement.push('T');
            
        } else if(dnaStrand[i] == 'T' ){ 

            dnaComplement.push('A');
            
        } else if(dnaStrand[i] == 'G' ){

            dnaComplement.push('C');
           
        } else if(dnaStrand[i] ==  'C'){

            dnaComplement.push('G');
           
        } else{
            dnaComplement.push('Invalid input');
        }
        
    }
    return dnaComplement;
   
}
complementStrand(['A','C','G','T']);


 