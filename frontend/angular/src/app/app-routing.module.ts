import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewDamageComponent} from "./new-damage/new-damage.component";
import {TilesComponent} from "./tiles/tiles.component";

const routes: Routes = [
  {path: '', component: TilesComponent},
  { path: 'newDamage', component: NewDamageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
