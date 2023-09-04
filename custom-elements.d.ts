// custom-elements.d.ts

import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      // Define HTML elements that accept a className property
      div: React.HTMLProps<HTMLDivElement>;

      // Add other HTML elements as needed
      span: React.HTMLProps<HTMLSpanElement>;
      button: React.HTMLProps<HTMLButtonElement>;

      // You can also define custom components here if needed
      // For example:
      // MyCustomComponent: React.HTMLProps<HTMLElement>;
    }
  }
}
