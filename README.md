## PetsLovers - T4 Como rodar o projeto
> ⚠️ **Atenção sobre a versão do Node.js:**  
> O projeto foi testado com **Node 22.x no Windows**, mas **recomendamos usar exatamente a versão 16.x no Ubuntu/Linux** para evitar erros de compatibilidade.

> OBS: Se não funcionar, tente a versão 18.x. E, caso ainda não funcione, apague o package-lock.json, a pasta node_modules e rode npm install novamente.

---

Para garantir o ambiente correto, use o nvm (Node Version Manager):

**Como usar o nvm para trocar a versão do Node:**

**Instalar o nvm (se ainda não tiver):**
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
```


Depois, feche e abra o terminal ou rode:

```bash
source ~/.bashrc
```

2. **Verificar se o nvm está instalado:**

```bash
nvm --version
```

3. **Instalar a versão desejada do Node (exemplo: 16):**

```bash
nvm install 16
```

4. **Usar a versão instalada:**

```bash
nvm use 16
```

5. **Definir a versão padrão para novos terminais:**

```bash
nvm alias default 16
```

6. **Verificar a versão ativa do Node:**

```bash
node -v
```


Verifique se o Java está instalado

Verifique se a versão do Java é compatível caso haja algum erro


Este projeto tem um sistema simples de cadastro, listagem, atualizacao e remoção de clientes, integrado com front-end e back-end.

## Como executar o back-end

1. Acesse a pasta `executavel` do projeto.
2. Execute o comando abaixo no terminal:

```
java -jar pl.jar
```

## Como executar o front-end

1. Acesse a pasta `front` do projeto:

```
cd front
```

2. Instale as dependências:

```
npm install
```

3. Inicie o front-end:

```
npm start
```

