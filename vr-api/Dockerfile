# Use a imagem oficial do Node.js como base
FROM node:latest

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código fonte para o diretório de trabalho
COPY . .

# Exponha a porta 8080 que a aplicação irá usar
EXPOSE 8080

# Comando para iniciar a aplicação
# CMD [ "npm", "run", "start:prod" ]
# docker build -t vr-api .
# docker run -d --name vr_api -p 8080:8080 vr-api



# Comando para construir a aplicação e iniciar o container
CMD ["sh", "-c", "npm run build && npm run start:prod"]


