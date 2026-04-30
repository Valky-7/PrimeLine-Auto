# Documentacao do Sistema PrimeLine Auto

## 1. Identificacao do Projeto

**Nome do sistema:** PrimeLine Auto

**Tipo de sistema:** Website SPA (Single Page Application)

**Area de atuacao:** Venda e apresentacao de pecas automotivas premium

**Tecnologias utilizadas:**

- Angular
- TypeScript
- HTML
- CSS
- Tailwind CSS
- RxJS
- Font Awesome

O PrimeLine Auto e uma aplicacao web desenvolvida com Angular e Tailwind CSS, voltada para a apresentacao e venda de pecas automotivas premium. O sistema possui navegacao em pagina unica, catalogo de produtos, secao de promocoes, formulario de contato e carrinho de compras interativo.

## 2. Breve Historico da Empresa

A PrimeLine Auto e uma empresa ficticia do setor automotivo, criada com foco na comercializacao de pecas premium para veiculos. Seu objetivo e oferecer produtos de alta qualidade, desempenho e confiabilidade, atendendo clientes que buscam melhorar a performance, seguranca e aparencia de seus automoveis. A empresa trabalha com itens como freios, amortecedores, baterias, farois, pneus, suspensoes e acessorios esportivos.

## 3. Levantamento de Requisitos dos Clientes

### 3.1 Requisitos Funcionais

O sistema deve permitir que o usuario:

- Visualize a pagina inicial da empresa.
- Navegue pelas secoes do site por meio do menu superior.
- Acesse o catalogo de produtos disponiveis.
- Visualize nome, imagem e preco de cada produto.
- Adicione produtos ao carrinho de compras.
- Adicione o mesmo produto mais de uma vez ao carrinho.
- Remova apenas uma unidade especifica do produto no carrinho.
- Visualize o subtotal da compra.
- Finalize a compra limpando os itens do carrinho.
- Consulte promocoes e destaques da semana.  
- Acesse informacoes de contato da empresa.
- Preencha um formulario com nome, e-mail e mensagem.

### 3.2 Requisitos Nao Funcionais

O sistema deve:

- Ter interface responsiva para diferentes tamanhos de tela.
- Possuir carregamento rapido por ser uma SPA.
- Usar uma identidade visual coerente com o segmento premium automotivo.
- Apresentar navegacao simples e intuitiva.
- Utilizar componentes reaproveitaveis.
- Manter o carrinho sincronizado em tempo real.
- Ter layout organizado, com boa legibilidade e contraste visual.

## 4. O Que o Sistema Faz

O PrimeLine Auto apresenta uma loja virtual de pecas automotivas premium. Na primeira tela, o usuario encontra uma area de destaque com o nome da empresa e um botao para explorar o catalogo. Ao acessar o catalogo, sao exibidos produtos com imagem, nome, preco e botao de adicionar ao carrinho.

O carrinho fica localizado no cabecalho da pagina. Quando o usuario adiciona produtos, o contador do carrinho e atualizado automaticamente. Ao abrir o carrinho, o usuario consegue visualizar todos os itens selecionados, remover produtos individualmente, conferir o subtotal e finalizar a compra. Ao finalizar, os itens sao removidos do carrinho.

O site tambem possui uma area de promocoes com produtos em oferta e uma secao de contato com localizacao, telefone e formulario para envio de mensagem.

## 5. Componentes do Sistema

### 5.1 App

O componente principal da aplicacao organiza a estrutura geral da SPA. Ele renderiza o cabecalho, as secoes principais e o rodape.

Arquivo principal:

`src/app/app.html`

Componentes exibidos:

- Header
- Home
- Catalogo
- Promocoes
- Contato
- Footer

### 5.2 Header

O componente Header representa o cabecalho fixo do site. Ele contem:

- Nome da marca PrimeLine Auto.
- Menu de navegacao.
- Icone do carrinho.
- Contador de itens.
- Modal do carrinho.
- Botao para fechar o carrinho.
- Lista de produtos adicionados.
- Subtotal da compra.
- Botao de finalizar compra.

Arquivos:

- `src/app/header/header.html`
- `src/app/header/header.ts`

### 5.3 Home

O componente Home representa a tela inicial. Ele utiliza uma imagem de fundo automotiva, titulo principal, frase de impacto e botao para rolar ate o catalogo.

Arquivos:

- `src/app/home/home.html`
- `src/app/home/home.ts`

### 5.4 Catalogo

O componente Catalogo exibe os produtos principais da loja. Cada produto possui id, nome, preco e imagem. O usuario pode adicionar qualquer produto ao carrinho.

Arquivos:

- `src/app/catalogo/catalogo.html`
- `src/app/catalogo/catalogo.ts`

Produtos cadastrados:

- Kit Freios Brembo
- Amortecedores KYB
- Bateria Moura Premium
- Farol LED Matrix
- Kit Correia + Tensor
- Pneus Michelin Sport

