import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayPostComponent } from './display-post/display-post.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { CreatePostFormComponent } from './create-post-form/create-post-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextInputComponent } from './inputs/text-input/text-input.component';
import { TextareaInputComponent } from './inputs/textarea-input/textarea-input.component';
import { SelectInputComponent } from './inputs/select-input/select-input.component';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    DisplayPostComponent,
    CreatePostFormComponent,
    TextInputComponent,
    TextareaInputComponent,
    SelectInputComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ],
  exports: [
    CommonModule,
    DisplayPostComponent,
    CreatePostFormComponent,
    TextInputComponent,
    TextareaInputComponent,
    SelectInputComponent
  ],
})
export class SharedModule { }
