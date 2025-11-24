function mostrarTexto() {
    // 1. Pegar o valor digitado
    // .value obtém o texto dentro do campo de entrada
    // document. seleciona o elemento HTML pelo ID
    let texto = document.getElementById("caixaTexto").value;

    // 2. Separar o texto em palavras
    // - .trim() remove espaços extras no começo e fim
    // - .split(/\s+/) divide o texto em partes usando qualquer espaço em branco (espaço, tab, quebra de linha)
    let palavras = texto.trim().split(/\s+/);

    // 3. Contar quantas palavras existem
    // texto.trim() === "" verifica se o texto está vazio após remover espaços
    // Se estiver vazio, quantidade é 0; caso contrário, é o número de palavras
    // ? operador condicional (ternário), funciona como um "se... então... senão"
    // : separa a condição verdadeira da falsa, retornando 0 ou palavras.length
    let quantidadeDePalavras = texto.trim() === "" ? 0 : palavras.length;
    // 4. Contar quantas letras existem
    // .replace(/\s+/g, '') remove todos os espaços em branco do texto
    // g no final da expressão regular indica que a substituição deve ser feita globalmente em todo o texto
    // /\s+/ é uma expressão regular que corresponde a um ou mais espaços em branco (inclui espaços, tabs, quebras de linha)
    // '' substitui esses espaços por nada (remove-os)
    // .length conta o número de caracteres restantes (letras)
    let quantidadeDeLetras = texto.replace(/\s+/g, '').length;
    // 5. Mostrar o resultado na página
    // .innerText altera o texto dentro do elemento HTML selecionado
    // "\n" cria uma nova linha no texto exibido
    document.getElementById("Palavras").innerText =
        "\nQuantidade de palavras: " + quantidadeDePalavras;
    document.getElementById("Letras").innerText =
        "Quantidade de letras: " + quantidadeDeLetras;
}