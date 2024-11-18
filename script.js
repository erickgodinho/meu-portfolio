document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const menuLinks = document.querySelectorAll('.menu a');

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
      menuLinks.forEach((link) => link.classList.remove('active'));
      document
        .querySelector(`.menu a[href="#${section.id}"]`)
        .classList.add('active');
    }
  });
});

const menuLinks = document.querySelectorAll('.menu a');
const sections = document.querySelectorAll('main section');

menuLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Remove a classe 'active' de todas as seções
    sections.forEach(section => section.classList.remove('active', 'hidden'));

    // Adiciona 'active' apenas na seção correspondente
    const targetId = link.getAttribute('href').replace('#', '');
    const targetSection = document.getElementById(targetId);
    targetSection.classList.add('active');

    // Esconde as outras seções
    sections.forEach(section => {
      if (section.id !== targetId) {
        section.classList.add('hidden');
      }
    });
  });
});

// Scroll suave ao clicar no logo
document.querySelector('.home-link').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#hero').scrollIntoView({ behavior: 'smooth' });
});

// Gráfico de Pizza - Front-End
const canvas = document.getElementById('grafico-frontend');
if (canvas) {
  const ctx = canvas.getContext('2d');
  const data = {
    labels: ['HTML/CSS', 'React', 'JavaScript'],
    datasets: [{
      data: [40, 30, 30], // Percentuais de proficiência
      backgroundColor: ['#06d6a0', '#118ab2', '#ffd166'], // Cores do gráfico
      hoverOffset: 4
    }]
  };

  new Chart(ctx, {
    type: 'pie',
    data: data,
    options: {
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: '#fff'
          }
        }
      }
    }
  });
}
