function showSection(id) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
      section.style.display = 'none';
      section.classList.remove('active');
    });
    
    // Show the selected section
    const selectedSection = document.getElementById(id);
    selectedSection.style.display = 'flex';
    selectedSection.classList.add('active');
  }
  
  // Initialize the page by showing only the intro section
  document.addEventListener('DOMContentLoaded', function() {
    showSection('intro');

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