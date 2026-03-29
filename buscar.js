const box = document.querySelector('.buscar-box');
const lupa = document.querySelector('.lupa-buscar');
const fechar = document.querySelector('.btn-fechar');
const input = document.getElementById("campo-busca");
const resultados = document.getElementById("resultados");

//arquivos da pasta
const arquivo = [
    "colete.jpg",
    "off-camisa.jpg",
    "joao.jpg",
    "vermelho.jpg"

];


// abrir busca
lupa.addEventListener('click', ()=> {
    box.classList.add('ativar');
    input.focus();
})


//fechar busca
fechar.addEventListener('click',  ()=>{
    box.classList.remove('ativar');
    input.value = "";
    resultados.innerHTML = "";

})

// buscar
input.addEventListener("keyup", () => {
    const valor = input.value.toLowerCase();

    const filtrados = arquivo.filter(item =>
        item.toLowerCase().includes(valor)
    );

    mostrarResultados(filtrados);
});

function mostrarResultados(lista) {
    resultados.innerHTML ="";

    lista.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;

        li.addEventListener("click", ()=> {
            window.open("./arquivo/" + item, "_blank");
        });
        resultados.appendChild(li);
    });
}