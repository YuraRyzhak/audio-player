import { Injectable } from '@angular/core';
import { FileType } from '../models/file-type.model';

@Injectable()
export class GetPlaylistService {
  files: FileType = [
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3',
      author: 'by Alejandro Magaña (A. M.)',
      title: 'Tech House vibes',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-hazy-after-hours-132.mp3',
      author: 'by Alejandro Magaña (A. M.)',
      title: 'Hazy After Hours',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-hip-hop-02-738.mp3',
      author: 'by Lily J',
      title: 'Hip Hop 02',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-a-very-happy-christmas-897.mp3',
      author: 'by Michael Ramir C.',
      title: 'A Very Happy Christmas',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-sun-and-his-daughter-580.mp3',
      author: 'by Eugenio Mininni',
      title: 'Sun and His Daughter',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-raising-me-higher-34.mp3',
      author: 'by Ahjay Stelino',
      title: 'Raising Me Higher',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-driving-ambition-32.mp3',
      author: 'Driving Ambition',
      title: 'by Ahjay Stelino',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-life-is-a-dream-837.mp3',
      author: 'by Michael Ramir C.',
      title: 'Life is a Dream',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3',
      author: 'by Arulo',
      title: 'Serene View',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-dance-with-me-3.mp3',
      author: 'by Ahjay Stelino',
      title: 'Dance with Me',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-deep-urban-623.mp3',
      author: 'Deep Urban',
      title: 'by Eugenio Mininni',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3',
      author: 'by Ahjay Stelino',
      title: 'Dreaming Big',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-hollidays-690.mp3',
      author: 'by Grigoriy Nuzhny',
      title: 'Hollidays',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-cbpd-400.mp3',
      author: 'by Arulo',
      title: 'C.B.P.D',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-complicated-281.mp3',
      author: 'by Arulo',
      title: 'Complicated',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-feeling-happy-5.mp3',
      author: 'by Ahjay Stelino',
      title: 'Feeling Happy',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-cat-walk-371.mp3',
      author: 'by Arulo',
      title: 'Cat Walk',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-silent-descent-614.mp3',
      author: 'by Eugenio Mininni',
      title: 'Silent Descent',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-sleepy-cat-135.mp3',
      author: 'by Alejandro Magaña (A. M.)',
      title: 'Sleepy Cat',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-beautiful-dream-493.mp3',
      author: 'by Diego Nava',
      title: 'Beautiful Dream',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-playground-fun-12.mp3',
      author: 'by Ahjay Stelino',
      title: 'Playground Fun',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-valley-sunset-127.mp3',
      author: 'by Alejandro Magaña (A. M.)',
      title: 'Valley Sunset',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-games-worldbeat-466.mp3',
      author: 'by Bernardo R.',
      title: 'Games Worldbeat',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-island-beat-250.mp3',
      author: 'by Arulo',
      title: 'Island Beat',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-bridge-n-98-621.mp3',
      author: 'by Eugenio Mininni',
      title: 'BRIDGE N° 98',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-spirit-in-the-woods-139.mp3',
      author: 'by Alejandro Magaña (A. M.)',
      title: 'Spirit in the Woods',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-getting-ready-46.mp3',
      author: 'by Ahjay Stelino',
      title: 'Getting Ready',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-piano-reflections-22.mp3',
      author: 'by Ahjay Stelino',
      title: 'Piano Reflections',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-summer-fun-13.mp3',
      author: 'by Ahjay Stelino',
      title: 'Summer Fun',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-fun-times-7.mp3',
      author: 'by Ahjay Stelino',
      title: 'Fun Times',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-pop-05-695.mp3',
      author: 'by Grigoriy Nuzhny',
      title: 'Pop 05',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-epical-drums-01-676.mp3',
      author: 'by Grigoriy Nuzhny',
      title: 'Epical Drums 01',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-relaxing-in-nature-522.mp3',
      author: 'by Diego Nava',
      title: 'Relaxing in Nature',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-deep-meditation-109.mp3',
      author: 'by Alejandro Magaña (A. M.)',
      title: 'Deep Meditation',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-just-kidding-11.mp3',
      author: 'by Ahjay Stelino',
      title: 'Just Kidding',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-comical-2.mp3',
      author: 'by Ahjay Stelino',
      title: 'Comical',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-sports-highlights-51.mp3',
      author: 'by Ahjay Stelino',
      title: 'Sports Highlights',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-forest-treasure-138.mp3',
      author: 'by Alejandro Magaña (A. M.)',
      title: 'Forest Treasure',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-delightful-4.mp3',
      author: 'by Ahjay Stelino',
      title: 'Delightful',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-just-chill-16.mp3',
      author: 'by Ahjay Stelino',
      title: 'Just Chill',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-uplift-me-35.mp3',
      author: 'by Ahjay Stelino',
      title: 'Uplift Me',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-slow-trail-71.mp3',
      author: 'by Ahjay Stelino',
      title: 'Slow Trail',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-motivating-mornings-33.mp3',
      author: 'by Ahjay Stelino',
      title: 'Motivating Mornings',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-piano-horror-671.mp3',
      author: 'by Francisco Alvear',
      title: 'Piano Horror',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-kodama-night-town-114.mp3',
      author: 'by Alejandro Magaña (A. M.)',
      title: 'Kodama Night Town',
    },
    {
      url: 'https://assets.mixkit.co/music/preview/mixkit-tinsel-and-mistletoe-93.mp3',
      author: 'by Ahjay Stelino',
      title: 'Tinsel and Mistletoe',
    },
  ];
}
