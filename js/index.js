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
    // Dossier card toggle functionality
    const dossierToggles = document.querySelectorAll('.dossier-toggle');
    
    dossierToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const card = this.closest('.dossier-card');
            const fullProfile = card.querySelector('.full-profile');
            
            if (fullProfile) {
                // Toggle existing full profile
                fullProfile.classList.toggle('active');
                this.textContent = fullProfile.classList.contains('active') ? 
                    'HIDE FULL PROFILE' : 'VIEW FULL PROFILE';
            } else {
                // Create and insert full profile (simulated)
                const fullProfile = document.createElement('div');
                fullProfile.className = 'full-profile active';
                
                // Get basic info
                const name = card.querySelector('h4').textContent;
                const status = card.querySelector('.status-badge').textContent;
                
                // Create profile content based on team member
                let profileContent = '';
                
                if (name.includes('CONRAD')) {
                    profileContent = `
                        <div class="profile-content">
                            <p><strong>Full Name:</strong> James Conrad</p>
                            <p><strong>Service Number:</strong> SAS-7319-UK</p>
                            <p><strong>Status:</strong> ${status}</p>
                            <p><strong>Background:</strong> Former British SAS captain with extensive jungle survival experience. Recruited by Monarch for terrain navigation expertise.</p>
                            <p><strong>Post-Mission:</strong> Retained as Monarch field consultant. Security clearance upgraded to Level 4.</p>
                        </div>
                    `;
                } else if (name.includes('WEAVER')) {
                    profileContent = `
                        <div class="profile-content">
                            <p><strong>Full Name:</strong> Mason Weaver</p>
                            <p><strong>Press ID:</strong> TIME-1973-441</p>
                            <p><strong>Status:</strong> ${status}</p>
                            <p><strong>Background:</strong> Award-winning photojournalist specializing in conflict zones. Embedded with expedition under Monarch media partnership.</p>
                            <p><strong>Post-Mission:</strong> Photographs classified. Signed non-disclosure agreement. Currently working under Monarch supervision.</p>
                        </div>
                    `;
                } else if (name.includes('PACKARD')) {
                    profileContent = `
                        <div class="profile-content">
                            <p><strong>Full Name:</strong> Preston Packard</p>
                            <p><strong>Service Number:</strong> USA-1945-7731</p>
                            <p><strong>Status:</strong> ${status}</p>
                            <p><strong>Background:</strong> Decorated Vietnam veteran. Commanded helicopter squadron providing expedition security.</p>
                            <p><strong>Casualty Report:</strong> Killed during unauthorized engagement with Alpha Titan. Body not recovered.</p>
                        </div>
                    `;
                } else if (name.includes('RANDA')) {
                    profileContent = `
                        <div class="profile-content">
                            <p><strong>Full Name:</strong> William Randa</p>
                            <p><strong>Monarch ID:</strong> M-1951-662</p>
                            <p><strong>Status:</strong> ${status}</p>
                            <p><strong>Background:</strong> Senior Monarch researcher. Primary architect of Skull Island expedition.</p>
                            <p><strong>Casualty Report:</strong> Killed during initial survey by unidentified subterranean predator. Last words recorded: "This is exactly what I was looking for."</p>
                        </div>
                    `;
                } else if (name.includes('MARLOW')) {
                    profileContent = `
                        <div class="profile-content">
                            <p><strong>Full Name:</strong> Hank Marlow</p>
                            <p><strong>Service Number:</strong> USN-1944-1192</p>
                            <p><strong>Status:</strong> ${status}</p>
                            <p><strong>Background:</strong> WWII Navy pilot shot down over South Pacific in 1944. Survived 28 years on Skull Island with Iwi tribe.</p>
                            <p><strong>Post-Mission:</strong> Granted full pension and Monarch consultant position. Provides invaluable insight into Iwi culture and Titan behavior.</p>
                        </div>
                    `;
                }
                
                fullProfile.innerHTML = profileContent;
                card.appendChild(fullProfile);
                this.textContent = 'HIDE FULL PROFILE';
            }
        });
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
    animateOnScroll(); // Run once on load
});


