# Testes no Angular

- Dev que sabe testes já está acima da média do mercado
- Muito se fala em *Clean code* e *Arquitetura*, mas sem testes não temos Código limpo!
- Nunca trabalhou com testes? Tudo bem! Esse pode ser o pontapé inicial pra você 😎

## Por que testar o nosso código?

- Garantir que o sistema funciona como deveria
- Serve como documentação
- Ajuda a criar componentes mais coesos (qualidade de código)
- Confiança para alterar ou refatorar código

### Criando Header

```html
<header class="header">
  <h1 class="logo">Workshop Angular</h1>
</header>
```

```scss
.header {
  background-color: #591396;
  color: #fff;
  padding: 5px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.logo {
  font-size: 24px;
  font-family: 'Lucida Sans', sans-serif;
}
```

Testando UsersComponent
O que é um Mock?
Um "mock" é um objeto simulado que replica o comportamento de um objeto real de forma controlada.

```js
[
  {
    createdAt: '2024-03-04T06:06:30.832Z',
    name: 'Andrew Rosário',
    avatar: 'avatar.jpg',
    email: 'andrewrosario@mail.com',
    biography: 'Lorem ipsum',
    id: '1',
  },
  {
    createdAt: '2024-03-04T06:06:30.832Z',
    name: 'Paolo Almeida',
    avatar: 'avatar.jpg',
    email: 'paoloalmeida@mail.com',
    biography: 'Lorem ipsum',
    id: '2',
  },
]
```