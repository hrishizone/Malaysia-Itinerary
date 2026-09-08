// ─────────────────────────────────────────────────────────────
//  LANGKAWI TO LUMPUR — 7 days across Malaysia on ₹85,000
//  All prices in ₹ (INR). RM1 ≈ ₹21 (rate used throughout).
//
//  The arithmetic balances: every block cost below rolls up into
//  a day's `spend`, every day's spend rolls up into the budget,
//  and the budget lines sum to exactly ₹85,000.
// ─────────────────────────────────────────────────────────────

export const MYR = 21 // ₹ per RM1

export const meta = {
  title: 'Langkawi to Lumpur',
  subtitle: 'Seven Days Across Malaysia',
  tagline: 'Langkawi · Kuala Lumpur',
  blurb:
    'Ninety-nine islands of limestone older than the Himalaya, a 452-metre pair of towers, and a week that runs almost entirely on roti canai — three days of sea in Langkawi, four in a capital named after a muddy river fork, all inside ₹85,000 with both flights in it.',
  totalBudget: 85000,
  days: 7,
  cities: 2,
  islands: 99,
  kmTravelled: 7700,
  season: 'Best run: December – March. Avoid the west-coast wet season, August – October.',
  heroWiki: ['Langkawi Sky Bridge', 'Langkawi', 'Machinchang'],
}

export const cities = [
  {
    id: 'langkawi',
    name: 'Langkawi',
    jawi: 'لڠكاوي',
    malay: 'Pulau Langkawi',
    nights: '3 nights',
    days: 'Days 1–3',
    color: '#12bdb6',
    wiki: ['Langkawi', 'Pantai Cenang'],
    coords: { x: 60, y: 42 },
    oneLiner:
      'An archipelago of 99 islands — 104 at low tide — built from limestone half a billion years old, and duty-free since 1987.',
    knownFor: ['Kilim mangroves', 'Sky Bridge', 'Pantai Cenang', 'Duty-free chocolate'],
    stayArea:
      'Pantai Cenang — the one strip with beach, food, rental cars and a night market all inside a kilometre.',
  },
  {
    id: 'kl',
    name: 'Kuala Lumpur',
    jawi: 'كوالا لومڤور',
    malay: 'Kuala Lumpur',
    nights: '3 nights',
    days: 'Days 4–7',
    color: '#e4315c',
    wiki: ['Petronas Towers', 'Kuala Lumpur'],
    coords: { x: 72, y: 66 },
    oneLiner:
      'A tin-mining camp at a muddy river fork that grew into three of the ten tallest buildings on earth. The name means, literally, "muddy confluence".',
    knownFor: ['Petronas Towers', 'Batu Caves', 'Jalan Alor', 'Merdeka Square'],
    stayArea:
      'Bukit Bintang — walking distance to Jalan Alor, one monorail stop from everything, and never asleep.',
  },
  {
    id: 'putrajaya',
    name: 'Putrajaya',
    jawi: 'ڤوتراجاي',
    malay: 'Putrajaya',
    nights: 'Day trip',
    days: 'Day 5',
    color: '#f2b138',
    wiki: ['Putra Mosque', 'Putrajaya'],
    coords: { x: 70, y: 73 },
    oneLiner:
      'A federal capital built from scratch on a rubber plantation in the 1990s, arranged around an artificial lake and a rose-pink mosque.',
    knownFor: ['Masjid Putra', 'Perdana Putra', 'Seri Wawasan Bridge', 'Lake cruise'],
    stayArea: 'Not a place to sleep — it is 20 minutes from KL Sentral by KLIA Transit and a half-day trip.',
  },
]

