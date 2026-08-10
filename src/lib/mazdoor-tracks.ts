export type Track = {
  id: string;
  title: string;
  artist: string;
};

/** Curated playlist: "banger songs that play at indian barber shops" (PLTJ1PnzCWyFw) */
export const TRACKS: Track[] = [
  { id: "N0jnLZxYwYc", title: "Mujhse Mohabbat Ka Izhaar", artist: "Kumar Sanu, Alka Yagnik" },
  { id: "L37S_2kZpyY", title: "Tumsa Koi Pyaara", artist: "Kumar Sanu, Alka Yagnik" },
  { id: "6Y-549Gk5Wk", title: "Woh Meri Neend Mera Chain", artist: "Sadhana Sargam" },
  { id: "9WlE6fV8Z4k", title: "Saaton Janam Main Tere", artist: "Kumar Sanu, Alka Yagnik" },
  { id: "5T21qYgG4g0", title: "Oye Raju", artist: "Anand Raj Anand, Anand Bakshi" },
  { id: "aJ2WbK4S6Xw", title: "Bahut Pyar Karte Hai", artist: "S.P. Balasubramaniam" },
  { id: "B1Y-4eM9Qx8", title: "Ehsaas Ka Sangeet Sunayee Nahi Deta", artist: "Altaf Raja, Kumar Sanu" },
  { id: "8_N1G7QzS0M", title: "Teri Umeed Tera Intezar", artist: "Kumar Sanu, Sadhana Sargam" },
  { id: "b9R8G0XQ63k", title: "Kitna Pyaara Tujhe Rab Ne Banaya", artist: "Udit Narayan, Alka Yagnik" },
  { id: "4S7gK64V2q8", title: "Mera Dil Bhi Kitna Pagal Hai", artist: "Kumar Sanu, Alka Yagnik" },
  { id: "z9Z4H5X4k2w", title: "Dheere Dheere Se Meri Zindagi Mein Aana", artist: "Kumar Sanu, Anuradha Paudwal" },
  { id: "O3jXZEVYQno", title: "Saathi Haath Badhana", artist: "Mohammed Rafi, Asha Bhosle" },
  { id: "-5ef7epnR60", title: "Mere Desh Ki Dharti", artist: "Mahendra Kapoor" },
  { id: "JTOXKc5mUGU", title: "Ik Raasta Hai Zindagi", artist: "Kishore Kumar, Lata Mangeshkar" },
];

export const SPOTIFY_PLAYLIST_URL =
  "https://open.spotify.com/playlist/37i9dQZF1DX5q67ZpWyRrZ";
export const YOUTUBE_PLAYLIST_ID = "PLTJ1PnzCWyFw";
export const YT_MUSIC_PLAYLIST_URL =
  `https://music.youtube.com/playlist?list=${YOUTUBE_PLAYLIST_ID}`;

export function coverUrl(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

export function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function shuffled<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}
