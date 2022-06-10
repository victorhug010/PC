import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "../app-routing.module";
import { DashBoardComponent } from "./dashboard/dashBoard.component";
import { HomeComponent } from "./home/home.component";
import { InputTextComponent } from "./inputText/inputTexto.component";

import { TelaLoginComponent } from "./loginTela/telaLogin.component";
import { MenuBarComponent } from "./menu/menuBar.component";


@NgModule({
  declarations: [
    TelaLoginComponent,
    HomeComponent,
    InputTextComponent,
    MenuBarComponent,
    DashBoardComponent
  ],
  exports: [
    TelaLoginComponent,
    HomeComponent,
    MenuBarComponent,
    InputTextComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
  ],

})
export class ComponentsModule { }