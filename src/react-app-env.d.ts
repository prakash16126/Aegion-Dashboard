// Minimal JSX declaration to satisfy the TypeScript compiler in this workspace.
// If you install `react` and `@types/react` later, you can remove this file.
declare namespace JSX {
  // A very small subset — allow any intrinsic element and any props.
  interface Element {}
  interface IntrinsicElements {
    [elemName: string]: any
  }
}
