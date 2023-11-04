{
// generic - interface
interface Developer<T>{
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number;
    }
    smartWatch: T
}
const poorDeveloper: Developer<{brand:string, model: string, display: string}> = {
    name: 'tufael',
    computer: {
        brand: 'asus',
        model: '3e3r3',
        releaseYear: 2020,
    },
    smartWatch: {
        brand: 'Emilab',
        model: 'krerwer',
        display: 'amulet',
    }
}
const richDeveloper: Developer<{brand:string, model: string, heartTrack: boolean, sleepTrack: boolean}> = {
    name: 'rich dev',
    computer: {
        brand: 'hp',
        model: '3efg2r3',
        releaseYear: 2022,
    },
    smartWatch: {
        brand: 'apple',
        model: '45f4',
        heartTrack: true,
        sleepTrack: true,
    }
}

}