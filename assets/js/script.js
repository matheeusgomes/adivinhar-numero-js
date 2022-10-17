// Todas as variáveis declaradas aqui em cima - fora das funções - são consideradas GLOBAIS e funcionam dentro de qualquer outra função!
        let res = document.querySelector('section#result')
        let computador = 0
        let jogador = 0

        function sortear() {
            min = Math.ceil(0);
            max = Math.floor(100);
            computador = Math.floor(Math.random() * (max - min)) + min;
        }

        function jogar() {
            jogador = Number(window.prompt('Qual é o seu palpite?'))
            if (jogador < computador) {
                res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MAIOR</strong>!</p>`
            } else if (jogador > computador) {
                res.innerHTML += `<p>Você falou ${jogador}. Meu número é <strong>MENOR</strong>!</p>`
            } else if (jogador == computador) {
                res.innerHTML +=
                    `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${computador}!</p>`
                document.getElementById('botao').style.display = 'none';
                document.getElementById('recomecar').style.display = "inline-block"
            }
        }

        function recomecar(){
            document.location.reload(true);
        }
