"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empresa = void 0;
class Empresa {
    constructor() {
        this.funcionarios = [];
    }
    adicionarFuncionario(funcionario) {
        const existe = this.funcionarios.find(f => f.matricula === funcionario.matricula);
        if (existe) {
            console.error('Funcionário já cadastrado!');
        }
        else {
            this.funcionarios.push(funcionario);
        }
    }
    atualizarSalario(matricula, novoSalario) {
        const funcionario = this.funcionarios.find(f => f.matricula === matricula);
        if (funcionario) {
            funcionario.salario = novoSalario;
            console.log(`Salário do funcionário ${matricula} atualizado para R$ ${novoSalario.toFixed(2)}`);
        }
        else {
            console.error('Funcionário não encontrado!');
        }
    }
    consultarFuncionario(matricula) {
        const funcionario = this.funcionarios.find(f => f.matricula === matricula);
        if (funcionario) {
            return funcionario;
        }
        else {
            console.warn('Funcionário não encontrado!');
            return undefined;
        }
    }
}
exports.Empresa = Empresa;
