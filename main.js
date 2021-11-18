const speakersInfo = [
  {
    speakerImage: { link: './Asset/speaker/speaker-1.png', alt: 'speaker-1' },
    name: 'Tiffany Haddish',
    position: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, nobis omnis quae laborum atque assumenda laboriosam quaerat ea?',
  },
  {
    speakerImage: { link: './Asset/speaker/speaker-2.png', alt: 'speaker-2' },
    name: 'Ali Morshedlou',
    position: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, nobis omnis quae laborum atque assumenda laboriosam quaerat ea?',
  },
  {
    speakerImage: { link: './Asset/speaker/speaker-3.png', alt: 'speaker-3' },
    name: 'Haben Girmay',
    position: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, nobis omnis quae laborum atque assumenda laboriosam quaerat ea?',
  },
  {
    speakerImage: { link: './Asset/speaker/speaker-4.png', alt: 'speaker-4' },
    name: 'Abraham Song',
    position: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, nobis omnis quae laborum atque assumenda laboriosam quaerat ea?',
  },
  {
    speakerImage: { link: './Asset/speaker/speaker-5.png', alt: 'speaker-5' },
    name: 'Fabio Lucas',
    position: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, nobis omnis quae laborum atque assumenda laboriosam quaerat ea?',
  },
  {
    speakerImage: { link: './Asset/speaker/speaker-6.png', alt: 'speaker-6' },
    name: 'Chimamanda Ngozi',
    position: 'Lorem, ipsum dolor sit amet consectetur adipisicing.',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, nobis omnis quae laborum atque assumenda laboriosam quaerat ea?',
  },
];

const speakerArr = [];
const speakers = document.querySelector('.speakers');

const featuredSpeaker = document.createElement('div');
featuredSpeaker.classList.add('featured-speaker');
speakers.appendChild(featuredSpeaker);

const headerFeatured = document.createElement('h2');
headerFeatured.innerText = 'Featured Speakers';
featuredSpeaker.appendChild(headerFeatured);

const speakerContainer = document.createElement('div');
speakerContainer.classList.add('speaker-container');
featuredSpeaker.appendChild(speakerContainer);

speakersInfo.forEach((speaker) => {
  const eventSpeaker = document.createElement('div');
  eventSpeaker.classList.add('speaker');
  speakerContainer.appendChild(eventSpeaker);

  const speakerImg = document.createElement('img');
  speakerImg.setAttribute('src', speaker.speakerImage.link);
  speakerImg.setAttribute('alt', speaker.speakerImage.alt);
  eventSpeaker.appendChild(speakerImg);

  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content-div');
  eventSpeaker.appendChild(contentDiv);

  const headingContentDiv = document.createElement('h4');
  headingContentDiv.innerText = speaker.name;
  contentDiv.appendChild(headingContentDiv);

  const speakerPosition = document.createElement('p');
  speakerPosition.classList.add('speaker-position');
  speakerPosition.innerText = speaker.position;
  contentDiv.appendChild(speakerPosition);

  const speakerDescription = document.createElement('p');
  speakerDescription.classList.add('speaker-description');
  speakerDescription.innerText = speaker.description;
  contentDiv.appendChild(speakerDescription);

  speakerArr.push(eventSpeaker);
});

const button = document.createElement('button');
button.classList.add('btn', 'btn-more');
button.innerText = 'More';
speakerContainer.appendChild(button);

const downArrow = document.createElement('i');
downArrow.classList.add('fas', 'fa-chevron-down');
button.appendChild(downArrow);

speakerArr.forEach((item, i) => item.classList.add(`speaker-${i + 1}`));

// speakers section functionality for button more
const speakerFour = document.querySelector('.speaker-4');
const speakerFive = document.querySelector('.speaker-5');
const speakerSix = document.querySelector('.speaker-6');
const buttonSpeaker = document.querySelector('.btn');

function openSpeakers() {
  speakerFour.style.display = 'flex';
  speakerFive.style.display = 'flex';
  speakerSix.style.display = 'flex';
}

buttonSpeaker.addEventListener('click', openSpeakers);