// ── THE SEVEN DAYS ───────────────────────────────────────────
export const days = [
  {
    n: 1,
    city: 'langkawi',
    date: 'Day 1',
    title: 'Wheels Down on the Island of the Reddish-Brown Eagle',
    subtitle: 'Bangalore → Langkawi · a first swim, then Kuah after dark',
    wiki: ['Kuah, Langkawi', 'Langkawi', 'Pantai Cenang'],
    accent: '#12bdb6',
    hotelId: 'langkawi',
    stayCost: 2500,
    stay: 'Pantai Cenang beachfront 3★',
    walkKm: 6.4,
    spend: 9915,
    highlight:
      'Standing under the twelve-metre eagle at Dataran Lang at dusk, working out that the island is named after it — helang kawi, the reddish-brown eagle.',
    blocks: [
      {
        time: '23:55',
        icon: 'plane',
        wiki: ['Kempegowda International Airport'],
        title: 'Depart Bangalore BLR (the night before)',
        detail:
          'Book this as one multi-city ticket: Bangalore → Langkawi on the way in, Kuala Lumpur → Bangalore on the way out. AirAsia, IndiGo and Batik all fly BLR–KUL; the overnight departure is the one that hands you a whole first day instead of half of one. ₹24,000 return if you book 8–10 weeks out.',
        cost: 0,
        tag: 'Flight',
      },
      {
        time: '06:10',
        icon: 'plane',
        wiki: ['Kuala Lumpur International Airport'],
        title: 'Land KLIA2, and stay airside',
        detail:
          'Malaysia is +2h30 ahead of IST. If your onward Langkawi leg is on the same ticket you do not clear immigration here — follow the transfer signs. If it is a separate ticket (AirAsia sells them that way), you clear immigration, collect the bag and re-check it, so leave three hours, not one.',
        cost: 0,
        tag: 'Transit',
      },
      {
        time: '09:25',
        icon: 'plane',
        wiki: ['Langkawi International Airport'],
        title: 'Land Langkawi (LGK), Padang Matsirat',
        detail:
          'A one-belt airport twenty minutes from the beach. Indian passport holders currently get 30 days visa-free — but the Malaysia Digital Arrival Card (MDAC) must already be submitted online, and immigration will send you to a corner desk to do it on your phone if it is not.',
        cost: 0,
        tag: 'Arrival',
      },
      {
        time: '09:50',
        icon: 'wifi',
        title: 'eSIM on, Grab installed, ringgit drawn',
        detail:
          'Activate the eSIM before you leave the terminal. Draw RM400–500 cash at the airport ATM: the Kilim boatmen, the pasar malam and half of Langkawi are cash-only, and the Touch ’n Go e-wallet everyone will tell you to use needs a Malaysian phone number you do not have.',
        cost: 0,
        tag: 'Setup',
      },
      {
        time: '10:20',
        icon: 'bus',
        title: 'Collect the rental car — all three days, paid now',
        detail:
          'The single best decision on this leg. Langkawi has no useful public transport and Grab prices climb the further north you go; a Perodua Myvi from a counter in the arrivals hall is RM85 a day, no deposit, and they hand you the keys with a quarter tank. RM255 for three days, and you drive on the left like at home.',
        cost: 5355,
        tag: 'Big move',
      },
      {
        time: '11:00',
        icon: 'bed',
        title: 'Bag drop at Pantai Cenang',
        detail:
          'Check-in is 14:00 everywhere but every Cenang place will hold luggage and most will let you use the pool. Stay on Cenang: the beach, the food, the night market and the bike rentals are all inside one kilometre of each other.',
        cost: 0,
        tag: 'Stay',
      },
      {
        time: '11:30',
        icon: 'food',
        wiki: ['Nasi lemak'],
        title: 'Brunch: nasi lemak bungkus and a teh tarik',
        detail:
          'Buy it wrapped in banana leaf and newspaper from a roadside stall for RM4 — coconut rice, sambal, fried anchovies, peanut, half an egg. Wash it down with teh tarik, tea "pulled" between two jugs from a metre apart to aerate it. This is the national breakfast and you will eat it most mornings.',
        cost: 380,
        tag: 'Cheap eat',
      },
      {
        time: '12:45',
        icon: 'walk',
        wiki: ['Pantai Cenang'],
        title: 'Pantai Cenang — the first swim',
        detail:
          'Two kilometres of soft sand facing due west, which is why the sunset here is the one people photograph. The water is bath-warm and shallow a long way out. Between roughly April and October watch for box jellyfish warnings on the lifeguard board; vinegar bottles on posts are not decoration.',
        cost: 0,
        tag: 'Free',
      },
      {
        time: '15:00',
        icon: 'bed',
        title: 'Check in, and a strategic 45-minute nap',
        detail:
          'Non-negotiable after a red-eye. Set two alarms — Day 2 starts at seven and it is the biggest day of the week.',
        cost: 0,
        tag: 'Stay',
      },
      {
        time: '16:30',
        icon: 'bus',
        title: 'Drive to Kuah town (25 minutes)',
        detail:
          'East across the island on Route 112. Kuah is where Langkawi actually lives — the ferry terminal, the government offices, the duty-free warehouses. Petrol on the island is the cheapest in the country; a full tank of RON95 costs less than a plate of seafood.',
        cost: 210,
        tag: 'Transport',
      },
      {
        time: '17:15',
        icon: 'landmark',
        wiki: ['Kuah, Langkawi', 'Langkawi'],
        title: 'Dataran Lang — the twelve-metre eagle',
        detail:
          'The brahminy kite, wings up, standing over the ferry harbour since 1996. It is here because of the etymology: legend has it Langkawi comes from helang (eagle) and kawi (reddish-brown). Go at golden hour, stand to the left of it, and get the Kedah hills in the frame.',
        cost: 0,
        tag: 'Free',
      },
      {
        time: '18:00',
        icon: 'shopping',
        title: 'The Kuah pasar malam',
        detail:
          'Here is the thing nobody tells you: Langkawi’s night market rotates. Kuah gets it on Wednesday and Saturday, Cenang on Thursday, Kedawang on Friday, Padang Matsirat on Sunday, Air Hangat Monday, Ulu Melaka Tuesday. Check which one is running tonight and go to that one. Eat: ayam percik, apam balik, keropok lekor, and a bag of cut pineapple for RM3.',
        cost: 630,
        tag: 'Street food',
      },
      {
        time: '19:45',
        icon: 'food',
        wiki: ['Ikan bakar'],
        title: 'Ikan bakar on the Kuah waterfront',
        detail:
          'Pick your fish off the ice, watch it go onto the grill wrapped in banana leaf with sambal packed into the slashes. A whole ikan pari (stingray) or siakap (barramundi) with rice and kangkung comes to RM40 for two. The waterfront restaurants along Jalan Persiaran Putera all do it and they are all fine.',
        cost: 840,
        tag: 'Must-eat',
      },
      {
        time: '21:15',
        icon: 'shopping',
        title: 'The duty-free reconnaissance run',
        detail:
          'Langkawi has been a duty-free island since 1987 — chocolate, liquor, cookware and perfume at a third to half of mainland prices. Do not buy tonight. Look at prices, then buy on Day 4 on the way to the airport so you are not carrying six kilos of Toblerone up a mountain.',
        cost: 0,
        tag: 'Local',
      },
      {
        time: '22:00',
        icon: 'moon',
        title: 'Back to Cenang, and asleep by ten',
        detail:
          'Twenty-five minutes back on an empty road. Tomorrow is the mangroves and the boat leaves whether you are on it or not.',
        cost: 0,
      },
    ],
    tips: [
      'Submit the MDAC (Malaysia Digital Arrival Card) at imigresen-online.imi.gov.my before you fly — it is free, takes four minutes, and must be done within three days of arrival. It is the single most common thing Indian travellers get wrong.',
      'Malaysia uses the UK three-pin Type G plug at 240V. Your Indian round-pin charger will not fit. Buy the adapter at home for ₹150 rather than at KLIA for RM35.',
      'Book the rental car online a week out if you are travelling December–February; the airport counters genuinely run out during the school holidays.',
      'If tonight is a Thursday, skip the Kuah drive entirely — the pasar malam is on Cenang, four minutes’ walk from your bed.',
    ],
    eat: ['Nasi lemak', 'Teh tarik', 'Ikan bakar', 'Apam balik', 'Keropok lekor'],
  },

  {
    n: 2,
    city: 'langkawi',
    date: 'Day 2',
    title: 'Into the Mangroves, Then Up the Mountain',
    subtitle: 'Kilim Karst Geoforest Park · Gunung Raya · sunset at Pantai Tengah',
    wiki: ['Kilim Karst Geoforest Park', 'Langkawi', 'Mangrove'],
    accent: '#3ddbd0',
    hotelId: 'langkawi',
    stayCost: 2500,
    stay: 'Pantai Cenang beachfront 3★',
    walkKm: 5.1,
    spend: 7355,
    highlight:
      'Cutting the engine inside the Hole in the Wall, where the boat slides through a gap in a limestone cliff that is 450 million years old and about four metres wide.',
    blocks: [
      {
        time: '07:15',
        icon: 'food',
        wiki: ['Roti canai'],
        title: 'Roti canai at a Cenang kedai kopi',
        detail:
          'Flipped, slapped, folded and griddled to order, served with dhal and a fish curry you dunk it into. RM2.50 a piece and the mamak stalls have been making it since five in the morning. Order kosong (plain) first, then a roti telur if you are still hungry.',
        cost: 250,
        tag: 'Cheap eat',
      },
      {
        time: '08:15',
        icon: 'bus',
        title: 'Drive north-east to Kilim Jetty (40 minutes)',
        detail:
          'Cross the island through padi fields and rubber to Tanjung Rhu’s side of the north coast. Get there by nine: the first boats out have the mangroves to themselves and the light in the canyon is better before the sun is overhead.',
        cost: 250,
        tag: 'Transport',
      },
      {
        time: '09:00',
        icon: 'ship',
        wiki: ['Kilim Karst Geoforest Park', 'Langkawi'],
        title: 'Kilim Karst Geoforest Park — four hours by boat',
        detail:
          'A UNESCO Global Geopark, and the reason to come to Langkawi at all. Negotiate at the jetty counter rather than booking a hotel package: a whole boat is RM250–350 for up to six people, or roughly RM100 a head if you join one. Insist on the four-hour route, not the ninety-minute one.',
        cost: 2100,
        tag: 'Unmissable',
      },
      {
        time: '09:35',
        icon: 'mountain',
        title: 'The Hole in the Wall',
        detail:
          'A gap in a limestone cliff the boat threads at walking pace into a hidden inlet. The rock here is Setul Formation limestone laid down in the Ordovician — older than the Himalaya, older than trees, older than anything with a backbone that walked.',
        cost: 0,
        tag: 'Iconic',
      },
      {
        time: '10:20',
        icon: 'mountain',
        title: 'Gua Kelawar, the bat cave',
        detail:
          'A boardwalk through a limestone chamber hung with fruit bats and roundleaf bats. Take the guide (RM5, worth it) — they will point out the fossilised shells in the ceiling that prove this whole cliff was once a seabed. No flash, no shouting.',
        cost: 105,
        tag: 'Do it',
      },
      {
        time: '11:10',
        icon: 'ship',
        title: 'The floating fish farm',
        detail:
          'Wooden platforms tethered mid-river holding grouper, archer fish that spit at your hand, and horseshoe crabs that have not changed shape in 450 million years. RM10 to go aboard and feed things. Touristy, and also genuinely good.',
        cost: 210,
      },
      {
        time: '12:00',
        icon: 'camera',
        title: 'The brahminy kites — and the chicken skin you should refuse',
        detail:
          'Dozens of eagles wheel over the estuary mouth. Boatmen have historically thrown chicken skin into the water to make them dive on cue, which concentrates unnaturally large numbers of birds and has been discouraged by the Geopark for years. Ask your boatman not to feed. You will still see them — they live here.',
        cost: 0,
        tag: 'Free',
      },
      {
        time: '13:15',
        icon: 'food',
        title: 'Late lunch at the jetty warung',
        detail:
          'Nasi campur — you point at things behind glass and they weigh your plate. Fried chicken, sambal petai, a green vegetable, rice. RM12 and among the best value meals of the week.',
        cost: 530,
        tag: 'Cheap eat',
      },
      {
        time: '14:30',
        icon: 'bus',
        title: 'Drive to Gunung Raya (45 minutes)',
        detail:
          'South-west across the island, then a narrow switchback road that climbs the whole 881 metres. Take it slowly — the road is single-track in places, there are macaques on the tarmac, and the drop is unfenced.',
        cost: 250,
        tag: 'Transport',
      },
      {
        time: '15:30',
        icon: 'mountain',
        wiki: ['Gunung Raya', 'Langkawi'],
        title: 'Gunung Raya — the highest point on the island',
        detail:
          'The road takes you almost to the summit. There is a small charge for the observation deck at the top; the roadside viewpoints on the way up are free and, on a clear day, almost as good. Cloud comes in fast after three in the afternoon, so if you can see the view, stop and look at it now.',
        cost: 210,
        tag: 'Do it',
      },
      {
        time: '16:15',
        icon: 'camera',
        title: 'Tarutao on the horizon',
        detail:
          'Looking north on a clear afternoon you can pick out the Thai island of Tarutao, thirty kilometres away across the border. To the east is mainland Kedah; to the west, nothing but Andaman Sea until Sumatra.',
        cost: 0,
        tag: 'Photo',
      },
      {
        time: '18:00',
        icon: 'sunset',
        title: 'Sunset at Pantai Tengah',
        detail:
          'Cenang’s quieter southern neighbour, past the headland. Fewer jet skis, same sun, and the beach bars here put their bean bags at the waterline. Sunset is around 19:15 year-round — Malaysia is one time zone stretched across two, so the sun sets late.',
        cost: 0,
        tag: 'Free',
      },
      {
        time: '19:30',
        icon: 'food',
        title: 'Seafood grill on Pantai Tengah',
        detail:
          'Tiger prawns, squid, a whole fish, kangkung belacan and rice, eaten with your feet in the sand. RM45 a head at the beachfront places along Jalan Teluk Baru. Check the price per 100g before you point at the big prawns.',
        cost: 950,
        tag: 'Splurge',
      },
      {
        time: '21:00',
        icon: 'moon',
        title: 'Back to Cenang',
        detail: 'Ten minutes up the coast road. Charge everything — tomorrow is the cable car and the jet ski.',
        cost: 0,
      },
    ],
    tips: [
      'Bring a dry bag. The boat is open, it is fast, and a tropical squall arrives in about four minutes flat.',
      'Reef-safe sunscreen, a hat, and more water than you think — there is no shade on the boat and you are on the equator.',
      'Do not book the Kilim tour through your hotel: the same boat costs 40–60% more with a middleman attached. Drive to Kilim Jetty and buy it at the counter.',
      'The Gunung Raya road closes in heavy rain and there is no barrier at the bottom telling you so. If it is pouring at two o’clock, swap the mountain for Air Hangat hot springs.',
    ],
    eat: ['Roti canai', 'Nasi campur', 'Sambal petai', 'Kangkung belacan'],
  },

  {
    n: 3,
    city: 'langkawi',
    date: 'Day 3',
    title: 'Sea Level to Six Hundred and Sixty Metres',
    subtitle: 'Tanjung Rhu · jet ski · SkyCab and the Sky Bridge · Cenang after dark',
    wiki: ['Langkawi Sky Bridge', 'Machinchang', 'Langkawi'],
    accent: '#7ff0e4',
    hotelId: 'langkawi',
    stayCost: 2500,
    stay: 'Pantai Cenang beachfront 3★',
    walkKm: 7.8,
    spend: 10460,
    highlight:
      'Walking out onto a 125-metre curved deck slung under a single pylon at 660 metres, with the Andaman Sea on one side and nothing at all on the other.',
    blocks: [
      {
        time: '07:30',
        icon: 'food',
        title: 'Breakfast: nasi lemak and a kopi O',
        detail:
          'Kopi O is black coffee with sugar; kopi is with condensed milk; kopi C is with evaporated milk. Learn the three and you can order coffee anywhere in Malaysia for the rest of your life. RM11 with breakfast.',
        cost: 230,
        tag: 'Cheap eat',
      },
      {
        time: '08:15',
        icon: 'bus',
        title: 'Drive north to Tanjung Rhu (50 minutes)',
        detail:
          'Up the east side and across the top of the island. The last stretch runs through mangrove and past the Four Seasons gate; keep going to the public end of the beach where the car park is free.',
        cost: 280,
        tag: 'Transport',
      },
      {
        time: '09:00',
        icon: 'walk',
        wiki: ['Tanjung Rhu', 'Langkawi'],
        title: 'Tanjung Rhu Beach',
        detail:
          'The best beach on the island and it is not close. White sand, casuarina trees, limestone stacks offshore, and at low tide a sandbar you can walk out on for the better part of a kilometre towards the islands. Come now, before the day boats arrive at eleven.',
        cost: 0,
        tag: 'Free',
      },
      {
        time: '10:00',
        icon: 'zap',
        title: 'Jet ski off the north coast',
        detail:
          'The operators on the beach run 20–30 minute solo rides and longer island-hopping circuits out towards Pulau Chabang. RM150 for twenty minutes solo, and the longer guided loops run RM350–450. Check the lifejacket, check the fuel gauge, and agree the price and the duration before you sit on it.',
        cost: 3150,
        tag: 'Splurge',
      },
      {
        time: '11:30',
        icon: 'bus',
        title: 'Down the west coast to Oriental Village',
        detail:
          'Forty minutes along the north-west shoulder of the island to Teluk Burau, where the cable car base station sits inside a slightly kitsch shopping village. Park, eat, then go up.',
        cost: 250,
        tag: 'Transport',
      },
      {
        time: '12:15',
        icon: 'food',
        title: 'Lunch at Oriental Village',
        detail:
          'Not the island’s best food, but you want to be at the cable car with a full stomach and it is right here. Mee goreng mamak or a chicken rice, RM25.',
        cost: 530,
      },
      {
        time: '13:00',
        icon: 'mountain',
        wiki: ['Langkawi Cable Car', 'Machinchang'],
        title: 'Langkawi SkyCab — 2.2 km up Gunung Machinchang',
        detail:
          'One of the steepest cable car rides in the world: the second span climbs at a gradient touching 42°. Fifteen minutes to the top station at 708 metres, over rainforest and the Telaga Tujuh falls. RM85 for a standard adult return; the glass-floor gondola costs more and is not worth it.',
        cost: 1790,
        tag: 'Iconic',
      },
      {
        time: '13:45',
        icon: 'mountain',
        wiki: ['Langkawi Sky Bridge'],
        title: 'The Sky Bridge',
        detail:
          'A curved 125-metre pedestrian bridge hanging from a single 82-metre pylon at 660 metres. Get to it by walking down 300-odd steps (RM6) or by paying RM20 for the inclined SkyGlide lift. Walk. It takes eight minutes and the steps have the better view.',
        cost: 130,
        tag: 'Best view',
      },
      {
        time: '15:00',
        icon: 'walk',
        wiki: ['Telaga Tujuh Waterfalls', 'Langkawi'],
        title: 'Telaga Tujuh — the Seven Wells',
        detail:
          'Back at the bottom, a ten-minute drive and a stiff 638-step climb takes you to seven linked rock pools that spill into each other down the mountainside. Malay legend says fairies bathed here. In the dry months it is a trickle; after rain it is spectacular and slippery.',
        cost: 0,
        tag: 'Hidden gem',
      },
      {
        time: '16:45',
        icon: 'bus',
        title: 'Drive to Pantai Cenang',
        detail: 'Fifteen minutes south down the coast road. Shower, then straight back out for the sunset.',
        cost: 170,
        tag: 'Transport',
      },
      {
        time: '17:30',
        icon: 'sunset',
        wiki: ['Pantai Cenang'],
        title: 'Cenang sunset, and the parasails',
        detail:
          'The whole strip turns out for this. Parasailers get winched up off the sand behind speedboats, the light goes orange, and Pulau Rebak sits black on the horizon. Best from the waterline at the northern end, away from the jet ski jetties.',
        cost: 0,
        tag: 'Photo',
      },
      {
        time: '18:30',
        icon: 'walk',
        title: 'The Cenang strip',
        detail:
          'Jalan Pantai Cenang, end to end: duty-free shops, tattoo parlours, a hundred places selling the same sarong, and — if it is Thursday — the pasar malam setting up in the field behind. Buy the chocolate you priced on Day 1.',
        cost: 0,
      },
      {
        time: '19:45',
        icon: 'food',
        title: 'Dinner on the sand',
        detail:
          'The beachfront restaurants put tables directly onto Cenang beach after dark, with candles in glass jars and the tide twenty metres away. Grilled fish, satay, a Tiger beer if you want one. RM50 a head.',
        cost: 1050,
        tag: 'Worth it',
      },
      {
        time: '21:15',
        icon: 'sparkles',
        title: 'The fire show',
        detail:
          'The beach bars at the northern end of Cenang run fire-poi and fire-limbo shows on the sand most nights from about nine, free if you buy a drink. Sit on the sand, not on the terrace.',
        cost: 380,
        tag: 'Do it',
      },
      {
        time: '22:30',
        icon: 'moon',
        title: 'Repack — the car goes back in the morning',
        detail:
          'Everything liquid into the checked bag, chocolate wrapped in clothes so it survives the hold, and your MDAC and boarding pass on your phone home screen.',
        cost: 0,
      },
    ],
    tips: [
      'The SkyCab shuts for scheduled maintenance for weeks at a time, usually in the low season, and closes without warning in high wind. Check panoramalangkawi.com the night before and have Telaga Tujuh as the backup plan.',
      'Buy the SkyCab ticket online for a timed slot. The walk-up queue at midday in December is genuinely two hours.',
      'Jet ski operators quote per ski, not per person, and two people on one ski is normal. Agree the number out loud before you pay.',
      'Tanjung Rhu has no shops, no ATM and patchy signal. Take water and cash from Cenang.',
    ],
    eat: ['Mee goreng mamak', 'Satay', 'Grilled fish', 'Kopi O'],
  },

  {
    n: 4,
    city: 'kl',
    date: 'Day 4',
    title: 'Island to Skyline in Sixty-Five Minutes',
    subtitle: 'Langkawi → Kuala Lumpur · Bukit Bintang after dark',
    wiki: ['Bukit Bintang', 'Kuala Lumpur'],
    accent: '#e4315c',
    hotelId: 'kl',
    stayCost: 3100,
    stay: 'Bukit Bintang 3★',
    walkKm: 7.2,
    spend: 8275,
    highlight:
      'Coming up the escalator at Bukit Bintang monorail at eight in the evening into heat, neon, six lanes of traffic and the smell of grilled chicken — about four hours after standing on an empty beach.',
    blocks: [
      {
        time: '07:30',
        icon: 'shopping',
        title: 'The duty-free run, then the airport road',
        detail:
          'Last stop at the Cenang duty-free shops. Chocolate is the thing genuinely worth carrying — Toblerone, Ferrero and Cadbury at roughly a third of Indian prices — plus kitchenware and perfume. Liquor is cheap but you are limited to two litres coming into India.',
        cost: 420,
        tag: 'Local',
      },
      {
        time: '09:00',
        icon: 'bus',
        title: 'Drop the car at LGK',
        detail:
          'Fill the tank at the Petronas station on the airport road first — returning it empty costs you a refuelling fee at about double the pump price. The counter check takes four minutes and nobody looks at the paintwork.',
        cost: 180,
        tag: 'Transport',
      },
      {
        time: '10:40',
        icon: 'plane',
        wiki: ['Langkawi International Airport'],
        title: 'Langkawi → Kuala Lumpur, 1h 05m',
        detail:
          'AirAsia, Batik and Firefly all run the route several times a day; book it when you book the internationals and it is RM120. Sit on the left going down for the Straits of Malacca, and the view of KL’s three supertall towers on the approach.',
        cost: 2600,
        tag: 'Flight',
      },
      {
        time: '12:15',
        icon: 'bus',
        wiki: ['Kuala Lumpur International Airport'],
        title: 'KLIA2 into the city — take the bus',
        detail:
          'KLIA Ekspres does KLIA2 to KL Sentral in 33 minutes for RM55. The Aerobus and Skybus do it in about 70 minutes for RM15. Today you have all afternoon, so take the bus; on Day 7, when you have a flight to catch, pay for the train.',
        cost: 315,
        tag: 'Transport',
      },
      {
        time: '13:45',
        icon: 'train',
        title: 'KL Sentral → Bukit Bintang',
        detail:
          'MRT Kajang line, two stops, RM2.80. Buy a Touch ’n Go card at the station counter for RM10 and top it up with cash — it works on the MRT, LRT, monorail and buses, and saves you queueing for a token every single ride.',
        cost: 60,
        tag: 'Transport',
      },
      {
        time: '14:15',
        icon: 'bed',
        title: 'Check in — Bukit Bintang',
        detail:
          'Base yourself here and almost nothing on the next three days needs a taxi. Jalan Alor is a five-minute walk, Pavilion is across the road, KLCC is a twenty-minute covered walkway, and the monorail runs until midnight.',
        cost: 0,
        tag: 'Stay',
      },
      {
        time: '15:30',
        icon: 'food',
        wiki: ['Banana leaf rice'],
        title: 'Late lunch: banana leaf rice',
        detail:
          'Rice tipped onto a banana leaf, three vegetables, rasam, papadam and a curry, eaten with your right hand, refills brought round without asking. RM18–20. The Brickfields places near KL Sentral are the famous ones, but there is a good one within ten minutes of wherever you are standing. Fold the leaf towards you at the end — away means you did not enjoy it.',
        cost: 400,
        tag: 'Must-eat',
      },
      {
        time: '17:00',
        icon: 'shopping',
        title: 'Pavilion, Lot 10 and the Bintang Walk',
        detail:
          'Six major malls inside a kilometre, connected by covered walkways because it is 33°C and it will rain. Lot 10’s basement Hutong food court gathers heritage hawker stalls that are otherwise scattered across the city — worth a look even if you are not eating.',
        cost: 0,
        tag: 'Free',
      },
      {
        time: '18:30',
        icon: 'camera',
        wiki: ['Bukit Bintang'],
        title: 'The Bukit Bintang crossing at dusk',
        detail:
          'The Jalan Bukit Bintang / Jalan Sultan Ismail junction with the lights on is the most KL thing there is: monorail overhead, six lanes of Grab cars, durian stalls, and the towers lit up down the hill.',
        cost: 0,
        tag: 'Photo',
      },
      {
        time: '19:30',
        icon: 'food',
        wiki: ['Hokkien mee'],
        title: 'Dinner: KL-style Hokkien mee',
        detail:
          'Not the Penang soup of the same name. KL Hokkien mee is fat yellow noodles braised black in dark soy with pork, squid and cubes of crisped pork lard, cooked over a charcoal wok until the edges catch. RM24 and you will smell of it happily for an hour.',
        cost: 500,
        tag: 'Local',
      },
      {
        time: '21:00',
        icon: 'moon',
        title: 'Changkat Bukit Bintang — or a foot massage',
        detail:
          'One street up from Jalan Alor, Changkat is the bar strip: rooftops, live bands, and a beer at RM20. If you would rather not, the reflexology places along Jalan Bukit Bintang do an hour for RM60 and after three days of steps and 638 stairs your feet have earned it.',
        cost: 700,
        tag: 'Optional',
      },
      {
        time: '22:30',
        icon: 'ticket',
        title: 'Book the Petronas slot for tomorrow — now',
        detail:
          'Tickets for the Skybridge and Observation Deck go on sale on the official site and the evening slots for the next day are usually gone by tonight. Book the 18:00 entry so you are on the 86th floor for the sunset and back down for the fountains.',
        cost: 0,
        tag: 'Book ahead',
      },
    ],
    tips: [
      'Ignore every taxi tout at KLIA2 arrivals. Grab is half the price, the pickup bay is signposted, and the fare is fixed before you get in.',
      'The Touch ’n Go physical card is the one that works for a foreigner. The Touch ’n Go eWallet app needs a Malaysian mobile number, so do not waste your first evening fighting with it.',
      'KL has two airports side by side — KLIA1 for full-service carriers, KLIA2 for AirAsia. They are a free shuttle apart, but check which one your flight home leaves from now, not on Day 7.',
      'Everything indoors is air-conditioned to about 20°C. Carry a light layer or you will be cold in every mall and on every train.',
    ],
    eat: ['Banana leaf rice', 'Hokkien mee', 'Teh tarik', 'Cendol'],
  },

  {
    n: 5,
    city: 'kl',
    date: 'Day 5',
    title: 'A Pink Mosque on a Lake, and Then the Towers',
    subtitle: 'Putrajaya by morning · Petronas and KLCC by night',
    wiki: ['Putra Mosque', 'Putrajaya', 'Petronas Towers'],
    accent: '#fb5c85',
    hotelId: 'kl',
    stayCost: 3100,
    stay: 'Bukit Bintang 3★',
    walkKm: 9.6,
    spend: 8210,
    highlight:
      'The Skybridge at level 41 — a two-storey, 58-metre link that is not bolted to either tower but sits on a hinge, so it can slide as the buildings move in the wind.',
    blocks: [
      {
        time: '07:15',
        icon: 'food',
        title: 'Mamak breakfast: roti canai and teh tarik',
        detail:
          'Mamak stalls — run by Tamil Muslim families, open more or less permanently — are the connective tissue of Malaysian life. RM10 for breakfast, and nobody minds if you sit for an hour.',
        cost: 210,
        tag: 'Cheap eat',
      },
      {
        time: '08:15',
        icon: 'train',
        title: 'KLIA Transit from KL Sentral to Putrajaya & Cyberjaya',
        detail:
          'Twenty minutes on the airport express line, RM14 each way. Get the 08:30-ish departure: Masjid Putra closes to non-Muslim visitors during prayer times and Friday mornings are out entirely, so an early start is not optional.',
        cost: 590,
        tag: 'Transport',
      },
      {
        time: '09:15',
        icon: 'bus',
        title: 'Nadi Putra bus or Grab to Dataran Putra',
        detail:
          'The station is a few kilometres out from the core. The Nadi Putra buses are cheap and slow; a Grab is RM12 and ten minutes. Putrajaya is built for cars, with eight-lane boulevards and almost nobody on the pavements.',
        cost: 250,
        tag: 'Transport',
      },
      {
        time: '09:45',
        icon: 'landmark',
        wiki: ['Putra Mosque', 'Putrajaya'],
        title: 'Masjid Putra — the rose-pink mosque',
        detail:
          'Finished in 1999 in rose-tinted granite, standing half in Putrajaya Lake, holding 15,000 people under a 36-metre dome. Free to enter outside prayer times; they lend you a hooded purple robe at the door whatever you are wearing. The basement level along the waterfront is the photograph.',
        cost: 0,
        tag: 'Unmissable',
      },
      {
        time: '10:45',
        icon: 'building',
        wiki: ['Perdana Putra', 'Putrajaya'],
        title: 'Perdana Putra and Dataran Putra',
        detail:
          'The green-domed Prime Minister’s office on the hill above the square, in a Malay-Islamic-Palladian mash that could not be anywhere else on earth. The square below it has a fourteen-point star set into the paving, one point for each state and federal territory.',
        cost: 0,
        tag: 'Free',
      },
      {
        time: '11:30',
        icon: 'camera',
        wiki: ['Seri Wawasan Bridge', 'Putrajaya'],
        title: 'Seri Wawasan Bridge',
        detail:
          'A cable-stayed bridge with a forward-raked mast that looks like a ship under sail, and lights up at night in colours. Fifteen minutes’ walk around the lake edge from the mosque, and almost nobody does it.',
        cost: 0,
        tag: 'Photo',
      },
      {
        time: '12:15',
        icon: 'ship',
        title: 'Cruise Tasik Putrajaya',
        detail:
          'A 25-minute boat loop of the lake past the mosque, the bridges and the convention centre, RM30 on the electric boat. It is the only way to see how deliberately the whole city was composed — nothing here is older than 1995.',
        cost: 630,
        tag: 'Optional',
      },
      {
        time: '13:15',
        icon: 'food',
        title: 'Lunch at Alamanda',
        detail:
          'The mall by the lake, and the only concentration of food in walking distance. Nasi kandar or a food court plate, RM20. Then back to the station.',
        cost: 420,
      },
      {
        time: '14:30',
        icon: 'train',
        title: 'Back to KL Sentral',
        detail:
          'Twenty minutes. The return leg is already paid for above. Go back to the hotel and get off your feet — the second half of today runs until midnight.',
        cost: 0,
        tag: 'Transport',
      },
      {
        time: '16:00',
        icon: 'bed',
        title: 'An hour horizontal',
        detail:
          'Genuinely part of the plan. You have walked nine kilometres in 33°C humidity and the best part of the day has not started.',
        cost: 0,
        tag: 'Stay',
      },
      {
        time: '17:30',
        icon: 'train',
        title: 'MRT to KLCC',
        detail:
          'Or walk it — the air-conditioned elevated walkway from Pavilion to Suria KLCC takes about twenty minutes and is a small marvel of a city admitting how hot it is.',
        cost: 60,
        tag: 'Transport',
      },
      {
        time: '18:00',
        icon: 'building',
        wiki: ['Petronas Towers'],
        title: 'Petronas Twin Towers — Skybridge and Observation Deck',
        detail:
          'The tallest twin towers in the world at 451.9 metres, tallest building of any kind from 1998 to 2004, and still the best thing in the city. The tour takes you to the Skybridge on 41/42 and then the deck on 86. RM98, timed entry, passport at the door, and the whole thing takes about 90 minutes.',
        cost: 2050,
        tag: 'Book ahead',
      },
      {
        time: '19:45',
        icon: 'shopping',
        title: 'Suria KLCC',
        detail:
          'The mall in the towers’ base. Go to the fourth floor for the balcony that looks down the atrium, and to the Petrosains bookshop for maps. Or skip it and go straight outside — the park is better.',
        cost: 0,
        tag: 'Free',
      },
      {
        time: '20:30',
        icon: 'camera',
        wiki: ['KLCC Park', 'Petronas Towers'],
        title: 'KLCC Park and the Lake Symphony fountains',
        detail:
          'Twenty hectares of park laid out by Roberto Burle Marx, with a fountain show on the lake at 20:00, 21:00 and 22:00. Stand at the far side of the pool with the towers behind the water — this is the photograph everybody comes for, and at night it actually works.',
        cost: 0,
        tag: 'Free',
      },
      {
        time: '21:15',
        icon: 'food',
        title: 'Dinner under the towers',
        detail:
          'The restaurants along the park’s edge and up on the Isetan roof all trade on the view and charge for it — RM43 a head. Worth it once, tonight, with the towers lit up over your table.',
        cost: 900,
        tag: 'Worth it',
      },
      {
        time: '22:30',
        icon: 'walk',
        title: 'Walk back to Bukit Bintang',
        detail:
          'Back through the covered walkway, twenty minutes, still air-conditioned at half past ten. It exits into Pavilion and you are four minutes from bed.',
        cost: 0,
        tag: 'Free',
      },
    ],
    tips: [
      'Masjid Putra is closed to visitors during the five daily prayers and to non-Muslims for most of Friday. Go on a weekday morning and be out by noon.',
      'Cover knees and shoulders for the mosque. They will robe you anyway, but a purple hooded robe over jeans in 33°C is its own punishment.',
      'Petronas tickets are released a few days ahead and the sunset slots go first. Buy on petronastwintowers.com.my — the resellers charge 40% more for the same slot.',
      'The fountain show is on the hour, not continuously. Get to the far edge of the lake five minutes early for a spot at the rail.',
    ],
    eat: ['Roti canai', 'Nasi kandar', 'Teh tarik', 'Ais kacang'],
  },

  {
    n: 6,
    city: 'kl',
    date: 'Day 6',
    title: 'Chinatown, and the Greatest Food Street in Asia',
    subtitle: 'Petaling Street · Kwai Chai Hong · the Islamic Arts Museum · Jalan Alor',
    wiki: ['Petaling Street', 'Chinatown, Kuala Lumpur', 'Kuala Lumpur'],
    accent: '#f2b138',
    hotelId: 'kl',
    stayCost: 3100,
    stay: 'Bukit Bintang 3★',
    walkKm: 11.3,
    spend: 7420,
    highlight:
      'Jalan Alor at nine at night — four hundred metres of plastic stools, charcoal smoke and shouting, where you order from six different stalls onto one table and nobody minds.',
    blocks: [
      {
        time: '08:00',
        icon: 'food',
        title: 'Breakfast: kaya toast and soft-boiled eggs',
        detail:
          'Charcoal-toasted bread with kaya (coconut-and-pandan jam) and a cold slab of butter, two barely-set eggs with white pepper and dark soy to dip it in, and a kopi C. The old kopitiams around Bukit Bintang do it for RM14.',
        cost: 300,
        tag: 'Cheap eat',
      },
      {
        time: '09:15',
        icon: 'train',
        title: 'MRT to Pasar Seni',
        detail: 'Three stops on the Kajang line, RM2.80, six minutes. You come up in the middle of old KL.',
        cost: 60,
        tag: 'Transport',
      },
      {
        time: '09:45',
        icon: 'landmark',
        wiki: ['Sri Mahamariamman Temple, Kuala Lumpur'],
        title: 'Sri Mahamariamman Temple',
        detail:
          'The oldest Hindu temple in Kuala Lumpur, founded in 1873, with a 22-metre gopuram over the entrance carrying 228 sculpted deities. Shoes off, and the silver chariot inside is the one that carries Murugan to Batu Caves at Thaipusam.',
        cost: 0,
        tag: 'Free',
      },
      {
        time: '10:30',
        icon: 'walk',
        wiki: ['Petaling Street'],
        title: 'Petaling Street under the green roof',
        detail:
          'Jalan Petaling, roofed in green glass since 2003, is KL’s counterfeit-goods bazaar and has been the heart of Chinatown since the tin-mining days of the 1870s. Haggle to about 40% of the opening price, or just walk it and buy nothing — the street itself is the point.',
        cost: 0,
        tag: 'Free',
      },
      {
        time: '11:15',
        icon: 'palette',
        title: 'Kwai Chai Hong',
        detail:
          'A dead-end lane off Jalan Petaling, derelict for decades, restored in 2019 with murals that reconstruct 1960s Chinatown life — the mahjong game, the letter writer, the girl on the balcony. Free, quiet, and about ninety seconds from the loudest street in the city.',
        cost: 0,
        tag: 'Hidden gem',
      },
      {
        time: '12:00',
        icon: 'shopping',
        wiki: ['Central Market, Kuala Lumpur'],
        title: 'Central Market (Pasar Seni)',
        detail:
          'A 1928 art-deco wet market, saved from demolition and now the best place in the country to buy things worth carrying home: batik, pewter, songket, wood carving. Fixed prices upstairs, negotiable down. This is your souvenir stop — budget about RM45.',
        cost: 900,
        tag: 'Local',
      },
      {
        time: '13:00',
        icon: 'food',
        wiki: ['Bak kut teh'],
        title: 'Lunch: bak kut teh in Chinatown',
        detail:
          'Pork ribs simmered for hours with garlic, star anise, cinnamon and dark soy until the meat gives up, served with rice, youtiao for dipping and bitter Chinese tea. It was invented up the road in Klang for dock workers. RM23. (Not halal — the Muslim equivalent, chik kut teh, uses chicken.)',
        cost: 480,
        tag: 'Must-eat',
      },
      {
        time: '14:15',
        icon: 'museum',
        wiki: ['Islamic Arts Museum Malaysia'],
        title: 'Islamic Arts Museum Malaysia',
        detail:
          'The best museum in Malaysia and not close: twelve galleries of Qurans, Ottoman armour, Chinese Islamic ceramics and a room of scale architectural models — the Dome of the Rock, the Taj Mahal — under domes tiled by Iranian craftsmen. RM20, air-conditioned, and you could lose three hours.',
        cost: 420,
        tag: 'Worth it',
      },
      {
        time: '16:00',
        icon: 'landmark',
        wiki: ['Thean Hou Temple'],
        title: 'Thean Hou Temple',
        detail:
          'A six-tier Chinese temple on a hill in Robson Heights, ten minutes by Grab, built by the Hainanese community in 1987 and hung with hundreds of red lanterns. Go late in the afternoon for the light, and for the view back across the city to the towers.',
        cost: 250,
        tag: 'Photo',
      },
      {
        time: '18:00',
        icon: 'train',
        title: 'Back to Bukit Bintang',
        detail: 'Shower, change, and arrive at Jalan Alor hungry. That is the entire evening plan.',
        cost: 60,
        tag: 'Transport',
      },
      {
        time: '19:15',
        icon: 'food',
        wiki: ['Jalan Alor'],
        title: 'Jalan Alor — the whole street, plate by plate',
        detail:
          'Four hundred metres of open-air hawker stalls that take over the road every evening. The system: sit anywhere, order from any stall, they find you. Get satay, char kway teow, grilled stingray in banana leaf, oyster omelette, kailan with garlic, and a coconut. RM50 for two people eating properly.',
        cost: 1100,
        tag: 'Legendary',
      },
      {
        time: '21:00',
        icon: 'food',
        title: 'Wong Ah Wah’s chicken wings',
        detail:
          'At the far end of Jalan Alor, grilling wings over charcoal since 1987 and still turning tables at one in the morning. RM4.50 a wing, order six, and get the butter-fried squid alongside.',
        cost: 400,
        tag: 'Must-eat',
      },
      {
        time: '22:00',
        icon: 'sparkles',
        title: 'Durian, if you dare',
        detail:
          'The stalls at the Bukit Bintang end sell Musang King by the kilo, opened in front of you, eaten standing at a plastic table. RM17 for a taste-sized portion. Your hotel will have a sign banning it from the rooms, and they mean it.',
        cost: 350,
        tag: 'Do it',
      },
    ],
    tips: [
      'The Dark Cave at Batu Caves tomorrow has been closed to the public for conservation — do not plan around it. The Temple Cave and Ramayana Cave are open.',
      'Chinatown’s stalls sell fakes openly and Malaysian customs do not care, but Indian customs might. Buy the batik and the pewter instead.',
      'The Islamic Arts Museum shuts at 18:00 and the last entry is 17:30. Do not arrive at five.',
      'Jalan Alor prices are not marked at every stall. Ask "berapa?" before they cook — not because anyone is cheating you, but because seafood is priced by weight.',
    ],
    eat: ['Bak kut teh', 'Char kway teow', 'Satay', 'Kaya toast', 'Durian'],
  },

  {
    n: 7,
    city: 'kl',
    date: 'Day 7',
    title: 'Two Hundred and Seventy-Two Steps, Then Home',
    subtitle: 'Batu Caves at dawn · Merdeka Square · the night flight back',
    wiki: ['Batu Caves', 'Kuala Lumpur'],
    accent: '#ff8da7',
    hotelId: null,
    stayCost: 0,
    stay: 'Night flight home',
    walkKm: 9.8,
    spend: 2285,
    highlight:
      'Coming up the last of the 272 painted steps at half past seven, before the heat and the coaches, with the 42.7-metre gold Murugan below you and the cave opening overhead.',
    blocks: [
      {
        time: '05:45',
        icon: 'train',
        title: 'MRT to KL Sentral',
        detail:
          'An unkind alarm and the right decision. Batu Caves at seven in the morning is a working temple; Batu Caves at eleven is a car park with a queue.',
        cost: 60,
        tag: 'Transport',
      },
      {
        time: '06:30',
        icon: 'train',
        title: 'KTM Komuter to Batu Caves',
        detail:
          'The Komuter line runs from KL Sentral to a terminus literally at the foot of the steps — 30 minutes, RM2.60 each way. There is no reason to pay RM120 for a tour that does the same thing four hours later.',
        cost: 110,
        tag: 'Transport',
      },
      {
        time: '07:15',
        icon: 'landmark',
        wiki: ['Batu Caves'],
        title: '272 steps, and the tallest Murugan in the world',
        detail:
          'A limestone hill riddled with caves, a Tamil shrine since 1891, and since 2006 a 42.7-metre gold statue of Murugan at the bottom of the staircase. The steps were repainted in 2018 in the rainbow that put the place on every feed since. Free. Knees and shoulders covered; sarongs are RM5 at the bottom.',
        cost: 0,
        tag: 'Unmissable',
      },
      {
        time: '08:15',
        icon: 'mountain',
        title: 'Ramayana Cave',
        detail:
          'Off to the left at the base, past a 15-metre Hanuman, and almost empty at this hour. Inside, the Ramayana is told in painted dioramas along the cave walls, lit in colours, all the way to a chamber at the back. RM7 and the best-value ticket of the week.',
        cost: 150,
        tag: 'Worth it',
      },
      {
        time: '09:00',
        icon: 'camera',
        title: 'The macaques — and the plastic bag rule',
        detail:
          'Long-tailed macaques own the staircase and they have worked out that a plastic bag means food. They will take it out of your hand. Nothing visible, nothing rustling, no eye contact, and do not feed them — the temple has been asking people to stop for years.',
        cost: 0,
        tag: 'Free',
      },
      {
        time: '09:45',
        icon: 'food',
        title: 'Breakfast at the foot of the steps',
        detail:
          'The canteens at the base do idli, vadai, dosa and teh tarik for RM10 — South Indian food, in a Tamil temple complex, on the edge of a Malay capital, which is the whole country in one plate.',
        cost: 220,
        tag: 'Cheap eat',
      },
      {
        time: '11:00',
        icon: 'train',
        title: 'Komuter back, then walk to Masjid Jamek',
        detail:
          'Back to KL Sentral and two stops on the LRT, or a fifteen-minute walk from Pasar Seni along the river.',
        cost: 110,
        tag: 'Transport',
      },
      {
        time: '11:45',
        icon: 'landmark',
        wiki: ['Jamek Mosque'],
        title: 'Masjid Jamek, at the confluence that named the city',
        detail:
          'Built in 1909 in Mughal-revival brick and standing exactly where the Klang and Gombak rivers meet — the muddy confluence that gives Kuala Lumpur its name. The rivers were dyed blue and lit as the River of Life project in 2017; the mosque is free and open outside prayer times.',
        cost: 0,
        tag: 'Free',
      },
      {
        time: '12:30',
        icon: 'landmark',
        wiki: ['Merdeka Square, Kuala Lumpur', 'Sultan Abdul Samad Building'],
        title: 'Dataran Merdeka and the Sultan Abdul Samad Building',
        detail:
          'The cricket padang where the Union flag came down and the Malayan flag went up at midnight on 31 August 1957. On one side the mock-Tudor Royal Selangor Club, on the other Sultan Abdul Samad’s copper domes and 41-metre clock tower, finished in 1897 for the colonial secretariat.',
        cost: 0,
        tag: 'Iconic',
      },
      {
        time: '13:15',
        icon: 'building',
        wiki: ['Merdeka 118'],
        title: 'Merdeka 118, from the padang',
        detail:
          'Look south-east from the square and the 678.9-metre spire of Merdeka 118 closes the view — finished in 2023, and the second-tallest building on earth after the Burj Khalifa. It stands over the stadium where independence was declared, which is the entire idea.',
        cost: 0,
        tag: 'Photo',
      },
      {
        time: '14:00',
        icon: 'food',
        wiki: ['Nasi kandar'],
        title: 'Last lunch: nasi kandar',
        detail:
          'Rice with a ladle of three or four different curries poured over it until the gravies run together — "banjir", flooded, is the correct way to order it. RM23. Eat this one properly; airline food is four hours away.',
        cost: 480,
        tag: 'Must-eat',
      },
      {
        time: '15:15',
        icon: 'bed',
        title: 'Collect the bags',
        detail:
          'Every Bukit Bintang hotel holds luggage after checkout. Repack the duty-free chocolate into the middle of the checked bag now, not at the airport.',
        cost: 0,
        tag: 'Stay',
      },
      {
        time: '16:00',
        icon: 'train',
        title: 'KLIA Ekspres to the airport',
        detail:
          'Today you pay the RM55. Thirty-three minutes, no traffic, departs every twenty minutes from KL Sentral, and it removes the one variable — the Federal Highway at rush hour — that could actually make you miss the flight.',
        cost: 1155,
        tag: 'Transport',
      },
      {
        time: '18:30',
        icon: 'shopping',
        title: 'Last ringgit at the airport',
        detail:
          'Spend the coins: white coffee sachets, Beryl’s tiramisu chocolate, a packet of Milo. Keep RM20 back in case the departure gate wants a trolley.',
        cost: 0,
      },
      {
        time: '21:00',
        icon: 'plane',
        title: 'Kuala Lumpur → Bangalore',
        detail:
          'Four hours and fifteen minutes, non-stop, landing at Kempegowda around midnight IST. Seven days, two states, ninety-nine islands and one 678-metre spire behind you.',
        cost: 0,
        tag: 'Flight',
      },
    ],
    tips: [
      'Batu Caves before eight is a different place from Batu Caves at eleven — cooler, emptier, and the light comes into the Temple Cave through the hole in the roof. This is the one early start that pays you back.',
      'Do not carry an open bottle or a plastic bag up the steps. The macaques are quick and it is genuinely startling.',
      'If your flight is from KLIA2 rather than KLIA1, stay on the Ekspres one stop further — the terminals are eight minutes apart and the announcements are easy to miss.',
      'India allows two litres of alcohol and ₹50,000 of goods duty-free per adult returning. The Langkawi liquor is only a bargain inside that limit.',
    ],
    eat: ['Idli and vadai', 'Nasi kandar', 'Teh tarik', 'White coffee'],
  },
]

