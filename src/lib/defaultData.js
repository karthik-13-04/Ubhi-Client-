/**
 * All default/seed datasets extracted from script.js.
 * These are used to initialize localStorage on first visit.
 */

// ── Gallery ──
export const defaultGalleryItems = [
  { src: 'https://sin1.contabostorage.com/d9a91b8a36b34cc59e571d07f57dd57b:ubhi/assets/gallery-chelsea.png', alt: 'Chelsea Kaur Ubhi in her studio' },
  { src: 'https://sin1.contabostorage.com/d9a91b8a36b34cc59e571d07f57dd57b:ubhi/assets/gallery-yoga-breath.png', alt: 'Somatic yoga and breathwork guidance' },
  { src: 'https://sin1.contabostorage.com/d9a91b8a36b34cc59e571d07f57dd57b:ubhi/assets/gallery-block-print.png', alt: 'Hand carving linoleum block printing stamp' },
  { src: 'https://sin1.contabostorage.com/d9a91b8a36b34cc59e571d07f57dd57b:ubhi/assets/gallery-geometry-draw.png', alt: 'Sacred geometry drawing session' },
];

// ── Workshops ──
export const defaultWorkshops = [
  {
    title: 'Yoga & Hand Block Printing',
    eyebrow: 'Signature · 12 July',
    desc: 'A grounding somatic yoga practice followed by slow block printing on organic paper and cloth.',
    time: '10:30–13:30',
    place: 'Hackney studio',
    price: 58,
    capacity: 10,
    image: 'https://sin1.contabostorage.com/d9a91b8a36b34cc59e571d07f57dd57b:ubhi/assets/ubhi-workshop-generated.png',
  },
  {
    title: 'Sacred Geometry Drawing',
    eyebrow: 'Geometry · 26 July',
    desc: 'Compass-and-rule mandala drawing, breath, stillness, and a short philosophical inquiry.',
    time: '09:30–12:00',
    place: 'Hackney studio',
    price: 44,
    capacity: 8,
    image: 'https://sin1.contabostorage.com/d9a91b8a36b34cc59e571d07f57dd57b:ubhi/assets/gallery-geometry-draw.png',
  },
  {
    title: 'Watercolour & Sound (AUM)',
    eyebrow: 'Sound · 9 August',
    desc: 'Vocal tuning, sound bath meditation, and fluid pigment experimentation on cold-press sheets.',
    time: '14:00–17:00',
    place: 'Hackney studio',
    price: 52,
    capacity: 10,
    image: 'https://sin1.contabostorage.com/d9a91b8a36b34cc59e571d07f57dd57b:ubhi/assets/gallery-chelsea.png',
  },
  {
    title: 'Breathwork & Clay Pots',
    eyebrow: 'Clay · 23 August',
    desc: 'Slow down your nervous system, connect with earth, and mold tactile terracotta shapes.',
    time: '10:30–13:00',
    place: 'Hackney studio',
    price: 48,
    capacity: 8,
    image: 'https://sin1.contabostorage.com/d9a91b8a36b34cc59e571d07f57dd57b:ubhi/assets/gallery-yoga-breath.png',
  },
  {
    title: 'Somatic Silk Dyeing',
    eyebrow: 'Silk · 6 September',
    desc: 'Explore organic indigo vats and botanical dyes, painting intentions onto premium raw silk.',
    time: '11:00–14:30',
    place: 'Hackney studio',
    price: 64,
    capacity: 8,
    image: 'https://sin1.contabostorage.com/d9a91b8a36b34cc59e571d07f57dd57b:ubhi/assets/gallery-block-print.png',
  },
  {
    title: 'Restorative Art & Ink Flow',
    eyebrow: 'Ink · 20 September',
    desc: 'A nourishing restoration session using fluid pigments, breath, and botanical inks.',
    time: '14:30–17:00',
    place: 'Hackney studio',
    price: 46,
    capacity: 10,
    image: 'https://sin1.contabostorage.com/d9a91b8a36b34cc59e571d07f57dd57b:ubhi/assets/gallery-yoga-breath.png',
  },
  {
    title: 'Lunar Yin & Ink Wash',
    eyebrow: 'Moon · 6 September',
    desc: 'A slow yin practice under low light, then loose ink-wash painting — letting the brush wander as the body softens.',
    time: '18:30–21:00',
    place: 'Hackney studio',
    price: 54,
    capacity: 9,
    image: '',
  },
  {
    title: 'Pressed Flowers & Pencil Study',
    eyebrow: 'Botanical · 20 September',
    desc: 'Press a flower, then learn to hold its likeness in pencil and wash. Materials and a small sketchbook to keep.',
    time: '11:00–14:00',
    place: 'Hackney studio',
    price: 48,
    capacity: 8,
    image: '',
  },
  {
    title: 'Kintsugi & Self-Compassion',
    eyebrow: 'Mending · 4 October',
    desc: 'Repair a broken bowl with golden seams while we sit with the quiet philosophy of honouring what has cracked.',
    time: '13:00–16:00',
    place: 'Hackney studio',
    price: 62,
    capacity: 8,
    image: '',
  },
  {
    title: 'Morning Movement & Letters',
    eyebrow: 'Correspondence · 18 October',
    desc: 'Gentle movement, a pot of tea, and an hour of writing real letters by hand — to a friend, or to yourself.',
    time: '09:00–11:30',
    place: 'Hackney studio',
    price: 40,
    capacity: 12,
    image: '',
  },
  {
    title: 'Candlelit Sound & Clay',
    eyebrow: 'Sound · 1 November',
    desc: 'A sound bath, then hand-building a small clay vessel — shaping earth to the hum still humming in your chest.',
    time: '17:30–20:00',
    place: 'Hackney studio',
    price: 56,
    capacity: 10,
    image: '',
  },
];

