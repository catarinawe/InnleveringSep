function onVoiceClick() {
  var textElement = document.getElementById("voiceText");
  if(textElement.className.indexOf('reading') > -1) {
    responsiveVoice.cancel();
    textElement.className = textElement.className.replace("reading", '')
    return;
  } else {
    textElement.className += 'reading';
  }

  var text = textElement.innerHTML;
  var lang = textElement.dataset.lang;
  if(lang == 'no') {
      responsiveVoice.speak(text, 'Norwegian Male');
  }
  if(lang == 'en') {
      responsiveVoice.speak(text, 'UK English Female');
  }
  if(lang == 'ge') {
      responsiveVoice.speak(text, 'Deutsch Female');
  }
  if(lang == 'pl') {
      responsiveVoice.speak(text, 'Polish Female');
  }
}
