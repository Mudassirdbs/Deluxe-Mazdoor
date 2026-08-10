export type Track = {
  id: string;
  title: string;
  artist: string;
};

/** Curated retro Hindi playlist. Add or reorder freely — `id` is the YouTube video id. */
export const TRACKS: Track[] = [
  { id: "O3jXZEVYQno", title: "Saathi Haath Badhana", artist: "Mohammed Rafi, Asha Bhosle" },
  { id: "-5ef7epnR60", title: "Mere Desh Ki Dharti", artist: "Mahendra Kapoor" },
  { id: "JTOXKc5mUGU", title: "Ik Raasta Hai Zindagi", artist: "Kishore Kumar, Lata Mangeshkar" },
  { id: "8c_ezZRysW8", title: "Saathi Haath Badhana (Naya Daur)", artist: "Asha Bhosle, Mohammed Rafi" },
  { id: "dBNh5gQwg5g", title: "Mere Desh Premiyon", artist: "Mohammed Rafi, Kishore Kumar" },
  { id: "N0jnLZxYwYc", title: "Mujhse Mohabbat Ka Izhaar Karta", artist: "Kumar Sanu, Alka Yagnik" },
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
