import cuid from "cuid";

export interface Base {
  description: string;
  img: string;
}
export interface ItemInterface extends Base {
  id: string;
  price: number;
}

export const initializeItem: ItemInterface = {
  id: "",
  description: "",
  img: "",
  price: 0,
};

export interface Category extends Base {
  name: string;
  categories: Category[];
  items: ItemInterface[];
}
/**
 * Основная страница каталога.
 * @see https://github.com/alimbagit/online-store
 */
/**

/**
 * @param path Путь к подкаталогу
 * @param numberOfItems Количество выводимых элементов на одной странице
 * @param numberPage Номер страницы
 * @returns Возвращает категорию с заданным списком эелементов
 */
export const GetCategory = (
  path: string,
  numberOfItems: number,
  numberPage: number
): Category => {
  let names = path.split("/");
  names = names.splice(2, names.length - 2);
  let tmpCategory = FindCategory(names, data);
  if (!tmpCategory) {
    tmpCategory = data;
  }
  //Сортировка по алфавиту
  tmpCategory.items.sort((item1, item2) =>
    item1.description > item2.description ? 1 : -1
  );
  let returnCategory = { ...tmpCategory };
  returnCategory.items = tmpCategory.items.slice(
    (numberPage - 1) * numberOfItems,
    numberOfItems*numberPage
  );
  
  console.log(
    "tmpCategory: ",
    tmpCategory,
    "returnCategory: ",
    returnCategory,
    "numberPage : ",
    numberPage
  );
  return returnCategory;
};

export const GetCountItemsInCategory = (path: string): number => {
  let names = path.split("/");
  names = names.splice(2, names.length - 2);
  var result = FindCategory(names, data);
  return result ? result.items.length : data.items.length;
};

//Задаем в функцию массив имен категорий где нулевой элемент это самая высшая категория в иерархии, а последний это искомая нами категория
const FindCategory = (
  names: string[],
  category: Category
): Category | false => {
  //Проходимся по подкатегориям
  let index = category.categories.findIndex(
    //Находим нужную нам подкатегорию по имени
    (element) => element.name === names[0]
  );
  if (index != -1) {
    if (names.length <= 1) {
      //Если наш масив имен категорий заканчивается и равна 1 это говорит о том, что мы нашли конечную подкатегорию
      const result = category.categories[index];
      return result;
    }
    return FindCategory(
      names.splice(1, names.length - 1),
      category.categories[index]
    ); //вырезая каждый раз первый элемент в массиве категорий мы приближаемся к искомой категории
  } else return false;
};

export const GetItemFromId = (id: string): ItemInterface | false => {
  let item = FindItemFromId(id, data);
  if (item) return item;
  return false;
};

const FindItemFromId = (
  id: string,
  category: Category
): ItemInterface | false => {
  let index = category.items.findIndex((element) => element.id === id);
  if (index != -1) {
    return category.items[index];
  } else {
    for (let i = 0; i < category.categories.length; i++) {
      let item = FindItemFromId(id, category.categories[i]);
      if (item) return item;
    }
    return false;
  }
};

