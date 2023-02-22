import {Injectable} from '@angular/core';
import {Product} from "./product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  products: Product[] = [
    {
      "name": "Samsung TV",
      "description": "Телевизор Samsung UE43T5300AUXCE 109 см черный",
      "rating": 5,
      "id": 1,
      "kaspiLink": "https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000#!/item",
    },
    {
      "name": "LG TV",
      "description": "Телевизор LG 43LM5772PLA 109 см черный",
      "rating": 5,
      "id": 2,
      "kaspiLink": "https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000#!/item",
    },
    {
      "name": "TV Xiaomi",
      "description": "Телевизор Xiaomi Mi TV P1 50 L50M6-6ARG 127 см черный",
      "rating": 5,
      "id": 3,
      "kaspiLink": "https://kaspi.kz/shop/p/xiaomi-mi-tv-p1-50-l50m6-6arg-127-sm-chernyi-105324626/?c=750000000#!/item",
    },
    {
      "name": "TV Yasin",
      "description": "Телевизор Yasin 32G7 81 см черный",
      "rating": 5,
      "id": 4,
      "kaspiLink": "https://kaspi.kz/shop/p/yasin-32g7-81-sm-chernyi-103489358/?c=750000000#!/item",
    },
    {
      "name": "Macbook Air 13",
      "description": "Ноутбук Apple MacBook Air 13 MGN63 серый",
      "rating": 5,
      "id": 5,
      "kaspiLink": "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000",
    },
    {
      "name": "Laptop Lenovo IdeaPad",
      "description": "Ноутбук Lenovo IdeaPad 1 14IGL05 81VU00H3RU серый",
      "rating": 5,
      "id": 6,
      "kaspiLink": "https://kaspi.kz/shop/p/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874/?c=750000000#!/item",
    },
    {
      "name": "Laptop HP 15s",
      "description": "Ноутбук HP 15s-eq1387ur 4Z3A4EA серебристый",
      "rating": 5,
      "id": 7,
      "kaspiLink": "https://kaspi.kz/shop/p/hp-15s-eq1387ur-4z3a4ea-serebristyi-108203227/?c=750000000#!/item",
    },
    {
      "name": "Laptop ASUS X515",
      "description": "Ноутбук ASUS X515EA-BQ3144W I385SUW1 90NB0TY1-M02ZL0 темно-серый",
      "rating": 5,
      "id": 8,
      "kaspiLink": "https://kaspi.kz/shop/p/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928/?c=750000000#!/item",
    },
    {
      "name": "Laptop Asus Nitro",
      "description": "Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный",
      "rating": 5,
      "id": 9,
      "kaspiLink": "https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item",
    },
    {
      "name": "Laptop Asus TUF",
      "description": "Ноутбук ASUS TUF Dash F15 FX517ZM-HN093 90NR09Q3-M007B0 черный",
      "rating": 4.5,
      "id": 10,
      "kaspiLink": "https://kaspi.kz/shop/p/asus-tuf-dash-f15-fx517zm-hn093-90nr09q3-m007b0-chernyi-106299715/?c=750000000#!/item",
    },
    // {
    //   "name": "",
    //   "description": "",
    //   "rating": 5,
    //   "id": 2,
    //   "kaspiLink": "",
    // },
  ];

  constructor() {
  }

  addToCart(product: Product) {
    this.products.push(product);
  }

  getProductList() {
    return this.products;
  }

  getProductId(id: number) {
    return this.products.find(product => product.id === id)
  }
}
