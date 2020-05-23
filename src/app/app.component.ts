import { Component, OnInit } from '@angular/core';
import { Posts } from './posts';
import { ConfigService } from './config.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [ ConfigService ],
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  public vm: any = {};
  private srcPoolData: Posts[] = [];

  public constructor(private configService: ConfigService) {}

  public ngOnInit() {
    this.handleLoadMask(false, 'Add Post');
    this.getPosts();
  }

  private onAddPost() {
    this.handleLoadMask(true, 'Adding Post');
    let posts: Posts = new Posts(4, this.vm.srcData);
    this.configService.addPosts(posts)
                      .subscribe((post: any) => {
                        this.handleLoadMask(false, 'Add Post');
                        this.srcPoolData.push(post);
                        this.vm.srcData = '';
                      });
  }

  private getPosts() {
    this.configService.getPosts()
      .subscribe((data: any) => { this.srcPoolData = data; });
  }

  private handleLoadMask(isLoading: boolean, lblMsg: String) {
    this.vm.isLoading = isLoading;
    this.vm.buttonLbl = lblMsg;
  }

  private addPostHandler(post: Posts) {
    this.handleLoadMask(false, 'Add Post');
    this.srcPoolData.push(post);
    this.vm.srcData = '';
  }
}
