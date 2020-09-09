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
  categories: Category[];
  items: Item[];
}

export const GetData = (path: string): Category => {
  let names = path.split("/");
  names=names.splice(2, names.length - 2)
  var result = FindCategory(names, data);
  if (result) {
    return result;
  } else return data;
};

const FindCategory = (
  names: string[],
  category: Category
): Category | false => {
  for (let i = 0; i < category.categories.length; i++) {
    if (category.categories[i].name === names[0]) {
      if (names.length <= 1) {
        return category.categories[i];
      }
      return FindCategory(names.splice(1, names.length - 1), category);
    }
  }
  return false;
};

export const data: Category = {
  img: "",
  name: "catalog",
  description: "Офис и сеть",
  items: [
    {
      id: cuid(),
      img:
        "https://c.dns-shop.ru/thumb/st4/fit/320/250/576b88e63f4428e7f30bf22727c991ba/a06d38ccda219108d2aadc617c7a568e98b88fdff71986573eb5aad0f810b2d3.jpg",
      description: "Принтер лазерный Pantum P2500W",
      price: 5999,
    },
    {
      id: cuid(),
      img:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/39357bc41ddb02dd2ed332c80f63f3da/0508b731a0cb11e6b2a70ddb39ea371dea63ed87776da664bbd8e88c15537e83.jpg",
      price: 6021,
      description: "Принтер лазерный HP LaserJet Pro M15a",
    },
    {
      id: cuid(),
      img:
        "https://c.dns-shop.ru/thumb/st4/fit/320/250/2862d7ce825f92bb468ffa3a8e84e3aa/b4981498faf02ab1bd5eed5436352bf6bb3a213c6d135d882aba7c98f6f33518.jpg",
      price: 2225,
      description: "Принтер лазерный Pantum P2500NW",
    },
    {
      id: cuid(),
      img:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/d153bb584327f10e1d1705e507cb7c09/346e99adff8c09660fa0d044d89e59192769c04ec8f0ac46fdd3e85d9ee21ba1.jpg",
      price: 6100,
      description: "Роутер ADSL2+ TP-LINK TD-W9960",
    },
    {
      id: cuid(),
      img:
        "https://c.dns-shop.ru/thumb/st4/fit/320/250/f888549c2b99bf2de260f7835f099537/9bcc6e6f735131f3da9e5f0d8ce342bf21025e8957005c63cb9fe357ed7294cd.jpg",
      price: 1258,
      description: "Сканер Canon CanoScan LiDE 300",
    },
    {
      id: cuid(),
      img:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/3c764a29670b171031b2f040141b7376/2b581f2f319e602997fc01bae8c9463d712ac2c85374457a7aee1ae93b0e3cf1.jpg",
      price: 3256,
      description: "Сканер Espada FilmScanner EC717",
    },
    {
      id: cuid(),
      img:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/06660cea48222c85f92b6f90cc1e7723/e20b2c0d623483f863c2779d42ace1e580af2038c8a5ccf86adba51c3a7e39a6.jpg",
      price: 7425,
      description: "Сканер Avision MiWand 2",
    },
    {
      id: cuid(),
      img:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/3e2476cdc5f11a4c1b63ff7b393f0f7a/aef1382e71ed609beffa4a72f398b7dbefd1a0a5ed7decccc556dd7285560029.jpg",
      price: 9258,
      description: "Сканер Espada QPix MDFC-1400",
    },
    {
      id: cuid(),
      img:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/ec3e4a8124198667ef5029764fca3b94/3819937d75fe36749bec73b1e10190ad688c1ccf794165b9a67a6f94a77bbcbf.jpg",
      price: 200,
      description: "Бумага Lomond Pastel Peach",
    },
    {
      id: cuid(),
      img:
        "https://c.dns-shop.ru/thumb/st4/fit/320/250/dd5be5fd48a6033caff9fe41a551093c/399a842048583d2223594343bc0b4bac85e0a69271b458dce8a7e8d30a354baa.jpg",
      price: 250,
      description: "Термопленка Cactus CS-TTRP136",
    },
    {
      id: cuid(),
      img:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/6109896438a827cb07faa8dfa37602dc/28c2f31a68218be5f95ac8295a3f572495e8a2367e3bb70595ccfa19daeff4d1.jpg",
      price: 110,
      description: "Пружина Fellowes FS-53300 белый",
    },
    {
      id: cuid(),
      img:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/8fbe838a1a8842c383c6ef8c9a033a14/efc0f6e849b7c5ee921c63da468529b2568b36bf68ef37be76ec056d6c7d2dfa.jpg",
      price: 1099,
      description: "3G модем Telecom DSU7",
    },
    {
      id: cuid(),
      img:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/bc1e1aac03b993a2241400b65c84a353/22298f2efdc6f79bcdecc606e9e38b83a0671110b5a0b3bc268531240c5eac2f.jpg",
      price: 2799,
      description: "4G LTE модем DEXP M1",
    },
    {
      id: cuid(),
      img:
        "https://c.dns-shop.ru/thumb/st1/fit/320/250/8eb961b68720ea8caf83b101c4173191/326ebab201dfdf7fa1506c60f1828800b0c11df7eef6d2ed1f2c8a95fd5e28a9.jpg",
      price: 2850,
      description: "Wi-Fi роутер Mikrotik RB951Ui-2nD",
    },
  ],
  categories: [
    {
      description: "офисное оборудование",
      img:
        "https://c.dns-shop.ru/thumb/st1/fit_width/120/120/cfa35c88f6c49745b177247b167cf749/afbb811213d3d4c57d75c6d42155158e23cfa8ab63b320a681cdf6319c0714d2.jpg",
      name: "office",
      items: [
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st4/fit/320/250/18b8298053aa6676562a34def5e4441c/2b19351eb694840b43dba3edb4e71bc86d721c79cae60f0239a4d5d238165c1a.jpg",
          price: 7499,
          description: "Компактный фотопринтер Canon Zoemini Black черный",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st4/fit/320/250/f9899db14e8b500fb9cf2efcbab46dc3/b1acac3fe5fc9cfbba55848f8e72c1a70a504cb78de123f946d978c8d2a126f8.jpg",
          price: 7999,
          description:
            "Компактный фотопринтер Fujifilm Instax SHARE SP-2 серебристый",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st1/fit/320/250/6e59575df52cc09064d4b748dde9a5c8/8090b473d5a5508444f62125e47308c6bf71de9558275b04b55559abb3a00104.jpg",
          price: 9499,
          description: "Компактный фотопринтер Fujifilm Instax MINI LINK синий",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st4/fit/320/250/9a690420d35a6c2fa34326656b1fad75/cac48ac14593b1405e352e4860161fd4b0502010a89ca22adc3d256b070ba34c.jpg",
          price: 15300,
          description: "Матричный принтер Epson LX 350",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st4/fit/320/250/c95ac87c71cbaaedf326f4aac2acbf24/d1882b61916ee8da7add5f23d74de244e09dc8fa5b07f70fa43789359847a1fe.jpg",
          price: 28500,
          description: "Матричный принтер Epson LX 1350",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st4/fit/320/250/50dba8eb5e02aaba0b6e7eb5c899ef8c/8f2706344e2e0827998dd69e8bd730afc2082748fb7c1cbdd1cef354afed4cda.jpg",
          price: 249990,
          description: "Матричный принтер Epson DFX 9000",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st4/fit/320/250/6e1a91898257f2a988521b605c9ca2aa/feaf615ba7aab39c1a1d0639b8db061ef2508e8a28fa7e5ed60cf4ef76f79ded.jpg",
          price: 41999,
          description: "Широкоформатный принтер HP DesignJet T130",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st4/fit/320/250/979ce62bc64e9e61fba9ebd4daa03d05/1d208e754b4d7d0436f54a7e612d9ecabf32580ec9e2231f0b6fffda58d49fcd.jpg",
          price: 62999,
          description: "Широкоформатный принтер Epson SureColor SC-T3100",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st1/fit/320/250/649fd277aa45ac1c48a1be47e366d5b1/f06cdd7dca96c57821a4614c2a18f22a58b399810befd72febc64671916b04ce.jpg",
          price: 99999,
          description: "Широкоформатный принтер Canon imagePROGRAF PRO-1000",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st1/fit/320/250/823e7479ef1a3b00afb817268c48d590/62cfa69b42c212bf1f4d23da372b2de04fcd3de706d99f9c2fdaa18f749c4817.jpg",
          price: 159999,
          description: "Широкоформатный принтер HP DesignJet T730",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st4/fit/320/250/a017a2bb46949add47292e133aa03a64/784a2eaada4ce7a2eff73d74bb89225619e18e46bea49e90914ccd28bff498f6.jpg",
          price: 171999,
          description: "Широкоформатный принтер Epson SureColor SC-T3100x",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st4/fit/320/250/1fdff0380b5236aefd25ddacf33a5890/a73a6bb75c87cc4446e97229c2e5428d051bd2033c81324d3dc4a0fcc149cf52.jpg",
          price: 69,
          description: "Чип Xerox Phaser 7100N/DN (106R02611)",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st1/fit/320/250/841119f0c17cc9dc0106625ef49fb920/c7ba1e63d8ba3e0cc53b2c4349269080c0567ac7dab451cbb8f8cc26ddb40349.jpg",
          price: 89,
          description: "Ролик подхвата Cet CET0419",
        },
      ],
      categories: [],
    },
    {
      description: "wifi роутеры и сетевое оборудование для малых сетей",
      img:
        "https://c.dns-shop.ru/thumb/st1/fit_width/120/120/22749734ca88d12f0128caec8d985efc/4b36c9af4df3aca88c711ab004c927e3959c8e497cff2bcea2ecd374d4aa27e7.jpg",
      name: "net-easy",
      items: [
        {
          id: cuid(),
          img: "",
          price: 1000,
          description: "",
        },
        {
          id: cuid(),
          img: "",
          price: 1000,
          description: "",
        },
        {
          id: cuid(),
          img: "",
          price: 1000,
          description: "",
        },
      ],
      categories: [],
    },
    {
      description: "Профессиональное сетевое оборудование",
      img:
        "https://c.dns-shop.ru/thumb/st4/fit_width/120/120/01f63dbc55d1be9d1aaa62299b927362/e7594d1c9601dd029f7872b11c9b4a870faa2e851bf6f1fcf4f79050aacb60e7.jpg",
      name: "net-professional",
      items: [
        {
          id: cuid(),
          img: "",
          price: 1000,
          description: "",
        },
        {
          id: cuid(),
          img: "",
          price: 1000,
          description: "",
        },
        {
          id: cuid(),
          img: "",
          price: 1000,
          description: "",
        },
      ],
      categories: [],
    },
  ],
};
