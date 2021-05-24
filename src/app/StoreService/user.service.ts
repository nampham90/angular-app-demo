import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private checkuser =false;
  constructor() {
    let user=this.getUser();
    if(user){
      this.checkuser=true
    }
  }
  public addUser(username:string,password:string): void{
     let users=this.getUser();
     if(this.checkuser){
        let User={
            username: username,
            password: password
        }
        this.setLocalStorageTodos(User);
     }
     
  }

  public getUser(){
    let localStorageItem=JSON.parse(localStorage.getItem('user')!);
    return localStorageItem==null ? [] : localStorageItem;
  }
  
  public remove(){
       localStorage.removeItem('user');
  }

  private setLocalStorageTodos(User:any): void{
     localStorage.setItem('user',JSON.stringify(User));
     
  }
}
