export const isValidIranianMobile = (input: string) => {
  const iranianMobileRegex = /^\+989\d{9}$/
  return iranianMobileRegex.test(input)
}

/**
 * Convert Persian and Arabic-Indic digits to ASCII digits.
 */
export function convertArabicPersianDigits(s: string) {
  const persian = '۰۱۲۳۴۵۶۷۸۹' // ۰-۹
  const arabic = '٠١٢٣٤٥٦٧٨٩' // ٠-٩
  return s
    .split('')
    .map((ch) => {
      const pIndex = persian.indexOf(ch)
      if (pIndex !== -1) return String(pIndex)
      const aIndex = arabic.indexOf(ch)
      if (aIndex !== -1) return String(aIndex)
      return ch
    })
    .join('')
}

export function normalizeIranianMobile(input: unknown): string | null {
  if (input === null || input === undefined) return null
  let s = String(input).trim()
  s = convertArabicPersianDigits(s)
  // remove common separators (spaces, dashes, parentheses)
  s = s.replace(/[\s\-()]/g, '')
  // convert leading 00 to + (e.g. 0098... -> +98...)
  if (/^00\d+/.test(s)) {
    s = '+' + s.slice(2)
  }
  if (/^09\d{9}$/.test(s)) {
    return '+98' + s.slice(1)
  }
  if (/^9\d{9}$/.test(s)) {
    return '+98' + s
  }
  if (/^\+989\d{9}$/.test(s)) return s
  return null
}
