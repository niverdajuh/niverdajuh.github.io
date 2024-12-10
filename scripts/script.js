document.addEventListener('DOMContentLoaded', function() {
    const listaConvidados = document.getElementById('lista-convidados');
    const confirmacoes = document.getElementById('Presenças confirmadas');
  
    // Função para atualizar o contador de confirmações
    function atualizarContador() {
      let count = 0;
      const checkboxes = listaConvidados.querySelectorAll('input[type="checkbox"]:checked');
      count = checkboxes.length;
      confirmacoes.textContent = `Presenças confirmadas: ${count}`;
    }
  
    // Adiciona o event listener para atualizar o contador ao mudar o estado dos checkboxes
    listaConvidados.addEventListener('change', atualizarContador);
  
    // Chama a função para atualizar o contador ao carregar a página
    atualizarContador(); 
});