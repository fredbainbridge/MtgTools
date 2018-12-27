export interface Set {
    id: number;
    name: string;
}

export interface Card {
    id: number;
    multiVerseID: string;
    name: string;
    cost: string;
    type: string;
    power: string;
    toughness: string;
    text: string;
    set: Set;
    rarity: string;
    ctype: string;
    convertedManaCost: number;
    imageURL: string;
    colorIdentity: string;
}

export interface Booster {
    id: number;
    set: Set;
    cards: Card[];
}