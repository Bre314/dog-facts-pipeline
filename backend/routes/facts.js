const express = require("express");
const router = express.Router();

const dogFacts = [
  "Dogs have three eyelids- An upper lid, a lower lid, and a third lid called a nictitating membrane that helps keep the eye moist and protected.",
  "A dog’s sense of smell is 40 times better than a human’s – They have up to 300 million olfactory receptors in their noses, compared to about 5 million in humans.",
  "Dogs can hear 4 times better than humans – They can pick up high-pitched sounds between 47,000 to 65,000 Hz, compared to a human’s 20,000 Hz limit.",
  "The Labrador Retriever is the most popular dog breed in many countries, including the U.S., UK, and Canada.",
  "Dogs dream just like humans – If you’ve ever seen your pup twitching or making noises while sleeping, they’re probably dreaming.",
  "A Greyhound can beat a Cheetah in a long-distance race – While Cheetahs are faster in short bursts, Greyhounds excel in stamina.",
  "Dogs have a “sweet spot” – Most dogs love belly rubs in that one special spot that makes their leg kick!",
  "Puppies are born deaf and blind – Their eyes and ears open around 10–14 days after birth.",
  "Dalmatian puppies are born completely white – Their spots develop as they grow.",
  "Dogs' noses are wet for a reason – It helps them absorb scent chemicals more efficiently.",
  "Some dogs can learn over 1,000 words – Like Chaser, the Border Collie who learned the names of over 1,000 objects!",
  "Your dog really can smell your emotions – They can pick up on chemical changes in your sweat",
  "Dogs' whiskers help them see in the dark – They can sense tiny changes in airflow.",
  "Dogs have a dominant paw – Just like humans are right- or left-handed, dogs can be right- or left-pawed.",
  "The world's oldest dog lived to be 31 years old – A dog named Bobi from Portugal holds the record.",
  "Dogs can get jealous – Studies show they can feel envy when their humans show attention to other animals.",
  "Dogs’ noses are as unique as fingerprints – No two dog nose prints are the same.",
  "The Saluki is one of the world’s oldest dog breeds – Dating back to ancient Egypt.",
  "Dogs can sniff out diseases",
  "Yawning is contagious—even to dogs – If you yawn, your pup might yawn too due to empathy.",
  "The Norwegian Lundehund has six toes – It's specially adapted for climbing rocky cliffs.",
  "A Bloodhound’s scent trail is admissible in court – Their tracking ability is so reliable it can be used as legal evidence.",
  "Dogs understand human pointing – Even some chimps struggle with this gesture, but dogs get it!",
  "The average dog is as smart as a 2-year-old child – They can understand around 165 words and gestures.",
  "Dogs cool off through their paws and tongue – That's why panting is crucial in hot weather.",
  "Newfoundlands are excellent swimmers – They have webbed feet and were bred for water rescues.",
  "Chihuahuas have the biggest brains relative to their size – Small but super smart.",
  "Dogs have their own unique way of saying “hello” – Tail wags to the right mean they’re happy; to the left may mean nervousness.",
  "Dogs have about 1,700 taste buds—humans have around 9,000?",
  "Dogs curl up in a ball when sleeping to protect their organs—an instinct from the wild?",
  "Puppies lose their baby teeth just like humans",
  "Dogs often tilt their heads to better hear or see your facial expressions.",
  "Dogs have 13 blood types, while humans only have four?",
  "Dogs can smell individual ingredients in your dinner—even if you can’t",
  "Some dogs can learn over 1,000 words.",
  "Puppies sleep up to 20 hours a day while growing",
  "Dogs ear muscles are so specialized they can move each ear independently",
  "Dogs can actually fall in love—they release oxytocin, the love hormone, when around their favorite humans",
  "Larger dog breeds tend to have shorter lifespans than smaller breeds",
  "Dogs can see in shades of blue and yellow but not red or green",
  "Chow Chow and Shar Pei are ancient breeds known for their distinctive blue-black tongues",
  "Dogs can laugh—it’s a special exhale sound that they use during play",
  "Dogs are capable of emotional contagion—they mirror your moods and energy",
  "Dogs have built-in GPS—they can often find their way home from miles away",
];

router.get("/", (req, res) => {
  const fact = dogFacts[Math.floor(Math.random() * dogFacts.length)];
  res.json({ fact });
});

module.exports = router;
