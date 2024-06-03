var dna = "ATGCGAGGDTTCT";
var rna = "";

for(var i = 0; i < dna.length; i++){
    if(dna.charAt(i)=="A"){
        rna+="U";
    }
    if(dna.charAt(i)=="T"){
        rna+="A";
    }
    if(dna.charAt(i)=="G"){
        rna+="C";
    }
    if(dna.charAt(i)=="C"){
        rna+="G";
    }
}
console.log(rna);

if(rna.length%3!=0){
    console.log("Can not translate to codon.")
}else{
    var codon = "";
    var count = 0;
    var num = 0;
    while(num < rna.length){
        if(count <3){
            codon+= rna.charAt(num);
            count++;
            num++;
        }else{
            codon+= " ";
            count = 0;
        }
        
    }

    console.log(codon);
}
