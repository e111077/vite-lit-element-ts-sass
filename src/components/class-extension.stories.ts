import { html, TemplateResult } from 'lit';
import './MyElement/my-element';
import './extended-element/extended-element';
import './double-extended-element/double-extended-element';
import './ScssExample/scss-example';

export default {
  title: 'Code Examples/LIT Class Extension',
};

export const MyElement = (): TemplateResult => {
  return html`
    <my-element>
      <p>This is an instance of &lt;my-element&gt;.</p>
    </my-element>
  `;
};

export const ExtendedElement = (): TemplateResult => {
  return html`
    <extended-element>
      <p>
        This is &lt;extended-element&gt; that extends &lt;my-element&gt;. Notice
        the original properties, name and count are updated, and additionally a
        new property, containing text, displayed below.
      </p>
    </extended-element>
  `;
};

export const DoubleExtendedElement = (): TemplateResult => {
  return html`
    <double-extended-element>
      <p>
        This is &lt;double-extended-element&gt; that extends
        &lt;extended-element&gt;. Notice the original properties, name and count
        are updated, and additionally a new property, containing text, displayed
        below.
      </p>
    </double-extended-element>
  `;
};

export const SimpleExample = (): TemplateResult => {
  return html` <my-element></my-element> `;
};

export const ScssExample = (): TemplateResult => {
  return html`
    <scss-example>
      <p>This is an example for SCSS</p>
    </scss-example>
  `;
};