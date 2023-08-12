const road1Button = document.getElementById('road1');
const road2Button = document.getElementById('road2');
const road3Button = document.getElementById('road3');

const handleRoadChoice = (choice) => {
  if (choice === 'road1') {
    alert("Alice chose Road 1. She encountered the Cheshire Cat!");
  } else if (choice === 'road2') {
    alert("Alice chose Road 2. She found herself at the Mad Hatter's Tea Party!");
  } else if (choice === 'road3') {
    alert("Alice chose Road 3. She stumbled upon the Queen of Hearts' croquet ground!");
  } else {
    alert("Invalid choice. Please select a valid road.");
  }
};

road1Button.addEventListener('click', () => {
  handleRoadChoice('road1');
});

road2Button.addEventListener('click', () => {
  handleRoadChoice('road2');
});

road3Button.addEventListener('click', () => {
  handleRoadChoice('road3');
});

