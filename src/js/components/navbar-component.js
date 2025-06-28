import { html } from 'lit';
import LitWithoutShadowDom from './base/lit-without-shadowdom';

class NavbarComponent extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <nav class="navbar navbar-expand-md navbar-dark bg-primary">
        <div class="container">
          <span class="navbar-brand">
            <img
              src="/icons/favicon.png"
              alt="Logo"
              width="30"
              height="30"
              class="d-inline-block align-top me-2"
            />
            ${this.brandName}
          </span>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <navbar-link></navbar-link>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('navbar-component', NavbarComponent);