// ── THE MONEY ────────────────────────────────────────────────
// Every figure below is the sum of the line items in the seven days
// above, plus the fixed costs you pay before leaving home.
export const budget = {
  currency: '₹',
  total: 85000,
  modes: {
    shoestring: {
      label: 'Shoestring',
      mult: 0.78,
      note: 'Hostel dorms, scooter instead of a car, no jet ski, no lake cruise, hawker food only.',
    },
    balanced: { label: 'Balanced', mult: 1, note: 'The itinerary exactly as written. This is the plan.' },
    comfort: {
      label: 'Comfort',
      mult: 1.34,
      note: '4★ beachfront in Langkawi, KLIA Ekspres both ways, private Kilim boat, every splurge taken.',
    },
  },
  items: [
    {
      cat: 'Flights',
      label: 'Bangalore → Langkawi / Kuala Lumpur → Bangalore (multi-city)',
      amount: 24000,
      color: '#e4315c',
      note: 'Booked 8–10 weeks out as one multi-city ticket. Flying in to one island and out of the capital costs the same as a return and saves you a wasted day backtracking.',
    },
    {
      cat: 'Stay',
      label: '6 nights — Langkawi ×3, Kuala Lumpur ×3',
      amount: 16800,
      color: '#f2b138',
      note: '₹2,500 a night on Pantai Cenang, ₹3,100 in Bukit Bintang. Both walkable to everything the day plans need.',
    },
    {
      cat: 'Food & drink',
      label: '7 days of eating, properly',
      amount: 12230,
      color: '#3ddbd0',
      note: '≈₹1,750 a day for two full meals and a street breakfast. Malaysia is the rare country where the cheapest food is also the best.',
    },
    {
      cat: 'Activities',
      label: 'Kilim boat, jet ski, SkyCab, Petronas, museums, caves',
      amount: 10945,
      color: '#fb5c85',
      note: 'The jet ski (₹3,150) and the SkyCab (₹1,790) are the two biggest. Cut both and this line halves.',
    },
    {
      cat: 'Local transport',
      label: 'Langkawi rental car, KL rail, Grab, airport links',
      amount: 10025,
      color: '#12bdb6',
      note: 'The car is ₹5,355 of it for three days. KL costs almost nothing to move around: ₹60 a ride.',
    },
    {
      cat: 'Shopping & buffer',
      label: 'Duty-free, Central Market, contingency',
      amount: 6100,
      color: '#cd8d1c',
      note: '₹1,320 of it is already spent in the day plans. The other ₹4,780 is genuine untouched buffer.',
    },
    {
      cat: 'Internal flight',
      label: 'Langkawi → Kuala Lumpur, 1h 05m',
      amount: 2600,
      color: '#ff8da7',
      note: 'RM120 on AirAsia or Firefly. The ferry-and-bus alternative saves ₹1,200 and costs you nine hours.',
    },
    {
      cat: 'Insurance & docs',
      label: 'Travel insurance, MDAC, passport photos',
      amount: 1500,
      color: '#ffe4a3',
      note: 'Indians currently enter visa-free for 30 days, so there is no visa fee — but the MDAC is mandatory and free.',
    },
    {
      cat: 'Connectivity',
      label: 'eSIM, 10 GB / 7 days',
      amount: 800,
      color: '#7ff0e4',
      note: 'No firewall to tunnel past here — this is just cheaper than roaming and works the moment you land.',
    },
  ],
}

