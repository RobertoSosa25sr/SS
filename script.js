document.getElementById('start-quiz').addEventListener('click', function () {
    const name = prompt('Ingresa tu nombre para el certificado:');
    if (name) {
        document.getElementById('info-section').classList.add('hidden'); // Ocultar la sección de información
        document.getElementById('start-quiz').classList.add('hidden');  // Ocultar el botón de iniciar evaluación
        document.getElementById('quiz-section').classList.remove('hidden'); // Mostrar la evaluación
    }
});

document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const correctAnswers = ['q1=correcto', 'q2=correcto', 'q3=correcto'];
    const formData = new FormData(this);
    let score = 0;

    for (const [key, value] of formData.entries()) {
        if (correctAnswers.includes(`${key}=${value}`)) {
            score++;
        }
    }

    const resultText = document.getElementById('result-text');
    document.getElementById('quiz-section').classList.add('hidden'); // Ocultar la evaluación
    document.getElementById('result-section').classList.remove('hidden'); // Mostrar resultados

    if (score / correctAnswers.length >= 0.8) {
        resultText.textContent = `¡Felicidades! Obtuviste ${score * 100 / correctAnswers.length}%. Tu certificado será emitido.`;
    } else {
        resultText.textContent = `Tu calificación es ${score * 100 / correctAnswers.length}%. Necesitas al menos 80% para obtener el certificado.`;
    }
});
