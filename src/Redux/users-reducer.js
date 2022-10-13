import { USERS_GET_SUBSCRIBED, USERS_UNSUBSCRIBED, USERS_PHOTO_ADD_COMMENT } from './types.js';

export const users =
[
  {
    id : '11111111',
    firstName : 'Евгения',
    lastName : 'Петрова',
    status : 'Не подражайте другим. Найдите себя и оставайтесь собой, ведь «зависть — это невежество», а «подражание — самоубийство»',
    education :
    {
      university : 'Педагогический колледж',
      faculty : 'Дошкольное образование',
      startYear : 2017,
      lastYear : 2021,
    },
    languages :
    [
      'Русский',
    ],
    subscribers :
    [
      {
        id : '172787588'
      },
      {
        id : '22222222'
      },
      {
        id : '33333333'
      },
    ],
    subscribs :
    [
      {
        id : '172787588'
      },
      {
        id : '22222222'
      },
      {
        id : '33333333'
      },
      {
        id : '44444444'
      }
    ],
    photos :
    [
      {
        id : 10,
        src : 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
        comments :
        [
          {
            id : 1,
            author :
            {
              id : '22222222',
              firstName : 'София',
              lastName : 'Сидорова',
              sex : 'woman',
              mainPhoto : 'https://coolsen.ru/wp-content/uploads/2021/06/48_2.jpg',
            },
            text : 'Классная поездка)))',
            date : '07 июл 2022',
          },
          {
            id : 2,
            author :
            {
              id : '11111111',
              firstName : 'Евгения',
              lastName : 'Петрова',
              sex : 'woman',
              mainPhoto : 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
            },
            text : 'Спасибо, любоффф моя!!!)',
            date : '07 июл 2022',
          },
        ],
        date : '07 июл 2022',
        author : {
          firstName : 'Евгения',
          lastName : 'Петрова',
          mainPhoto : 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
        },
        countLikes : 3,
      },
    ],
    mainPhoto : 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
    media :
    {
      instagram : 'https://instagram.com',
      twitter : 'https://twitter.com',
      vk : 'https://vk.com',
    },
    account :
    {
      login : 'chapylele',
      password : '123456789',
    },
    birthday : '31.08.2001',
    city : 'Новосибирск',
    sex: 'woman',
    notifications :
    [
      {
        action : 'Like',
        user :
        {
          id : '44444444',
          firstName : 'Константин',
          lastName : 'Минин',
          mainPhoto : 'https://avatarko.ru/img/kartinka/1/Jack_Vorobei.jpg',
          date : '',
          sex : 'man',
        },
      },
      {
        action : 'Subscribe',
        user :
        {
          id : '44444444',
          firstName : 'Константин',
          lastName : 'Минин',
          mainPhoto : 'https://avatarko.ru/img/kartinka/1/Jack_Vorobei.jpg',
          date : '',
          sex : 'man',
        },
      },
      {
        action : 'Like',
        user :
        {
          id : '33333333',
          firstName : 'Анастасия',
          lastName : 'Сидорова',
          mainPhoto : 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_22_28060952.jpg',
          date : '',
          sex : 'woman',
        },
      },
    ],
  },
  {
    id : '172787588',
    firstName : 'Кирилл',
    lastName : 'Рогов',
    status : 'Дорогу осилит идущий',
    education :
    {
      university : 'НГУ',
      faculty : 'Юриспруденция',
      startYear : 2017,
      lastYear : 2021,
    },
    languages :
    [
      'Русский',
      'English'
    ],
    subscribers :
    [
      {
        id : '11111111'
      },
      {
        id : '22222222'
      },
      {
        id : '33333333'
      },
      {
        id : '55555555'
      }
    ],
    subscribs :
    [
      {
        id : '11111111'
      },
      {
        id : '22222222'
      },
      {
        id : '33333333'
      },
      {
        id : '55555555'
      }
    ],
    photos :
    [
      {
        id : 1235,
        src : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
        comments :
        [
          {
            id : 1,
            author :
            {
              id : '22222222',
              firstName : 'София',
              lastName : 'Сидорова',
              sex : 'woman',
              mainPhoto : 'https://coolsen.ru/wp-content/uploads/2021/06/48_2.jpg',
            },
            text : 'Классная поездка)))',
            date : '28 июн 2022',
          },
          {
            id : 2,
            author :
            {
              id : '172787588',
              firstName : 'Кирилл',
              lastName : 'Рогов',
              sex : 'man',
              mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
            },
            text : 'Спасибо',
            date : '29 июн 2022',
          },
        ],
        date : '28 июн 2022',
        author : {
          firstName : 'Кирилл',
          lastName : 'Рогов',
          mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
        },
        countLikes : 0,
      },
      {
        id : 1236,
        src : 'https://sun9-24.userapi.com/impf/c837325/v837325141/17551/iWhOs-wNcuU.jpg?size=1080x1080&quality=96&sign=26620865277ebaff995066c06e90e939&type=album',
        comments :
        [
          {
            id : 1,
            author :
            {
              id : '22222222',
              firstName : 'София',
              lastName : 'Сидорова',
              sex : 'woman',
              mainPhoto : 'https://coolsen.ru/wp-content/uploads/2021/06/48_2.jpg',
            },
            text : 'Класс)))',
            date : '28 июн 2022',
          },
        ],
        date : '28 июн 2022',
        author : {
          firstName : 'Кирилл',
          lastName : 'Рогов',
          mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
        },
        countLikes : 0,
      },
      {
        id : 1238,
        src : 'https://sun9-2.userapi.com/impg/5ZDS8wwSXpeIRpDfwrBkSMroXvacUaASmQoNBQ/SAK2-CUCzdg.jpg?size=607x1080&quality=96&sign=5be238854a19497d13665884a2ca9ceb&type=album',
        comments :
        [
          {
            id : 2,
            author :
            {
              id : '44444444',
              firstName : 'Константин',
              lastName : 'Минин',
              sex : 'man',
              mainPhoto : 'https://avatarko.ru/img/kartinka/1/Jack_Vorobei.jpg',
            },
            text : 'Крут!)))',
            date : '20 марта 2019',
          },
        ],
        date : '28 июн 2022',
        author : {
          firstName : 'Кирилл',
          lastName : 'Рогов',
          mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
        },
        countLikes : 192,
      },
      {
        id : 1239,
        src : 'https://sun9-69.userapi.com/impf/EV1bSNP3qSWtUlrTz3meb510lTbTyhUKVpbUKg/dskGKoHIBPA.jpg?size=480x720&quality=96&sign=a848228df2f3cfe873b7939ca4e73b14&type=album',
        comments :
        [
          {
            id : 3,
            author :
            {
              id : '33333333',
              firstName : 'Анастасия',
              lastName : 'Сидорова',
              sex : 'woman',
              mainPhoto : 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_22_28060952.jpg',
            },
            text : 'Класс!)))',
            date : '10 апр 2021',
          },
        ],
        date : '07 апр 2021',
        author : {
          firstName : 'Кирилл',
          lastName : 'Рогов',
          mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
        },
        countLikes : 56,
      },
      {
        id : 1240,
        src : 'https://sun9-59.userapi.com/impf/c836430/v836430349/2d933/IsPhTvEhSe8.jpg?size=599x600&quality=96&sign=20ed1959b51a814e9bc489be8dd1750d&type=album',
        comments :
        [
        ],
        date : '01 янв 2022',
        author :
        {
          firstName : 'Кирилл',
          lastName : 'Рогов',
          mainPhoto : 'https://sun1-94.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
        },
        countLikes : 10,
      },
      {
        id : 1241,
        src : 'https://sun9-82.userapi.com/impf/c637825/v637825801/40a6c/ZJQXhT6RblY.jpg?size=1080x678&quality=96&sign=c4841a3457239d535b5489f4649488bc&type=album',
        comments :
        [
        ],
        date : '01 янв 2022',
        author :
        {
          firstName : 'Кирилл',
          lastName : 'Рогов',
          mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
        },
        countLikes : 10,
      },
      {
        id : 1242,
        src : 'https://sun9-21.userapi.com/impf/VSiw_qZG3-uGaTP1eEfUDL-XgPPEK5Xvc86-cQ/eAhlmglhClY.jpg?size=1024x683&quality=96&sign=48c1ca69e6585afa9d4f75aa5931da23&type=album',
        comments :
        [
        ],
        date : '01 янв 2022',
        author :
        {
          firstName : 'Кирилл',
          lastName : 'Рогов',
          mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
        },
        countLikes : 10,
      },
      {
        id : 1243,
        src : 'https://sun9-55.userapi.com/impf/c837520/v837520587/2e527/QPXyzWr5JdE.jpg?size=724x633&quality=96&sign=bcd40078928105cda8b985e8b3c09c59&type=album',
        comments :
        [
        ],
        date : '01 янв 2022',
        author :
        {
          firstName : 'Кирилл',
          lastName : 'Рогов',
          mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
        },
        countLikes : 10,
      },
      {
        id : 1244,
        src : 'https://sun9-24.userapi.com/impf/c837325/v837325141/17551/iWhOs-wNcuU.jpg?size=1080x1080&quality=96&sign=26620865277ebaff995066c06e90e939&type=album',
        comments :
        [
        ],
        date : '01 янв 2022',
        author :
        {
          firstName : 'Кирилл',
          lastName : 'Рогов',
          mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
        },
        countLikes : 10,
      },
      {
        id : 1245,
        src : 'https://sun9-62.userapi.com/impf/c836432/v836432063/41e5a/pGkrrbMNn3I.jpg?size=960x639&quality=96&sign=d256876cac2cf1e4bade941e69b746c3&type=album',
        comments :
        [
        ],
        date : '01 янв 2022',
        author :
        {
          firstName : 'Кирилл',
          lastName : 'Рогов',
          mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
        },
        countLikes : 10,
      },
      {
        id : 1246,
        src : 'https://sun9-18.userapi.com/impf/c637221/v637221962/46172/Pypix2ZDVQk.jpg?size=1156x826&quality=96&sign=175a2c401d2a139c3e4814c38ece63e5&type=album',
        comments :
        [
        ],
        date : '01 янв 2022',
        author :
        {
          firstName : 'Кирилл',
          lastName : 'Рогов',
          mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
        },
        countLikes : 10,
      },
      {
        id : 1247,
        src : 'https://sun9-67.userapi.com/impf/c637419/v637419801/27334/V1LDkXXVEHI.jpg?size=920x1080&quality=96&sign=916ffcf2aebe5d4a9168a11ff53ee380&type=album',
        comments :
        [
          {
            id : 1,
            author :
            {
              id : '172787588',
              firstName : 'Кирилл',
              lastName : 'Рогов',
              sex : 'man',
              mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
            },
            text : 'comment',
            date : '01 янв 2022',
          }
        ],
        date : '01 янв 2021',
        author :
        {
          firstName : 'Кирилл',
          lastName : 'Рогов',
          mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
        },
        countLikes : 10,
      },
      {
        id : 1248,
        src : 'https://sun9-3.userapi.com/impf/dI6tcuZQ5SeTQOGvKGXoycNV6Iuszx_GSNt41w/nUgdfi7Msy0.jpg?size=604x604&quality=96&sign=f85a69f9e1c67ffa42112ad86cd0c209&type=album',
        comments :
        [
          {
            id : 1,
            author :
            {
              id : '172787588',
              firstName : 'Кирилл',
              lastName : 'Рогов',
              sex : 'man',
              mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
            },
            text : 'comment',
            date : '01 янв 2022',
          }
        ],
        date : '01 янв 2021',
        author :
        {
          firstName : 'Кирилл',
          lastName : 'Рогов',
          mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
        },
        countLikes : 10,
      },
      {
        id : 1249,
        src : 'https://sun9-71.userapi.com/impf/c837731/v837731801/1208e/Rzlr75YlwzA.jpg?size=865x1080&quality=96&sign=1521df50595e9ec4a64812b060b24d94&type=album',
        comments :
        [
          {
            id : 1,
            author :
            {
              id : '172787588',
              firstName : 'Кирилл',
              lastName : 'Рогов',
              sex : 'man',
              mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
            },
            text : 'comment',
            date : '01 янв 2022',
          }
        ],
        date : '01 янв 2021',
        author :
        {
          firstName : 'Кирилл',
          lastName : 'Рогов',
          mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
        },
        countLikes : 10,
      },
      {
        id : 1250,
        src : 'https://sun9-22.userapi.com/impf/c837539/v837539621/a633/fwszoe34aVk.jpg?size=646x807&quality=96&sign=3469ffc80ff1ad15854dafeebff30d42&type=album',
        comments :
        [
          {
            id : 1,
            author :
            {
              id : '172787588',
              firstName : 'Кирилл',
              lastName : 'Рогов',
              sex : 'man',
              mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
            },
            text : 'comment',
            date : '01 янв 2022',
          }
        ],
        date : '01 янв 2021',
        author :
        {
          firstName : 'Кирилл',
          lastName : 'Рогов',
          mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
        },
        countLikes : 10,
      },
      {
        id : 1251,
        src : 'https://sun9-70.userapi.com/impf/XQcnTxwPdgRf--Qc43XVw_EngKYcjgCN6yaG1w/Z1qltw9xstE.jpg?size=1280x854&quality=96&sign=c6952b8e640d20fbaeb9678f8b4f71d2&type=album',
        comments :
        [
          {
            id : 1,
            author :
            {
              id : '172787588',
              firstName : 'Кирилл',
              lastName : 'Рогов',
              sex : 'man',
              mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
            },
            text : 'comment',
            date : '01 янв 2022',
          }
        ],
        date : '01 янв 2021',
        author :
        {
          firstName : 'Кирилл',
          lastName : 'Рогов',
          mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
        },
        countLikes : 10,
      },
      {
        id : 1250,
        src : 'https://sun9-22.userapi.com/impf/c837539/v837539621/a633/fwszoe34aVk.jpg?size=646x807&quality=96&sign=3469ffc80ff1ad15854dafeebff30d42&type=album',
        comments :
        [
          {
            id : 1,
            author :
            {
              id : '172787588',
              firstName : 'Кирилл',
              lastName : 'Рогов',
              sex : 'man',
              mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
            },
            text : 'comment',
            date : '01 янв 2022',
          }
        ],
        date : '01 янв 2021',
        author :
        {
          firstName : 'Кирилл',
          lastName : 'Рогов',
          mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
        },
        countLikes : 10,
      },
      {
        id : 1253,
        src : 'https://sun1-86.userapi.com/impf/c637221/v637221962/47f28/lOPg4gTND0E.jpg?size=1280x867&quality=96&sign=88c5b852d6cbdc1ed08c7c7de393cbdc&type=album',
        comments :
        [
          {
            id : 1,
            author :
            {
              id : '172787588',
              firstName : 'Кирилл',
              lastName : 'Рогов',
              sex : 'man',
              mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
            },
            text : 'comment',
            date : '01 янв 2022',
          }
        ],
        date : '01 янв 2019',
        author :
        {
          firstName : 'Кирилл',
          lastName : 'Рогов',
          mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
        },
        countLikes : 10,
      },
    ],
    account :
    {
      login : 'admin',
      password : '123'
    },
    mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
    media :
    {
      instagram : 'https://instagram.com',
      twitter : 'https://twitter.com',
      vk : 'https://vk.com',
    },
    sex: 'man',
    birthday : '07.04.1999',
    city : 'Новосибирск',
    notifications :
    [
    ],
  },
  {
    id : '22222222',
    firstName : 'София',
    lastName : 'Сидорова',
    status : 'Один день три осени',
    education :
    {
      university : 'НГУ',
      faculty : 'Юриспруденция',
      startYear : 2020,
      lastYear : 2024,
    },
    languages :
    [
      'Русский',
      'English',
    ],
    subscribers :
    [
      {
        id : '11111111'
      },
      {
        id : '33333333'
      },
      {
        id : '172787588'
      },
    ],
    subscribs :
    [
      {
        id : '11111111'
      },
      {
        id : '33333333'
      },
    ],
    photos :
    [
      {
        id : 20,
        src : 'https://coolsen.ru/wp-content/uploads/2021/06/48_2.jpg',
        comments :
        [
          {
            id : 1,
            author :
            {
              id : '11111111',
              firstName : 'Евгения',
              lastName : 'Петрова',
              sex : 'woman',
              mainPhoto : 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
            },
            text : 'Ну ты прям красотка)))',
            date : '07 июл 2022',
          },
          {
            id : 2,
            author :
            {
              id : '22222222',
              firstName : 'София',
              lastName : 'Рогов',
              sex : 'woman',
              mainPhoto : 'https://coolsen.ru/wp-content/uploads/2021/06/48_2.jpg'
            },
            text : 'А то))',
            date : '07 июл 2022',
          },
        ],
        date : '07 июл 2022',
        author : {
          firstName : 'София ',
          lastName : 'Сидорова',
          mainPhoto : 'https://coolsen.ru/wp-content/uploads/2021/06/48_2.jpg',
        },
        countLikes : 2,
      },
    ],
    mainPhoto : 'https://coolsen.ru/wp-content/uploads/2021/06/48_2.jpg',
    media :
    {
      instagram : 'https://instagram.com',
      twitter : 'https://twitter.com',
      vk : 'https://vk.com',
    },
    account :
    {
      login : 'katya',
      password : '123456789',
    },
    birthday : '09.10.2002',
    city : 'Новосибирск',
    sex : 'woman',
    notifications :
    [
    ],
  },
  {
    id : '33333333',
    firstName : 'Анастасия',
    lastName : 'Сидорова',
    status : '',
    education :
    {
      university : 'ГАГУ',
      faculty : 'Географический',
      startYear : 1994,
      lastYear : 1998,
    },
    languages :
    [
      'Русский'
    ],
    subscribers :
    [
      {
        id : '172787588'
      },
      {
        id : '11111111'
      },
      {
        id : '22222222'
      },
    ],
    subscribs :
    [
      {
        id : '172787588'
      },
      {
        id : '11111111'
      },
      {
        id : '22222222'
      },
    ],
    photos :
    [
      {
        id : 30,
        src : 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_22_28060952.jpg',
        comments :
        [
          {
            id : 1,
            author :
            {
              id : '22222222',
              firstName : 'София',
              lastName : 'Сидорова',
              sex : 'woman',
              mainPhoto : 'https://coolsen.ru/wp-content/uploads/2021/06/48_2.jpg',
            },
            text : 'Красивая:)',
            date : '04 июл 2022',
          },
          {
            id : 2,
            author :
            {
              id : '33333333',
              firstName : 'Анастасия',
              lastName : 'Сидорова',
              sex : 'woman',
              mainPhoto : 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_22_28060952.jpg',
            },
            text : 'Спасибо))',
            date : '05 июл 2022',
          },
        ],
        date : '04 июл 2022',
        author : {
          firstName : 'Анастасия',
          lastName : 'Сидорова',
          mainPhoto : 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_22_28060952.jpg',
        },
        countLikes : 0,
      },
    ],
    mainPhoto : 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_22_28060952.jpg',
    media :
    {
      instagram : 'https://instagram.com',
      twitter : 'https://twitter.com',
      vk : 'https://vk.com',
    },
    account :
    {
      login : 'elena',
      password : 'gbhjntrybR',
    },
    birthday : '22.03.1976',
    city : 'Бийск',
    sex: 'woman',
    notifications :
    [
    ],
  },
  {
    id : '44444444',
    firstName : 'Константин',
    lastName : 'Минин',
    status : '',
    education :
    {
      university : 'НГУ',
      faculty : 'Юриспруденция',
      startYear : 2017,
      lastYear : 2021,
    },
    languages :
    [
      'Русский',
      'English'
    ],
    subscribers :
    [
      {
        id : '55555555'
      },
      {
        id : '11111111'
      },
    ],
    subscribs :
    [
      {
        id : '172787588'
      },
      {
        id : '55555555'
      },
    ],
    photos :
    [
      {
        id : 40,
        src : 'https://avatarko.ru/img/kartinka/1/Jack_Vorobei.jpg',
        comments :
        [
          {
            id : 1,
            author :
            {
              id : '172787588',
              firstName : 'Кирилл',
              lastName : 'Рогов',
              sex : 'man',
              mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
            },
            text : 'Маленький юрист)',
            date : '03 июл 2022',
          },
        ],
        date : '03 июл 2022',
        author : {
          firstName : 'Константин',
          lastName : 'Минин',
          mainPhoto : 'https://avatarko.ru/img/kartinka/1/Jack_Vorobei.jpg',
        },
        countLikes : 0,
      },
    ],
    mainPhoto : 'https://avatarko.ru/img/kartinka/1/Jack_Vorobei.jpg',
    media :
    {
      instagram : 'https://instagram.com',
      twitter : 'https://twitter.com',
      vk : 'https://vk.com',
    },
    account :
    {
      login : 'stas',
      password : 'smolin',
    },
    birthday : '17.07.1999',
    city : 'Братск',
    sex: 'man',
    notifications :
    [
    ],
  },
  {
    id : '55555555',
    firstName : 'Пётр',
    lastName : 'Романов',
    status : '',
    education :
    {
      university : 'НГУ',
      faculty : 'Юриспруденция',
      startYear : 2017,
      lastYear : 2021,
    },
    languages :
    [
      'Русский',
      'English'
    ],
    subscribers :
    [
      {
        id : '172787588'
      },
      {
        id : '44444444'
      },
    ],
    subscribs :
    [
      {
        id : '172787588'
      },
      {
        id : '44444444'
      },
    ],
    photos :
    [
      {
        id : 50,
        src : 'https://avatarko.ru/img/kartinka/29/muzhchina_soldat_28583.jpg',
        comments :
        [
          {
            id : 1,
            author :
            {
              id : '44444444',
              firstName : 'Константин',
              lastName : 'Минин',
              sex : 'man',
              mainPhoto : 'https://avatarko.ru/img/kartinka/1/Jack_Vorobei.jpg',
            },
            text : 'Nice dick, bro',
            date : '28 июн 2022',
          },
        ],
        date : '01 июл 2022',
        author : {
          firstName : 'Пётр',
          lastName : 'Романов',
          mainPhoto : 'https://avatarko.ru/img/kartinka/29/muzhchina_soldat_28583.jpg',
        },
        countLikes : 0,
      },
    ],
    mainPhoto : 'https://avatarko.ru/img/kartinka/29/muzhchina_soldat_28583.jpg',
    media :
    {
      instagram : 'https://instagram.com',
      twitter : 'https://twitter.com',
      vk : 'https://vk.com',
    },
    account :
    {
      login : 'danil',
      password : 'hubulov',
    },
    birthday : '19.09.1999',
    city : 'Новосибирск',
    sex: 'man',
    notifications :
    [
    ],
  }
]

