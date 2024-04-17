# Use a imagem oficial do Node.js com o Angular CLI instalado
FROM node:latest AS build

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie os arquivos necessários para o diretório de trabalho
COPY . .

# Instale as dependências do projeto
RUN npm install

# Construa o projeto Angular
RUN npm run build

# Etapa de produção
FROM nginx:alpine

# Copie os arquivos de build da etapa anterior para o diretório de trabalho do servidor nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponha a porta onde o servidor Angular estará em execução
EXPOSE 80

# Inicie o servidor nginx
CMD ["nginx", "-g", "daemon off;"]
