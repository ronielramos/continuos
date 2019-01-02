import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },

  // Access
  { path: 'landing', loadChildren: './pages/access/landing/landing.module#LandingPageModule' },
  { path: 'login', loadChildren: './pages/access/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/access/register/register.module#RegisterPageModule' },
  { path: 'forgot', loadChildren: './pages/access/forgot/forgot.module#ForgotPageModule' },
  { path: 'register-ok', loadChildren: './pages/access/register-ok/register-ok.module#RegisterOkPageModule' },
  { path: 'login-first-time', loadChildren: './pages/access/login-first-time/login-first-time.module#LoginFirstTimePageModule' },

  // Menu
  { path: 'my-work', loadChildren: './pages/tabs/menu-options/my-work/my-work.module#MyWorkPageModule' },
  { path: 'my-topics', loadChildren: './pages/tabs/menu-options/my-topics/my-topics.module#MyTopicsPageModule' },
  { path: 'admired-people', loadChildren: './pages/tabs/menu-options/admired-people/admired-people.module#AdmiredPeoplePageModule' },
  { path: 'admired-me', loadChildren: './pages/tabs/menu-options/admired-me/admired-me.module#AdmiredMePageModule' },
  { path: 'admired-works', loadChildren: './pages/tabs/menu-options/admired-works/admired-works.module#AdmiredWorksPageModule' },
  { path: 'blocked-people', loadChildren: './pages/tabs/menu-options/blocked-people/blocked-people.module#BlockedPeoplePageModule' },
  { path: 'my-subscriptions', loadChildren: './pages/tabs/menu-options/my-subscriptions/my-subscriptions.module#MySubscriptionsPageModule' },

  // Configurations
  { path: 'configurations', loadChildren: './pages/tabs/menu-options/configurations/configurations.module#ConfigurationsPageModule' },
  { path: 'delete-account', loadChildren: `./pages/tabs/menu-options/configurations-options/delete-account/delete-account.module#DeleteAccountPageModule` },
  { path: 'change-password', loadChildren: `./pages/tabs/menu-options/configurations-options/change-password/change-password.module#ChangePasswordPageModule` },

  // Home
  { path: 'search', loadChildren: './pages/tabs/home-options/search/search.module#SearchPageModule' },
  { path: 'write', loadChildren: './pages/tabs/home-options/write/write.module#WritePageModule' },
  { path: 'found-items', loadChildren: './pages/tabs/home-options/found-items/found-items.module#FoundItemsPageModule' },

  // Details
  { path: 'work-details', loadChildren: './pages/details/work-details/work-details.module#WorkDetailsPageModule' },
  { path: 'profile-details', loadChildren: './pages/details/profile-details/profile-details.module#ProfileDetailsPageModule' },
  { path: 'admirations', loadChildren: './pages/details/admirations/admirations.module#AdmirationsPageModule' },
  { path: 'work-collection-details', loadChildren: `./pages/details/work-collection-details/work-collection-details.module#WorkCollectionDetailsPageModule` },
  { path: 'delation', loadChildren: './pages/details/delation/delation.module#DelationPageModule' },
  { path: 'special-collection-details', loadChildren: `./pages/details/special-collection-details/special-collection-details.module#SpecialCollectionDetailsPageModule` }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
