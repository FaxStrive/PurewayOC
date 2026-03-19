export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  image: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'orange-county-water-quality',
    title: 'Orange County Water Quality: What Is Really Coming Out of Your Tap?',
    description: 'Orange County sources its water from groundwater basins, Colorado River imports, and State Water Project deliveries. Each source brings different contaminants. Here is what local testing data reveals.',
    date: 'March 14, 2026',
    author: 'PureWay OC Team',
    category: 'Water Quality',
    image: '/images/blog/oc-water-quality.jpg',
    content: `
      <h2>Where Does Orange County's Water Come From?</h2>
      <p>Orange County draws its water from three primary sources managed through the Orange County Water District (OCWD) and Municipal Water District of Orange County (MWDOC). Approximately 75% of supply comes from the vast Orange County Groundwater Basin — one of the largest groundwater supplies in California — while the remainder is imported from Northern California via the State Water Project and from the Colorado River via the Metropolitan Water District of Southern California.</p>
      <p>OCWD operates the Groundwater Replenishment System (GWRS), the world's largest advanced water purification project for potable reuse, which processes 130 million gallons per day. This system uses microfiltration, reverse osmosis, and ultraviolet light treatment to purify recycled water before injecting it into the groundwater basin. Despite its impressive technology, the blended water reaching your tap still contains regulated levels of various minerals and disinfection byproducts.</p>

      <h2>Key Contaminants Found in OC Drinking Water</h2>
      <p>The OCWD and local utility annual water quality reports consistently identify several contaminants at levels that, while legal, may be of concern to health-conscious residents:</p>
      <p><strong>Total Dissolved Solids (TDS):</strong> Orange County tap water typically measures 400–700 mg/L TDS depending on location and season. The WHO guideline for palatability is 600 mg/L — many OC zip codes regularly exceed this threshold.</p>
      <p><strong>Hardness:</strong> OC water is classified as hard to very hard, typically ranging from 200–350 mg/L. This is well above the 60–120 mg/L range considered "moderately hard" and causes the scale buildup, soap interference, and appliance damage common across the county.</p>
      <p><strong>Hexavalent Chromium (Chromium-6):</strong> California's own testing database (OEHHA) has found chromium-6 in multiple Orange County water sources at levels above the 0.02 ppb public health goal. The legal action level is 50 ppb — California's health goal is 1,000 times stricter, reflecting growing scientific understanding of chromium-6's carcinogenic potential.</p>
      <p><strong>Chloramine Disinfection Byproducts:</strong> Most Orange County utilities use chloramines (rather than chlorine alone) for disinfection. Chloramines create different disinfection byproducts than chlorine, including haloacetic acids (HAAs) and nitrosamines. Standard carbon block filters are less effective at removing chloramines than plain chlorine, requiring catalytic carbon or RO for thorough reduction.</p>

      <h2>What the Annual Water Quality Reports Don't Tell You</h2>
      <p>Consumer Confidence Reports (CCRs) only test for the ~90 contaminants regulated under the Safe Drinking Water Act. The EPA's Contaminant Candidate List includes hundreds of additional unregulated contaminants present in water supplies nationwide — including pharmaceuticals, personal care product chemicals, PFAS compounds (forever chemicals), and microplastics — for which utilities have no reporting obligations.</p>
      <p>A 2020 study from the Environmental Working Group found detectable levels of PFAS chemicals in multiple Southern California water sources. PFAS compounds, linked to immune system effects, thyroid disruption, and certain cancers, are not removed by standard water treatment or basic carbon filters. Only RO systems and granular activated carbon at high contact times effectively reduce PFAS.</p>

      <h2>What Water Hardness Means for Orange County Homeowners</h2>
      <p>Hard water's effects are particularly noticeable in Orange County given the combination of high mineral content and warm climate. Scale deposits form faster and harder in warmer water — meaning your water heater, dishwasher, and tankless water heater experience accelerated buildup compared to cooler climates.</p>
      <p>The Water Research Foundation estimates that untreated hard water costs the average OC household $800–$1,500 annually in additional appliance operating costs, premature appliance replacement, and excess detergent use — costs that a properly sized water softener or conditioner can largely eliminate.</p>

      <h2>Solutions Matched to OC Water Profiles</h2>
      <p>For most Orange County homes, a comprehensive approach works best. A whole-house carbon filtration system removes chloramines, VOCs, and taste/odor compounds from every tap in the home. A water softener or salt-free conditioner addresses hardness protection for plumbing and appliances. For drinking and cooking water, an under-sink RO system further reduces TDS, chromium-6, nitrates, PFAS, and other dissolved contaminants to very low levels.</p>
      <p>PureWay OC provides free water testing across Orange County to help homeowners understand exactly what their tap water contains and select the appropriate treatment combination for their specific water profile.</p>
    `,
  },
  {
    slug: 'water-softener-benefits',
    title: 'Water Softener Benefits: 8 Ways Soft Water Transforms Your Home',
    description: 'Installing a water softener is one of the highest-ROI home improvements available to OC homeowners. Here are eight concrete benefits backed by independent research.',
    date: 'March 7, 2026',
    author: 'PureWay OC Team',
    category: 'Water Softeners',
    image: '/images/blog/water-softener-benefits.jpg',
    content: `
      <h2>Benefit 1: Dramatically Extended Appliance Lifespan</h2>
      <p>The Water Quality Research Foundation conducted a landmark study monitoring appliances operating on hard versus softened water over an extended period. The results were stark: gas storage water heaters maintained their original efficiency rating throughout 15 years of operation on softened water, while identical units on hard water lost up to 48% of efficiency within the same period.</p>
      <p>Dishwashers operating on softened water maintained like-new performance across the test period, while hard water units showed significant deterioration. The economic implication is clear: a $1,200 dishwasher lasting 12 years instead of 7–8 represents a $400+ value from soft water alone — without counting energy savings.</p>

      <h2>Benefit 2: Significant Energy Cost Reduction</h2>
      <p>Scale buildup acts as thermal insulation inside water heaters, forcing the heating element or burner to work harder to transfer heat through the mineral coating to the water. The US Department of Energy estimates that each 1/4 inch of scale buildup increases energy consumption by 40%. For a natural gas water heater in Orange County — where average households spend $30–$50/month heating water — this translates to $150–$250 in additional annual energy costs from scale accumulation alone.</p>
      <p>Tankless water heaters are particularly vulnerable to scale damage. Scale buildup on heat exchanger surfaces in tankless units can cause premature failure and potentially void the manufacturer's warranty, which typically requires treated water in hard water areas.</p>

      <h2>Benefit 3: Softer Laundry Using Less Detergent</h2>
      <p>Hard water minerals interfere with detergent's surfactant molecules, reducing their ability to lift dirt and oils from fabric fibers. The result: fabrics feel stiff and scratchy even after washing, colors fade faster, and whites develop a gray or yellowed appearance over time.</p>
      <p>Research from the Battelle Memorial Institute found that laundry washed in softened water with 50% less detergent was cleaner, softer, and brighter than laundry washed in hard water with full detergent doses. Softened water households can reduce detergent use by 50–75% and achieve superior results — representing $100–$200 in annual household cleaning product savings for a family of four.</p>

      <h2>Benefit 4: Cleaner Dishes and Spotless Glassware</h2>
      <p>Water spots on dishes and glassware are calcium and magnesium deposits left behind when water evaporates. With soft water, mineral deposits do not form — dishes air dry spot-free without additional rinse aids. Dishwasher rinse aid consumption drops dramatically, and the dishwasher's spray arms and interior components remain clear of scale buildup, maintaining water pressure and coverage.</p>

      <h2>Benefit 5: Better Skin and Hair</h2>
      <p>Soft water rinses cleanly because it does not leave mineral residue on skin or hair. The difference is noticeable from the first shower: skin feels genuinely smooth rather than slightly filmy, and hair feels lighter, silkier, and more manageable. For people with sensitive skin, eczema, or psoriasis, removing hard water mineral exposure can meaningfully reduce symptom frequency and severity.</p>
      <p>Dermatologists at UC Irvine have noted that patients who install water softeners frequently report improvement in dry skin conditions without changes to skincare routine — consistent with research findings on hard water and skin barrier function.</p>

      <h2>Benefit 6: Reduced Soap Scum and Bathroom Cleaning Time</h2>
      <p>Soap scum is formed when the fatty acids in soap react with calcium and magnesium to create an insoluble compound that sticks to surfaces. With soft water, this reaction does not occur — soap rinses away completely, leaving shower walls, tubs, and sinks dramatically easier to clean. Most soft water households report cutting their bathroom cleaning time in half.</p>

      <h2>Benefit 7: Cleaner Plumbing Over the Long Term</h2>
      <p>Scale deposits inside pipes narrow their internal diameter progressively over decades. A pipe that has been in service for 20+ years in a hard water area may have its effective diameter reduced by 30–50%, causing reduced water pressure and increased risk of clogs. New construction and recently replaced plumbing in soft water conditions will maintain their original internal diameter indefinitely.</p>

      <h2>Benefit 8: Lower Total Household Cleaning Product Costs</h2>
      <p>When you add up reduced soap, shampoo, detergent, dishwasher detergent, rinse aid, limescale removers, and bathroom cleaning products, soft water households consistently save $300–$600 per year on cleaning products for a family of four. These savings begin immediately after installation and compound over the life of the system.</p>
    `,
  },
  {
    slug: 'ro-vs-pitcher-filter',
    title: 'Reverse Osmosis vs. Pitcher Filter: Which Is Right for Your Orange County Home?',
    description: 'Both pitcher filters and RO systems improve water quality, but they operate very differently and remove very different contaminants. Here is how to choose.',
    date: 'February 28, 2026',
    author: 'PureWay OC Team',
    category: 'Water Treatment',
    image: '/images/blog/ro-vs-pitcher.jpg',
    content: `
      <h2>How Pitcher Filters Work</h2>
      <p>Pitcher-style water filters — Brita, PUR, ZeroWater, and similar brands — use activated carbon, ion exchange resin, or a combination to filter water poured through them into a reservoir. The water flows through the filter media by gravity, a process that is simple and effective for certain contaminants but fundamentally limited in scope.</p>
      <p>Standard pitcher filters (Brita Classic, PUR Classic) primarily remove chlorine, some heavy metals, and compounds affecting taste and odor. They are NSF-certified for a limited set of contaminants. The ZeroWater 5-stage pitcher claims to reduce TDS to near zero but does not remove all contaminants effectively, and its filters have a very short lifespan — often 15–20 gallons — making the cost per gallon comparable to or greater than bottled water.</p>

      <h2>How Reverse Osmosis Works</h2>
      <p>Reverse osmosis systems force water under pressure through a semi-permeable membrane with pores of approximately 0.0001 microns. This membrane physically blocks dissolved solids, heavy metals, bacteria, viruses, nitrates, fluoride, and hundreds of other compounds regardless of their charge or reactivity. The result is water with 95–99% lower TDS than the source — essentially the purest form of water available from a home system.</p>
      <p>Modern under-sink RO systems include pre-filters to protect the membrane from chlorine and sediment, the RO membrane itself, and a post-carbon polishing filter. Many now include a remineralization stage that adds back beneficial minerals for improved taste and alkalinity.</p>

      <h2>Contaminant Removal: A Direct Comparison</h2>
      <p>This is where the distinction becomes critical, particularly for Orange County water:</p>
      <ul>
        <li><strong>Chlorine/Chloramines:</strong> Pitcher (moderate) vs. RO (excellent, via pre-carbon)</li>
        <li><strong>Lead:</strong> Pitcher (moderate, certified models) vs. RO (95–98%)</li>
        <li><strong>Arsenic:</strong> Pitcher (minimal) vs. RO (85–95%)</li>
        <li><strong>Fluoride:</strong> Pitcher (none, standard) vs. RO (85–92%)</li>
        <li><strong>Nitrates:</strong> Pitcher (none) vs. RO (60–75%)</li>
        <li><strong>Chromium-6:</strong> Pitcher (none) vs. RO (84–94%)</li>
        <li><strong>PFAS:</strong> Pitcher (minimal) vs. RO (up to 95%)</li>
        <li><strong>TDS overall:</strong> Pitcher (minimal reduction) vs. RO (95–99% reduction)</li>
        <li><strong>Bacteria/Viruses:</strong> Pitcher (none) vs. RO (99.99%)</li>
      </ul>

      <h2>Cost Comparison Over 5 Years</h2>
      <p>Upfront cost comparisons favor pitchers dramatically, but the picture changes substantially over time:</p>
      <p><strong>Pitcher filter (Brita Longlast):</strong> $30 pitcher + $120/year in filters = $630 over 5 years. Filters water at approximately $0.07–$0.10/gallon.</p>
      <p><strong>Under-sink RO system:</strong> $250–$400 installed + $75–$120/year in replacement filters = $625–$1,000 over 5 years. Filters water at approximately $0.10–$0.25/gallon.</p>
      <p>The cost difference over 5 years is modest, but the RO system delivers fundamentally superior water quality and capacity — capable of supplying the entire household with purified cooking and drinking water, not just 10 cups at a time from a refrigerator pitcher.</p>

      <h2>Convenience and Capacity Differences</h2>
      <p>A standard pitcher filter holds 10–18 cups of filtered water. A family of four can easily exhaust a full pitcher in a single day if using it for drinking, cooking pasta, making coffee, and filling pet bowls. The constant refilling becomes tedious quickly.</p>
      <p>An under-sink RO system with a pressurized storage tank (typically 3.2 gallons) produces 50–100 gallons of purified water per day and delivers it on demand directly from a dedicated tap. There is nothing to refill, no waiting for water to filter through, and no refrigerator space consumed.</p>

      <h2>Which Is Right for Orange County Water?</h2>
      <p>Given OC's water profile — elevated TDS (400–700 mg/L), hardness, chloramines, and concerns about chromium-6 and PFAS — a pitcher filter provides only surface-level improvement. It may make water taste better by reducing chloramine taste and odor, but it leaves behind the dissolved minerals, heavy metals, and trace contaminants that characterize Orange County's water supply.</p>
      <p>For households prioritizing water quality — particularly those with young children, pregnant individuals, or anyone with compromised immunity — an RO system is the appropriate choice. For renters who cannot install under-sink equipment and want basic taste improvement on a limited budget, a quality pitcher filter is better than nothing.</p>
    `,
  },
  {
    slug: 'hard-water-and-skin',
    title: 'Hard Water and Skin: The Connection Your Dermatologist May Have Missed',
    description: 'A growing body of research links hard water exposure to dry skin, eczema flare-ups, and accelerated skin aging. Here is what the science says and what you can do.',
    date: 'February 21, 2026',
    author: 'PureWay OC Team',
    category: 'Health',
    image: '/images/blog/hard-water-skin.jpg',
    content: `
      <h2>The Science Behind Hard Water and Skin</h2>
      <p>Human skin is protected by a slightly acidic barrier — the acid mantle — with a pH of approximately 4.5–5.5. This barrier prevents moisture loss and defends against pathogens. Hard water, with its high calcium and magnesium content, is alkaline (pH 7.5–8.5) and disrupts this natural acid mantle when it contacts skin repeatedly during bathing.</p>
      <p>More significantly, calcium and magnesium ions in hard water bind to the fatty acids in soap and natural skin oils (sebum) to form calcium soap — an insoluble, sticky compound that cannot be fully rinsed away. This residue remains on skin after drying, physically clogging pores and interfering with the skin barrier's moisture retention function.</p>

      <h2>What the Research Shows</h2>
      <p>A landmark 2017 study published in the <em>Journal of Investigative Dermatology</em> by researchers at King's College London assessed 1,300 infants and found a statistically significant association between hard water exposure and eczema. Children living in areas with the hardest water (above 250 mg/L) had a 44% higher risk of eczema at 3 months of age compared to those in the softest water areas.</p>
      <p>A follow-up randomized controlled trial (2021) fitted households of eczema-prone children with water softeners. After 12 weeks, children in softened water households showed significantly improved skin barrier function scores and reduced eczema severity compared to controls. Parents of children in the softened water group also reported reduced topical steroid use and improved sleep quality for their children.</p>
      <p>Additional research from the University of Sheffield (2018) demonstrated that calcium ions in hard water activate inflammatory pathways in skin cells, explaining the mechanism by which hard water worsens inflammatory skin conditions including atopic dermatitis, contact dermatitis, and psoriasis.</p>

      <h2>Symptoms Linked to Hard Water Exposure</h2>
      <p>If you have experienced any of the following since living in Orange County, hard water may be a contributing factor:</p>
      <ul>
        <li>Persistent dry skin despite regular moisturizer use</li>
        <li>Itchy skin after showering, particularly in winter when indoor humidity is lower</li>
        <li>Eczema flare-ups that do not respond consistently to topical treatments</li>
        <li>Acne concentrated on the back, chest, or jaw — areas heavily exposed to shower water</li>
        <li>Hair that becomes dry, brittle, or breaks easily</li>
        <li>Color-treated hair that fades faster than expected</li>
        <li>Scalp conditions including dandruff and itchiness</li>
      </ul>

      <h2>The Chloramine Factor</h2>
      <p>Most Orange County water utilities use chloramine rather than plain chlorine for disinfection. While chloramine is more stable and produces fewer trihalomethane byproducts, it is a known skin and respiratory irritant. People who swim in chlorinated pools often report skin dryness — shower exposure to chloraminated water causes similar effects with daily repetition.</p>
      <p>Chloramine is not removed by standard shower filters designed for chlorine. Effective reduction requires a shower filter with catalytic carbon, a whole-house carbon filtration system, or a whole-house softening system combined with carbon pre-treatment.</p>

      <h2>What Works: Evidence-Based Solutions</h2>
      <p>The clinical evidence supports water softening as an effective intervention for hard water-related skin conditions. A whole-house water softener addresses all water contact points simultaneously — shower, bath, handwashing — rather than just treating drinking water.</p>
      <p>For households not ready to install a whole-house system, high-quality shower filters with catalytic carbon can reduce chloramine exposure. Replacing shower filters regularly (every 3–6 months) and combining with a gentle, fragrance-free cleanser formulated for hard water can provide meaningful improvement for many people.</p>

      <h2>Talking to Your Dermatologist</h2>
      <p>Water quality is increasingly recognized in dermatology as an environmental factor in skin conditions. If you are seeking treatment for chronic dry skin, eczema, or other skin barrier conditions in Orange County, mention your water quality to your dermatologist. Many are now familiar with the research and may recommend water softening as a complementary intervention alongside topical treatments.</p>
    `,
  },
  {
    slug: 'whole-house-filtration-guide',
    title: 'The Complete Guide to Whole-House Water Filtration for Orange County Homes',
    description: 'A whole-house filtration system treats every tap, shower, and appliance in your home simultaneously. Here is how to choose the right system for your OC property.',
    date: 'February 14, 2026',
    author: 'PureWay OC Team',
    category: 'Water Treatment',
    image: '/images/blog/whole-house-filtration.jpg',
    content: `
      <h2>What Is a Whole-House Filtration System?</h2>
      <p>A whole-house (or "point-of-entry") water filtration system installs at the main water line entering your home, treating all water before it distributes to any fixture, appliance, or tap. Unlike under-sink or pitcher filters that treat only the water at one specific outlet, whole-house systems provide comprehensive treatment for drinking water, cooking water, bathing water, laundry water, and the water used by every appliance in your home.</p>
      <p>This is the critical distinction: a shower or bathtub exposes your skin and lungs (via steam inhalation) to whatever is in your water just as much as drinking does — arguably more, since shower water contacts a far larger surface area for a longer duration. A whole-house system is the only way to ensure clean water at every point of contact.</p>

      <h2>The Core Components of a Whole-House System</h2>
      <p>A comprehensive whole-house filtration system for Orange County typically combines three to four treatment stages:</p>
      <p><strong>Stage 1 — Sediment Pre-Filter:</strong> A 5–10 micron sediment filter captures sand, silt, rust particles, and suspended solids before they reach subsequent filter stages. This extends the life of downstream filters significantly. Pre-filters typically require replacement every 3–6 months depending on local sediment levels.</p>
      <p><strong>Stage 2 — Catalytic Carbon Filter:</strong> This is the most important stage for Orange County water. Catalytic carbon is specifically effective against chloramines — the disinfectant used by most OC utilities — which standard activated carbon does not remove efficiently. This stage removes chloramines, chlorine, herbicides, pesticides, VOCs, and organic compounds that cause taste and odor issues. Filter life: 12–24 months.</p>
      <p><strong>Stage 3 — Water Softener or Salt-Free Conditioner:</strong> Addresses hardness minerals (calcium and magnesium) to prevent scale buildup in pipes, water heaters, and appliances. Salt-based ion exchange softeners provide the most thorough hardness removal; salt-free conditioners (template-assisted crystallization) alter mineral structure to prevent scale without removing minerals from the water.</p>
      <p><strong>Stage 4 (Optional) — UV Purification:</strong> Ultraviolet light treatment inactivates bacteria, viruses, and cysts at the cellular level without chemicals or residual byproducts. Recommended for homes on well water or in areas with known microbial contamination concerns.</p>

      <h2>Choosing Between Salt-Based Softening and Salt-Free Conditioning</h2>
      <p>This is one of the most common questions from Orange County homeowners considering whole-house treatment. The answer depends on your priorities:</p>
      <p><strong>Salt-Based Water Softener</strong> is the gold standard for hardness removal. It physically removes calcium and magnesium from the water via ion exchange, replacing them with a small amount of sodium. The result is genuinely soft water that creates better lather, eliminates scale completely, and is demonstrably better for skin and appliances. Requires salt top-ups every 4–8 weeks and a drain connection for regeneration. Modern efficient systems use minimal salt and water for regeneration.</p>
      <p><strong>Salt-Free Conditioner (Template-Assisted Crystallization)</strong> does not remove minerals from water but transforms them into harmless microscopic crystals that cannot adhere to pipe and appliance surfaces. There is no salt, no waste water, no electricity, and zero maintenance. However, water does not feel "soft" in the traditional soapy sense, and there is less research supporting skin benefits compared to genuine softening.</p>
      <p>For most OC homeowners prioritizing appliance protection and skin/hair benefits, a salt-based softener combined with carbon pre-treatment is the superior choice.</p>

      <h2>System Sizing: Getting It Right</h2>
      <p>Whole-house systems must be sized appropriately for your home's peak demand to avoid water pressure drops during simultaneous high-usage periods (multiple showers running while the dishwasher is operating, for example). Key sizing factors include the number of bathrooms, number of occupants, daily water usage, and inlet water pressure and flow rate (measured in gallons per minute).</p>
      <p>A professional water audit — which PureWay OC provides free of charge — measures your home's flow rate and water characteristics before recommending system sizing. An undersized system will restrict flow; an oversized system wastes money.</p>

      <h2>Maintenance Requirements and Costs</h2>
      <p>Whole-house systems are designed for minimal maintenance. Typical annual maintenance includes replacing the sediment pre-filter ($15–$30), replacing the carbon filter ($60–$120), adding salt to the brine tank if softening (approximately $10–$20/month), and an annual professional inspection of the control head and settings.</p>
      <p>Total annual maintenance cost for a comprehensive whole-house system in an OC home typically runs $150–$350 — often less than a family spends monthly on bottled water and cleaning products to compensate for untreated water.</p>

      <h2>What to Expect After Installation</h2>
      <p>Most homeowners notice improvements within days of installation. Chlorine taste and odor disappear immediately from the carbon stage. Soap lathers noticeably better after the first shower. Scale on existing fixtures stops building up and gradually softens. Within 2–3 months, existing light scale deposits in pipes and on appliances begin dissolving as the softened water slowly dissolves what has accumulated. For most OC homeowners, the return on investment is clear within the first 12–18 months.</p>
    `,
  },
]

export function getAllPosts() {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
