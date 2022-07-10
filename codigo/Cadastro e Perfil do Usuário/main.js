// declara um conjunto inicial de contatos
var db_contatos_inicial = {
  data: [
    {
      id: 1,
      nome: 'Marecelo Costa',
      telefone: '(31) 9 8932-3984',
      cpf: '983.429.433-83',
      email: 'marceloc@maio.biz'
    },

    {
      id: 2,
      nome: 'Julia Muniz Ribeiro',
      telefone: '(11) 9 8574-4231',
      cpf: '563.234.345-23',
      email: 'juliamuniz@maio.biz'
    },

    {
      id: 3,
      nome: 'Caio de Assis',
      telefone: '(31) 9 9548-9232',
      cpf: '864.465.764-75',
      email: 'Sincere@april.biz'
    },

    {
      id: 4,
      nome: 'Letícia Menzes',
      telefone: '(21) 9 4280-4392',
      cpf: '589-649.602-54',
      email: 'letmenezes@maio.biz'
    }
  ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'))
if (!db) {
  db = db_contatos_inicial
}

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
  $('#msg').html('<div class="alert alert-warning">' + msg + '</div>')
}

function insertContato(contato) {
  // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
  let novoId = 1
  if (db.data.length != 0) novoId = db.data[db.data.length - 1].id + 1
  let novoContato = {
    id: novoId,
    nome: contato.nome,
    telefone: contato.telefone,
    cpf: contato.cpf,
    email: contato.email
  }

  // Insere o novo objeto no array
  db.data.push(novoContato)
  displayMessage('Contato inserido com sucesso')

  // Atualiza os dados no Local Storage
  localStorage.setItem('db_contato', JSON.stringify(db))
}

function updateContato(id, contato) {
  // Localiza o indice do objeto a ser alterado no array a partir do seu ID
  let index = db.data.map(obj => obj.id).indexOf(id)

  // Altera os dados do objeto no array
  ;(db.data[index].nome = contato.nome),
    (db.data[index].telefone = contato.telefone),
    (db.data[index].cpf = contato.cpf),
    (db.data[index].email = contato.email)


  displayMessage('Contato alterado com sucesso')

  // Atualiza os dados no Local Storage
  localStorage.setItem('db_contato', JSON.stringify(db))
}

function deleteContato(id) {
  // Filtra o array removendo o elemento com o id passado
  db.data = db.data.filter(function (element) {
    return element.id != id
  })

  displayMessage('Contato removido com sucesso')

  // Atualiza os dados no Local Storage
  localStorage.setItem('db_contato', JSON.stringify(db))
}
