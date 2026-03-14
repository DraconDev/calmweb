import type { RewriteMode, RewriteResult, TextChange } from './rewriter';

interface NeutralizationRule {
  pattern: RegExp;
  replacement: string;
  strength: 'light' | 'medium' | 'strict';
  preserveCapitalization?: boolean;
}

const NEUTRALIZATION_RULES: NeutralizationRule[] = [
  { pattern: /\b(shocking|jaw-dropping|mind-blowing|earth-shattering|game-changing)\b/gi, replacement: 'notable', strength: 'light' },
  { pattern: /\b(you won't believe)\b/gi, replacement: '', strength: 'light' },
  { pattern: /\b(you won't BELIEVE)\b/g, replacement: '', strength: 'light' },
  { pattern: /\b(this will make you (angry|furious|mad|rage))\b/gi, replacement: '', strength: 'light' },
  { pattern: /\b(can't believe)\b/gi, replacement: '', strength: 'light' },
  { pattern: /\b(will make your blood boil)\b/gi, replacement: 'may concern you', strength: 'medium' },
  { pattern: /\b(blood boil)\b/gi, replacement: 'concern', strength: 'medium' },
  { pattern: /\boutrage\b/gi, replacement: 'discussion', strength: 'medium' },
  { pattern: /\boutraged\b/gi, replacement: 'concerned', strength: 'medium' },
  { pattern: /\bfurious\b/gi, replacement: 'concerned', strength: 'medium' },
  { pattern: /\b(furiously|fury)\b/gi, replacement: 'strongly', strength: 'medium' },
  { pattern: /\b(people are (angry|furious|outraged))\b/gi, replacement: 'people are discussing', strength: 'medium' },
  { pattern: /\b(backlash( erupts| grows| over)?)\b/gi, replacement: 'response', strength: 'medium' },
  { pattern: /\b(sparks? outrage)\b/gi, replacement: 'prompts discussion', strength: 'medium' },
  { pattern: /\b(terrifying( new| truth| reality)?)\b/gi, replacement: 'concerning', strength: 'medium' },
  { pattern: /\b(TERRIFYING)\b/g, replacement: 'Concerning', strength: 'medium' },
  { pattern: /\b(terrified)\b/gi, replacement: 'concerned', strength: 'medium' },
  { pattern: /\b(crisis|disaster|catastrophe)\b/gi, replacement: 'situation', strength: 'strict' },
  { pattern: /\b(democrat|republican)\b/gi, replacement: 'politician', strength: 'strict' },
  { pattern: /\b(democrats|republicans)\b/gi, replacement: 'politicians', strength: 'strict' },
  { pattern: /\b(the (real|hidden|secret) truth)\b/gi, replacement: 'the facts', strength: 'medium' },
  { pattern: /\b(what (they|the media|experts) (won't|don't) tell you)\b/gi, replacement: 'what may not be widely known', strength: 'medium' },
  { pattern: /\b(breaking:)\b/gi, replacement: '', strength: 'light' },
  { pattern: /\b(BREAKING:)\b/g, replacement: '', strength: 'light' },
  { pattern: /\b(explosive|bombshell|stunning)\b/gi, replacement: 'significant', strength: 'light' },
  { pattern: /\b(one weird trick)\b/gi, replacement: 'a method', strength: 'light' },
  { pattern: /\b(doctors (hate|don't want you to know))\b/gi, replacement: '', strength: 'light' },
  { pattern: /\b(exclusive[:\s])/gi, replacement: '', strength: 'light' },
  { pattern: /\b(leaked[:\s])/gi, replacement: 'reported:', strength: 'medium' },
  { pattern: /\b(they don't want you to know)\b/gi, replacement: '', strength: 'light' },
  { pattern: /\b(DESTROY(ing|ed|s)?)\b/g, replacement: 'affect', strength: 'medium' },
  { pattern: /\b(destroy(ing|ed|s)?)\b/gi, replacement: 'affect', strength: 'medium' },
  { pattern: /\b(ABSOLUTE(LY)? (DISASTER|GARBAGE|TRASH|NIGHTMARE))\b/gi, replacement: 'significant issue', strength: 'medium' },
  { pattern: /\b(disgusting)\b/gi, replacement: 'problematic', strength: 'medium' },
  { pattern: /\b(DISGUSTING)\b/g, replacement: 'Problematic', strength: 'medium' },
  { pattern: /\b(infuriating)\b/gi, replacement: 'frustrating', strength: 'medium' },
  { pattern: /\b(INFURIATING)\b/g, replacement: 'Frustrating', strength: 'medium' },
  { pattern: /\b(outrageous)\b/gi, replacement: 'questionable', strength: 'medium' },
  { pattern: /\b(SHOCK(ing|ed|s)?)\b/g, replacement: 'Surprise', strength: 'light' },
  { pattern: /\b(shock(ing|ed|s)?)\b/gi, replacement: 'surprise', strength: 'light' },
  { pattern: /\b(BELIEVE)\b/g, replacement: 'consider', strength: 'light' },
  { pattern: /\b(UNACCEPTABLE)\b/g, replacement: 'Problematic', strength: 'medium' },
  { pattern: /\b(unacceptable)\b/g, replacement: 'problematic', strength: 'medium' },
  { pattern: /\b(MORON(S)?)\b/g, replacement: 'people', strength: 'medium' },
  { pattern: /\b(moron(s)?)\b/gi, replacement: 'people', strength: 'medium' },
  { pattern: /\b(IDIOT(S)?)\b/g, replacement: 'people', strength: 'medium' },
  { pattern: /\b(idiot(s)?)\b/gi, replacement: 'people', strength: 'medium' },
  { pattern: /\b(STUPID)\b/g, replacement: 'unwise', strength: 'medium' },
  { pattern: /\b(stupid)\b/gi, replacement: 'unwise', strength: 'medium' },
  { pattern: /\b(BRAIN[- ]DEAD)\b/gi, replacement: 'uninformed', strength: 'medium' },
  { pattern: /\b(brain[- ]dead)\b/gi, replacement: 'uninformed', strength: 'medium' },
  { pattern: /\b(TRASH)\b/g, replacement: 'problematic', strength: 'medium' },
  { pattern: /\b(trash)\b/gi, replacement: 'problematic', strength: 'medium' },
  { pattern: /\b(GARBAGE)\b/g, replacement: 'problematic', strength: 'medium' },
  { pattern: /\b(garbage)\b/gi, replacement: 'problematic', strength: 'medium' },
  { pattern: /\b(INSANE)\b/g, replacement: 'unusual', strength: 'medium' },
  { pattern: /\b(insane)\b/gi, replacement: 'unusual', strength: 'medium' },
  { pattern: /\b(SPEECHLESS)\b/g, replacement: 'surprised', strength: 'medium' },
  { pattern: /\b(speechless)\b/gi, replacement: 'surprised', strength: 'medium' },
  { pattern: /\b(FURIOUS)\b/g, replacement: 'Concerned', strength: 'medium' },
  { pattern: /\b(FURIOUSLY)\b/g, replacement: 'Strongly', strength: 'medium' },
  { pattern: /\b(OUTRAGED)\b/g, replacement: 'Concerned', strength: 'medium' },
  { pattern: /\b(OUTRAGEOUS)\b/g, replacement: 'Questionable', strength: 'medium' },
  { pattern: /\b(RAGE)\b/g, replacement: 'concern', strength: 'medium' },
  { pattern: /\b(RAGING)\b/g, replacement: 'concerned', strength: 'medium' },
  { pattern: /\b(HORRIBLE)\b/g, replacement: 'problematic', strength: 'medium' },
  { pattern: /\b(horrible)\b/gi, replacement: 'problematic', strength: 'medium' },
  { pattern: /\b(DISASTER)\b/g, replacement: 'Issue', strength: 'medium' },
  { pattern: /\b(ABSOLUTE)\b/g, replacement: 'significant', strength: 'medium' },
  { pattern: /\b(absolute)\b/g, replacement: 'significant', strength: 'medium' },
  { pattern: /\b(CORRUPT)\b/g, replacement: 'controversial', strength: 'medium' },
  { pattern: /\b(corrupt)\b/gi, replacement: 'controversial', strength: 'medium' },
  { pattern: /\b(SECRET)\b/g, replacement: 'undisclosed', strength: 'light' },
  { pattern: /\b(HIDING)\b/g, replacement: 'withholding', strength: 'light' },
  { pattern: /\b(hiding)\b/gi, replacement: 'withholding', strength: 'light' },
  { pattern: /\b(SILENT)\b/g, replacement: 'quiet', strength: 'light' },
  { pattern: /\b(SILENCE)\b/g, replacement: 'quiet', strength: 'light' },
  { pattern: /\b(EXPOSED)\b/g, replacement: 'revealed', strength: 'light' },
  { pattern: /\b(exposed)\b/gi, replacement: 'revealed', strength: 'light' },
  { pattern: /\b(EVERYTHING)\b/g, replacement: 'a lot', strength: 'light' },
  { pattern: /\b(INCREDIBLE)\b/g, replacement: 'notable', strength: 'light' },
  { pattern: /\b(incredible)\b/gi, replacement: 'notable', strength: 'light' },
  { pattern: /\b(AMAZING)\b/g, replacement: 'notable', strength: 'light' },
  { pattern: /\b(amazing)\b/gi, replacement: 'notable', strength: 'light' },
  { pattern: /\b(MUST (SEE|READ|WATCH))\b/g, replacement: 'may want to see', strength: 'light' },
  { pattern: /\b(NEED TO (SEE|READ|KNOW))\b/gi, replacement: 'may want to', strength: 'light' },
  { pattern: /\b(NEED TO)\b/g, replacement: 'may want to', strength: 'light' },
  { pattern: /\b(URGENT:?)\b/gi, replacement: '', strength: 'light' },
  { pattern: /\b(act now)\b/gi, replacement: 'consider', strength: 'medium' },
  { pattern: /\b(before it's too late\)/gi, replacement: '', strength: 'medium' },
  { pattern: /\b(will leave you (speechless|furious|angry|outraged))\b/gi, replacement: 'may interest you', strength: 'medium' },
  { pattern: /\b(make you (lose faith|sick|angry|furious))\b/gi, replacement: 'may concern you', strength: 'medium' },
  { pattern: /\b(ROASTING)\b/g, replacement: 'criticizing', strength: 'medium' },
  { pattern: /\b(CANCELED)\b/g, replacement: 'criticized', strength: 'medium' },
  { pattern: /\b(CANCELLING)\b/g, replacement: 'criticizing', strength: 'medium' },
  { pattern: /\b(DESERVE)\b/g, replacement: 'may face', strength: 'medium' },
  { pattern: /\b(DESPICABLE)\b/g, replacement: 'problematic', strength: 'medium' },
  { pattern: /\b(ATROCIOUS)\b/g, replacement: 'problematic', strength: 'medium' },
  { pattern: /\b(UNBELIEVABLE)\b/g, replacement: 'notable', strength: 'light' },
  { pattern: /\b(unbelievable)\b/gi, replacement: 'notable', strength: 'light' },
  { pattern: /\b(AUDACITY)\b/g, replacement: 'action', strength: 'medium' },
  { pattern: /\b(audacity)\b/gi, replacement: 'action', strength: 'medium' },
  { pattern: /\b(MIND-BOGGLING)\b/g, replacement: 'notable', strength: 'light' },
  { pattern: /\b(SICK)\b/g, replacement: 'concerned', strength: 'medium' },
  { pattern: /\b(SHAKING)\b/g, replacement: 'affected', strength: 'medium' },
  { pattern: /\b(TRAVESTY)\b/g, replacement: 'situation', strength: 'medium' },
  { pattern: /\b(travesty)\b/gi, replacement: 'situation', strength: 'medium' },
  { pattern: /\b(FAITH IN HUMANITY)\b/gi, replacement: 'confidence', strength: 'medium' },
  { pattern: /\b(ASHAMED)\b/g, replacement: 'should reconsider', strength: 'medium' },
  { pattern: /\b(should be ashamed)\b/gi, replacement: 'should reconsider', strength: 'medium' },
  { pattern: /\b(LOSE ALL FAITH)\b/gi, replacement: 'be concerned', strength: 'medium' },
  { pattern: /\b(LOSE FAITH)\b/gi, replacement: 'be concerned', strength: 'medium' },
  { pattern: /\b(RADICAL)\b/g, replacement: 'active', strength: 'medium' },
  { pattern: /\b(radical)\b/gi, replacement: 'active', strength: 'medium' },
  { pattern: /\b(END OF)\b/g, replacement: 'change in', strength: 'medium' },
  { pattern: /\b(DANGER)\b/g, replacement: 'issue', strength: 'medium' },
  { pattern: /\b(danger)\b/gi, replacement: 'issue', strength: 'medium' },
  { pattern: /\b(DANGEROUS)\b/g, replacement: 'risky', strength: 'medium' },
  { pattern: /\b(dangerous)\b/gi, replacement: 'risky', strength: 'medium' },
  { pattern: /\b(WARNING[:\s]*)\b/gi, replacement: 'Note:', strength: 'medium' },
  { pattern: /\b(ALARMING)\b/g, replacement: 'Notable', strength: 'medium' },
  { pattern: /\b(alarming)\b/gi, replacement: 'notable', strength: 'medium' },
  { pattern: /\b(NIGHTMARE)\b/g, replacement: 'difficult situation', strength: 'medium' },
  { pattern: /\b(nightmare)\b/gi, replacement: 'difficult situation', strength: 'medium' },
  { pattern: /\b(TERROR)\b/g, replacement: 'concern', strength: 'medium' },
  { pattern: /\b(terror)\b/gi, replacement: 'concern', strength: 'medium' },
  { pattern: /\b(WORST)\b/g, replacement: 'challenging', strength: 'medium' },
  { pattern: /\b(worst)\b/gi, replacement: 'challenging', strength: 'medium' },
  { pattern: /\b(KAREN)\b/gi, replacement: 'person', strength: 'medium' },
  { pattern: /\b(ENTITLED)\b/g, replacement: 'assertive', strength: 'medium' },
  { pattern: /\b(entitled)\b/gi, replacement: 'assertive', strength: 'medium' },
  { pattern: /\b(ENTITLEMENT)\b/g, replacement: 'behavior', strength: 'medium' },
  { pattern: /\b(entitlement)\b/gi, replacement: 'behavior', strength: 'medium' },
  { pattern: /\b(THIS IS THE END)\b/gi, replacement: 'This represents a change', strength: 'medium' },
  { pattern: /\b(THIS IS)\s+(THE|ABSOLUTE|MOST)\b/gi, replacement: 'This is', strength: 'medium' },
  { pattern: /\b(THEY (HATE|DON'T WANT))\b/gi, replacement: 'They may not prefer', strength: 'light' },
  { pattern: /\b(HATE)\b/g, replacement: 'dislike', strength: 'medium' },
  { pattern: /\b(hate)\b/gi, replacement: 'dislike', strength: 'medium' },
  { pattern: /\b(HATERS)\b/g, replacement: 'critics', strength: 'medium' },
  { pattern: /\b(TRUTH (THEY|THEY'RE|THAT))\b/gi, replacement: 'information that', strength: 'medium' },
  { pattern: /\b(THE TRUTH)\b/g, replacement: 'The information', strength: 'medium' },
  { pattern: /\b(WHAT'S REALLY)\b/gi, replacement: 'what', strength: 'light' },
  { pattern: /\b(REALLY HAPPENING)\b/gi, replacement: 'occurring', strength: 'light' },
  { pattern: /\b(CHANGES EVERYTHING)\b/gi, replacement: 'is significant', strength: 'light' },
  { pattern: /\b(GUARANTEED)\b/g, replacement: 'possibly', strength: 'light' },
  { pattern: /\b(guaranteed)\b/gi, replacement: 'possibly', strength: 'light' },
  { pattern: /\b(YOU'LL (BE|WANT TO|HATE|LOVE))\b/gi, replacement: 'You may', strength: 'light' },
  { pattern: /\b(YOU WILL)\b/gi, replacement: 'You may', strength: 'light' },
  { pattern: /\b(WILL MAKE YOU)\b/gi, replacement: 'may', strength: 'light' },
  { pattern: /\b(DON'T MISS)\b/gi, replacement: 'Consider', strength: 'light' },
  { pattern: /\b(HAVE TO SEE)\b/gi, replacement: 'may want to see', strength: 'light' },
  { pattern: /\b(HAS TO)\b/gi, replacement: 'should', strength: 'light' },
  { pattern: /\b(YOU NEED)\b/gi, replacement: 'You may want', strength: 'light' },
  { pattern: /\b(MUST SEE)\b/gi, replacement: 'worth seeing', strength: 'light' },
  { pattern: /\b(SECRET AGENDA)\b/gi, replacement: 'private plans', strength: 'medium' },
  { pattern: /\b(AGENDA)\b/g, replacement: 'plans', strength: 'light' },
  { pattern: /\b(HIDDEN)\b/g, replacement: 'lesser-known', strength: 'light' },
  { pattern: /\b(hidden)\b/gi, replacement: 'lesser-known', strength: 'light' },
  { pattern: /\b(EXPOSE)\b/g, replacement: 'reveal', strength: 'light' },
  { pattern: /\b(expose)\b/gi, replacement: 'reveal', strength: 'light' },
  { pattern: /\b(LIAR)\b/g, replacement: 'incorrect', strength: 'medium' },
  { pattern: /\b(liar)\b/gi, replacement: 'incorrect', strength: 'medium' },
  { pattern: /\b(LYING)\b/g, replacement: 'incorrect', strength: 'medium' },
  { pattern: /\b(lying)\b/gi, replacement: 'incorrect', strength: 'medium' },
  { pattern: /\b(LIES)\b/g, replacement: 'inaccuracies', strength: 'medium' },
  { pattern: /\b(lies)\b/gi, replacement: 'inaccuracies', strength: 'medium' },
  { pattern: /\b(FRAUD)\b/g, replacement: 'irregularity', strength: 'medium' },
  { pattern: /\b(fraud)\b/gi, replacement: 'irregularity', strength: 'medium' },
  { pattern: /\b(SCAM)\b/g, replacement: 'questionable practice', strength: 'medium' },
  { pattern: /\b(scam)\b/gi, replacement: 'questionable practice', strength: 'medium' },
  { pattern: /\b(RIGGED)\b/g, replacement: 'biased', strength: 'medium' },
  { pattern: /\b(rigged)\b/gi, replacement: 'biased', strength: 'medium' },
  { pattern: /\b(FAKE)\b/g, replacement: 'questionable', strength: 'medium' },
  { pattern: /\b(fake)\b/gi, replacement: 'questionable', strength: 'medium' },
  { pattern: /\b(HOAX)\b/g, replacement: 'disputed claim', strength: 'medium' },
  { pattern: /\b(hoax)\b/gi, replacement: 'disputed claim', strength: 'medium' },
  { pattern: /\b(SHILL)\b/g, replacement: 'supporter', strength: 'medium' },
  { pattern: /\b(shill)\b/gi, replacement: 'supporter', strength: 'medium' },
  { pattern: /\b(PROPAGANDA)\b/g, replacement: 'content', strength: 'medium' },
  { pattern: /\b(propaganda)\b/gi, replacement: 'content', strength: 'medium' },
  { pattern: /\b(BRAINWASH(ING|ED)?)\b/gi, replacement: 'influencing', strength: 'medium' },
  { pattern: /\b(MANIPULAT(ING|ED|ION)?)\b/gi, replacement: 'influencing', strength: 'medium' },
  { pattern: /\b(GASLIGHT(ING)?)\b/gi, replacement: 'confusing', strength: 'medium' },
  { pattern: /\b(WOKE)\b/g, replacement: 'progressive', strength: 'strict' },
  { pattern: /\b(ANTI[- ]?WAKE)\b/gi, replacement: 'traditional', strength: 'strict' },
  { pattern: /\b(SJW)\b/g, replacement: 'activist', strength: 'strict' },
  { pattern: /\b(SNOWFLAKE)\b/g, replacement: 'person', strength: 'medium' },
  { pattern: /\b(BOOMER)\b/g, replacement: 'older person', strength: 'medium' },
  { pattern: /\b(ZOOMER)\b/g, replacement: 'younger person', strength: 'medium' },
  { pattern: /\b(OK BOOMER)\b/gi, replacement: 'I disagree', strength: 'medium' },
  { pattern: /\b(TRIGGERED)\b/g, replacement: 'upset', strength: 'medium' },
  { pattern: /\b(triggered)\b/gi, replacement: 'upset', strength: 'medium' },
  { pattern: /\b(CUCK)\b/gi, replacement: 'person', strength: 'medium' },
  { pattern: /\b(SIMP)\b/gi, replacement: 'supporter', strength: 'medium' },
  { pattern: /\b(INCEL)\b/gi, replacement: 'person', strength: 'medium' },
  { pattern: /\b(NORMIE)\b/gi, replacement: 'average person', strength: 'medium' },
  { pattern: /\b(NPC)\b/g, replacement: 'person', strength: 'medium' },
  { pattern: /\b(CHAD)\b/g, replacement: 'confident person', strength: 'medium' },
  { pattern: /\b(BASED)\b/g, replacement: 'principled', strength: 'medium' },
  { pattern: /\b(CRINGE)\b/g, replacement: 'awkward', strength: 'medium' },
  { pattern: /\b(cringe)\b/gi, replacement: 'awkward', strength: 'medium' },
  { pattern: /\b(CRINGEY)\b/g, replacement: 'awkward', strength: 'medium' },
  { pattern: /\b(CRINGY)\b/g, replacement: 'awkward', strength: 'medium' },
  { pattern: /\b(YIKES)\b/g, replacement: 'notable', strength: 'light' },
  { pattern: /\b(OOF)\b/g, replacement: 'unfortunate', strength: 'light' },
  { pattern: /\b(YEET)\b/g, replacement: 'discard', strength: 'light' },
  { pattern: /\b(NO CAP)\b/gi, replacement: 'honestly', strength: 'light' },
  { pattern: /\b(CAP)\b/g, replacement: 'exaggeration', strength: 'light' },
  { pattern: /\b(BET)\b/g, replacement: 'agreed', strength: 'light' },
  { pattern: /\b(SLAY)\b/g, replacement: 'succeed', strength: 'light' },
  { pattern: /\b(ICONIC)\b/g, replacement: 'memorable', strength: 'light' },
  { pattern: /\b(LEGENDARY)\b/g, replacement: 'notable', strength: 'light' },
  { pattern: /\b(GOAT)\b/g, replacement: 'greatest', strength: 'light' },
  { pattern: /\b(FIRE)\b/g, replacement: 'good', strength: 'light' },
  { pattern: /\b(LIT)\b/g, replacement: 'exciting', strength: 'light' },
  { pattern: /\b(DOPE)\b/g, replacement: 'good', strength: 'light' },
  { pattern: /\b(SICK!)\b/g, replacement: 'impressive', strength: 'light' },
  { pattern: /\b(WILD)\b/g, replacement: 'unusual', strength: 'light' },
  { pattern: /\b(THROW YOUR PHONE)\b/gi, replacement: 'be frustrated', strength: 'medium' },
  { pattern: /\b(THROW (MY|YOUR|HIS|HER) PHONE)\b/gi, replacement: 'be frustrated', strength: 'medium' },
  { pattern: /\b(WANT TO THROW)\b/gi, replacement: 'be frustrated by', strength: 'medium' },
  { pattern: /\b(PUNCH (MY|THE|A) SCREEN)\b/gi, replacement: 'be frustrated', strength: 'medium' },
  { pattern: /\b(SCREAM(ING)? AT (MY|THE) SCREEN)\b/gi, replacement: 'frustrated', strength: 'medium' },
  { pattern: /\b(RAGE QUIT)\b/gi, replacement: 'stop', strength: 'medium' },
  { pattern: /\b(UNSUBSCRIBE)\b/g, replacement: 'disagree', strength: 'light' },
  { pattern: /\b(DISLIKE)\b/g, replacement: 'disagree', strength: 'light' },
  { pattern: /\b(RATIO)\b/g, replacement: 'response', strength: 'light' },
  { pattern: /\b(L)\b/g, replacement: 'loss', strength: 'light' },
  { pattern: /\b(W)\b/g, replacement: 'success', strength: 'light' },
  { pattern: /\b(F IN CHAT)\b/gi, replacement: 'acknowledgment', strength: 'light' },
  { pattern: /\b(RIP)\b/g, replacement: 'unfortunate', strength: 'light' },
  { pattern: /\b(DEAD)\b/g, replacement: 'amused', strength: 'light' },
  { pattern: /\b(I'M DEAD)\b/gi, replacement: 'amused', strength: 'light' },
  { pattern: /\b(DYING)\b/g, replacement: 'very amused', strength: 'light' },
  { pattern: /\b(I CAN'T)\b/g, replacement: 'notable', strength: 'light' },
  { pattern: /\b(I CAN'T EVEN)\b/gi, replacement: 'notable', strength: 'light' },
  { pattern: /\b(SAME)\b/g, replacement: 'I agree', strength: 'light' },
  { pattern: /\b(MOOD)\b/g, replacement: 'feeling', strength: 'light' },
  { pattern: /\b(BIG MOOD)\b/gi, replacement: 'strong feeling', strength: 'light' },
  { pattern: /\b(REAL)\b/g, replacement: 'accurate', strength: 'light' },
  { pattern: /\b(FR)\b/g, replacement: 'honestly', strength: 'light' },
  { pattern: /\b(LOWKEY)\b/g, replacement: 'somewhat', strength: 'light' },
  { pattern: /\b(HIGHKEY)\b/g, replacement: 'definitely', strength: 'light' },
  { pattern: /\b(LOW KEY)\b/gi, replacement: 'somewhat', strength: 'light' },
  { pattern: /\b(HIGH KEY)\b/gi, replacement: 'definitely', strength: 'light' },
  { pattern: /\b(LEGIT)\b/g, replacement: 'genuinely', strength: 'light' },
  { pattern: /\b(LEGITIMATELY)\b/g, replacement: 'genuinely', strength: 'light' },
  { pattern: /\b(FOR REAL)\b/gi, replacement: 'genuinely', strength: 'light' },
  { pattern: /\b(NO LIE)\b/gi, replacement: 'honestly', strength: 'light' },
  { pattern: /\b(FR FR)\b/gi, replacement: 'honestly', strength: 'light' },
  { pattern: /\b(PERIOD(T)?\b/gi, replacement: 'definitively', strength: 'light' },
  { pattern: /\b(PERIODT)\b/gi, replacement: 'definitively', strength: 'light' },
  { pattern: /\b(AND I MEAN IT)\b/gi, replacement: '', strength: 'light' },
  { pattern: /\b(SAY IT LOUDER)\b/gi, replacement: 'I agree', strength: 'light' },
  { pattern: /\b(SAY IT WITH ME)\b/gi, replacement: '', strength: 'light' },
  { pattern: /\b(CAN WE TALK ABOUT)\b/gi, replacement: 'Consider', strength: 'light' },
  { pattern: /\b(LET'S TALK ABOUT)\b/gi, replacement: 'Consider', strength: 'light' },
  { pattern: /\b(WE NEED TO TALK ABOUT)\b/gi, replacement: 'Consider', strength: 'light' },
  { pattern: /\b(I HAVE THOUGHTS)\b/gi, replacement: 'I have opinions', strength: 'light' },
  { pattern: /\b(THOUGHTS\?)\b/g, replacement: 'Opinions?', strength: 'light' },
  { pattern: /\b(HOT TAKE)\b/gi, replacement: 'opinion', strength: 'light' },
  { pattern: /\b(UNPOPULAR OPINION)\b/gi, replacement: 'opinion', strength: 'light' },
  { pattern: /\b(POPULAR OPINION)\b/gi, replacement: 'common view', strength: 'light' },
  { pattern: /\b(SPOILER ALERT)\b/gi, replacement: 'note', strength: 'light' },
  { pattern: /\b(MAJOR SPOILER)\b/gi, replacement: 'note', strength: 'light' },
  { pattern: /\b(SPOILER)\b/g, replacement: 'detail', strength: 'light' },
  { pattern: /\b(PLOT TWIST)\b/gi, replacement: 'development', strength: 'light' },
  { pattern: /\b(REVEAL)\b/g, replacement: 'detail', strength: 'light' },
  { pattern: /\b(CLIFFHANGER)\b/g, replacement: 'suspenseful ending', strength: 'light' },
  { pattern: /\b(TWIST ENDING)\b/gi, replacement: 'unexpected ending', strength: 'light' },
  { pattern: /\b(TWIST)\b/g, replacement: 'development', strength: 'light' },
];

const STRENGTH_PRIORITY: Record<RewriteMode, string[]> = {
  light: ['light'],
  medium: ['light', 'medium'],
  strict: ['light', 'medium', 'strict'],
};

function cleanText(text: string): string {
  return text
    .replace(/\s+/g, ' ')
    .replace(/\s+([.,!?;:])/g, '$1')
    .replace(/([.,!?;:])\s+/g, '$1 ')
    .trim();
}

function preserveCase(original: string, replacement: string): string {
  if (!original || !replacement) return replacement;
  
  if (original[0] === original[0].toUpperCase()) {
    return replacement.charAt(0).toUpperCase() + replacement.slice(1);
  }
  return replacement.toLowerCase();
}

export function rewriteWithLocalRules(
  text: string,
  options: { mode: RewriteMode }
): RewriteResult {
  let rewritten = text;
  const changes: TextChange[] = [];
  const allowedStrengths = STRENGTH_PRIORITY[options.mode];

  for (const rule of NEUTRALIZATION_RULES) {
    if (!allowedStrengths.includes(rule.strength)) continue;

    const matches = text.match(rule.pattern);
    if (matches) {
      for (const originalMatch of matches) {
        const replacement = rule.preserveCapitalization !== false
          ? preserveCase(originalMatch, rule.replacement)
          : rule.replacement;

        rewritten = rewritten.replace(originalMatch, replacement);
        
        if (originalMatch !== replacement) {
          changes.push({
            original: originalMatch,
            replacement: replacement,
            reason: `neutralization_rule:${rule.strength}`,
          });
        }
      }
    }
  }

  rewritten = cleanText(rewritten);

  const confidence = changes.length > 0 
    ? Math.min(1, 0.5 + (changes.length * 0.1))
    : 1.0;

  return {
    original: text,
    rewritten,
    changes,
    confidence,
    mode: options.mode,
  };
}

export function getRulesForMode(mode: RewriteMode): NeutralizationRule[] {
  const allowedStrengths = STRENGTH_PRIORITY[mode];
  return NEUTRALIZATION_RULES.filter(rule => allowedStrengths.includes(rule.strength));
}

export function previewChanges(text: string, mode: RewriteMode): TextChange[] {
  const result = rewriteWithLocalRules(text, { mode });
  return result.changes;
}