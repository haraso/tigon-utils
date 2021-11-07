const atomicDetector = (state: any) => [state]
export default function atomic() {
  return atomicDetector;
}