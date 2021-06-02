/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { html, css, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { MyElement } from '../MyElement/my-element';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('extended-element')
export class ExtendedElement extends MyElement {
  static styles = css`
    :host {
      display: block;
      /* border: solid 1px gray; */
      padding: 16px;
      max-width: 800px;
      /* An overwritten CSS property */
      border: dashed 1px gray;
      margin: 0 auto;
    }
  `;

  // Override the default `name` variable from MyElement.
  name = 'ExtendedElement that extends MyElement';

  // Override the default counter starting point.
  count = 10;

  /**
   * The name to say "Hello" to.
   */
  @property()
  extra = 'Just another new property on the child class.';

  render(): TemplateResult {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
      ${this.extra}
    `;
  }

  // When this private method is enabled in the extended class, error is thrown.
  // Class 'ExtendedElement' incorrectly extends base class 'MyElement'.
  // Types have separate declarations of a private property '_onClick'.
  // private _onClick() {
  //   this.count++;
  // }
}

declare global {
  interface HTMLElementTagNameMap {
    'extended-element': ExtendedElement;
  }
}