export const savings = [
  {
    icon: 'bus',
    title: 'Rent the car, do not Grab it',
    save: 4200,
    text: 'Three days of a Myvi is RM255. The same journeys by Grab — Kilim, Gunung Raya, Tanjung Rhu, Oriental Village — run past RM450, and you wait for a car each time.',
  },
  {
    icon: 'plane',
    title: 'Fly in to Langkawi, out of KL',
    save: 3500,
    text: 'A multi-city ticket costs about the same as a return and removes a whole day of backtracking to the island you already finished with.',
  },
  {
    icon: 'train',
    title: 'Take the Komuter to Batu Caves',
    save: 2400,
    text: 'RM2.60 each way to a station at the foot of the steps, against RM120 for a half-day tour that arrives after the crowds and the heat.',
  },
  {
    icon: 'food',
    title: 'Eat where the stools are plastic',
    save: 5000,
    text: 'A hawker plate is RM8–12, a mall restaurant RM45 for something worse. Spend properly on one meal a day — Jalan Alor, the Kuah waterfront — and eat the street for the rest.',
  },
  {
    icon: 'ticket',
    title: 'Book Petronas on the official site',
    save: 900,
    text: 'petronastwintowers.com.my sells the same timed slot at face value. Resellers add 30–50% for a PDF you could have printed yourself.',
  },
  {
    icon: 'calendar',
    title: 'Go in December, not during the holidays',
    save: 7000,
    text: 'The dry season on the west coast runs December to March. Inside it, avoid Chinese New Year, Hari Raya and the Malaysian school holidays, when Langkawi hotel rates double.',
  },
]

