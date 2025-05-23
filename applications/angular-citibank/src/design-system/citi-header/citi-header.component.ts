import { Component } from "@angular/core";
import { DemoBootstrap } from "@labb/demo-utilities";

@Component({
    selector: 'citi-header',
    template: `
        <div class="header-container"><div class="container"><header  class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3"><div  class="d-flex align-items-center col-md-3 logo ng-star-inserted"><a  routerlink="/home" href="/home">
            <img  [src]="logo" alt="Partners">
            <span >PARTNERS</span></a></div><!----><nav  role="navigation" aria-label="navigation" class="menu-wrapper menu-bar-wrapper clearfix ng-star-inserted"><ul  class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0"><li  routerlinkactive="active" class="ng-star-inserted"><a  tabindex="0" role="button" aria-pressed="false" routerlinkactive="true" class="nav-link ng-star-inserted" id="Products" href="/products/credit-cards"><span >Products</span></a><!----><!----></li><li  routerlinkactive="active" class="ng-star-inserted"><!----><a  routerlinkactive="true" class="nav-link ng-star-inserted" id="Featured Partners" href="/partners/featured-partners"><span >Featured Partners</span></a><!----><!----><!----></li><li  routerlinkactive="active" class="ng-star-inserted"><!----><a  routerlinkactive="true" class="nav-link ng-star-inserted" id="Developers" href="/developers"><span >Developers</span></a><!----><!----><!----></li><!----></ul></nav><!----><div  class="col-md-3 text-end"><button  type="button" cdscta="primary" routerlink="/user/login" class="cds-cta cds-cta-md cds-cta-primary ng-star-inserted" tabindex="0">Sign On &gt;</button><!----><!----></div></header></div><!----></div>
    `,
    standalone: false
})
export class CitiHeaderComponent {
    public get logo() {
        return DemoBootstrap.getLabbLogo() || 'assets/citi-logo.png'
    }
}