// ── Shop catalog ──
export const defaultShopCatalog = [
  { name: 'AUM Geometry Print', price: 32, category: 'Limited print', description: 'Terracotta linework on ivory archival paper. A4. Hand-stamped edition of 50.', vector: 'yantra', totalStock: 50, remainingStock: 12, image: '' },
  { name: 'Lotus Sticker Set', price: 8, category: 'Workshop object', description: '12 small symbols for journals, letters, and altar corners. Screen-printed on kraft paper.', vector: 'lotus', totalStock: 100, remainingStock: 45, image: '' },
  { name: 'Block Printing Starter Kit', price: 24, category: 'Ritual tool', description: 'One hand-carved foam block, two ink pads, and a folded instruction card.', vector: 'concentric', totalStock: 30, remainingStock: 8, image: '' },
  { name: 'Sacred Geometry Compass Set', price: 28, category: 'Drawing tool', description: 'Precision compass, ruler, and a guide to the first six patterns.', vector: 'lines', totalStock: 25, remainingStock: 5, image: '' },
  { name: 'Ubhi Journal — Blank', price: 22, category: 'Ritual stationery', description: 'A4 lay-flat, 160 pages of off-white cartridge paper. Embossed cover.', vector: 'lotus', totalStock: 40, remainingStock: 14, image: '' },
  { name: 'Earth-bound Vessel', price: 45, category: 'Clay craft', description: 'Hand-thrown terracotta pot, wood-fired with organic glaze. Each piece holds a unique shape.', vector: 'lines', totalStock: 15, remainingStock: 3, image: '' },
  { name: 'Somatic Art Archive', price: 38, category: 'Art archive', description: 'Folio of 4 linocut prints documenting bodily movement, printed on cotton rag paper.', vector: 'concentric', totalStock: 20, remainingStock: 7, image: '' },
  { name: 'Quiet Keepsake Set', price: 15, category: 'Quiet keepsakes', description: 'Three polished river stones wrapped in woven brass wire. Altars and sensory focus.', vector: 'lotus', totalStock: 30, remainingStock: 11, image: '' },
  { name: 'Terracotta Relic Print', price: 26, category: 'Relic print', description: 'Woodblock print in warm iron oxide inks, detailing ancient geometry on heavy card.', vector: 'lines', totalStock: 40, remainingStock: 19, image: '' },
  { name: 'Ritual Brass Bowl', price: 34, category: 'Ritual tool', description: 'Hand-beaten brass incense bowl, matching sand, and wild-harvested white sage bundle.', vector: 'concentric', totalStock: 20, remainingStock: 9, image: '' },
  { name: 'Embodied Geometry Art', price: 40, category: 'Yantra print', description: 'Silk-screened cosmic diagram on hand-dyed indigo paper. Signed and numbered.', vector: 'yantra', totalStock: 25, remainingStock: 6, image: '' },
  { name: 'Botanical Linen Wrap', price: 18, category: 'Limited edition', description: 'Hand-dyed linen wrap for books or journals, infused with wild marigold and madder root.', vector: 'lotus', totalStock: 30, remainingStock: 12, image: '' },
];

