



function calcula_montante(){
    const capital = Number(document.getElementById("capital").value);
    const taxa_string = String(document.getElementById("taxa"))
    const taxa = Number(taxa_string.replace(",", ".").value);

    const n = Number(document.getElementById("n").value)

    const resultado = document.getElementById("res")

    const montante = capital*(1+3)**n

    resultado.innerHTML = montante

}