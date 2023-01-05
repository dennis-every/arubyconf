const speakersArray = [
  {
    id: 0,
    name: 'Yukihiro Matsumoto',
    title: 'Creator Ruby',
    description:
      'Yukihiro Matsumoto, also known as Matz, is a Japanese computer scientist and software programmer best known as the chief designer of the Ruby programming language',
    imageUrl: 'assets/images/speaker_01.jpeg',
    alt: 'speaker_01',
  },
  {
    id: 1,
    name: 'David Heinemeier Hansson',
    title: 'Creator Ruby on Rails',
    description:
      'David Heinemeier Hansson is a Danish programmer, and the creator of the popular Ruby on Rails web development framework ',
    imageUrl: 'assets/images/speaker_02.jpeg',
    alt: 'speaker_02',
  },
  {
    id: 2,
    name: 'Juan Días',
    title: 'Sr. Software Engineer',
    description:
      'Everyday carry shabby chic blog selfies meditation. Freegan four dollar toast cray church-key synth flexitarian.',
    imageUrl: 'assets/images/speaker_03.jpeg',
    alt: 'speaker_03',
  },
  {
    id: 3,
    name: 'Julio Leda',
    title: 'CTO',
    description:
      'Vibecession humblebrag lyft mukbang four loko mustache bicycle rights godard ugh health goth austin try-hard.',
    imageUrl: 'assets/images/speaker_04.jpeg',
    alt: 'speaker_04',
  },
  {
    id: 4,
    name: 'Ryan Merkley',
    title: 'Software Consultant',
    description:
      'Farm-to-table sus normcore single-origin coffee 3 wolf moon dreamcatcher jean shorts air plant occupy poutine.',
    imageUrl: 'assets/images/speaker_05.jpeg',
    alt: 'speaker_05',
  },
  {
    id: 5,
    name: 'Kilnam Chon',
    title: 'Data Engineer',
    description:
      "You probably haven't heard of them post-ironic poutine unicorn green juice bicycle rights man bun chartreuse.",
    imageUrl: 'assets/images/speaker_06.jpeg',
    alt: 'speaker_06',
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
