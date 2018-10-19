import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class PizzaService {
  url = 'http://localhost:8080/pizza';
  constructor(public http: HttpClient) {
  }

  getAllPizzas(): Observable<any> {
    return this.http.get(this.url+'s');
  }

  get(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  remove(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  add(pizza: any){
    return this.http.post(this.url, pizza);
  }
}