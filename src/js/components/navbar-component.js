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
      <nav class="navbar navbar-expand-md navbar-dark bg-dark">
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

          <navbar-link></navbar-link>
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasResponsive"
            aria-controls="offcanvasResponsive"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <div
        class="offcanvas offcanvas-end d-lg-none bg-dark text-white"
        tabindex="-1"
        id="offcanvasResponsive"
        aria-labelledby="offcanvasResponsiveLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasResponsiveLabel">
            Navigation
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <navbar-link-resposive></navbar-link-resposive>
        </div>
      </div>
    `;
  }
}

customElements.define('navbar-component', NavbarComponent);
