import { Routes } from '@angular/router';
import { ProductComponent } from '../components/product/product.component';
import { BasketComponent } from '../components/basket/basket.component';
import { WaveComponent } from '../components/wave/wave.component';
import { AnimatedTextComponent } from '../components/animated-text/animated-text.component';
import { DoorComponent } from '../components/door/door.component';

export const routes: Routes = [
  { path: 'products', component: ProductComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'wave', component: WaveComponent },
  { path: 'animated', component: AnimatedTextComponent },
  { path: 'door', component: DoorComponent },
];
