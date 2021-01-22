import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {UrlEncodeIdPipe} from "./url-encode-id.pipe"; 
import { FormatIdPipe } from './format-id.pipe';

@NgModule({
  declarations:[UrlEncodeIdPipe, FormatIdPipe],
  imports:[CommonModule],
  exports:[UrlEncodeIdPipe, FormatIdPipe] 
})

export class PipeModule{}