// ── Snail Mail ──
export const defaultSnailPhotos = [
  { src: 'https://sin1.contabostorage.com/d9a91b8a36b34cc59e571d07f57dd57b:ubhi/assets/gallery-chelsea.png', caption: 'January — Vol. 01: AUM ॐ' },
  { src: 'https://sin1.contabostorage.com/d9a91b8a36b34cc59e571d07f57dd57b:ubhi/assets/gallery-yoga-breath.png', caption: 'February — Vol. 02: Presence 🧘' },
  { src: 'https://sin1.contabostorage.com/d9a91b8a36b34cc59e571d07f57dd57b:ubhi/assets/gallery-block-print.png', caption: 'March — Vol. 03: Carving 🪵' },
  { src: 'https://sin1.contabostorage.com/d9a91b8a36b34cc59e571d07f57dd57b:ubhi/assets/gallery-geometry-draw.png', caption: 'April — Vol. 04: Symmetry 📐' },
  { src: 'https://sin1.contabostorage.com/d9a91b8a36b34cc59e571d07f57dd57b:ubhi/assets/ubhi-snail-mail-generated.png', caption: 'May — Vol. 05: Slow post ✉️' },
  { src: 'https://sin1.contabostorage.com/d9a91b8a36b34cc59e571d07f57dd57b:ubhi/assets/ubhi-workshop-generated.png', caption: 'June — Vol. 06: Crafting 🏺' },
  { src: 'https://sin1.contabostorage.com/d9a91b8a36b34cc59e571d07f57dd57b:ubhi/assets/gallery-chelsea.png', caption: 'July — Vol. 07: Silence 🤫' },
  { src: 'https://sin1.contabostorage.com/d9a91b8a36b34cc59e571d07f57dd57b:ubhi/assets/gallery-yoga-breath.png', caption: 'August — Vol. 08: Sound 🔊' },
  { src: 'https://sin1.contabostorage.com/d9a91b8a36b34cc59e571d07f57dd57b:ubhi/assets/gallery-block-print.png', caption: 'September — Vol. 09: Alchemy 🧪' },
  { src: 'https://sin1.contabostorage.com/d9a91b8a36b34cc59e571d07f57dd57b:ubhi/assets/gallery-geometry-draw.png', caption: 'October — Vol. 10: Geometry 🌀' },
  { src: 'https://sin1.contabostorage.com/d9a91b8a36b34cc59e571d07f57dd57b:ubhi/assets/ubhi-snail-mail-generated.png', caption: 'November — Vol. 11: Stardust ✨' },
  { src: 'https://sin1.contabostorage.com/d9a91b8a36b34cc59e571d07f57dd57b:ubhi/assets/ubhi-workshop-generated.png', caption: 'December — Vol. 12: Ascend 👁️' },
];

export const defaultSnailReviews = [
  { author: 'Eleanor K. 🌿', stamp: '🪷', text: "Receiving Chelsea's letters each month has become a sacred ritual. The paper feels alive, and the wax seal makes opening it feel like a gift from another era." },
  { author: 'Clara H. ✨', stamp: '🌙', text: "The linocuts are so beautiful on my altar. It's a gentle reminder to slow down, disconnect from screens, and touch something real." },
  { author: 'Julian V. 🪵', stamp: '👁️', text: 'Intention is woven into every detail—the ink, the stamp, the words. It is medicine for the nervous system in a busy world.' },
  { author: 'Marcus T. 🌊', stamp: '🐚', text: 'Every month a new piece of quiet presence arrives at my door. Chelsea has created a beautiful channel for shared consciousness.' },
];

