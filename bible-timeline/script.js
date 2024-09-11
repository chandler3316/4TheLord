document.addEventListener("DOMContentLoaded", () => {
    const events = document.querySelectorAll('.timeline-event');

    events.forEach(event => {
        event.addEventListener('click', () => {
            const description = event.querySelector('.event-description');
            description.classList.toggle('hidden');
            
            // Toggle the image visibility as well
            const image = event.querySelector('img');
            image.classList.toggle('hidden');
        });
    });
});
