import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {UrlEncodeIdPipe} from "./url-encode-id.pipe"; 

@NgModule({
  declarations:[UrlEncodeIdPipe],
  imports:[CommonModule],
  exports:[UrlEncodeIdPipe] 
})

export class PipeModule{}