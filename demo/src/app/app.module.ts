import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { Router, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";

import { AboutComponent } from "./routes/about.component";
import { DemoComponent } from "./routes/demo.component";
import { ParentScrollComponent } from "./routes/parentScroll.component";
import { SamplesComponent } from "./routes/samples.component";

import { ListItemComponent } from "./lists/list-item.component";

import { HorizontalListComponent } from "./lists/horizontal-list.component";
import { ListWithApiComponent } from "./lists/list-with-api.component";
import { MultiColListComponent } from "./lists/multi-col-list.component";
import { TableListComponent } from "./lists/table-list.component";
import { VerticalListComponent } from "./lists/vertical-list.component";

import { HttpClientModule } from "@angular/common/http";
import { VirtualScrollerModule } from "ngx-virtual-scroller";

const customDefaultOptions = {
  scrollThrottlingTime: 0,
  scrollDebounceTime: 0,
  scrollAnimationTime: 750,
  checkResizeInterval: 1000,
  resizeBypassRefreshThreshold: 5,
  modifyOverflowStyleOfParentScroll: true,
  stripedTable: false,
};

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DemoComponent,
    ParentScrollComponent,
    SamplesComponent,
    ListItemComponent,
    ListWithApiComponent,
    MultiColListComponent,
    TableListComponent,
    VerticalListComponent,
    HorizontalListComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: "demo", component: DemoComponent },
      { path: "about", component: AboutComponent },
      { path: "samples", component: SamplesComponent },
      { path: "parentScroll", component: ParentScrollComponent },
      { path: "**", redirectTo: "/about", pathMatch: "full" },
    ]),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    VirtualScrollerModule,
  ],
  providers: [
    {
      provide: "virtual-scroller-default-options",
      useValue: customDefaultOptions,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(router: Router) {
    router.events.subscribe(() => {
      setTimeout(() => {
        window["hljs"].initHighlighting.called = false;
        window["hljs"].initHighlighting();
      }, 0);
    });
  }
}
