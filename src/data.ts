import cuid from "cuid";

export interface Base {
    description: string;
    img: string;
}
export interface Item extends Base {
    id: string;
    price: number;
}

export interface Category extends Base {
    name: string;
    categories?: Category[];
    items?: Item[];
}

const GetData = (names: string[]): Category => {
    for (let i = 0; i < names.length; i++) {
    }
}

const FindName = (names: string[], categories: Category[]): Category[] => {
    for (let i = 0; i < categories.length; i++) {
        if (categories[i].name === names[0]) {
            return FindName(names, categories[i].categories);
        }
    }
}

const data: Category = {
    {
    id: cuid(),
        img: "",
            name: "",
                description: "",
                    items: [
                        {
                            id: cuid(),
                            img: "",
                            name: "",
                            description: "",
                        },
                        {
                            id: cuid(),
                            img: "",
                            name: "",
                            description: "",
                        },
                        {
                            id: cuid(),
                            img: "",
                            name: "",
                            description: "",
                        },
                        {
                            id: cuid(),
                            img: "",
                            name: "",
                            description: "",
                        },
                        {
                            id: cuid(),
                            img: "",
                            name: "",
                            description: "",
                        },
                        {
                            id: cuid(),
                            img: "",
                            name: "",
                            description: "",
                        },
                        {
                            id: cuid(),
                            img: "",
                            name: "",
                            description: "",
                        },
                        {
                            id: cuid(),
                            img: "",
                            name: "",
                            description: "",
                        },
                        {
                            id: cuid(),
                            img: "",
                            name: "",
                            description: "",
                        },
                        {
                            id: cuid(),
                            img: "",
                            name: "",
                            description: "",
                        },
                        {
                            id: cuid(),
                            img: "",
                            name: "",
                            description: "",
                        },
                        {
                            id: cuid(),
                            img: "",
                            name: "",
                            description: "",
                        },
                        {
                            id: cuid(),
                            img: "",
                            name: "",
                            description: "",
                        },
                        {
                            id: cuid(),
                            img: "",
                            name: "",
                            description: "",
                        },
                    ]
},

}