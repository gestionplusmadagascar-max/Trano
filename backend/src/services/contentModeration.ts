const phoneRegex = /(\+?\d[\d\s.-]{6,}\d)/g;
const emailRegex = /([\w.-]+@[\w.-]+\.[A-Za-z]{2,})/g;
const linkRegex = /(https?:\/\/\S+|www\.\S+)/g;

export interface ModerationResult {
  sanitized: string;
  hasBlockedContent: boolean;
  blockedPatterns: string[];
}

export function sanitizeListingText(input: string): ModerationResult {
  const blockedPatterns: string[] = [];
  let sanitized = input;

  if (phoneRegex.test(input)) {
    blockedPatterns.push("phone");
    sanitized = sanitized.replace(phoneRegex, "[bloqué]");
  }
  if (emailRegex.test(input)) {
    blockedPatterns.push("email");
    sanitized = sanitized.replace(emailRegex, "[bloqué]");
  }
  if (linkRegex.test(input)) {
    blockedPatterns.push("link");
    sanitized = sanitized.replace(linkRegex, "[bloqué]");
  }

  return {
    sanitized,
    hasBlockedContent: blockedPatterns.length > 0,
    blockedPatterns
  };
}
