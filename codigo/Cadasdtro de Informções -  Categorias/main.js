// declara um conjunto inicial de contatos
var db_categorias_inicial = {
  data: [
    {
      id: 1,
      nome: 'Alimentação',
      limite: '500.00'
    },

    {
      id: 2,
      nome: 'Contas',
      limite: '3000.00'
    },

    {
      id: 3,
      nome: 'Lazer',
      limite: '400.00'
    }
  ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_categoria'))
if (!db) {
  db = db_categorias_inicial
}

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
  $('#msg').html('<div class="alert alert-warning">' + msg + '</div>')
}

function insertCategoria(categoria) {
  // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
  let novoId = 1
  if (db.data.length != 0) novoId = db.data[db.data.length - 1].id + 1
  let novaCategoria = {
    id: novoId,
    nome: categoria.nome,
    limite: categoria.limite
  }

  // Insere o novo objeto no array
  db.data.push(novaCategoria)
  displayMessage('Categoria inserida com sucesso')

  // Atualiza os dados no Local Storage
  localStorage.setItem('db_categoria', JSON.stringify(db))
}

function updateCategoria(id, categoria) {
  // Localiza o indice do objeto a ser alterado no array a partir do seu ID
  let index = db.data.map(obj => obj.id).indexOf(id)

  // Altera os dados do objeto no array
  ;(db.data[index].nome = categoria.nome),
    (db.data[index].limite = categoria.limite)

  displayMessage('Categoria alterada com sucesso')

  // Atualiza os dados no Local Storage
  localStorage.setItem('db_categoria', JSON.stringify(db))
}

function deleteCategorias(id) {
  // Filtra o array removendo o elemento com o id passado
  db.data = db.data.filter(function (element) {
    return element.id != id
  })

  displayMessage('Categoria removida com sucesso')

  // Atualiza os dados no Local Storage
  localStorage.setItem('db_categoria', JSON.stringify(db))
}
