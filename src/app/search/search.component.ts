import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
profile:any;
repos: any;
username: string;

constructor(private githubService:GithubService) {
  /* this.githubService.updateUserProfile(this.username); */
   /*  this.githubService.getProfileInformation().subscribe(profile => {
      this.profile = profile; */
    /* }); */

    this.githubService.getProfileInformation().subscribe((response : any) => {
      this.profile = response;
      console.log(response)
    });
  
    this.githubService.getProfileRepos().subscribe(repos =>{
      this.repos = repos;
    });

}
  getUserProfile(){
    this.githubService.updateUserProfile(this.username);
    this.githubService.getProfileInformation().subscribe(profile => {
      this.profile = profile;
    });
  
    this.githubService.getProfileRepos().subscribe(repos =>{
      this.repos = repos;
    });
  }

ngOnInit() {
  this.githubService.updateUserProfile('Ronald.Kiprotich');
  this.githubService.getProfileInformation().subscribe(profile => this.profile = profile);
  // this.githubService.getProfileRepos().subscribe(repos =>  this.repos = repos);

}
}