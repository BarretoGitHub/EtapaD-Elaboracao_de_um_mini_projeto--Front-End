var botaoAdicionar = document.querySelector("#adicionar-funcionario");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var funcionario = obtemFuncionarioDoFormulario(form);

  var erros = validaFuncionario(funcionario);

  if (erros.length > 0) {
    exibeMensagensDeErro(erros);

    return;
  }

  adicionaFuncionarioNaTabela(funcionario);
  form.reset();

  var mensagensErro = document.querySelector("#mensagens-erro");
  mensagensErro.innerHTML = "";
});

function obtemFuncionarioDoFormulario(form) {
  var funcionario = {
    nome: form.nome.value,
    idade: form.idade.value,
    cargo: form.cargo.value,
    situacao: form.situacao.value,
    salario: calculaSalario(form.cargo.value, form.situacao.value),
  };

  return funcionario;
}

function montaTr(funcionario) {
  var funcionarioTr = document.createElement("tr");
  funcionarioTr.classList.add("funcionario");

  funcionarioTr.appendChild(montaTd(funcionario.nome, "info-nome"));
  funcionarioTr.appendChild(montaTd(funcionario.idade, "info-idade"));
  funcionarioTr.appendChild(montaTd(funcionario.cargo, "info-cargo"));
  funcionarioTr.appendChild(montaTd(funcionario.situacao, "info-situacao"));
  funcionarioTr.appendChild(montaTd(funcionario.salario, "info-salario"));

  return funcionarioTr;
}

function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;
  return td;
}

function validaFuncionario(funcionario) {
  var erros = [];

  /* Validação dos campos sem conteúdo */

  if (funcionario.nome.length == 0) {
    erros.push("Preencher o campo: Nome");
  }

  if (funcionario.idade.length == 0) {
    erros.push("Preencher o campo: Idade");
  }

  if (funcionario.cargo.length == 0) {
    erros.push("Preencher o campo: Cargo");
  }

  if (funcionario.situacao.length == 0) {
    erros.push("Preencher o campo: Situacao");
  }

  return erros;
}

/* Função que exibe mensagem de erros */
function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function (erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}

/* Função que adiciona funcionário na tabela de funcionarários */
function adicionaFuncionarioNaTabela(funcionario) {
  var funcionarioTr = montaTr(funcionario);
  var tabela = document.querySelector("#tabela-funcionarios");
  tabela.appendChild(funcionarioTr);
}
