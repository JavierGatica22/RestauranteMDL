import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComenzarComponent } from './comenzar/comenzar.component';
import { HomeComponent } from './home/home.component';
import { HorariofiestasComponent } from './horariofiestas/horariofiestas.component';
import { InformesComponent } from './informes/informes.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MarketingcComponent } from './marketingc/marketingc.component';
import { MenuComponent } from './menu/menu.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PreciosComponent } from './precios/precios.component';
import { BlogaprendizajeComponent } from './recursos/blogaprendizaje/blogaprendizaje.component';
import { DescaprendizajeComponent } from './recursos/descaprendizaje/descaprendizaje.component';
import { DeschistoriaComponent } from './recursos/deschistoria/deschistoria.component';
import { FundemarketingComponent } from './recursos/fundemarketing/fundemarketing.component';
import { RegistrocorrectoComponent } from './registrocorrecto/registrocorrecto.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { AppyavoyComponent } from './servicios/appyavoy/appyavoy.component';
import { TiendawebComponent } from './servicios/tiendaweb/tiendaweb.component';
import { YavoydirectComponent } from './servicios/yavoydirect/yavoydirect.component';
import { AppdepeidosueComponent } from './tecnologias/administralospedidos/appdepeidosue/appdepeidosue.component';
import { DescripciongeneralComponent } from './tecnologias/administralospedidos/descripciongeneral/descripciongeneral.component';
import { PosComponent } from './tecnologias/administralospedidos/pos/pos.component';
import { AnunciosComponent } from './tecnologias/hazcrecertusventas/anuncios/anuncios.component';
import { DescgeneralventasComponent } from './tecnologias/hazcrecertusventas/descgeneralventas/descgeneralventas.component';
import { ProgramalealtadComponent } from './tecnologias/hazcrecertusventas/programalealtad/programalealtad.component';
import { PromocionesComponent } from './tecnologias/hazcrecertusventas/promociones/promociones.component';
import { HistoriasComponent } from './tecnologias/llegaclientes/historias/historias.component';
import { IntegracionigComponent } from './tecnologias/llegaclientes/integracionig/integracionig.component';
import { LlegaclidescgenComponent } from './tecnologias/llegaclientes/llegaclidescgen/llegaclidescgen.component';
import { ResencliComponent } from './tecnologias/llegaclientes/resencli/resencli.component';
import { TopyavoyComponent } from './tecnologias/llegaclientes/topyavoy/topyavoy.component';
import { AdmindemenusComponent } from './tecnologias/simplificalasoperaciones/admindemenus/admindemenus.component';
import { AnalisiseinfoComponent } from './tecnologias/simplificalasoperaciones/analisiseinfo/analisiseinfo.component';
import { DescgeneralComponent } from './tecnologias/simplificalasoperaciones/descgeneral/descgeneral.component';
import { PedidossincontactoComponent } from './tecnologias/simplificalasoperaciones/pedidossincontacto/pedidossincontacto.component';
import { TecnologiaComponent } from './tecnologias/tecnologia/tecnologia.component';
import { AgregarproductoComponent } from './agregarproducto/agregarproducto.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { TopyavoysbComponent } from './topyavoysb/topyavoysb.component';
import { PagossbComponent } from './pagossb/pagossb.component';
import { MarketingsbComponent } from './marketingsb/marketingsb.component';
import { TiempopreparacionsbComponent } from './tiempopreparacionsb/tiempopreparacionsb.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'comenzar',
    pathMatch:'full'
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path:'comenzar',
    component:ComenzarComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'precios',
    component:PreciosComponent
  },
  {
    path: 'tecnologia',
    component:TecnologiaComponent
  },
  {
    path: 'descripcionGeneral',
    component:DescripciongeneralComponent
  },
  {
    path: 'pos',
    component:PosComponent
  },
  {
    path: 'appPedidosUber',
    component:AppdepeidosueComponent
  },
  {
    path: 'llegaclidescgen',
    component:LlegaclidescgenComponent
  },
  {
    path: 'resenaclientes',
    component:ResencliComponent
  },
  {
    path: 'topyavoy',
    component: TopyavoyComponent
  },
  {
    path: 'integracioninstagram',
    component: IntegracionigComponent
  },
  {
    path: 'descgeneral',
    component:DescgeneralComponent
  },
  {
    path: 'analisiseinfo',
    component:AnalisiseinfoComponent
  },
  {
    path: 'admindemenus',
    component:AdmindemenusComponent
  },
  {
    path: 'pedidossincontacto',
    component:PedidossincontactoComponent
  },
  {
    path: 'descgeneralventas',
    component:DescgeneralventasComponent
  },
  {
    path: 'anuncios',
    component:AnunciosComponent
  },
  {
    path: 'promociones',
    component:PromocionesComponent
  },
  {
    path: 'programalealtad',
    component:ProgramalealtadComponent
  },
  {
    path: 'appyavoy',
    component:AppyavoyComponent
  },
  {
    path: 'tiendaweb',
    component:TiendawebComponent
  },
  {
    path: 'yavoydirect',
    component:YavoydirectComponent
  },
  {
    path: 'deschistoria',
    component:DeschistoriaComponent
  },
  {
    path: 'descaprendizaje',
    component:DescaprendizajeComponent
  },
  {
    path: 'fundemarketing',
    component:FundemarketingComponent
  },
  {
    path: 'blogaprendizaje',
    component:BlogaprendizajeComponent
  },
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'pedidos',
    component:PedidosComponent
  },
  {
    path:'informes',
    component:InformesComponent
  },
  {
    path:'restaurantes',
    component:RestaurantesComponent
  },
  {
    path:'horariofiestas',
    component:HorariofiestasComponent
  },
  {
    path:'marketingc',
    component:MarketingcComponent
  },
  {
    path:'historias',
    component:HistoriasComponent
  },
  {
    path:'registrocorrecto',
    component:RegistrocorrectoComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'agregarproducto',
    component:AgregarproductoComponent
  },
  {
    path:'sidebar',
    component:SidebarComponent
  },
  {
    path:'usuario',
    component:UsuarioComponent
  },
  {
    path:'topyavoysb',
    component:TopyavoysbComponent
  },
  {
    path:'pagossb',
    component:PagossbComponent
  },
  {
    path:'marketingsb',
    component:MarketingsbComponent
  },
  {
    path:'tiempopreparacionsb',
    component:TiempopreparacionsbComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
