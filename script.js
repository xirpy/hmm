const redesSelect = document.getElementById('redes');
const marcasSelect = document.getElementById('marcas');
const button = document.getElementById('redirecionar');

const marcasPorRede = {
    assai: ['sertanorte', 'aviario', 'vovo', 'prato', 'suinco', 'original', 'ipanema'],
    guanabara: ['sertanorte', 'brillex', 'suinco', 'original', 'aviario', 'sal', 'prato', 'nossagoma', 'alinutri', 'copra', 'yummy', 'cereser'],
    atacadao: ['capricche', 'original', 'atalat', 'ipanema', 'itaja', 'skafe', 'vilheto', 'gardingo', 'performance']
};

redesSelect.addEventListener('change', function() {
    const redeSelecionada = redesSelect.value;
    const marcas = marcasPorRede[redeSelecionada];

    marcasSelect.innerHTML = '';
    marcas.forEach(marca => {
        const option = document.createElement('option');
        option.value = marca;
        option.textContent = marca;
        marcasSelect.appendChild(option);
    });
    marcasSelect.disabled = false;
});

button.addEventListener('click', function() {
    const redeSelecionada = redesSelect.value;
    const marcaSelecionada = marcasSelect.value;
    if (redeSelecionada && marcaSelecionada) {
        window.location.href = `/${redeSelecionada}/${marcaSelecionada}`;
    }
});
