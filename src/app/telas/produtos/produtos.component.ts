import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  meuTitulo = "Novo Titulo - Produtos";
  nomeProduto = "Produtos";

  produto1 = { descricao: "Fone", preco: 100.00, medidas: "12x14" }

  produtos = [
    { descricao: "Monitor" },
    this.produto1,
    { descricao: "Notebook" }
  ];

  acaoBotao = (usuario: string) => {
    const novoNome = this.nomeCompleto(usuario);

    this.meuTitulo = novoNome;
  }

  nomeCompleto = (usuario: string) => {
    const nomeComp = usuario + " Gama";
    return nomeComp;
  }

  acaoMenuClicado = (valor: string) => {
    debugger;
    this.nomeProduto = valor;






  }
}
