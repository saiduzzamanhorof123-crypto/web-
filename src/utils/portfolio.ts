/**
 * Pure utility functions for portfolio logic, form validation, and citation generation.
 */

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  isValid: boolean;
}

/**
 * Validates the contact form fields.
 */
export function validateContactForm(data: ContactFormData): ValidationErrors {
  const errors: ValidationErrors = { isValid: true };

  const trimmedName = data.name.trim();
  if (!trimmedName) {
    errors.name = 'Full name is required';
    errors.isValid = false;
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters';
    errors.isValid = false;
  }

  const trimmedEmail = data.email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = 'Email address is required';
    errors.isValid = false;
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address';
    errors.isValid = false;
  }

  const trimmedSubject = data.subject.trim();
  if (!trimmedSubject) {
    errors.subject = 'Subject is required';
    errors.isValid = false;
  } else if (trimmedSubject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters';
    errors.isValid = false;
  }

  const trimmedMessage = data.message.trim();
  if (!trimmedMessage) {
    errors.message = 'Message is required';
    errors.isValid = false;
  } else if (trimmedMessage.length < 10) {
    errors.message = 'Message must be at least 10 characters';
    errors.isValid = false;
  }

  return errors;
}

/**
 * Generates an encoded mailto link pre-filled with the user's message.
 */
export function generateMailtoLink(
  recipient: string,
  subject: string,
  body: string,
  senderName: string,
  senderEmail: string
): string {
  const fullBody = `Hi Saiduzzaman,\n\n${body}\n\n---\nFrom: ${senderName}\nEmail: ${senderEmail}`;
  const encodedSubject = encodeURIComponent(subject || 'Portfolio Inquiry');
  const encodedBody = encodeURIComponent(fullBody);
  return `mailto:${recipient}?subject=${encodedSubject}&body=${encodedBody}`;
}

/**
 * Generates BibTeX citation string for research work.
 */
export function generateBibtexCitation(
  citationKey: string,
  title: string,
  author: string,
  institution: string,
  year: number,
  keywords: string[]
): string {
  return `@article{${citationKey},
  title={${title}},
  author={${author}},
  institution={${institution}},
  year={${year}},
  keywords={${keywords.join(', ')}}
}`;
}