// ── WHERE TO SLEEP ───────────────────────────────────────────
// Real, long-established properties in the exact neighbourhoods this
// itinerary is built around. Rates are indicative for a double room in
// shoulder season and MUST be re-checked — see the note in the UI.
export const hotels = [
  {
    id: 'langkawi',
    city: 'Langkawi',
    jawi: 'لڠكاوي',
    nights: 'Nights 1, 2 & 3',
    wiki: ['Pantai Cenang', 'Langkawi'],
    area: 'Pantai Cenang',
    why:
      'The only part of the island where you can walk to the beach, dinner, a duty-free shop, a car rental desk and a night market. It is twenty minutes from the airport, thirty from the cable car, and the sunset happens directly in front of it.',
    avoid:
      'Do not book in Kuah to save ₹500 a night. It is the ferry town — no beach, no evening, and a 25-minute drive from everything on Days 2 and 3.',
    options: [
      {
        kind: 'Guesthouse',
        name: 'Soluna Guest House',
        price: 1900,
        priceNote: 'per night, double',
        why: 'A long-running budget guesthouse a short walk back from Cenang beach, with a pool, a kitchen and staff who will help you book the Kilim boat directly.',
      },
      {
        kind: 'Beachfront 3★',
        name: 'Malibest Resort',
        price: 2500,
        priceNote: 'per night, double',
        pick: true,
        why: 'Actually on Cenang beach rather than across the road from it, with the treehouse-style chalets it is known for. This is the ₹2,500 line in the budget, three times over.',
      },
      {
        kind: 'Splurge',
        name: 'Casa del Mar Langkawi',
        price: 11000,
        priceNote: 'per night, double',
        why: 'A small Mediterranean-style beachfront hotel at the quiet northern end of Cenang. If you are going to spend once on this trip, spend it here rather than on the jet ski.',
      },
    ],
  },
  {
    id: 'kl',
    city: 'Kuala Lumpur',
    jawi: 'كوالا لومڤور',
    nights: 'Nights 4, 5 & 6',
    wiki: ['Bukit Bintang', 'Kuala Lumpur'],
    area: 'Bukit Bintang',
    why:
      'Five minutes on foot from Jalan Alor, twenty through an air-conditioned walkway to the Petronas Towers, and on the monorail, the MRT and every bus in the city. Days 4, 5 and 6 all start and end here without a taxi.',
    avoid:
      'Do not book near KLIA to shorten the last morning. It is 55 km out, the Ekspres costs the same from the city, and you would trade three evenings in KL for one lie-in.',
    options: [
      {
        kind: 'Hostel',
        name: 'Mingle Hostel Bukit Bintang',
        price: 1500,
        priceNote: 'per night, private twin',
        why: 'A well-kept small hostel a few minutes off Jalan Alor with private rooms as well as dorms. The dorm bed is around a third of this if you are travelling solo.',
      },
      {
        kind: 'City 3★',
        name: 'Hotel Capitol Kuala Lumpur',
        price: 3100,
        priceNote: 'per night, double',
        pick: true,
        why: 'On Jalan Bulan, which is the street Jalan Alor runs off. Unremarkable rooms, faultless location, and the ₹3,100 line in the budget.',
      },
      {
        kind: 'Splurge',
        name: 'JW Marriott Kuala Lumpur',
        price: 13650,
        priceNote: 'per night, double',
        why: 'Sits directly on top of Starhill Gallery in the middle of Bukit Bintang, with tower views from the higher floors. The last-night version of this trip.',
      },
    ],
  },
]

