import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComenzarComponent } from './comenzar/comenzar.component';
import { LoginComponent } from './login/login.component';
import { PreciosComponent } from './precios/precios.component';
import { TecnologiaComponent } from './tecnologias/tecnologia/tecnologia.component';
import { AdministralospedidosComponent } from './tecnologias/administralospedidos/administralospedidos.component';
import { DescripciongeneralComponent } from './tecnologias/administralospedidos/descripciongeneral/descripciongeneral.component';
import { PosComponent } from './tecnologias/administralospedidos/pos/pos.component';
import { AppdepeidosueComponent } from './tecnologias/administralospedidos/appdepeidosue/appdepeidosue.component';
import { LlegaclidescgenComponent } from './tecnologias/llegaclientes/llegaclidescgen/llegaclidescgen.component';
import { ResencliComponent } from './tecnologias/llegaclientes/resencli/resencli.component';
import { TopyavoyComponent } from './tecnologias/llegaclientes/topyavoy/topyavoy.component';
import { IntegracionigComponent } from './tecnologias/llegaclientes/integracionig/integracionig.component';
import { HistoriasComponent } from './tecnologias/llegaclientes/historias/historias.component';
import { AdmindemenusComponent } from './tecnologias/simplificalasoperaciones/admindemenus/admindemenus.component';
import { AnalisiseinfoComponent } from './tecnologias/simplificalasoperaciones/analisiseinfo/analisiseinfo.component';
import { DescgeneralComponent } from './tecnologias/simplificalasoperaciones/descgeneral/descgeneral.component';
import { PedidossincontactoComponent } from './tecnologias/simplificalasoperaciones/pedidossincontacto/pedidossincontacto.component';
import { AnunciosComponent } from './tecnologias/hazcrecertusventas/anuncios/anuncios.component';
import { DescgeneralventasComponent } from './tecnologias/hazcrecertusventas/descgeneralventas/descgeneralventas.component';
import { ProgramalealtadComponent } from './tecnologias/hazcrecertusventas/programalealtad/programalealtad.component';
import { PromocionesComponent } from './tecnologias/hazcrecertusventas/promociones/promociones.component';
import { AppyavoyComponent } from './servicios/appyavoy/appyavoy.component';
import { TiendawebComponent } from './servicios/tiendaweb/tiendaweb.component';
import { YavoydirectComponent } from './servicios/yavoydirect/yavoydirect.component';
import { DeschistoriaComponent } from './recursos/deschistoria/deschistoria.component';
import { DescaprendizajeComponent } from './recursos/descaprendizaje/descaprendizaje.component';
import { FundemarketingComponent } from './recursos/fundemarketing/fundemarketing.component';
import { BlogaprendizajeComponent } from './recursos/blogaprendizaje/blogaprendizaje.component';
import { InicioComponent } from './inicio/inicio.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { InformesComponent } from './informes/informes.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { HorariofiestasComponent } from './horariofiestas/horariofiestas.component';
import { MarketingcComponent } from './marketingc/marketingc.component';
import { HomeComponent } from './home/home.component';
import { RegistrocorrectoComponent } from './registrocorrecto/registrocorrecto.component';
import { MenuComponent } from './menu/menu.component';
import { AgregarproductoComponent } from './agregarproducto/agregarproducto.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ComenzarComponent,
    LoginComponent,
    PreciosComponent,
    TecnologiaComponent,
    AdministralospedidosComponent,
    DescripciongeneralComponent,
    PosComponent,
    AppdepeidosueComponent,
    LlegaclidescgenComponent,
    ResencliComponent,
    TopyavoyComponent,
    IntegracionigComponent,
    HistoriasComponent,
    AdmindemenusComponent,
    AnalisiseinfoComponent,
    DescgeneralComponent,
    PedidossincontactoComponent,
    AnunciosComponent,
    DescgeneralventasComponent,
    ProgramalealtadComponent,
    PromocionesComponent,
    AppyavoyComponent,
    TiendawebComponent,
    YavoydirectComponent,
    DeschistoriaComponent,
    DescaprendizajeComponent,
    FundemarketingComponent,
    BlogaprendizajeComponent,
    InicioComponent,
    PedidosComponent,
    InformesComponent,
    RestaurantesComponent,
    HorariofiestasComponent,
    MarketingcComponent,
    HomeComponent,
    RegistrocorrectoComponent,
    MenuComponent,
    AgregarproductoComponent,
    SidebarComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
