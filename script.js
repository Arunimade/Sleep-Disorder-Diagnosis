let currentTab = 1;
showTab(currentTab);

function showTab(n) {
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab, index) => {
        tab.style.display = (index + 1 === n) ? 'block' : 'none';
    });

    // Manage navigation buttons
    if (n === 1) {
        document.querySelector('.back-btn').style.display = 'none';
    } else {
        document.querySelector('.back-btn').style.display = 'inline-block';
    }

    if (n === tabs.length) {
        document.querySelector('.next-btn').style.display = 'none';
        document.querySelector('.submit-btn').style.display = 'inline-block';
    } else {
        document.querySelector('.next-btn').style.display = 'inline-block';
        document.querySelector('.submit-btn').style.display = 'none';
    }
}

function nextTab(n) {
    if (n < 5) {
        showTab(n + 1);
    }
}

function prevTab(n) {
    if (n > 1) {
        showTab(n - 1);
    }
}

function submitForm() {
    const formElements = document.querySelectorAll('input[type="radio"]:checked, textarea');
    if (formElements.length < 50) {
        alert('Please complete all questions before submitting.');
        return;
    }

    generateReport();
}

function generateReport() {
    let result = document.getElementById('result');
    result.style.display = 'block';

    // Clear previous chart if it exists
    document.getElementById('chart-container').innerHTML = '';

    // Sample chart generation code (you can customize this)
    const ctx = document.createElement('canvas');
    document.getElementById('chart-container').appendChild(ctx);

    // Replace with actual diagnosis data based on the responses
    const diagnosisData = calculateDiagnosis();

    const data = {
        labels: ['Insomnia', 'Sleep Apnea', 'Narcolepsy', 'Restless Leg Syndrome'],
        datasets: [{
            label: 'Diagnosis Results',
            data: diagnosisData, // Actual diagnosis data
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
}

function calculateDiagnosis() {
    // Replace this with actual logic to analyze responses and return data
    // For demonstration, we'll return static values
    return [15, 25, 10, 50]; // Example data for diagnosis
}
