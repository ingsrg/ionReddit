import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from '../../app/services/reddit.service';

@Component({
  selector: 'reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {
  items: any;
  constructor(public navCtrl: NavController, private redditService: RedditService) {
}

ngOnInit(){
  this.getPost('sports', 10);
}

getPost(category, limit){
  this.redditService.getPost(category, limit).subscribe(response => {
    this.items = response.data.children;
  });
   
}

}
