document.addEventListener('DOMContentLoaded', () => {
    // Typing effect for the H2
    const typingText = document.querySelector('.typing-text');
    if (window.innerWidth > 768) {
        const text = typingText.innerText;
        typingText.innerText = '';
        typingText.style.width = 'auto';
        typingText.style.animation = 'none';
        typingText.style.borderRight = '2px solid var(--secondary-neon)';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typingText.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50 + Math.random() * 50);
            }
        };
        setTimeout(typeWriter, 500);
    }
});