export const defaultSnailMembers = [
  { name: 'Emily Watson', email: 'emily@example.com', contact: '+44 7700 900077', plan: '12 Months', billing: '£14 / month', address: '14 Primrose Gardens, London, NW3 4YT, United Kingdom', dateSubscribed: '2026-02-12', status: 'Active' },
  { name: 'Julian Vane', email: 'julian.vane@example.com', contact: '+44 7700 900112', plan: 'Monthly', billing: '£18 / month', address: 'Flat 4B, 88 Brunswick Place, Brighton, BN3 1FL, United Kingdom', dateSubscribed: '2026-01-08', status: 'Active' },
  { name: 'Clara Hughes', email: 'clara.h@example.com', contact: '+44 7700 900224', plan: '6 Months', billing: '£16 / month', address: '22 Windmill Lane, York, YO10 3LG, United Kingdom', dateSubscribed: '2025-11-20', status: 'Inactive' },
  { name: 'Marcus Thorne', email: 'marcus.thorne@example.com', contact: '+44 7700 900331', plan: '12 Months', billing: '£14 / month', address: '9 Ashdown Close, Sheffield, S10 5FJ, United Kingdom', dateSubscribed: '2026-03-01', status: 'Active' },
  { name: 'Sophia Lin', email: 'sophia@example.com', contact: '+44 7700 900445', plan: 'Monthly', billing: '£18 / month', address: '72 High Street, Edinburgh, EH1 1TB, United Kingdom', dateSubscribed: '2025-09-14', status: 'Inactive' },
];

// ── Workshop capacities ──
export const initialCapacities = {
  'Yoga & Hand Block Printing': { total: 10, booked: 8 },
  'Sacred Geometry Drawing': { total: 8, booked: 7 },
  'Watercolour & Sound (AUM)': { total: 10, booked: 10 },
  'Breathwork & Clay Pots': { total: 8, booked: 3 },
  'Somatic Silk Dyeing': { total: 8, booked: 8 },
  'Restorative Art & Ink Flow': { total: 10, booked: 5 },
  'Embodied Clay & Breath': { total: 8, booked: 2 },
  'Sacred Mandala & Sound': { total: 12, booked: 4 },
};

