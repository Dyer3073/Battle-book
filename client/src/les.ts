// LES Decoder — transcribed from the researched pack
// (~/workspace/military-app/les/les.md, researched Nov 9, 2026).
// Anchor source: the DFAS "Understanding Your LES" guide dated
// May 14, 2026 — the most recent official DFAS LES reference the
// pack could verify, and the pack's criterion for the 78-field
// count. Two things stated plainly on the section page, from the
// pack: no DFAS remarks-code table exists (the Remarks block is
// plain-language text, not codes), and no numbered LES fields carry
// EFT/direct-deposit remarks or routing information. USMC variants
// carry the pack's caveat below.

export const LES_INTRO =
  "Every numbered field on the current Leave and Earnings Statement, and every entitlement, deduction, and allotment line code — decoded in DFAS's own words wherever the DFAS guide prints them. Tap any field in the LES layout, or search the field list, to see its decode.";

export const LES_USMC_CAVEAT =
  "The DFAS May 2026 guide packet is titled for the Army, Navy, Air Force, and Space Force — it is not labeled a Marine Corps document, even though DFAS is the Marine Corps' pay provider. The extracted documents do not flag where the Marine Corps LES renderings differ (the Corps runs on the MCTFS pay system). What is confirmed for Marines here: every line-code value (entitlements, deductions, allotments) is stated in the guide to apply to “ALL Services” and names the Marines explicitly, and the SGLI rate change reached Marine LESs the same way (the “NEW SGLI PREMIUMS” remark). For any Marine-specific field rendering, verify against USMC/DFAS Marine pages before treating a decoding as final.";

export type LesField = {
  id: number | string;
  label: string;
  meaning: string;
  values?: string;
  detail?: string;
  note?: string;
};

export const LES_HEADER: LesField[] = [
  { id: 1, label: "NAME", meaning: "Last name, first name, middle initial of the service member to whom the LES belongs." },
  { id: 2, label: "SOC SEC NUM", meaning: "The member's social security number (truncated on the printed statement)." },
  { id: 3, label: "GRADE", meaning: "The member's current pay grade." },
  { id: 4, label: "PAY DATE", meaning: "Date the member entered active duty, in YYMMDD format. This field is used to figure the years of service for basic pay (the pay-longevity date)." },
  { id: 5, label: "YRS SVC", meaning: "The number of years of service, computed from the Pay Date (field 4), for basic pay purposes." },
  { id: 6, label: "ETS", meaning: "Expiration Term of Service, in YYMMDD format. For officers, this is shown as the service separation date." },
  { id: 7, label: "BRANCH", meaning: "The member's branch of service." },
  { id: 8, label: "ADOS", meaning: "Active Duty Operational Support budget indicator — appears only on the LES of an activated reserve component member.", values: "Values: blank = pay grade O-6 and below at a unit unrelated to a Mobilization Billet; B = Pay Command Budget indicator; M = Mobilization Billet indicator." },
  { id: 9, label: "PERIOD COVERED", meaning: "The pay period the statement represents, shown as a date range from the first day to the last day of the month." },
  { id: 10, label: "ADIO / UIC (Army: ADSN; Air Force/Space Force: DSSN)", meaning: "The finance and accounting office that services the member's pay account. Army: Accounting and Disbursing Station Number (ADSN). Air Force/Space Force: Disbursing Station Symbol Number (DSSN).", values: "Label varies by service: ADIO/UIC (Navy renderings) / ADSN (Army) / DSSN (Air Force, Space Force)." },
  { id: 11, label: "MEMBER ID", meaning: "The DoD Identification Number issued to the member (the 10-digit number also listed on the member's ID card)." },
];

