// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$('#ProdutoLink').on('click', function (event) {
    debugger;

    // prevenir comportamento normal do link
    event.preventDefault();

    // código a executar aqui
    var urlAtual = window.location.href;
    if (urlAtual.includes('Produto') == false) {  
    var myArray = urlAtual.split("/Home/");
        window.location = myArray + "" + "Produto";
    }
});

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table_id");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function validar() {
    debugger; var valorDecimal = document.getElementById("moeda").value;
    var onlyLetters = /[a-zA-Z\u00C0-\u00FF ]+/i.test(valorDecimal);

}