import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { MapComponent } from './map/map.component';
import { DashboardWrapperComponent } from './dashboard-wrapper/dashboard-wrapper.component';
import { OnboardingWrapperComponent } from './onboarding-wrapper/onboarding-wrapper.component';

export const routes: Routes = [
    {
        path: 'dash', component: DashboardWrapperComponent, children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'profile', component: ProfileComponent },
            {path:'',component:ProfileComponent}
        ]
    },
    {
        path: 'auth', component: OnboardingWrapperComponent, children: [
            { path: 'signup', component: SignUpComponent },
            { path: 'login', component: LogInComponent },
        ]
    },    
    { path: 'map', component: MapComponent },
];