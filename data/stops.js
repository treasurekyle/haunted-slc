/**
 * STOP LIBRARY
 * ---------------------------------------------------------
 * This is the master list of every stop that has ever been (or could be)
 * part of the SLC Walking Ghost Tour. Each year's tour only uses a subset
 * of these — see data/current-tour.js for that.
 *
 * HOW TO ADD A NEW STOP:
 *   1. Add a new entry to the STOPS object below, using a short lowercase
 *      "slug" as the key (letters, numbers, hyphens only).
 *   2. Fill in title, neighborhood, blurb, and image.
 *   3. Drop a photo into images/stops/ named to match the "image" field.
 *      If no photo exists yet, leave the field as-is — the site will
 *      automatically show a placeholder card until you add one.
 *
 * HOW TO UPDATE WHICH STOPS ARE ON THIS YEAR'S TOUR:
 *   Just edit data/current-tour.js — you don't need to touch this file
 *   unless you're adding a brand new stop that's never been used before.
 */

const STOPS = {
  "utah-pioneer-museum": {
    title: "Utah Pioneer Museum",
    neighborhood: "Capitol Hill",
    blurb: "In 2007, security cameras at this museum caught the face of a girl circling through room after room, seven nights running. Officials wouldn't talk about it \u2014 but insiders say her visit was tied to something that had gone missing from a display case.",
    image: "stops/utah-pioneer-museum.jpg"
  },
  "mccune-mansion": {
    title: "McCune Mansion",
    neighborhood: "Capitol Hill",
    blurb: "This 1901 mining-fortune mansion is home to several friendly spirits, including a little girl who loves to dance at weddings and a caped gentleman who quietly watches over the halls. One electrician swears he watched her step out of a mirror \u2014 and never came back to finish the job.",
    image: "stops/mccune-mansion.jpg"
  },
  "temple-square": {
    title: "Temple Square",
    neighborhood: "Downtown",
    blurb: "Church president Wilford Woodruff was famous for casually greeting the ghosts of presidents, pharaohs, and prophets around these grounds. Just down the block, a doctor once kept a very different kind of secret in his barn \u2014 a box of human bones some say is still buried beneath a parking lot today.",
    image: "stops/temple-square.jpg"
  },
  "brigham-young-cemetery": {
    title: "Brigham Young Family Cemetery",
    neighborhood: "Downtown",
    blurb: "Tucked into the heart of downtown, this quiet private cemetery is the final resting place of Brigham Young himself. On foggy nights, visitors report a cloaked figure with a lantern pacing the grounds \u2014 always watching, never getting any closer.",
    image: "stops/brigham-young-cemetery.jpg"
  },
  "beehive-lion-house": {
    title: "Beehive & Lion Houses",
    neighborhood: "Downtown",
    blurb: "Once home to Brigham Young and his many wives and children, these two houses are considered some of SLC's most haunted buildings. Staff describe cold spots, cigar smoke with no source, and a locked third-floor nursery where a rocking horse won't stop rocking.",
    image: "stops/beehive-lion-house.jpg"
  },
  "joseph-smith-memorial-building": {
    title: "Joseph Smith Memorial Building",
    neighborhood: "Downtown",
    blurb: "Originally the opulent Hotel Utah, this landmark has hosted presidents and astronauts \u2014 and, according to night security, something that vanishes into thin air mid-chase on the upper floors.",
    image: "stops/joseph-smith-memorial-building.jpg"
  },
  "city-county-building": {
    title: "City & County Building",
    neighborhood: "Downtown",
    blurb: "Built to rival the SLC Temple, this grand building once held tunnels linking its courtrooms to the old city jail \u2014 tunnels once used to move prisoners like Ted Bundy. Employees say they still hear children playing in empty halls after dark.",
    image: "stops/city-county-building.jpg"
  },
  "peery-hotel": {
    title: "Peery Hotel",
    neighborhood: "Downtown",
    blurb: "Guests call her Moaning Molly \u2014 a sorrowful voice that drifts through the elevator and halls of this 1910 hotel, said to belong to a mother who once found herself with nowhere left to turn.",
    image: "stops/peery-hotel.jpg"
  },
  "rio-grande-depot": {
    title: "Rio Grande Depot",
    neighborhood: "Downtown",
    blurb: "For over 80 years, a woman in purple has been spotted near the old platforms of this depot, said to have died chasing an engagement ring onto the tracks. Some believe she isn't a ghost at all \u2014 but something far older, and far hungrier.",
    image: "stops/rio-grande-depot.jpg"
  },
  "regent-street": {
    title: "Regent Street Red Light District",
    neighborhood: "Downtown",
    blurb: "Once Salt Lake's red-light district, this back alley still draws visitors who leave small gifts for the spirits of the women who worked here. Every once in a while, they have something to say \u2014 and they find a way to say it.",
    image: "stops/regent-street.jpg"
  },
  "liberty-crest-apartments": {
    title: "Liberty Crest Apartments",
    neighborhood: "Downtown",
    blurb: "This quiet apartment complex sits on the site of a church once run by a pastor nicknamed the \u201cPriestly Butcher,\u201d whose furnace hid a far darker secret than firewood.",
    image: "stops/liberty-crest-apartments.jpg"
  },
  "oc-tanner-alta-club": {
    title: "OC Tanner & the Alta Club",
    neighborhood: "Downtown",
    blurb: "A librarian's ghost once pushed her book cart through the old Salt Lake Public Library \u2014 now a jewelry store. Next door, the historic Alta Club hides a cigar-smoking gentleman, a lilac-scented \u201cLady of the Evening,\u201d and a dumpster that moves on its own.",
    image: "stops/oc-tanner-alta-club.jpg"
  },
  "city-creek-park": {
    title: "City Creek Park",
    neighborhood: "Downtown",
    blurb: "Brigham Young once charged a toll to anyone who wanted to gather wood or hunt up this canyon \u2014 land he claimed entirely as his own. Some say his presence still lingers along the path today.",
    image: "stops/city-creek-park.jpg"
  },
  "memory-grove": {
    title: "Memory Grove: The Purple Lady",
    neighborhood: "Downtown",
    blurb: "A runaway bride, a logging truck, and a wedding that never happened \u2014 this scenic park is said to be haunted by a woman in purple who still runs across the road in her gown.",
    image: "stops/memory-grove.jpg"
  },
  "devereaux-house": {
    title: "Devereaux House",
    neighborhood: "Downtown",
    blurb: "A mischievous, 1850s-dressed little girl haunts this mansion's upper windows, known for switching lights back on and photobombing guests. Give her a wave \u2014 she might wave back.",
    image: "stops/devereaux-house.jpg"
  },
  "prehistoric-village": {
    title: "Prehistoric Village Under South Temple",
    neighborhood: "Downtown",
    blurb: "TRAX construction crews once unearthed a 3,000-year-old burial site beneath South Temple. Workers reported cold spots and whispers on the wind \u2014 and the street is about to be torn up again.",
    image: "stops/prehistoric-village.jpg"
  },
  "larkin-mortuary": {
    title: "Larkin Mortuary",
    neighborhood: "Downtown",
    blurb: "Every painting in this century-old funeral home hangs crooked, no matter how many times staff straighten them \u2014 a mystery that may trace back to a mother who ran into a burning house to save her art collection, and never came back out.",
    image: "stops/larkin-mortuary.jpg"
  },
  "jean-baptiste": {
    title: "Jean Baptiste the Graverobber",
    neighborhood: "Downtown",
    blurb: "A 19th-century gravedigger was caught with stolen burial garments from over 300 graves and exiled to a desolate island in the Great Salt Lake. He vanished without a trace \u2014 and some say he's still out there.",
    image: "stops/jean-baptiste.jpg"
  },
  "governors-mansion": {
    title: "Utah Governor's Mansion",
    neighborhood: "South Temple",
    blurb: "Built by a Park City silver baron who died just steps from its front door, this official governor's residence has a history of unexplained footsteps, whispers, and a portrait that once crashed to the floor with no one around.",
    image: "stops/governors-mansion.jpg"
  },
  "martha-hughes-cannon": {
    title: "Martha Hughes Cannon's Grave",
    neighborhood: "SLC Cemetery",
    blurb: "Utah's trailblazing suffragette senator, doctor, and public health pioneer is buried here \u2014 and her statue is still waiting for its ceremony in the U.S. Capitol.",
    image: "stops/martha-hughes-cannon.jpg"
  },
  "porter-rockwell": {
    title: "Porter Rockwell's Grave",
    neighborhood: "SLC Cemetery",
    blurb: "Lawman, outlaw, and self-proclaimed friend of the Prophet, Porter Rockwell's legend still draws visitors who come to pour one out in his memory.",
    image: "stops/porter-rockwell.jpg"
  },
  "mary-wallace": {
    title: "Mary Wallace's Grave",
    neighborhood: "SLC Cemetery",
    blurb: "The very first burial in the Salt Lake City Cemetery was an 8-month-old baby, laid to rest years before this ground was made official \u2014 a decision that shaped the entire cemetery's location.",
    image: "stops/mary-wallace.jpg"
  },
  "lilly-gray": {
    title: "Lilly Gray's Grave",
    neighborhood: "SLC Cemetery",
    blurb: "Her tombstone reads \u201cVictim of the Beast 666\u201d \u2014 one of Salt Lake's strangest unsolved epitaphs, with no clear explanation to this day.",
    image: "stops/lilly-gray.jpg"
  },
  "utah-state-capitol": {
    title: "Utah State Capitol",
    neighborhood: "Capitol Hill",
    blurb: "A rejected architect's ghost was long blamed for tools flying back at maintenance workers and doors slamming shut on their own \u2014 until a 2004 renovation seemed to finally put him to rest.",
    image: "stops/utah-state-capitol.jpg"
  },
  "capitol-theatre": {
    title: "Capitol Theatre",
    neighborhood: "Downtown",
    blurb: "A teenage usher who died in a 1949 fire is said to still linger backstage, alongside a mischievous second spirit named George who loves to cause trouble.",
    image: "stops/capitol-theatre.jpg"
  },
  "old-shilo-inn": {
    title: "Old Shilo Inn",
    neighborhood: "Downtown",
    blurb: "Following a 1978 tragedy, this hotel is said to be haunted by the laughter of children \u2014 playful spirits some believe once tried to help a drowning woman in the pool.",
    image: "stops/old-shilo-inn.jpg"
  },
  "the-whale": {
    title: "The Whale",
    neighborhood: "9th & 9th",
    blurb: "Our starting point and a neighborhood institution.",
    image: "stops/the-whale.webp"
  },
  "judge-memorial-high-school": {
    title: "Judge Memorial High School",
    neighborhood: "9th & 9th",
    blurb: "Founded in 1921 and named for a Catholic bishop, this school carries more than a century of history within its walls.",
    image: "stops/judge-memorial-high-school.jpg"
  },
  "axe-attack-house": {
    title: "The Axe House",
    neighborhood: "Central City",
    blurb: "On the surface, an ordinary Salt Lake City home. But the story of what happened inside these walls one autumn night has never fully left the neighborhood.",
    image: "stops/axe-attack-house.png"
  },
  "tower-theatre": {
    title: "The Tower Theatre",
    neighborhood: "9th & 9th",
    blurb: "This beloved 1928 cinema has screened horror films to generations of Salt Lakers.",
    image: "stops/tower-theatre.jpg"
  },
  "liberty-park-ghost-fountain": {
    title: "Liberty Park Fountain",
    neighborhood: "Liberty Park",
    blurb: "Few know why this fountain is here and even fewer know its broken history.",
    image: "stops/liberty-park-ghost-fountain.png"
  },
  "liberty-park-pond": {
    title: "Liberty Park Pond",
    neighborhood: "Liberty Park",
    blurb: "The pond at the heart of Liberty Park looks peaceful enough, but this is the site of a ghastly story in history.",
    image: "stops/liberty-park-pond.jpeg"
  }
};
