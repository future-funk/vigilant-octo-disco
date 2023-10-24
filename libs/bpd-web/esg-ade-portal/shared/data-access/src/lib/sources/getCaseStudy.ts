import { CaseStudyListItem } from '../types'

const caseStudyList: CaseStudyListItem[] = [
  {
    id: '538',
    name: '101 California',
    address: 'San Francisco, California, USA',
    summary: '48-story, 1.25 million ft2 office building',
    angle: [
      { data: 'Certified to USGBC LEED Platinum earning one of the highest scores for an existing building'},
      { data: '• Innovative STEM Energy Storage System, installed to lower energy consumption plus increase resilience'},
      { data: '• 100% offset of carbon emissions from purchase of renewable energy'},
      { data: '• Outside air ventilation 30% above industry standards improves climate change adaptation / resiliency',}
    ],
    action: [
        { data: '• Complete performance commissioning of all building mechanical systems led to substantial savings in energy and water.'},
        { data: "• STEM Energy Storage System installed at no cost to GIC and achieving energy/cost savings."}
    ],
    involvement: [
        { data: "• Achieved annual ongoing energy savings in excess of 1,225,000 kWh and $140,000 through building retro-commissioning."},
        { data: "• Installed high efficiency plumbing fixtures, leading to water efficiency that is 30% above industry standards."},
        { data: "• Since many companies now report carbon as part of their annual reporting, occupation of a low carbon building is a significant attraction for the building, as is the LEED Score." }
    ],
  },
  {
    id: '12',
    name: 'Azia Center',
    address: 'Pudong, Shanghai, China',
    summary:
      'International Grade A office building located at the financial district of Shanghai. Total area of 92,000 m².',
    angle: [
      { data: '• High energy efficient, low CO2 emissions and better indoor air quality (IAQ).'},
      { data: '• Achieved the LEED-EB Gold certification in 2010 and Platinum certification in 2015.'}
    ],
    action: [
      { data: 'In 2008, GIC’s Investment Review Committee (IRC) approved a set of Guidelines for Sustainable Investment. Azia Centre was one of the existing asset selected to improve energy efficiency and resource sustainability and to reduce greenhouse emissions.'},
    ],
    involvement: [
      { data: "Energy consumption has come down from 18.7mn kWh in 2009 to 16.8mn kWh in 2013 and enjoyed savings in electricity expenses of approx. RMB 1.9 mn annually. Annual carbon emissions before the energy improvement project was 232 kgCO2/m² and it is now averaging 207 kgCO2/m² compared to the market average of 258 kgCO2/m² (11% reduction compared with before and 20% better than Market)."},
      { data: "Key energy reduction measures:"},
      { data: "• Electricity sub-meters have been installed for major equipment to monitor power usage and energy efficiency"},
      { data: "• CO2 sensors were implemented to monitor and adjust the fresh air to maintain good air quality in the tenant area and car parking areas"},
      { data: "• Electricity consumption for common area decreased by 24% in the first year of implementation"}   
    ],
  },
  {
    id: '24',
    name: 'Chifley Tower',
    address: 'Sydney Australia',
    summary:
      'A landmark premium grade office building located in the heart of CBD, Sydney.',
    angle: [
      {data: "Energy efficient building and reduce carbon footprint. Achieved NABERS rating of 5 stars."}
    ],
    action: [
      { data: 'An opportunity arose in 2009 to improve Chifley Tower’s energy rating (NABERS) from 0.5 stars to 4.5 stars through a sustainability upgrade project (Phase 1).'},
      { data: 'Key goals were as follows:'},
      { data: '• To maintain the reputation and value of Chifley Tower. Both tenants and investors were looking at the green rating of buildings as an important criterion for decisions.'},
      { data: '• The project was considered defensive in nature as it served as a protection against possible declining rental income, physical obsolescence and value deterioration, which would have been inevitable if the property had not kept up with competition in a soft office market.'},
      { data: "• Government agencies would have reportedly only leased space with at least a NABERS energy rating of 4.5 stars. Committing to achieve a NABERS 4.5 stars for Chifely Tower fulfilled GIC RE’s immediate primary objective to ensure that our properties would be certified to a standard generally fulfilling the requirements of potential tenants from both government and private sectors."},
      { data: '•Chifley Tower central plants and mechanical equipment and plants/\t/g; were approaching the end of their economic lifecycle and would have required replacement.'}        
    ],
    involvement: [
      { data: 'Energy consumption has come down from 17.9mn kWh to 8.3mn kWh, an 128% reduction, and enjoyed savings in electricity expenses of A$1.9mn in the first year of implementation. Annual carbon emissions before the sustainability upgrading project was 705 kgCO2/m² and it is now averaging 309 kgCO2/m² compared to the market average of 372 kgCO2/m² (56% reduction compared with before and 17% better than Market).'},
      { data: 'Key energy reduction measures:'},
      { data: '• Tenancy lighting upgrades from T8 to T5 lighting'},
      { data: '• Conversion of 42 floors from water cooled packaged unit to chilled water.'},
      { data: '• Single zone package AHU’s replaced with 5 zones chilled water AHU’s.'}, 
    ]
  },
  {
    id: '240',
    name: '100 Liverpool Street',
    address: 'London, United Kingdom',
    summary:
      'New iconic building with 536,000 ft2 of premier office and retail space, developed as a net zero carbon scheme',
    angle: [
      {data: '• Platinum" WiredScore for tech connectivity (smart buildings and energy efficiency).'},
      {data: '• BREEAM "Excellent".'},
      {data: '• WELL Building Standard “Gold”.'},
      {data: '• Smart building features and IoT platform promote low carbon operation'}
    ],
    action: [
      {data: '• Exemplar sustainability and health & wellbeing credentials have been paramount to all considerations of this new development.'},
      {data: '• To keep the project’s embodied carbon low, 100LPS’ design retained or re-used 50% of the building’s existing structure, such as the steel frame, foundations and concrete. To optimise the completed building’s operational efficiency, smart systems were installed to monitor real-time building performance, water recycling systems were built in to use rainwater and greywater to meet 40% of water demand, and 100% of electricity and gas will be supplied by renewable sources'},
      {data: '• Residual emissions were offset through nature-based solutions including land restoration and afforestation projects in Tibet, Mexico, Cumbria and Scotland.'},
    ],
    involvement: [
      { data: " • With more businesses looking for smart and sustainable buildings, Liverpool Street represents the pinnacle of these in London."},
      { data: "• Every aspect of the building – lighting chillers, boilers and lifts – has been carefully selected to promote energy efficiency."},
      { data: "• A state-of-the-art converged network with IoT sensors will mean capability to achieve high levels of sustainability across a range of areas."},
      { data: "• The building seeks top credentials around climate change, resiliency, smart buildings, water and waste efficiency, health and wellbeing, and many other aspects of sustainability. This is both for design and operation."},
    ],
  },
  {
    id: '503',
    name: 'One Bush Street',
    address: 'San Francisco, California, United States',
    summary: 'A 19-story landmarked Class A office building, built in 1959.',
    angle: [
      { data: '• First multi-tenanted building older than 50 years in the Bay Area to achieve USGBC LEED "Platinum".'},
      { data: "• EnergyStar score of 95."},
      { data: "• In the top 5% of energy efficiency compared to similar buildings."},
    ],
    action: [
      { data: '• Strong effort to achieve prized LEED “Platinum” standards.'},
      { data: '• Ongoing investment in project minimizes energy consumption and carbon, including the installation of a new chiller (planned 2022).'},
      { data: '• The building is actively managed to reduce energy, water and waste impacts.'},
    ],
    involvement: [
      { data: '• Energy efficiency upgrades have resulted in more than 670,000 kWh savings annually.'},
      { data: '• New waste heat recycling, new VFDs and a cooling tower media have improved carbon profile.'},
      { data: '• Improvements also include additional metering and light sensors/motion sensors.'},
      { data: '• Water efficiency improvements mean the building uses far less water than similar buildings in the area.'},
      { data: '• Energy savings are beneficial to GIC as they can help to reduce the base year amount resulting in potentially higher reimbursements to GIC going forward.'},
      { data: '• California is a sophisticated sustainability market that prizes LEED Platinum and ongoing low energy/carbon operation.'},
    ],
  },
  {
    id: '230',
    name: 'OpernTurm',
    address: 'Frankfurt, Germany',
    summary:
      '43-story skyscraper in Frankfurt, Germany.  Completed in 2009, OpernTurm has a total net leasable area of 602,779 ft2, most of which is office space',
    angle: [
      { data:'• One of the first buildings in Europe to be LEED Gold certified for New Construction.'},
      { data:'• In Germany, where energy efficiency is paramount, the asset meets exemplar standards for low energy and low carbon.'},
      { data:'• The building uses 100 percent green electricity.'},
      { data:'• All windows can be opened to enable free cooling (low carbon plus climate change resiliency).'},
    ],
    action: [
      { data:'• The building has strong sustainability and low carbon credentials from its initial design.'},
      { data:'• Performance is monitored carefully and green energy procured to enable low carbon status in a market where this is prized.'}
    ],
    involvement: [
      { data:'The building is relatively new and was highly sustainable at the time of construction.'},
      { data:'GIC has since:'},
      { data:'• Replaced all non-energy efficient lamps with LED lighting.'},
      { data:'• Continues to manage the property to hit low energy and carbon performance.'},
      { data:'German laws mandate that operational efficiency be disclosed at the time of a sale or lease. In such a market, the energy efficient characteristics of OpernTurm are a competitive advantage.'},
    ],
  },
  {
    id: '140',
    name: 'IMC – Shiodome City Center',
    address: 'Tokyo, Japan',
    summary:
      'Grade ‘A’ office and retail complex. The building has a total net rentable area (NRA) of 118,754 m²',
    angle: [
      { data: 'Since completion in 2003, its sustainable operating and building maintenance practices have qualified for "Semi-Top Level Building Certification" while meeting the target CO2 reduction level. The certification highly rated the building’s CO2 reduction performance to date, as well as equipment upgrade, operational improvement and other initiatives such as tenant cooperation when carrying out management operations.'},
    ],
    action: [
      {
        data:
          'In 2008, GIC’s Investment Review Committee (IRC) approved a set of Guidelines for Sustainable Investment. Shiodome City Centre was one of the existing assets selected to improve energy efficiency and resource sustainability and to reduce greenhouse emissions. GIC RE took the opportunity to look at energy saving and to reduce CO2 emissions.',
      },
      
    ],
    involvement: [
      { data: 'From 2007 to 2013, energy consumption was reduced by 8.2mn kWh to 36.6mn kWh (including both public and tenant areas), equating to an 18% reduction. Electricity and water consumption for the common area also decreased by 36% and 30% respectively, over the same time period. As a result, electricity expenses have only increased by 2.6% over the period, despite a 20% increase in energy cost. Annual carbon emission was 199kgCO2/m² in 2007 and in 2012 it declined to 160kgCO2/m², a 21% reduction.'},
      { data: 'Key energy reduction measures:'},
      { data:'Tenancy lighting upgrades'},
      { data:'• Installation of energy-saving V-belts for the ventilation fans to minimize power loss.'},
      { data:'• Segmentation and re-routing of lighting circuits to minimize lighting for areas where lighting is unnecessary and reduce hours of operation when building experiences minimal use.'},
      { data:'• 25% reduction of Back Of House lighting.'},
      { data:'• Education to promote awareness among cleaning staff and security guards regarding the importance of saving energy.'},
    ]
  },
]

const getCaseStudyList = () => {
  return caseStudyList
}

export default getCaseStudyList
