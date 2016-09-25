function onVoiceClick() {
  var textElement = document.getElementById("voiceText");

  if (responsiveVoice.isPlaying()) {
      responsiveVoice.cancel()
      return;
  }

  var text = textElement.innerHTML;
  var lang = textElement.dataset.lang;
  if(lang == 'no') {
      responsiveVoice.speak(text, 'Norwegian Male');
  }
  if(lang == 'en') {
      responsiveVoice.speak(text, 'UK English Female');
  }
  if(lang == 'de') {
      responsiveVoice.speak(text, 'Deutsch Female');
  }
  if(lang == 'pl') {
      responsiveVoice.speak(text, 'Polish Female');
  }
}