export const bookingPlan = [
  {
    when: '10 weeks out',
    what: 'Flights',
    detail:
      'Multi-city: Bangalore → Langkawi in, Kuala Lumpur → Bangalore out, on one ticket. Tuesday and Wednesday departures run ₹3–5k cheaper. This is the single biggest lever on the whole budget.',
    critical: true,
  },
  {
    when: '8 weeks out',
    what: 'Confirm the visa-free window',
    detail:
      'Malaysia has extended visa-free entry for Indian passport holders in rolling announcements rather than permanently. Check the High Commission of Malaysia site before you book anything non-refundable.',
    critical: true,
  },
  {
    when: '6 weeks out',
    what: 'Hotels',
    detail:
      'All six nights. Free-cancellation rates cost slightly more and are worth it while the flights are the only fixed thing.',
    critical: false,
  },
  {
    when: '5 weeks out',
    what: 'The Langkawi rental car',
    detail:
      'Book online for airport pickup. In the December–February peak the counters genuinely run out of automatics by mid-morning.',
    critical: false,
  },
  {
    when: '4 weeks out',
    what: 'Travel insurance and the eSIM',
    detail:
      'Buy the eSIM now and install the profile at home — you want it activating on the runway at KLIA2, not in a queue at immigration.',
    critical: false,
  },
  {
    when: '3 weeks out',
    what: 'Petronas Twin Towers',
    detail:
      'Timed entry, and the sunset slots go first. Book the 18:00 entry on petronastwintowers.com.my so you are on the 86th floor for the light and back down for the 20:00 fountains.',
    critical: true,
  },
  {
    when: '2 weeks out',
    what: 'Check which night the pasar malam runs',
    detail:
      'Langkawi’s night market moves village by village through the week. Work out which one falls on your Day 1 and adjust the evening — it is the difference between a night market and a drive to a dark field.',
    critical: false,
  },
  {
    when: '3 days out',
    what: 'The MDAC',
    detail:
      'The Malaysia Digital Arrival Card must be submitted online within three days of arrival. It is free and takes four minutes, and it is the single most common reason Indian travellers get pulled aside at KLIA.',
    critical: true,
  },
  {
    when: 'Night before',
    what: 'Grab, a working card, and ringgit',
    detail:
      'Install Grab and add a card at home. Tell your bank you are travelling. Carry enough for a taxi and a meal in case the airport ATM is out.',
    critical: true,
  },
]