export const LES_PAY_BLOCK: LesField[] = [
  { id: 12, label: "ENTITLEMENTS", meaning: "A summary of the type, and current monthly amount, of every entitlement the member earns — Basic Pay, BAS, BAH, and any special/incentive pays. The month-end LES lists the totals for the entire month; the mid-month LES lists exactly half of the expected month-end totals (unless a transaction has been processed in that period). Entitlements are made up of one or more elements; the full code list is in the Line Codes tab.", note: "Verify your pay here first — every pay problem in the Readiness & Pay section starts on this block." },
  { id: 13, label: "DEDUCTIONS", meaning: "A summary of the amount and type of every deduction from the member's pay for the month." },
  { id: 14, label: "ALLOTMENTS", meaning: "A summary of the amount and type of every allotment the member has in effect for the month — payments the member directs out of their pay to designated recipients." },
  { id: 15, label: "TAXABLE WAGES THIS PERIOD", meaning: "Total earnings that were subject to federal taxes for the period." },
  { id: 16, label: "SUMMARY: PREV CURR BAL", meaning: "For the mid-month LES: the amount of the mid-month payment. For the month-end LES: the amount of pay accrued since the last LES." },
  { id: 17, label: "SUMMARY: + TOTAL ENTITLEMENTS", meaning: "The total amount of all of the member's monthly entitlements, from the entitlements summary." },
  { id: 18, label: "SUMMARY: − TOTAL DEDUCTIONS", meaning: "The total amount of all of the member's monthly deductions, from the deductions summary." },
  { id: 19, label: "SUMMARY: − TOTAL ALLOTMENTS", meaning: "The total amount of all of the member's monthly allotments, from the allotments summary." },
  { id: 20, label: "= NET AMOUNT", meaning: "The total amount of pay the member is entitled to for the period (the result of the arithmetic in fields 17–19)." },
  { id: 21, label: "BK CHG THIS PD (BANK CHARGE / CARRIED FORWARD)", meaning: "The amount the member is carrying forward from a previous LES to the next LES, because of an overpayment or underpayment — money already paid, or still owed, that is being settled against a future period." },
  { id: 22, label: ".CR FWD (CREDIT FORWARD)", meaning: "The amount the member is carrying forward to the next LES, because of an overpayment or underpayment carried into the next period." },
  { id: 23, label: "= AMT DUE (AMOUNT DUE)", meaning: "The amount of pay the member is due for the pay period. This is the amount the member receives from the pay account on payday." },
  { id: 24, label: "EOM NET PAY (END-OF-MONTH NET PAY)", meaning: "The projected amount of pay, for the end-of-month payday, that the member will receive on the payday if the member does not process any new entitlements or deductions prior to that payday." },
  { id: 25, label: "DIEMS (DAYS IN EXCESS OF MONTHS STATEMENT DATE)", meaning: "The number of days over 30 for which the member has been paid, which have not yet been recovered.", note: "Appears only on the LES of a member whose pay has an unrecovered days-over-30 balance (the glossary's wording is garbled at this entry; the plain sense is: overpaid days not yet clawed back)." },
];

export const LES_LEAVE: LesField[] = [
  { id: 26, label: "BF BAL (BROUGHT FORWARD BALANCE)", meaning: "The accrued leave balance the member brought forward from the prior fiscal year." },
  { id: 27, label: "ERND (EARNED)", meaning: "The amount of leave accrued during the current fiscal year to date (members accrue 2.5 days per month, 30 days per year)." },
  { id: 28, label: "USED", meaning: "The amount of leave used during the current fiscal year to date." },
  { id: 29, label: "CR BAL (CURRENT BALANCE)", meaning: "The member's accrued leave balance at the end of the current period." },
  { id: 30, label: "LV LOST", meaning: "Leave lost — days already lost (for example, use-or-lose days taken at fiscal-year rollover)." },
  { id: 31, label: "LV PAID", meaning: "The number of days of leave the member has sold back (paid for) in their career to date." },
  { id: 32, label: "LV BAL (LEAVE BALANCE)", meaning: "The accrued leave balance projected through the member's ETS (field 6) — the balance the member would carry if they served to ETS earning and using leave at the projected rate." },
  { id: 33, label: "USE LOSE (USE OR LOSE)", meaning: "The amount of accrued leave that must be used before the end of the current fiscal year, or it will be lost (the fiscal year ends September 30)." },
];

export const LES_FED_TAX: LesField[] = [
  { id: 34, label: "WAGE PERIOD", meaning: "The amount of federal-tax wages earned in the current pay period." },
  { id: 35, label: "WAGE YTD", meaning: "The amount of federal-tax wages earned in the current tax year to date." },
  { id: 36, label: "EX", meaning: "The number of exemptions claimed on the current Form W-4 on file.", note: "The classic-LES field. The May 2026 glossary still documents this field, but the redesigned (2020+) Form W-4 no longer uses an exemption count — the glossary text reads as superseded. Where the current federal tax block actually lives: see the four W-4 fields following field 78. Both are shown here; field 36 is flagged, not hidden." },
  { id: 37, label: "ADD'L TAX", meaning: "Additional federal taxes withheld this period, beyond the amount computed by the tax tables — the extra withholding the member elected." },
  { id: 38, label: "TAX YTD", meaning: "Total federal taxes withheld in the current tax year to date." },
  { id: 39, label: "MARITAL STATUS (M/S)", meaning: "The member's marital status as recorded on the current Form W-4 on file.", values: "S = Single; M = Married." },
];

