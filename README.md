# 🏗️ Sistema de Gestão de Clientes: Construtores & Metaprogramação

Um projeto prático focado na construção avançada de objetos em JavaScript. Este script gerencia dados de clientes, incluindo seus telefones e endereços, aplicando técnicas de refatoração profunda para evitar a repetição de código (Princípio DRY - *Don't Repeat Yourself*).

## 📋 Sobre o Projeto

O objetivo principal deste código é demonstrar como criar modelos de dados complexos (Clientes compostos por Endereços e Telefones) de uma forma extremamente enxuta. Em vez de escrever dezenas de métodos `get` e `set` manualmente para cada classe, o script utiliza **metaprogramação** para injetar esses métodos dinamicamente em tempo de execução.

Além disso, o projeto conta com um sistema seguro de ordenação alfabética e formatação de saída.

## ✨ Tecnologias e Conceitos Aplicados

Este script é rico em recursos avançados do JavaScript:

* **Metaprogramação Dinâmica:** A função `gerarMetodos` varre um array de atributos e constrói automaticamente os métodos `get`, `set`, `get...UpperCase` e `get...LowerCase` para cada um deles.
* **Funções Construtoras:** Uso do modelo tradicional do JavaScript (`function Construtor()`) para instanciar novos objetos através da palavra-chave `new`.
* **`Object.defineProperty`:** Utilizado para criar a propriedade computada `descricao`. Ela se comporta como uma variável comum (não exige parênteses `()`), mas executa uma função complexa de formatação por trás dos panos via `get`.
* **Clonagem e Imutabilidade (`Spread Operator`):** A função `ordenarClientes` utiliza `[...clientes]` para clonar o array original antes de aplicar o `.sort()`, garantindo que a lista original de clientes não seja alterada acidentalmente.
* **`localeCompare`:** Método moderno e seguro para ordenação alfabética de strings, respeitando acentos e caracteres especiais do nosso idioma.

## 🚀 Como Executar

Este projeto roda de forma nativa e não requer dependências ou bibliotecas externas.

### Opção 1: Via Node.js
Se você tem o Node.js instalado:
1. Clone o repositório ou baixe o arquivo `script.js`.
2. Abra o terminal na pasta do arquivo.
3. Execute:
   ```bash
   node script.js
