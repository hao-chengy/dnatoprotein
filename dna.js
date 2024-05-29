var dna = "ATGCGAGGDTTC";
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