// ── ESSENTIALS ───────────────────────────────────────────────
export const essentials = [
  {
    id: 'entry',
    icon: 'passport',
    title: 'Entry & paperwork',
    points: [
      'Indian passport holders currently enter Malaysia visa-free for up to 30 days. The exemption has been extended in stages rather than made permanent — confirm it 10–12 weeks before you fly.',
      'The MDAC (Malaysia Digital Arrival Card) is separate, mandatory and free, and must be submitted at imigresen-online.imi.gov.my within three days of arrival. Screenshot the confirmation.',
      'Passport needs at least six months of validity from the date of entry, and immigration may ask to see a return ticket and a hotel booking. Have both on your phone.',
      'No vaccination certificate is required for arrivals from India, but carry a copy of your travel insurance.',
      'You can bring in duty-free: 1 litre of alcohol, 200 cigarettes. Coming home, India allows 2 litres of alcohol and ₹50,000 of goods per adult.',
    ],
  },
  {
    id: 'money',
    icon: 'wallet',
    title: 'Money — ringgit, cards, and the e-wallet trap',
    points: [
      'The currency is the ringgit (RM / MYR). Roughly RM1 ≈ ₹21, so a RM12 hawker plate is about ₹250 and a RM55 airport train is about ₹1,155.',
      'Cards work in malls, hotels and chain restaurants. They do not work at pasar malam stalls, Kilim boatmen, most hawker stalls or the Batu Caves sarong desk. Carry RM200–300 in cash at all times.',
      'Everyone will tell you to use Touch ’n Go eWallet. Registering it needs a Malaysian mobile number, so as a visitor you usually cannot. Buy the physical Touch ’n Go card at any station counter instead — it works on all rail and buses.',
      'ATMs: Maybank and CIMB accept foreign cards, typically RM1,500 per withdrawal with an RM10–12 fee. Draw larger amounts less often.',
      'Airport money changers are poor value. The best rates in the country are at the small changers in KL’s malls (Berjaya Times Square, Mid Valley) — use the airport only for your first RM500.',
    ],
  },
  {
    id: 'transport',
    icon: 'train',
    title: 'Getting around',
    points: [
      'Kuala Lumpur: MRT, LRT, monorail and KTM Komuter all take the Touch ’n Go card. Almost every ride on this itinerary is RM2–3.',
      'Grab is the taxi app and it is everywhere, fixed-fare, and about half the price of a street taxi. Never take a metered taxi from an airport rank.',
      'Langkawi has effectively no public transport. Rent a car (RM85/day) or a scooter (RM40/day) — this is not the place to rely on ride-hailing.',
      'KLIA1 and KLIA2 are separate terminals: full-service carriers at KLIA1, AirAsia at KLIA2. The Ekspres serves both; check which one your flight leaves from.',
      'Malaysia drives on the left, like India, and the road signs are in Malay and English. "Jalan" is road, "Lebuhraya" is highway, "Awas" means caution.',
    ],
  },
  {
    id: 'weather',
    icon: 'sunset',
    title: 'Weather & when to go',
    points: [
      'It is 30–33°C and humid every single day of the year. There is no cool season; there is only a wetter one.',
      'For this route — Langkawi and the west coast — the dry window is December to March. August to October is the wettest, with afternoon storms most days.',
      'Rain arrives fast, falls very hard, and usually stops within the hour. Plan around it rather than cancelling: it is why the Islamic Arts Museum sits on Day 6.',
      'Haze from regional fires can affect KL between June and September. Check the API index if you are travelling then.',
      'Avoid Chinese New Year (Jan/Feb), Hari Raya Aidilfitri and the Malaysian school holidays if you can — Langkawi hotel rates double and the ferries fill.',
    ],
  },
  {
    id: 'etiquette',
    icon: 'handshake',
    title: 'Mosques, temples and manners',
    points: [
      'Malaysia is a Muslim-majority country with large Chinese, Tamil and indigenous communities. Modest dress — covered knees and shoulders — is the safe default at any religious site and in smaller towns.',
      'Masjid Putra and Masjid Jamek both lend robes to visitors and both close to non-Muslims during prayer times, and for most of Friday.',
      'Shoes off at mosques, Hindu temples and Chinese temples, and at many guesthouses. Wear slip-ons all week.',
      'Give and receive with the right hand, or both. Eating with your right hand at a banana-leaf meal is normal and welcome.',
      'Alcohol is legal and widely sold but not everywhere — many Malay restaurants do not serve it, and it is heavily taxed outside duty-free Langkawi.',
    ],
  },
  {
    id: 'safety',
    icon: 'shield',
    title: 'Safety, scams and health',
    points: [
      'Malaysia is a very easy country to travel. The realistic risks are pickpocketing in crowded markets and motorcycle bag-snatching — wear the bag on the pavement side.',
      'The macaques at Batu Caves and on the Gunung Raya road will take food out of your hands. No plastic bags, no visible snacks.',
      'Dengue is present year-round. Repellent morning and evening matters more than any other health precaution here.',
      'Tap water is treated but not usually drunk unboiled; bottled water is RM2. Ice in restaurants and hawker centres is factory-made and fine.',
      'Box jellyfish are an occasional hazard on west-coast beaches, mainly April to October. Obey the lifeguard flags at Cenang and note where the vinegar posts are.',
      'Emergency number is 999. Private hospitals in KL are excellent and will want your insurance details up front.',
    ],
  },
]

// Rumi (the Latin spelling) is what you will actually read and say.
// The Jawi on the site is decorative and cultural, not a transliteration aid.
export const phrases = [
  { ms: 'Selamat pagi', say: 'suh-LAH-mat PAH-gee', en: 'Good morning' },
  { ms: 'Terima kasih', say: 'tuh-REE-muh KAH-seh', en: 'Thank you' },
  { ms: 'Sama-sama', say: 'SAH-muh SAH-muh', en: "You're welcome" },
  { ms: 'Berapa harga?', say: 'buh-RAH-puh HAR-guh', en: 'How much is it?' },
  { ms: 'Mahal sangat', say: 'MAH-hal SAH-ngat', en: 'That is too expensive' },
  { ms: 'Sedap!', say: 'suh-DAP', en: 'Delicious!' },
  { ms: 'Tandas di mana?', say: 'TAN-das dee MAH-nuh', en: 'Where is the toilet?' },
  { ms: 'Saya tak faham', say: 'SAH-yuh tak FAH-ham', en: "I don't understand" },
  { ms: 'Tak nak pedas', say: 'tak nak puh-DAS', en: 'Not spicy, please' },
  { ms: 'Saya tak makan daging', say: 'SAH-yuh tak MAH-kan DAH-ging', en: "I don't eat meat" },
  { ms: 'Tolong', say: 'TOH-long', en: 'Please / help me' },
  { ms: 'Jom!', say: 'jom', en: "Let's go!" },
]