### 5.5 Promocoes

O componente Promocoes apresenta os destaques da semana, exibindo produtos com desconto, preco antigo e preco promocional.

Arquivos:

- `src/app/promocoes/promocoes.html`
- `src/app/promocoes/promocoes.ts`

### 5.6 Contato

O componente Contato permite que o usuario visualize dados da empresa e preencha um formulario de contato.

Campos do formulario:

- Nome completo
- E-mail
- Mensagem

Arquivos:

- `src/app/contato/contato.html`
- `src/app/contato/contato.ts`

### 5.7 Footer

O componente Footer exibe informacoes finais da empresa, como nome, ano, localizacao e slogan.

Arquivos:

- `src/app/footer/footer.html`
- `src/app/footer/footer.ts`

### 5.8 CartService

O CartService e o servico responsavel pela regra de negocio do carrinho de compras. Ele armazena os produtos adicionados, atualiza a lista de itens, calcula o subtotal, remove itens individualmente e limpa o carrinho ao finalizar a compra.

Arquivo:

`src/app/services/cart.service.ts`

## 6. Codigo Fonte

O codigo fonte esta organizado em componentes Angular standalone, separados por responsabilidade. Cada parte visual do site possui seus proprios arquivos HTML, CSS e TypeScript.

### 6.1 Estrutura Principal

```text
src/
  app/
    app.html
    app.ts
    header/
    home/
    catalogo/
    promocoes/
    contato/
    footer/
    services/
      cart.service.ts
  styles.css
public/
  imagens/
```

### 6.2 Arquivo App

O arquivo `app.html` monta a pagina principal:

```html
<app-header></app-header>

<main>
  <app-home id="inicio"></app-home>
  <app-catalogo id="catalogo"></app-catalogo>
  <app-promocoes id="promocoes"></app-promocoes>
  <app-contato id="contato"></app-contato>
</main>

<app-footer></app-footer>
```

Esse trecho define a ordem das secoes da SPA. Como a aplicacao e de pagina unica, o menu nao troca de pagina; ele apenas rola ate a secao desejada.

### 6.3 Codigo do Carrinho

O servico do carrinho utiliza `BehaviorSubject` para manter os componentes atualizados sempre que a lista de produtos muda.

```ts
private items: Produto[] = [];
private cartSubject = new BehaviorSubject<Produto[]>([]);

cartItems$ = this.cartSubject.asObservable();
```

Explicacao:

- `items` guarda os produtos adicionados ao carrinho.
- `cartSubject` emite a lista atualizada para os componentes.
- `cartItems$` permite que o HTML acompanhe as alteracoes usando `async`.

Metodo para adicionar produto:

```ts
addToCart(product: Produto) {
  this.items.push(product);
  this.cartSubject.next([...this.items]);
}
```

Esse metodo adiciona o produto ao array e depois envia uma nova copia da lista para atualizar a interface.

Metodo para remover apenas uma unidade:

```ts
removeItem(id: number) {
  const index = this.items.findIndex(item => item.id === id);

  if (index !== -1) {
    this.items.splice(index, 1);
    this.cartSubject.next([...this.items]);
  }
}
```

Esse metodo localiza a primeira ocorrencia do produto pelo id e remove somente essa unidade. Isso corrige o problema em que todos os produtos iguais eram removidos ao mesmo tempo.

Metodo para limpar o carrinho:

```ts
clearCart() {
  this.items = [];
  this.cartSubject.next([]);
}
```

Esse metodo e chamado ao clicar em "Finalizar Compra". Ele esvazia o carrinho e atualiza a interface.

Metodo para calcular subtotal:

```ts
getTotal(): number {
  return this.items.reduce((total, p) => total + p.preco, 0);
}
```

Esse metodo soma o preco de todos os produtos adicionados.

## 7. User Interface

A interface do PrimeLine Auto foi pensada para transmitir uma identidade premium, moderna e automotiva.

### 7.1 Cores

As principais cores utilizadas sao:

- Preto: usado como cor principal de fundo, trazendo sofisticacao e contraste.
- Dourado `#c5a059`: usado em destaques, botoes, icones, bordas e textos importantes.
- Branco: usado para textos principais e contraste.
- Cinza: usado em textos secundarios e informacoes complementares.

Essa combinacao cria uma aparencia elegante e combina com o posicionamento premium da marca.

### 7.2 Layout

O layout e dividido em secoes verticais:

- Cabecalho fixo.
- Tela inicial com imagem de fundo.
- Catalogo em grade.
- Promocoes em cards.
- Area de contato com informacoes e formulario.
- Rodape.

No catalogo, os produtos sao organizados em grid responsivo:

- Uma coluna em telas menores.
- Duas colunas em telas medias.
- Tres colunas em telas grandes.

### 7.3 Paginacao e Navegacao

