interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    songName: string;
    details: Details

}

interface Details {
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 70,
    songDuration: 2.23,
    songName: "Alive",
    details: {
        author: "Pearl Jam",
        year: 1991
    }
}

const { songName:song , audioVolume:volume, songDuration:duration } = audioPlayer;
const { author, year } = audioPlayer.details;

console.log('Song: ', song);
console.log('Volume: ', volume);
console.log('Duration: ', duration);
console.log('Author: ', author);
console.log('Year of release: ', year);

const dbz: string[] = ['Goku', 'Vegeta', 'Gohan']









export {
}