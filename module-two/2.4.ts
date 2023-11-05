{
// generic - interface
interface Developer<T, X = null>{
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number;
    }
    smartWatch: T;
    bike?: X
}

type EmilabWatch = {
    brand:string, 
    model: string, 
    display: string
}
const poorDeveloper: Developer<EmilabWatch> = {
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
    },
}

interface AppleWatch{
    brand:string,
     model: string, 
     heartTrack: boolean, 
     sleepTrack: boolean
}
interface YamahaBike{
    model:string;
    engine: string;
}
const richDeveloper: Developer<AppleWatch, YamahaBike> = {
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
    },
    bike: {
        model: 'Yamaha',
        engine: '110cc',
    }
}

}