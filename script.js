const codonToAminoAcid = {
    "UUU": "Phenylalanine", "UUC": "Phenylalanine", "UUA": "Leucine", "UUG": "Leucine",
    "UCU": "Serine", "UCC": "Serine", "UCA": "Serine", "UCG": "Serine",
    "UAU": "Tyrosine", "UAC": "Tyrosine", "UAA": "Stop", "UAG": "Stop",
    "UGU": "Cysteine", "UGC": "Cysteine", "UGA": "Stop", "UGG": "Tryptophan",
    "CUU": "Leucine", "CUC": "Leucine", "CUA": "Leucine", "CUG": "Leucine",
    "CCU": "Proline", "CCC": "Proline", "CCA": "Proline", "CCG": "Proline",
    "CAU": "Histidine", "CAC": "Histidine", "CAA": "Glutamine", "CAG": "Glutamine",
    "CGU": "Arginine", "CGC": "Arginine", "CGA": "Arginine", "CGG": "Arginine",
    "AUU": "Isoleucine", "AUC": "Isoleucine", "AUA": "Isoleucine", "AUG": "Methionine",
    "ACU": "Threonine", "ACC": "Threonine", "ACA": "Threonine", "ACG": "Threonine",
    "AAU": "Asparagine", "AAC": "Asparagine", "AAA": "Lysine", "AAG": "Lysine",
    "AGU": "Serine", "AGC": "Serine", "AGA": "Arginine", "AGG": "Arginine",
    "GUU": "Valine", "GUC": "Valine", "GUA": "Valine", "GUG": "Valine",
    "GCU": "Alanine", "GCC": "Alanine", "GCA": "Alanine", "GCG": "Alanine",
    "GAU": "Aspartic acid", "GAC": "Aspartic acid", "GAA": "Glutamic acid", "GAG": "Glutamic acid",
    "GGU": "Glycine", "GGC": "Glycine", "GGA": "Glycine", "GGG": "Glycine"
};

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
        var aminoAcids = [];
        var valid = true;

        for (var i = 0; i < codonarray.length; i++) {
            if (codonToAminoAcid.hasOwnProperty(codonarray[i])) {
                aminoAcids.push(codonToAminoAcid[codonarray[i]]);
            } else {
                valid = false;
                break;
            }
        }

        if (valid) {
            document.getElementById("output").innerText = "Valid RNA sequence: " + rna + "\nCodons: " + codonarray.join(", ") + "\nAmino Acids: " + aminoAcids.join(", ");
        } else {
            document.getElementById("output").innerText = "Invalid RNA sequence. Contains non-standard codons.";
        }
    }
}
