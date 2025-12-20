import { provideRouter } from '@angular/router';
import { ListComponent } from './components/list/list';
import { AddPersonComponent } from './components/add-person/add-person';
import { DetailsComponent } from './components/details/details';
import { NotFoundComponent } from './components/not-found/not-found';

export const appConfig = {
  providers: [
    provideRouter([
      { path: '', component: ListComponent },
      { path: 'add', component: AddPersonComponent },
      { path: 'details/:id', component: DetailsComponent },
      { path: '**', component: NotFoundComponent },
    ])
  ]
};
