function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
    
    // Hide all sub-navigation
    const subNavs = document.querySelectorAll('.sub-nav');
    subNavs.forEach(subNav => {
        subNav.style.display = 'none';
    });
    
    // Show relevant sub-navigation if it exists
    const relevantSubNav = document.getElementById(sectionId + '-subnav');
    if (relevantSubNav) {
        relevantSubNav.style.display = 'flex';
    }
    
    // Update active link in main navigation
    const mainNavLinks = document.querySelectorAll('.main-nav a');
    mainNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick').includes(sectionId)) {
            link.classList.add('active');
        }
    });
    
    // Show main section content when showing the section
    const diagnosisMain = document.getElementById('diagnosis-main');
    const treatmentMain = document.getElementById('treatment-main');
    if (diagnosisMain) {
        diagnosisMain.style.display = 'block';
    }
    if (treatmentMain) {
        treatmentMain.style.display = 'block';
    }
    
    // Hide all subsections when showing the main section
    const subsections = document.querySelectorAll('.subsection');
    subsections.forEach(subsection => {
        subsection.style.display = 'none';
    });

    // If conclusion section is selected, show summary subsection by default
    if (sectionId === 'conclusion') {
        showSubsection('summary');
    }
    // If background section is selected, show history subsection by default
    else if (sectionId === 'background') {
        showSubsection('history');
    }
}

function showSubsection(subsectionId) {
    // Hide all subsections
    const subsections = document.querySelectorAll('.subsection');
    subsections.forEach(subsection => {
        subsection.style.display = 'none';
    });
    
    // Show the selected subsection
    const selectedSubsection = document.getElementById(subsectionId);
    if (selectedSubsection) {
        selectedSubsection.style.display = 'block';
    }
    
    // Hide main section content when showing subsections
    const diagnosisMain = document.getElementById('diagnosis-main');
    const treatmentMain = document.getElementById('treatment-main');
    if (diagnosisMain) {
        diagnosisMain.style.display = 'none';
    }
    if (treatmentMain) {
        treatmentMain.style.display = 'none';
    }
    
    // Update active link in sub-navigation
    const subNavLinks = document.querySelectorAll('.sub-nav a');
    subNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick').includes(subsectionId)) {
            link.classList.add('active');
        }
    });
}

