const arrayDetector = (state: Array<any>) => [...state];
export default function array<State extends Array<any>>(...idxs: number[]) {
  if (!idxs.length) return arrayDetector;
  return (state: State) => idxs.map((idx) => state[idx]);
}
