var dna = "ATGCGAGGDTTCT";
var rna = "";
const codons = [
    "TTT", "TTC", "TTA", "TTG", 
    "TCT", "TCC", "TCA", "TCG", 
    "TAT", "TAC", "TAA", "TAG", 
    "TGT", "TGC", "TGA", "TGG", 
    "CTT", "CTC", "CTA", "CTG", 
    "CCT", "CCC", "CCA", "CCG", 
    "CAT", "CAC", "CAA", "CAG", 
    "CGT", "CGC", "CGA", "CGG", 
    "ATT", "ATC", "ATA", "ATG", 
    "ACT", "ACC", "ACA", "ACG", 
    "AAT", "AAC", "AAA", "AAG", 
    "AGT", "AGC", "AGA", "AGG", 
    "GTT", "GTC", "GTA", "GTG", 
    "GCT", "GCC", "GCA", "GCG", 
    "GAT", "GAC", "GAA", "GAG", 
    "GGT", "GGC", "GGA", "GGG"
  ];
  
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
    var codonarray = [];
    while (num < rna.length) {
        if (count < 3) {
            codon += rna.charAt(num);
            count++;
            num++;
        } else {
            codonarray.push(codon);
            codon = ""; 
            count = 0;
        }
    }

    console.log(codon);
    var exist = true;

for (var i = 0; i < codonarray.length; i++) {
    var found = false;
    for (var j = 0; j < condons.length; j++) {
        if (codonarray[i] == condons[j]) {
            found = true;
            break;
        }
    }
    if (found == false) {
        exist = false;
        break;
    }
}
}
