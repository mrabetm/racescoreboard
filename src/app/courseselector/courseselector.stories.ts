import {CourseselectorComponent} from "./courseselector.component"
import {moduleMetadata, storiesOf } from "@storybook/angular";
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

storiesOf("CourseSelectorComponent", module)
  .addDecorator(
    moduleMetadata({
      imports: [MatFormFieldModule,
        MatSelectModule,
        MatButtonModule,
        MatRippleModule,
        MatDialogModule,
        MatInputModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule],
    })
  ).add('AutoInput', () =>({
  component: CourseselectorComponent,
  props: {title: 'hello?'}
}))