export const usersReducer = (state = users, action) => {
  switch (action.type) {
    case USERS_GET_SUBSCRIBED: {
      // if (activeUser.id === undefined) {
      //   this.setLayoutState('layout-open')
      // } else {
      //   const newNotification =
      //   {
      //     action : 'Subscribe',
      //     user :
      //     {
      //       id : activeUser.id,
      //       firstName : activeUser.firstName,
      //       lastName : activeUser.lastName,
      //       mainPhoto : activeUser.mainPhoto,
      //       date : '',
      //       sex : activeUser.sex,
      //     },
      //   }
      //   activeUser.subscribs.push(user)
      //   user.notifications.push(newNotification)
      //   user.subscribers.push(activeUser)
      // }
    }
    case USERS_UNSUBSCRIBED: {
      // for (let i = 0; i < this.activeUser.subscribs.length; i++) {
      //   let subscribs = this.activeUser.subscribs[i]
      //   if (subscribs.id === this.user.id) {
      //     this.activeUser.subscribs.splice(i, 1)
      //   }
      // }
      //
      //  for (let i = 0; i < this.user.subscribers.length; i++) {
      //    let subscribers = this.user.subscribers[i]
      //    if (subscribers.id === this.activeUser.id) {
      //      this.user.subscribers.splice(i, 1)
      //    }
      // }
    }
    case USERS_PHOTO_ADD_COMMENT: {
     //  let newComment = {
     //    id : comments.length + 1,
     //    author :
     //    {
     //      id : activeUser.id,
     //      firstName : activeUser.firstName,
     //      lastName : activeUser.lastName,
     //      sex : activeUser.sex,
     //      mainPhoto : activeUser.mainPhoto
     //    },
     //    text: comment,
     //    date : date
     //  }
     //
     //  comments.push(newComment)
     // },
    }
    default:
    return state
  }
}
