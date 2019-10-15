import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'terms', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'admin', loadChildren: './pages/admin/admin.module#AdminPageModule' },
  { path: 'assess-a', loadChildren: './pages/assess-a/assess-a.module#AssessAPageModule' },
  { path: 'assess-ba', loadChildren: './pages/assess-ba/assess-ba.module#AssessBaPageModule' },
  { path: 'assess-bb', loadChildren: './pages/assess-bb/assess-bb.module#AssessBbPageModule' },
  { path: 'assess-ca', loadChildren: './pages/assess-ca/assess-ca.module#AssessCaPageModule' },
  { path: 'assess-cb', loadChildren: './pages/assess-cb/assess-cb.module#AssessCbPageModule' },
  { path: 'assess-da', loadChildren: './pages/assess-da/assess-da.module#AssessDaPageModule' },
  { path: 'assess-db', loadChildren: './pages/assess-db/assess-db.module#AssessDbPageModule' },
  { path: 'assess-e', loadChildren: './pages/assess-e/assess-e.module#AssessEPageModule' },
  { path: 'assess-ea', loadChildren: './pages/assess-ea/assess-ea.module#AssessEaPageModule' },
  { path: 'assess-eb', loadChildren: './pages/assess-eb/assess-eb.module#AssessEbPageModule' },
  { path: 'assess-ec', loadChildren: './pages/assess-ec/assess-ec.module#AssessEcPageModule' },
  { path: 'home2', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'info', loadChildren: './pages/info/info.module#InfoPageModule' },
  { path: 'info-a', loadChildren: './pages/info-a/info-a.module#InfoAPageModule' },
  { path: 'info-b', loadChildren: './pages/info-b/info-b.module#InfoBPageModule' },
  { path: 'info-c', loadChildren: './pages/info-c/info-c.module#InfoCPageModule' },
  { path: 'info-d', loadChildren: './pages/info-d/info-d.module#InfoDPageModule' },
  { path: 'info-e', loadChildren: './pages/info-e/info-e.module#InfoEPageModule' },
  { path: 'info-f', loadChildren: './pages/info-f/info-f.module#InfoFPageModule' },
  { path: 'listanswer', loadChildren: './pages/listanswer/listanswer.module#ListanswerPageModule' },
  { path: 'listanswer-admin', loadChildren: './pages/listanswer-admin/listanswer-admin.module#ListanswerAdminPageModule' },
  { path: 'listanswer-detail', loadChildren: './pages/listanswer-detail/listanswer-detail.module#ListanswerDetailPageModule' },
  { path: 'listanswer-result', loadChildren: './pages/listanswer-result/listanswer-result.module#ListanswerResultPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'menuadmin', loadChildren: './pages/menuadmin/menuadmin.module#MenuadminPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'splash', loadChildren: './pages/splash/splash.module#SplashPageModule' },
  { path: 'suggest', loadChildren: './pages/suggest/suggest.module#SuggestPageModule' },
  { path: 'terms', loadChildren: './pages/terms-of-use/terms-of-use.module#TermsOfUsePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