export const foodBucket = [
  {
    city: 'Langkawi',
    wiki: ['Ikan bakar'],
    dish: 'Ikan Bakar',
    roots: 'Malay',
    price: '₹840 / whole fish',
    why: 'You pick the fish off the ice yourself. It goes onto charcoal wrapped in banana leaf with sambal packed into the cuts, and comes back blackened at the fins.',
  },
  {
    city: 'Langkawi',
    wiki: ['Roti canai'],
    dish: 'Roti Canai',
    roots: 'Indian-Muslim',
    price: '₹55 a piece',
    why: 'Dough slapped against a steel counter until it is translucent, folded, griddled, and served with dhal and curry to dunk. The national breakfast, sold from five in the morning.',
  },
  {
    city: 'Langkawi',
    wiki: ['Asam laksa', 'Laksa'],
    dish: 'Laksa Kedah',
    roots: 'Malay (northern)',
    price: '₹230',
    why: 'Thick rice noodles in a sour, fishy, tamarind-heavy broth with shredded mackerel, torch ginger and mint. Northern Malaysia’s version is fiercer than the coconut laksa you know.',
  },
  {
    city: 'Kuala Lumpur',
    wiki: ['Nasi lemak'],
    dish: 'Nasi Lemak',
    roots: 'Malay',
    price: '₹85 wrapped',
    why: 'Rice steamed in coconut milk and pandan, with sambal, fried anchovies, peanuts, cucumber and egg. Wrapped in banana leaf and newspaper it costs RM4 and is better than the plated version.',
  },
  {
    city: 'Kuala Lumpur',
    wiki: ['Hokkien mee'],
    dish: 'KL Hokkien Mee',
    roots: 'Hokkien Chinese',
    price: '₹500',
    why: 'Fat yellow noodles braised black in dark soy over a charcoal wok, with pork, squid and cubes of crisped lard. Nothing like the Penang soup of the same name.',
  },
  {
    city: 'Kuala Lumpur',
    wiki: ['Bak kut teh'],
    dish: 'Bak Kut Teh',
    roots: 'Hokkien Chinese',
    price: '₹480',
    why: 'Pork ribs simmered for hours with garlic, star anise and dark soy until the meat gives up. Invented in Klang for dock workers who needed breakfast at four in the morning.',
  },
  {
    city: 'Kuala Lumpur',
    wiki: ['Satay'],
    dish: 'Satay',
    roots: 'Malay / Javanese',
    price: '₹420 for ten',
    why: 'Skewers over charcoal with a peanut sauce that has chilli and tamarind in it, served with compressed rice cubes, cucumber and raw onion. Ten sticks is a starter, not a meal.',
  },
  {
    city: 'Kuala Lumpur',
    wiki: ['Banana leaf rice'],
    dish: 'Banana Leaf Rice',
    roots: 'Tamil',
    price: '₹400',
    why: 'Rice onto a leaf, three vegetables, rasam, papadam, a curry, and refills brought round unasked. Fold the leaf towards you when you finish — folding it away says you did not enjoy it.',
  },
  {
    city: 'Kuala Lumpur',
    wiki: ['Cendol'],
    dish: 'Cendol',
    roots: 'Peranakan',
    price: '₹120',
    why: 'Shaved ice, coconut milk, palm sugar and green pandan jelly worms. The correct thing to eat at three in the afternoon when it is 33°C and you have stopped being able to think.',
  },
]

export const packing = [
  {
    group: 'Documents',
    items: [
      'Passport (6 months validity)',
      'MDAC confirmation, screenshotted',
      'Printed hotel bookings',
      'Return ticket on your phone',
      'Travel insurance PDF',
      'Photocopy of passport, kept separately',
      'Rental car voucher + driving licence',
    ],
  },
  {
    group: 'Tech',
    items: [
      'eSIM installed and tested at home',
      'Type G (UK 3-pin) adapter — India’s plugs do not fit',
      '20,000 mAh power bank (carry-on only)',
      'Charging cables ×2',
      'Grab app with a card added',
      'Offline map of Langkawi downloaded',
      'Dry bag or waterproof phone pouch for the Kilim boat',
    ],
  },
  {
    group: 'Clothing',
    items: [
      'Light cotton and linen only — it is 33°C and humid all week',
      'Long trousers or a long skirt for the mosques and Batu Caves',
      'A scarf or sarong that covers shoulders',
      'Slip-on shoes — you will remove them a dozen times',
      'Walking shoes for the 272 steps and the 638 at Telaga Tujuh',
      'A light layer for over-air-conditioned malls and trains',
      'Rain shell — tropical downpours arrive in four minutes',
    ],
  },
  {
    group: 'Health & misc',
    items: [
      'Mosquito repellent (dengue is year-round)',
      'Reef-safe sunscreen SPF 50',
      'Hat and sunglasses for the boat',
      'Personal medication + prescription copy',
      'Refillable 1 L flask',
      'RM200–300 in cash from day one',
      'Tissues and hand sanitiser for hawker stalls',
    ],
  },
]

export const faq = [
  {
    q: 'Is ₹85,000 genuinely enough for 7 days in Malaysia including flights?',
    a: 'Yes, comfortably, and this plan proves it line by line. Flights take ₹24,000, leaving ₹61,000 for the ground — which goes a long way in a country where a superb meal is ₹250 and a train ride is ₹60. The seven days above spend ₹53,920 on the ground; add the flights, insurance and eSIM and the plan lands at ₹80,220, leaving ₹4,780 of real buffer inside ₹85,000. The two things that will blow it are booking flights late and taking Grab everywhere in Langkawi instead of renting a car.',
  },
  {
    q: 'Do Indians need a visa for Malaysia right now?',
    a: 'Not at the moment. Malaysia has waived visas for Indian passport holders for stays of up to 30 days, and has extended that waiver in stages rather than making it permanent — so confirm it with the High Commission 10–12 weeks before you fly. What you absolutely do need, visa or not, is the MDAC: the free Malaysia Digital Arrival Card, submitted online within three days of arrival. It is the single most common thing Indian travellers get caught out by at KLIA.',
  },
  {
    q: 'Is three days too long in Langkawi? Should I do Penang instead?',
    a: 'Three days is right if you want the Kilim mangroves and the cable car without rushing either — those two alone are a day and a half. Langkawi is for landscape; Penang is for food and street-level history, and George Town would need its own three days rather than a bolt-on. If you are the kind of traveller who gets restless on a beach by lunchtime on day two, swap Langkawi for Penang and keep the KL half exactly as written — the flights cost roughly the same.',
  },
  {
    q: 'Do I really need to rent a car in Langkawi?',
    a: 'Effectively, yes. There is no meaningful public transport on the island, Grab coverage thins out badly in the north and east — exactly where Kilim, Tanjung Rhu and Gunung Raya are — and you can wait 20 minutes for a car at the Kilim jetty. A Myvi is RM85 a day, the roads are empty, and Malaysia drives on the left like India. If you do not drive, budget an extra ₹4,000–5,000 for ride-hailing and expect to hurry.',
  },
  {
    q: 'When is the best time to go?',
    a: 'December to March, for the west coast. That is the dry window for both Langkawi and KL, with the clearest days for the cable car and the calmest sea for the Kilim boat. August to October is the wettest stretch on this side of the peninsula. Inside the good window, avoid Chinese New Year, Hari Raya and the Malaysian school holidays — Langkawi hotel rates double and the good rental cars vanish.',
  },
  {
    q: 'Is it safe, especially solo or for women?',
    a: 'Malaysia is one of the easier countries in Asia to travel alone, including for women. Violent crime against tourists is rare, and walking around Bukit Bintang or Cenang at night is completely normal. The practical risks are petty: bag-snatching from motorcycles (wear the bag on the pavement side), overpriced street taxis (use Grab), and the macaques at Batu Caves. Dressing modestly outside the beach and the malls is a courtesy rather than a rule, and it makes everything smoother.',
  },
  {
    q: 'Can I do this itinerary vegetarian?',
    a: 'More easily than almost anywhere else in Southeast Asia. Malaysia has a large Tamil population, so pure-vegetarian restaurants are everywhere — banana leaf rice, dosa, idli, thosai — and Brickfields in KL is effectively a vegetarian district. Chinese Buddhist vegetarian restaurants are common too. The phrase you want is "saya tak makan daging" (I don’t eat meat); be aware that many Malay and Chinese dishes use shrimp paste (belacan) or anchovy stock, so add "tak ada belacan" if that matters.',
  },
  {
    q: 'Is Langkawi’s duty-free actually worth it?',
    a: 'For chocolate, genuinely yes — Toblerone, Ferrero and Cadbury run at roughly a third of Indian prices, and it is the one thing worth filling a bag with. Kitchenware and perfume are decent value. Alcohol is very cheap but India only lets you bring back two litres per adult, so the bargain has a hard ceiling. Do the buying on your last morning, not on Day 1 — carrying six kilos of chocolate up a mountain in 33°C is a mistake you only make once.',
  },
]

export const gallery = [
  { wiki: ['Langkawi Sky Bridge', 'Machinchang'], caption: 'A 125 m curve, hung at 660 m', city: 'Langkawi' },
  {
    wiki: ['Kilim Karst Geoforest Park', 'Langkawi'],
    caption: 'Limestone older than the Himalaya',
    city: 'Langkawi',
  },
  { wiki: ['Pantai Cenang', 'Langkawi'], caption: 'The strip, at the hour it earns', city: 'Langkawi' },
  { wiki: ['Tanjung Rhu', 'Langkawi'], caption: 'Where the sea goes out for a kilometre', city: 'Langkawi' },
  { wiki: ['Kuah, Langkawi', 'Langkawi'], caption: 'Kuah, and the eagle the island is named for', city: 'Langkawi' },
  { wiki: ['Petronas Towers'], caption: '451.9 m, and the bridge between them', city: 'Kuala Lumpur' },
  { wiki: ['Batu Caves'], caption: '272 steps, repainted in 2018', city: 'Kuala Lumpur' },
  { wiki: ['Putra Mosque', 'Putrajaya'], caption: 'Rose granite, standing in a lake', city: 'Putrajaya' },
  {
    wiki: ['Petaling Street', 'Chinatown, Kuala Lumpur'],
    caption: 'Chinatown, under the green roof',
    city: 'Kuala Lumpur',
  },
  {
    wiki: ['Sultan Abdul Samad Building', 'Merdeka Square, Kuala Lumpur'],
    caption: 'Where the flag went up in 1957',
    city: 'Kuala Lumpur',
  },
  { wiki: ['Jamek Mosque'], caption: 'The muddy confluence that named a capital', city: 'Kuala Lumpur' },
  { wiki: ['Merdeka 118'], caption: '678.9 m — only one building is taller', city: 'Kuala Lumpur' },
]
