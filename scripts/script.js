document.addEventListener('DOMContentLoaded', function() {
    const listaConvidados = document.getElementById('lista-convidados');
    const confirmacoes = document.getElementById('Presenças confirmadas');
  
    // Função para atualizar o contador de confirmações
    function atualizarContador() {
      let count = 0;
      const checkboxes = listaConvidados.querySelectorAll('input[type="checkbox"]:checked');
      
      checkboxes.forEach(checkbox => {
        if (!checkbox.classList.contains('check-box-no')) {
          count++;
        }
      });
  
      confirmacoes.textContent = `Presenças confirmadas: ${count}`;
    }
  
    listaConvidados.addEventListener('change', atualizarContador);
    atualizarContador();
  });