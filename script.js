const codons = [
    "UUU", "UUC", "UUA", "UUG",
    "UCU", "UCC", "UCA", "UCG",
    "UAU", "UAC", "UAA", "UAG",
    "UGU", "UGC", "UGA", "UGG",
    "CUU", "CUC", "CUA", "CUG",
    "CCU", "CCC", "CCA", "CCG",
    "CAU", "CAC", "CAA", "CAG",
    "CGU", "CGC", "CGA", "CGG",
    "AUU", "AUC", "AUA", "AUG",
    "ACU", "ACC", "ACA", "ACG",
    "AAU", "AAC", "AAA", "AAG",
    "AGU", "AGC", "AGA", "AGG",
    "GUU", "GUC", "GUA", "GUG",
    "GCU", "GCC", "GCA", "GCG",
    "GAU", "GAC", "GAA", "GAG",
    "GGU", "GGC", "GGA", "GGG"
];

function translateDNA() {
    var dna = document.getElementById("dnaInput").value.toUpperCase();
    var rna = "";
    for (var i = 0; i < dna.length; i++) {
        if (dna.charAt(i) == "A") {
            rna += "U";
        } else if (dna.charAt(i) == "T") {
            rna += "A";
        } else if (dna.charAt(i) == "G") {
            rna += "C";
        } else if (dna.charAt(i) == "C") {
            rna += "G";
        } else {
            document.getElementById("output").innerText = "Invalid DNA sequence.";
            return;
        }
    }
    console.log(rna);

    if (rna.length % 3 != 0) {
        document.getElementById("output").innerText = "RNA sequence length is not a multiple of 3, cannot translate to codons.";
    } else {
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
        if (codon !== "") {
            codonarray.push(codon);
        }

        console.log(codonarray);
        var exist = true;

        for (var i = 0; i < codonarray.length; i++) {
            var found = false;
            for (var j = 0; j < codons.length; j++) {
                if (codonarray[i] == codons[j]) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                exist = false;
                break;
            }
        }

        if (exist) {
            document.getElementById("output").innerText = "Valid RNA sequence: " + rna + "\nCodons: " + codonarray.join(", ");
        } else {
            document.getElementById("output").innerText = "Invalid RNA sequence. Contains non-standard codons.";
        }
    }
}
