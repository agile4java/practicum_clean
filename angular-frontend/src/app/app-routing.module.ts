import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { HomeComponent } from "./components/home/home.component";
import { ItemformComponent } from "./components/itemform/itemform.component";
import { InventoryComponent } from "./components/inventory/inventory.component";
import { InventoryNavbarComponent } from "./components/inventory-navbar/inventory-navbar.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "itemform", component: ItemformComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "", component: WelcomeComponent },
  { path: "inventory", component: InventoryComponent },
  { path: "inventory-navbar", component: InventoryNavbarComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
