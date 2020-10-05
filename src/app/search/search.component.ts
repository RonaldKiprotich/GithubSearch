import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  profile: any;
  repos: any;
  username: string;

  constructor(private githubService: GithubService) {
    
 
  }
  getUserProfile(user) {

    this.githubService.getProfileInformation(user).subscribe(profile => {
      
      this.profile = profile;
    });

    this.githubService.getProfileRepos(user).subscribe(repos => {
      //console.log(repos)
      this.repos = repos;
    });
  }

  ngOnInit() {
    this.getUserProfile('RonaldKiprotich');
    

  }
}