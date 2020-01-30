import { NgModule } from '@angular/core';

import {
    MatCommonModule,
    MatRipple,
    MatButton,
    MatCard,
    MatSidenav,
    MatFormField,
    MatInput,
    MatTooltip,
    MatToolbar,
    MatTab,
    MatChip,
    MatIcon,
    MatList,
    MatChipList,
    MatTabGroup,
    MatToolbarRow,
    MatListItem,
    MatDivider,
} from '@angular/material';

@NgModule({
    imports: [
        MatCommonModule
    ]
})

@NgModule({
  declarations: [
        MatButton,
        MatIcon,
        MatCard,
        MatSidenav,
        MatFormField,
        MatInput,
        MatTooltip,
        MatToolbar,
        MatTab,
        MatChip,
        MatIcon,
        MatList,
        MatChipList,
        MatTabGroup,
        MatToolbarRow,
        MatListItem,
        MatDivider,
        MatRipple
    ],
    exports: [
        MatButton,
        MatIcon,
        MatCard,
        MatSidenav,
        MatFormField,
        MatInput,
        MatTooltip,
        MatToolbar,
        MatTab,
        MatChip,
        MatChipList,
        MatIcon,
        MatList,
        MatTabGroup,
        MatToolbarRow,
        MatListItem,
        MatDivider,
        MatRipple
    ]
})
export class MaterialModule { }
