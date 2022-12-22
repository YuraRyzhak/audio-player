import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { GetPlaylistService } from 'src/app/services/get-playlist.service';

@NgModule({
  declarations: [PlayerComponent],
  imports: [CommonModule, RouterModule, PlayerRoutingModule],
  exports: [PlayerComponent],
  providers: [GetPlaylistService],
})
export class PlayerModule {}