export const LES_FICA: LesField[] = [
  { id: 40, label: "SOC WAGE", meaning: "Gross wages subject to social security tax in the current period." },
  { id: 41, label: "SOC TAX YTD", meaning: "Total amount of social security tax withheld in the current year to date.", note: "Documented in DFAS's classic-LES presentation; the May 2026 guide's own FICA summary splits the block into “SOC TAX / MED WAGE / MED TAX” without a YTD field — if your LES shows SOC TAX YTD, this is its decoding." },
  { id: 42, label: "MED WAGE", meaning: "Gross wages subject to Medicare tax in the current period." },
  { id: 43, label: "MED TAX", meaning: "Amount of Medicare tax withheld in the current period." },
  { id: 44, label: "SOC TAX (classic-layout label)", meaning: "Amount of social security tax withheld in the current period. Classic-LES label variant of the FICA block fields." },
];

export const LES_STATE_TAX: LesField[] = [
  { id: 45, label: "ST (STATE)", meaning: "The two-letter state code for the state the member is paying state taxes to (state of legal residence for tax purposes)." },
  { id: 46, label: "WAGE PERIOD", meaning: "Amount of wages subject to state income tax in the current pay period." },
  { id: 47, label: "WAGE YTD", meaning: "Amount of wages subject to state income tax in the current year to date." },
  { id: 48, label: "EX (EXEMPTIONS)", meaning: "The number of state withholding exemptions the member has claimed.", note: "Still literal “exemptions” here — state W-4 equivalents retained exemption counts in many states even after the 2020 federal redesign. A classic-vs-new split: the federal EX field (36) is the questionable one; this state one is not." },
  { id: 49, label: "ADD'L TAX", meaning: "Additional state taxes withheld this period, beyond the amount computed by the state tax tables — the extra withholding the member elected." },
  { id: 50, label: "TAX YTD", meaning: "Total state taxes withheld in the current year to date." },
];

export const LES_PAY_DATA: LesField[] = [
  { id: 51, label: "SGLI", meaning: "The amount of SGLI coverage the member has elected.", values: "Blank = no coverage elected; $500K = maximum coverage ($500,000); or the elected amount in increments ($50K steps below the maximum)." },
  { id: 52, label: "FAM SGLI (FAMILY SGLI)", meaning: "The amount of Family SGLI coverage the member has elected for their spouse (Family SGLI covers the spouse; dependent children are automatically insured at no cost).", values: "Blank = no coverage elected; $100K = maximum spousal coverage ($100,000); or the elected amount in increments." },
  { id: 53, label: "AGE 50+", meaning: "Flag shown when the member is age 50 or older (drives TSP catch-up contribution eligibility display).", values: "Y = member is 50 or older." },
  { id: 54, label: "PCE DATE (PAY COMPUTATION ENTRY DATE)", meaning: "The date used, with field 4, to compute the member's pay-longevity and years-of-service position." },
  { id: 55, label: "TSP RATE", meaning: "The percentage or dollar amount of basic pay the member contributes to the Thrift Savings Plan." },
  { id: 56, label: "TSP CURR (TSP CURRENT)", meaning: "The amount of TSP contributions by type (regular, catch-up) during this pay period.", note: "Documented as a current legacy-LES field in a Feb 2025 DFAS TSP statement guide while retired from the DFAS “new LES” template; the May 2026 glossary re-lists TSP CURRENT fields among pay-data fields. Shown here with both facts because the templates differ." },
  { id: 57, label: "TSP YTD", meaning: "Total TSP contributions in the current tax year to date." },
  { id: 58, label: "TSP LOAN # (NUMBER)", meaning: "Unique identifier (loan number) for the member's current TSP loan." },
  { id: 59, label: "TSP LOAN $ (AMOUNT)", meaning: "The current outstanding balance of the member's TSP loan." },
  { id: 60, label: "TSP CATCH UP CURR (CATCH-UP CURRENT)", meaning: "The amount of TSP catch-up contributions during this pay period (catch-up contributions are available to members age 50 and older, field 53)." },
  { id: 61, label: "TSP CATCH UP YTD", meaning: "Total TSP catch-up contributions in the current tax year to date." },
  { id: 62, label: "TSP EXEMPT CURR (EXEMPT CURRENT)", meaning: "The amount of tax-exempt TSP contributions (from combat-zone service) during this pay period." },
  { id: 63, label: "TSP EXEMPT YTD", meaning: "Total tax-exempt TSP contributions in the current tax year to date." },
  { id: 64, label: "RET PLAN (RETIREMENT PLAN)", meaning: "The retirement plan the member is enrolled in.", values: "BRS (Blended Retirement System) appears as a value in glossary entries about the block — no complete official value list was confirmed in the pack. The field identifies which retirement system covers you; confirm the exact display value against your statement." },
  { id: 65, label: "BAS TYPE", meaning: "Type of Basic Allowance for Subsistence the member receives.", values: "Documented values (per DFAS's classic-LES presentation): B = member is authorized BAS but, due to assignment to single-type government quarters or a field duty environment, has meal deductions at the discounted meal rate and is not paid BAS separately (classic-only value). Other value letters were not confirmed in official text — do not treat any letter beyond B as decoded here." },
];

