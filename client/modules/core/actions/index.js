import { MENU_TOGGLE } from './actionTypes'

export default function toggleMenu(open) {
  return { type: MENU_TOGGLE, open }
}
