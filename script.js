let userName = "Andrew";
userName
  ? console.log(`Hey there, ${userName}. Hang in there...`)
  : console.log(`Hey there, bud. Hang in there...`);

const quote1 =
  "Now that I’m undergoing the ordeal of exams myself, I sympathize with others in the same position. Anyone aspiring to a position in society must go through a time of great difficulties and exertion, success can depend on little things.";

const quote2 =
  "I also believe that it may happen that one succeeds, and one mustn’t begin by despairing; even if one loess here and there, and even if one sometimes feels a sort of decline, the point is nevertheless to revive and have courage, even though things don’t turn out as one first thought.";

const quote3 =
  "What am I in the eyes of most people? A nonentity or an oddity or a disagreeable person - someone who has and will have no position in society, in short a little lower than the lowest. Very well - assuming that everything is indeed like that, then through my work I’d like to show what there is in the heart of such an oddity, such a nobody.";
const quote4 =
  "Two things that remain eternally true and complement each other, in my view are: don’t snuff out your inspiration and power of imagination, don’t become a slave to the model: and the other, take a model and study it, for otherwise your inspiration won’t take on material form.";
const quote5 =
  "In life and in painting, too. I can easily do without the dear Lord, but I can’t, suffering as I do, do without something greater than myself, which is my life, the power to create.";
const quote6 =
  "A great fire burns within me, but no one stops to warm themselves at it, and passers-by only see a wisp of smoke.";
const quote7 =
  "If I am worth anything later, I am worth something now. For wheat is wheat, even if people think it is a grass in the beginning.";

let vanGoghWisdom = () => {
  let randomNumber = Math.floor(Math.random() * 7);
  if ((randomNumber = 0)) {
    console.log(`Vincent says: ${quote1}`);
  } else if ((randomNumber = 1)) {
    console.log(`Vincent says: ${quote2}`);
  } else if ((randomNumber = 2)) {
    console.log(`Vincent says: ${quote3}`);
  } else if ((randomNumber = 3)) {
    console.log(`Vincent says: ${quote4}`);
  } else if ((randomNumber = 4)) {
    console.log(`Vincent says: ${quote5}`);
  } else if ((randomNumber = 5)) {
    console.log(`Vincent says: ${quote6}`);
  } else {
    console.log(`Vincent says: ${quote7}`);
  }
};

vanGoghWisdom();
