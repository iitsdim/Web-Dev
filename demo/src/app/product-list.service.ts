import {Injectable} from '@angular/core';
import {Product} from "./product.model";
import {HttpClient} from "@angular/common/http";
import {Category} from "./category.model";

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  products: Product[] = [
    {
      "category": 1,
      "description": "Телевизор Samsung UE43T5300AUXCE 109 см черный",
      "id": 1,
      "image": "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/h18/49319748468766/samsung-ue43t5300au-chernyi-100182013-1.jpg",
      "kaspiLink": "https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000#!/item",
      "likes": 99,
      "name": "Samsung TV",
      "rating": 5,
    },
    {
      "category": 1,
      "description": "Телевизор LG 43LM5772PLA 109 см черный",
      "id": 2,
      "image": "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he5/he4/49320430370846/lg-43lm5772pla-108-sm-cernyj-101293496-1-Container.jpg",
      "kaspiLink": "https://kaspi.kz/shop/p/lg-43lm5772pla-109-sm-chernyi-101293496/?c=750000000#!/item",
      "likes": 23,
      "name": "LG TV",
      "rating": 5,
    },
    {
      "category": 1,
      "description": "Телевизор Xiaomi Mi TV P1 50 L50M6-6ARG 127 см черный",
      "id": 3,
      "image": "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h93/he8/51568662249502/xiaomi-l50m6-6arg-cernyj-105324626-1.jpg",
      "kaspiLink": "https://kaspi.kz/shop/p/xiaomi-mi-tv-p1-50-l50m6-6arg-127-sm-chernyi-105324626/?c=750000000#!/item",
      "likes": 0,
      "name": "TV Xiaomi",
      "rating": 5,
    },
    {
      "category": 1,
      "description": "Телевизор Yasin 32G7 81 см черный",
      "id": 4,
      "image": "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h88/hc5/61768877965342/yasin-g7-cernyj-103489358-1.jpg",
      "kaspiLink": "https://kaspi.kz/shop/p/yasin-32g7-81-sm-chernyi-103489358/?c=750000000#!/item",
      "likes": 0,
      "name": "TV Yasin",
      "rating": 5,
    },
    {
      "category": 2,
      "description": "Ноутбук Apple MacBook Air 13 MGN63 серый",
      "id": 5,
      "image": "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h65/h0f/33125684084766/apple-macbook-air-2020-13-3-mgn63-seryj-100797845-1-Container.jpg",
      "kaspiLink": "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000",
      "likes": 11,
      "name": "Macbook Air 13",
      "rating": 5,
    },
    {
      "category": 2,
      "description": "Ноутбук Lenovo IdeaPad 1 14IGL05 81VU00H3RU серый",
      "id": 6,
      "image": "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/he2/67940461740062/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874-1.jpg",
      "kaspiLink": "https://kaspi.kz/shop/p/lenovo-ideapad-1-14igl05-81vu00h3ru-seryi-108464874/?c=750000000#!/item",
      "likes": 120,
      "name": "Laptop Lenovo IdeaPad",
      "rating": 5,
    },
    {
      "category": 2,
      "description": "Ноутбук HP 15s-eq1387ur 4Z3A4EA серебристый",
      "id": 7,
      "image": "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3f/h8f/67253149204510/hp-15s-eq1387ur-4z3a4ea-serebristyi-108203227-1.jpg",
      "kaspiLink": "https://kaspi.kz/shop/p/hp-15s-eq1387ur-4z3a4ea-serebristyi-108203227/?c=750000000#!/item",
      "likes": 333,
      "name": "Laptop HP 15s",
      "rating": 5,
    },
    {
      "category": 2,
      "description": "Ноутбук ASUS X515EA-BQ3144W I385SUW1 90NB0TY1-M02ZL0 темно-серый",
      "id": 8,
      "image": "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/hbd/65953424277534/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928-1.jpg",
      "kaspiLink": "https://kaspi.kz/shop/p/asus-x515ea-bq3144w-i385suw1-90nb0ty1-m02zl0-temno-seryi-107650928/?c=750000000#!/item",
      "likes": 134,
      "name": "Laptop ASUS X515",
      "rating": 5,
    },
    {
      "category": 2,
      "description": "Ноутбук Acer Nitro 5 AN515-57 NH.QEKER.004 черный",
      "id": 9,
      "image": "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2e/hc4/67236399185950/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028-1.jpg",
      "kaspiLink": "https://kaspi.kz/shop/p/acer-nitro-5-an515-57-nh-qeker-004-chernyi-108194028/?c=750000000#!/item",
      "likes": 33,
      "name": "Laptop Asus Nitro",
      "rating": 5,
    },
    {
      "category": 2,
      "description": "Ноутбук ASUS TUF Dash F15 FX517ZM-HN093 90NR09Q3-M007B0 черный",
      "id": 10,
      "image": "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd8/hd8/62167755620382/asus-tuf-dashf15-fx517zm-hn093-90nr09q3-m007b0-chernyi-106299715-1.jpg",
      "kaspiLink": "https://kaspi.kz/shop/p/asus-tuf-dash-f15-fx517zm-hn093-90nr09q3-m007b0-chernyi-106299715/?c=750000000#!/item",
      "likes": 0,
      "name": "Laptop Asus TUF",
      "rating": 4.5,
    },
    // {
    //   "name": "",
    //   "description": "",
    //   "rating": 5,
    //   "id": 2,
    //   "kaspiLink": "",
    //   "image": "",
    //   "likes": 0,
    // },
  ];

  categories: Category[] = [
    {
      "title": "TV",
      "id": 1
    },
    {
      "title": "Laptop",
      "id": 2
    }
  ];

  constructor(
    private http: HttpClient
  ) {
  }

  addToCart(product: Product) {
    this.products.push(product);
  }

  deleteProduct(productId: number) {
    const index = this.products.findIndex((product: Product) => product.id == productId, 0);
    if(index > -1) {
      this.products.splice(index, 1);
    }
  }

  getProductList() {
    return this.products;
  }

  getProductCategories() {
    return this.categories;
  }

  getProductsByCategory(categoryId: number | undefined) {
    if(!categoryId) {
      return this.products;
    }
    return this.products.filter((product: Product) => product.category === categoryId)
  }

  getProductId(id: number) {
    return this.products.find(product => product.id === id)
  }
}
