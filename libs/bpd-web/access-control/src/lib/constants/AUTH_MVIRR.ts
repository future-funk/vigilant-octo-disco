import { NTID } from './NTID'
const { IIG_USERS, IIG_VENDORS } = NTID

const USERS = {
  us: [
    'rpracy', // Richard Pracy
    ...IIG_USERS,
    ...IIG_VENDORS,
  ],
  eu: [
    'relyp', // Lim Yoke Peng
    'rpracy', // Richard Pracy
    'porterda', // "Daniel Porter"
    'vithalar', // "Rakesh Vithalani"
    ...IIG_USERS,
    ...IIG_VENDORS,
  ],
  cn: [
    'rpracy', // Richard Pracy
    'siowwenn', // Siow Wenning
    ...IIG_USERS,
    ...IIG_VENDORS,
  ],
  asig: [
    'rpracy', // Richard Pracy
    'tankengb', // Jeffrey Tan Keng Boon
    'chengand', // Andrew Cheng YouRong
    ...IIG_USERS,
    ...IIG_VENDORS,
  ],
  kr: [
    'rpracy', // Richard Pracy
    'leevivia', // Vivian Lee Pui Yin
    'liumeiji', // Liu Meijing
    ...IIG_USERS,
    ...IIG_VENDORS,
  ],
  jp: [
    'rpracy', // Richard Pracy
    'leevivia', // Vivian Lee Pui Yin
    ...IIG_USERS,
    ...IIG_VENDORS,
  ],
  in: [
    'rpracy', // Richard Pracy
    'tankengb', // Jeffrey Tan Keng Boon
    ...IIG_USERS,
    ...IIG_VENDORS,
  ],
  anz: [
    'rpracy', // Richard Pracy
    'chengand', // Andrew Cheng YouRong
    ...IIG_USERS,
    ...IIG_VENDORS,
  ],

  default: [...IIG_USERS, ...IIG_VENDORS],
}

const OFFICES = {
  us: ['NYO', 'BRO', 'SFO', 'SPO'],
  eu: ['LDO', 'SPO'],
  cn: ['BJO', 'SHO', 'SPO'],
  asig: ['SPO'],
  kr: ['KRO', 'SPO'],
  jp: ['JPO', 'SPO'],
  in: ['IDO', 'SPO'],
  anz: ['AUO', 'SPO'],

  default: ['SPO'],
}

export const AUTH_MVIRR = {
  USERS,
  OFFICES,
}
