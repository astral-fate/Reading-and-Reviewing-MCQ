document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(tab).classList.add('active');

            if (tab === 'fill') {
                loadFillInTheBlankQuestions();
            } else if (tab === 'tf') {
                loadTrueFalseQuestions();
            } else if (tab === 'mc') {
                loadMultipleChoiceQuestions();
            }
        });
    });

    function loadFillInTheBlankQuestions() {
        const container = document.getElementById('fill-questions');
        container.innerHTML = '';

        fillInTheBlank.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';

            const questionText = document.createElement('p');
            questionText.textContent = q.question;
            questionDiv.appendChild(questionText);

            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'options';

            q.options.forEach(option => {
                const optionButton = document.createElement('button');
                optionButton.className = 'option-button';
                optionButton.textContent = option;
                optionButton.addEventListener('click', () => {
                    const selected = document.querySelector(`#fill-questions .question:nth-child(${index + 1}) .option-button.selected`);
                    if (selected) {
                        selected.classList.remove('selected');
                    }
                    optionButton.classList.add('selected');
                });
                optionsDiv.appendChild(optionButton);
            });

            questionDiv.appendChild(optionsDiv);

            const checkButton = document.createElement('button');
            checkButton.className = 'check-answer';
            checkButton.textContent = 'Check Answer';
            checkButton.addEventListener('click', () => {
                const selected = document.querySelector(`#fill-questions .question:nth-child(${index + 1}) .option-button.selected`);
                if (selected) {
                    const feedback = document.createElement('div');
                    feedback.className = 'feedback';
                    if (selected.textContent === q.answer) {
                        feedback.classList.add('correct');
                        feedback.textContent = 'Correct!';
                    } else {
                        feedback.classList.add('incorrect');
                        feedback.textContent = `Incorrect. Correct answer: ${q.answer}`;
                    }
                    questionDiv.appendChild(feedback);
                }
            });
            questionDiv.appendChild(checkButton);

            container.appendChild(questionDiv);
        });
    }

    function loadTrueFalseQuestions() {
        const container = document.getElementById('tf-questions');
        container.innerHTML = '';

        trueOrFalse.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';

            const questionText = document.createElement('p');
            questionText.textContent = q.question;
            questionDiv.appendChild(questionText);

            const trueButton = document.createElement('button');
            trueButton.className = 'option-button';
            trueButton.textContent = 'True';
            trueButton.addEventListener('click', () => {
                const selected = document.querySelector(`#tf-questions .question:nth-child(${index + 1}) .option-button.selected`);
                if (selected) {
                    selected.classList.remove('selected');
                }
                trueButton.classList.add('selected');
            });
            questionDiv.appendChild(trueButton);

            const falseButton = document.createElement('button');
            falseButton.className = 'option-button';
            falseButton.textContent = 'False';
            falseButton.addEventListener('click', () => {
                const selected = document.querySelector(`#tf-questions .question:nth-child(${index + 1}) .option-button.selected`);
                if (selected) {
                    selected.classList.remove('selected');
                }
                falseButton.classList.add('selected');
            });
            questionDiv.appendChild(falseButton);

            const checkButton = document.createElement('button');
            checkButton.className = 'check-answer';
            checkButton.textContent = 'Check Answer';
            checkButton.addEventListener('click', () => {
                const selected = document.querySelector(`#tf-questions .question:nth-child(${index + 1}) .option-button.selected`);
                if (selected) {
                    const feedback = document.createElement('div');
                    feedback.className = 'feedback';
                    if ((selected.textContent === 'True' && q.answer) || (selected.textContent === 'False' && !q.answer)) {
                        feedback.classList.add('correct');
                        feedback.textContent = 'Correct!';
                    } else {
                        feedback.classList.add('incorrect');
                        feedback.textContent = `Incorrect. Correct answer: ${q.answer ? 'True' : 'False'}`;
                    }
                    questionDiv.appendChild(feedback);
                }
            });
            questionDiv.appendChild(checkButton);

            container.appendChild(questionDiv);
        });
    }

    function loadMultipleChoiceQuestions() {
        const container = document.getElementById('mc-questions');
        container.innerHTML = '';

        multipleChoice.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';

            const questionText = document.createElement('p');
            questionText.textContent = q.question;
            questionDiv.appendChild(questionText);

            const optionsDiv = document.createElement('div');
            optionsDiv.className = 'options';

            q.options.forEach(option => {
                const optionButton = document.createElement('button');
                optionButton.className = 'option-button';
                optionButton.textContent = option;
                optionButton.addEventListener('click', () => {
                    const selected = document.querySelector(`#mc-questions .question:nth-child(${index + 1}) .option-button.selected`);
                    if (selected) {
                        selected.classList.remove('selected');
                    }
                    optionButton.classList.add('selected');
                });
                optionsDiv.appendChild(optionButton);
            });

            questionDiv.appendChild(optionsDiv);

            const checkButton = document.createElement('button');
            checkButton.className = 'check-answer';
            checkButton.textContent = 'Check Answer';
            checkButton.addEventListener('click', () => {
                const selected = document.querySelector(`#mc-questions .question:nth-child(${index + 1}) .option-button.selected`);
                if (selected) {
                    const feedback = document.createElement('div');
                    feedback.className = 'feedback';
                    if (selected.textContent === q.answer) {
                        feedback.classList.add('correct');
                        feedback.textContent = 'Correct!';
                    } else {
                        feedback.classList.add('incorrect');
                        feedback.textContent = `Incorrect. Correct answer: ${q.answer}`;
                    }
                    questionDiv.appendChild(feedback);
                }
            });
            questionDiv.appendChild(checkButton);

            container.appendChild(questionDiv);
        });
    }

    // Load the first tab by default
    loadFillInTheBlankQuestions();
});
