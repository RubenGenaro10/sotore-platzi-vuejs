import axios  from "axios";

const http = axios.create({
    baseURL: "https://api.escuelajs.co/api/v1/"
});

export class StoreApiService{

    getProducts() {
        return http.get("/products");
    }

    getProductById(id){
        return http.get(`/products/${id}`);
    }

    getProductByCategoryId(categoryId){
        return http.get(`/products/category/${categoryId}`);
    }
    getCategories(){
        return http.get("/categories");
    }
}