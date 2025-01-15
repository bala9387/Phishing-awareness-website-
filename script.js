let score = 0;
let totalQuestions = 10; // Update this if the number of questions changes
let answeredQuestions = 0;

function checkAnswer(action, button) {
    const result = document.getElementById("quiz-result");

    // Reset button colors
    const buttons = button.parentElement.querySelectorAll("button");
    buttons.forEach(btn => {
        btn.classList.remove("correct", "incorrect");
    });

    // Check if the question has already been answered
    if (!button.parentElement.getAttribute("data-answered")) {
        answeredQuestions++;
        button.parentElement.setAttribute("data-answered", "true");

        // Handle answer feedback
        let correct = false;
        switch (action) {
            case 'ignore':
            case 'report':
            case 'verify':
            case 'leave':
            case 'verifyIt':
            case 'askFriend':
            case 'callBank':
            case 'ignorePopup':
            case 'investigateJob':
            case 'ignoreFriendRequest':
                correct = true;
                break;
            default:
                correct = false;
        }

        if (correct) {
            score++;
            button.classList.add("correct");
        } else {
            button.classList.add("incorrect");
        }

        // Show immediate feedback
        result.textContent = correct ? "Correct!" : "Incorrect!";
        result.style.color = correct ? "green" : "red";

        // Check if all questions have been answered
        if (answeredQuestions === totalQuestions) {
            showFinalScore();
        }
    }
}

function showFinalScore() {
    const result = document.getElementById("quiz-result");
    result.innerHTML = `🎉 Quiz complete! You scored <span id="score">${score}</span> out of ${totalQuestions}.`;
    result.style.color = "black";
    
    // Add a class for the score to animate
    result.classList.add("animated-score");

    // Add a little delay for the score animation
    setTimeout(() => {
        const scoreElement = document.getElementById("score");
        scoreElement.classList.add("highlight-score");
    }, 500);
}

