// Simple Course Management System
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initializeApp();
});

function initializeApp() {
    // Add simple hover effects and basic functionality
    addHoverEffects();
    
    // Add keyboard navigation
    addKeyboardNavigation();
    
    // Initialize mobile schedule
    initializeMobileSchedule();
    
    console.log('✅ سیستم مدیریت دروس با موفقیت بارگذاری شد');
}

function addHoverEffects() {
    const cards = document.querySelectorAll('.course-card, .stat-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

function addKeyboardNavigation() {
    const cards = document.querySelectorAll('.course-card');
    let currentIndex = 0;
    
    // Make cards focusable
    cards.forEach((card, index) => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-label', `درس ${index + 1}`);
    });
    
    // Add keyboard event listener
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            currentIndex = (currentIndex + 1) % cards.length;
            cards[currentIndex].focus();
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            cards[currentIndex].focus();
        }
    });
}

function initializeMobileSchedule() {
    // Simple mobile optimization - just ensure proper scrolling
    const scheduleContainer = document.querySelector('.schedule-container');
    if (scheduleContainer) {
        scheduleContainer.style.overflowX = 'auto';
        scheduleContainer.style.webkitOverflowScrolling = 'touch';
    }
}

function showNotification(message, type = 'info') {   const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#333'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        font-family: 'Vazirmatn', 'Vazir', sans-serif;
        direction: rtl;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Course data for reference
const courseData = {
    totalUnits: 23,
    totalCourses: 8,
    courses: [
        {
            title: 'مهندسی نرم‌افزار ۲',
            code: '۲۰۴۱۱۲۲',
            units: 3,
            group: 442,
            schedule: 'سه‌شنبه: ۱۶:۰۰-۱۸:۰۰، چهارشنبه: ۱۶:۰۰-۱۸:۰۰',
            classroom: '۲۰۵',
            instructor: 'دکتر احمدی',
            status: 'تایید شده'
        },
        {
            title: 'طراحی الگوریتم‌ها',
            code: '۱۱۳۲۱',
            units: 3,
            group: 1,
            schedule: 'شنبه: ۱۶:۰۰-۱۷:۳۰، چهارشنبه: ۱۱:۰۰-۱۳:۰۰',
            classroom: '۳۰۲',
            instructor: 'دکتر رضایی',
            status: 'تایید شده'
        },
        {
            title: 'آزمایشگاه سیستم‌های عامل',
            code: '۱۱۳۲۸',
            units: 1,
            group: 1,
            schedule: 'یکشنبه: ۱۳:۰۰-۱۴:۰۰',
            classroom: 'آزمایشگاه ۱',
            instructor: 'مهندس کریمی',
            status: 'تایید شده'
        },
        {
            title: 'بازیابی اطلاعات',
            code: '۱۱۲۱۰۸',
            units: 3,
            group: 1,
            schedule: 'یکشنبه: ۱۴:۰۰-۱۶:۰۰، سه‌شنبه: ۱۴:۰۰-۱۶:۰۰',
            classroom: '۲۰۳',
            instructor: 'دکتر محمدی',
            status: 'تایید شده'
        },
        {
            title: 'مبانی رایانش ابری',
            code: '۱۱۳۶۸',
            units: 3,
            group: 1,
            schedule: 'یکشنبه: ۱۶:۰۰-۱۸:۰۰، سه‌شنبه: ۱۶:۰۰-۱۸:۰۰',
            classroom: '۱۰۴',
            instructor: 'دکتر حسینی',
            status: 'تایید شده'
        },
        {
            title: 'اندیشه اسلامی ۲',
            code: '۴۴۰۲',
            units: 2,
            group: 2,
            schedule: 'دوشنبه: ۸:۰۰-۹:۳۰',
            classroom: '۱۰۶',
            instructor: 'دکتر نوری',
            status: 'تایید شده'
        },
        {
            title: 'دانش خانواده',
            code: '۴۴۱۳',
            units: 2,
            group: 3,
            schedule: 'سه‌شنبه: ۹:۳۰-۱۱:۰۰',
            classroom: '۱۰۷',
            instructor: 'دکتر زارعی',
            status: 'تایید شده'
        },
        {
            title: 'مهندسی نرم‌افزار ۱',
            code: '۱۱۶۱',
            units: 3,
            group: 1,
            schedule: 'شنبه: ۹:۳۰-۱۱:۰۰، چهارشنبه: ۹:۳۰-۱۱:۰۰',
            classroom: '۲۰۱',
            instructor: 'دکتر علوی',
            status: 'تایید شده'
        }
    ]
};

// Welcome message removed for better user experience
