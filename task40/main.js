function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("Artist1", "Album1", 1);
var album2 = make_album("Artist2", "Album2");
var album3 = make_album("Artist3", "Album3", 3);
console.log("album1", album1);
console.log("album2", album2);
console.log("album3", album3);