export const LES_BAH_BLOCK: LesField[] = [
  { id: 66, label: "BAQ TYPE", meaning: "The type of Basic Allowance for Quarters the member is entitled to.", values: "A = partial BAQ (single member in government quarters); C = BAQ for a member married to another member, no other dependents; D = member's dependents are in government housing; G = member with dependents where the dependents are in a low-cost housing area; I = member resides off base, with dependents, in high-cost housing (e.g., TLA); K = member in transit, with dependents — drawn from DD Form 2367; L = member residing in government quarters while away on an unaccompanied tour; R = member residing in government quarters while on an accompanied tour; S = member without dependents residing off base; T = member in transit, no dependents — drawn from DD Form 2367; W = member in government quarters in an area of hostile fire or imminent danger." },
  { id: 67, label: "BAQ DEPN (BAQ DEPENDENT)", meaning: "The dependent status used to compute BAH — coding for the type of dependent/dependency the allowance rests on.", values: "A = spouse, who is not on active duty or who is on AD with another service; C = child or other dependent who is in legal custody of the member; D = dependent parent(s); I = member is their own dependent; K = child in the legal custody of another person; L = delayed approval of dependent support; N = no dependents; R = child who resides with another member; S = spouse who is on active duty in the member's service; T = member has a dependent in a foreign country (dependent entry approval pending); W = member is assigned to a ship, afloat unit, or an afloat staff." },
  { id: 68, label: "VHA ZIP (VARIABLE HOUSING ALLOWANCE ZIP)", meaning: "The ZIP code of the area in which the member lives, used in connection with BAH calculations (a legacy Variable Housing Allowance data element; the field remains on the LES).", values: "Blank = no VHA ZIP recorded." },
  { id: 69, label: "RENT AMT (RENT AMOUNT)", meaning: "The amount of rent the member pays for off-base quarters (used in connection with overseas housing allowance reporting).", values: "Blank = no rent amount recorded." },
  { id: 70, label: "SHARE # (SHARE NUMBER)", meaning: "The number of people the member shares housing costs with (a data element likewise used by overseas housing allowance calculations).", values: "Blank = no share number recorded." },
  { id: 71, label: "STATUS (JOINT/INDIVIDUAL)", meaning: "Whether the BAH is being paid to the member as a single (individual) member or jointly with a spouse who is also a service member.", values: "S = Single; J = Joint." },
  { id: 72, label: "DEPN SH (DEPENDENT SHARE)", meaning: "The degree of dependency of the member's dependents for BAH computation (the dependent-share portion of the allowance).", values: "Codes: 0 = no dependents; other codes (per the coverage table in the LES guide) define the dependent share." },
  { id: 73, label: "TPC (TYPE OF ASSIGNMENT CODE)", meaning: "The member's assignment / BAH status code (Type of Assignment Code), per the official coverage table.", values: "B = single member residing off base without dependents; D = single member residing off base with partial dependents; F = member with partial dependents — not assigned to government quarters, or living with a member spouse; I = member is TDY while at the station; K = member is TDY while at the station for under 30 days — residing in a motel or hotel; L = member is TDY at the station for 30 days or longer; N = member is a non-prior-service trainee assigned to government quarters; P = member is a reserve member on an AD tour of 30 days or less; R = member is on leave while in transit; S = member is on terminal leave (without dependents); T = member is on terminal leave (with dependents); U = member is on terminal leave after retiring; V = member is on terminal leave while in the hospital; W = member is a dual-career member — assigned to government quarters; X = member is a dual-career member — assigned to government quarters (second variant in the official table)." },
];

