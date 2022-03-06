const objectDetector = (state: any) => Object.entries(state).flat();
export default function object<State>(...props: (keyof State)[]) {
  if (!props.length) return objectDetector;
  return (state: State) => props.map((key) => state[key]);
}
