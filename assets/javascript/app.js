const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileLinks = document.getElementById('mobile-links');

const preventDefaultHandler = (e) => {
  e.preventDefault();
};

function openMenuHandler() {
  mobileMenu.classList.replace('d-none', 'd-flex');
  document.body.classList.add('stop-scrolling');
  document.body.addEventListener('touchmove', preventDefaultHandler);
}

function closeMenuHanlder() {
  mobileMenu.classList.replace('d-flex', 'd-none');
  document.body.classList.remove('stop-scrolling');
  document.body.removeEventListener('touchmove', preventDefaultHandler);
}

menuBtn.addEventListener('click', openMenuHandler);
closeMenuBtn.addEventListener('click', closeMenuHanlder);
mobileLinks.addEventListener('click', closeMenuHanlder);

const speakersArray = [
  {
    id: 0,
    name: 'Yochai Benkler',
    title:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description:
      'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    imageUrl: 'assets/images/speaker_01.png',
    alt: 'speaker_01',
  },
  {
    id: 1,
    name: 'Yochai Benkler',
    title:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description:
      'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    imageUrl: 'assets/images/speaker_01.png',
    alt: 'speaker_01',
  },
  {
    id: 2,
    name: 'Yochai Benkler',
    title:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description:
      'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    imageUrl: 'assets/images/speaker_01.png',
    alt: 'speaker_01',
  },
  {
    id: 3,
    name: 'Yochai Benkler',
    title:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description:
      'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    imageUrl: 'assets/images/speaker_01.png',
    alt: 'speaker_01',
  },
  {
    id: 4,
    name: 'Yochai Benkler',
    title:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description:
      'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    imageUrl: 'assets/images/speaker_01.png',
    alt: 'speaker_01',
  },
  {
    id: 5,
    name: 'Yochai Benkler',
    title:
      'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description:
      'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
    imageUrl: 'assets/images/speaker_01.png',
    alt: 'speaker_01',
  },
];

const speakersLoadHandler = () => {
  const speakers = document.getElementById('speakers-ul');
  speakersArray.forEach((speaker) => {
    const speakerCard = document.createElement('li');
    speakerCard.classList.add('speaker-card');
    if (speaker.id > 1) {
      speakerCard.classList.add('desktop-only');
    }
    speakerCard.innerHTML = `
      <img src=${speaker.imageUrl} alt="${speaker.alt}" />
      <div class="speaker">
        <h3 class="speaker-name">${speaker.name}</h3>
        <p class="speaker-title">
          ${speaker.title}
        </p>
        <div class="speaker-bar"></div>
        <p class="speaker-description">
          ${speaker.description}
        </p>
      </div>
    `;
    speakers.appendChild(speakerCard);
  });
};

window.onload = () => {
  speakersLoadHandler();
};
