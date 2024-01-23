export const CategoriesList = ["All","Music","Mixes","Bollywood Music","Dramedy","Trailers","Cricket","NEET","Live","News","New To You","Romatic Comedies","Lectures","Computer Programming","Electronic Music"];

export const YOUTUBE_API_KEY   = 'AIzaSyB2mnPUJjy9Lhcs8yZIh2edv8jIOVvtjEU';

export const YOUTUBE_POPULAR_VIDEO_API = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&regionCode=IN&key='+YOUTUBE_API_KEY

export const YOUTUBE_AUTO_COMPLETE_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SUGGESTIONS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="
