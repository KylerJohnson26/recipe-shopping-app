import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() showShoppingList: boolean = false;
  @Input() showRecipe: boolean = false;

  onLinkSelected(selectedLink: string){
    console.log(`OnlinkSelected Fired: ${selectedLink}`)
    if(selectedLink === 'recipe') {
      this.showRecipe = true;
      this.showShoppingList = false;
    } else {
      this.showShoppingList = true;
      this.showRecipe = false;
    }
    
  }
  
}
