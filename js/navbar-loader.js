// Navbar Loader - Loads the navigation component into pages
function loadNavbar() {
    // Create the navbar HTML directly (since we can't fetch files from file:// protocol in development)
    const navbarHTML = `
        <!-- Navigation Component -->
        <nav class="navbar navbar-expand-lg">
            <div class="container">
                <a class="navbar-brand" href="index.html">
                    <img src="../images/cropped-cok-fonik-logo-4.gif" alt="Çokfonik Logo">
                </a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">ÇOKFONIK</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="koristlerimiz.html">KORİSTLERİMİZ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="sef-2.html">KORO ŞEFİ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="gecmis-etkinlikler.html">GEÇMİŞ ETKİNLİKLER</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="odullerimiz.html">ÖDÜLLERİMİZ</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="iletisim.html">İLETİŞİM</a>
                        </li>
                    </ul>
                    
                    <div class="navbar-social">
                        <a href="https://www.facebook.com/CokFonik/" class="navbar-social-link facebook" aria-label="Facebook" target="_blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.youtube.com/user/cokfonik" class="navbar-social-link youtube" aria-label="YouTube" target="_blank">
                            <i class="fab fa-youtube"></i>
                        </a>
                        <a href="https://www.instagram.com/cokfonik_koro/" class="navbar-social-link instagram" aria-label="Instagram" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                    
                    <button id="languageToggle" class="language-switch" onclick="toggleLanguage()" type="button">
                        <i class="fas fa-globe me-2"></i>EN
                    </button>
                </div>
            </div>
        </nav>
    `;

    // Insert navbar into the page
    const navbarContainer = document.getElementById('navbar-container');
    if (navbarContainer) {
        navbarContainer.innerHTML = navbarHTML;
        
        // Set active navigation link
        setActiveNavLink();
        
        // Initialize mobile navigation
        initMobileNavigation();
    }
}

// Set the active navigation link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Initialize mobile navigation functionality
function initMobileNavigation() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
    }
}

// Load navbar when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    loadNavbar();
});

// Export functions for manual use if needed
window.loadNavbar = loadNavbar;
window.setActiveNavLink = setActiveNavLink; 