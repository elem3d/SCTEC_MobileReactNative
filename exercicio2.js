/* ARROW FUNCTIONS

CONVERTA A SEGUINTE FUNÇÃO EM ARROW FUNCTION:

function abrirChamado(numero, solicitante, categoria, prioridade) {
    return {
        numero: numero,
        solicitante: solicitante,
        categoria: categoria,
        prioridade: prioridade,
        status: "Aberto"
    };
}

*/


const abrirChamado = (numero, solicitante, categoria, prioridade) =>({
    numero: numero,
        solicitante: solicitante,
        categoria: categoria,
        prioridade: prioridade,
        status: "Aberto"
});

console.log(abrirChamado(12,"fulano solicitou", "categoriaX", "alta"));