export const LES_MISC: LesField[] = [
  { id: 74, label: "CASCADE (leave carry-over / Special Leave Accrual indicator)", meaning: "Flag indicating whether the member is in a Special Leave Accrual / leave carry-over status.", values: "Y = the member is allowed to carry leave over 60 days under Special Leave Accrual provisions." },
  { id: 75, label: "DUTY STATUS / PSTAT (pay status)", meaning: "The member's current duty/pay status code, per the pay-status table (the codes state the member's duty posture that governs how pay is computed — for example, codes indicate separation categories, and particular postures such as confinement, unauthorized absence, and death codes, whose payment consequences DFAS adjudicates).", values: "Codes as published: 01 = separated; 41 = separated (death); 42 = separated (death); 43 = discharge served, deceased; 61 = separated; 62 = separated; 63 = separated; 64 = separated; 66 = separated; 67 = separated; 68 = separated; 69 = separated; 71 = separated; 72 = separated; 73 = separated; 81 = separated; 82 = separated; 83 = separated; 84 = separated; 85 = separated; 86 = separated; AA = present for duty; AB = military training; AF = leave (paid); AH = sick leave — hospital; AI = sick leave — quarters; AK = leave; AL = on pass; AM = hospitalized; AN = excusal; AO = in hands of military authorities (confinement); AP = in hands of civil authorities; AR = unauthorized absence (UA); AT = in transit; AU = in the hands of an adverse force; AV = in transit; AW = on leave (unpaid); AX = unauthorized absence; AZ = confinement (in the hands of civil authorities awaiting military custody); B0 = present for duty; B1 = present for duty; B3 = present for duty." },
  { id: 76, label: "REMARKS", meaning: "General information and remarks for the pay period — the plain-language block.", detail: "There is no code table. The Remarks block prints literal narrative text, e.g. “—START HELD PAY—STATUS DETERMINATION (SD) PENDING…”, “NEW SGLI PREMIUMS IN EFFECT”, “FAMILY SGLI SPOUSE PREMIUMS SUSPENDED”, “THRIFT SAVINGS PLAN (TSP) LOAN PAYMENT INCREASED”. Any “LES remarks code” list offered elsewhere is not a DFAS product. Note also: the numbered-field scheme contains no EFT/direct-deposit remark field — direct-deposit information does not appear as a numbered field on the LES." },
  { id: 77, label: "YTD ENTITLE", meaning: "The total amount of all entitlements the member has earned in the current tax year to date." },
  { id: 78, label: "YTD DEDUCT", meaning: "The total amount of all deductions taken from the member's pay in the current tax year to date." },
];

export const LES_W4_FIELDS: LesField[] = [
  { id: "w4-1", label: "MULT JOBS (MULTIPLE JOBS)", meaning: "The multiple-jobs indicator from the current Form W-4 (Step 2) — set when the W-4's multiple-jobs checkbox applies (member and spouse both working, or member holds more than one job)." },
  { id: "w4-2", label: "DEPN UNDER 17 (DEPENDENTS UNDER 17 — AMOUNT)", meaning: "The Form W-4 Step 3 amount claimed for dependents under age 17 (the child tax credit amount entered on the W-4, which reduces withholding)." },
  { id: "w4-3", label: "OTHER DEPN (OTHER DEPENDENTS — AMOUNT)", meaning: "The Form W-4 Step 3 amount claimed for other dependents (dependents who do not qualify for the child tax credit amount)." },
  { id: "w4-4", label: "OTHER INCOME (OTHER INCOME — AMOUNT)", meaning: "The Form W-4 Step 4(a) amount — other income the member reported on the W-4 that is not from jobs (e.g., interest, dividends, retirement income), which increases withholding." },
];