export const data: Category = {
  img: "",
  name: "catalog",
  description: "Главная страница каталога",
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
      description: "Офисное оборудование",
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
      categories: [
        {
          img:
            "https://c.dns-shop.ru/thumb/st1/fit_width/120/120/cfa35c88f6c49745b177247b167cf749/afbb811213d3d4c57d75c6d42155158e23cfa8ab63b320a681cdf6319c0714d2.jpg",
          name: "print",
          description: "Техника для печати",
          categories: [
            {
              img:
                "https://c.dns-shop.ru/thumb/st1/fit_width/120/120/563c078d456382d0dae241c5542c4bf6/71958a482a950c678c7574d339cc55007054deba790981329e9f24e4b3726e72.jpg",
              name: "laser-printers",
              description: "Лазерные МФУ",
              categories: [],
              items: [
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st4/fit/320/250/6c209d951efa8395df454a53523beefc/661392cd34169a725ed4cf20e8b4d6d4766411645f9c84f86c67155903829ef9.jpg",
                  id: cuid(),
                  description: "МФУ лазерное Pantum M6500",
                  price: 7999,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st1/fit/320/250/9222c699ab4bca4af489e2b3f2cb5e27/c324a0c3f07999f76159f8a928b45a9cdf8eca5b01002848fe006bebd3b534da.jpg",
                  id: cuid(),
                  description: "МФУ лазерное Pantum M6500W",
                  price: 8999,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st1/fit/320/250/f1162d7e4ee67ade75f8d71e9c44b44b/6d58bc36d36699eab94db5965dc4ba4d84d6f000dc0f89503765344484c277ee.jpg",
                  id: cuid(),
                  description: "МФУ лазерное Pantum M6507",
                  price: 8990,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st4/fit/320/250/f741b85dfe59226d1d4c6c6d004ae95e/f72b8d8391741d39924ec3567e28ec9edf0ae76c75d6c3881490f766086d4b91.jpg",
                  id: cuid(),
                  description: "МФУ лазерное Pantum M6507W",
                  price: 9999,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st1/fit/320/250/9e06705f5a79e972d3c2530d449ab7cd/68352694d600680e5e6e0e6cff5c2f8dd6fa57f763dee4657915f5c8a8a8e3b2.jpg",
                  id: cuid(),
                  description: "МФУ лазерное Pantum M6550NW",
                  price: 10000,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st4/fit/320/250/c714c352efb36f9d3ea3cb0112548dfb/9d86d5e01b10db00012f16c58dd10f402fd6c8a33c785f6a01bd54b8d833b92d.jpg",
                  id: cuid(),
                  description: "МФУ лазерное Xerox WorkCentre 3025V_BI",
                  price: 10799,
                },
              ],
            },
            {
              img:
                "https://c.dns-shop.ru/thumb/st1/fit_width/120/120/e8a5870c10fa7fb21e1817b99430ec89/70ecce0d72dfd1b3e6b84f7bb2b8bad3f4b3910e47f76e09b2d97af4c753387c.jpg",
              name: "jet-printers",
              description: "Струйные МФУ",
              categories: [],
              items: [
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st4/fit/320/250/617507fe855b954b9d8e495b56532472/2a8200f30b2884e08332fbc90468d6ca56e0adaa1d84d41979b610d678cbfd5d.jpg",
                  id: cuid(),
                  description: "МФУ струйное HP Deskjet 2130 All-in-One",
                  price: 2199,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st1/fit/320/250/2771b6890e6bd9bc4f9cb86f8ee05954/91e5357bb89e0d3e3da7e6a412ba4991192347574b658c9864bee87c40809c54.jpg",
                  id: cuid(),
                  description: "МФУ струйное Canon Pixma MG2545S",
                  price: 2399,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st4/fit/320/250/e85343111417295bc1e9bc736e740ff9/63ff1617438694626bf56d6cb01365e638022655dfcbc0e8d363fff15ca8f1b5.jpg",
                  id: cuid(),
                  description: "МФУ струйное HP DeskJet 2620 All-in-One",
                  price: 3099,
                },
              ],
            },
          ],
          items: [
            {
              img:
                "https://c.dns-shop.ru/thumb/st4/fit/320/250/c6fdc4f3f1383f9d68844733afcde4b6/0186185b87050d63b0c571be7908afb40e305a14961d8ffdbb8bd9b737c9384b.jpg",
              id: cuid(),
              description: "Матричный принтер Epson LQ 630",
              price: 21199,
            },
            {
              img:
                "https://c.dns-shop.ru/thumb/st4/fit/320/250/979ce62bc64e9e61fba9ebd4daa03d05/1d208e754b4d7d0436f54a7e612d9ecabf32580ec9e2231f0b6fffda58d49fcd.jpg",
              id: cuid(),
              description: "Широкоформатный принтер Epson SureColor SC-T3100",
              price: 62999,
            },
            {
              img:
                "https://c.dns-shop.ru/thumb/st4/fit/320/250/216d778ba793ddfa279dae8005230c20/636af828bdc1c2d5b5b5b839d6588ef7ccdd725338b67aa51521216cb95c0a56.jpg",
              id: cuid(),
              description: "Широкоформатный принтер Epson SureColor SC-T5100N",
              price: 110000,
            },
          ],
        },
        {
          img:
            "https://c.dns-shop.ru/thumb/st1/fit_width/120/120/d7cdb729bfee3fe81b2cc9fd621c80b5/faa6cdedc016feaef6916d015b9b89900475930138bfe3021ae5ad756f991e26.jpg",
          name: "3dprint",
          description: "3D печать",
          categories: [
            {
              img:
                "https://c.dns-shop.ru/thumb/st1/fit_width/120/120/7148204664c9bd672d374de7cf153fe1/02e65e1053733558c9fc145707c931b0786c253d89ac53ddf16e4f992dacf8a5.jpg",
              name: "3d-printers",
              description: "3д принтеры",
              categories: [],
              items: [
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st1/fit/320/250/16d190c5f0d551b15aa363c1086b4fca/287194b67dff4d4d8c2a5e4297a94f18c36999d982738ae589d3621809dc7a3e.jpg",
                  id: cuid(),
                  description: "3D принтер Wanhao Duplicator i3 mini",
                  price: 15499,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st1/fit/320/250/ddc0d02634fad6ac9dbae8c458f772cf/1bcc325f19e22e65068efbfbe8eb67a8088780dc87f6ea864bf6ab5ec17db1d3.jpg",
                  id: cuid(),
                  description: "3D принтер Wanhao Duplicator D10",
                  price: 18499,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st4/fit/320/250/c06866e39a370a29cf35308f924cca94/bf4409684176a853353ff2620e0f1cc717e4b964bc297e7a28ec94cecb683140.jpg",
                  id: cuid(),
                  description: "3D принтер Wanhao Duplicator i3 v2.1",
                  price: 23499,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st4/fit/320/250/4bd3f79901dc1ba9422ee3d10bc7597b/c35a6deb12bb5ef90eaad54f24f6d53e7e04ad13b0526c1193d04f7091b6a869.jpg",
                  id: cuid(),
                  description: "3D принтер Wanhao Duplicator i3 v2.1",
                  price: 23499,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st4/fit/320/250/6766c8643d762455a314c0f18690e1fc/88d5e6abc68230e1ce638478a60e58d11827501eb715a63b67adb26019ac89ad.jpg",
                  id: cuid(),
                  description:
                    "3D принтер Wanhao Duplicator i3 v2.1 (со стеклом)",
                  price: 23550,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st1/fit/320/250/eaeaef60e07c4210fe33f36df3678cf1/d8829f14b143e6886d8d8b3bb82455651f28db9a627486680a89bd732df4a2d9.jpg",
                  id: cuid(),
                  description: "3D принтер Anycubic Mega-S",
                  price: 25899,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st4/fit/320/250/45557c91604115105d08fb96c1d6b0b8/b05c48efd3b4e1824f0a2083d93829b09c5c66357abae163ce6ca9c064f7bf58.jpg",
                  id: cuid(),
                  description: "3D принтер XYZprinting Da Vinci Mini W",
                  price: 27999,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st4/fit/320/250/7e4ab31f82fb969e6d7975684558c51a/d35f15af038213a635fad994db603b45cb1372ded8220aa19ff4f00b207623bf.jpg",
                  id: cuid(),
                  description: "3D принтер Wanhao Duplicator i3 Plus v 2.0",
                  price: 33999,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st4/fit/320/250/f9bda7da92de79924fcab00227821617/c6a4e88cce0373ed65034d9dfb85dc579ed1fb5a30f2dcb4b8794390e112bfd5.jpg",
                  id: cuid(),
                  description: "3D принтер Phrozen Sonic Mini",
                  price: 34899,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st1/fit/320/250/39a011c23a8cc04411a90042fe799a1f/953cd543806373e579e8a66cde8051582cf528350cdfc6d4847ea2ddc74b7c63.jpg",
                  id: cuid(),
                  description: "3D принтер DEXP BOX C-K2",
                  price: 35999,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st1/fit/320/250/d04dd7245159247d197806f08e263831/2325889479c479d61cbfc2b5b4f0a2874608c56a6ad53e41c2e5b33dee12eac9.jpg",
                  id: cuid(),
                  description: "3D принтер FlashForge Finder",
                  price: 37499,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st4/fit/320/250/9a763fb1c4ab86b604ef4890ba6e3ca7/4c90a735958aa8d64cb64bb30d66842630305149a143bdd8106327352220ccb4.jpg",
                  id: cuid(),
                  description: "3D принтер Anycubic Photon S",
                  price: 39999,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st4/fit/320/250/39bd2ca32eb6ab01a606646b86688575/649d176878421067acd1aec103ad7f7b19b1304e88f1d5c262e2705220164581.jpg",
                  id: cuid(),
                  description: "3D принтер Wanhao Duplicator 9/300",
                  price: 42988,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st4/fit/320/250/0dbfe02e23ca3bfe407b0f4a7af5e43b/8c57486763fbdb7290928a63a2afaa79d7b63f2fb1ff70adc2f138aecf6dc0e0.jpg",
                  id: cuid(),
                  description: "3D принтер Wanhao GR1",
                  price: 42899,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st1/fit/320/250/1c466779e3b1f75982f954a3873edd85/0c6ddff9287f67e4fd20a7ee88a43be63951162831fdb3d2f9727b79a292ed41.jpg",
                  id: cuid(),
                  description: "3D принтер Flashforge Adventurer 3",
                  price: 43899,
                },
              ],
            },
          ],
          items: [
            {
              img:
                "https://c.dns-shop.ru/thumb/st4/fit/320/250/d0f7fdfbccbdc4dcecae7c876b021736/70d7900bb5fdcda5faaf72b2e228f7546009a459f6564d5708785bba4968d4ce.jpg",
              id: cuid(),
              description: "Пластик для 3D ручек Даджет KIT RU0111",
              price: 150,
            },
            {
              img:
                "https://c.dns-shop.ru/thumb/st4/fit/320/250/4832dc5faed775f0e210d815c7c7c5fd/a92d8c8032372fa470d5493f0d8f53e99a19d3e51f98135b0888e6a3f6559e67.jpg",
              id: cuid(),
              description: "3D-ручка Tiger 3d K-One белый",
              price: 1150,
            },
          ],
        },
        {
          img:
            "https://c.dns-shop.ru/thumb/st4/fit_width/120/120/fc4fda65138158f0b820b82fa4d6c28f/40f5ee7da59aaa64a30d71398aa56eb065aad79f2f2356609f84e362adfc0fe6.jpg",
          name: "paper",
          description: "Работа с бумагой",
          categories: [
            {
              img:
                "https://c.dns-shop.ru/thumb/st4/fit_width/120/120/973e6a33900d127b7fdf804db8c619a6/e3761dc7207d80fd8857aad8d3e24a6392c5f1ab1418ca058eb3043e3561c748.jpg",
              name: "laminators",
              description: "Ламиноторы",
              categories: [],
              items: [
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st4/fit/320/250/65f879f34a3d4fdba2ae04f8e736acec/8307a7f3110f9d5860e33b843342be6c6deb9e809b73c19dcf45633c1f78ca39.jpg",
                  id: cuid(),
                  description: "Ламинатор Aceline LM401",
                  price: 1420,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st4/fit/320/250/0a9367dc7b056dbe2b00130acdf0fd88/451c6c036655f26d57be53255ff8650b98c09e986d2c5e40c602f47bff8281d7.jpg",
                  id: cuid(),
                  description: "Ламинатор Aceline LM400B",
                  price: 1699,
                },
                {
                  img: "Ламинатор Aceline LM400B",
                  id: cuid(),
                  description: "Ламинатор ГЕЛЕОС ЛМ-А4-2R",
                  price: 1799,
                },
              ],
            },
            {
              img:
                "https://c.dns-shop.ru/thumb/st1/fit_width/120/120/d5a8db6d8d3ea2e9e55ac1639ccf6e9f/d7d243df74de1930ca7ea669e07f4b2a68df15c5829761d6062b645eb48d7ff2.jpg",
              name: "booklet-maker",
              description: "Брошюровщики",
              categories: [],
              items: [
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st4/fit/320/250/00b141da6cc8fc834fdd6d9e17b434b5/aac3438d78c8c47f98f31fb21a34ae7239c0e72f77ee8a200666b64dda9463a7.jpg",
                  id: cuid(),
                  description: "Брошюровщик Aceline ZD-0888H",
                  price: 1650,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st4/fit/320/250/d33c4199cb8244c7020e6f30ddffe4f3/712813ccf5aac531729fac3d2effa81c91e583f5c70dc20d3350483a7c9dd7c8.jpg",
                  id: cuid(),
                  description: "Брошюровщик Brauberg BM-4",
                  price: 1899,
                },
                {
                  img:
                    "https://c.dns-shop.ru/thumb/st4/fit/320/250/2d05b02d1050171986f14a7a2fef471b/d79374e972485a9c4f0b2fc446630781f16283baa58343b1c493027049387e00.jpg",
                  id: cuid(),
                  description: "Брошюровщик Aceline SD-1288",
                  price: 1999,
                },
              ],
            },
          ],
          items: [
            {
              img:
                "https://c.dns-shop.ru/thumb/st1/fit/320/250/81dd85cae593c19ba5c7263f64785c15/11ea512e1f42021b0779e6e6dc0582159110e331909346f77bfbe66073e057d1.jpg",
              id: cuid(),
              description: "Резак роликовый Реалист MF-28",
              price: 1299,
            },
            {
              img:
                "https://c.dns-shop.ru/thumb/st4/fit/320/250/3cdac2fb5345281cef28d72c2b2170cf/b02f22965553eddbd2aeb4e65ab65f6a26701fb53522ca4cfe3f881ce66e2d17.jpg",
              id: cuid(),
              description: "Резак сабельный Aceline GL410",
              price: 1399,
            },
          ],
        },
      ],
    },
    {
      description: "wifi роутеры и сетевое оборудование для малых сетей",
      img:
        "https://c.dns-shop.ru/thumb/st1/fit_width/120/120/22749734ca88d12f0128caec8d985efc/4b36c9af4df3aca88c711ab004c927e3959c8e497cff2bcea2ecd374d4aa27e7.jpg",
      name: "net-easy",
      items: [
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st1/fit/320/250/e7841d6eb2643106401283bb80085169/7cc7b1222afd2a6245550c725042d3ac406f0d156da9a41a01d9d31f3e15a2a7.jpg",
          price: 350,
          description: "Сетевая карта DEXP ZH-FEPCI1",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st4/fit/320/250/d53c506b589b89f691edfd0daad686d5/b2d9a4514407845f5b02b8faf80d77863d91a2371041e71926fd302f2c280ffe.jpg",
          price: 399,
          description: "Сетевая карта DEXP ZH-GE1P",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st4/fit/320/250/516638eb41b2faeeb6bad7f56b625d9c/31e2b6d36fc5904a817a19d6eb1ef8ac2b570ef7b0d6fd34d4db8213c2d709fe.jpg",
          price: 550,
          description: "Сетевая карта DEXP AT-UH001B",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st1/fit/320/250/831b18680cb5e40ed421f8a505864a1b/d94748cd3df493cf8fb629e16be96d5f260cdd2e0b6965983b246bb90d258f0b.jpg",
          price: 630,
          description: "Сетевая карта TP-LINK UE200",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st1/fit/320/250/6a7629fcc05ef2d97558c40eda10a98b/74b6dd8a2a4751a38481b66b0a3d63bafb0223c354e09ba89446edf19f335a6f.jpg",
          price: 799,
          description: "Сетевая карта Edimax EU-4208",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st1/fit/320/250/c7d867a3ad7b433a86a61647d8f7db4e/d68e42ee36cc0e8754470ce10574eb2fab134b97f85754859219d7dd0765c5a3.jpg",
          price: 1000,
          description: "Mesh системы Mercusys Halo S12",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st4/fit/320/250/8fdb177261e03dc7223e0f826b89745b/132c1de81d8efdab8bbe2f76c4f4ecccb9b4d5a377e0bf6eea159162ac22d4af.jpg",
          price: 1000,
          description: "Mesh системы TP-Link Deco AC1200",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st1/fit/320/250/cb197a874591e9e730cc0f1c80386b6f/2219ee14d957da755b924de15a41b06aaafb15e564a638ee1d80ca5b109fdb9e.jpg",
          price: 450,
          description: "Bluetooth адаптер Buro BU-BT30",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st1/fit/320/250/8bfda01192bc7cd3c8a49d447de6172d/9c050a013e86e320389a5d8e2b1b08a1024e8b7fefd5b8418127315d0d1ffb78.jpg",
          price: 1000,
          description: "Bluetooth адаптер ORICO BTA-403-BL",
        },
      ],
      categories: [
        {
          img:
            "https://c.dns-shop.ru/thumb/st1/fit_width/120/120/7d6f448204a5483147a4c84adcefa7f7/d134f1b74857681f58666bf562784af6476d77c17cdc1c8394897740e85398f8.jpg",
          name: "routers",
          description: "WiFi роутеры",
          categories: [],
          items: [
            {
              img:
                "https://c.dns-shop.ru/thumb/st1/fit/320/250/e05c45acb8842e1526462ab5503d4f4e/7d6a0a9fd69a528271654273874caae8181179fe2dec38275456cf89e9a8a80b.jpg",
              id: cuid(),
              description: "Wi-Fi роутер Mercusys MW305R v2",
              price: 950,
            },
            {
              img:
                "https://c.dns-shop.ru/thumb/st1/fit/320/250/87cda6a1affa308a97f08ea4c1788d59/6d6a64eb7469b01c2e3981461c14257ef9673f70f131ac1fc35ab3666c35fdef.jpg",
              id: cuid(),
              description: "Wi-Fi роутер TOTOLINK N302R plus",
              price: 999,
            },
            {
              img:
                "https://c.dns-shop.ru/thumb/st4/fit/320/250/18bcf94d33f99f0d382d26f53debbe47/d29826853b0f4999faa83297929ebac9221fa9804cb3c273af69399e132be40e.jpg",
              id: cuid(),
              description: "Wi-Fi роутер TP-LINK Archer C6",
              price: 2599,
            },
          ],
        },
        {
          img:
            "https://c.dns-shop.ru/thumb/st1/fit_width/120/120/92273a2b13f2e3492ffc2f305ae98a1b/133bfbb455016ef201a3396a7e21c5c0e0ae89d2324d30e9de30a39927246add.jpg",
          name: "3g4g",
          description: "Оборудование 3G/4G",
          categories: [],
          items: [
            {
              img:
                "https://c.dns-shop.ru/thumb/st4/fit/320/250/0ea8a974e3985e4bb82005a22e8f623e/72f61a1a52e83f798ef0a8f4ec30557412d5a99ea4ce87ff9b416662b58b987b.jpg",
              id: cuid(),
              description: "4G LTE модем DEXP M1",
              price: 2499,
            },
            {
              img:
                "https://c.dns-shop.ru/thumb/st1/fit/320/250/bc1e1aac03b993a2241400b65c84a353/22298f2efdc6f79bcdecc606e9e38b83a0671110b5a0b3bc268531240c5eac2f.jpg",
              id: cuid(),
              description: "4G LTE модем DEXP M1",
              price: 2799,
            },
            {
              img:
                "https://c.dns-shop.ru/thumb/st4/fit/320/250/2a5704f302b44e1e504f9e758f8135f1/f0a20d8a4a7f915a8688156c1cb6f5704d20109db78abefc63decd4c788e46be.jpg",
              id: cuid(),
              description: "4G LTE модем Alcatel IK40V-2BALRU1",
              price: 2899,
            },
          ],
        },
      ],
    },
    {
      description: "Профессиональное сетевое оборудование",
      img:
        "https://c.dns-shop.ru/thumb/st4/fit_width/120/120/01f63dbc55d1be9d1aaa62299b927362/e7594d1c9601dd029f7872b11c9b4a870faa2e851bf6f1fcf4f79050aacb60e7.jpg",
      name: "net-professional",
      items: [
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st1/fit/320/250/b840e2ac7a083c141374e317fdb5f2f6/380b68362fe712a1af3ee599a1ec9a2f58700ae908dc952c992048aba0d342c3.jpg",
          price: 310,
          description: "Полка для шкафа ЦМО МС-15-10",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st1/fit/320/250/e43316dc27062bdc332b7cd98a7915e3/754c2034083ca613d77e83ceaf393ee80610131de5acf7038ef451516941cde7.jpg",
          price: 320,
          description: "Крепежный комплект Lanmaster TWT-CB-SFIX-SET",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st1/fit/320/250/9840ef5a0b713fec6745600af6fd19aa/3526c4756a29a9a3e5f0d6cf34db16f705233f7246b2c4d028eddcd226608be3.jpg",
          price: 1050,
          description: "Полка для шкафа ЦМО МС-40",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st4/fit/320/250/90ecf3836c4818027447188d631fdc75/861a26890ed59931dbd9893586d17545085b47e35e2f29d160dde54040bb076c.jpg",
          price: 1000,
          description: "Комплект монтажный ЦМО КМ-2-25",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st4/fit/320/250/825cd5c69e573b1b7267eeff525501fb/263c444cc6af3d968098b68fca8131a21dfd5963c53a118fe0dac0775ae491f0.jpg",
          price: 1000,
          description: "Крепежный комплект Lanmaster LAN-SC30",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st1/fit/320/250/84c30e861d18763549b380800aad1a18/989a91974a3dff68413a2d532283f6a4ed230bfaad1eecb5da39cd921c6dbda2.jpg",
          price: 850,
          description: "Крепежные винты Lanmaster LAN-SC50",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st1/fit/320/250/2f3ed504840f4006218794b4cae1fff9/2075b25653d3922400c022c41e0ac36400bddfc321b0cee119155ee957e0f8d0.jpg",
          price: 750,
          description: "Крепежный комплект Крепежный комплект 5bites NM-16",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st4/fit/320/250/c39e7cdbdf123a7c771167003b49ef27/9d68ad41ef59619821785daa6b04d3d30c1f07b5bc4f8384ce90b102fce9e897.jpg",
          price: 8399,
          description: "Крепежный комплект HPE J9583A",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st1/fit/320/250/36487b89445cc594bcef6993cdc04da7/cc5d53619d3e32fca2d1f73e449f5c900aba92dc011ecc52112c96298b21576c.jpg",
          price: 1000,
          description: "Модуль вентиляторный ЦМО R-FAN-3K-1U",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st4/fit/320/250/f0c07ec010b1f0e81055fac0a95516ba/59b345c5013b8e300e11c9a5ef2623f2716ba266de5e9a4a1173e17816f80378.png",
          price: 7999,
          description: "Модуль вентиляторный ЦМО R-FAN-3K-1U-9005",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st4/fit/320/250/f94afd54060dcc9b742bb5427df5d6cd/90bf6db385a759a2403cf09f5d8907399c85a51f421dadfc61bf2806c767c011.jpg",
          price: 7099,
          description: "Модуль вентиляторный ЦМО R-FAN-6K-1U",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st1/fit/320/250/13b78e542637016a665ca26e63c8914d/e658ad9ecad349d3e0a70dd8f63c250be32906ac4bc92d7759a1231854d4e1a0.jpg",
          price: 410,
          description: "Органайзер кабельный ЦМО ГКО-О-4.62",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st4/fit/320/250/7ec5e3290cfe05e2642d54c2c47b7fc6/8b16fe4459fdf779d12983cbc37c16530ebbddad594c4d3d7dba1605a4ebc477.jpg",
          price: 950,
          description: "Органайзер кабельный Lanmaster LAN-ORG/BP-1U",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st1/fit/320/250/908606eec3e4f04a0eae4877b2c7d845/a4bfb7535df50022d8862f541577e38108ccd5e851aa351eea782c12044c8979.jpg",
          price: 1199,
          description: "Органайзер кабельный Lanmaster TWT-ORG/CV-2U",
        },
        {
          id: cuid(),
          img:
            "https://c.dns-shop.ru/thumb/st1/fit/320/250/c5abcdc02cfd4554309fda2700bd5dc8/c6c7b21ca57282216cff82b26e84ed8ce4154be542952de8641861cbc06155ec.jpg",
          price: 1499,
          description: "Органайзер кабельный Lanmaster TWT-CBE-BP",
        },
      ],
      categories: [
        {
          img:
            "https://c.dns-shop.ru/thumb/st4/fit_width/120/120/d08d6a8b7799dc5278d8aa381bece2c8/e9eff56924378714517544944c3db55dfd41d1905668965d22b5866cac02a75b.jpg",
          name: "switches",
          description: "Коммутаторы",
          categories: [],
          items: [
            {
              img:
                "https://c.dns-shop.ru/thumb/st4/fit/320/250/d5f693c004d5d57eb9d36d29f85aa086/7d0f8620bce616275da1f3c38f0935cdec6872d71dfc8d0e5e7da1f495612b67.jpg",
              id: cuid(),
              description: "Коммутатор TP-Link LS1008G",
              price: 1250,
            },
            {
              img:
                "https://c.dns-shop.ru/thumb/st4/fit/320/250/c8621b34db9fe713e5d7e102a1d1a801/fffc4c7d6bd979a9ac5e1c6f9fc50d79232c73c1942bd6b0158c7d4c0add9090.jpg",
              id: cuid(),
              description: "Коммутатор TP-LINK TL-SF1016DS",
              price: 1999,
            },
            {
              img:
                "https://c.dns-shop.ru/thumb/st1/fit/320/250/c242fd1c178ad21a3cb4a804aeb99ac5/715828d70e0f7d869afc44ae198caf7944f2aa14b51e63581ebff1f3e06bd02f.jpg",
              id: cuid(),
              description: "Коммутатор D-Link DGS-1100-08/В1",
              price: 2699,
            },
          ],
        },
        {
          img:
            "https://c.dns-shop.ru/thumb/st1/fit_width/120/120/1d41361217fd937753293318cfc56e97/661543a76da578e442fe6b15b68c50b2f15132b2fae375ebaff7fe61ebad091b.jpg",
          name: "firewall",
          description: "Межсетевые экраны",
          categories: [],
          items: [
            {
              img:
                "https://c.dns-shop.ru/thumb/st1/fit/320/250/b4d694c6418022e3d8f3acb1f7e580fa/d1f7b149ba356781103bdd4ea839c467877149eefd7b175cc066c223f808fab6.jpg",
              id: cuid(),
              description: "Межсетевой экран Zyxel USG20-VPN",
              price: 14799,
            },
            {
              img:
                "https://c.dns-shop.ru/thumb/st1/fit/320/250/2b73401f34bc8ff06b7fd8067a3c5120/0a24db861d8e69fcb71962ef0193544430a7c88635e470cb8553f3f7b1f49709.jpg",
              id: cuid(),
              description: "Межсетевой экран ZyWALL USG20W-VPN",
              price: 15999,
            },
            {
              img:
                "https://c.dns-shop.ru/thumb/st1/fit/320/250/284eb3e8da9bfbdb6918c631a0e44b5b/12d0375a1d19b8fb490b8d65c7a9fb7a4004bff300d3361840cb628f0a40ff1b.jpg",
              id: cuid(),
              description: "Межсетевой экран D-Link DFL-870",
              price: 56000,
            },
          ],
        },
      ],
    },
  ],
};
