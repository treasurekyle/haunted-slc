# SLC Walking Ghost Tour — Website

A single-page site for the annual SLC Walking Ghost Tour. No build step —
just static HTML/CSS/JS, so you can open `index.html` directly or host it
anywhere (GitHub Pages, Netlify, etc).

## File structure

```
index.html              The page itself (sections, layout)
styles.css               All styling
app.js                    Renders the header, RSVP buttons, and stop cards
                          from the data files below
data/
  stops.js                The full library of every stop that's ever been
                          used on the tour. Add new stops here.
  current-tour.js         THIS YEAR'S tour info + which stops are featured.
                          Edit this file every year.
images/
  header/                 Each year's header image
  stops/                  One photo per stop, filename must match the
                          "image" field in data/stops.js
  gallery/                Past-tour photo grid
```

## Updating the site for a new tour (what to tell Claude Code)

Give Claude Code a prompt like this each year:

> Update `data/current-tour.js` for the 2027 tour. It's called
> "Haunted 9th & 9th," happens Friday, October 30 at 7:00 PM, and meets at
> [location]. RSVP link is [eventbrite url]. The stops, in order, are:
> [list of stop names]. The header image is at `images/header/[filename]`.

Claude Code will:
1. Check whether each stop already exists in `data/stops.js` (by title).
2. Add any brand-new stops to `data/stops.js` with a title, neighborhood,
   and a short 2–3 sentence teaser blurb (not the full story — just enough
   to entice people to show up).
3. Update `TOUR_INFO`, `RSVP_URL`, and `TOUR_STOP_SLUGS` in
   `data/current-tour.js`.

## Adding photos

Drop images into `images/stops/` and `images/header/` using the filenames
already referenced in the data files. Until a photo exists, that stop's
card will automatically show a placeholder telling you exactly which
filename it's expecting — so it's easy to see what's still missing.

Gallery photos go in `images/gallery/`, named like `2026-01.jpg`,
`2026-02.jpg`, etc. — update the `years` list inside `renderGallery()` in
`app.js` to add a new year.

## RSVP button

Set `RSVP_URL` in `data/current-tour.js` to `null` to show a "RSVP opens
soon" state, or to your Eventbrite link once it's live.
