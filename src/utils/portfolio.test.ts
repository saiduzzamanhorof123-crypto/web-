import test from 'node:test';
import assert from 'node:assert/strict';
import { validateContactForm, generateMailtoLink, generateBibtexCitation } from './portfolio';

test('validateContactForm rejects empty fields', () => {
  const result = validateContactForm({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  assert.equal(result.isValid, false);
  assert.ok(result.name);
  assert.ok(result.email);
  assert.ok(result.subject);
  assert.ok(result.message);
});

test('validateContactForm accepts valid data', () => {
  const result = validateContactForm({
    name: 'Ada Lovelace',
    email: 'ada@example.com',
    subject: 'AI Research Collaboration',
    message: 'I would love to discuss your Bangla NLP research work!'
  });
  assert.equal(result.isValid, true);
  assert.equal(result.name, undefined);
  assert.equal(result.email, undefined);
  assert.equal(result.subject, undefined);
  assert.equal(result.message, undefined);
});

test('validateContactForm validates email pattern', () => {
  const invalidEmail = validateContactForm({
    name: 'Ada Lovelace',
    email: 'not-an-email',
    subject: 'Collaboration',
    message: 'Testing message length that is valid.'
  });
  assert.equal(invalidEmail.isValid, false);
  assert.equal(invalidEmail.email, 'Please enter a valid email address');
});

test('generateMailtoLink constructs valid URL encoding', () => {
  const link = generateMailtoLink(
    'saiduzzamanhorof123@gmail.com',
    'Project Inquiry',
    'Hello world',
    'Test User',
    'test@example.com'
  );
  assert.ok(link.startsWith('mailto:saiduzzamanhorof123@gmail.com?'));
  assert.ok(link.includes('subject=Project%20Inquiry'));
  assert.ok(link.includes('From%3A%20Test%20User'));
});

test('generateBibtexCitation produces formatted entry', () => {
  const bibtex = generateBibtexCitation(
    'horof2026rschaf',
    'RS-CHAF-Net',
    'Saiduzzaman Horof',
    'Hamdard University Bangladesh',
    2026,
    ['Bangla NLP', 'BanglaBERT']
  );
  assert.ok(bibtex.includes('@article{horof2026rschaf,'));
  assert.ok(bibtex.includes('author={Saiduzzaman Horof}'));
  assert.ok(bibtex.includes('Bangla NLP, BanglaBERT'));
});
