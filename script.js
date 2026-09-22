// Актуальный год в подвале
document.getElementById('year').textContent = new Date().getFullYear();

// Обработка формы (заглушка — для реальной отправки подключите Formspree/Getform)
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const data = Object.fromEntries(new FormData(form));
    console.log('Заявка:', data);
    alert(`Спасибо, ${data.name}! Мы свяжемся с вами в течение рабочего дня.`);
    form.reset();
    return false;
}

// Плавное появление блоков при скролле
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.12 });

document.querySelectorAll('.feature, .service-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

const style = document.createElement('style');
style.textContent = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);
