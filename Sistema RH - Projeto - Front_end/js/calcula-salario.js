var titulo = document.querySelector(".titulo");
titulo.textContent = "Sistema de Gerenciamento de Funcionários";

funcionario.querySelector("info-salario");
var funcionarios = document.querySelectorAll(".funcionario");

for (var i = 0; i < funcionarios.length; i++) {
  var funcionario = funcionarios[i];

  var tdIdade = funcionario.querySelector(".info-idade");
  var idade = tdIdade.textContent;

  var tdCargo = funcionario.querySelector(".info-cargo");
  var cargo = tdCargo.textContent;

  var tdSalario = funcionario.querySelector(".info-salario");
  var salario = tdCargo.textContent;

  var idadeEhValido = validaIdade(idade);
  var CargoEhValida = validaCargo(cargo);

  if (idadeEhValido == false) {
    console.log("funcionario-invalido");
    idadeEhValido = false;
    tdSalario.textContent = "funcionario-invalido";
    funcionario.classList.add("funcionario-invalido");
  }
  if (cargoEhValido == false) {
    console.log("funcionario-invalido");
    cargoEhValido = false;
    tdSalario.textContent = "funcionario-invalido";
    funcionario.classList.add("funcionario-invalido");
  }

  if (SituacaoEhValida == false) {
    console.log("Situação");
    situacaoEhValida = false;
    tdSalario.textContent = "Sálario Inválido";
    funcionario.classList.add("funcionario-invalido");
  }

  if (cargoEhValido && situacaoEhValida) {
    var salario = calculaSalario(cargo, situacao);
    tdSalario.textContent = salario;
  }
}

function calculaSalario(cargo, situacao) {
  var salario = 1200;

  if (situacao == "Efetivo" || situacao == "efetivo") {
    if (cargo == "Comercial" || cargo == "comercial") {
      salario = 2300;
    }
  }

  if (situacao == "Efetivo" || situacao == "efetivo") {
    if (cargo == "Marketing" || cargo == "marketing") {
      salario = 2300;
    }
  }

  if (situacao == "Efetivo" || situacao == "efetivo") {
    if (cargo == "Suporte" || cargo == "suporte") {
      salario = 2100;
    }
  }

  if (situacao == "Efetivo" || situacao == "efetivo") {
    if (cargo == "Analista Testador" || cargo == "analista Testador") {
      salario = 3200;
    }
  }

  if (situacao == "Efetivo" || situacao == "efetivo") {
    if (
      cargo == "Analista de Implantação" ||
      cargo == "analista de Implantacao"
    ) {
      salario = 3200;
    }
  }

  if (situacao == "Efetivo" || situacao == "efetivo") {
    if (cargo == "RH - Analista de Recursos Humanos" || cargo == "RH") {
      salario = 3000;
    }
  }

  if (situacao == "Efetivo" || situacao == "efetivo") {
    if (cargo == "Financeiro" || cargo == "Financeiro") {
      salario = 3000;
    }
  }

  if (situacao == "Efetivo" || situacao == "efetivo") {
    if (cargo == "Modelagem de Dado" || cargo == " modelagem de Dado") {
      salario = 3200;
    }
  }

  if (situacao == "Efetivo" || situacao == "efetivo") {
    if (cargo == "Analista de Sistemas" || cargo == "analista de Sistemas") {
      salario = 3200;
    }
  }

  if (situacao == "Efetivo" || situacao == "efetivo") {
    if (cargo == "Programador Java" || cargo == "programador java") {
      salario = 3200;
    }
  }

  if (
    situacao == "Estagiário" ||
    situacao == "Estagiario" ||
    situacao == "estagiario"
  ) {
    if (cargo == "Comercial" || cargo == "comercial") {
      salario = 1200;
    }
  }

  if (
    situacao == "Estagiário" ||
    situacao == "Estagiario" ||
    situacao == "estagiario"
  ) {
    if (cargo == "Marketing" || cargo == "marketing") {
      salario = 2300;
    }
  }

  if (
    situacao == "Estagiário" ||
    situacao == "Estagiario" ||
    situacao == "estagiario"
  ) {
    if (cargo == "Suporte" || cargo == "suporte") {
      salario = 1200;
    }
  }

  if (
    situacao == "Estagiário" ||
    situacao == "Estagiario" ||
    situacao == "estagiario"
  ) {
    if (cargo == "Analista Testador" || cargo == "analista Testador") {
      salario = 1200;
    }
  }

  if (
    situacao == "Estagiário" ||
    situacao == "Estagiario" ||
    situacao == "estagiario"
  ) {
    if (
      cargo == "Analista de Implantação" ||
      cargo == "analista de Implantacao"
    ) {
      salario = 1200;
    }
  }

  if (
    situacao == "Estagiário" ||
    situacao == "Estagiario" ||
    situacao == "estagiario"
  ) {
    if (cargo == "RH - Analista de Recursos Humanos" || cargo == "RH") {
      salario = 1200;
    }
  }

  if (
    situacao == "Estagiário" ||
    situacao == "Estagiario" ||
    situacao == "estagiario"
  ) {
    if (cargo == "Financeiro" || cargo == "Financeiro") {
      salario = 1200;
    }
  }

  if (
    situacao == "Estagiário" ||
    situacao == "Estagiario" ||
    situacao == "estagiario"
  ) {
    if (cargo == "Modelagem de Dado" || cargo == " modelagem de Dado") {
      salario = 1200;
    }
  }

  if (
    situacao == "Estagiário" ||
    situacao == "Estagiario" ||
    situacao == "estagiario"
  ) {
    if (cargo == "Analista de Sistemas" || cargo == "analista de Sistemas") {
      salario = 1200;
    }
  }

  if (
    situacao == "Estagiário" ||
    situacao == "Estagiario" ||
    situacao == "estagiario"
  ) {
    if (cargo == "Programador Java" || cargo == "programador java") {
      salario = 1200;
    }
  }

  return salario.toFixed(2);
}
