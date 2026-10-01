/**
 * Type declaration for SVG files imported as React components.
 * Enables TypeScript to understand SVG imports via tools like @svgr/webpack.
 */
declare module "*.svg" {
  import * as React from "react"
  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<"svg"> & { title?: string }
  >
  export default ReactComponent
}
