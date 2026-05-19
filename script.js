document.addEventListener('DOMContentLoaded', () => {
    // Prevent Firefox native drag/drop overlay from getting stuck
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        window.addEventListener(eventName, (e) => {
            e.preventDefault();
            e.stopPropagation();
        });
    });

    // Randomize the CRT flicker slightly to make it feel more organic
    const crtOverlay = document.createElement('style');
    document.head.appendChild(crtOverlay);
    
    setInterval(() => {
        const randomFlicker = Math.random() * 0.05 + 0.01;
        crtOverlay.innerHTML = `
            body::after {
                opacity: ${randomFlicker};
            }
        `;
        
        setTimeout(() => {
            crtOverlay.innerHTML = `
                body::after {
                    opacity: 0;
                }
            `;
        }, 50 + Math.random() * 100);
    }, 2000 + Math.random() * 3000);

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
