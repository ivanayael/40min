function decirHora() {
    const ahora = new Date();
  
    // Obtener la hora en formato legible
    const hora = ahora.toLocaleTimeString('es-AR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  
    // Crear el mensaje que será anunciado
    const mensaje = `La hora actual es ${hora}`;
  
    // Usar la API de síntesis de voz
    const utterance = new SpeechSynthesisUtterance(mensaje);
    utterance.lang = 'es-ES'; // Idioma español
    speechSynthesis.speak(utterance);
  
    // Mostrar la hora en la página
    const reloj = document.getElementById('clock');
    reloj.textContent = hora;
  }
  
  // Llamar la función inmediatamente y cada 40 minutos (40 * 60 * 1000 ms)
  decirHora();
  setInterval(decirHora, 40 * 60 * 1000);
  