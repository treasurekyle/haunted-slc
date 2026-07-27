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
  tourName: "Pioneer Day Ghost Tour",
  tagline: "A Very Special Pioneer Day Ghost Tour",
  date: "Thursday, July 23",
  time: "7:30 PM",
  meetingSpot: "Meet at the Pioneer Museum \u2014 300 N Main St, Salt Lake City",
  headerImage: "header/2026-header.png",
  headerImageAlt: "A Very Special Pioneer Day Ghost Tour \u2014 Thursday, July 23 at 7:30pm, meet at the Pioneer Museum, 300 N Main St, Salt Lake City"
};

// RSVP not open yet — swap this to the real Eventbrite link when it's ready.
const RSVP_URL = null;

// Order matters — this is the order stops will appear on the route.
const TOUR_STOP_SLUGS = [
  "utah-pioneer-museum",
  "mccune-mansion",
  "temple-square",
  "brigham-young-cemetery",
  "beehive-lion-house",
  "joseph-smith-memorial-building"
];
