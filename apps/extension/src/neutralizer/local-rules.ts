import type { RewriteMode, RewriteResult, TextChange } from './rewriter';

interface NeutralizationRule {
  pattern: RegExp;
  replacement: string;
  strength: 'light' | 'medium' | 'strict';
  preserveCapitalization?: boolean;
}

const NEUTRALIZATION_RULES: NeutralizationRule[] = [
  {
    pattern: /\b(shocking|jaw-dropping|mind-blowing|earth-shattering)\b/gi,
    replacement: 'notable',
    strength: 'light',
  },
  {
    pattern: /\b(you won't believe)\b/gi,
    replacement: '',
    strength: 'light',
  },
  {
    pattern: /\b(this will make you (angry|furious|mad|rage))\b/gi,
    replacement: '',
    strength: 'light',
  },
  {
    pattern: /\b(can't believe)\b/gi,
    replacement: '',
    strength: 'light',
  },
  {
    pattern: /\b(outrage( over| about| as)?)\b/gi,
    replacement: 'discussion',
    strength: 'medium',
  },
  {
    pattern: /\b(furious( about| over| at)?)\b/gi,
    replacement: 'concerned',
    strength: 'medium',
  },
  {
    pattern: /\b(people are (angry|furious|outraged))\b/gi,
    replacement: 'people are discussing',
    strength: 'medium',
  },
  {
    pattern: /\b(backlash( erupts| grows| over)?)\b/gi,
    replacement: 'response',
    strength: 'medium',
  },
  {
    pattern: /\b(sparks? outrage)\b/gi,
    replacement: 'prompts discussion',
    strength: 'medium',
  },
  {
    pattern: /\b(terrifying( new| truth| reality)?)\b/gi,
    replacement: 'concerning',
    strength: 'medium',
  },
  {
    pattern: /\b(crisis|disaster|catastrophe)\b/gi,
    replacement: 'situation',
    strength: 'strict',
  },
  {
    pattern: /\b(democrat|republican)\b/gi,
    replacement: 'politician',
    strength: 'strict',
  },
  {
    pattern: /\b(democrats|republicans)\b/gi,
    replacement: 'politicians',
    strength: 'strict',
  },
  {
    pattern: /\b(the (real|hidden|secret) truth)\b/gi,
    replacement: 'the facts',
    strength: 'medium',
  },
  {
    pattern: /\b(what (they|the media|experts) (won't|don't) tell you)\b/gi,
    replacement: 'what may not be widely known',
    strength: 'medium',
  },
  {
    pattern: /\b(breaking:)\b/gi,
    replacement: '',
    strength: 'light',
  },
  {
    pattern: /\b(explosive|bombshell|stunning)\b/gi,
    replacement: 'significant',
    strength: 'light',
  },
  {
    pattern: /\b(one weird trick)\b/gi,
    replacement: 'a method',
    strength: 'light',
  },
  {
    pattern: /\b(doctors (hate|don't want you to know))\b/gi,
    replacement: '',
    strength: 'light',
  },
  {
    pattern: /\b(exclusive[:\s])/gi,
    replacement: '',
    strength: 'light',
  },
  {
    pattern: /\b(leaked[:\s])/gi,
    replacement: 'reported:',
    strength: 'medium',
  },
  {
    pattern: /\b(they don't want you to know)\b/gi,
    replacement: '',
    strength: 'light',
  },
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