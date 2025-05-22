function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });
    
    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'flex';
    selectedSection.classList.add('active');
    
    // Update active nav link
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        const onclickAttr = link.getAttribute('onclick');
        if (onclickAttr && onclickAttr.includes(sectionId)) {
            link.classList.add('active');
        }
    });
}

// Initialize the page by showing only the intro section
document.addEventListener('DOMContentLoaded', function() {
    showSection('intro');

    // Add click event listeners to nav links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            showSection(sectionId);
        });
    });

    // Back to top button functionality
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    // Show button when user scrolls down 20px from the top
    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    // Scroll to top when button is clicked
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Etiology factor handling
    const biologicalFactor = document.getElementById('biologicalFactor');
    const geneticFactor = document.getElementById('geneticFactor');
    const psychologicalFactor = document.getElementById('psychologicalFactor');
    const environmentalFactor = document.getElementById('environmentalFactor');
    const etiologyInfoDiv = document.getElementById('etiologyInfo');

    const etiologyText = {
        biological: `<strong>🧬 Genetics and Biology:</strong>
                    <li>Schizophrenia runs in families, suggesting strong genetic influence.</li>
                    <li>Identical twins have a 40–50% concordance rate vs ~1% general population risk.</li>
                    <li>No single gene causes schizophrenia; rather, hundreds of genes contribute small risks.</li>
                    <li>These genes are often involved in brain development and neurotransmitter function.</li>
                    <li>Estimated heritability is high (~80%), meaning most risk is genetic, though not deterministic.</li></ul>`,
        genetic: `<strong>🧠 Genetics and Biology:</strong> 
                 <li>Linked to neurotransmitter imbalances — especially dopamine (the "dopamine hypothesis").</li>
                 <li>Glutamate is also implicated in more recent research.</li>
                 <li>Brain imaging shows subtle structural differences in some patients (e.g., enlarged ventricles, reduced hippocampal and frontal lobe volume).</li>
                 <li>Cognitive issues (e.g., attention, memory problems) often appear in childhood, suggesting a neurodevelopmental origin.</li></ul>`,
        environmental:  `<strong>🌍 Environmental Factors</strong><ul>
                   <li>Prenatal infections or malnutrition can slightly increase risk.</li>
                   <li>Birth complications and early brain injury are possible contributors.</li>
                   <li>Urban upbringing is associated with ~2× increased risk (potentially due to stress, infection exposure, pollution, isolation).</li>
                   <li>Migration, especially under conditions of discrimination or social defeat, elevates risk.</li>
                   <li>Heavy adolescent cannabis use is strongly linked to increased risk, particularly in vulnerable individuals.</li>
                   <li>Other substances like amphetamines and hallucinogens may trigger psychosis.</li>
                   <li>Advanced paternal age (>45) is associated with higher risk, likely due to genetic mutations.</li></ul>`,
        psychological: `<strong>🧠 Psychological and Social Factors</strong><ul>
                    <li>While schizophrenia is fundamentally a brain-based disorder, psychological and social factors influence its course.</li>
                    <li>High levels of chronic stress and high-conflict family environments ("high expressed emotion") can increase relapse likelihood.</li>
                    <li>These don't cause schizophrenia but can exacerbate symptoms.</li>
                    <li>Supportive psychosocial environments can help protect against symptom worsening or relapse.</li></ul>`
    };

    if (biologicalFactor) {
        biologicalFactor.addEventListener('click', function() {
            etiologyInfoDiv.innerHTML = etiologyText.biological;
        });
    }

    if (geneticFactor) {
        geneticFactor.addEventListener('click', function() {
            etiologyInfoDiv.innerHTML = etiologyText.genetic;
        });
    }

    if (psychologicalFactor) {
        psychologicalFactor.addEventListener('click', function() {
            etiologyInfoDiv.innerHTML = etiologyText.psychological;
        });
    }

    if (environmentalFactor) {
        environmentalFactor.addEventListener('click', function() {
            etiologyInfoDiv.innerHTML = etiologyText.environmental;
        });
    }

    // Card navigation with dots
    initializeCardNavigation();
});

function toggleTab(tabId) {
    const tabContent = document.getElementById(tabId);
    if (tabContent) {
        tabContent.classList.toggle('open');
    }
}

function toggleSubTab(subTabId) {
    const subTabContent = document.getElementById(subTabId);
    if (subTabContent) {
        subTabContent.classList.toggle('open');
    }
}

// Get the button
let backToTopBtn = document.getElementById("backToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');

let startX = null;
let scrollLeft = null;

cardContainer.addEventListener('mousedown', (e) => {
    startX = e.pageX - cardContainer.offsetLeft;
    scrollLeft = cardContainer.scrollLeft;
    cardContainer.style.cursor = 'grabbing';
});

cardContainer.addEventListener('mouseup', () => {
    cardContainer.style.cursor = 'grab';
});

cardContainer.addEventListener('mouseleave', () => {
    cardContainer.style.cursor = 'grab';
});

cardContainer.addEventListener('mousemove', (e) => {
    if (!startX) return;
    const x = e.pageX - cardContainer.offsetLeft;
    const walk = (x - startX) * 1; // Adjust scroll speed
    cardContainer.scrollLeft = scrollLeft - walk;
});

cardContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - cardContainer.offsetLeft;
    scrollLeft = cardContainer.scrollLeft;
});

cardContainer.addEventListener('touchend', () => {
    startX = null;
    cardContainer.style.cursor = 'grab';
});

cardContainer.addEventListener('touchmove', (e) => {
    if (!startX) return;
    const x = e.touches[0].pageX - cardContainer.offsetLeft;
    const walk = (x - startX) * 1;
    cardContainer.scrollLeft = scrollLeft - walk;
});

// Card navigation with dots
function initializeCardNavigation() {
    const cards = document.querySelectorAll('.card');
    const cardContainer = document.querySelector('.card-container');
    
    // Create dots container if it doesn't exist
    if (!document.querySelector('.card-dots')) {
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'card-dots';
        cardContainer.appendChild(dotsContainer);
        
        // Create dots
        cards.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = 'dot' + (index === 0 ? ' active' : '');
            dot.addEventListener('click', () => showCard(index));
            dotsContainer.appendChild(dot);
        });
    }
    
    // Show first card by default
    showCard(0);
}

function showCard(index) {
    const cards = document.querySelectorAll('.card');
    const dots = document.querySelectorAll('.dot');
    
    // Hide all cards and remove active class from dots
    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Show selected card and activate corresponding dot
    cards[index].classList.add('active');
    dots[index].classList.add('active');
}

// Image Modal Functions
function openModal(img) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none";
}

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const medicationCards = document.querySelectorAll('.medication-card');

    medicationCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('expanded');
        });
    });
});