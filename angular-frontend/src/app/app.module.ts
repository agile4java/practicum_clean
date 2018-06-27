import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { HomeComponent } from "./components/home/home.component";
import { ItemformComponent } from "./components/itemform/itemform.component";
import { AppRoutingModule } from ".//app-routing.module";
import { InventoryComponent } from './components/inventory/inventory.component';
import { InventoryNavbarComponent } from './components/inventory-navbar/inventory-navbar.component';

// const appRoutes: Routes = [
//   { path: "home", component: HomeComponent },
//   { path: "itemform", component: ItemformComponent },
//   { path: "dashboard", component: DashboardComponent },
//   { path: "welcome", component: WelcomeComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    WelcomeComponent,
    HomeComponent,
    ItemformComponent,
    InventoryComponent,
    InventoryNavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
