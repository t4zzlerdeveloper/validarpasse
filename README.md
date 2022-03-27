
<img src="https://validarpasse.pt/static/media/logo-vp-back-transparent.2116894b6156fa326fa0.png" alt="ValidarPasse.pt" style="width:300px;"/>

# Bem-vindo ao Projeto Validar Passe

A Ideia...

> #### "Este projeto visa criar uma ligação entre o SheerID e as empresas responsáveis, em apenas 2 passos, com o propósito de oferecer a (re)validação de passes(sub-23) a todos os estudantes."

# Funcionamento

#### Esquema de estados da página

```mermaid
graph LR
A((Início)) -->
B[1 - Validaçao SheerID] --> E((Erro)) --> A
B --> D((Sucesso)) --> F
F[2 - Seleção da área metropolitana] --> G
G[3 - Comunicação com empresas de transportes*] --> C
G --> E
C{Passe Validado}
```
### 1 - Validaçao SheerID
<img src="https://validarpasse.pt/images/sheerid-validarpasse.PNG" alt="ValidarPasse.pt" style="width:300px;"/>

Inicialmente recorremos à API da SheerID e criamos a nossa própria interface, mas inesperadamente obtemos alguns erros não documentados pela empresa e acabámos por  integrar no nosso site 

### 2 - Seleção da área metropolitana
<img src="https://validarpasse.pt/images/mapa-validarpasse.PNG" alt="ValidarPasse.pt" style="width:300px;"/>

### 3 - Comunicação com empresas de transportes
*Infelizmente, esta fase do programa não foi implementada, visto que requer negociação com as empresas responsáveis pelas redes de transportes metropolitanos de Portugal.



# Todo:
- Criar pedidos com a API da SheerID de forma a garantir sempre autentição por parte do utilizador

- Integrar projeto com as redes metropolitanas portuguesas

- Adicionar opção de carregamento de passes

