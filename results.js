function displayResults() {
    const resultsContainer = document.getElementById("resultsContainer");
    const results = JSON.parse(localStorage.getItem('quizResults'));

    results.forEach((result, index) => {
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result");

        const questionTitle = document.createElement("h3");
        questionTitle.textContent = `${index + 1}. ${result.question}`;
        resultDiv.appendChild(questionTitle);

        result.options.forEach((option, optionIndex) => {
            const label = document.createElement("p");
            label.textContent = `${String.fromCharCode(97 + optionIndex)}. ${option}`;

            if (result.selectedAnswer === String.fromCharCode(97 + optionIndex)) {
                label.style.fontWeight = 'bold';
                label.style.color = result.isCorrect ? 'green' : 'red';
            }

            if (String.fromCharCode(97 + optionIndex) === result.correctAnswer) {
                label.style.textDecoration = 'underline';
            }

            resultDiv.appendChild(label);
        });

        if (!result.selectedAnswer) {
            const missedAnswer = document.createElement("p");
            missedAnswer.textContent = `You didn't answer this question. The correct answer is underlined.`;
            missedAnswer.style.color = 'orange';
            resultDiv.appendChild(missedAnswer);
        }

        resultsContainer.appendChild(resultDiv);
    });
}

window.onload = displayResults;