export const LES_ALL_FIELDS: LesField[] = [
  ...LES_HEADER, ...LES_PAY_BLOCK, ...LES_LEAVE, ...LES_FED_TAX, ...LES_FICA,
  ...LES_STATE_TAX, ...LES_PAY_DATA, ...LES_BAH_BLOCK, ...LES_MISC, ...LES_W4_FIELDS,
];

// The statement's field blocks, in the order the LES Decoder presents
// them — one hub tile per block. The titles are the blocks' own names
// (field ranges as the DFAS guide lays the statement out); the global
// search index anchors each field hit to its block's title.
export const LES_BLOCKS: { title: string; fields: LesField[] }[] = [
  { title: "Header — who you are (fields 1–11)", fields: LES_HEADER },
  { title: "Entitlements, deductions & the net math (fields 12–25)", fields: LES_PAY_BLOCK },
  { title: "Leave account (fields 26–33)", fields: LES_LEAVE },
  { title: "Federal tax block (fields 34–39)", fields: LES_FED_TAX },
  { title: "Current Form W-4 fields (the post-2020 block)", fields: LES_W4_FIELDS },
  { title: "FICA tax block (fields 40–44)", fields: LES_FICA },
  { title: "State tax block (fields 45–50)", fields: LES_STATE_TAX },
  { title: "Pay data — SGLI, TSP, retirement plan (fields 51–65)", fields: LES_PAY_DATA },
  { title: "BAH data block (fields 66–73)", fields: LES_BAH_BLOCK },
  { title: "Carry-over, remarks & year-to-date totals (fields 74–78)", fields: LES_MISC },
];

export type LesLineCode = { code: string; meaning: string };

export const LES_ENTITLEMENT_CODES: LesLineCode[] = [
  { code: "BASE PAY", meaning: "Basic (base) pay" },
  { code: "BAH / BAQ", meaning: "Basic Allowance for Housing / Basic Allowance for Quarters" },
  { code: "OHA", meaning: "Overseas Housing Allowance" },
  { code: "BAS", meaning: "Basic Allowance for Subsistence" },
  { code: "SEP RATS", meaning: "Separate rations — BAS paid when no government messing is provided" },
  { code: "FSH", meaning: "Family Separation Housing Allowance" },
  { code: "FSA", meaning: "Family Separation Allowance" },
  { code: "COLA", meaning: "Cost of Living Allowance (overseas — non-taxable)" },
  { code: "CONUS COLA", meaning: "Continental U.S. Cost of Living Allowance (taxable)" },
  { code: "O CONUS COLA", meaning: "Overseas CONUS COLA (per the guide's code list)" },
  { code: "CLOTHING", meaning: "Clothing allowance" },
  { code: "INITIAL CLOTHING", meaning: "Initial clothing allowance (first issue)" },
  { code: "INCAP PAY", meaning: "Incapacitation pay (reserve component)" },
  { code: "IDT PAY", meaning: "Inactive Duty Training pay (reserve component drill pay)" },
  { code: "FUNERAL HONORS", meaning: "Funeral Honors Duty pay" },
  { code: "AERO PAY", meaning: "Aeronautical / aviation pay" },
  { code: "FLIGHT PAY / ACIP", meaning: "Aviation Career Incentive Pay / flight pay" },
  { code: "AVB PAY", meaning: "Aviation Bonus pay" },
  { code: "HD PAY", meaning: "Hazardous duty pay" },
  { code: "HDIP VOL", meaning: "Hazardous Duty Incentive Pay — volunteer (e.g., parachute, demolition, flight deck)" },
  { code: "HFP / IDP", meaning: "Hostile Fire Pay / Imminent Danger Pay" },
  { code: "CZTE", meaning: "Combat Zone Tax Exclusion — indicator/entitlement marker on the statement" },
  { code: "DIVE PAY", meaning: "Diving duty pay" },
  { code: "SAVE PAY", meaning: "Saved pay (rate protection for a member whose current assignment pays less than a protected earlier rate)" },
  { code: "EXP DUTY PAY", meaning: "Experimental duty / hazardous test duty pay" },
  { code: "CE PAY (CEWI)", meaning: "Career Enlisted Flyer / CEWI pay (career enlisted aviator incentive)" },
  { code: "SPEC DUTY PAY (SDAP)", meaning: "Special Duty Assignment Pay" },
  { code: "SUB PAY", meaning: "Submarine duty pay" },
  { code: "SUB CONT PAY", meaning: "Submarine duty continuous pay" },
  { code: "SEA PAY", meaning: "Sea pay (career sea pay)" },
  { code: "SEA PAY PREM", meaning: "Sea pay premium (additional sea pay after extended sea duty)" },
  { code: "RESPONSIB PAY", meaning: "Responsibility pay" },
  { code: "FLPP", meaning: "Foreign Language Proficiency Pay" },
  { code: "MED PROF PAY", meaning: "Medical professional pay" },
  { code: "DENTAL PAY", meaning: "Dental officer pay" },
  { code: "OPTOMETRY PAY", meaning: "Optometry officer pay" },
  { code: "VET PAY", meaning: "Veterinarian pay" },
  { code: "BOARD CERT PAY", meaning: "Board-certified pay (medical/dental specialty)" },
  { code: "RETENTION BONUS", meaning: "Retention bonus" },
  { code: "RENLST BONUS", meaning: "Reenlistment bonus" },
  { code: "ENLS BONUS", meaning: "Enlistment bonus" },
  { code: "ADVANCE PAY", meaning: "Advance pay (an advance against future pay)" },
];

