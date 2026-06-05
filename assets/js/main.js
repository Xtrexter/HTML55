document.addEventListener('DOMContentLoaded', () => {
    
    // Mobil Menü Fonksiyonelliği
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Menü linklerine tıklandığında menüyü kapat
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // SSS (FAQ) Açılır-Kapanır Fonksiyonelliği
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Diğerlerini kapat
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Tıklananı aç/kapat
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Randevu Formu Gönderimi (Simülasyon)
    const contactForm = document.getElementById('appointment-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Randevu talebiniz başarıyla alındı! En kısa sürede size geri dönüş yapacağız.');
            contactForm.reset();
        });
    }

    // Header Kaydırma Efekti
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
        } else {
            header.style.padding = '15px 0';
            header.style.backgroundColor = 'var(--primary-color)';
        }
    });
});
