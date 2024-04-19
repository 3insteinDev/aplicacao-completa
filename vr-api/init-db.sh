#!/bin/bash

# Verificar se o banco de dados já existe
if psql -h localhost -U postgres -lqt | cut -d \| -f 1 | grep -qw vr-projeto; then
  echo "O banco de dados vr-projeto já existe."
else
  # Criar o banco de dados
  psql -h localhost -U postgres -c "CREATE DATABASE vr-projeto;"
  echo "Banco de dados vr-projeto criado com sucesso."
fi