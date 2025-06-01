// Countdown Timer
document.addEventListener('DOMContentLoaded', function() {
    // Set the launch date - 30 days from now
   const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 12);
    
    // Update countdown every second
    const countdown = setInterval(function() {
        const now = new Date().getTime();
        const distance = launchDate - now;
        
        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result
        document.getElementById('days').innerHTML = days < 10 ? '0' + days : days;
        document.getElementById('hours').innerHTML = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').innerHTML = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;
        
        // If the countdown is finished
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('days').innerHTML = '00';
            document.getElementById('hours').innerHTML = '00';
            document.getElementById('minutes').innerHTML = '00';
            document.getElementById('seconds').innerHTML = '00';
        }
    }, 1000);
    
    // Handle subscription form
    const subscribeForm = document.getElementById('subscribe-form');
    const successMessage = document.getElementById('success-message');
    
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the data to a server
        // For demo purposes, we'll just show the success message
        const email = this.querySelector('input[type="email"]').value;
        
        // Simple validation
        if (email && email.includes('@')) {
            // Show success message
            successMessage.classList.remove('hidden');
            
            // Reset form
            this.reset();
            
            // Hide success message after 5 seconds
            setTimeout(function() {
                successMessage.classList.add('hidden');
            }, 5000);
        }
    });
    
    // Initialize particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 6,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true
    });
    
    // Create English version
    createEnglishVersion();
});

// Function to create English version of the page
function createEnglishVersion() {
    // Create English HTML file content
    const englishHTML = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Waseet - Coming Soon</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <div class="content">
            <div class="logo">
                <img src="logo.png" alt="Waseet" id="logo">
            </div>
            <h1>Waseet Website Coming Soon</h1>
            <h2>We are developing an integrated platform for domestic worker services</h2>
            <div class="countdown">
                <div class="countdown-item">
                    <span id="days">00</span>
                    <span class="label">Days</span>
                </div>
                <div class="countdown-item">
                    <span id="hours">00</span>
                    <span class="label">Hours</span>
                </div>
                <div class="countdown-item">
                    <span id="minutes">00</span>
                    <span class="label">Minutes</span>
                </div>
                <div class="countdown-item">
                    <span id="seconds">00</span>
                    <span class="label">Seconds</span>
                </div>
            </div>
            <div class="features">
                <div class="feature">
                    <i class="fas fa-users"></i>
                    <h3>Trusted Workers</h3>
                    <p>We provide highly experienced and efficient domestic workers</p>
                </div>
                <div class="feature">
                    <i class="fas fa-shield-alt"></i>
                    <h3>Quality Guarantee</h3>
                    <p>We guarantee the best services with the highest quality standards</p>
                </div>
                <div class="feature">
                    <i class="fas fa-headset"></i>
                    <h3>Continuous Support</h3>
                    <p>A complete support team to help you around the clock</p>
                </div>
            </div>
            <div class="newsletter">
                <h3>Subscribe to be notified when the site launches</h3>
                <form id="subscribe-form">
                    <input type="email" placeholder="Email Address" required>
                    <button type="submit">Subscribe</button>
                </form>
                <div id="success-message" class="hidden">Successfully subscribed! We'll notify you when the site launches.</div>
            </div>
            <div class="social-media">
                <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-whatsapp"></i></a>
            </div>
            <div class="language-switch">
                <a href="index.html" class="lang-btn">العربية</a>
            </div>
        </div>
    </div>
    <div class="particles-container" id="particles-js"></div>
    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script src="script.js"></script>
</body>
</html>`;

    // Create the English HTML file
    const englishFile = new Blob([englishHTML], {type: 'text/html'});
    
    // In a real environment, you would save this file to the server
    // For this demo, we'll just log that it's ready
    console.log('English version created and ready to be saved as index-en.html');
}
