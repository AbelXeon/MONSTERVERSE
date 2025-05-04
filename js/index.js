// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const dropdown = document.querySelector('.dropdown');
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Toggle dropdown on mobile
    if (window.innerWidth <= 768) {
        dropbtn.addEventListener('click', function(e) {
            e.preventDefault();
            dropdownContent.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
                
                // Only remove dropdown active if not part of dropdown
                if (!this.closest('.dropdown-content')) {
                    dropdownContent.classList.remove('active');
                }
            }
        });
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // Reset mobile menu states when resizing to desktop
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            dropdownContent.classList.remove('active');
        }
    });
});





document.addEventListener('DOMContentLoaded', function() {
    // Create popup container
    const popupContainer = document.createElement('div');
    popupContainer.className = 'monarch-popup-container';
    document.body.appendChild(popupContainer);

    // Enhanced Dossier Card Functionality
    const dossierToggles = document.querySelectorAll('.dossier-toggle');
    
    dossierToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const card = this.closest('.dossier-card');
            const cardImage = card.querySelector('.dossier-image img').src;
            const name = card.querySelector('h4').textContent;
            const status = card.querySelector('.status-badge').textContent;

            // Close any open popups first
            document.querySelectorAll('.monarch-popup').forEach(popup => {
                popup.remove();
            });

            // Create popup
            const popup = document.createElement('div');
            popup.className = 'monarch-popup';
            
            // Create popup content based on team member
            let popupContent = '';
            let additionalImages = '';
            
            if (name.includes('CONRAD')) {
                additionalImages = `
                    <div class="popup-images">
                        <img src="img/expedition/conrad-profile1.jpg" alt="Conrad in field">
                        <img src="img/expedition/conrad-profile2.jpg" alt="Conrad with Iwi">
                    </div>
                `;
                popupContent = `
                    <div class="popup-header">
                        <img src="${cardImage}" alt="${name}" class="popup-main-image">
                        <div class="popup-title">
                            <h3>${name}</h3>
                            <div class="status-badge ${status === 'SURVIVED' ? 'alive' : 'deceased'}">${status}</div>
                        </div>
                    </div>
                    <div class="popup-body">
                        <p><strong>Full Name:</strong> James Conrad</p>
                        <p><strong>Service Number:</strong> SAS-7319-UK</p>
                        <p><strong>Background:</strong> Former British SAS captain with extensive jungle survival experience.</p>
                        <p><strong>Post-Mission:</strong> Retained as Monarch field consultant.</p>
                        ${additionalImages}
                    </div>
                `;
            } else if (name.includes('WEAVER')) {
                additionalImages = `
                    <div class="popup-images">
                        <img src="img/expedition/weaver-profile1.jpg" alt="Weaver documenting">
                        <img src="img/expedition/weaver-profile2.jpg" alt="Weaver with Iwi">
                    </div>
                `;
                popupContent = `
                    <div class="popup-header">
                        <img src="${cardImage}" alt="${name}" class="popup-main-image">
                        <div class="popup-title">
                            <h3>${name}</h3>
                            <div class="status-badge ${status === 'SURVIVED' ? 'alive' : 'deceased'}">${status}</div>
                        </div>
                    </div>
                    <div class="popup-body">
                        <p><strong>Full Name:</strong> Mason Weaver</p>
                        <p><strong>Press ID:</strong> TIME-1973-441</p>
                        <p><strong>Status:</strong> ${status}</p>
                        <p><strong>Background:</strong> Award-winning photojournalist specializing in conflict zones. Embedded with expedition under Monarch media partnership.</p>
                        <p><strong>Post-Mission:</strong> Photographs classified. Signed non-disclosure agreement. Currently working under Monarch supervision.</p>
                        ${additionalImages}
                    </div>
                `;
            } else if (name.includes('PACKARD')) {
                additionalImages = `
                    <div class="popup-images">
                        <img src="img/expedition/packard-profile1.jpg" alt="Packard commanding">
                    </div>
                `;
                popupContent = `
                    <div class="popup-header">
                        <img src="${cardImage}" alt="${name}" class="popup-main-image">
                        <div class="popup-title">
                            <h3>${name}</h3>
                            <div class="status-badge ${status === 'SURVIVED' ? 'alive' : 'deceased'}">${status}</div>
                        </div>
                    </div>
                    <div class="popup-body">
                        <p><strong>Full Name:</strong> Preston Packard</p>
                        <p><strong>Service Number:</strong> USA-1945-7731</p>
                        <p><strong>Status:</strong> ${status}</p>
                        <p><strong>Background:</strong> Decorated Vietnam veteran. Commanded helicopter squadron providing expedition security.</p>
                        <p><strong>Casualty Report:</strong> Killed during unauthorized engagement with Alpha Titan. Body not recovered.</p>
                        ${additionalImages}
                    </div>
                `;
            } else if (name.includes('RANDA')) {
                additionalImages = `
                    <div class="popup-images">
                        <img src="img/expedition/randa-profile1.jpg" alt="Randa researching">
                    </div>
                `;
                popupContent = `
                    <div class="popup-header">
                        <img src="${cardImage}" alt="${name}" class="popup-main-image">
                        <div class="popup-title">
                            <h3>${name}</h3>
                            <div class="status-badge ${status === 'SURVIVED' ? 'alive' : 'deceased'}">${status}</div>
                        </div>
                    </div>
                    <div class="popup-body">
                        <p><strong>Full Name:</strong> William Randa</p>
                        <p><strong>Monarch ID:</strong> M-1951-662</p>
                        <p><strong>Status:</strong> ${status}</p>
                        <p><strong>Background:</strong> Senior Monarch researcher. Primary architect of Skull Island expedition.</p>
                        <p><strong>Casualty Report:</strong> Killed during initial survey by unidentified subterranean predator. Last words recorded: "This is exactly what I was looking for."</p>
                        ${additionalImages}
                    </div>
                `;
            } else if (name.includes('MARLOW')) {
                additionalImages = `
                    <div class="popup-images">
                        <img src="img/expedition/marlow-profile1.jpg" alt="Marlow with Iwi">
                        <img src="img/expedition/marlow-profile2.jpg" alt="Marlow returning">
                    </div>
                `;
                popupContent = `
                    <div class="popup-header">
                        <img src="${cardImage}" alt="${name}" class="popup-main-image">
                        <div class="popup-title">
                            <h3>${name}</h3>
                            <div class="status-badge ${status === 'SURVIVED' ? 'alive' : 'deceased'}">${status}</div>
                        </div>
                    </div>
                    <div class="popup-body">
                        <p><strong>Full Name:</strong> Hank Marlow</p>
                        <p><strong>Service Number:</strong> USN-1944-1192</p>
                        <p><strong>Status:</strong> ${status}</p>
                        <p><strong>Background:</strong> WWII Navy pilot shot down over South Pacific in 1944. Survived 28 years on Skull Island with Iwi tribe.</p>
                        <p><strong>Post-Mission:</strong> Granted full pension and Monarch consultant position. Provides invaluable insight into Iwi culture and Titan behavior.</p>
                        ${additionalImages}
                    </div>
                `;
            }

            popup.innerHTML = `
                <div class="popup-content">
                    <button class="popup-close">&times;</button>
                    ${popupContent}
                </div>
                <div class="popup-overlay"></div>
            `;

            popupContainer.appendChild(popup);
            
            // Add animation class
            setTimeout(() => {
                popup.classList.add('active');
            }, 10);

            // Close button
            popup.querySelector('.popup-close').addEventListener('click', function() {
                popup.classList.remove('active');
                setTimeout(() => {
                    popup.remove();
                }, 500);
            });
        });
    });

    // Close popup when clicking outside
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('popup-overlay')) {
            document.querySelectorAll('.monarch-popup').forEach(popup => {
                popup.classList.remove('active');
                setTimeout(() => {
                    popup.remove();
                }, 500);
            });
        }
    });

    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-slide-up, .animate-fade');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementPosition < windowHeight - 100) {
                element.style.animationPlayState = 'running';
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
});










