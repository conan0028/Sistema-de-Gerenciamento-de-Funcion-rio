import { Funcionario } from './Funcionario';
import { Empresa } from './Empresa';

const empresa = new Empresa();

// Função para adicionar funcionários
function cadastrarFuncionarios() {
    const funcionario1 = new Funcionario(1, 'Alice', 'Desenvolvedora', 5000);
    const funcionario2 = new Funcionario(2, 'Bob', 'Designer', 4500);
    const funcionario3 = new Funcionario(3, 'Carol', 'Gerente', 7000);

    empresa.adicionarFuncionario(funcionario1);
    empresa.adicionarFuncionario(funcionario2);
    empresa.adicionarFuncionario(funcionario3);

    console.log('Funcionários cadastrados com sucesso.');
}

// Função para atualizar o salário de um funcionário
function atualizarSalarioFuncionario() {
    console.log('Atualizando salário do funcionário com matrícula 1...');
    empresa.atualizarSalario(1, 5500);
}

// Função para consultar um funcionário
function consultarFuncionario() {
    console.log('Consultando funcionário com matrícula 1...');
    const funcionario = empresa.consultarFuncionario(1);
    if (funcionario) {
        console.log(`Funcionário encontrado: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$ ${funcionario.salario.toFixed(2)}`);
    }
}

// Executar os testes
cadastrarFuncionarios();
atualizarSalarioFuncionario();
consultarFuncionario();

