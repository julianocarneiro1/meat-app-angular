import { Injectable } from "@angular/core";
import { NotificationService } from "app/shared/messages/notification.service";
import { MenuItem } from "../menu-item/menu-item.model";
import { CartItem } from "./cart-item.model";

@Injectable()
export class ShoppingCartService {
    items: CartItem[] = [];

    constructor(private notificationService: NotificationService) {
    }

    clear() {
        this.items = []; //esvazia lista do carrinho
    }

    addItem(item: MenuItem) {
        let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
        if(foundItem) {
            this.increaseQty(foundItem);
        } else {
            this.items.push(new CartItem(item));
        }
        this.notificationService.notify(`Você adicionou o item ${item.name}`);
    }

    increaseQty(item: CartItem) {
        item.quantity = item.quantity + 1;    
    }

    decreaseQty(item: CartItem) {
        item.quantity = item.quantity - 1;   
        if (item.quantity === 0) {
            this.removeItem(item);
        } 
    }

    removeItem(item: CartItem) {
        //a partir do índice atual, remover 1
        this.items.splice(this.items.indexOf(item), 1);
        this.notificationService.notify(`Você removeu o item ${item.menuItem.name}`);

    }

    total(): number {
        //map substitui item pelo valor do item, ou seja, troca array de CartItem para array de números
        return this.items
            .map(item => item.value()) 
            .reduce((prev, value) => prev + value, 0); //soma valor anterior e valor atual, começando em 0
    }
}