import { analyzeForNeutralization, rewriteWithLocalRules, classifyTone, analyzeSentiment } from '../src/neutralizer';
import { samples } from './samples';

console.log('\n' + '='.repeat(80));
console.log('CALMWEB NEUTRALIZATION TRANSFORMATION REPORT');
console.log('='.repeat(80));

const categories = Object.keys(samples) as (keyof typeof samples)[];

for (const category of categories) {
  console.log('\n' + '-'.repeat(80));
  console.log(`CATEGORY: ${category.toUpperCase()}`);
  console.log('-'.repeat(80));

  const items = samples[category];

  for (let i = 0; i < items.length; i++) {
    const original = items[i];
    const sentiment = analyzeSentiment(original);
    const tone = classifyTone(original);
    const analysis = analyzeForNeutralization(original);
    const neutralized = rewriteWithLocalRules(original, { mode: 'medium' });

    console.log(`\n[Entry ${i + 1}]`);
    console.log(`Sentiment: ${sentiment.score.toFixed(2)} (magnitude: ${sentiment.magnitude.toFixed(2)})`);
    console.log(`Tone: ${tone.primary} (confidence: ${tone.confidence.toFixed(2)})`);
    console.log(`Should neutralize: ${analysis.shouldNeutralize}`);
    console.log(`\nBEFORE:`);
    console.log(`  "${original}"`);
    console.log(`\nAFTER:`);
    console.log(`  "${neutralized.rewritten}"`);

    if (original !== neutralized.rewritten) {
      console.log(`\nCHANGES DETECTED ✓ (${neutralized.changes.length} modifications)`);
    } else {
      console.log(`\nNo changes (text already neutral or below threshold)`);
    }
  }
}

console.log('\n' + '='.repeat(80));
console.log('SUMMARY');
console.log('='.repeat(80));

let totalProcessed = 0;
let totalChanged = 0;

for (const category of categories) {
  const items = samples[category];
  let changed = 0;

  for (const item of items) {
    const neutralized = rewriteWithLocalRules(item, { mode: 'medium' });
    if (item !== neutralized.rewritten) changed++;
  }

  totalProcessed += items.length;
  totalChanged += changed;

  const pct = ((changed / items.length) * 100).toFixed(0);
  console.log(`${category.padEnd(15)}: ${changed}/${items.length} changed (${pct}%)`);
}

console.log('-'.repeat(80));
const totalPct = ((totalChanged / totalProcessed) * 100).toFixed(0);
console.log(`TOTAL           : ${totalChanged}/${totalProcessed} changed (${totalPct}%)`);
console.log('='.repeat(80) + '\n');
