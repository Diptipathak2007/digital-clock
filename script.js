
function updateClock() {
    const now = new Date();

    // Get time components
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Determine AM/PM
    const period = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12

    // Add leading zeros
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');

    // Update time display with blinking colons
    const timeString = `${formattedHours}<span class="colon">:</span>${formattedMinutes}<span class="colon">:</span>${formattedSeconds}`;
    document.getElementById('timeDisplay').innerHTML = timeString;

    // Update date display
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    const dateString = now.toLocaleDateString('en-US', options);
    document.getElementById('dateDisplay').textContent = dateString;

    // Update period indicator with subtle color change
    const periodElement = document.getElementById('periodIndicator');
    periodElement.textContent = period;

    // Add subtle color variation based on time of day
    if (period === 'AM') {
        periodElement.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
    } else {
        periodElement.style.background = 'linear-gradient(45deg, #f093fb, #f5576c)';
    }
}

// Initialize clock immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);

// Add a subtle welcome animation
window.addEventListener('load', function () {
    const container = document.querySelector('.clock-container');
    container.style.transform = 'scale(0.95)';
    setTimeout(() => {
        container.style.transition = 'transform 0.3s ease';
        container.style.transform = 'scale(1)';
    }, 100);
});

// Add some interactive feedback
document.querySelector('.clock-container').addEventListener('mouseenter', function () {
    this.style.transform = 'scale(1.02)';
    this.style.transition = 'transform 0.3s ease';
});

document.querySelector('.clock-container').addEventListener('mouseleave', function () {
    this.style.transform = 'scale(1)';
});
