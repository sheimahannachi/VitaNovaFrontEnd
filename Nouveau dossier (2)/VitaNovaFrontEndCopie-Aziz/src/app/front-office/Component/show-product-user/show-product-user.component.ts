import { Component, HostListener } from '@angular/core';
import { Product } from 'src/app/Model/Product';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-show-product-user',
  templateUrl: './show-product-user.component.html',
  styleUrls: ['./show-product-user.component.css']
})
export class ShowProductUserComponent {

  listeProduits: Product[] = [];
  searchTerm: string = '';
  isCardExpanded: boolean = false; // Variable pour suivre l'état d'agrandissement de la carte
  selectedProduct: Product | null = null;
  showCommentField: boolean = false;
  commentaire: string = '';

  

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.showProducts();
  }
  showProducts(): void {
    this.productService.showProducts()
      .subscribe(
        (products: any[]) => {
          this.listeProduits = products
            .filter(product => product.archivePr === false)
            .map(product => ({
              idPr: product.idPr, 
              namePr: product.namePr,
              pricePr: product.pricePr,
              categoriePr: product.categoriePr,
              picturePr: "http://localhost:80/aziz/" + product.picturePr,
              archivePr: false,
              likesCount: product.likesCount ,
            }));
          console.log('Données récupérées du service:', this.listeProduits);
        },
        (error) => {
          console.error('Erreur lors de la récupération des produits :', error);
        }
      );
  }
  searchProducts(): void {
    if (this.searchTerm.trim() !== '') {
      this.productService.searchProductsByName(this.searchTerm).subscribe(
        (products: any[]) => {
          this.listeProduits = products
            .filter(product => product.archivePr === false)
            .map(product => ({
              idPr: product.idPr, 
              namePr: product.namePr,
              pricePr: product.pricePr,
              categoriePr: product.categoriePr,
              picturePr: this.productService.getImageUrl(product.picturePr),
              archivePr: false,
              likesCount: product.likesCount ,
            }));
          console.log('Résultats de la recherche :', this.listeProduits);
        },
        (error) => {
          console.error('Erreur lors de la recherche de produits :', error);
        }
      );
    } else {
      // Si le terme de recherche est vide, afficher tous les produits
      this.showProducts();
    }
  }
  expandCard(product: Product): void {
    this.selectedProduct = product;
    this.isCardExpanded = false;
  }

  closeExpandedCard(): void {
   this.selectedProduct = null;
      this.isCardExpanded = false;
      this.commentaire = ''; // Réinitialiser le champ de commentaire lorsque la carte est réduite
  }


  onDocumentClick(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;
    const isExpandedCard = clickedElement.closest('.expanded-card');
    if (!isExpandedCard && this.isCardExpanded) {
      // Si l'élément cliqué n'est pas à l'intérieur de la carte agrandie et que la carte est agrandie
      // alors réduire la carte agrandie
      this.closeExpandedCard();
    }
  }
  
 /* incrementLikes(product: Product): void {
    // Assurez-vous que likesCount est défini, sinon utilisez 0 comme valeur par défaut
    product.likesCount = (product.likesCount ?? 0) + 1;
    // Ensuite, vous pouvez sauvegarder ce changement dans votre base de données ou service backend
    // Par exemple : this.productService.saveLikes(product.idPr, product.likesCount);
  }*/
 
}