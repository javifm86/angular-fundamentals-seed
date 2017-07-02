import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';

// @NgModule({
//   imports: [
//     BrowserModule
//   ],
//   bootstrap: [
//     AppComponent
//   ],
//   declarations: [
//     AppComponent
//   ]
// })
// export class AppModule {}
