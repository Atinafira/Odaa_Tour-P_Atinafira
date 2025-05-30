function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}
document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq-item h3');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const parent = question.parentElement;
            parent.classList.toggle('active');
            const answer = parent.querySelector('.faq-answer');
            
            if (parent.classList.contains('active')) {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });
});


