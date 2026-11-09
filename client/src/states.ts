// State Benefits Finder — static reference data transcribed from the
// researched state benefits pack (~/workspace/military-app/states/states.md,
// researched November 8, 2026). Agency names, official links, and headline
// bullets come only from the pack; every ⚠ flag and caveat is preserved.
//
// Fidelity rules baked into this data (the pack's standing rules):
// - Bullets come only from the pack — nothing added, no thresholds filled
//   in. Montana, Nevada, and Delaware keep their "see official site"
//   markers; Delaware's property-tax and education lines stay as the
//   pack's see-official-site bullet.
// - California and Texas carry their sourcing caveats (bullets from
//   official state summaries after the agencies' own pages failed to
//   load / returned Access Denied).
// - Kentucky keeps its flag: no veteran-specific property-tax exemption
//   stated by KDVA; outside sources conflict.
// - Wyoming's property-tax amount stays UNSTATED (official and secondary
//   figures conflict, $3,000 vs. $6,000).
// - West Virginia keeps its 2024 mechanism-change note (exemption → tax
//   credit; older sources are stale).
// - Locality-set amounts stay labeled as locality-set (AK, CT, NH, NY,
//   RI, VA).
// - Agency naming follows the pack's current styling: NJ's standalone
//   Department of Veterans Affairs (created Jan 9, 2026), NY "Department
//   of Veterans' Services," Montana's singular "Veteran" spelling, DC as
//   the Mayor's Office of Veterans Affairs.
// - Territories were not researched and are not included.

export type StateBenefitBullet = {
  text: string;
  /** ⚠ caveat attached to this bullet, rendered with the ⚠ marker. */
  flag?: string;
};

export type StateEntry = {
  state: string;
  agency: string;
  /** ⚠ caveat attached to the agency line itself. */
  agencyFlag?: string;
  site: string;
  bullets: StateBenefitBullet[];
  /** Standalone ⚠ note for the whole entry. */
  entryFlag?: string;
};

export const STATES_STANDING_NOTE =
  "Every state below gives its official veterans affairs agency, its verified official website, and headline benefits drawn only from that state's official pages (.gov sources). ⚠ flags mark anything that varies — by disability rating, income, or locality — could not be fully verified on the state's own veterans page, or carries a naming note. Figures should be re-checked on the official site before relying on them — exemption amounts and thresholds change.";

export const NASDVA = {
  agency: "National Association of State Directors of Veterans Affairs (NASDVA)",
  site: "https://www.nasdva.us/",
  text: "The national body coordinating the individual State Departments of Veterans Affairs. VA.gov points veterans to the NASDVA website to link to their own state DVA and learn what state-level benefits that state provides. If you are unsure which agency runs veterans affairs in your state, start here and follow the link to your state.",
};

