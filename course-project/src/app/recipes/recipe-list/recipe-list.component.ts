import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { ShoppingListComponent } from '../../shopping-list/shopping-list.component';
import { ShoppingEditComponent } from '../../shopping-list/shopping-edit/shopping-edit.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    CommonModule,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Chocco Rugelach',
      "Chocolate lovers, rejoice with our Chocolate Rugelach, a petite delight that packs a big flavor punch. Crafted from a rich cream cheese dough, each bite-sized morsel encases a luscious dark chocolate filling. These cookies boast a flaky and buttery texture, with a deep chocolate essence that melts in your mouth. Ideal for Christmas or any festive occasion, they're a year-round treat for those who cherish the finer things in life.",
      'https://bakesbybrownsugar.com/wp-content/uploads/2022/01/Chocolate-Rugelach-2.jpg.webp'
    ),
    new Recipe(
      'Apple Cranberry Crumble Pie',
      "Indulge in the delightful fusion of flavors with our special Apple Cranberry Crumble Pie. Inside, it's a soft, sweet medley of Granny Smith and Golden Delicious apples, harmoniously blended with tangy fresh cranberries. The exterior is a contrasting delight of crunchy, buttery crumble. This pie is a masterful blend of textures and tastes, creating a dessert that's both sumptuously satisfying and aesthetically appealing.",
      'https://bakesbybrownsugar.com/wp-content/uploads/2021/11/Apple-Cranberry-Crumble-Pie-2.jpg.webp'
    ),
  ];
}
