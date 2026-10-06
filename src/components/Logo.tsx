import type { SVGProps } from 'react'

/** "LG" monogram from the Liseth Giraldo Dev brand. Navy strokes follow currentColor so it works on dark backgrounds. */
export function LogoMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="-4 -4 296 286" role="img" aria-label="Liseth Giraldo Dev" {...props}>
      <path fill="currentColor" d="M0 0H46V232H174V278H0Z" />
      <path fill="#7C3AED" d="M68 142C58 61 121 0 191 0C225 0 254 14 274 40L235 60C170 43 119 77 68 142Z" />
      <path fill="currentColor" d="M154 103H229C273 103 288 134 288 175V278H239V177H197Z" />
      <path
        d="M113 146L94 165L113 184M142 146L161 165L142 184"
        fill="none"
        stroke="#22D3C5"
        strokeWidth="11"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path fill="#7C3AED" d="M0 220Q0 278 58 278H126L80 232H46Z" />
    </svg>
  )
}