// Initialize the page by showing only the intro section
document.addEventListener('DOMContentLoaded', function() {
    showSection('intro');

    // Initialize collapsible info-blocks (only for myth busters)
    document.querySelectorAll('.info-block').forEach(infoBlock => {
        // Check if this is a myth buster info-block
        if (infoBlock.querySelector('p')?.textContent.includes('Myth Busters')) {
            infoBlock.classList.add('myth-buster');
            
            // Create toggle button if it doesn't exist
            if (!infoBlock.querySelector('.info-toggle')) {
                const button = document.createElement('button');
                button.className = 'info-toggle';
                button.innerHTML = '💣 Myth Busters ▶';
                button.onclick = () => toggleInfoBlock(infoBlock);
                
                // Wrap content in a div
                const content = document.createElement('div');
                content.className = 'info-content';
                while (infoBlock.childNodes.length > 0) {
                    content.appendChild(infoBlock.childNodes[0]);
                }
                
                // Add button and content back to info-block
                infoBlock.appendChild(button);
                infoBlock.appendChild(content);
            }
        }
    });

    // Add click event listeners to main nav links
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            showSection(sectionId);
        });
    });

    // Add click event listeners to sub-nav links
    document.querySelectorAll('.sub-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const subsectionId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            showSubsection(subsectionId);
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
        biological: `<strong>🧠 Biology:</strong><ul>
                    <li>Brain chemistry imbalances, especially dopamine overactivity.</li>
                    <li>Implication of other neurotransmitters like glutamate.</li>
                    <li>Subtle differences in brain structure have been observed in some people with schizophrenia, suggesting a brain disorder component.</li></ul>`,
        genetic: `<strong>🧬 Genetics:</strong><ul> 
                    <li>Schizophrenia runs in families, indicating a strong genetic component.</li>
                    <li>High heritability (up to ~80%).</li>
                    <li>Hundreds of genes each contribute a small increase in risk.</li>
                    <li>These genes often affect brain development or neurotransmitter systems.</li>
                    <li>Older paternal age linked to higher risk (potential accumulation of genetic mutations).</li>
                    <li>Identical twin studies show a 50% chance of the other twin developing it if one does (even if raised separately), highlighting a genetic link.</li>
                    <li>Non-identical twins show a lower concordance rate (1 in 8), suggesting genes aren't the only factor.</li>
                    <li>General population risk is about 1 in 100, lower than for siblings of those with schizophrenia.</li>
                    <li>Genetics increases susceptibility but is not deterministic (e.g., 87% probability of not developing it even with one affected parent).</li></ul>`,
        environmental:  `<strong>🌍 Environmental Factors:</strong><ul>
                   <li>Prenatal infections or malnutrition can slightly increase risk.</li>
                   <li>Birth complications and early brain injury are possible contributors.</li>
                   <li>Urban upbringing is associated with ~2× increased risk (potentially due to stress, infection exposure, pollution, isolation).</li>
                   <li>Migration, especially under conditions of discrimination or social defeat, elevates risk.</li>
                   <li>Heavy adolescent cannabis use is strongly linked to increased risk, particularly in vulnerable individuals.</li>
                   <li>Other substances like amphetamines and hallucinogens may trigger psychosis.</li>
                   <li>Advanced paternal age (>45) is associated with higher risk, likely due to genetic mutations.</li></ul>`,
        psychological: `<strong>🧠 Psychological and Social Factors</strong><ul>
                    <li>High levels of chronic stress and high-conflict family environments ("high expressed emotion") can increase relapse likelihood.</li>
                    <li>Family environment with "high expressed emotion" (critical/hostile communication) linked to higher relapse rates.</li>
                    <li>Prolonged childhood trauma or abuse can elevate risk.</li>
                    <li>Social defeat/discrimination after migration can increase incidence.</li></ul>`,
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
    const button = tabContent.previousElementSibling;
    const isMythTab = button.closest('.myth-tabs') !== null;

    if (isMythTab) {
        // For myth tabs in conclusion section
        if (tabContent.style.display === 'block') {
            // Close the tab
            tabContent.style.display = 'none';
            // Remove strikethrough from the button text
            button.innerHTML = button.getAttribute('data-text');
            // Remove check mark from Truth
            const truthElement = tabContent.querySelector('p strong');
            if (truthElement && truthElement.textContent.includes('Truth:')) {
                truthElement.innerHTML = 'Truth:';
            }
        } else {
            // Open the tab
            tabContent.style.display = 'block';
            // Add strikethrough to the button text
            button.innerHTML = `<del>${button.getAttribute('data-text')}</del>`;
            // Add green check mark to the Truth text
            const truthElement = tabContent.querySelector('p strong');
            if (truthElement && truthElement.textContent === 'Truth:') {
                truthElement.innerHTML = '✅ Truth:';
            }
        }
    } else {
        // For symptom tabs - simple toggle without strikethrough
        if (tabContent.style.display === 'block') {
            tabContent.style.display = 'none';
            button.classList.remove('active');
        } else {
            tabContent.style.display = 'block';
            button.classList.add('active');
        }
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

function toggleMyth(number) {
    const mythTab = document.querySelector(`.myth-tab:nth-child(${number})`);
    const truthContent = mythTab.querySelector('.truth-content');
    const arrow = mythTab.querySelector('.arrow');
    const mythTitle = mythTab.querySelector('.myth-title');
    
    // Toggle current tab
    if (truthContent.style.display === 'block') {
        truthContent.style.display = 'none';
        arrow.textContent = '▼';
        mythTitle.style.textDecoration = 'none';
    } else {
        truthContent.style.display = 'block';
        arrow.textContent = '▲';
        mythTitle.style.textDecoration = 'line-through';
    }
}

// Quote box animation
function animateQuoteBox() {
    const quoteLines = document.querySelectorAll('.quote-line');
    let delay = 0;

    quoteLines.forEach((line, index) => {
        // First make the line visible
        setTimeout(() => {
            line.classList.add('visible');
            // Then start the typing animation
            line.style.width = '100%';
        }, delay);
        delay += 2000; // 2 seconds between each line
    });
}

// Initialize quote box animation when the closing section is shown
document.addEventListener('DOMContentLoaded', function() {
    const closingSection = document.getElementById('closing');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateQuoteBox();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 }); // Lower threshold to trigger earlier

    if (closingSection) {
        observer.observe(closingSection);
    }
});

function toggleInfoBlock(infoBlock) {
    const content = infoBlock.querySelector('.info-content');
    const button = infoBlock.querySelector('.info-toggle');
    
    if (content.style.display === 'block') {
        content.style.display = 'none';
        button.innerHTML = '💣 Myth Busters ▶';
    } else {
        content.style.display = 'block';
        button.innerHTML = '▼';
    }
}