function isValid(letter) {
  if (/\([a-záéíóúñ]+ |\( *\)/.test(letter)) return false;
  return true;
}
