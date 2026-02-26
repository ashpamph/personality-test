document.addEventListener("DOMContentLoaded", () => {
    const calculateBtn = document.getElementById("calculate_btn");
    const resetBtn = document.getElementById("reset_btn");

    calculateBtn.addEventListener("click", () => {
        const q1 = document.querySelector('input[name="q1"]:checked');
        const q2 = document.querySelector('input[name="q2"]:checked');
        const q3 = document.querySelector('input[name="q3"]:checked');

        if (!q1 || !q2 || !q3) {
            alert("Please answer all questions before calculating.");
            return;
        }

        const total =
            parseInt(q1.value.replace("plus", "").replace("minus", "-")) +
            parseInt(q2.value.replace("plus", "").replace("minus", "-")) +
            parseInt(q3.value.replace("plus", "").replace("minus", "-"));

        let personality = "";
        if (total <= -3) {
            personality = "Introvert";
        } else if (total >= 3) {
            personality = "Extrovert";
        } else {
            personality = "Ambivert";
        };

        document.getElementById("total_result").textContent =
            "You are an: " + personality;

        document.getElementById("rating_badge").textContent =
            `Scoring: ${total}`;

        const list = document.getElementById("results_list");
        list.innerHTML = `
            <li>Your score indicates you are a <strong>${personality}</strong>.</li>
            <li>
                <i>According to Wikipedia...</i><br>
                Introversion & extroversion define where you gain energy:
                introverts recharge alone, while extroverts recharge socially. An ambivert is someone who is neither extroverted nor introverted.
            </li>
        `;
    });

    resetBtn.addEventListener("click", () => {
        document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
        document.getElementById("total_result").textContent = "You are: __";
        document.getElementById("rating_badge").textContent = "Scoring: __";
        document.getElementById("results_list").innerHTML = "";
    });
});
