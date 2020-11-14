import Component from '@glimmer/component';
import ENV from 'couch-potato-web/config/environment';

const TMDB_API = 'https://api.themoviedb.org/3/';
let configData=null;
let letBaseImgUrl=null;

export default class DiscoverTileComponent extends Component {
    get src(){
        let url = '${TMDB_API}/configuration?api_key=${this.token}';
        fetch(url)
        .then((result)=>{
            return result.json();
        })
        

        // return 'https://api.themoviedb.org/3/movie/550?api_key=4517228c3cc695f9dfa1dcb4c4979152';
    }
    get token(){
        return encodeURIComponent(ENV.TMDB_ACCESS_TOKEN);

    }
}




// export default class MapComponent extends Component {
//     get src() {
//         let { lng, lat, width, height, zoom } = this.args;
    
//         let coordinates = `${lng},${lat},${zoom}`;
//         let dimensions  = `${width}x${height}`;
//         let accessToken = `access_token=${this.token}`;
    
//         return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
//       }
      
//     get token() {
//         return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
//       }
// }
