const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (form && formMessage) {
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        formMessage.textContent = 'Sending...';
        formMessage.classList.remove('text-green-400', 'text-red-400'); // Clear previous styles
        formMessage.classList.add('text-white');

        const formData = new FormData(form);
        const object = Object.fromEntries(formData.entries());
        const json = JSON.stringify(object);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            });

            const result = await response.json();

            if (result.success) {
                formMessage.textContent = 'Message sent successfully!';
                formMessage.classList.remove('text-white');
                formMessage.classList.add('text-green-400');
                form.reset();
            } else {
                console.error('Web3Forms Error:', result);
                formMessage.textContent = result.message || 'Failed to send message. Please try again.';
                formMessage.classList.remove('text-white');
                formMessage.classList.add('text-red-400');
            }
        } catch (error) {
            console.error('Submission Error:', error);
            formMessage.textContent = 'An error occurred. Please try again later.';
            formMessage.classList.remove('text-white');
            formMessage.classList.add('text-red-400');
        }
    });
}