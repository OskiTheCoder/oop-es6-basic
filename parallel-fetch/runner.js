const programmingSpan = document.querySelector('.joke--programming');
const punSpan = document.querySelector('.joke--pun');

const getJokes = async () => {
  try {
    const results = await Promise.all([
      fetch('https://v2.jokeapi.dev/joke/Programming'),
      fetch('https://v2.jokeapi.dev/joke/Pun'),
    ]);
    const responses = results.map((res) => res.json());
    const jokes = await Promise.all(responses);
    console.log(jokes);
    jokes.forEach((joke) => {
      const output =
        joke.type === 'single' ? joke.joke : `${joke.setup} ${joke.delivery}`;
      if (joke.category === 'Programming') {
        programmingSpan.textContent = output;
      } else {
        punSpan.textContent = output;
      }
    });
  } catch (err) {
    console.error(err);
  }
};

getJokes();
