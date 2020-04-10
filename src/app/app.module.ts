import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import  { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import  {ReactiveFormsModule}   from '@angular/forms';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component'
import  {lookupListToken,lookupLists}   from './providers'
import  {HttpClientModule,HttpXhrBackend} from '@angular/common/http';
import  {MockXHRBackend} from './mock-xhr-backend';
import { routing } from './app-routing.module';

@NgModule({
    imports:[
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        routing
    ],
    declarations:[
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        FavoriteDirective,
        CategoryListPipe,
        MediaItemFormComponent
    ],
    
    providers:[
        {provide:lookupListToken,useValue:lookupLists},
        {provide:HttpXhrBackend,useClass:MockXHRBackend}
    ]
    ,
    bootstrap:[
        AppComponent
    ]
})

export class AppModule {}