export const LES_DEDUCTION_CODES: LesLineCode[] = [
  { code: "SGLI", meaning: "Servicemembers' Group Life Insurance premium — at $0.05 per $1,000 of coverage since July 1, 2025 (the $0.06 rate in older guides is stale)" },
  { code: "FAM SGLI", meaning: "Family SGLI premium (spousal coverage)" },
  { code: "TSGLI", meaning: "Traumatic Servicemembers' Group Life Insurance premium ($1.00 per month at full coverage)" },
  { code: "FSGLI DEP", meaning: "Family SGLI dependent premium (rarely appears — dependent children are automatically covered at no premium)" },
  { code: "DEBT", meaning: "Debt collection — repayment of an overpayment or government debt" },
  { code: "ADVANCE DEBT", meaning: "Advance-pay debt repayment (paying back an advance)" },
  { code: "MEAL DED", meaning: "Meal deduction — the discounted meal rate deduction for members on BAS (see BAS deduction row)" },
  { code: "FITW", meaning: "Federal income tax withholding" },
  { code: "SITW", meaning: "State income tax withholding" },
  { code: "FICA — SOCIAL SECURITY", meaning: "FICA social security tax withholding" },
  { code: "FICA — MEDICARE", meaning: "FICA Medicare tax withholding" },
  { code: "AFRH", meaning: "Armed Forces Retirement Home contribution — actually deducted at $0.50 per month for enlisted members and warrant officers (statute 24 U.S.C. § 419 authorizes up to $1.00; DFAS charges $0.50)" },
  { code: "DENTAL", meaning: "Dental plan premium (active-duty dependent dental / TRICARE Dental Program enrollment)" },
  { code: "MGIB", meaning: "Montgomery GI Bill enrollment contribution (the $100/month × 12 months buy-in, during the enrollment year)" },
  { code: "VEAP / PCB (POST-911 CH 33 GI BILL KICKER CONTRIB)", meaning: "Post-9/11 GI Bill (Chapter 33) kicker / additional contribution — the code line reads “PCB” (Post-9/11 Chapter 33 buy-up kicker)" },
  { code: "MID-MONTH PAY", meaning: "Mid-month net pay amount — shown as a deduction line on the month-end statement because it was already paid to the member at mid-month (an advance payment against the month)" },
  { code: "PACE / PACER (ARMY EMERGENCY RELIEF)", meaning: "Army Emergency Relief contribution via allotment/deduction (service relief fund)" },
  { code: "CFC", meaning: "Combined Federal Campaign contribution" },
  { code: "BAS DEDUCTION", meaning: "BAS deduction — portion of BAS deducted when government meals are provided (the deduction counterpart of SEP RATS / meal deductions)" },
];

export const LES_ALLOTMENT_CODES: LesLineCode[] = [
  { code: "C — CHARITY", meaning: "Charitable allotment (e.g., CFC)" },
  { code: "D — DISCRETIONARY", meaning: "Discretionary allotment (member-directed, e.g., to a bank account or family member)" },
  { code: "H — ??? (HOUSEHOLD GOODS MOVE)", meaning: "Household goods move allotment" },
  { code: "U — US SAVINGS BOND", meaning: "U.S. Savings Bond allotment" },
];
