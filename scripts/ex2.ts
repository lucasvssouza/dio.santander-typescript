/* Como podemos melhorar o esse código usando TS? 

let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/

interface Profissao {
  nome: string;
  idade: number;
  profissao: "Atriz" | "Padeiro";
}

let pessoa1: Profissao = {
  nome: "Maria",
  idade: 29,
  profissao: "Atriz",
};

let pessoa2: Profissao = {
  nome: "Roberto",
  idade: 19,
  profissao: "Padeiro",
};

let pessoa3: Profissao = {
  nome: "Laura",
  idade: 32,
  profissao: "Atriz",
};

let pessoa4 = {
  nome: "Carlos",
  idade: 19,
  profissao: "Padeiro",
};

let p1_nome: any = document.getElementById("p1_nome");
let p1_idade: any = document.getElementById("p1_idade");
let p1_profissao: any = document.getElementById("p1_profissao");

p1_nome.innerHTML = pessoa1.nome;
p1_idade.innerHTML = pessoa1.idade;
p1_profissao.innerHTML = pessoa1.profissao;

let p2_nome: any = document.getElementById("p2_nome");
let p2_idade: any = document.getElementById("p2_idade");
let p2_profissao: any = document.getElementById("p2_profissao");

p2_nome.innerHTML = pessoa2.nome;
p2_idade.innerHTML = pessoa2.idade;
p2_profissao.innerHTML = pessoa2.profissao;

let p3_nome: any = document.getElementById("p3_nome");
let p3_idade: any = document.getElementById("p3_idade");
let p3_profissao: any = document.getElementById("p3_profissao");

p3_nome.innerHTML = pessoa3.nome;
p3_idade.innerHTML = pessoa3.idade;
p3_profissao.innerHTML = pessoa3.profissao;

let p4_nome: any = document.getElementById("p4_nome");
let p4_idade: any = document.getElementById("p4_idade");
let p4_profissao: any = document.getElementById("p4_profissao");

p4_nome.innerHTML = pessoa4.nome;
p4_idade.innerHTML = pessoa4.idade;
p4_profissao.innerHTML = pessoa4.profissao;
