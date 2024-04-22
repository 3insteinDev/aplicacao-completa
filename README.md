

# _aplication-vr_
### Inserindo aplicação completa Backend, Frontend e Postgres


### clonar o projeto
#### dentro da pasta vr-aplicacao/vr-api
	- instalar pacotes e dependencias descritas no package.json
		- comando=> npm install
	- criar imagem do postegres conforme o docker-compose.yml
		-comando=> docker-compose up
	- criar um arquivo .env
		- inserir o mesmo string connection que esta no .env.example
	- iniciar api
		- comando=> npm run start:dev
		- A Aplicação ficara disponivel na rota http://localhost:8080
		- E dicponibilizando o Swagger na porta http://localhost:8080/api

		![swagger](./vr-front/src/assets/swagger.png)


#### dentro da pasta vr-aplicacao/vr-front
	instalar pacotes e dependencias descritas no package.json
		comando=> npm install
	iniciar front
		comando=> npm run start
		A aplicação ficara disponivel na rota http://localhost:4200

			![tela-cadastro-loja](./vr-front//src//assets/form-loja.png)
			![tela-cadastro-produto](./vr-front//src//assets/form-produto.png)


#### Após o banco ser instanciado e gerado no docker,
	- acessar o Adminer na rota http://localhost:8085
		- realizar o login através das informações:
			Sistema: PostgreSQL
			Servidor: database
			Usuário: postgres
			Senha: postgres
			Banco de Dados: vr-projeto

			![Adminer-login](./vr-front/src/assets/adminer-login.png)
			![Adminer-banco de dados](./vr-front/src/assets/adminer-banco.png)



