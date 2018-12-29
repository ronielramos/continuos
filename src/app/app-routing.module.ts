import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'landing', loadChildren: './access/landing/landing.module#LandingPageModule' },
  { path: 'login', loadChildren: './access/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './access/register/register.module#RegisterPageModule' },
  { path: 'forgot', loadChildren: './access/forgot/forgot.module#ForgotPageModule' },
  { path: 'register-ok', loadChildren: './access/register-ok/register-ok.module#RegisterOkPageModule' },
  { path: 'login-first-time', loadChildren: './access/login-first-time/login-first-time.module#LoginFirstTimePageModule' },
  { path: 'notifications', loadChildren: './tabs/notifications/notifications.module#NotificationsPageModule' },
  { path: 'special', loadChildren: './tabs/special/special.module#SpecialPageModule' },
  { path: 'my-work', loadChildren: './tabs/menu-options/my-work/my-work.module#MyWorkPageModule' },
  { path: 'my-topics', loadChildren: './tabs/menu-options/my-topics/my-topics.module#MyTopicsPageModule' },
  { path: 'admired-people', loadChildren: './tabs/menu-options/admired-people/admired-people.module#AdmiredPeoplePageModule' },
  { path: 'admired-me', loadChildren: './tabs/menu-options/admired-me/admired-me.module#AdmiredMePageModule' },
  { path: 'admired-works', loadChildren: './tabs/menu-options/admired-works/admired-works.module#AdmiredWorksPageModule' },
  { path: 'configurations', loadChildren: './tabs/menu-options/configurations/configurations.module#ConfigurationsPageModule' },
  { path: 'search', loadChildren: './tabs/home-options/search/search.module#SearchPageModule' },
  { path: 'write', loadChildren: './tabs/home-options/write/write.module#WritePageModule' },
  { path: 'found-items', loadChildren: './tabs/home-options/found-items/found-items.module#FoundItemsPageModule' },
  { path: 'change-password', loadChildren: './tabs/menu-options/configurations-options/change-password/change-password.module#ChangePasswordPageModule' },
  { path: 'delete-account', loadChildren: './tabs/menu-options/configurations-options/delete-account/delete-account.module#DeleteAccountPageModule' },
  { path: 'work-details', loadChildren: './details/work-details/work-details.module#WorkDetailsPageModule' },
  { path: 'profile-details', loadChildren: './details/profile-details/profile-details.module#ProfileDetailsPageModule' },
  { path: 'admirations', loadChildren: './details/admirations/admirations.module#AdmirationsPageModule' },
  { path: 'work-collection-details', loadChildren: './details/work-collection-details/work-collection-details.module#WorkCollectionDetailsPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
