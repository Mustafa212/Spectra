import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';

export const routes: Routes = [

    {path:""  , component:HomeComponent},
    {path:"members/:id" , component:MemberDetailsComponent}
];
