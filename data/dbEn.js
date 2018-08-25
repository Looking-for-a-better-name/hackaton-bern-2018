// 0: electrical (an electrician required)
// 1: water (plumber required) or the carpenter
// 2: vandalism (police required)
// 3: other/ anders (no idea.. Guub guy required to asses the damage)
// cat 4 is pets control... minor
module.exports = [
  { dmg: 'my house was inundated', desc: 'water came into my house', cat: 1 }, // extra added by Alec,
  {
    dmg: 'Electricity Breaks Elektra Fraubrunnen',
    desc: 'The electrician replaced the dimmers with switches and installed the dimmers after rectifying the fault on the electronic network. ',
    cat: 0,
  },
  {
    dmg: 'Graffiti`s on flower trough at the parking lot.',
    desc: 'We have obtained an offer for removal and will file a complaint with the police.',
    cat: 2,
  },
  {
    dmg: 'thunderstorm in the afternoon has damaged sun blind',
    desc: '',
    cat: 0,
  },
  {
    dmg: 'An electrical short on the pinball box has led to a smoldering fire. The fire department, alarmed by the smoke alarm, was on-site and was able to extinguish the fire before it could spread to other equipment. However, four doors were broken. ',
    desc: 'Repairing the broken doors',
    cat: 0,
  },
  {
    dmg: 'Brown spots at the business premises Pink Elefant GmbH. At the tenant above, the old screw connections were loose during the kitchen drain - hence water leakage. ',
    desc: 'order plumbing',
    cat: 1
  },
  {
    dmg: 'Bullet hole in window 5th floor west side room 3502, police report available.',
    desc: 'The disc has already been replaced. ',
    cat: 3,
  },
  {
    dmg: 'unknown, we suspect as the cause of one of the winter storms 2017/18 (date if is an estimate)',
    desc: 'the corner gable made of metal is bent and no longer completely covers the roof',
    cat: 3,
  },
  {
    dmg: 'Storm gust damaged articulated arm sun blinds',
    desc: 'Offer from Schenker Storen requested',
    cat: 3,
  },
  {
    dmg: 'Sun blind has broken and fallen down',
    desc: '',
    cat: 3,
  },
  {
    dmg: 'retaining wall invaded',
    desc: 'Offer created Läderach Weibel AG Please visit on the spot',
    cat: 3,
  },
  {
    dmg: 'water damage during curing phase of the feed table coating by thunderstorms',
    desc: 'According to the supplement',
    cat: 1
  },
  {
    dmg: 'water entry from outside into laundry room',
    desc: 'Search for cause and put a lock against the water Unfortunately, I could not enter water damage on the pad. The search for the cause of the damage is in progress. ',
    cat: 1,
  },
  {
    dmg: 'Following the heavy rain end of January 2018, water entered the building.',
    desc: '',
    cat: 1,
  },
  {
    dmg: 'In 2017, all electric cables were replaced. We suspect that the inserted pipes were moved. ',
    desc: 'Sanitary repaired the problem after fixing the damage (25.7.2018). ',
    cat: 0,
  },
  {
    dmg: 'hail damage',
    desc: '',
    cat: 1
  },
  {
    dmg: 'In the storm, slat blind was damaged',
    desc: 'The company Griesser will make a recording of the damage on 22.08.2018',
    cat: 1
  },
  {
    dmg: 'pumping out / drying.',
    desc: '- Drainage / drying by plumbing - Order to repair / replace the ventilation system 13 June 2018 & 03 July 2018 (both times excessive rainfall) - Report by the refrigeration company on repair or replacement of the cooling system is awaited. - Invoice plumbing for draining, drying is available ',
    cat: 1,
  },
  {
    dmg: 'Graffiti by strangers.',
    desc: 'The painter has already been summoned to remove the graffiti.',
    cat: 2,
  },
  {
    dmg: 'Graffiti by strangers.',
    desc: 'The painter has already been commissioned to remove it.',
    cat: 2,
  },
  {
    dmg: 'thunderstorm',
    desc: 'above mentioned carpet on balcony broken plastering works by owner to absorb water by owner',
    cat: 2,
  },
  { dmg: 'Lightning strike', desc: '', cat: 0 },
  {
    dmg: 'ant infestation',
    desc: 'The exact date of the event is not known to us, as we do not know when the ants were in the column.',
    cat: 4,
  },
  {
    dmg: 'Due to a strong storm, we had a water entry into the basement premises, because the sewer manhole could not remove the amount of water.',
    desc: 'The water was wiped away by a rental party, also a drying device was set up by the company Zigerlig Bautrocknung AG. The water was wiped away by a rental party. The cellar premises had to be dried out. Also, two doors (only door leaves) had to be replaced by the carpenter, since these are swollen by the water.',
    cat: 1,
  },
  { dmg: 'storm with hail', desc: '', cat: 1 },
  {
    dmg: 'ridge tile was thrown by strong gusts (Stormwind Burglind) on the roof',
    desc: '',
    cat: 3, // roofer required
  },
  {
    dmg: 'After the holidays, Frau Kräuchi realizes that water has run from the wall into the shop and that it smells bad in the shop.',
    desc: 'Wood paneling company',
    cat: 3, // carpenter
  },
  { dmg: 'hail', desc: '', cat: 1 },
  {
    dmg: 'heavy storm with hail in the late afternoon of 1 August',
    desc: 'Sliver removed from lawn The plumber was on-site today, August 3, explaining how and what needs to be repaired or replaced.',
    cat: 1,
  },
  {
    dmg: 'Unfortunately a ball flew to the front door of our children and damaged the door glass.',
    desc: '',
    cat: 2
  },
  {
    dmg: `In the kitchen, water leaked out of the dishwasher's water pipe and hit the floor. The water stood there overnight, so that the parquet on an area-about the size of DIN-A2- has taken damage. He has shrunk and cracks have arisen, which no longer close despite maintenance measures such as oils.`,
    desc: 'Water actively dried, no relevant costs incurred. 079-7870098. ',
    cat: 1,
  },
  {
    dmg: 'By UT a \\ "Chrischichracher \\" was placed in the mailbox and detonated. Mailbox broken. ',
    desc: '',
    cat: 2
  },
  {
    dmg: 'The kneading putty fell down on the glass ceramic plate while drying.',
    desc: '',
    cat: 3,
  },
  {
    dmg: 'Water in the basement due to a backwater of the sewer system. The plumber suspected that a sewer cleaning had taken place in the area. ',
    desc: 'Piketteinsatz Müller Haustechnik',
    cat: 1,
  },
  {
    dmg: 'submerged by strong thunderstorms',
    desc: 'Company Friedli-Caprani is called immediately. It really was not a landslide. ',
    cat: 1,
  },
  {
    dmg: 'At the check-in it was noticed that there is a stain around the toilet. Measurements made by Zigerlig have shown that it is moisture. ',
    desc: 'Zigerlig AG, Moisture Measurement Bill + Künzi AG, WC Disassembling, looking for and remedying the cause of the damage The sanitary ware will disassemble the WC immediately and determine the cause of the damage.',
    cat: 1,
  },
  {
    dmg: 'On the 1st of August, a hail storm descended over Säriswil with strong storm gusts. Our sun blind was outside during our absence. Actually, this should have automatically retract due to sensors. However, when we got home during the storm, the store had already collapsed. It had formed a large water bag and the cross strut had escaped. This damaged the entire structure. ',
    desc: `The water has been drained and the store retracted as good as possible in the damaged state to avoid further damage. In addition, the sun sensor has been switched off to avoid re-extending the damaged store. Today, on August 3, 2018, a supplier's technician will come by and assess the damage and estimate the effort and costs.`,
    cat: 1,
  },
  {
    dmg: 'harassment by insects',
    desc: 'Pest Control Company Orders',
    cat: 4,
  },
  { dmg: 'Unknown people sprayed the facade.', desc: '', cat: 2 },
  {
    dmg: 'This case has already been reported under claim number 2342797-A / 2342797-B. See appropriate correspondence from your side (dd 7.6.2018). Following the repair of the broken articulated arm, it has been found that the engine has also broken down. Therefore, this now had to be replaced. According to your letter of 7.6.2018, I hereby report this damage. ',
    desc: '',
    cat: 3,
  },
  {
    dmg: 'Found roofing scraps on the terrace on July 31st. On the 2nd of August then the entrance for the marten was found. ',
    desc: 'roofer Bruno Reber informs Bowil, arrives on Monday, August 6, 2018',
    cat: 3,
  },
  { dmg: 'hail', desc: '', cat: 1 },
  {
    dmg: 'When it rains, a backwater has formed in the inner Dachkänel. The Dachkänel has filled up and the jammed water has run through a leak through the whole house to the basement. ',
    desc: 'In the summer a regular inspection of the Dachkänel. In winter this is too dangerous. The leak could not be located until today. The problem can occur again at any time. If there is nobody at home who quickly detects the ingress of water, there can be a lot of damage in the house. ',
    cat: 1,
  },
  {
    dmg: 'Due to the fault message, the service technician of Schindler AG has determined that a repair was necessary on a component due to external influences (lightning strike)',
    desc: 'Error message has been fixed',
    cat: 0
  },
  { dmg: 'Grafitti', desc: '', cat: 2 },
  {
    dmg: 'Probably a firecracker flew to the sun gates.',
    desc: '',
    cat: 3
  },
  {
    dmg: 'Wasp Nests under Storen',
    desc: 'Wasp nests have to be evicted.',
    cat: 4
  },
  {
    dmg: 'Sprayed Objects on Sports Hall Terrain.',
    desc: 'Reference to complaint for damage to property of the cantonal police Berne dated 18.7.2018',
    cat: 2,
  },
  {
    dmg: 'A gust of wind has torn down the sun blinds.',
    desc: 'Sun blind dismantled by hand. --- ',
    cat: 3
  },
  { dmg: 'front door sprayed', desc: '', cat: 2 },
  {
    dmg: 'Consequential damage after flood in the cellar (Tielkühlschrank stood in the water); now left on 31.07.2018 ',
    desc: '',
    cat: 1
  },
  { dmg: 'Leaking floor drain', desc: '', cat: 1 },
  {
    dmg: 'morning 0830 to 0930 several lightning strikes in close proximity (lightning to bang under 1 second)',
    desc: 'Elektro Etavis Beutler Functional check Etavis Beutler Hasle-Rüegsau Apparatus control on the 31st of July, mechanical parts in order. Today 2.8.2018 renewed malfunction. According to information Etavis control must be replaced. Is repair still worth it? ',
    cat: 0,
  },
  {
    dmg: `Last August - during the storm that swept through Rubigen on 1.8.2017, Ms. Jungi's barbecue was overturned and damaged some floor slabs on her balcony.`,
    desc: '',
    cat: 3,
  },
  {
    dmg: 'After a strong thunderstorm, the under-roof became wet. Water pushes under the bricks at two skylights. ',
    desc: 'Find a leak, find faulty bricks, control the sheet connections. Invoice in the supplements. ',
    cat: 1,
  },
  { dmg: 'Spreyereien', desc: '', cat: 2 },
  { dmg: 'Storm Deep Friederike Damaged 2 Stores', desc: '', cat: 3 },
  { dmg: 'Spayerei', desc: '', cat: 2 },
  {
    dmg: 'the sun blinds are necessary at these temperatures. When a rain cell unexpectedly blew up overnight, it soaked all the stuff. In the morning the telescopic arms were broken. ',
    desc: '',
    cat: 1
  },
  {
    dmg: 'Strong gusts blew bricks from the barn roof.',
    desc: 'Cover with new bricks. ',
    cat: 3
  },
  {
    dmg: 'Short-term strong gusts of wind have led to the destruction of the sun blinds',
    desc: 'dismantling sun blinds',
    cat: 3
  },
  { dmg: 'storm blew away brick', desc: ' ', cat: 3 },
  {
    dmg: `On Tuesday, July 3, 1818, due to torrential rains that lasted for hours, a part of our basement was flooded. We immediately asked the roofer Kohli, Mühleberg to check the situation of the roof channel. He advised us to flush the channel of the roof water with a pipe cleaning company. This was done on the same day by the company Rohrreinigungen Flückiger. On the same day, at the request of the company Kohli Roofing, a makeshift roof drain was created in the afternoon. Since the line was too wet, it was agreed to check the line for damage in a few days with the camera. This camera recording was carried out on 9.07.2018 by the company Flückiger. We were made aware of the company InnoService, with which we were able to make an appointment on 31.07.2018. On 31.07.18 the line was again inspected with a camera by the company InnoService. We have agreed with InnoService's managing director that he will send us an offer for a "pipe in pipe" refurbishment. May we ask you if it is possible for GVB to pay the costs? `,
    desc: 'Have a temporary roof drain',
    cat: 1,
  },
  {
    dmg: 'Wastewater pipe break at WC.',
    desc: 'Open the wall, point it off, replace the defective pipe. Damage has already been discussed with Mr. Durband and reported. Mr. Durband has all the pictures of the damage. ',
    cat: 1,
  },
  {
    dmg: 'Mr Brunner wanted to transport a few wooden boards from the civil defense room to the garage. Near the glazing to the multi-family house Fuhrenweg 7 C slipped off a board and slammed into the glazing ',
    desc: '',
    cat: 3
  },
  {
    dmg: 'During the spin, the washing machine made a lot of noise, then came an error message, which made the formation of a technician necessary,',
    desc: 'Replacement of the washing machine',
    cat: 3,
  },
  {
    dmg: 'stone basket fence torn down and or overturned',
    desc: '',
    cat: 3,
  },
  {
    dmg: 'Stormwind The strong storm damaged the corrugated eternite roof, which was probably struck invisibly by an earlier hail event',
    desc: 'So far no offers have been obtained. It was intended to visit the situation with the claims expert. ',
    cat: 1
  },
  {
    dmg: 'pipe cleaner wanted to flush pipe from the lavabo and broke through. Due to the renovation of the kitchen, this side pointed towards the bathroom. If the leak is not found, the bathtub must be cut out. ',
    desc: 'Sanitary and pipe cleaners were able to wipe away the water on the 2nd floor. ',
    cat: 1
  },
  {
    dmg: 'a brief violent thunderstorm, accompanied by storm gusts moved across the Hünibach region. The Sonennstore on the balcony of the party Otziger was not quite moved. A gust of wind damaged the fabric. The linkage suffered no damage ',
    desc: '',
    cat: 3 // wind
  },
  {
    dmg: 'Lightning, Heater Defective (Electronics)',
    desc: 'Repair',
    cat: 0,
  },
  {
    dmg: 'Leaking of rusty liquid from the defective boiler.',
    desc: 'Are we insured for a new coat of paint?',
    cat: 1,
  },
  {
    dmg: 'Flooding last weekend (July 27th - 29th) was used to fill parts of the property and the groundwater pump shafts with mud.',
    desc: '- Pumping and emptying the shafts - Cleaning the pumps and heat exchangers - Checking the operation of the electrical appliances - Cleaning up the premises',
    cat: 1,
  },
  {
    dmg: 'On July 28, 2018, a violent thunderstorm has occurred in the morning. At our neighbors - family Wüthrich struck a lightning. ',
    desc: 'Maybe the electrical system in the whole house would need to be checked by an electrician for any damage',
    cat: 0,
  },
  {
    dmg: 'A roof tile broke loose from the roof at the drip hole and slid down into the garden bed.',
    desc: 'A roofer was advised by phone, since we were on vacation. The damage was repaired on the next day 18.07.18 by the company Bauimpuls AG in Heimberg. ',
    cat: 3 // roofer,
  },
  {
    dmg: 'Leak on the roof. Water was noticed in the bath because the blanket got wet. ',
    desc: 'I have to tear everything out, which is wet, the mold is everywhere in the wood. The roof must have been leaking for a long time .... but not noticed because the water in the substructure has found its way. ',
    cat: 1,
  },
  {
    dmg: 'Blinds damaged by hail',
    desc: 'The blinds were placed in 2014. I was on vacation on the day of hail',
    cat: 3,
  },
  {
    dmg: 'water penetrates through ceiling in kitchen 1st floor',
    desc: 'Find the cause of the water breakthrough. Sanitary technician was on site, he is also not sure exactly where a defect. The fact is, in the toilet cistern was a valve not i.O. and was replaced. Company for dehumidification has been called. ',
    cat: 1,
  },
  { dmg: 'hail', desc: '', cat: 1 },
  {
    dmg: 'flood UG and EG',
    desc: 'Pumping out the UGS An employee of the GVB (Mr. Born) was already on the last Saturday',
    cat: 1
  },
  {
    dmg: 'Brand after Steamtram',
    desc: 'Deleted with water hose in ridges Steam tram has released soot particles onto dry cypresses. These have ignited in the crown and triggered a fire. The fire department of the city of Bern has made a rapport. ',
    cat: 3, // FIRE
  },
  {
    dmg: 'Damage to window blinds by storm',
    desc: 'The tenants, an elderly couple, could not name the exact date of the damage, but it happened during the storm in early June 2018.',
    cat: 3 // shouters
  },
  {
    dmg: 'water pipe breakage of the supply line outside.',
    desc: `emergency supply via hydrants We are provided by the IB Langenthal with an emergency line at the moment. Have us on Saturday 28.07. by phone with the Pikettmonteur agreed that we wait until Monday, if possible. But on Sunday we had to let the mechanic come because the water in the basement sewer rose. Then it remained constant and we waited until Monday, where an emergency connection from the nearby hydrant was placed by the company IBL. It needs a new pipe and construction machinery. But it's best to contact IBL immediately.`,
    cat: 1,
  },
  {
    dmg: 'The facade of the property was sprayed',
    desc: 'The removal of the sprayers was commissioned by our painter, Stöckli & Partner AG. ',
    cat: 2,
  },
  {
    dmg: 'The Simme has overflowed by the expiration of a glacier lake.',
    desc: 'clearing up the mud, wood and gravel deposit. ',
    cat: 1,
  },
  {
    dmg: 'A wasp nest was found on the lower roof.',
    desc: 'Alder vermin and pest control was awarded the contract for the removal and control of wasps. The removal of the nest and the fight took place immediately. ',
    cat: 4,
  },
  {
    dmg: 'Two wasp nests were discovered under the glass roof by the sun blind.',
    desc: 'Alder vermin and pest control was deployed directly. The wasp nests were directly removed by Mr. Allemann and the wasps fought. ',
    cat: 4,
  },
  {
    dmg: 'Defective backwash valve causes damage in the form of exceptional water consumption of 700 m3.',
    desc: `Water treatment plant shut down and replaced by a new one. On the basis of the last water meter reading from 14.4.2018 we noticed an exceptionally high water consumption. An estimated 4-5 times the last years, resulting in an additional water consumption of 700 m3 more than the average of the last three years, resp. damage of CHF 3 \ "360.- for water and wastewater costs. Of this, SWG has acquired a stake of CHF 272.-. After an SWG employee's visit, the cause, in the form of a defective backwash valve at the water treatment plant, could be found, but unfortunately much too late; more than 700 m3 had already been used up. The defective system was then replaced by us by a new system. We would therefore like to ask you politely whether this damage, or part of the damage, will be taken over by you. Sincerely, Marcel Wiederkehr`,
    cat: 4,
  },
  {
    dmg: `The feces pump in the basement is no longer off and in the toilet in the studio, a pool of water has formed. This could be cleaned immediately. The device must but gem. Fa. Bacher AG, plumbing, Thun Herren Lüthy and Mathys be replaced. You ask me to procure the device like the previous one in Sanitätshop.de. `,
    desc: `Shut off the water supply through San. Inst. and disconnect all feeds to the pump. The delivery company plumbing and heating shop Darmstädter Strasse 8 64395 Brensbach / D has delivered me the wrong type, which has now been done with return and retransmission and customs problems by 27.7.18. Today, 30.7.18 the pump will be connected. `,
    cat: 1,
  },
  {
    dmg: 'Wasp nest behind the facade',
    desc: 'Fire Brigade Oberdiessbach advised. Running commander will contact a specialist fire department to assess the damage. The bill will be put to us and we would then have to forward it to the GVB. ',
    cat: 4,
  },
  {
    dmg: 'Hail damage via the above mentioned dato. Hail damage due to egg sized hailstones. Regional decline. ',
    desc: '',
    cat: 1,
  },
  {
    dmg: 'bricks are shifted at wind exposed location, see attached photos',
    desc: 'The event date is the date of discovery of the damage. Since cottage we are rarely here. Probable loss of damage between Nov. 2017 and Jul. 15, 2018. We are still present until 10.8.2018. ',
    cat: 3, //wind
  },
  {
    dmg: 'glass panel in the living room EC leap in through tension (sun)',
    desc: '',
    cat: 3,
  },
  {
    dmg: 'Due to the heavy rain in the night of the 02. to the 03. July, the rain water at my parking lot no longer drained; I then emergency called \\ "RohrMax \\". Unfortunately, it could no longer be prevented that the pent-up water penetrated into the air-raid shelter. The water in the air-raid shelter had to be pumped out and the clogged up pipe from the storm was cleaned. I was able to remove all furniture from the air raid shelter, so at least the mobile',
    desc: '',
    cat: 1,
  },
  {
    dmg: 'After the facades of the toilet were cleaned at the beginning of July 2018, graffiti was re-erected in the period from 11.07.2018 - 24.07.2018.',
    desc: '',
    cat: 1
  },
  {
    dmg: 'On the 3rd of July in the morning heavy rain with gusts of wind fell in Bern, causing flooding in the quarter.',
    desc: 'We first tried to pick up the water but without success, then we called the fire department. It was also organized a water suction by the company Honegger. In addition, Pro Rohr AG had to rinse and clean the floor and roof drain pipes with high pressure.',
    cat: 1
  },
  {
    dmg: 'Damage to the garden / lawn by wild animals.',
    desc: 'The lawn has holes of hoof marks (probably deer). Furthermore, the lawn and plants were eroded by uprooting. ',
    cat: 3 // garden
  },
  {
    dmg: 'The mold was discovered in the basement.',
    desc: 'A construction expert was summoned. This will visit the damage on 31.8.18 on site and get offers for the renovation. ',
    cat: 3,
  },
  { dmg: 'flooding', desc: '', cat: 1 },
  { dmg: 'water interruption', desc: '', cat: 1 },
  { dmg: 'The tenant, Mr. Brian, has informed us that he has discovered 2 wasp nests.', desc: '', cat: 4 },
  {
    dmg: 'backwater through faeces',
    desc: 'Damage record, various moisture measurements. Room and surface drying Unfortunately we have failed to register the water damage in time. ',
    cat: 1
  },
  { dmg: 'graffiti on facade', desc: 'painter was commissioned', cat: 2 },
  {
    dmg: 'Plug-in seal was not inserted correctly in the siphon connection angle and the insertion depth was very tight',
    desc: '-Lecksuche -New washbasin siphon mounted -Fussleisten dismantled -Opening and drilling work for drying -Drying equipment set -Drying immediately started',
    cat: 1,
  },
  {
    dmg: 'During the hail storm, the roof of the conservatory was damaged by the Beer family. At a point of impact, water penetrates, which can cause the glass to burst in frost. ',
    desc: '',
    cat: 1,
  },
  {
    dmg: 'Gutter / Water Outlet -> follow more info',
    desc: 'Find and fix Run place Follow after',
    cat: 1,
  },
  {
    dmg: 'Fire during renovation / renovation school building in the attic room. The fire is ignited in a pavement with wood. The fire could extinguish the fire. ',
    desc: '',
    cat: 1
  },
  {
    dmg: 'The local shop was damaged by the heavy thunderstorm with hail.',
    desc: '',
    cat: 3,
  },
  { dmg: '3206', desc: 'Replacement was commissioned. ', cat: 3 },
  {
    dmg: 'storm with strong wind and hail against the west facade',
    desc: '',
    cat: 1
  },
  { dmg: 'Heavy thunderstorm with hailstorm', desc: '' , cat: 0 },
  { dmg: 'water pushed through chimney', desc: '', cat: 1 },
  { dmg: 'glass breakage', desc: '', cat: 3 },
  {
    dmg: 'Due to the summer thunderstorm (with hailstones) the lamellar gate was damaged.',
    desc: '',
    cat: 3,
  },
  {
    dmg: 'Large wasp nest found at Sonnenstore. Cost of removal (removed by fire department) and damage to the sun blind (large hole) ',
    desc: 'removal of wasp nest (fire brigade)',
    cat: 4
  }

]
