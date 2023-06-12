//Задание №1

const poll = document.querySelector('.poll');
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

const apiURL = 'https://students.netoservices.ru/nestjs-backend/poll';

const showMessage = () => {
    alert(`Спасибо, ваш голос засчитан!`);
}

const createAnswerButton = (answer, index) => {
    const buttonHTML = `
        <button class="poll__answer" name="answer" value="${answer}">
            ${answer}
        </button>
    `;

    const buttonElement = new DOMParser().parseFromString(buttonHTML, 'text/html').body.firstChild;
    buttonElement.addEventListener('click', showMessage);
    buttonElement.addEventListener('click', () => sendQuery(index));

    pollAnswers.prepend(buttonElement);
};

const sendQuery = async(indexAnswer) => {
    const answer = { vote: poll.id, answer: String(indexAnswer) };

    const response = await fetch(apiURL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answer)
    });

    const result = await response.json();
    showResult(result.stat);
}

const showResult = (data) => {
    pollAnswers.innerHTML = '';
    const sum = data.reduce((accumulator, currentValue) => accumulator + currentValue.votes, 0);

    data.forEach(stat => {
        const valueAnswers = document.createElement('div');
        valueAnswers.className = 'value__answers';
        valueAnswers.innerHTML = `${stat.answer}: <span class="procent__answers">${(stat.votes * 100 / sum).toFixed(2)} %</span>`;
        pollAnswers.append(valueAnswers);
    });
}

 const fetchSurvey = async() => {
    const response = await fetch(apiURL);
    const { id, data } = await response.json();
    poll.id = id;
    pollTitle.textContent = data.title;
    data.answers.forEach(createAnswerButton);
}

fetchSurvey();