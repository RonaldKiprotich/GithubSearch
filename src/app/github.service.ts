import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class GithubService {
  

  constructor(private http:HttpClient){
    
  }
  getProfileInformation(user){
    return this.http.get('https://api.github.com/users/'+user+ '?access_token='+environment.apiKey)
  }
  getProfileRepos(user){
    return this.http.get('https://api.github.com/users/'+user+'/repos'+'?access_token='+environment.apiKey)
  }
  
}