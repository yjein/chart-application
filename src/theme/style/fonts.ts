import { color } from "./color"

export interface FontsInterface {
  SansMedium: string
}

export const fonts: FontsInterface = {
  SansMedium: `
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
  color: ${color.primaryColor};
  `,
}
