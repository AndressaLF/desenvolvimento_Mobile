{
 "cells": [
  {
   "attachments": {},
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "# Overview"
   ]
  },
  {
   "attachments": {},
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "Caso você ainda não tenha o **Node.js**, o**Angular CLI** e o **Ionic** instalado no computador, siga os passos abaixo:\n",
    "\n",
    "- Instale o Node.js no seu computador\n",
    "\n",
    "Pode baixar o instalador a partir do site oficial: https://nodejs.org/en/\n",
    "\n",
    "- Instale o Angular CLI globalmente\n",
    "Abra um terminal ou prompt de comando e instale o Angular CLI globalmente, executando o seguinte comando:\n",
    "\n",
    "`npm install -g @angular/cli`\n",
    "\n",
    "- Instale o Ionic globalmente\n",
    "Abra um terminal ou prompt de comando e instale o Ionic, executando o seguinte comando:\n",
    "\n",
    "`npm install -g @ionic/cli`\n",
    "\n"
   ]
  },
  {
   "attachments": {},
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Criando seu projeto"
   ]
  },
  {
   "attachments": {},
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "- Crie a pasta do projeto e acesse: `mkdir meu-projeto && cd meu-projeto`\n",
    "\n",
    "- Para iniciar um novo projeto Ionic com o Angular:\n",
    "    - `ionic start meu-app blank --type=angular` (caso ele tenha apenas uma pagina)\n",
    "    - `ionic start meu-app tabs --type=angular` (caso queira 3 paginas)\n",
    "\n",
    "- Para rodar o aplicativo: `ionic serve`"
   ]
  },
  {
   "attachments": {},
   "cell_type": "markdown",
   "metadata": {},
   "source": [
    "## Editando o projeto clonado do GitGub\n",
    "\n",
    "Geralmente quando enviamos o projeto para o GitHub a pasta *Node Modules* não é incluida. \n",
    "\n",
    "Dessa maneira, caso você clone algum projeto execute o comando:\n",
    "`npm install`\n",
    "\n",
    "Isso irá instalar todas as dependências do projeto, incluindo as dependências listadas no arquivo package.json e suas respectivas dependências."
   ]
  }
 ],
 "metadata": {
  "kernelspec": {
   "display_name": "Python 3",
   "language": "python",
   "name": "python3"
  },
  "language_info": {
   "name": "python",
   "version": "3.9.6"
  },
  "orig_nbformat": 4,
  "vscode": {
   "interpreter": {
    "hash": "11938c6bc6919ae2720b4d5011047913343b08a43b18698fd82dedb0d4417594"
   }
  }
 },
 "nbformat": 4,
 "nbformat_minor": 2
}