O sistema nao utiliza paginacao tradicional, pois e uma SPA com secoes na mesma pagina. A navegacao e feita por rolagem suave ate cada secao:

- Inicio
- Catalogo
- Promocoes
- Contato

Essa escolha reduz a complexidade para o usuario e torna a experiencia mais rapida.

### 7.4 Elementos Visuais

O sistema utiliza:

- Imagens reais de produtos automotivos.
- Cards para produtos e promocoes.
- Icones Font Awesome no carrinho, contato e botoes.
- Efeitos de hover em botoes e imagens.
- Modal centralizado para o carrinho.

## 8. User Experience e Usabilidade

A experiencia do usuario foi planejada para ser direta e simples. O usuario consegue entender rapidamente o objetivo do site, navegar pelas secoes e adicionar produtos ao carrinho sem trocar de pagina.

Pontos positivos de usabilidade:

- Cabecalho fixo sempre visivel.
- Menu com nomes claros.
- Botao de chamada para acao na tela inicial.
- Produtos com imagem, nome e preco.
- Carrinho com contador automatico.
- Subtotal exibido antes da finalizacao.
- Botao de remover item no proprio carrinho.
- Botao de finalizar compra com limpeza imediata do carrinho.
- Layout responsivo para celular, tablet e desktop.

O uso de scroll suave melhora a navegacao, pois o usuario entende para qual parte da pagina esta sendo levado. O carrinho em modal evita que o usuario saia do contexto da compra.

## 9. Roteiro de Prints Para o Google Docs

### Print 1: Tela Inicial

Mostrar:

- Nome PrimeLine Auto.
- Frase "Pecas premium. Desempenho real."
- Botao "Explorar Catalogo".
- Imagem de fundo.

Explicacao sugerida:

Esta tela apresenta a identidade visual da empresa e direciona o usuario para o catalogo de produtos.

### Print 2: Menu Superior

Mostrar:

- Logo textual.
- Links de navegacao.
- Icone do carrinho.
- Contador de itens.

Explicacao sugerida:

O menu superior fica fixo no topo da pagina e permite acessar rapidamente as secoes principais do site.

### Print 3: Catalogo de Produtos

Mostrar:

- Cards dos produtos.
- Imagens.
- Precos.
- Botao "Adicionar ao Carrinho".

Explicacao sugerida:

O catalogo apresenta os produtos disponiveis para compra e permite adicionar itens ao carrinho.

### Print 4: Carrinho Aberto

Mostrar:

- Modal do carrinho.
- Produtos adicionados.
- Subtotal.
- Botao de remover.
- Botao "Finalizar Compra".

Explicacao sugerida:

O carrinho exibe os itens selecionados pelo usuario e calcula automaticamente o subtotal da compra.

### Print 5: Remocao de Item

Mostrar:

- Dois produtos iguais adicionados.
- Remocao de apenas uma unidade.

Explicacao sugerida:

O sistema permite adicionar produtos repetidos e remover somente uma unidade por vez, mantendo o restante do carrinho.

### Print 6: Promocoes

Mostrar:

- Cards de ofertas.
- Percentual de desconto.
- Preco antigo e preco promocional.

Explicacao sugerida:

A secao de promocoes destaca produtos com desconto e incentiva a compra.

### Print 7: Contato

Mostrar:

- Informacoes da empresa.
- Localizacao.
- Telefone.
- Formulario.

Explicacao sugerida:

A secao de contato facilita a comunicacao entre o cliente e a empresa.

## 10. Roteiro Para Explicar o Codigo Fonte

### Header

Explique que o Header controla o menu, a rolagem suave e a abertura do carrinho. O metodo `toggleCart()` abre e fecha o modal. O metodo `scrollTo()` leva o usuario ate a secao desejada.

### Catalogo

Explique que o Catalogo possui um array de produtos. O `*ngFor` percorre esse array e cria um card para cada produto. Ao clicar em "Adicionar ao Carrinho", o produto e enviado para o `CartService`.

### CartService

Explique que o servico centraliza a logica do carrinho. Ele adiciona, remove, limpa e calcula o total dos produtos. O uso de `BehaviorSubject` permite que o Header seja atualizado automaticamente.

### App

Explique que o App organiza os componentes principais da pagina e define a ordem de exibicao da SPA.

### Styles

Explique que o arquivo global importa o Tailwind CSS e define a rolagem suave da pagina.

## 11. Conclusao

O PrimeLine Auto e uma SPA moderna para apresentacao e venda de pecas automotivas premium. O sistema utiliza Angular para organizacao em componentes, Tailwind CSS para estilizar a interface e RxJS para manter o carrinho sincronizado. A aplicacao atende aos requisitos principais de uma loja virtual simples, com catalogo, promocoes, carrinho de compras e contato, mantendo uma experiencia visual elegante e intuitiva para o usuario.