export const STATE_ENTRIES: StateEntry[] = [
  {
    state: "Alabama",
    agency: "Alabama Department of Veterans Affairs",
    site: "https://va.alabama.gov/",
    bullets: [
      {
        text: "Property tax: exemption from ad valorem taxation on the home and adjacent 160 acres for a person who is totally and permanently disabled (or age 65+); veterans claiming due to a service-connected disability are exempt from annual eligibility recertification",
        flag: "threshold stated as total/permanent disability in the tax section, not as a % rating",
      },
      {
        text: "Education: Alabama G.I. Dependent Scholarship — tuition, required books, and instructional fees help for dependents of disabled Alabama veterans; spouses/unremarried widows of a veteran rated 100% permanently and totally disabled get five standard academic years, spouses of veterans rated 40–90% get three",
        flag: "entitlement varies by rating",
      },
      { text: "State veterans homes: ADVA administers five (5) State Veterans Homes providing nursing home care and some assisted living care" },
      { text: "Signature: Free admission to Alabama state parks for active-duty and honorably discharged resident veterans" },
    ],
  },
  {
    state: "Alaska",
    agency: "Alaska Department of Military and Veterans Affairs — Office of Veterans Affairs",
    site: "https://veterans.alaska.gov/benefits/home/",
    bullets: [
      {
        text: "Property tax: first $150,000 of assessed value exempt for a disabled veteran with a 50% or greater service-connected disability",
        flag: "administered by the municipality; filing deadlines and any exemption above $150,000 vary by locality — verified via the Alaska Department of Commerce, Community, and Economic Development / State Assessor page, not the Office of Veterans Affairs page itself",
      },
      { text: "Education: Alaska Veterans' Dependent Tuition Waiver Program — spouse and dependents of Alaska-resident service members who died in the line of duty, were listed as POW, or were killed in action are entitled to a waiver of all undergraduate tuition and fees through the University of Alaska system" },
      { text: "State veterans home: Alaska Veterans & Pioneers Home (Palmer) — care at the Veterans Pioneers Home is stated by the Office of Veterans Affairs as an earned benefit available to honorably discharged veterans" },
      { text: "Education (Guard): Alaska National Guard members may receive up to 100% tuition assistance at any University of Alaska system school" },
    ],
  },
  {
    state: "Arizona",
    agency: "Arizona Department of Veterans' Services",
    site: "https://dvs.az.gov/",
    bullets: [
      {
        text: "Property tax: primary residence of a veteran with a service-connected disability rated 100% by the VA, or total disability based on individual unemployability, is fully exempt from taxation; veterans rated less than 100% get a smaller exemption scaled by their disability percentage",
        flag: "amounts and income/assessment limits are indexed and vary — A.R.S. § 42-11111, via the official Arizona Legislature site; not stated on the ADVS page opened",
      },
      { text: "Education: Tuition Waiver scholarships — tuition-free education for Arizona veterans wounded in action or injured in the line of duty, and for dependents of service members killed in the line of duty; eligible veterans and dependents can also receive in-state tuition rates for select Arizona colleges and universities" },
      { text: "State veteran homes: four Arizona State Veteran Homes — Flagstaff, Phoenix, Tucson, and Yuma — providing long-term care and rehabilitative / skilled-nursing services" },
      { text: "Signature: Honorary Diploma Program — honorably discharged veterans who could not complete high school due to service can obtain an honorary diploma from an Arizona high school of their choosing" },
    ],
  },
  {
    state: "Arkansas",
    agency: "Arkansas Department of Veterans Affairs",
    site: "https://www.veterans.arkansas.gov/state-benefits",
    bullets: [
      { text: "Property tax: full exemption on the homestead and personal property of veterans rated 100% permanent and total, or receiving Special Monthly Compensation for loss or loss of use of limbs or total blindness; surviving spouses and dependent children may qualify; recertified annually (Ark. Code § 26-3-306)" },
      { text: "Education: Military Dependents Scholarship (MDS) — waives tuition, mandatory fees, and room and board at Arkansas public colleges for the spouse and children of veterans who are KIA, MIA, POW, or rated 100% permanent and total disabled, after federal DEA is applied" },
      { text: "State veterans homes: two ADVA-operated nursing homes (Arkansas State Veterans Homes) offering skilled nursing, hospice, and physical, occupational, and speech therapies for eligible veterans and family members" },
      { text: "Signature: military retired pay is fully exempt from Arkansas income tax" },
    ],
  },
  {
    state: "California",
    agency: "California Department of Veterans Affairs (CalVet)",
    site: "https://www.calvet.ca.gov/",
    bullets: [
      {
        text: "Property tax: Disabled Veterans' Exemption reduces property tax on the principal residence for veterans rated 100% disabled or compensated at the 100% rate due to unemployability from a service-connected condition",
        flag: "exemption amount varies — basic vs. low-income tiers, indexed annually; CalVet's own property-tax page would not load in this pass, so this bullet is from official ca.gov summaries of the CalVet page",
      },
      { text: "Education: College Fee Waiver for Veteran Dependents — waives mandatory systemwide tuition and fees at California Community Colleges, California State University, and University of California campuses for eligible dependents" },
      { text: "State veterans homes: Veterans Homes of California offer affordable long-term care to aged and disabled veterans, and to their eligible spouses and domestic partners" },
      { text: "Signature: CalVet Home Loan program — competitive market interest rates with low or no down payment for eligible veterans" },
    ],
  },
  {
    state: "Colorado",
    agency: "Colorado Division of Veterans Affairs",
    site: "http://vets.colorado.gov",
    bullets: [
      { text: "Property tax: 50% of the first $200,000 of actual value of the primary residence is exempt for a qualifying veteran with a disability — rated by the VA as 100% permanent disability, or granted individual unemployability status (per the Colorado Division of Property Taxation page linked from the Division of Veterans Affairs homepage)" },
      {
        text: "Education: Tuition Waiver Program for Colorado Air and Army National Guard members, listed by the Division of Veterans Affairs / Department of Military and Veterans Affairs",
        flag: "DVA homepage lists the program by name only; amount and institution limits are on the DMVA tuition page, not verified here",
      },
      {
        text: "State veterans homes: Colorado operates Veterans Community Living Centers (its state veterans homes)",
        flag: "centers are referenced on vets.colorado.gov; the homepage text opened did not list a count or locations",
      },
    ],
  },
  {
    state: "Connecticut",
    agency: "Connecticut Department of Veterans Affairs",
    site: "https://portal.ct.gov/dva",
    bullets: [
      {
        text: "Property tax: full exemption on the dwelling of the primary residence for a veteran with a 100% service-connected permanent and total disability rating (effective October 1, 2024); if the veteran does not own a home, the exemption applies to one motor vehicle instead",
        flag: "municipalities may optionally extend the exemption to TDIU veterans and to surrounding land — varies by locality; verified via official ct.gov legislative / municipal pages, not a DVA benefits page",
      },
      { text: "Education: Connecticut waives tuition for qualified veterans attending public colleges and universities (UConn and Connecticut State Colleges and Universities); Charter Oak State College offers eligible veterans a 50% tuition waiver; waivers cover tuition only, not fees, books, parking, or room and board" },
      { text: "State veterans home / healthcare: Connecticut Veterans Affairs campus in Rocky Hill — Residential Programs and Services and a Skilled Nursing Facility (the John L. Levitow Healthcare Center) are two of the department's four core functions" },
      { text: "Signature: Veterans Bus Pass Program — eligible veterans get free bus passes funded and administered by the Connecticut Department of Veterans Affairs (launched July 31, 2026, per the DVA program FAQ on portal.ct.gov)" },
    ],
  },
  {
    state: "Delaware",
    agency: "Delaware Office of Veterans Services / Delaware Commission of Veterans Affairs",
    agencyFlag:
      "Name/link ambiguity: the current official site is titled “Office of Veterans Services - State of Delaware” and describes the Office of Veterans Services as an agency of a Delaware Department of Veterans Affairs that provides administrative support to the Delaware Commission of Veterans Affairs (established 1987, advisory board); older official material used veteransaffairs.delaware.gov and named only the Commission. Confirm the current department name on the site before publishing.",
    site: "https://vets.delaware.gov/",
    bullets: [
      { text: "State veterans home: Delaware Veterans Home in Milford — a long-term care facility (established 2007) offering skilled nursing care on four units with a total of 144 beds (per its official site, vethome.delaware.gov)" },
      { text: "Signature: Delaware Veterans Trust Fund — provides financial assistance to Delaware veterans and families experiencing a verified emergency financial hardship; managed by the Office of Veterans Services and the Delaware Commission of Veterans Affairs, donation-funded, approval not guaranteed and limited by funds available" },
      {
        text: "Property tax / education: See official site for current benefits",
        flag: "no property-tax threshold or state tuition benefit could be verified from the Office of Veterans Services pages found in this pass — do not rely on third-party summaries for the 100% P&T school-tax credit or dependent tuition figures without checking the official site",
      },
    ],
  },
  {
    state: "Florida",
    agency: "Florida Department of Veterans' Affairs",
    site: "https://floridavets.org/",
    entryFlag:
      "Domain note: floridavets.org is the department's official website as stated on its own pages and publications, but it is a .org domain, not a state .gov domain.",
    bullets: [
      {
        text: "Property tax: a range of property tax exemptions is listed by FDVA, including a full homestead exemption for a veteran with a service-connected total and permanent disability and a $5,000 exemption at a 10% or greater rating",
        flag: "multiple exemption categories — amounts, age, and combat-related conditions vary by statute; the threshold detail here was cross-checked against Florida statute summaries, not extracted from an FDVA page opened in this pass — verify in the Florida Veterans' Benefits Guide on floridavets.org",
      },
      { text: "Education: Florida waives out-of-state tuition and fees for all honorably discharged veterans who reside in Florida and are enrolled in Florida public post-secondary institutions, through the Congressman C.W. Bill Young Tuition Waiver Program (extended to spouses/dependent children using GI Bill benefits); scholarships are also available for dependent children and spouses of veterans who died from a service-connected disability or who are 100% service-connected permanent and total disabled" },
      { text: "State veterans homes: FDVA operates a network of nine State Veterans' Homes — eight skilled nursing facilities and one assisted living facility; basic admission requires an honorable discharge, Florida residency, and certification of need" },
    ],
  },
  {
    state: "Georgia",
    agency: "Georgia Department of Veterans Service",
    site: "https://veterans.georgia.gov",
    bullets: [
      {
        text: "Property tax: Disabled Veteran Homestead Tax Exemption — up to $121,812 for 2025 for honorably discharged Georgia veterans who are VA-rated 100% totally disabled, rated less than 100% but entitled to the 100% rate due to unemployability, or entitled to a statutory VA award for loss/loss of use of feet or hands, loss of sight, or permanent impairment of both eyes; extended to unremarried surviving spouses / minor children occupying the home",
        flag: "amount is indexed annually per 38 U.S.C. § 2102, so the dollar figure varies by year",
      },
      { text: "Education: GDVS oversees veterans education, on-the-job training, and apprenticeship training program management; the Georgia Veterans Education Career Transition Resource Center offers career counseling, educational coaching, and workforce training for veterans entering Georgia's public postsecondary systems" },
      { text: "State veterans homes: two Georgia War Veterans Homes — Augusta (130-bed skilled nursing care facility) and Milledgeville (248-bed skilled nursing care facility, with specialty care for Alzheimer's residents)" },
      { text: "Signature: state park entrance fee reduction — Georgia veterans with an honorable discharge and a VA service-connected disability rating are eligible for a 25% reduction of the entrance fee to state parks, historical sites, and recreational areas" },
    ],
  },
  {
    state: "Hawaii",
    agency: "Office of Veterans' Services",
    site: "https://dod.hawaii.gov/ovs/benefits-and-services/",
    bullets: [
      {
        text: "Real property tax exemption on a home owned and occupied by a totally disabled veteran or their widow(er)",
        flag: "OVS states the benefit varies by island/county",
      },
      { text: "$46.00 state motor vehicle registration fee exemption for veterans with a 100% service-connected disability rating" },
      { text: "Burial in the Hawaii State Veterans' Cemetery on Oahu or veterans' cemeteries on Hawaii, Kauai, Maui, Molokai, or Lanai" },
      { text: "Note: the OVS benefits page reviewed lists no state education benefit or veterans home" },
    ],
  },
  {
    state: "Idaho",
    agency: "Idaho Division of Veterans Services",
    site: "https://veterans.idaho.gov",
    bullets: [
      { text: "Property tax reduction of up to $1,500 on the home and up to one acre for veterans with a 100% service-connected disability or receiving 100% compensation due to individual unemployability" },
      { text: "Idaho State Veterans Homes in Boise, Lewiston, Pocatello, and Post Falls" },
      { text: "Education support through the State Approving Agency for GI Bill education and training programs" },
      { text: "Emergency financial assistance for disabled or destitute veterans and their families" },
    ],
  },
  {
    state: "Illinois",
    agency: "Illinois Department of Veterans Affairs",
    site: "https://veterans.illinois.gov",
    bullets: [
      {
        text: "Property tax relief through the Standard Homestead Exemption for Veterans with Disabilities, the Specially Adapted Housing Exemption, and the Returning Veterans' Homestead Exemption",
        flag: "exemption amount varies by disability rating",
      },
      { text: "Illinois Veteran Grant (IVG): covers tuition and mandatory fees at Illinois public universities and community colleges for the equivalent of 4 years of full-time enrollment" },
      { text: "IDVA operates five Illinois Veterans' Homes across the state" },
      { text: "IDVA education programs for dependent children of certain veterans: Educational Opportunity Grant and MIA-POW Scholarship" },
    ],
  },
  {
    state: "Indiana",
    agency: "Indiana Department of Veterans Affairs",
    site: "https://www.in.gov/dva/",
    bullets: [
      {
        text: "Property tax: 100% property tax deduction on the homestead for totally disabled veterans; stackable credits also listed for partially disabled veterans",
        flag: "tiers vary by disability rating, age, and service",
      },
      { text: "Tuition and Fee Exemption for children of disabled veterans and for Purple Heart recipients/their children — up to 124 credit hours at state-supported schools" },
      { text: "Indiana Veterans' Home" },
      { text: "Signature benefit: Military Family Relief Fund — emergency financial assistance for eligible military families" },
    ],
  },
  {
    state: "Iowa",
    agency: "Iowa Department of Veterans Affairs",
    site: "https://dva.iowa.gov/",
    bullets: [
      { text: "Disabled Veteran Homestead Tax Credit for veterans with a permanent 100% service-connected disability rating, or a permanent and total rating based on individual unemployability paid at the 100% rate; IDVA also lists a Military Service Property Tax Exemption" },
      { text: "Iowa Veterans Home in Marshalltown — long-term nursing and residential care for veterans and their spouses" },
      { text: "Education: War Orphan Tuition Assistance and the Branstad-Reynolds Scholarship Fund listed among state benefits" },
      { text: "Signature benefit: Injured Veterans Grant — $2,500 to $10,000 for veterans seriously injured in the line of duty after September 11, 2001" },
    ],
  },
  {
    state: "Kansas",
    agency: "Kansas Office of Veterans Services",
    site: "https://www.kovs.ks.gov/",
    bullets: [
      {
        text: "Property tax relief is a refund, not an exemption: disabled veterans with a service-connected evaluation of 50% or greater may claim a homestead refund",
        flag: "the refund amount varies by household income",
      },
      { text: "KOVS state benefits guide lists Education Benefits and an In-State Tuition Rate — see official site for current details" },
      { text: "KOVS operates two State Veterans' Homes and four State Veterans' Cemeteries" },
      { text: "Signature benefit: Kansas Vietnam War Era Medallion, listed in the KOVS state benefits guide" },
    ],
  },
  {
    state: "Kentucky",
    agency: "Kentucky Department of Veterans Affairs",
    site: "https://veterans.ky.gov/benefits/pages/default.aspx",
    bullets: [
      { text: "Access to veterans' nursing homes, per the KDVA benefits page" },
      { text: "Kentucky Dependent Tuition Waiver: tuition waiver for the spouse and children of certain veterans at state two-year, four-year, or vocational-technical schools" },
      { text: "Five Kentucky State Veterans Cemeteries" },
      {
        text: "Property tax",
        flag: "no veteran-specific property tax exemption was stated on the KDVA benefits pages reviewed — see official site for current benefits",
      },
    ],
  },
  {
    state: "Louisiana",
    agency: "Louisiana Department of Veterans Affairs",
    site: "https://vetaffairs.la.gov/benefits/state",
    bullets: [
      {
        text: "Property tax exemption in addition to the homestead exemption, tiered by rating: 50% to less than 70% — next $2,500 of assessed valuation exempt; 70% to less than 100% — next $4,500 exempt; 100% — exempt from all ad valorem taxation (except certain municipal tax assessments)",
      },
      { text: "Title 29 in-state tuition exemption for children, spouses, and surviving spouses of veterans who meet certain requirements" },
      { text: "LDVA operates five veterans homes; no monthly fee for veterans with a service-connected disability rating of 70–100%" },
      { text: "Signature benefit: Military Family Assistance Fund — up to $10,000 for a need-based claim in a 12-month period" },
    ],
  },
  {
    state: "Maine",
    agency: "Maine Bureau of Veterans' Services",
    site: "https://www.maine.gov/veterans/",
    bullets: [
      {
        text: "Veteran property tax exemption of $6,000 for veterans who served during a recognized war period and are 62 or older, are receiving 100% disability, or became 100% disabled while serving; $50,000 for veterans with a federal grant for specially adapted housing",
        flag: "exemption amount is adjusted by the municipality's certified ratio",
      },
      { text: "Veterans Dependents Educational Benefits: 100% waiver of tuition and mandatory fees at Maine's public universities and community colleges for eligible dependents of 100% permanent and total disabled or deceased veterans" },
      { text: "Free lifetime hunting and fishing license for veterans with a 50% service-connected disability rating" },
      { text: "Lifetime State Park & Museum Pass for Maine veterans; Veterans' Emergency Financial Assistance Program for financial hardships" },
    ],
  },
  {
    state: "Maryland",
    agency: "Maryland Department of Veterans and Military Families",
    site: "https://www.maryland.gov/benefits/veterans",
    bullets: [
      { text: "State and local property tax exemption: veterans with a 100% service disability rating may be eligible for a tax break on their house; some surviving spouses may also qualify" },
      { text: "Charlotte Hall Veterans Home in St. Mary's County — assisted living, skilled nursing care, and memory care for veterans and spouses" },
      { text: "Edward T. Conroy Memorial Scholarship: aid for tuition and other educational expenses for veterans and their family members attending an institution of higher learning in Maryland" },
      { text: "Signature benefit: Maryland Veterans Trust Fund — one-time assistance with rent, mortgage, or utility payments" },
    ],
  },
  {
    state: "Massachusetts",
    agency: "Executive Office of Veterans Services",
    site: "https://vets.mass.gov/",
    bullets: [
      {
        text: "Property tax exemption: $400 for veterans with a service-connected disability of 10% or more, $1,000 for 100% service-connected disability, with higher tiers ($750 / $1,250 / $1,500, up to full) for specified severe disabilities",
        flag: "amount varies by disability tier, and municipalities may double the exemption and/or tie it to inflation under the HERO Act, so the local rate varies by town/city",
      },
      { text: "Signature benefit — Chapter 115 benefits: means-tested financial help for veterans with little income, covering daily living expenses, medical costs, housing and other necessities, applied for through the local Veteran Service Officer; plus an annuity to certain disabled veterans, parents of a deceased veteran, and unmarried spouses of deceased veterans, rising to $2,500 per year under the HERO Act" },
      { text: "Education: Massachusetts Categorical Tuition Waiver for honorably discharged veterans and active service members; Massachusetts National Guard members get a 100% tuition and fee waiver at state colleges, universities and community colleges" },
      { text: "State veterans homes: two — Massachusetts Veterans Home at Chelsea and Massachusetts Veterans Home at Holyoke, providing long-term / residential care" },
    ],
  },
  {
    state: "Michigan",
    agency: "Michigan Veterans Affairs Agency",
    site: "https://www.michigan.gov/mvaa/quality-of-life/quality-of-life/state-of-michigan-veteran-benefits",
    bullets: [
      {
        text: "Property tax exemption: Michigan Disabled Veteran Homestead Property Tax Exemption offers a total property tax exemption of the primary residence owned and occupied by an eligible disabled veteran or surviving spouse",
        flag: "the MVAA benefits page section viewed does not state the disability percentage threshold; confirm the threshold on the official site before relying on it",
      },
      { text: "Education: veterans and active-duty members receive in-state tuition regardless of residency or duty status; Michigan National Guard State Tuition Assistance Program (MINGSTAP) for Guard members; Children of Veterans Tuition Grant for children of a qualified veteran who died or became totally and permanently disabled from a service-connected illness/injury, or is MIA" },
      { text: "State veterans homes: three Michigan Veteran Homes across the state offering skilled nursing care" },
      { text: "Signature benefit — Michigan Veterans Trust Fund (MVTF): grants to help veterans overcome a temporary or short-term financial emergency or hardship" },
    ],
  },
  {
    state: "Minnesota",
    agency: "Minnesota Department of Veterans Affairs",
    site: "https://mn.gov/mdva/resources/familyassistance/",
    bullets: [
      {
        text: "Property tax: Market Value Exclusion for Veterans with a Disability — $150,000 of market value excluded for a veteran with a 70% or greater service-connected disability rating; $300,000 excluded for a 100% permanent and total disability rating",
        flag: "amount varies by rating; sourced from the Minnesota Department of Revenue's official page (revenue.state.mn.us), not an MDVA page, and bills proposing increases were in the legislature, so confirm the current amount on the official site",
      },
      { text: "Education: Minnesota GI Bill — maximum benefit of $15,000, usable for higher education, on-the-job training / apprenticeship, or license and certification; plus the Surviving Children and Spouses Education Benefit and Veteran Education Assistance listed by MDVA" },
      { text: "State veterans homes: MDVA operates eight State Veterans Homes (Bemidji, Fergus Falls, Hastings, Luverne, Minneapolis, Montevideo, Preston, Silver Bay), per MDVA's official agency profile on mn.gov" },
      { text: "Signature benefit — State Soldiers Assistance Program (SSAP): Financial Assistance (Subsistence) for shelter, utilities, healthcare insurance premiums and personal needs, plus Dental Assistance and Optical Assistance, applied for through the County Veterans Service Officer" },
    ],
  },
  {
    state: "Mississippi",
    agency: "Mississippi Veterans Affairs",
    agencyFlag:
      "the official site (msva.ms.gov) styles the agency “Mississippi VA” / “MSVA,” and its strategic plan names the governing body as the State Veterans Affairs Board",
    site: "https://www.msva.ms.gov/",
    bullets: [
      { text: "Property tax (Ad Valorem): any veteran having a service-connected total disability, honorably discharged, is exempt from all Ad Valorem taxes on the assessed value of homestead property, extended to un-remarried surviving spouses (Miss. Code Ann. §27-33-75 and §27-33-67)" },
      { text: "Education: any veteran (as defined by Title 38 U.S. Code) or person entitled to Title 38 education benefits is authorized in-state tuition; children of a Mississippi service member officially reported as POW or MIA can receive an eight-semester scholarship, without cost, at any state-supported college or university" },
      { text: "State veterans homes: five Mississippi State Veterans Nursing Homes — Collins, Jackson, Kosciusko, Oxford, and Tradition (Tradition opened April 11, 2025), per MSVA's official strategic plan on msva.ms.gov" },
      { text: "Signature benefit: veterans having a service-connected disability are exempt from concealed weapon permit fees and renewal fees (residency conditions apply); veterans with a total service-connected disability are also not required to purchase a hunting or fishing license" },
    ],
  },
  {
    state: "Missouri",
    agency: "Missouri Veterans Commission",
    site: "https://mvc.dps.mo.gov",
    bullets: [
      {
        text: "Property tax: no general disabled-veteran homestead exemption is stated in the Missouri Veterans Benefits Guide — a full homestead exemption applies only to a former Prisoner of War with a total service-connected disability; separately, the Missouri Property Tax Credit Claim gives certain 100% service-connected disabled individuals a credit for a portion of real estate taxes or rent paid, maximum $750 for renters and $1,100 for owners who owned and occupied their home",
      },
      {
        text: "Education: Wartime Veteran's Survivors Grant Program (Missouri Department of Higher Education and Workforce Development, dhewd.mo.gov) — for children and spouses of qualifying combat veterans; per semester, tuition capped at the University of Missouri–Columbia resident rate, plus up to $2,000 for room and board and up to $500 for books; limited by statute to 25 students per year",
      },
      { text: "State veterans homes: Missouri Veterans Homes Program manages seven long-term skilled nursing homes (Cameron, Cape Girardeau, Mexico, Mount Vernon, St. James, St. Louis, Warrensburg), 1,238 beds total" },
      { text: "Signature benefit: beginning January 1, 2016, all military retirement pension income is 100% deductible from Missouri income tax (RSMo 143.124), per the MVC Benefits Guide" },
    ],
  },
  {
    state: "Montana",
    agency: "Montana Veteran Affairs Division",
    agencyFlag:
      "official spelling on veterans.mt.gov is “Veteran” (singular); the division is overseen by the Montana Board of Veteran Affairs and administratively attached to the Department of Military Affairs",
    site: "https://veterans.mt.gov/",
    bullets: [
      { text: "Free benefits assistance through a statewide network of 9 veteran service offices, plus the state's veterans' cemeteries program — the main services stated on the MVAD home page" },
      {
        text: "Property tax: Montana Disabled Veterans (MDV) Assistance Program — a veteran must have 100% disability from an injury related to service; depending on marital status and income, the reduction is 100%, 80%, 70%, or 50% of the normal tax rate on the home",
        flag: "amount varies by income and marital status; this detail is from the Montana Department of Revenue's official page (revenue.mt.gov), not the MVAD page",
      },
      {
        text: "Education / veterans homes: not detailed on the MVAD pages checked — see official site for current benefits",
      },
    ],
  },
  {
    state: "Nebraska",
    agency: "Nebraska Department of Veterans' Affairs",
    site: "https://veterans.nebraska.gov/welcome-home",
    bullets: [
      {
        text: "Property tax: Nebraska Homestead Exemption is a property tax relief program for qualifying homeowners, including veterans totally disabled by a service-connected accident or illness, qualified totally disabled veterans or their surviving spouse, and veterans whose home was substantially contributed to by the U.S. Department of Veterans Affairs, and their widow(er)s",
        flag: "NDVA's Taxes page states the threshold as “totally disabled” rather than a percentage rating; confirm the exact rating requirement on the official site",
      },
      { text: "Education: Waiver of Tuition for dependents of eligible veterans — participating schools (University of Nebraska, Nebraska State College System, Nebraska Community College System) waive 100% of tuition charges and tuition-related fees; Reservist Tuition Credit of 50% for enlisted members of a Nebraska-based Active Selected Reserve unit (limited to 200 new applicants per year)" },
      { text: "State veterans homes: four state veterans' homes, part of the Nebraska Hospice-Veteran Partnership, offering hospice/palliative care (per NDVA's Health page)" },
      { text: "Signature benefits: Nebraska Veterans Aid (established 1921) — temporary emergency funds for food, rent/mortgage, utilities, eyeglasses, hearing aids, dental/medical bills, transportation and funeral expenses via the County Veterans Service Officer; Vets Get Pets covers up to $350 in pet adoption fees" },
    ],
  },
  {
    state: "Nevada",
    agency: "Nevada Department of Veterans Services",
    site: "https://veterans.nv.gov/",
    bullets: [
      { text: "State veterans homes: NDVS operates State Veterans Homes that provide skilled nursing, memory care, and rehabilitative services" },
      { text: "Claims and education help: NDVS offers assistance with VA claims and education benefits, plus housing, employment, and healthcare resources, and specialized support for caregivers, survivors, and disabled veterans (per the NDVS home page)" },
      { text: "State veterans cemeteries: NDVS operates state veterans cemeteries providing perpetual care for veterans and eligible family members" },
      {
        text: "Property tax exemption / tuition amounts: not stated on the NDVS pages checked — see official site for current benefits",
      },
    ],
  },
  {
    state: "New Hampshire",
    agency: "New Hampshire Division of Veterans Services (Department of Military Affairs and Veterans Services)",
    site: "https://www.nhveterans.nh.gov/veterans-services/nh-state-benefits-veterans",
    bullets: [
      {
        text: "Property tax credits — amounts vary by locality: wartime veterans, spouses or surviving spouses may be eligible for a credit of $51 up to $750 (RSA 72:28); a $700 credit on the principal place of abode of a permanently and totally disabled service-connected veteran, double amputee or paraplegic, or un-remarried surviving spouse — cities and towns may vote to adopt a higher credit up to $2,000 (RSA 72:35); full exemption from all taxation for a permanently and totally disabled veteran who is blind, paraplegic or a double amputee and owns a specially adapted homestead acquired with VA assistance (RSA 72:36-a)",
        flag: "amounts vary by locality",
      },
      { text: "Education: New Hampshire National Guard members may take courses tuition-free on a space-available basis in state-supported postsecondary institutions (Guard members may transfer the community college tuition waiver to a spouse, until July 1, 2027); free tuition for children of MIA/POW service members and for children of a service member totally and permanently disabled from a service-connected disability" },
      { text: "State veterans home: New Hampshire Veterans' Home at Tilton — a 250-bed intermediate, long-term care facility, with 100 beds assigned to residents with dementia" },
      { text: "Signature benefit: $100 state service bonuses for qualifying wartime service (Vietnam War Bonus, Persian Gulf War Service Bonus, Global War on Terrorism Operations Service Bonus, each under RSA 115-A); also, veterans with any VA service-connected disability rating get free day-use admission to New Hampshire state parks" },
    ],
  },
  {
    state: "New Jersey",
    agency: "New Jersey Department of Veterans Affairs",
    agencyFlag:
      "created when the former Department of Military and Veterans Affairs split into two departments on January 9, 2026, per an official nj.gov notice; older nj.gov pages still reference the former department",
    site: "https://www.nj.gov/dva/",
    bullets: [
      {
        text: "Property tax: full exemption from property taxes on a principal residence for certain totally and permanently disabled war veterans and veterans who served in peacekeeping missions and operations, also available to an un-remarried surviving spouse/civil union/domestic partner (NJ Division of Taxation); plus an annual deduction of up to $250 from property taxes for qualified veterans, also available to an un-remarried surviving spouse/civil union/domestic partner — both administered by the local municipality",
        flag: "administered by the local municipality",
      },
      { text: "State veterans homes: three Veterans Memorial Homes (Paramus, Menlo Park, Vineland) operated by the Division of Veterans Healthcare Services — modern long-term care nursing homes with around-the-clock medical and nursing care; open to honorably discharged veterans, spouses, and Gold Star parents, with preference for residents of at least two years; residents pay according to ability based on income" },
      { text: "Education: War Orphans Tuition Assistance — children of service personnel who die while in the military or due to service-connected disabilities, or who are officially listed as MIA, may claim $500 per year for four years of college or equivalent training (per NJDVA's official Gold Star Families page)" },
      {
        text: "Signature benefit: military pensions are tax-free in New Jersey, and honorably discharged veterans can claim a $6,000 exemption on their New Jersey income tax return (NJ Division of Taxation veteran tax benefits flyer on nj.gov)",
      },
    ],
  },
  {
    state: "New Mexico",
    agency: "New Mexico Department of Veterans' Services",
    site: "https://www.dvs.nm.gov/",
    bullets: [
      {
        text: "Property tax: standard veteran exemption is $10,000, adjusted annually for inflation; Disabled Veteran Exemption gives an exemption equal to the veteran's federal disability rating — prorated for partially disabled veterans (10%–100%) effective 2026",
        flag: "amount varies by disability rating",
      },
      { text: "Education: Wartime Veterans and Vietnam Veterans scholarships provide tuition and required books for undergraduate, master's, or doctoral study at a public or Tribal college in New Mexico (offered by the NM Higher Education Department; applications also available through DVS)" },
      { text: "State Veteran Benefits listed by DVS include educational scholarships, free and reduced-fee hunting and fishing licenses, and specialty license plates" },
      { text: "Signature: New Mexico State Park Lifetime Veterans Pass, issued through DVS (listed on the DVS site alongside the property tax exemptions)" },
    ],
  },
  {
    state: "New York",
    agency: "New York State Department of Veterans' Services",
    agencyFlag: "current site uses “Department”; older state documents still say “Division of Veterans' Services”",
    site: "https://veterans.ny.gov/",
    bullets: [
      {
        text: "Property tax: three exemptions — Alternative Veterans' Exemption, Cold War Veterans' Exemption, and Eligible Funds Exemption — with extra reductions for combat service and VA service-connected disabilities; a local-option full exemption for permanently and totally disabled veterans was enacted in Dec 2025",
        flag: "amounts and school-tax application vary by locality / local adoption",
      },
      { text: "Education: Veterans Tuition Award covers the cost of in-state tuition for SUNY undergraduate/graduate degrees or vocational training programs (per ny.gov veterans page)" },
      { text: "Veterans homes: New York State Veterans' Nursing Homes provide skilled nursing care and rehab services to eligible veterans and dependents (per ny.gov)" },
      { text: "Signature: Blind Annuity — DVS administers a monthly stipend program for visually impaired veterans and eligible surviving spouses; DVS also administers the Gold Star Parent Annuity" },
    ],
  },
  {
    state: "North Carolina",
    agency: "North Carolina Department of Military and Veterans Affairs",
    site: "https://www.milvets.nc.gov/",
    bullets: [
      { text: "Property tax: disabled veteran homestead exemption is the first $45,000 of assessed real property value, for a veteran with a permanent and total (100%) service-connected disability or who received specially adapted housing benefits under 38 U.S.C. 2101" },
      { text: "Education: North Carolina Scholarship Program for children of wartime veterans (listed in DMVA's Resource Guide / scholarship program materials)" },
      { text: "State veterans homes: DMVA oversees 5 State Veterans Homes (and 4 State Veterans Cemeteries), providing full-service skilled nursing care" },
      { text: "VSO help: DMVA Veterans Service Officers connect veterans to state programs including tax relief, vehicle tags, and education support, free of charge" },
    ],
  },
  {
    state: "North Dakota",
    agency: "North Dakota Department of Veterans Affairs",
    site: "https://www.veterans.nd.gov",
    bullets: [
      {
        text: "Property tax: Disabled Veterans Property Tax Credit for veterans with a service-connected disability of 50% or greater; the credit may reduce the taxable value of the homestead",
        flag: "credit amount varies by disability percentage and taxable-value cap",
      },
      { text: "Education: ND Dependent Tuition Waiver (listed in the NDDVA Transition Guide on veterans.nd.gov) for dependents of certain veterans" },
      { text: "State veterans home: North Dakota Veterans Home in Lisbon — 52 skilled nursing beds and 98 basic care beds, for honorably discharged veterans and their spouses (ndvh.nd.gov)" },
      {
        text: "Signature: NDDVA grant program for urgent, unmet needs (e.g., dental, vision, hearing, housing, transportation to medical appointments)",
        flag: "income- and asset-based",
      },
    ],
  },
  {
    state: "Ohio",
    agency: "Ohio Department of Veterans Services",
    site: "https://dvs.ohio.gov/",
    bullets: [
      {
        text: "Property tax: expanded Homestead Exemption for veterans rated 100% disabled due to a service-connected disability",
        flag: "reduction amount is inflation-adjusted and varies by tax year (ODVS lists “Homestead Exemption” in its Benefits Resource Guide; current amounts are published by the Ohio Department of Taxation)",
      },
      { text: "Education: Ohio War Orphans Scholarship — ODVS coordinates the War Orphans Scholarship Board, providing scholarships to children of Ohio's deceased and injured veterans" },
      { text: "Ohio Veterans Homes: provide independent living, nursing care, and memory care for eligible veterans (ODVS Benefits Resource Guide)" },
      { text: "Signature: Military Injury Relief Fund (MIRF) — tax-exempt monetary payments to service members injured in combat or diagnosed with PTSD related to combat after October 7, 2001" },
    ],
  },
  {
    state: "Oklahoma",
    agency: "Oklahoma Department of Veterans Affairs",
    site: "https://oklahoma.gov/veterans.html",
    bullets: [
      { text: "Property tax: exemption for the full amount of the fair cash value of the homestead for a veteran certified by the VA to have a 100% permanent disability (Oklahoma Tax Commission Form 998, on oklahoma.gov; ODVA lists “Ad Valorem Property Tax Breaks for Veterans”)" },
      { text: "Education: Oklahoma Heroes Promise Scholarship and Oklahoma State National Guard Tuition Waiver (listed by ODVA under Veteran Education Benefits)" },
      { text: "State veterans homes: Oklahoma State Veterans Homes — ODVA operates seven long-term care facilities throughout Oklahoma" },
      {
        text: "Financial: ODVA also lists a sales tax exemption for honorably discharged veterans and excise tax exemptions for disabled veterans",
        flag: "eligibility thresholds for those items were truncated on the ODVA page as retrieved",
      },
    ],
  },
  {
    state: "Oregon",
    agency: "Oregon Department of Veterans' Affairs",
    site: "https://www.oregon.gov/odva/Benefits/Pages/default.aspx",
    bullets: [
      {
        text: "Property tax: disabled veteran may exempt some of the homestead's assessed value; to qualify, the veteran must be certified by the VA or a branch of the Armed Forces as having disabilities of 40 percent or more (or certified yearly by a licensed physician as 40 percent or more disabled)",
        flag: "exempt amount not stated on the ODVA Taxes page",
      },
      { text: "Education: Veterans Educational Bridge Grant — grants of up to $5,000 to eligible veterans to help complete certain educational or training programs (ODVA program summary)" },
      { text: "State veterans homes: two Oregon Veterans' Homes, in Lebanon and The Dalles, offering skilled nursing, rehabilitation, and memory-related care" },
      { text: "Signature: Oregon Veteran Home Loan Program — Oregon offers its own veteran home loan program, separate from the federal VA home loan program" },
    ],
  },
  {
    state: "Pennsylvania",
    agency: "Pennsylvania Department of Military and Veterans Affairs",
    site: "https://www.pa.gov/agencies/dmva.html",
    bullets: [
      {
        text: "Property tax: Disabled Veterans' Real Estate Tax Exemption for a veteran with a service-connected total or 100% permanent disability (as declared by the VA), on the principal dwelling",
        flag: "exemption is need-based — financial need must be determined; the presumptive need level effective Jan 1, 2025 was $114,637 on the DMVA application form",
      },
      { text: "Education: Educational Gratuity Program for children of deceased and disabled veterans (listed by DMVA among the programs county directors help veterans apply for)" },
      { text: "State veterans homes: six Pennsylvania Veterans Homes (DMVA / Governor's Advisory Council on Veterans Services listing, pa.gov)" },
      { text: "Other DMVA pensions listed on pa.gov: Blind Veterans Pension and Amputee & Paralyzed Veterans Pension, plus Veterans Emergency / Temporary Assistance" },
    ],
  },
  {
    state: "Rhode Island",
    agency: "Rhode Island Office of Veterans Services",
    site: "https://vets.ri.gov/",
    bullets: [
      {
        text: "Property tax: vets.ri.gov lists “Property Tax Exemptions” as a benefit category, but amounts are set by municipality — state law (R.I. Gen. Laws § 44-3-4, via rilegislature.gov) sets a $1,000 base veterans' exemption, with an additional $10,000 exemption for a veteran determined totally disabled through service-connected disability available by local ordinance",
        flag: "varies widely by city/town; no single statewide disabled-veteran figure",
      },
      {
        text: "Education: the Rhode Island Office of Veterans Services annual report on vets.ri.gov states state colleges/universities waive tuition for Rhode Island National Guard members and provide free tuition for service-connected disabled veterans rated at 10% or higher",
        flag: "this was not confirmed on a current dedicated tuition page on vets.ri.gov, so verify with RIVETS before relying on it",
      },
      { text: "State veterans home: Rhode Island Veterans Home in Bristol provides skilled nursing care / housing and care for Rhode Island wartime veterans (vets.ri.gov)" },
    ],
  },
  {
    state: "South Carolina",
    agency: "South Carolina Department of Veterans' Affairs",
    site: "https://scdva.sc.gov/",
    bullets: [
      { text: "Property tax: a South Carolina veteran who is totally and permanently disabled may claim a property tax exemption on real estate owned, beginning with the year the disability occurs (expanded legislation retroactive to 2022); surviving spouses may claim it on a primary residence and up to five adjoining acres (SCDVA benefits booklet / consumer resources)" },
      {
        text: "Education: SC Tuition Assistance for Certain War Veterans' Children — tuition waiver for qualified children of certain veterans at a South Carolina state-supported college, university, or post-high-school technical education school",
        flag: "veteran and student residency requirements apply",
      },
      { text: "State veterans homes: SCDVA lists State Veterans Homes / State Veteran Nursing Homes for long-term care (active-duty service and a discharge other than dishonorable are among the eligibility notes on the SCDVA benefits page)" },
      { text: "Signature: all military retirement pay is exempt from South Carolina individual income tax beginning in tax year 2022 (SCDVA benefits booklet); SCDVA also runs the Palmetto Pathfinder veteran mentorship program" },
    ],
  },
  {
    state: "South Dakota",
    agency: "South Dakota Department of Veterans Affairs",
    site: "https://vetaffairs.sd.gov/benefits/state/intro%20to%20state%20benefits.aspx",
    bullets: [
      { text: "Property tax exemption for disabled veterans: up to $200,000 of assessed value exempt; veteran must be rated permanently and totally disabled from a service-connected disability (SD Department of Revenue, dor.sd.gov). Separate full exemption for paraplegic veterans." },
      { text: "Free tuition for veterans: one month of free tuition per month of qualifying service, minimum one and maximum four academic years, at state-supported universities / technical colleges, for veterans not eligible for GI Bill or other federal education payments (SDDVA education page)." },
      { text: "Free claims help from SDDVA and County / Tribal Veterans Service Officers in each county." },
    ],
  },
  {
    state: "Tennessee",
    agency: "Tennessee Department of Veterans Services",
    site: "https://www.tn.gov/veteran",
    bullets: [
      {
        text: "Property tax relief (state-funded reimbursement, not an exemption): calculated on the first $175,000 of full market value of the primary residence, for veterans with a service-connected permanent and total disability (TN Comptroller 2026 Property Tax Relief Brochure, comptroller.tn.gov)",
        flag: "a bill to raise the cap to $200,000 was introduced in the General Assembly; TDVS pages still state $175,000",
      },
      { text: "TDVS operates five Tennessee State Veterans Cemeteries; veterans can pre-register for burial (TDVS)." },
      {
        text: "TDVS serves as liaison for four Tennessee State Veterans Homes (TDVS state benefits page)",
        flag: "TDVS says “liaison for four” homes, while other official / homes-board sources count five homes; count differs by source",
      },
      { text: "Free claims assistance at 12 State Veterans Services Offices (TDVS)." },
    ],
  },
  {
    state: "Texas",
    agency: "Texas Veterans Commission",
    site: "https://tvc.texas.gov/",
    entryFlag:
      "The TVC site itself returned “Access Denied” when opened during research; the bullets above are sourced from other official Texas .gov pages (gov.texas.gov, tmd.texas.gov), not from tvc.texas.gov directly.",
    bullets: [
      {
        text: "Property tax: a veteran rated with a total disability of 100 percent is exempt from property taxes on the total value of their residential homestead; partial exemptions vary by disability rating (Office of the Texas Governor, gov.texas.gov)",
        flag: "sliding scale by rating; e.g. $12,000 exemption at age 65+ with a disability rating of at least 10 percent, blindness, or loss of use of a limb",
      },
      { text: "Hazlewood Act: up to 150 hours of tuition exemption, including most fee charges, at public institutions of higher education in Texas, for qualified veterans, spouses, and dependent children (Texas Military Department, tmd.texas.gov)." },
      { text: "Texas Veterans Land Board: low-interest land, home, and home improvement loans for Texas veterans and military members (gov.texas.gov)." },
    ],
  },
  {
    state: "Utah",
    agency: "Utah Department of Veterans and Military Affairs",
    site: "https://veterans.utah.gov/benefits-of-a-vso/",
    bullets: [
      {
        text: "Disabled Veteran Property Tax Abatement: available to veterans disabled in military service at at least 10 percent disability (and unmarried surviving spouses / minor orphans); abatement is up to $505,548 of taxable value of a residence, based on the percentage of disability (UDVMA 2026 Benefit Book, veterans.utah.gov)",
        flag: "amount is proportional to rating and the cap figure is the one printed in the 2026 book; it is indexed and changes by year",
      },
      { text: "Purple Heart Tuition Waiver: tuition waiver at all public institutions of higher learning in Utah, usable toward a degree up to and including a master's degree; plus the Veterans Tuition Gap Program, a state supplemental grant for veterans whose federal education benefits are exhausted or unavailable (UDVMA 2026 Benefit Book)." },
      { text: "UDVMA oversees four State Veteran nursing homes and the Utah Veterans Cemetery and Memorial Park (UDVMA 2026 Benefit Book)." },
      { text: "Utah Veteran First-Time Homebuyer Grant: $2,500 grant toward a first-time home purchase in Utah for eligible veterans and service members (UDVMA 2026 Benefit Book)." },
    ],
  },
  {
    state: "Vermont",
    agency: "Vermont Office of Veterans Affairs",
    site: "https://veterans.vermont.gov/office-veterans-affairs/programs-administered-office-veterans-affairs",
    bullets: [
      {
        text: "Property tax exemption: veterans receiving Disability Compensation at a rating of 50% or higher (also veterans receiving Improved Pension, or collecting permanent medical military retirement pay, and some surviving spouses) are eligible; state law mandates a minimum $10,000 exemption, and towns may increase it to $40,000 (OVA Tax Exemptions page, veterans.vermont.gov)",
        flag: "amount varies by town, $10,000–$40,000",
      },
      { text: "Free hunting / fishing license for veterans with a 60% service-connected disability rating (OVA programs page)." },
      { text: "Vermont Veterans Memorial Cemetery in Randolph Center, operated by the Office of Veterans Affairs (OVA programs page)." },
      { text: "Veteran Assistance Fund: low-income veterans facing economic hardship may be eligible for a one-time payment for critical needs such as housing and utilities (OVA programs page)." },
    ],
  },
  {
    state: "Virginia",
    agency: "Virginia Department of Veterans Services",
    site: "https://www.dvs.virginia.gov/benefits-services/disability-claims-pensions",
    bullets: [
      {
        text: "Real property tax exemption: the dwelling that is the principal residence of a veteran rated 100 percent service-connected, permanent, and total disability, plus up to one acre of land, is exempt from taxation (Virginia Administrative Code, Title 1, Agency 80, law.lis.virginia.gov)",
        flag: "a locality may exempt a larger acreage, so land coverage varies by locality; the exemption is filed locally, not with DVS",
      },
      { text: "Virginia Military Survivors and Dependents Education Program (VMSDEP): waives tuition and mandatory fees at Virginia's public colleges and universities for spouses and children of a qualified service member who was killed, missing in action, or a prisoner of war in covered military combat, or of a qualified veteran rated totally and permanently disabled as a direct result of such service (DVS informational document, dvs.virginia.gov)." },
      { text: "Virginia Veterans Care Centers: DVS skilled nursing facilities provide long-term nursing, memory care, and short-term rehabilitation (DVS informational document, dvs.virginia.gov)." },
    ],
  },
  {
    state: "Washington",
    agency: "Washington State Department of Veterans Affairs",
    site: "https://dva.wa.gov/veterans-service-members-and-their-families/veterans-benefits/claims-assistance/benefits-available-service-connected-disabled-veterans-0-100",
    bullets: [
      {
        text: "Property tax relief at 80%: “Washington State Property Tax Relief or Exemption — income based property tax exemptions and deferrals may be available to seniors, those retired due to disability and veterans compensated at the 80% service connected rate” (WDVA benefits page)",
        flag: "income-based; amount varies with income, property value, and local levy rates",
      },
      { text: "Four State Veterans Homes: the Washington Soldiers Home, the Washington Veterans Home, the Spokane Veterans Home, and the Walla Walla Veterans Home, for honorably discharged veterans and, in some cases, their spouses (WDVA Resources page, dva.wa.gov). WDVA page also states state veterans homes nursing care at no cost for veterans rated 70%–100% service-connected." },
      { text: "Tuition waiver for dependents: state community colleges, technical colleges, colleges and universities must waive all undergraduate tuition and fees for eligible dependents of eligible veterans, up to 250 quarter credits or equivalent semester credits, under RCW 28B.15.621 (WDVA benefits page)." },
      { text: "Washington State Parks lifetime pass at a 30%+ service-connected rating (WDVA benefits page)." },
    ],
  },
  {
    state: "West Virginia",
    agency: "West Virginia Department of Veterans Assistance",
    site: "https://veterans.wv.gov/benefits-assistance/benefits-assistance",
    bullets: [
      {
        text: "Homestead / property tax: veterans with 100% permanent and total service-connected disabilities may be exempt from certain property taxes; separately, the Disabled Veteran Real Property Tax Credit (claimable from Jan. 1, 2024) is for honorably discharged disabled veteran homeowners with a 90–100% combined disability rating, and “this Credit will replace the existing $20,000 property tax exemption” (WV Veterans Services page, grants.wv.gov)",
        flag: "mechanism changed in 2024 from an exemption to a tax credit; older sources still describing a $20,000 exemption are out of date",
      },
      {
        text: "War Orphan Education Program: qualifying students are not charged tuition and fees by a West Virginia post-secondary institution; WVDVA awards for room, board, books and other living expenses are capped at $1,000 per semester / $2,000 per year (grants.wv.gov)",
        flag: "award amount fluctuates with the number of applications each semester",
      },
      { text: "Military retirement pay is exempt from West Virginia state income tax for taxable years beginning after December 31, 2017, including Reserves / National Guard retirement paid by the U.S. or the State of West Virginia (grants.wv.gov)." },
      { text: "Medal of Honor and Purple Heart tuition waivers: all public institutions of higher education waive tuition and mandatory fees for West Virginia residents awarded the Medal of Honor or Purple Heart (grants.wv.gov)." },
    ],
  },
  {
    state: "Wisconsin",
    agency: "Wisconsin Department of Veterans Affairs",
    site: "https://dva.wi.gov/benefits/",
    bullets: [
      { text: "Veterans and Surviving Spouses Property Tax Credit: a refundable credit covering 100% of property taxes paid on a primary Wisconsin residence and up to one acre of land; the veteran must have a 100% service-connected disability rating from the VA or qualify based on individual unemployability; WDVA certifies eligibility and the Department of Revenue administers the credit (WDVA property tax credit page, dva.wi.gov; WI Department of Revenue, revenue.wi.gov)." },
      { text: "Wisconsin GI Bill: listed by WDVA among its education benefits, alongside the Veteran Grant for Private Nonprofit Schools, Vet Ed Reimbursement Grant, and Retraining Grant (WDVA Benefits page, dva.wi.gov)." },
      { text: "State veterans homes: WDVA administers state-level benefits including assistance with the Wisconsin GI Bill, state veterans homes, grants, and employment programs (WDVA “Get Started” page, dva.wi.gov)." },
      { text: "MyWisVets: WDVA's official online portal to check eligibility, apply for, and manage state benefits (WDVA “Get Started” page)." },
    ],
  },
  {
    state: "Wyoming",
    agency: "Wyoming Veterans Commission",
    site: "https://www.wyomilitary.wyo.gov/veterans/",
    bullets: [
      { text: "The Commission has oversight of the Veterans Service Officers, Oregon Trail State Veterans Cemetery, Wyoming Veterans Memorial Museum, and military records (Wyoming Veterans Commission page, wyomilitary.wyo.gov)." },
      {
        text: "State benefits listed by the Wyoming Judicial Branch (wyocourts.gov) under the Wyoming Veterans Commission: Wyoming Veteran's Property Tax Exemption (including motor vehicles); Free Tuition for War Veterans and Surviving Dependents; Wyoming Veteran's License Plates & License Plate Stickers; Hunting, Fishing, and Parks benefits; education and other transition assistance",
        flag: "the Commission's own page does not state exemption amounts, and secondary sources conflict on the property tax exemption amount ($3,000 vs. $6,000 of assessed value), so no amount is stated here",
      },
      { text: "Military-related license plates are issued and renewed at the County Treasurer's Office for Wyoming-resident veterans meeting statutory eligibility (Wyoming Veterans Commission page)." },
    ],
  },
  {
    state: "District of Columbia",
    agency: "Mayor's Office of Veterans Affairs (Office of Veterans Affairs)",
    agencyFlag:
      "the task brief named it “District of Columbia Office of Veterans Affairs”; current dc.gov pages style it “Mayor's Office of Veterans Affairs” / “Office of Veterans Affairs” (MOVA)",
    site: "https://communityaffairs.dc.gov/mova",
    bullets: [
      {
        text: "Disabled Veterans' Homestead Deduction: residential real property owned by a veteran classified by the VA as having a total and permanent disability from a service-incurred or service-aggravated condition, or paid at the 100% disability rating level for unemployability, is eligible for a $445,000 reduction in assessed value, effective Oct. 1, 2022 (DC Office of Tax and Revenue, otr.cfo.dc.gov)",
        flag: "additional conditions apply on the OTR page (ownership / residency / income-type conditions), and properties receiving it are not eligible for the regular Homestead Deduction, Senior Citizen/Disabled Tax Relief, or Assessment Cap Credit",
      },
      { text: "Disabled Veterans' Spouse Homestead Deduction: effective Oct. 1, 2025, residential real property owned by a disabled veteran's eligible surviving spouse may qualify for a $445,000 reduction in assessed value (otr.cfo.dc.gov)." },
      { text: "VetsRide: a citywide, on-demand shared ride program providing free transportation for DC veterans — eligibility as stated by the Department of For-Hire Vehicles / MOVA: a veteran resident of the District of Columbia with annual income less than $30,000; trips within DC, for medical, employment, housing, or other opportunities (dfhv.dc.gov)." },
      { text: "Free VA claims assistance: MOVA's District Veteran Service Officers assist DC veterans and family members with federal VA claims and benefits, including disability compensation, healthcare enrollment, pension, and burial / death benefit claims (communityaffairs.dc.gov)." },
    ],
  },
];
