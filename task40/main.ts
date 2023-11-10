function make_album(artist: string, title: string, tracks?: number) : {artist: string, title: string, tracks?: number}{
    const album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title,
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

const album1 = make_album("Artist1", "Album1", 1);
const album2 = make_album("Artist2", "Album2");
const album3 = make_album("Artist3", "Album3", 3);

console.log("album1" , album1);
console.log("album2" , album2);
console.log("album3" , album3);
