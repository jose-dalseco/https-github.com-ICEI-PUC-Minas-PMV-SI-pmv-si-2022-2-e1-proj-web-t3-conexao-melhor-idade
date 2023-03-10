
# Projeto de Interface

### Funcionamento da aplicação

O projeto contém cinco (5) páginas principais, sendo elas: 

 **1- Home:** Página de apresentação do site para dar um panorama geral do objetivo do projeto e como e este funciona. Através desta página o usuário poderá se cadastrar ou fazer login. Além disso poderá acessar páginas emergenciais, como primeiros socorros, números de emergência, localização de postos de saúde nas proximidades e informações do funcionamento da aplicação. 

**2- Login:** Página para logar ou cadastrar uma nova conta. Nesse momento o usuário pode escolher qual tipo de conta irá criar de acordo com sua necessidade, podendo ser um Prestador De Serviço ou Cliente (procurar por um prestador de serviço). 
A página seguinte para o qual o usuário será direcionado dependerá do tipo de conta selecionada. 

 
**3- Página Principal:** Cada tipo de usuário terá acesso a uma determinada Página Principal correspondente ao seu tipo de conta. 

* **Prestador De Serviço:** Nesta página o Prestador De Serviço poderá visualizar e candidatar-se as vagas cadastradas pelos Clientes, assim como acessar seu perfil e páginas emergenciais como primeiros socorros, números de emergência, localização de postos de saúde nas proximidades e informações do funcionamento da aplicação. 

* **Cliente:** Nesta página o Cliente poderá cadastrar vagas e visualizar perfis de Prestadores De Serviços que serão recomendados de acordo com determinados critérios semelhantes entre seus perfis, como a proximidade física entre eles. Além disso, também poderá acessar seu perfil, assim como páginas emergenciais como primeiros socorros, números de emergência, localização de postos de saúde nas proximidades e informações do funcionamento da aplicação. 

**4- Perfil:** Cada tipo de usuário terá acesso a uma determinada de Perfil correspondente ao seu tipo de conta. 

* **Prestador De Serviço:** Nesta página o Prestador De Serviço poderá visualizar e editar suas informações pessoais de localidade, contato, biografia e habilidades. Poderá também visualizar as avaliações feitas pelos Clientes que tenha prestado serviços. 

* **Cliente:** Nesta página o Cliente poderá visualizar e editar suas informações pessoais de localidade, contato e biografia, assim como gerenciar suas vagas cadastradas. 


**5- Página de Cadastro de Vagas:** Está é uma página que será criada exclusivamente pelo usuário Cliente e ser visualizada pelo usuário Prestador De Serviço. Os Clientes poderão cadastrar vagas para que Prestadores De Serviços possam se candidatar.  
Nesta página constará informações do Cliente anunciante e dos serviços a serem prestados. Todas essas informações poderão ser editadas pelo Cliente e visualizadas pelo Prestador De Serviço. Este também poderá se candidatar-se a vaga através desta página. 

### Paleta de Cores

Nossa aplicação será composta por cores com tons de azul, verde claro e branco. Escolhemos essas cores pois nosso publico será composto por idosos e cuidadores, visando trazer tons mais claros para que seja agradável aos olhos e torne um ambiente seguro, visto que psicologicamente essas cores remetem a paz, tranquilidade, confiança estabilidade e harmonia.

![image](https://user-images.githubusercontent.com/43422620/208337181-f65efd16-7602-4983-b4b2-78462f97686d.png)


<!-- Visão geral da interação do usuário pelas telas do sistema e protótipo interativo das telas com as funcionalidades que fazem parte do sistema (wireframes).

 Apresente as principais interfaces da plataforma. Discuta como ela foi elaborada de forma a atender os requisitos funcionais, não funcionais e histórias de usuário abordados nas <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a>.

## User Flow

![Exemplo de UserFlow](img/userflow.jpg)

Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor mapear todo fluxo de telas do site ou app. Essa técnica funciona para alinhar os caminhos e as possíveis ações que o usuário pode fazer junto com os membros de sua equipe.

> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
-->

## User Flow

### Cliente

<img src="img/cliente.png" alt="Userflow Cliente"/>

### Prestador de Serviço 

<img src="img/profissional.png" alt="Userflow Prestador de Serviço"/>

## Wireframes

### Página home sem login

Através desta página o usuário poderá poderá acessar páginas emergenciais, como primeiros socorros(RF-008), números de emergência(RF-009), localização de postos de saúde nas proximidades(RF-010) e informações do funcionamento da aplicação.

![Web capture_18-12-2022_214256_icei-puc-minas-pmv-si github io](https://user-images.githubusercontent.com/43422620/208337574-9c366c08-5d13-490e-82c0-cb8ace4b4b13.jpeg)

### Página de Login

![Web capture_18-12-2022_214315_icei-puc-minas-pmv-si github io](https://user-images.githubusercontent.com/43422620/208337592-712c726d-db0c-4ac4-bc30-10b5ff991623.jpeg)

### Home do cliente

Nesta página o Cliente poderá iniciar a busca por Prestadores De Serviços(RF-006), visualizar perfis recomendados de acordo com os dados informados em seu perfil como a proximidade física, tipo de serviço que procura e habilidades. O Cliente também poderá conferir suas avaliações, acessar a caixa de mensagens(RF-011), poderá visualizar vagas já postadas ou ser direcionado ao cadastro de novas vagas.

### Página de perfil

![Web capture_18-12-2022_214356_icei-puc-minas-pmv-si github io](https://user-images.githubusercontent.com/43422620/208337650-f3acc8d4-5333-4c8c-b715-93e054113289.jpeg)


### Página de login mobile

![Web capture_18-12-2022_214744_icei-puc-minas-pmv-si github io](https://user-images.githubusercontent.com/43422620/208337920-75f21d02-20f1-4528-af51-6f1dfd7d2c66.jpeg)

<!--
![Exemplo de Wireframe](img/wireframe-example.png)

São protótipos usados em design de interface para sugerir a estrutura de um site web e seu relacionamentos entre suas páginas. Um wireframe web é uma ilustração semelhante do layout de elementos fundamentais na interface.
 
> **Links Úteis**:
> - [Protótipos vs Wireframes](https://www.nngroup.com/videos/prototypes-vs-wireframes-ux-projects/)
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [Axure](https://www.axure.com/edu) (Licença Educacional)
> - [InvisionApp](https://www.invisionapp.com/) (Licença Educacional)
-->
