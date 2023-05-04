import PagesData from './index.json';
import {destDetails, NavArray} from '../types';

console.log(PagesData.destinations)

export const links: NavArray = [
    { id: 0, url: "/", page: "Home" },
    { id: "01", url: "/destination", page: "Destination" },
    { id: "02", url: "/crew", page: "Crew" },
    { id: "03", url: "/technology", page: "Technology" }
]

export const bodies: Array<destDetails> = [
    { id: Number(Math.random().toFixed(2)), location: "Moon" },
    { id: Number(Math.random().toFixed(2)), location: "Mars" },
    { id: Number(Math.random().toFixed(2)), location:  "Europa" },
    { id: Number(Math.random().toFixed(2)), location: "Titan" },
]
