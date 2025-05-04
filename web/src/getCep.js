const url = async(cep) => {
  cep = parseInt(cep);
  await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => {
    response.json()
      .then(data => showData(data))
  });
}
const showData = (result) => {

  let resultado = Array(result);

   return resultado
};


