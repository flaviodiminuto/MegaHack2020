import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { PublicacaoComponent } from './publicacao/publicacao.component';
import { ProfissionaisComponent } from './profissionais/profissionais.component';
import { MainLogoComponent } from './main-logo/main-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    CadastroComponent,
    LoginComponent,
    PublicacaoComponent,
    ProfissionaisComponent,
    MainLogoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    {path: 'login', component: LoginComponent},
    {path: 'principal', component: PrincipalComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'publicacao', component: PublicacaoComponent},
    { path: '',   redirectTo: '/login', pathMatch: 'full'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
