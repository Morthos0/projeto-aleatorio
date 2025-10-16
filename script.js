function tocarSom(id) {
  const audios = document.querySelectorAll('audio');
  audios.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;
  });
  
  const audioSelecionado = document.getElementById(id);
  audioSelecionado.play();
}