// ── Journal essays ──
export const defaultJournalEssays = [
  {
    title: 'AUM & the Science of Sound',
    tag: 'Philosophy',
    date: 'June 2026',
    art: `<svg viewBox="0 0 160 160" fill="none" width="110" height="110"><circle cx="80" cy="80" r="76" stroke="rgba(201,151,42,0.35)" stroke-width="0.6"/><circle cx="80" cy="80" r="50" stroke="rgba(201,151,42,0.25)" stroke-width="0.5"/><circle cx="80" cy="80" r="25" stroke="rgba(201,151,42,0.4)" stroke-width="0.6"/><polygon points="80,14 138,116 22,116" stroke="rgba(201,151,42,0.4)" stroke-width="0.6" fill="rgba(201,151,42,0.04)"/><polygon points="80,146 138,44 22,44" stroke="rgba(181,96,122,0.3)" stroke-width="0.6" fill="none"/><circle cx="80" cy="80" r="5" fill="rgba(201,151,42,0.6)"/></svg>`,
    body: `<p>Sound is the first manifest form of matter. Long before the eye perceived light, the ear was shaped by the low vibration of the void. In ancient Indian philosophy, AUM is not merely a chant or a mystical symbol; it is a mathematical map of consciousness and acoustic resonance.</p><p>AUM is composed of three phonemes representing the cycle of existence: "A" (the waking state, creation), "U" (the dreaming state, preservation), and "M" (the deep sleep state, dissolution). The final silence that follows is Turiya, the unmanifest source.</p><p>When chanted, these sounds create physical standing waves in the skull, stimulating the vagus nerve and slowing the heart. Modern neuroscience reveals that repeating these resonant frequencies shifts the brain from alert beta states to relaxed alpha and theta waves. We do not just hear sound — we align with it.</p>`,
  },
  {
    title: 'Sacred Geometry: Patterns That Think',
    tag: 'Geometry',
    date: 'May 2026',
    art: `<svg viewBox="0 0 160 160" fill="none" width="110" height="110"><circle cx="80" cy="80" r="76" stroke="rgba(201,151,42,0.3)" stroke-width="0.6"/><circle cx="80" cy="22" r="58" stroke="rgba(201,151,42,0.1)" stroke-width="0.4"/><circle cx="130" cy="51" r="58" stroke="rgba(201,151,42,0.1)" stroke-width="0.4"/><circle cx="130" cy="109" r="58" stroke="rgba(201,151,42,0.1)" stroke-width="0.4"/><circle cx="80" cy="138" r="58" stroke="rgba(201,151,42,0.1)" stroke-width="0.4"/><circle cx="30" cy="109" r="58" stroke="rgba(201,151,42,0.1)" stroke-width="0.4"/><circle cx="30" cy="51" r="58" stroke="rgba(201,151,42,0.1)" stroke-width="0.4"/><circle cx="80" cy="80" r="8" stroke="rgba(201,151,42,0.5)" stroke-width="0.6"/><circle cx="80" cy="80" r="3" fill="rgba(201,151,42,0.6)"/></svg>`,
    body: `<p>Nature does not design at random. If you cut open a nautilus shell, count the seeds of a sunflower, or trace the rotation of a spiral galaxy, you will find the exact same proportion: 1.618, the Golden Ratio. It is the signature of optimal growth.</p><p>Sacred geometry is the study of these archetypal patterns that structure reality. From the Flower of Life to the Sri Yantra, these shapes are visual forms of silence. They represent the blueprint of how energy organizes itself into physical form, balancing tension, expansion, and collapse.</p><p>By contemplating these forms or drawing them by hand, we engage in a silent dialogue with cosmic design. The circle represents absolute unity, the square represents grounding, and the triangle represents direction. Geometry is not just mathematics; it is philosophy made visible.</p>`,
  },
  {
    title: 'Why We Print by Hand',
    tag: 'Craft',
    date: 'May 2026',
    art: `<svg viewBox="0 0 160 160" fill="none" width="110" height="110"><rect x="20" y="20" width="120" height="120" stroke="rgba(45,139,124,0.35)" stroke-width="0.6" fill="none"/><rect x="40" y="40" width="80" height="80" stroke="rgba(45,139,124,0.28)" stroke-width="0.5" fill="none" transform="rotate(45 80 80)"/><circle cx="80" cy="80" r="40" stroke="rgba(45,139,124,0.35)" stroke-width="0.6"/><circle cx="80" cy="80" r="18" stroke="rgba(45,139,124,0.5)" stroke-width="0.6"/><circle cx="80" cy="80" r="5" fill="rgba(45,139,124,0.6)"/></svg>`,
    body: `<p>In a world of infinite digital replication, a physical print is a quiet rebellion. When we carve a block of linoleum or wood, mix oil-based pigments, and press it against textured paper, we participate in an ancient, slow ritual of presence.</p><p>Hand-printing allows for the presence of the hand. Unlike a screen or a digital printer, no two impressions are identical. One print might have a deeper ink deposit, while another shows the subtle texture of the paper grain peaking through the fibers. These variations are not errors; they are evidence of life.</p><p>This dialogue with raw materials teaches us patience. You cannot rush the drying of ink, nor can you bypass the sharpness of the chisel. In carving, we learn that taking away material is how we reveal the shape of our intentions.</p>`,
  },
  {
    title: 'Pranayama & the Vagus Nerve',
    tag: 'Breathwork',
    date: 'April 2026',
    art: `<svg viewBox="0 0 160 160" fill="none" width="110" height="110"><path d="M80 16C50 40 16 52 16 80C16 108 50 120 80 144C110 120 144 108 144 80C144 52 110 40 80 16Z" stroke="rgba(181,96,122,0.4)" stroke-width="0.6" fill="rgba(181,96,122,0.05)"/><path d="M80 32C56 52 32 60 32 80C32 100 56 108 80 128C104 108 128 100 128 80C128 60 104 52 80 32Z" stroke="rgba(181,96,122,0.3)" stroke-width="0.5" fill="none"/><circle cx="80" cy="80" r="18" stroke="rgba(181,96,122,0.5)" stroke-width="0.6"/><circle cx="80" cy="80" r="5" fill="rgba(181,96,122,0.6)"/></svg>`,
    body: `<p>The breath is the bridge between the conscious and unconscious mind. While heart rate, digestion, and hormone secretion occur automatically in the background, breathwork is the singular lever we can pull to consciously override our autonomic nervous system.</p><p>When we practice pranayama—specifically extending the exhalation longer than the inhalation—we stimulate the vagus nerve. This nerve, traveling from the brainstem down to the abdomen, sends signals to the heart to slow down, lowering blood pressure and switching the body from fight-or-flight into rest-and-digest.</p><p>By slowing the breath to six cycles per minute, we reach heart rate coherence. In this state, the brain waves synchronize with the cardiovascular rhythm, creating an deep feeling of grounding and safety. Stillness is not something we look for; it is something we breathe into.</p>`,
  },
  {
    title: 'The Philosophy of Slow Making',
    tag: 'Philosophy',
    date: 'March 2026',
    art: `<svg viewBox="0 0 160 160" fill="none" width="110" height="110"><line x1="80" y1="8" x2="80" y2="152" stroke="rgba(201,151,42,0.35)" stroke-width="0.5"/><line x1="8" y1="80" x2="152" y2="80" stroke="rgba(201,151,42,0.35)" stroke-width="0.5"/><line x1="24" y1="24" x2="136" y2="136" stroke="rgba(201,151,42,0.28)" stroke-width="0.5"/><line x1="136" y1="24" x2="24" y2="136" stroke="rgba(201,151,42,0.28)" stroke-width="0.5"/><circle cx="80" cy="80" r="72" stroke="rgba(201,151,42,0.3)" stroke-width="0.6"/><circle cx="80" cy="80" r="44" stroke="rgba(201,151,42,0.25)" stroke-width="0.5"/><circle cx="80" cy="80" r="18" stroke="rgba(201,151,42,0.4)" stroke-width="0.6"/><circle cx="80" cy="80" r="5" fill="rgba(201,151,42,0.6)"/></svg>`,
    body: `<p>Modern culture values output. The faster a product is created, distributed, and consumed, the higher its perceived efficiency. Yet, in this relentless push for speed, the sacred relationship between maker and object is severed.</p><p>Slow making is the recovery of this connection. When we craft with attention, we imprint our state of being onto the materials. The clay, the ink, and the wood carry the vibration of the hands that held them. An object created in haste communicates frenzy; an object created in presence communicates stillness.</p><p>Slowing down is not a lack of ambition. It is a commitment to depth. It is the understanding that some processes cannot be optimized without losing their soul. In making slowly, we do not just produce objects — we allow ourselves to be formed.</p>`,
  },
  {
    title: 'What Yoga Actually Means',
    tag: 'Yoga',
    date: 'March 2026',
    art: `<svg viewBox="0 0 160 160" fill="none" width="110" height="110"><ellipse cx="80" cy="105" rx="55" ry="22" stroke="rgba(45,139,124,0.35)" stroke-width="0.6" fill="none"/><ellipse cx="80" cy="80" rx="40" ry="55" stroke="rgba(45,139,124,0.28)" stroke-width="0.5" fill="none"/><ellipse cx="80" cy="80" rx="55" ry="40" stroke="rgba(45,139,124,0.28)" stroke-width="0.5" fill="none" transform="rotate(60 80 80)"/><ellipse cx="80" cy="80" rx="55" ry="40" stroke="rgba(45,139,124,0.28)" stroke-width="0.5" fill="none" transform="rotate(120 80 80)"/><circle cx="80" cy="80" r="10" stroke="rgba(45,139,124,0.5)" stroke-width="0.6"/><circle cx="80" cy="80" r="4" fill="rgba(45,139,124,0.6)"/></svg>`,
    body: `<p>The contemporary landscape has translated yoga into poses, flexibility, and athletic wear. But the postures (asanas) were historically only the preparation—a way to settle the body's restlessness so that one could sit still in meditation without discomfort.</p><p>The Sanskrit word "Yuj" means to yoke, to bind, or to unite. It is the union of the individual consciousness with the universal thread. Yoga is any practice that restores wholeness to what has been fragmented. It is the slow folding back of the mind into its source.</p><p>When we move with absolute awareness, the division between body, breath, and mind dissolves. We cease to be a collection of worries and become a field of presence. Yoga is not about self-improvement; it is about self-remembering.</p>`,
  },
  {
    title: 'On Keeping a Slow Notebook',
    tag: 'Philosophy',
    date: 'May 2026',
    body: '<p>A notebook is the slowest technology I own, and the most honest. It does not autocorrect me, or suggest what I might mean. It simply holds what I was brave enough to write down.</p><p>I keep mine half-finished on purpose. The empty pages are a promise that the thinking isn\'t over — that there is room, still, to change my mind. A notebook kept slowly becomes a kind of friend: patient, a little dog-eared, and entirely yours.</p>',
  },
  {
    title: 'The Quiet Geometry of a Leaf',
    tag: 'Geometry',
    date: 'April 2026',
    body: '<p>Hold a leaf to the light and the whole of sacred geometry is already there — the central vein, the branching that repeats itself smaller and smaller, the gentle asymmetry that keeps it from feeling machined.</p><p>We draw mandalas with compass and rule to remember a pattern the leaf never forgot. The practice is not to invent order, but to notice it; to sit long enough that the veins become a kind of map back to your own breathing.</p>',
  },
  {
    title: 'Why I Still Write by Hand',
    tag: 'Craft',
    date: 'March 2026',
    body: '<p>Typing is for getting things done. Handwriting is for getting things felt. The hand is slower than the mind, and in that gap — between the thought and the ink catching up — something softens.</p><p>A letter written by hand carries the weather of the day it was written: the rushed loops, the careful ones, the place where the pen paused. It is the opposite of a feed. It asks for your presence, and it keeps it.</p>',
  },
  {
    title: 'Breathing as a First Language',
    tag: 'Breathwork',
    date: 'February 2026',
    body: '<p>Before we had words we had breath — the first rhythm, learned in the dark, repeated some twenty thousand times a day without a single lesson.</p><p>To return to the breath in a practice is not to learn something new but to remember something old. Lengthen the exhale and the nervous system reads it as safety. The body believes the breath before it believes the mind; begin there, and the rest follows.</p>',
  },
];

