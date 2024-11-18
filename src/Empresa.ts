import { Funcionario } from './Funcionario';

export class Empresa {
    private funcionarios: Funcionario[];

    constructor() {
        this.funcionarios = [];
    }

    adicionarFuncionario(funcionario: Funcionario): void {
        const existe = this.funcionarios.find(f => f.matricula === funcionario.matricula);
        if (existe) {
            console.error('Funcionário já cadastrado!');
        } else {
            this.funcionarios.push(funcionario);
        }
    }

    atualizarSalario(matricula: number, novoSalario: number): void {
        const funcionario = this.funcionarios.find(f => f.matricula === matricula);
        if (funcionario) {
            funcionario.salario = novoSalario;
            console.log(`Salário do funcionário ${matricula} atualizado para R$ ${novoSalario.toFixed(2)}`);
        } else {
            console.error('Funcionário não encontrado!');
        }
    }

    consultarFuncionario(matricula: number): Funcionario | undefined {
        const funcionario = this.funcionarios.find(f => f.matricula === matricula);
        if (funcionario) {
            return funcionario;
        } else {
            console.warn('Funcionário não encontrado!');
            return undefined;
        }
    }
}

