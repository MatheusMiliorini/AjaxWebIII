<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
    <link rel="stylesheet" href="css/estilo.css">
    <title>Exemplo jQuery</title>
</head>
<body>
    <input type="button" value="Buscar" id="buscar">
    <div id="resultado"></div>

    <label for="nome">Nome:</label>
    <input type="text" id="nome" placeholder="Nome aqui">
    <input type="button" value="Gravar" id="gravar">

    <br>

    <label for="campo-deletar">Deletar: </label>
    <input type="text" id="campo-deletar" placeholder="deletar">
    <input type="button" value="Deletar" id="btn-deletar">

    <br>

    <label for="campo-alterar">Novo Nome: </label>
    <input type="text" id="campo-alterar" placeholder="Novo Nome">
    <input type="button" value="Alterar" id="btn-alterar">
</body>
</html>