// ── Data seeding function — call once on app mount ──
import { storeRead, storeWrite } from '../hooks/useStore';

export function seedDatabase() {
  if (typeof window === 'undefined') return;

  if (!storeRead('gallery-items', null)) {
    storeWrite('gallery-items', defaultGalleryItems);
  }

  if (!storeRead('art-pieces', null)) {
    const galSeed = storeRead('gallery-items', []);
    storeWrite('art-pieces', (Array.isArray(galSeed) ? galSeed : []).map(it => ({
      title: it.alt || 'Untitled piece',
      images: [it.src],
    })));
  }

  if (!storeRead('workshops', null)) {
    storeWrite('workshops', defaultWorkshops);
  }

  if (!storeRead('shop-catalog', null)) {
    storeWrite('shop-catalog', defaultShopCatalog);
  }

  if (!storeRead('snail-photos', null)) {
    storeWrite('snail-photos', defaultSnailPhotos);
  }

  if (!storeRead('snail-reviews', null)) {
    storeWrite('snail-reviews', defaultSnailReviews);
  }

  if (!storeRead('snail-members', null)) {
    storeWrite('snail-members', defaultSnailMembers);
  }

  if (!storeRead('journal-posts', null)) {
    storeWrite('journal-posts', defaultJournalEssays);
  }

  // Sync workshop capacities
  const dbCaps = storeRead('workshops-capacities', null) || initialCapacities;
  const dbWs = storeRead('workshops', null) || defaultWorkshops;
  if (Array.isArray(dbWs)) {
    dbWs.forEach(w => {
      if (w && w.title && !dbCaps[w.title]) {
        dbCaps[w.title] = { total: w.capacity || 10, booked: 0 };
      }
    });
  }
  storeWrite('workshops-capacities', dbCaps);
}
