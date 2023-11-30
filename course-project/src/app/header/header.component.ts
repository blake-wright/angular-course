import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from '../recipes/recipes.component';
import { DropdownDirective } from '../shared/dropdown.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RecipesComponent, DropdownDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }
}
