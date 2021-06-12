import { MenuItem } from "../menu-item/menu-item.model";
import { CartItem } from "./cart-item.model";

export class ShoppingCartService {
    items: CartItem[] = [];

    clear() {
        this.items = []; //esvazia lista do carrinho
    }

    addItem(item: MenuItem) {
        //testa se id do item recebido é igual a id que já está na lista do carrinho
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
        if(foundItem) { //se encontrar id igual, incrementa quantidade
            foundItem.quantity = foundItem.quantity + 1;
        } else { //se não encontrar na lista, adiciona novo item
            this.items.push(new CartItem(item));
        }
    }

    removeItem(item: CartItem) {
        //a partir do índice atual, remover 1
        this.items.splice(this.items.indexOf(item), 1);
    }

    total(): number {
        //map substitui item pelo valor do item, ou seja, troca array de CartItem para array de números
        return this.items
            .map(item => item.value()) 
            .reduce((prev, value) => prev + value, 0); //soma valor anterior e valor atual, começando em 0
    }
}