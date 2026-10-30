const STORAGE_KEY = "desktopIconPositions";

export const readStoredPositions = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

export const writeStoredPosition = (id, position) => {
  try {
    const all = readStoredPositions();
    all[id] = position;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
  } catch {
    // Storage can fail (quota, private mode) — positions just won't
    // persist this time, nothing to recover from.
  }
};
