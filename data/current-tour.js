/**
 * THIS YEAR'S TOUR
 * ---------------------------------------------------------
 * This is the only file you should need to touch each year.
 *
 * TO UPDATE THE SITE FOR A NEW TOUR:
 *   1. Update TOUR_INFO below (name, date, time, meeting spot, header image).
 *   2. Update TOUR_STOP_SLUGS with the list of stops for this year, in order.
 *      Each slug must match a key in data/stops.js. If a stop isn't in the
 *      library yet, add it there first.
 *   3. Update RSVP_URL once the Eventbrite link exists.
 *
 * Example prompt for Claude Code next year:
 *   "Update data/current-tour.js for the 2027 tour. It's called
 *    'Haunted 9th & 9th', happens Friday Oct 30 at 7:00 PM, meets at
 *    [location]. The stops are: [list]. Header image is at
 *    images/header/[filename]."
 */

const TOUR_INFO = {
  tourName: "2026 Halloween Ghost Tour",
  tagline: "An Annual Halloween Walking Ghost Tour of Salt Lake City",
  date: "Friday, October 30",
  time: "6:00 PM",
  meetingSpot: "Meet at The Whale — 9th & 9th, Salt Lake City",
  routeDetails: "~2.5 miles · ~2 hours · Wear comfortable shoes",
  headerImage: "header/2026-header.png",
  headerImageAlt: "2026 Halloween Ghost Tour — Friday, October 30 at 6:00pm, meet at The Whale, 9th & 9th, Salt Lake City"
};

// RSVP not open yet — swap this to the real Eventbrite link when it's ready.
const RSVP_URL = null;

// Order matters — this is the order stops will appear on the route.
const TOUR_STOP_SLUGS = [
  "the-whale",
  "judge-memorial-high-school",
  "axe-attack-house",
  "tower-theatre",
  "liberty-park-ghost-fountain",
  "liberty-park-pond"
];
