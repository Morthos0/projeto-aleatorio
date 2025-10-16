function tocar(id) {
  // Pega todos os elementos <audio>
  const audios = document.querySelectorAll('audio');

  // Pausa todos os áudios
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });

  // Toca o áudio selecionado
  const audioSelecionado = document.getElementById(id);
  if (audioSelecionado) {
    audioSelecionado.play();
  } else {
    console.error('Áudio não encontrado com o id:', id);
  }
}
