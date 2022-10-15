import {
  POSTS_ADD_COMMENT,
  POSTS_INCREASE_RATING,
  POSTS_DECREASE_RATING,
  POSTS_ADD_ANSWER,
} from './types.js';

const initState =
[
  {
    id : 0,
    mainPhoto : 'https://kinopoisk-ru.clstorage.net/gm152n188/37ace7P2le/pYGyamFQXXoDH_DoCzVJnfTMsn9J1qciPqxElfs8J7FiOGIli5_gifcN-n_9as30qQX3deJvdTpdZonGiHNzWrWEom8mFRcgAQm_9Qg5G8zvgbp8DNb5cXr5GsilDAifSglWR6m51LSUE-Bv_DCRqf9MqS--YmN7TF_v0dd-K2ahpIhxd0UxXQ44iNUnMk-vzoi9YniQiwkn7FWb8RENtWETX2K5iMSUuwLaTZcvvI7pXoUEr0YDYU943pj7fzdKsJiwR3F6GnkvK5fYDy9KlMSnv0pzj4ERA8VfndQrD45KImNgoonQjJcx9UurC6qiwnWsMrdNCmBrQcqnw1YcVYOLhE9SUhVDCDay0xoYZaHVpK5tb5GOPg_XV4rGJTCEZBJvT76i-rqVBs5opB6JveNahDKLWyR7bE3zgMVfAUenoZ9xXEI9YwAlrvMPPHSq1LSXcnGUpT4E52yL7R8xlkAmfHm5vvSIvCDGdqQuga3oSLYWuF4YY1RJ4aTJfDBsn7KlTGBiN20ENajAMDxGt--hrE9bkpETH-hahcQ7NI1vD2R8jIDitpEX_EC9AryV6kivAIBDA2Npef258no3aIWRvHFpRAJZLiSL1AgqWL_Utr5JV5ypAyzXRJXXOxKXXB5dQpCV3r-KANhvnjOrvuZ1qxCfSzl6V3nkk9NBI0megoRvZ2UdcA4IsNMGF0yC7YaWXFiyih8TwFq11jQOrUU4RH65oP2VnhDOToAuuozSfrcvhn0KWm1xxLnkajJHla-2UndwN1sMAbzgJw1Luf2AlG5alZglENlArNECDZNYBmh6nIDLsqgNwE6bC5Wo_HWEAopDPlF-StSe0mUIUZyGtn5pTiV2MA2E-zoZZp3arZhJdJCQFAvHSp7yKiG5ajlNSoiC_bCtHvtulzGwgt9flCSEXQldeEbouuR1DkeRq7dPclA-dQEYsek8EGCd_Y6ZXVixqh4S4mS73AQnl10_QUC6uN6srj7wQoY9rID-e5AErno9TXp64oPTfSVVqqOWUWBuBXMjNZrWCT1Iqc-rlk14mrQVGth4uuYjB7BlE2hQjJL0qooixHaBOqiwwGmQAIpjF3hOUeaj2UcHd6mYnGl_WwRWCieX-B49W63Nt4hTRIy4Jgfzao7_GgSpYDlmRoKz4o-XJvNTvReRkvRuhAGATw54YHH2pOFJLGq3haxFR3ErZxYYt_UtEEOLzrq2cVmQrD8t-XWT0iAeuXIdYE2vmtSVvBDuVYAKvp_qdo4NmUQkWkNr8ZnySiNwoIWhXEdHB0cFA7n1LQ9BktaklnR7loY-LNJCmuAdLpd7En1HjqbnkJEoxU-cGoCv2lmBFJ1jCW1dTvuc3ns2VISDsH5bYh9-Mhua0C8cZ7PvkJljS5eOHyvuW5DlAy6ZWQljaa-K2ImyJuBZkSOAvsRzpzamQjdhc1DkpPl8KlSxg6RsYGUQRSkOjf4LEkOfz5uVbGeLrxQNy1y4_gEet2kIQ3mBuv64ljPdYKoJsrfbdZUfhFoAekln5rTgYgBIv4OUR1VNImUKPrXlDwNFocuav1xLiKoyMupdt90VIJlEGUZBjIb-hLAU3XeXIZ2C9H-uD4JjBGxcd-OayGQ0dr6BiEhqbBhCKx2P4AsdZrrArrpzUailFA_vXL_6ARmYSABlTLWF9qSZCeZqlzOstfJKjC2rQBVoV3r8suB8K369ipNbS0oiUDcHudQfAlucyIORcm2XizID21efzCo4t3gHS2avtNK4nx3vdoQJsYvjS6khhH4vanJYyYPadxFRqpGUTGtUKW0WP7_jHClsvOqtvn1JsKU2P8phi94KFLZBCnxPmr36mbAT2mCnIr6L4kiDEoRfNF12VuSW6XUCb6mGrU9jRjBHLja44CI9RqnBp45wW5OyDCfyQZDWOgKcTixAaZGm-aWdNflBhD6TlsJyvCKvQDRAUkrpoNVmBG2kqYR5cnI4YAQ-lccuH3ub75a4f1eolAki80q12hI_qWYzUXG2gN-fmAHYQr8dt67_ZK0To2MZXEBo_LfeVTJwpYKrf11ZC3IDApjUEB1Pk--rkmNViak0IvVOn9o9MLp7JU9muIXJjoAJ0l67DaGu6WyTD6JQFGxMUtiW_kISdrC2gm9iRipBPh-v4iEjar__qJZZd5WRKynDSZDtHz6GZR9bap-Awa6cPd5QsAuPquJupxGOXwFqVGLXl_FhNHemiYlcQ1kLeyMHqukgH0qs3aWfSE6ruiQ_706e-DU1rVg9c0yVnPmvnRHgVbA6lK35e4QHh2Aoalhr6aTBcwpXu7SBYH5CPngXNrzeGBprkfW4nn5Lo6IfHPB2i_YKNp1vDF9lqJj_jI8c3n6EIb2G4XSHPqhvN2xxUdKdwnQFZ4Wsnn9eSgRUFB2vwgIVTLb8hLpPdrqRAhvtaIjFBDGLehxiXJal3bWLIM5bhhiWicpRjDemfDRGf07pvdFlE36Bh6xaRkcJVRcinfsNFUiB36uJcF-wiSYp83-Q3B4jklwkQGGYo-eNqTfWa5s4m4PEXqgQqmYHcVpI-6PBeQVMg5qKYXdiOVkdBLPaDRphncesl3Baq6IhDfZWnvcjAJdJH0V_i5XSrokx7VeRA7G-4VqWE5x_IURLdfy58VIVSJm6vGdwWwpmES-LxQIte6D-kZVtbIyONAjPZIr6OxOuYSFiY42S9oWMCN95ixihk8NvvCW9TiFnQFbjveVaMVyjqINCUFIfeAkKlMgtDFep5Y-ETXG7rTEizHaP-j8utkwAZ1ietdastgjVYpgJjK3_bq4pt1MvbGNn2bDUSCtrgIWzR3ZkG1k-A4_zJwpkkt6jrlNunpYyMNVmmf0DFJllAWxCjL7isK0l-WGnEYqm2FuyAatqDHlUZ-eF9X0hXYmrn3JacTVjFTq_2jk6XIr6iIhpfpqlKgHOQ5X5BTWnTAZYS7Kk3JOwPOdxpgyZiPNxnxWYWAtMbXE',
    category : 'Интервью',
    title : '«Наши тела постоянно мутируют». Дэвид Кроненберг — о «Преступлениях будущего» и Вигго Мортенсене',
    data : '01.09.2022 г.',
    views : 401,
    comments :
    [
      {
        id : 1,
        author :
        {
          firstName : 'Константин',
          lastName : 'Минин',
          mainPhoto : 'https://avatarko.ru/img/kartinka/1/Jack_Vorobei.jpg',
          id : '44444444',
        },
        text : `Про телесные преступления есть необычный фильм Upstream Colour.`,
        data : '2 сентября, 22:52',
        rating : 0,
      },
      {
        id : 2,
        author :
        {
            firstName : 'Кирилл',
            lastName : 'Рогов',
            mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
            id : '172787588',
        },
        text : `по атмосфере напомнил рассказ Люди из песка и шлака`,
        data : '6 сентября, 23:51',
        rating : 6,
        answers :
        [
          {
            id : 3,
            author :
            {
                firstName : 'Евгения',
                lastName : 'Петрова',
                mainPhoto : 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
                id : '11111111',
            },
            consumer :
            {
              firstName : 'Кирилл',
              lastName : 'Рогов',
              mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
              id : '172787588',
            },
            text : `Пользовательский рейтинг на метакритике: 2.2 из 10
            Пользователький рейтинг на роттен томатос: 37% из 100%
            Рейтинг на кинопоиске: 5.1 из 10

            Тем, кто пишет статьи на кинопоиске доверять нельзя.`,
            data : '3 сентября, 02:41',
            rating : -1,
          }
        ]
      },
    ],
    isActive : true,
    article :
    {
      title : '«Наши тела постоянно мутируют». Дэвид Кроненберг — о «Преступлениях будущего» и Вигго Мортенсене',
      data : '01.09.2022 г.',
      mainPhoto : '',
      summary : '1 сентября в российский прокат вышел боди-хоррор «Преступления будущего» — долгожданное возвращение Дэвида Кроненберга в жанр фантастики, в котором канадский режиссер не снимал со времен «Экзистенции». В фильме речь идет о синдроме ускоренной эволюции, из-за которого с телом человека начинают происходить всевозможные изменения. Пока одни герои борются с ними, другие превращают их в современное искусство. Вот что Кроненберг рассказал о создании фильма, работе с Вигго Мортенсеном, а также поделился своими идеями о мутациях и будущем.',
      blocks :
      [
        {
          title : 'Почему у фильма такое название',
          paragraphs :
          [
            'Мои фильмы связаны вне зависимости от того, писал ли я сам сценарий или адаптировал чужое произведение. Я свободно отношусь к тексту в любом случае. Во время монтажа меня нужно останавливать, чтобы я не сократил весь фильм до 72 минут; продюсеры обычно умоляют вернуть обратно вырезанный материал. Сценарий «Преступлений будущего» я написал так давно, что это для меня практически чужой текст. Там был художник-перформер, чье тело находилось в механизме, дающем ему определенные силы. Тогда еще не было фильмов про Железного человека, где эту идею красиво и продумано воплотили в жизнь. Из-за них от этой идеи пришлось отказаться.'
          ],
        },
        {
          title : 'Что означают мутации главного героя',
          paragraphs :
          [
            'Организм Сола Тенсера выращивает новые органы. Они чем-то похожи на опухоли, но при этом выполняют некие неизвестные функции. Эта способность Сола становится частью его жизни. Он ее не отрицает и не разрушает, а превращает в перформативное искусство: во время их выступления его партнерша вырезает ему эти органы и выставляет их напоказ. Таким образом, его тело как бы самостоятельно создает произведения искусства.',
            'Отчасти идея фильма родилась из желания справиться с реальностью собственного тела. Рано или поздно все с этим сталкиваются, даже если речь идет просто о старении или взрослении. Дети все время с этим сталкиваются: пока они взрослеют, их тела меняются. Пубертатный период связан с огромными переменами. По сути, они становятся другими людьми. Человеческая природа подразумевает, что наши тела постоянно меняются и требуют того, чтобы мы к ним приспосабливались и эмоционально, и с точки зрения философии. Опыт Сола — это гипербола нашего опыта.',
          ],
        },
        {
          title : '«Преступления будущего», 1970 год',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/167bwG096/800f205L3gI/PXRsDTYef1xFvpNO_RizS1VfmAPk0dukY5RqOIKGPVNjUx_C0OgZtEpSAx_RApehq8RL55DzKjH7YwuJ7qvomS_2P4vgT2kNxTsBy3_MIo1HSdqDs8IdszbFqi8WVyHeaVjUiRjm1z9TXYUe0cJXIKmUW7CHorz2KvWR0-svtMy54T6XNhN0EEY7Upe-1D4SW5wdByOegivjErv9SwYjGOwSngVVY9P3mpCJ1pCdE2Jmmtq9yCXyrGM10p8zqH5AtCq9FPcfel0H-VQZvxzzm9pbGsmh203tKpr9e01AL5Rt2F1AUm5R_NiVCpkcnZum5BtZO4tn-2kqMtQYNa6_Aj2pfJh92nbRBHuf2fJZNpOVXdgG5tzNbSAcsLECyGKTItOYRdUhVfvS20Wf1lLYpqbbGfIEovXg53PaXbvn8Mo8ZHGb8xK7ncl-mdNzWTTTE9sfiSfWhqrhGfN6So5qnWNW2cSRKZ6z2xpIkBeQm2HmnxXyx6t_I-X5VBxyobDOcOIzF3fS-p8NeFybchf02huXmUpnH0ar7tUyewJCKJlvEl8Hmeeec59QDRNXVd-nL1ZV8c6luy9tsZxZ9-F-QTvj-Ze_Fb_VBDLeHz0Y-9TYW15Gp5sJ4meRtfsJyi1Yo9LcQJ-v2_7SEElRWpgdICdR3vLPIjXn67nX2bqpcUK1qL6Y8pi5HUA_HNn0FXsc11KRCadVwyYh2ru0ycIsmOAb3UpeLBR6FVTD0NZbXymjlpK_Dyc-Y-a6W9Z-bP-FMeRykH7Rd9nD_5pQOFf12J_VEspgHEsjKdKzsIEK4pni2VFDUmuZv9tdjlIY3R4uY95ds46tuKzvPpBZ-2k7jn_ketrw0DXQzThTVvPVvZ3RHRMCLRMGZukZ_TVDiOhc69DSDBnuHz-R0ouYEppRKmsSVbUFrPWnp3BeVHPnMUnybnnS_91z3Ix_k1YykvIbH5LSSCzfjSSj1f0_CUark-8c1gKdaN23VdZOnxIY3CHoXBQ5we037uQ9Wpm5o7bCsWe01fIQ8VfFP5pW9tl5nRdXmUCv1sKkrlh48IsObdCoUtADVSYXfJvVQBpaGZ0r495VOk5td2MicJscuaq8BT2v9dL9170QTTBTG_UT9RFemVjDrxlC4-sTs7_Lg-3Q4ttcgFWgFj5RXALQVVvU7GjX1_VHojUm6rWU1f9i9Ud4bjIQupp71EE31dl9WvyRVl1fyiGUjOdpEHJziUmiXW8UlcOQr9G-Wd7O1VWUGazrV1z2SKv7K-d53N0-JPCOsOh6HDdbtB8Fv9aYNJwykptUUwct2UNk4VL7MIAJZl2vVtxK2S_V8h-ciRtd3ZHv6Fkbuk6oMGmvuhpdeOZxBzcp95e9HnrQzzRc2_9Yd1vW21IL5haMZ69VdHGGg-eZZRqYy5GuFDMYWwZTVZNbaynU07eGa_goJPpcUr2heMR04z-WMt48kcvw0pQ4XbPV2dNeQaidTmruEvf5hsunE2qWkQ2aqZ30ldXBXtmQ0adhn927DCr4Zy35mpb_o35BfGn0VrIdv1yHvtNb-F-80l-U2EHm3Ymi51L9M03I6tsrWllOkKxf-NPQTpPVl1tm7xWTuo0r9qDnuFLRtuD8TfwhedJz2vKYTvAaH_hb8h2T1tpILl-B5mPfeLzNQqcVoVmeg5PrmXVdkIJWkNQfKWZZ3nHE47_mazAelP9iP0K9LnNSNZGxG0D7klR7XTxYEtWaBmadzG8kWfyzyQEjkiIdUAqdqpS6FBpO0B1QGStmnh05yed0o-21kh4x5_fKfGG6H3dV_JTDex6UfVi-VtLbV4pnW8Bqq5Oxcw2B5FThUZDMV6_bNdIYRtBYUVgooNmbd49gdyHrtJWUfiMzgDVm-1y6nnOTT7cSFLVatpGQGpdJrdaCaWvVdbqJyW5Y6JDYixuqlHwVkAGYFJkdJK7S0rgPK7qnrTSQF_Vq_g31rzGTc597245yXlX9Wvya3t9fziQUQmJnnLX8S07uVSqQFMxfIND30FCFm59am6qoE9Y5Biv2oKVz3Je4YTgFfea5lftRepgEN9KbM5j-WVZUV8foHUssZ5PzckaJYhxqmV_PEKnf9hhfCtrVVVfu6JQX-s8l_uesNl5ccKt8yPJkfdp1mrGcSf4Rnn6QcRCf1tUL495Jb2TbfDLBBiVX4NTeg1NpGbSVnkLdV5Cc4Kbc3jUPb3bh6jKdGDKrOQx8YbNV_Nf9Eg1zm5N9l_2c0hxeyScUw-VjW_W_wQmjm6uUlErZZlb8mhqFkJqU3Oir1BQ_j2X1LiM9Xpj_5jEEuOf20_cd_ZrDeV5b9pt_XpNeksGo1wqqp1jyOMXI5FDpW5hI3SmfNtBQRBfXUBOh5pwSekSt8iYvdtZZd2c2Dfqv8V620n1cBz_X3j6Sc1KVFBqGYV8JLmmQOXwJji-TqBTUg16hGbrQnovflNif4iHU1PqIbrOgbrBdGXuo9cq7Kjqcs9b6Wg2zWxP0EH9ZUZVSCq_axeNs03Wzi0mtnaRVHU9X6xY62NyFEh_RXmPpXFJ6Ris7bes1lFpwZnuCNK_zU3DRuhJEtJXbPFo1XNvfX4Gv2cHu4N94s0OH7dAl2pjLlSIcv19cDRbW19AhoBbfc8Oi_KTm-pSceGL1RXio8Zz-EH7fzruRlrsTfpkaFZZMpVaOqmqX9PKLg-BdZRufy1kn1zpbGIIfF1kRL-7fHTHGpjfroPXdVbDrOM-woL0aupG1ksCx1Bz3UnSQEhVfAW6bBOIumj07iQauWqOVUkTQIBE701NAWtBVFSTuGZU7iGe1LGQ8Uxd9aPbEvy_znXvdsRWJcpTcexn1GpcXXonhlkCh5NPwcc8H5NXokRkOkSkXPhFVg9VXEB9m6RbZvUvtNWztOdPYf2w4hTNutlW_2P0UgfjT3rLR9RNZXNUDr1GBaqdYMTUAR-tYolJVSJqqnLpdGAmfERUVImNSFDaHLPes6A',

            'https://kinopoisk-ru.clstorage.net/167bwG096/800f205L3gI/PXRsDTYef1xFvpNO_RizS1VfmAPk0dukY5RqOIKGPVNjUx_C0OgZtEpSAx_RApehq8RL5hEwKHH6owgdbWv92G33P0r3DulZ0G7C3avN4s0FCc8DpMKI82JQ6i8WVyHeaVjUiRjm1z9TXYUe0cJXIKmUW7CHorz2KvWR0-svtMy54T6XNhN0EEY7Upe-1D4SW5wdByOegivjErv9SwYjGOwSngVVY9P3mpCJ1pCdE2Jmmtq9yCXyrGM10p8zqH5AtCq9FPcfel0H-VQZvxzzm9pbGsmh203tKpr9e01AL5Rt2F1AUm5R_NiVCpkcnZum5BtZO4tn-2kqMtQYNa6_Aj2pfJh92nbRBHuf2fJZNpOVXdgG5tzNbSAcsLECyGKTItOYRdUhVfvS20Wf1lLYpqbbGfIEovXg53PaXbvn8Mo8ZHGb8xK7ncl-mdNzWTTTE9sfiSfWhqrhGfN6So5qnWNW2cSRKZ6z2xpIkBeQm2HmnxXyx6t_I-X5VBxyobDOcOIzF3fS-p8NeFybchf02huXmUpnH0ar7tUyewJCKJlvEl8Hmeeec59QDRNXVd-nL1ZV8c6luy9tsZxZ9-F-QTvj-Ze_Fb_VBDLeHz0Y-9TYW15Gp5sJ4meRtfsJyi1Yo9LcQJ-v2_7SEElRWpgdICdR3vLPIjXn67nX2bqpcUK1qL6Y8pi5HUA_HNn0FXsc11KRCadVwyYh2ru0ycIsmOAb3UpeLBR6FVTD0NZbXymjlpK_Dyc-Y-a6W9Z-bP-FMeRykH7Rd9nD_5pQOFf12J_VEspgHEsjKdKzsIEK4pni2VFDUmuZv9tdjlIY3R4uY95ds46tuKzvPpBZ-2k7jn_ketrw0DXQzThTVvPVvZ3RHRMCLRMGZukZ_TVDiOhc69DSDBnuHz-R0ouYEppRKmsSVbUFrPWnp3BeVHPnMUnybnnS_91z3Ix_k1YykvIbH5LSSCzfjSSj1f0_CUark-8c1gKdaN23VdZOnxIY3CHoXBQ5we037uQ9Wpm5o7bCsWe01fIQ8VfFP5pW9tl5nRdXmUCv1sKkrlh48IsObdCoUtADVSYXfJvVQBpaGZ0r495VOk5td2MicJscuaq8BT2v9dL9170QTTBTG_UT9RFemVjDrxlC4-sTs7_Lg-3Q4ttcgFWgFj5RXALQVVvU7GjX1_VHojUm6rWU1f9i9Ud4bjIQupp71EE31dl9WvyRVl1fyiGUjOdpEHJziUmiXW8UlcOQr9G-Wd7O1VWUGazrV1z2SKv7K-d53N0-JPCOsOh6HDdbtB8Fv9aYNJwykptUUwct2UNk4VL7MIAJZl2vVtxK2S_V8h-ciRtd3ZHv6Fkbuk6oMGmvuhpdeOZxBzcp95e9HnrQzzRc2_9Yd1vW21IL5haMZ69VdHGGg-eZZRqYy5GuFDMYWwZTVZNbaynU07eGa_goJPpcUr2heMR04z-WMt48kcvw0pQ4XbPV2dNeQaidTmruEvf5hsunE2qWkQ2aqZ30ldXBXtmQ0adhn927DCr4Zy35mpb_o35BfGn0VrIdv1yHvtNb-F-80l-U2EHm3Ymi51L9M03I6tsrWllOkKxf-NPQTpPVl1tm7xWTuo0r9qDnuFLRtuD8TfwhedJz2vKYTvAaH_hb8h2T1tpILl-B5mPfeLzNQqcVoVmeg5PrmXVdkIJWkNQfKWZZ3nHE47_mazAelP9iP0K9LnNSNZGxG0D7klR7XTxYEtWaBmadzG8kWfyzyQEjkiIdUAqdqpS6FBpO0B1QGStmnh05yed0o-21kh4x5_fKfGG6H3dV_JTDex6UfVi-VtLbV4pnW8Bqq5Oxcw2B5FThUZDMV6_bNdIYRtBYUVgooNmbd49gdyHrtJWUfiMzgDVm-1y6nnOTT7cSFLVatpGQGpdJrdaCaWvVdbqJyW5Y6JDYixuqlHwVkAGYFJkdJK7S0rgPK7qnrTSQF_Vq_g31rzGTc597245yXlX9Wvya3t9fziQUQmJnnLX8S07uVSqQFMxfIND30FCFm59am6qoE9Y5Biv2oKVz3Je4YTgFfea5lftRepgEN9KbM5j-WVZUV8foHUssZ5PzckaJYhxqmV_PEKnf9hhfCtrVVVfu6JQX-s8l_uesNl5ccKt8yPJkfdp1mrGcSf4Rnn6QcRCf1tUL495Jb2TbfDLBBiVX4NTeg1NpGbSVnkLdV5Cc4Kbc3jUPb3bh6jKdGDKrOQx8YbNV_Nf9Eg1zm5N9l_2c0hxeyScUw-VjW_W_wQmjm6uUlErZZlb8mhqFkJqU3Oir1BQ_j2X1LiM9Xpj_5jEEuOf20_cd_ZrDeV5b9pt_XpNeksGo1wqqp1jyOMXI5FDpW5hI3SmfNtBQRBfXUBOh5pwSekSt8iYvdtZZd2c2Dfqv8V620n1cBz_X3j6Sc1KVFBqGYV8JLmmQOXwJji-TqBTUg16hGbrQnovflNif4iHU1PqIbrOgbrBdGXuo9cq7Kjqcs9b6Wg2zWxP0EH9ZUZVSCq_axeNs03Wzi0mtnaRVHU9X6xY62NyFEh_RXmPpXFJ6Ris7bes1lFpwZnuCNK_zU3DRuhJEtJXbPFo1XNvfX4Gv2cHu4N94s0OH7dAl2pjLlSIcv19cDRbW19AhoBbfc8Oi_KTm-pSceGL1RXio8Zz-EH7fzruRlrsTfpkaFZZMpVaOqmqX9PKLg-BdZRufy1kn1zpbGIIfF1kRL-7fHTHGpjfroPXdVbDrOM-woL0aupG1ksCx1Bz3UnSQEhVfAW6bBOIumj07iQauWqOVUkTQIBE701NAWtBVFSTuGZU7iGe1LGQ8Uxd9aPbEvy_znXvdsRWJcpTcexn1GpcXXonhlkCh5NPwcc8H5NXokRkOkSkXPhFVg9VXEB9m6RbZvUvtNWztOdPYf2w4hTNutlW_2P0UgfjT3rLR9RNZXNUDr1GBaqdYMTUAR-tYolJVSJqqnLpdGAmfERUVImNSFDaHLPes6A'
          ],
        },
        {
          title : 'Какая была идея у фильма изначально',
          paragraphs :
          [
            'Мои фильмы связаны вне зависимости от того, писал ли я сам сценарий или адаптировал чужое произведение. Я свободно отношусь к тексту в любом случае. Во время монтажа меня нужно останавливать, чтобы я не сократил весь фильм до 72 минут; продюсеры обычно умоляют вернуть обратно вырезанный материал. Сценарий «Преступлений будущего» я написал так давно, что это для меня практически чужой текст. Там был художник-перформер, чье тело находилось в механизме, дающем ему определенные силы. Тогда еще не было фильмов про Железного человека, где эту идею красиво и продумано воплотили в жизнь. Из-за них от этой идеи пришлось отказаться.',
          ],
        },
        {
          title : 'Насколько реалистичен фильм',
          paragraphs :
          [
            'Мы точно меняемся, хоть и не так явно, как я это показываю. Раньше считалось, что мозг — статичный орган, который перестает развиваться, когда мы достигаем зрелости. Теперь известно, что это не так, а тело — динамическая среда, в которой постоянно происходят изменения. Знаменитый нобелевский лауреат Джеральд Эдельман говорил, что человеческий мозг устроен совсем не как компьютер, а скорее, как тропический лес, в котором нейроны и другие элементы постоянно борются друг с другом за доминирование, реагируя на то, что мы видим, слышим и чувствуем обонянием. Изучение языков провоцирует нейронные изменения, то есть физические изменения в мозгу. Некоторые участки мозга могут сморщиться, если бездействуют. Мозг — суперорган человеческого существования, он постоянно меняется и мутирует. Пищеварительная система — это микробиом, то есть живые организмы, которые постоянно держат связь с мозгом. Некоторые герои фильма способны переваривать пластик. А что, микропластик сейчас можно найти в организме любого человека на планете!',
          ],
        },
        {
          title : '«Преступления будущего»',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/167bwG096/800f205L3gI/PXRsDTYef1xFvpNO_RizS1VfmAPk0dukY5RqOIKGPVNjUx_C0OgZtEpSAx_RApehq8RL5hEwKHH6ox8c7X7pmK_3KovjW2lZEbpW3OvZY9mTX42WMJcIprfFqi8WVyHeaVjUiRjm1z9TXYUe0cJXIKmUW7CHorz2KvWR0-svtMy54T6XNhN0EEY7Upe-1D4SW5wdByOegivjErv9SwYjGOwSngVVY9P3mpCJ1pCdE2Jmmtq9yCXyrGM10p8zqH5AtCq9FPcfel0H-VQZvxzzm9pbGsmh203tKpr9e01AL5Rt2F1AUm5R_NiVCpkcnZum5BtZO4tn-2kqMtQYNa6_Aj2pfJh92nbRBHuf2fJZNpOVXdgG5tzNbSAcsLECyGKTItOYRdUhVfvS20Wf1lLYpqbbGfIEovXg53PaXbvn8Mo8ZHGb8xK7ncl-mdNzWTTTE9sfiSfWhqrhGfN6So5qnWNW2cSRKZ6z2xpIkBeQm2HmnxXyx6t_I-X5VBxyobDOcOIzF3fS-p8NeFybchf02huXmUpnH0ar7tUyewJCKJlvEl8Hmeeec59QDRNXVd-nL1ZV8c6luy9tsZxZ9-F-QTvj-Ze_Fb_VBDLeHz0Y-9TYW15Gp5sJ4meRtfsJyi1Yo9LcQJ-v2_7SEElRWpgdICdR3vLPIjXn67nX2bqpcUK1qL6Y8pi5HUA_HNn0FXsc11KRCadVwyYh2ru0ycIsmOAb3UpeLBR6FVTD0NZbXymjlpK_Dyc-Y-a6W9Z-bP-FMeRykH7Rd9nD_5pQOFf12J_VEspgHEsjKdKzsIEK4pni2VFDUmuZv9tdjlIY3R4uY95ds46tuKzvPpBZ-2k7jn_ketrw0DXQzThTVvPVvZ3RHRMCLRMGZukZ_TVDiOhc69DSDBnuHz-R0ouYEppRKmsSVbUFrPWnp3BeVHPnMUnybnnS_91z3Ix_k1YykvIbH5LSSCzfjSSj1f0_CUark-8c1gKdaN23VdZOnxIY3CHoXBQ5we037uQ9Wpm5o7bCsWe01fIQ8VfFP5pW9tl5nRdXmUCv1sKkrlh48IsObdCoUtADVSYXfJvVQBpaGZ0r495VOk5td2MicJscuaq8BT2v9dL9170QTTBTG_UT9RFemVjDrxlC4-sTs7_Lg-3Q4ttcgFWgFj5RXALQVVvU7GjX1_VHojUm6rWU1f9i9Ud4bjIQupp71EE31dl9WvyRVl1fyiGUjOdpEHJziUmiXW8UlcOQr9G-Wd7O1VWUGazrV1z2SKv7K-d53N0-JPCOsOh6HDdbtB8Fv9aYNJwykptUUwct2UNk4VL7MIAJZl2vVtxK2S_V8h-ciRtd3ZHv6Fkbuk6oMGmvuhpdeOZxBzcp95e9HnrQzzRc2_9Yd1vW21IL5haMZ69VdHGGg-eZZRqYy5GuFDMYWwZTVZNbaynU07eGa_goJPpcUr2heMR04z-WMt48kcvw0pQ4XbPV2dNeQaidTmruEvf5hsunE2qWkQ2aqZ30ldXBXtmQ0adhn927DCr4Zy35mpb_o35BfGn0VrIdv1yHvtNb-F-80l-U2EHm3Ymi51L9M03I6tsrWllOkKxf-NPQTpPVl1tm7xWTuo0r9qDnuFLRtuD8TfwhedJz2vKYTvAaH_hb8h2T1tpILl-B5mPfeLzNQqcVoVmeg5PrmXVdkIJWkNQfKWZZ3nHE47_mazAelP9iP0K9LnNSNZGxG0D7klR7XTxYEtWaBmadzG8kWfyzyQEjkiIdUAqdqpS6FBpO0B1QGStmnh05yed0o-21kh4x5_fKfGG6H3dV_JTDex6UfVi-VtLbV4pnW8Bqq5Oxcw2B5FThUZDMV6_bNdIYRtBYUVgooNmbd49gdyHrtJWUfiMzgDVm-1y6nnOTT7cSFLVatpGQGpdJrdaCaWvVdbqJyW5Y6JDYixuqlHwVkAGYFJkdJK7S0rgPK7qnrTSQF_Vq_g31rzGTc597245yXlX9Wvya3t9fziQUQmJnnLX8S07uVSqQFMxfIND30FCFm59am6qoE9Y5Biv2oKVz3Je4YTgFfea5lftRepgEN9KbM5j-WVZUV8foHUssZ5PzckaJYhxqmV_PEKnf9hhfCtrVVVfu6JQX-s8l_uesNl5ccKt8yPJkfdp1mrGcSf4Rnn6QcRCf1tUL495Jb2TbfDLBBiVX4NTeg1NpGbSVnkLdV5Cc4Kbc3jUPb3bh6jKdGDKrOQx8YbNV_Nf9Eg1zm5N9l_2c0hxeyScUw-VjW_W_wQmjm6uUlErZZlb8mhqFkJqU3Oir1BQ_j2X1LiM9Xpj_5jEEuOf20_cd_ZrDeV5b9pt_XpNeksGo1wqqp1jyOMXI5FDpW5hI3SmfNtBQRBfXUBOh5pwSekSt8iYvdtZZd2c2Dfqv8V620n1cBz_X3j6Sc1KVFBqGYV8JLmmQOXwJji-TqBTUg16hGbrQnovflNif4iHU1PqIbrOgbrBdGXuo9cq7Kjqcs9b6Wg2zWxP0EH9ZUZVSCq_axeNs03Wzi0mtnaRVHU9X6xY62NyFEh_RXmPpXFJ6Ris7bes1lFpwZnuCNK_zU3DRuhJEtJXbPFo1XNvfX4Gv2cHu4N94s0OH7dAl2pjLlSIcv19cDRbW19AhoBbfc8Oi_KTm-pSceGL1RXio8Zz-EH7fzruRlrsTfpkaFZZMpVaOqmqX9PKLg-BdZRufy1kn1zpbGIIfF1kRL-7fHTHGpjfroPXdVbDrOM-woL0aupG1ksCx1Bz3UnSQEhVfAW6bBOIumj07iQauWqOVUkTQIBE701NAWtBVFSTuGZU7iGe1LGQ8Uxd9aPbEvy_znXvdsRWJcpTcexn1GpcXXonhlkCh5NPwcc8H5NXokRkOkSkXPhFVg9VXEB9m6RbZvUvtNWztOdPYf2w4hTNutlW_2P0UgfjT3rLR9RNZXNUDr1GBaqdYMTUAR-tYolJVSJqqnLpdGAmfERUVImNSFDaHLPes6A',

            'https://kinopoisk-ru.clstorage.net/167bwG096/800f205L3gI/PXRsDTYef1xFvpNO_RizS1VfmAPk0dukY5RqOIKGPVNjUx_C0OgZtEpSAx_RApehq8RL55DzKjH7Yx9KLytoTO13Pp92mv_PEG-W3ChMt80G3s6W5NdJpuOEai8WVyHeaVjUiRjm1z9TXYUe0cJXIKmUW7CHorz2KvWR0-svtMy54T6XNhN0EEY7Upe-1D4SW5wdByOegivjErv9SwYjGOwSngVVY9P3mpCJ1pCdE2Jmmtq9yCXyrGM10p8zqH5AtCq9FPcfel0H-VQZvxzzm9pbGsmh203tKpr9e01AL5Rt2F1AUm5R_NiVCpkcnZum5BtZO4tn-2kqMtQYNa6_Aj2pfJh92nbRBHuf2fJZNpOVXdgG5tzNbSAcsLECyGKTItOYRdUhVfvS20Wf1lLYpqbbGfIEovXg53PaXbvn8Mo8ZHGb8xK7ncl-mdNzWTTTE9sfiSfWhqrhGfN6So5qnWNW2cSRKZ6z2xpIkBeQm2HmnxXyx6t_I-X5VBxyobDOcOIzF3fS-p8NeFybchf02huXmUpnH0ar7tUyewJCKJlvEl8Hmeeec59QDRNXVd-nL1ZV8c6luy9tsZxZ9-F-QTvj-Ze_Fb_VBDLeHz0Y-9TYW15Gp5sJ4meRtfsJyi1Yo9LcQJ-v2_7SEElRWpgdICdR3vLPIjXn67nX2bqpcUK1qL6Y8pi5HUA_HNn0FXsc11KRCadVwyYh2ru0ycIsmOAb3UpeLBR6FVTD0NZbXymjlpK_Dyc-Y-a6W9Z-bP-FMeRykH7Rd9nD_5pQOFf12J_VEspgHEsjKdKzsIEK4pni2VFDUmuZv9tdjlIY3R4uY95ds46tuKzvPpBZ-2k7jn_ketrw0DXQzThTVvPVvZ3RHRMCLRMGZukZ_TVDiOhc69DSDBnuHz-R0ouYEppRKmsSVbUFrPWnp3BeVHPnMUnybnnS_91z3Ix_k1YykvIbH5LSSCzfjSSj1f0_CUark-8c1gKdaN23VdZOnxIY3CHoXBQ5we037uQ9Wpm5o7bCsWe01fIQ8VfFP5pW9tl5nRdXmUCv1sKkrlh48IsObdCoUtADVSYXfJvVQBpaGZ0r495VOk5td2MicJscuaq8BT2v9dL9170QTTBTG_UT9RFemVjDrxlC4-sTs7_Lg-3Q4ttcgFWgFj5RXALQVVvU7GjX1_VHojUm6rWU1f9i9Ud4bjIQupp71EE31dl9WvyRVl1fyiGUjOdpEHJziUmiXW8UlcOQr9G-Wd7O1VWUGazrV1z2SKv7K-d53N0-JPCOsOh6HDdbtB8Fv9aYNJwykptUUwct2UNk4VL7MIAJZl2vVtxK2S_V8h-ciRtd3ZHv6Fkbuk6oMGmvuhpdeOZxBzcp95e9HnrQzzRc2_9Yd1vW21IL5haMZ69VdHGGg-eZZRqYy5GuFDMYWwZTVZNbaynU07eGa_goJPpcUr2heMR04z-WMt48kcvw0pQ4XbPV2dNeQaidTmruEvf5hsunE2qWkQ2aqZ30ldXBXtmQ0adhn927DCr4Zy35mpb_o35BfGn0VrIdv1yHvtNb-F-80l-U2EHm3Ymi51L9M03I6tsrWllOkKxf-NPQTpPVl1tm7xWTuo0r9qDnuFLRtuD8TfwhedJz2vKYTvAaH_hb8h2T1tpILl-B5mPfeLzNQqcVoVmeg5PrmXVdkIJWkNQfKWZZ3nHE47_mazAelP9iP0K9LnNSNZGxG0D7klR7XTxYEtWaBmadzG8kWfyzyQEjkiIdUAqdqpS6FBpO0B1QGStmnh05yed0o-21kh4x5_fKfGG6H3dV_JTDex6UfVi-VtLbV4pnW8Bqq5Oxcw2B5FThUZDMV6_bNdIYRtBYUVgooNmbd49gdyHrtJWUfiMzgDVm-1y6nnOTT7cSFLVatpGQGpdJrdaCaWvVdbqJyW5Y6JDYixuqlHwVkAGYFJkdJK7S0rgPK7qnrTSQF_Vq_g31rzGTc597245yXlX9Wvya3t9fziQUQmJnnLX8S07uVSqQFMxfIND30FCFm59am6qoE9Y5Biv2oKVz3Je4YTgFfea5lftRepgEN9KbM5j-WVZUV8foHUssZ5PzckaJYhxqmV_PEKnf9hhfCtrVVVfu6JQX-s8l_uesNl5ccKt8yPJkfdp1mrGcSf4Rnn6QcRCf1tUL495Jb2TbfDLBBiVX4NTeg1NpGbSVnkLdV5Cc4Kbc3jUPb3bh6jKdGDKrOQx8YbNV_Nf9Eg1zm5N9l_2c0hxeyScUw-VjW_W_wQmjm6uUlErZZlb8mhqFkJqU3Oir1BQ_j2X1LiM9Xpj_5jEEuOf20_cd_ZrDeV5b9pt_XpNeksGo1wqqp1jyOMXI5FDpW5hI3SmfNtBQRBfXUBOh5pwSekSt8iYvdtZZd2c2Dfqv8V620n1cBz_X3j6Sc1KVFBqGYV8JLmmQOXwJji-TqBTUg16hGbrQnovflNif4iHU1PqIbrOgbrBdGXuo9cq7Kjqcs9b6Wg2zWxP0EH9ZUZVSCq_axeNs03Wzi0mtnaRVHU9X6xY62NyFEh_RXmPpXFJ6Ris7bes1lFpwZnuCNK_zU3DRuhJEtJXbPFo1XNvfX4Gv2cHu4N94s0OH7dAl2pjLlSIcv19cDRbW19AhoBbfc8Oi_KTm-pSceGL1RXio8Zz-EH7fzruRlrsTfpkaFZZMpVaOqmqX9PKLg-BdZRufy1kn1zpbGIIfF1kRL-7fHTHGpjfroPXdVbDrOM-woL0aupG1ksCx1Bz3UnSQEhVfAW6bBOIumj07iQauWqOVUkTQIBE701NAWtBVFSTuGZU7iGe1LGQ8Uxd9aPbEvy_znXvdsRWJcpTcexn1GpcXXonhlkCh5NPwcc8H5NXokRkOkSkXPhFVg9VXEB9m6RbZvUvtNWztOdPYf2w4hTNutlW_2P0UgfjT3rLR9RNZXNUDr1GBaqdYMTUAR-tYolJVSJqqnLpdGAmfERUVImNSFDaHLPes6A',
          ]
        }
      ],
      card :
      {
        caption : '2022, Канада, Великобритания',
        title : 'Преступления будущего',
        genre : 'фантастика, триллер',
        duration : '1 ч 47 мин',
        age : '18+',
        producer: 'Дэвид Кроненберг',
        roles : 'Вигго Мортенсен, Леа Сейду, Кристен Стюарт',
        poster:  'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/45321a31-4240-495d-abe8-4433ee861626/200x300',
        rating : '5.9',
      },
    }
  },
  {
    id : 1,
    mainPhoto : 'https://www.film.ru/sites/default/files/images/88-04(2).jpg',
    category : 'Рецензия',
    title : '«Самаритянин»: Сталлоне в малоподвижном кинокомиксе категории Б',
    data : '29.08.2022 г.',
    views : 1234,
    comments :
    [
      {
        id : 4,
        author :
        {
          firstName : 'Константин',
          lastName : 'Минин',
          mainPhoto : 'https://avatarko.ru/img/kartinka/1/Jack_Vorobei.jpg',
          id : '44444444',
        },
        text : `Жаль, режиссер Оверлорда внушал доверия, но тут да все очень сухо вышло, где то наивненько, где то драйва не хватило, практически везде, более менее в финале разгулялись, но не надолго, сюжетный твист читается с первых минут, а его протянули, аж до конца, и представили так будто это откровение, ну и сами персонажи, это не персонажи, а их контуры, пустоватый фильм вышел, кто пишет про ламповую атмосферу, но я такого не заметил, зато повсюду одни шаблоны.`,
        data : '29 августа, 20:39',
        rating : 0,
      },
      {
        id : 5,
        author :
        {
          firstName : 'Константин',
          lastName : 'Минин',
          mainPhoto : 'https://avatarko.ru/img/kartinka/1/Jack_Vorobei.jpg',
          id : '44444444',
        },
        text : `Оценки прям низкие, хотя я видел сериалы и фильмы с такой же оценкой и они были намного хуже Самаритянина. В целом фильм оставляет положительное впечатление и рекомендую людям кто хочет просто хорошо провести время за олдскултным, добрым фильмом без всяких трендов и выпячивание ради выпячивания)`,
        data : '29 августа, 22:51',
        rating : 7,
      },
    ],
    isActive : true,
    article :
    {
      title : '«Самаритянин»: Сталлоне в малоподвижном кинокомиксе категории Б',
      data : '29.08.2022 г.',
      mainPhoto : 'https://www.film.ru/sites/default/files/images/88-04(2).jpg',
      summary : `Фильм-парадокс, вышедший на Amazon Prime. Треш-комикс, но с детским рейтингом. Со Сталлоне, но почти без экшена. Снятый бодрым режиссером Эйвери, но без сил и фантазии. Мы расстроены.`,
      blocks :
      [
        {
          paragraphs :
          [
            'В Гранит-Сити росли два феноменально сильных и почти неуязвимых брата, и, когда испуганные соседи сожгли их родителей, один стал супергероем Самаритянином, а второй — суперзлодеем Немезидой; в решающей схватке на электростанции оба погибли от взрыва. Прошло четверть века. Любители теорий заговора, среди которых оказался 13-летний Сэм (Джейвон Уолтон), верят, что Самаритянин выжил (хотя на это абсолютно ничего не указывает). Более того, Сэм приходит к выводу, что супергерой на пенсии по счастливому совпадению поселился прямо напротив него — это одинокий грузный мусорщик с подозрительным именем Джо Смит (Сильвестр Сталлоне).',
            'Во времена расцвета Сильвестра Сталлоне комиксы про супергероев еще не были основой киномейнстрима, и из его ролей такого плана на память приходит разве что «Судья Дредд» (провалившийся, но со временем отчасти реабилитированный). Зато на старости лет артист смог немного наверстать упущенное: Джеймс Ганн то снимет его на втором плане в «Стражах Галактики», то сделает акулой в «Отряде самоубийц». И вот наконец-то сольный выход — «Самаритянин» молодого австралийца Джулиуса Эйвери. Увы, этот интригующий релиз, кажется, обречен на то, чтобы покрыться цифровой пылью где-то на задних полках библиотеки Amazon.',
            'Предыдущим фильмом Эйвери был не самый оригинальный, но бодрый наци-хоррор «Оверлорд», по которому видно, что руки у режиссера растут откуда надо и категорию Б он чувствует хорошо. «Самаритянин», по сути, тоже, конечно, типичная «бэха», но тут Эйвери как будто немного стесняется того, что работает в этом сегменте. Нерешительность не идет такой картине на пользу, как и детский рейтинг PG-13. По большому счету на весь фильм есть одна-единственная неожиданная, жестокая и смешная сценка, и то она с потрохами выдана в трейлере.',
          ],
        },
        {
          title : 'Пилу Асбек и Сильвестр Сталлоне',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu1eW3QZeNS3oBqCOvgYxk_nUm2F-QYvbWq4PgClWP_J15GiI2GEafngu7gfRW9ZVgFs0oOj5ufVc6xU2w_tYCZgVFC_UrDaeSsDjbz5GAaPZlA9la6Qf_st6SiP_5ypHE9Dpn3oDvctcSMyzRg808AdKhsZP20-zqq2SkkV8_8npBTRs5v63XXvg4w3tpEXz-UT_ZOpWfG4MOfjTLtPr1QJCeKxoIayJPhne0ra950I126QlnFt-szn9MuE2vQ8qiUaEfVX8txxrEjK8fyQGYxiFTRUoBA4snSgbQMzQSifQ8Tu8ypIcWS5KrhK1LHbh15hk1NxoTIEaDvCjBE68mshFRi3HfJU96bFwnz3Ht3L6FU4VKtRfTC2rKFOvswomATNJrrsT7Alue-yitT8lAmeaVLScO6yACvzRIrSdfdhKlFWdte7VnaiS458MlfZiylVP12hnnUycuGhDXPM6xOGA-m76QTy7TTifMjd_hoF2KgTkr1pMcvmtk3MlX6wYCMUWv7ccFx9ZkGINb3ZX4-qn7wc55vwM7Uk4Er-DSKcQU1pvmMOPye1bL3GmfudCFdi21F8rrOEpvdJjNr0NSMi3RZ8VLOWeyuDD718FNfBZJhyUmffunJ6aefB8Q9oWUkDozrsj7rrfeHzTRg2WQNfplWS_WwxxSuyxY1c-7BlLp_Z8hMx3jUsS034-JRbS6yYd1qj23H_diduxTiEaB_IRmA95MH9YzfqMQYTN9CPWGCZXfGhtsmrMI3Mk3K-IWsUVn4cdhc1LItOuDcUV0skkXdUrZY5-L8ubMj2Aitcg4rr_GNOuuJ_7vrHkj5QyFQk3xH2ob-F5HoAyxk1P62p35G7UzEUcilLBr35VpsBqF7yGu5at3f26a4F8ADv14HGrPakDraieS18Tl5y3g7c6ZddtmxwDWa-y8gbsbKjopnQdtU2EHXqC0Nx_x5fBiTdNBHo1juy823gi_mHZJcIgim84oH45H2ve8eVO5kGVqFX0v6k8YPgfAMCHLK6oSaYUrrT9Ru9KkzMuDcWH8dgWboVrJK_cztsJ4v6TqeZwc9ouuLLNuX46_zGlHCUgRHo0RI8o7mAo_lLAdRzsCUjXdT5lrHSNqpCADK615eO5h_22qMYefm1b6aMu8EtnQBK4rKgjr7k8CmyT9tz0QHc7BJftOJwSiA2xsxc9DWhJFoYf1_1EnGsiARxf9iUTWlSt9gokPh9v2ikxrrOq9FOQen85cQ3aneneodScRoF1mUf0fVncUVjdwiO1bl_YG7R0L3e-Jf7442OfL0YkYZsV3vXpB97_bst7wu5gGtRwUtuuiwFPiK4azsLnb8ehZenW1J0bX5NonIKgFK2eesv3NH22DETPSbKQDh4lxZMope8Ey2f-v__ZWaGuk6qn0vL6f-iz7hidOa7iZZ8lcmQohJRP-T3SKAxQ0udNPVhZl5Qfdt2Vb0gjQ2w9BnezeVXPtps37Z19CXszbQBrJwEy6B6pYF15r8m-YcY-lGCUGCQ2Xniscao8gWFm_05a2QSGLzV8Nv3roeMuPGWm4HsWrzboZPwO7xlbgV8jCXZAoMqPiIAsCy-an2OGj6QgFjhmdV-pTKDaDeIi1z9-qQqlxB123gb8WzLRX9-WdyIJVa_UO6UMb1wbmRM84Fg2UfObrpkQ3wkuSx1D5i5WQabIJ4U8GE5SKoxSwET9floKRabNVHx1fvvgw65eJEXBqjYfJDsVvI18G4sBnoH5JVLR-d_oYjxbrbjdYtSdlMPEelXX7HjOEtnMgAJ2va-6WTdlDRe8Z8w4MuN-vpc20FimTVVqVL5-HToK0IxiuvUD8mju-LJNis2r3LFnbmcyB0tl1c_5DgNZ_AFhBo4eShl3Fl0WbedumZFR_q3HReFIdP_0KeRcjh6KWeOvImo0QCG4HUrAHklOOIzy117XYIYIZ8RMW3-QiI2CARavHoqqlSc8t2-0HashM_z_1WUDSReOpBpn7v0s66uQ_PHb1SJgmI2Y8e_K_CjsMESf5kH16lX1njkvY6gNEqDHL2_pyZfWv0fcNC3YMDKvzGW1wQuWX3d7NS3sLYtac01xGXTj4novS7FP6QyrTPH1TLcydDhn1y2rjuLpj8Li5p1-OXrEdR8FT_V9SeDjfr-lt7EoRP8FSjesnKwbW5MPs5gV0HDab_hzTWq_-a9hpsy2I1WYZcb9auwgC3zQAtY9HRpY9Fa9Vx6lbEhggd_OdfUASBWNhfoGHF7faBtBjyJYl2LDKR6Igk4I36vPMLS-lvCWO8TVv8pMQ2jd0IME_K9qmYd0vFRuBM7IIUPen5YWActkvWcIRyw-v0kK8z8jWLWyYfqtqmGdq727fSI2npUi5dl25z87HWFrDdMSpCyeO8rFx56lDjXt2hBDn28FlCEJRr-3KBWcfV3LO8OeIfi0IvKpHYjib5juOM8R9E2HE-XKZEe9yR9QCB0QUUfvTggZxEV8531nHjgjIi7uNAfCS-fcBQo1_E_tCTng7POo99PjOr7K4b06fCi-U_WPJSA3GaYXXvp9YKq8IWMnzs2ZGRRm_Zc85T26EVPfDkZEA7s3v6dr9_3NfQjKE06j-iZQ4WmOaHN9So4LHpPmzPUiBui3ds47fDNKPLKhFowcerpn5N2GPPV-GRMD_R51RuLp1t8FKWb__Q4LuwNMgUknAoGIbxlCLWmsus9zhA41k7crpldt-q4yKvxzQPa-jjjZddac9C5mrPhTYoz_tmTB2jRNVBh2Liyd2HvzDxGaBlCBOg3oYR85TEjMsLTv9yLXmSSXr8k80qtP0SJn7CwZSLemrFX8RTy70IOcHQYFsFm2PyTpBp3sLTkqUE6z-zQhoSp8SvFMuW4KXXH0_scQRBp0Vx2a76GonBKzBPy_OIt0NB-HPkT9yiPhrSy1pAEKFd8WyFZO3p3K8',
          ],
        },
        {
          paragraphs :
          [
            'Заметно, что фильм писался как основательная, взрослая супергеройская драма вроде, допустим, «Логана», на которую тут катастрофически не хватает ни финансовых (на что недвусмысленно указывает скудный и безобразный CGI), ни творческих ресурсов. Интрига вокруг личности Самаритянина смехотворна и шита белыми нитками. Урбанистические проблемы молча сворованы из Готэма: вокруг нищета и беззаконие, и юный Сэм ходит по дурной дорожке, пока мама где-то моет пол, но из этого в итоге не следует вообще ничего. Экшена приходится ждать час, и выглядит он вяло и бескровно, несмотря на использование мусоровоза и огромной кувалды. Главный злодей — датчанин Пилу Асбек, который играл одного из самых бессмысленных персонажей «Игры престолов», а здесь выглядит пластмассовой копией Бэйна-Харди, собранной детьми на филиппинской фабрике.',
            'Сталлоне — подлинный, и те крохи удовольствия, которые можно отыскать в фильме, отвалились от его ветшающей, полупарализованной, но все еще живой харизмы. Другое дело, что в характер героя не вписано (хотя возможности были) ничего интересного, и Слаю приходится функционировать в своем обычном модусе пожилого мистера Бальбоа. Жизненные уроки, которые он преподносит юному Сэму, глубиной не отличаются, хотя специального упоминания достоин эпизод, где он ни с того ни с сего ломает у себя на кухне тостер («Смотри, сломать что-нибудь легко»).',
            'Урок самому Сталлоне, видимо, заключается в том, что в отсутствие хорошего сценария нет смысла соваться в перегретый, перенаселенный жанр, и, возможно, иной раз лучше просто озвучить акулу.',
          ]
        },
      ],
      card :
      {
        caption : '2022, США',
        title : 'Самаритянин',
        genre : 'фантастика, фэнтези',
        duration : '1 ч 42 мин',
        producer: 'Джулиус Эйвери',
        roles : 'Сильвестр Сталлоне, Джейвон Уолтон, Пилу Асбек',
        poster:  'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/3b436175-8c8d-4507-a2e4-f1846a769e1e/200x300',
        rating : '5.7',
      },
    }
  },
  {
    id : 2,
    mainPhoto : 'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cfeh2H/x-d3ZEGvLLWrKw1QORkCk7_QVjD0cgGjaQKKmjswKm3Y2iSZeNI2cYuFeO8JQduwRusE_pK7r_87-NWkDD3I1FI0I3SRqfrgui0KRK5YwlQ5xYK0dGWVcnxVHc23O-Hn1Jc8EfFfOSlMA_zvXxdOJ9e9k-mQ6L17ImIQMI0k2cZNaryrR_kjPunwzVu5UIWdYhld-On_DOx7jAPStv-hZthedhb9m7kox0x1_h-UDefRulpn0_WzsOEmwzbFYpOCgSI07k5wZ3duMgYVcZrBFu1XXTzrsk5ttkMEETt-r6aekn4X-dhybgEGdPBcEwsuFrMTrtmx9D6urs2xDihejsOo-i0OMSq0bjxAU_4TzhUoV5H0Iz2BZL6Iyt_6eqCv3Nh-n3_S_2aMDfo0G5lLIha4Uutbc_jy4yNAsQlvV0aKbv3sTzHvvq48DRxw08bUqVbedCd-SeK4S4Xa8HHk4R0SN53-1nEqjMizMFtYSyUfsp3jWbe18qDuQHKC7ZmJi2u2roe84nDsNQ-SfJUHlembWffsswzr_gyOnfF4oe2VGfyX9RJ7LMVHPbZf24GmXvSYZlhwcLPnY4G7DSrXCY7hvGNNPWyx4nEKFXEazV0qWp51o_NN775DBBiyeWihF5E_XfNfuatNhvA-ERWGaBB03CwZvz20bGyD8cgimcMKbj3mgfXh_2nwx9F6EgnT6dtc9-J-CGO_xQud9HUqbpnWvRW9WHHpCAJwspvdhm0YsNjnlLNzPWilCPGOo9wADWZzoQm_6j0i-8ZY9hXPHybXkXDu_oor_gqCk7AwoeEV2frcvVix6kjN8L6bVY9tFr6Vr5N6ej9la46yzegQi8zh_OaI9-7243rP2LEZi1lq0JF5orHApvmAxRI88mom0Ja93_pdcaJNA7Jy0dlA6Fj9WSEcM739qG2MdkbqXMzGJrzqyPEtcGq2g1Z3kUYRJpBctiozBG36gkGfMvksZx0Qutv9njHngQX6ttZVwy5T-9Wt2TY5syZkC_0GYxhJjGAzpI71r3fjfcoRfxsO0anYlDektcalMIVClzB9LeXRFnnQNV52aEjN8vYXEUegV7-RKRj-OHQmZ8I-CKpVCIpgeWqPcOvw4nyBHPhcR1dpGpN_p_ZD7TNNg520eOhjklM9Gb7eeKTCQDN-XpcB7JiwG--ScDv1ISZNtAxr0IKCIjzijngpvmszgll4kUOUJJLStm11jGD-xQQYMH_vrxSaedn52LKggYU8fZ0YTK2aO5NuFno892snQjJAJduJzGd2awD_p3ajuoCSfJvKmarTV7diNs2uvExJUvE1ZGfWG3Rcc5e3KoxH_HhWHUlhlbcc7ZZ-ebymJAzywKrRDoqut2JIMGs3L3VOlvzaCN0pUl24avfIrLLLRlR6dGlmnR292LVS8OTIgnP_nNOJplE-nGyUOjE1KyfCMw4gUYnPIH3kCPzmt61-jR2w3Q2UKhnUMW_1i-V5BMTY8D3r5xYe-p41VLepQA79Nx2USSSYf9wgHjFxv2ApjTUNb1HASiczKYw3JvWj8AvZ-x3PFqJf0nfh_UijtwINFPo_p6_XEHwQf9q9KEgLcnJRnUSmmbKQZlB5MT2o4QC8SGkZSg6gsuxGNmpxqvLPGPkVTh-uWJX0pD2NLrnFDdc1cSKnHh700HkY8eGPhL01WFRIpRL9l6fWtTo34W4N-UgsVA6K5vEgTjEseStwSNF_1o8Yb9ZR_2__i-0zigXU-XKjLF6UfR5zm7mqSYJ1_tbZxmbS_1VkXjU6f6vni30EIN2HTyM6rQQ-43mvuofbdlxG0SSX0_5sMoimO0MGk3g_aCNfm31UuJTxKQoAuDKRE4cvF7pRb5OxvHjvrAZyRWRTw4tge2pBvq9-4XVIFLFQghEsGdT-KjJKo7aDyFS5PmnuH5w7VjISf-MKTfn-VVDN5ZK0kuRTv300IyEFMUBrHIBFqbIlT7DiP--1itX7VY4ZahddOGV3jK42w0xXu_HhK5kYMhv-2L5rAwWxfd1VQCDSepwtn3b6_e5uS_bF4hgCBuF140F4o7zl-o4RfpoG0a1e1Hup9Y7ssYVNkjZ96u2W2vwbPxT6bk_Lcj7UX0dnn__XIdtzeTpgqEj8QuQTiI2sd2POuq0_4z3DVLCdThknkJ79rPOFrbkDhdV0sKRjF9CzHn1TuSkKBHI3FNAN5lc73SQZdTk94aNC-cYqWQmPY39pwHfmsaJzw1D0G84RYNObdqd4SeY5wQRZ-Dhk7Z6Z9l45Vbijj8MzPdFRSCxV-xvnELj0PquhBfvM4JbESqC7ZEn2rzDmOgvTuxVAlS3ZGfcq9s3kPooCkDs9qGWalDTYs1S_q4qEvLHXXIzv3jIfJpE4cHhhYQH7R6IdioYrNCrEfu34rDKL3PLayl3n2tyzovmN6ngJQlV-cKKpEVG0HD8ce6qNRvK5VFQE5J6zVeeesni8o-ULe0HgUMRGoTviCTDjMGM5x5Q22oYXZdEUu2d1zud3hk0VsTykophYeVfwlLYsS0I09tlegWpWO9RnVHFwtC4uQjpOJBaKy6k0qIN4ovVrPs0c-ZHJHiZd2TOl_0ojvgbLG_U_5CydmX9ffpx_64zD_fnencDk37zcYV4xd3vgpwNxCCgfxgkjf6lAsCx2a3PCXPFWDVugHt026n1IbLbDwFx7siokHd1_HnAQdqsEgzHyW9ZFZla2mGmf_Xq_oK-JvQ1hnEGM57rpzDrrMer4yV43kQEfJpHafu_-S2sxQwoVcj5i7RgVNVE7lXcuwwQ9etcZzy8Sctsu2bI1vGGhyvGIKZ6IByM2II-5Iz7mO05U8hPLFCWZFDVt-IXiuwZAnfR5ay3akn3fept4qoCO_P8RF8bm0bcZ4dtxsPrsp0N1Qe0eycGpd26PMCl54zsKlDhdxlcnUFt4offK7P6KAtFzdmVnFdl12H9ctSJESDJ51FlJZhkyWq0Rsn-_aA',
    category : 'Сериалы',
    title : 'Где скрываются хоббиты, что такое Нуменор и еще 8 вопросов о «Кольцах власти»',
    data : '31.08.2022 г.',
    views : 543,
    comments :
    [
      {
        id : 6,
        author :
        {
          firstName : 'Константин',
          lastName : 'Минин',
          mainPhoto : 'https://avatarko.ru/img/kartinka/1/Jack_Vorobei.jpg',
          id : '44444444',
        },
        text : `Астрологи объявили месяц 'Властелина колец' на Кинопоиске?)`,
        data : '29 августа, 17:38',
        rating : 4,
        answers :
        [
          {
            id : 7,
            author :
            {
                firstName : 'Евгения',
                lastName : 'Петрова',
                mainPhoto : 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
                id : '11111111',
            },
            consumer :
            {
              firstName : 'Константин',
              lastName : 'Минин',
              mainPhoto : 'https://avatarko.ru/img/kartinka/1/Jack_Vorobei.jpg',
              id : '44444444',
            },
            text : `Говорят, Царь не настоящий! Самозванец!`,
            data : '29 августа, 17:40',
            rating : 1,
          },
        ]
      },
    ],
    article :
    {
      title : 'Где скрываются хоббиты, что такое Нуменор и еще 8 вопросов о «Кольцах власти»',
      data : '01.09.2022 г.',
      mainPhoto : 'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cfeh2H/x-d3ZEGvLLWrKw1QORkCk7_QVjD0cgGjaQKKmjswKm3Y2iSZeNI2cYuFeO8JQduwRusE_pK7r_87-NWkDD3I1FI0I3SRqfrgui0KRK5YwlQ5xYK0dGWVcnxVHc23O-Hn1Jc8EfFfOSlMA_zvXxdOJ9e9k-mQ6L17ImIQMI0k2cZNaryrR_kjPunwzVu5UIWdYhld-On_DOx7jAPStv-hZthedhb9m7kox0x1_h-UDefRulpn0_WzsOEmwzbFYpOCgSI07k5wZ3duMgYVcZrBFu1XXTzrsk5ttkMEETt-r6aekn4X-dhybgEGdPBcEwsuFrMTrtmx9D6urs2xDihejsOo-i0OMSq0bjxAU_4TzhUoV5H0Iz2BZL6Iyt_6eqCv3Nh-n3_S_2aMDfo0G5lLIha4Uutbc_jy4yNAsQlvV0aKbv3sTzHvvq48DRxw08bUqVbedCd-SeK4S4Xa8HHk4R0SN53-1nEqjMizMFtYSyUfsp3jWbe18qDuQHKC7ZmJi2u2roe84nDsNQ-SfJUHlembWffsswzr_gyOnfF4oe2VGfyX9RJ7LMVHPbZf24GmXvSYZlhwcLPnY4G7DSrXCY7hvGNNPWyx4nEKFXEazV0qWp51o_NN775DBBiyeWihF5E_XfNfuatNhvA-ERWGaBB03CwZvz20bGyD8cgimcMKbj3mgfXh_2nwx9F6EgnT6dtc9-J-CGO_xQud9HUqbpnWvRW9WHHpCAJwspvdhm0YsNjnlLNzPWilCPGOo9wADWZzoQm_6j0i-8ZY9hXPHybXkXDu_oor_gqCk7AwoeEV2frcvVix6kjN8L6bVY9tFr6Vr5N6ej9la46yzegQi8zh_OaI9-7243rP2LEZi1lq0JF5orHApvmAxRI88mom0Ja93_pdcaJNA7Jy0dlA6Fj9WSEcM739qG2MdkbqXMzGJrzqyPEtcGq2g1Z3kUYRJpBctiozBG36gkGfMvksZx0Qutv9njHngQX6ttZVwy5T-9Wt2TY5syZkC_0GYxhJjGAzpI71r3fjfcoRfxsO0anYlDektcalMIVClzB9LeXRFnnQNV52aEjN8vYXEUegV7-RKRj-OHQmZ8I-CKpVCIpgeWqPcOvw4nyBHPhcR1dpGpN_p_ZD7TNNg520eOhjklM9Gb7eeKTCQDN-XpcB7JiwG--ScDv1ISZNtAxr0IKCIjzijngpvmszgll4kUOUJJLStm11jGD-xQQYMH_vrxSaedn52LKggYU8fZ0YTK2aO5NuFno892snQjJAJduJzGd2awD_p3ajuoCSfJvKmarTV7diNs2uvExJUvE1ZGfWG3Rcc5e3KoxH_HhWHUlhlbcc7ZZ-ebymJAzywKrRDoqut2JIMGs3L3VOlvzaCN0pUl24avfIrLLLRlR6dGlmnR292LVS8OTIgnP_nNOJplE-nGyUOjE1KyfCMw4gUYnPIH3kCPzmt61-jR2w3Q2UKhnUMW_1i-V5BMTY8D3r5xYe-p41VLepQA79Nx2USSSYf9wgHjFxv2ApjTUNb1HASiczKYw3JvWj8AvZ-x3PFqJf0nfh_UijtwINFPo_p6_XEHwQf9q9KEgLcnJRnUSmmbKQZlB5MT2o4QC8SGkZSg6gsuxGNmpxqvLPGPkVTh-uWJX0pD2NLrnFDdc1cSKnHh700HkY8eGPhL01WFRIpRL9l6fWtTo34W4N-UgsVA6K5vEgTjEseStwSNF_1o8Yb9ZR_2__i-0zigXU-XKjLF6UfR5zm7mqSYJ1_tbZxmbS_1VkXjU6f6vni30EIN2HTyM6rQQ-43mvuofbdlxG0SSX0_5sMoimO0MGk3g_aCNfm31UuJTxKQoAuDKRE4cvF7pRb5OxvHjvrAZyRWRTw4tge2pBvq9-4XVIFLFQghEsGdT-KjJKo7aDyFS5PmnuH5w7VjISf-MKTfn-VVDN5ZK0kuRTv300IyEFMUBrHIBFqbIlT7DiP--1itX7VY4ZahddOGV3jK42w0xXu_HhK5kYMhv-2L5rAwWxfd1VQCDSepwtn3b6_e5uS_bF4hgCBuF140F4o7zl-o4RfpoG0a1e1Hup9Y7ssYVNkjZ96u2W2vwbPxT6bk_Lcj7UX0dnn__XIdtzeTpgqEj8QuQTiI2sd2POuq0_4z3DVLCdThknkJ79rPOFrbkDhdV0sKRjF9CzHn1TuSkKBHI3FNAN5lc73SQZdTk94aNC-cYqWQmPY39pwHfmsaJzw1D0G84RYNObdqd4SeY5wQRZ-Dhk7Z6Z9l45Vbijj8MzPdFRSCxV-xvnELj0PquhBfvM4JbESqC7ZEn2rzDmOgvTuxVAlS3ZGfcq9s3kPooCkDs9qGWalDTYs1S_q4qEvLHXXIzv3jIfJpE4cHhhYQH7R6IdioYrNCrEfu34rDKL3PLayl3n2tyzovmN6ngJQlV-cKKpEVG0HD8ce6qNRvK5VFQE5J6zVeeesni8o-ULe0HgUMRGoTviCTDjMGM5x5Q22oYXZdEUu2d1zud3hk0VsTykophYeVfwlLYsS0I09tlegWpWO9RnVHFwtC4uQjpOJBaKy6k0qIN4ovVrPs0c-ZHJHiZd2TOl_0ojvgbLG_U_5CydmX9ffpx_64zD_fnencDk37zcYV4xd3vgpwNxCCgfxgkjf6lAsCx2a3PCXPFWDVugHt026n1IbLbDwFx7siokHd1_HnAQdqsEgzHyW9ZFZla2mGmf_Xq_oK-JvQ1hnEGM57rpzDrrMer4yV43kQEfJpHafu_-S2sxQwoVcj5i7RgVNVE7lXcuwwQ9etcZzy8Sctsu2bI1vGGhyvGIKZ6IByM2II-5Iz7mO05U8hPLFCWZFDVt-IXiuwZAnfR5ay3akn3fept4qoCO_P8RF8bm0bcZ4dtxsPrsp0N1Qe0eycGpd26PMCl54zsKlDhdxlcnUFt4offK7P6KAtFzdmVnFdl12H9ctSJESDJ51FlJZhkyWq0Rsn-_aA',
      summary : '2 сентября на Amazon Prime выходит сериал «Властелин колец: Кольца власти» — масштабный приквел трилогии Питера Джексона, чье действие разворачивается за тысячи лет до ее событий. Коротко рассказываем о том, что в те времена делали люди, эльфы, хоббиты и Саурон, а также о том, что мы увидим и чего, скорее всего, не увидим в новой саге.',
      blocks :
      [
        {
          title : 'О чем вообще этот сериал?',
          paragraphs :
          [
            'О Второй эпохе Средиземья. Ее главные события — создание Колец власти, гибель острова Нуменор и последний союз эльфов и людей против Саурона. Вторая эпоха закончилась за три тысячи лет до того, как Бильбо Бэггинс покинул свою нору в поисках приключений.',
            'В конце «Властелина колец» эльфы отплывают на Запад и начинается господство людей. Но тридцатью веками ранее Средиземье полно магии. Люди в нем еще не самый многочисленный и не самый могущественный народ. За будущее мира уже идет война — на полях сражений и за их пределами.',
          ],
        },
        {
          title : 'Нуменор',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu1eW3QZeNS3oBqCOvgYxk_nUm2F-Mcvreg4PgExGuidFlJjY3WTKvvgeqxeBO4Y1oHtBxZ0puXBsG4UWw_tYCZgVFC_UrDaeSsDjbz5GAaPZlA9la6Qf_st6SiP_5ypHE9Dpn3oDvctcSMyzRg808AdKhsZP20-zqq2SkkV8_8npBTRs5v63XXvg4w3tpEXz-UT_ZOpWfG4MOfjTLtPr1QJCeKxoIayJPhne0ra950I126QlnFt-szn9MuE2vQ8qiUaEfVX8txxrEjK8fyQGYxiFTRUoBA4snSgbQMzQSifQ8Tu8ypIcWS5KrhK1LHbh15hk1NxoTIEaDvCjBE68mshFRi3HfJU96bFwnz3Ht3L6FU4VKtRfTC2rKFOvswomATNJrrsT7Alue-yitT8lAmeaVLScO6yACvzRIrSdfdhKlFWdte7VnaiS458MlfZiylVP12hnnUycuGhDXPM6xOGA-m76QTy7TTifMjd_hoF2KgTkr1pMcvmtk3MlX6wYCMUWv7ccFx9ZkGINb3ZX4-qn7wc55vwM7Uk4Er-DSKcQU1pvmMOPye1bL3GmfudCFdi21F8rrOEpvdJjNr0NSMi3RZ8VLOWeyuDD718FNfBZJhyUmffunJ6aefB8Q9oWUkDozrsj7rrfeHzTRg2WQNfplWS_WwxxSuyxY1c-7BlLp_Z8hMx3jUsS034-JRbS6yYd1qj23H_diduxTiEaB_IRmA95MH9YzfqMQYTN9CPWGCZXfGhtsmrMI3Mk3K-IWsUVn4cdhc1LItOuDcUV0skkXdUrZY5-L8ubMj2Aitcg4rr_GNOuuJ_7vrHkj5QyFQk3xH2ob-F5HoAyxk1P62p35G7UzEUcilLBr35VpsBqF7yGu5at3f26a4F8ADv14HGrPakDraieS18Tl5y3g7c6ZddtmxwDWa-y8gbsbKjopnQdtU2EHXqC0Nx_x5fBiTdNBHo1juy823gi_mHZJcIgim84oH45H2ve8eVO5kGVqFX0v6k8YPgfAMCHLK6oSaYUrrT9Ru9KkzMuDcWH8dgWboVrJK_cztsJ4v6TqeZwc9ouuLLNuX46_zGlHCUgRHo0RI8o7mAo_lLAdRzsCUjXdT5lrHSNqpCADK615eO5h_22qMYefm1b6aMu8EtnQBK4rKgjr7k8CmyT9tz0QHc7BJftOJwSiA2xsxc9DWhJFoYf1_1EnGsiARxf9iUTWlSt9gokPh9v2ikxrrOq9FOQen85cQ3aneneodScRoF1mUf0fVncUVjdwiO1bl_YG7R0L3e-Jf7442OfL0YkYZsV3vXpB97_bst7wu5gGtRwUtuuiwFPiK4azsLnb8ehZenW1J0bX5NonIKgFK2eesv3NH22DETPSbKQDh4lxZMope8Ey2f-v__ZWaGuk6qn0vL6f-iz7hidOa7iZZ8lcmQohJRP-T3SKAxQ0udNPVhZl5Qfdt2Vb0gjQ2w9BnezeVXPtps37Z19CXszbQBrJwEy6B6pYF15r8m-YcY-lGCUGCQ2Xniscao8gWFm_05a2QSGLzV8Nv3roeMuPGWm4HsWrzboZPwO7xlbgV8jCXZAoMqPiIAsCy-an2OGj6QgFjhmdV-pTKDaDeIi1z9-qQqlxB123gb8WzLRX9-WdyIJVa_UO6UMb1wbmRM84Fg2UfObrpkQ3wkuSx1D5i5WQabIJ4U8GE5SKoxSwET9floKRabNVHx1fvvgw65eJEXBqjYfJDsVvI18G4sBnoH5JVLR-d_oYjxbrbjdYtSdlMPEelXX7HjOEtnMgAJ2va-6WTdlDRe8Z8w4MuN-vpc20FimTVVqVL5-HToK0IxiuvUD8mju-LJNis2r3LFnbmcyB0tl1c_5DgNZ_AFhBo4eShl3Fl0WbedumZFR_q3HReFIdP_0KeRcjh6KWeOvImo0QCG4HUrAHklOOIzy117XYIYIZ8RMW3-QiI2CARavHoqqlSc8t2-0HashM_z_1WUDSReOpBpn7v0s66uQ_PHb1SJgmI2Y8e_K_CjsMESf5kH16lX1njkvY6gNEqDHL2_pyZfWv0fcNC3YMDKvzGW1wQuWX3d7NS3sLYtac01xGXTj4novS7FP6QyrTPH1TLcydDhn1y2rjuLpj8Li5p1-OXrEdR8FT_V9SeDjfr-lt7EoRP8FSjesnKwbW5MPs5gV0HDab_hzTWq_-a9hpsy2I1WYZcb9auwgC3zQAtY9HRpY9Fa9Vx6lbEhggd_OdfUASBWNhfoGHF7faBtBjyJYl2LDKR6Igk4I36vPMLS-lvCWO8TVv8pMQ2jd0IME_K9qmYd0vFRuBM7IIUPen5YWActkvWcIRyw-v0kK8z8jWLWyYfqtqmGdq727fSI2npUi5dl25z87HWFrDdMSpCyeO8rFx56lDjXt2hBDn28FlCEJRr-3KBWcfV3LO8OeIfi0IvKpHYjib5juOM8R9E2HE-XKZEe9yR9QCB0QUUfvTggZxEV8531nHjgjIi7uNAfCS-fcBQo1_E_tCTng7POo99PjOr7K4b06fCi-U_WPJSA3GaYXXvp9YKq8IWMnzs2ZGRRm_Zc85T26EVPfDkZEA7s3v6dr9_3NfQjKE06j-iZQ4WmOaHN9So4LHpPmzPUiBui3ds47fDNKPLKhFowcerpn5N2GPPV-GRMD_R51RuLp1t8FKWb__Q4LuwNMgUknAoGIbxlCLWmsus9zhA41k7crpldt-q4yKvxzQPa-jjjZddac9C5mrPhTYoz_tmTB2jRNVBh2Liyd2HvzDxGaBlCBOg3oYR85TEjMsLTv9yLXmSSXr8k80qtP0SJn7CwZSLemrFX8RTy70IOcHQYFsFm2PyTpBp3sLTkqUE6z-zQhoSp8SvFMuW4KXXH0_scQRBp0Vx2a76GonBKzBPy_OIt0NB-HPkT9yiPhrSy1pAEKFd8WyFZO3p3K8'
          ]
        },
        {
          title : 'Это экранизация или фанфик?',
          paragraphs :
          [
            'События Второй эпохи — ключевые для мифологии Толкина. Много лет он писал и переписывал легенду о падении Нуменора, за несколько дней до смерти начал новую версию биографии Галадриэли. Но законченной книги о Второй эпохе, подобной «Детям Хурина» о Первой или «Хоббиту» о Третьей, Толкин так и не написал.',
            'У «Колец власти» одновременно и очень много, и очень мало исходного материала. Много, потому что Вторая эпоха — это 3500 лет расцвета и упадка нескольких цивилизаций; тем для насыщенного сериала тут предостаточно: соблазн власти, страх смерти, объединение разных народов для противостояния злу. Но вот оригинальных персонажей, названных по имени, здесь совсем немного, и почти все они правители народов Средиземья. В отличие от действующих лиц «Властелина колец», принадлежащих к самым разным стратам — от трактирщика до королевы эльфов, от садовника до падшего ангела.',
            'Для примера можно посмотреть, как события «Властелина колец» описаны в последней главе «Сильмариллиона» (то есть в сборнике мифов и легенд Средиземья, описывающих с точки зрения Валар и эльфов историю Арды с момента ее сотворения — «Сильмариллион» посмертно издал Кристофер Толкин, сын писателя). Там они представлены в самых общих чертах, как эпизод войны против Мордора, и занимают не больше страницы. Фродо упомянут лишь в одном предложении. Вторую эпоху Толкин во многом описывает похожим образом. Но создатели сериала Патрик Маккей и Джон Д. Пейн снимают не просто историческую хронику. Чтобы их Средиземье стало живым и правдоподобным, они создают собственных героев и сюжетные линии. Таким образом, «Кольца власти» можно считать и экранизацией Толкина, и самым дорогим фанфиком в истории.',
          ],
        },
        {
          title : 'Морвет Кларк',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu1eW3QZeNS3oBqCOvgYxk_nUm2FOcetLeo7vgCxTSicl9K0I_WQKu6hLy0eEC9OAtXtBwK08-aUJy9B2w_tYCZgVFC_UrDaeSsDjbz5GAaPZlA9la6Qf_st6SiP_5ypHE9Dpn3oDvctcSMyzRg808AdKhsZP20-zqq2SkkV8_8npBTRs5v63XXvg4w3tpEXz-UT_ZOpWfG4MOfjTLtPr1QJCeKxoIayJPhne0ra950I126QlnFt-szn9MuE2vQ8qiUaEfVX8txxrEjK8fyQGYxiFTRUoBA4snSgbQMzQSifQ8Tu8ypIcWS5KrhK1LHbh15hk1NxoTIEaDvCjBE68mshFRi3HfJU96bFwnz3Ht3L6FU4VKtRfTC2rKFOvswomATNJrrsT7Alue-yitT8lAmeaVLScO6yACvzRIrSdfdhKlFWdte7VnaiS458MlfZiylVP12hnnUycuGhDXPM6xOGA-m76QTy7TTifMjd_hoF2KgTkr1pMcvmtk3MlX6wYCMUWv7ccFx9ZkGINb3ZX4-qn7wc55vwM7Uk4Er-DSKcQU1pvmMOPye1bL3GmfudCFdi21F8rrOEpvdJjNr0NSMi3RZ8VLOWeyuDD718FNfBZJhyUmffunJ6aefB8Q9oWUkDozrsj7rrfeHzTRg2WQNfplWS_WwxxSuyxY1c-7BlLp_Z8hMx3jUsS034-JRbS6yYd1qj23H_diduxTiEaB_IRmA95MH9YzfqMQYTN9CPWGCZXfGhtsmrMI3Mk3K-IWsUVn4cdhc1LItOuDcUV0skkXdUrZY5-L8ubMj2Aitcg4rr_GNOuuJ_7vrHkj5QyFQk3xH2ob-F5HoAyxk1P62p35G7UzEUcilLBr35VpsBqF7yGu5at3f26a4F8ADv14HGrPakDraieS18Tl5y3g7c6ZddtmxwDWa-y8gbsbKjopnQdtU2EHXqC0Nx_x5fBiTdNBHo1juy823gi_mHZJcIgim84oH45H2ve8eVO5kGVqFX0v6k8YPgfAMCHLK6oSaYUrrT9Ru9KkzMuDcWH8dgWboVrJK_cztsJ4v6TqeZwc9ouuLLNuX46_zGlHCUgRHo0RI8o7mAo_lLAdRzsCUjXdT5lrHSNqpCADK615eO5h_22qMYefm1b6aMu8EtnQBK4rKgjr7k8CmyT9tz0QHc7BJftOJwSiA2xsxc9DWhJFoYf1_1EnGsiARxf9iUTWlSt9gokPh9v2ikxrrOq9FOQen85cQ3aneneodScRoF1mUf0fVncUVjdwiO1bl_YG7R0L3e-Jf7442OfL0YkYZsV3vXpB97_bst7wu5gGtRwUtuuiwFPiK4azsLnb8ehZenW1J0bX5NonIKgFK2eesv3NH22DETPSbKQDh4lxZMope8Ey2f-v__ZWaGuk6qn0vL6f-iz7hidOa7iZZ8lcmQohJRP-T3SKAxQ0udNPVhZl5Qfdt2Vb0gjQ2w9BnezeVXPtps37Z19CXszbQBrJwEy6B6pYF15r8m-YcY-lGCUGCQ2Xniscao8gWFm_05a2QSGLzV8Nv3roeMuPGWm4HsWrzboZPwO7xlbgV8jCXZAoMqPiIAsCy-an2OGj6QgFjhmdV-pTKDaDeIi1z9-qQqlxB123gb8WzLRX9-WdyIJVa_UO6UMb1wbmRM84Fg2UfObrpkQ3wkuSx1D5i5WQabIJ4U8GE5SKoxSwET9floKRabNVHx1fvvgw65eJEXBqjYfJDsVvI18G4sBnoH5JVLR-d_oYjxbrbjdYtSdlMPEelXX7HjOEtnMgAJ2va-6WTdlDRe8Z8w4MuN-vpc20FimTVVqVL5-HToK0IxiuvUD8mju-LJNis2r3LFnbmcyB0tl1c_5DgNZ_AFhBo4eShl3Fl0WbedumZFR_q3HReFIdP_0KeRcjh6KWeOvImo0QCG4HUrAHklOOIzy117XYIYIZ8RMW3-QiI2CARavHoqqlSc8t2-0HashM_z_1WUDSReOpBpn7v0s66uQ_PHb1SJgmI2Y8e_K_CjsMESf5kH16lX1njkvY6gNEqDHL2_pyZfWv0fcNC3YMDKvzGW1wQuWX3d7NS3sLYtac01xGXTj4novS7FP6QyrTPH1TLcydDhn1y2rjuLpj8Li5p1-OXrEdR8FT_V9SeDjfr-lt7EoRP8FSjesnKwbW5MPs5gV0HDab_hzTWq_-a9hpsy2I1WYZcb9auwgC3zQAtY9HRpY9Fa9Vx6lbEhggd_OdfUASBWNhfoGHF7faBtBjyJYl2LDKR6Igk4I36vPMLS-lvCWO8TVv8pMQ2jd0IME_K9qmYd0vFRuBM7IIUPen5YWActkvWcIRyw-v0kK8z8jWLWyYfqtqmGdq727fSI2npUi5dl25z87HWFrDdMSpCyeO8rFx56lDjXt2hBDn28FlCEJRr-3KBWcfV3LO8OeIfi0IvKpHYjib5juOM8R9E2HE-XKZEe9yR9QCB0QUUfvTggZxEV8531nHjgjIi7uNAfCS-fcBQo1_E_tCTng7POo99PjOr7K4b06fCi-U_WPJSA3GaYXXvp9YKq8IWMnzs2ZGRRm_Zc85T26EVPfDkZEA7s3v6dr9_3NfQjKE06j-iZQ4WmOaHN9So4LHpPmzPUiBui3ds47fDNKPLKhFowcerpn5N2GPPV-GRMD_R51RuLp1t8FKWb__Q4LuwNMgUknAoGIbxlCLWmsus9zhA41k7crpldt-q4yKvxzQPa-jjjZddac9C5mrPhTYoz_tmTB2jRNVBh2Liyd2HvzDxGaBlCBOg3oYR85TEjMsLTv9yLXmSSXr8k80qtP0SJn7CwZSLemrFX8RTy70IOcHQYFsFm2PyTpBp3sLTkqUE6z-zQhoSp8SvFMuW4KXXH0_scQRBp0Vx2a76GonBKzBPy_OIt0NB-HPkT9yiPhrSy1pAEKFd8WyFZO3p3K8'
          ]
        },
        {
          title : 'Что еще мы увидим и не увидим в сериале (скорее всего)?',
          paragraphs :
          [
            'У компании Amazon есть права на книги «Хоббит», «Властелин колец». При этом главным источником станут не они сами, а приложения к «Властелину колец», где кратко пересказана история Средиземья, в том числе Вторая эпоха. Но в приложениях этот период описан лишь в общих чертах. Главные тексты Толкина об эпохе находятся в «Сильмариллионе» и «Утраченных сказаниях», полные права на которые никогда не продавались.',
            'Но шоураннеры сотрудничают с Tolkien Estate — правообладателями текстов Толкина — и непосредственно обсуждают использование отдельных элементов мифологии. Саймон Толкин, внук писателя, также принял участие в работе над сериалом. С самого начала создатели шоу дали понять, что не будут ограничиваться намеками и скрытыми отсылками. Первый опубликованный кадр из «Колец власти» — это вид на священные Золотое и Серебряное древа, описанные в «Сильмариллионе». Это образ не из Второй эпохи и даже не из Первой, а из глубокой древности, до создания Солнца и Луны. Много других промоматериалов свидетельствуют о выходе за пределы вселенной «Хоббита» и «Властелина колец».',
            'У авторов «Колец власти» почти неограниченный простор для творчества. Что именно из легендариума Толкина они используют в следующем эпизоде — интрига, подобная той, кто погибнет в следующей серии «Игры престолов». Правда, Tolkien Estate, скорее всего, не допустит резких отступлений от канона, способных разрушить атмосферу книг Толкина.',
          ],
        },
        {
          title : '',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu1eW3QZeNS3oBqCOvgYxk_nUm2FOcetLeo7vgGwzT0cg1I2ISHQvDnheiwLxfrZVsA4kpYg8mbUsy9A2w_tYCZgVFC_UrDaeSsDjbz5GAaPZlA9la6Qf_st6SiP_5ypHE9Dpn3oDvctcSMyzRg808AdKhsZP20-zqq2SkkV8_8npBTRs5v63XXvg4w3tpEXz-UT_ZOpWfG4MOfjTLtPr1QJCeKxoIayJPhne0ra950I126QlnFt-szn9MuE2vQ8qiUaEfVX8txxrEjK8fyQGYxiFTRUoBA4snSgbQMzQSifQ8Tu8ypIcWS5KrhK1LHbh15hk1NxoTIEaDvCjBE68mshFRi3HfJU96bFwnz3Ht3L6FU4VKtRfTC2rKFOvswomATNJrrsT7Alue-yitT8lAmeaVLScO6yACvzRIrSdfdhKlFWdte7VnaiS458MlfZiylVP12hnnUycuGhDXPM6xOGA-m76QTy7TTifMjd_hoF2KgTkr1pMcvmtk3MlX6wYCMUWv7ccFx9ZkGINb3ZX4-qn7wc55vwM7Uk4Er-DSKcQU1pvmMOPye1bL3GmfudCFdi21F8rrOEpvdJjNr0NSMi3RZ8VLOWeyuDD718FNfBZJhyUmffunJ6aefB8Q9oWUkDozrsj7rrfeHzTRg2WQNfplWS_WwxxSuyxY1c-7BlLp_Z8hMx3jUsS034-JRbS6yYd1qj23H_diduxTiEaB_IRmA95MH9YzfqMQYTN9CPWGCZXfGhtsmrMI3Mk3K-IWsUVn4cdhc1LItOuDcUV0skkXdUrZY5-L8ubMj2Aitcg4rr_GNOuuJ_7vrHkj5QyFQk3xH2ob-F5HoAyxk1P62p35G7UzEUcilLBr35VpsBqF7yGu5at3f26a4F8ADv14HGrPakDraieS18Tl5y3g7c6ZddtmxwDWa-y8gbsbKjopnQdtU2EHXqC0Nx_x5fBiTdNBHo1juy823gi_mHZJcIgim84oH45H2ve8eVO5kGVqFX0v6k8YPgfAMCHLK6oSaYUrrT9Ru9KkzMuDcWH8dgWboVrJK_cztsJ4v6TqeZwc9ouuLLNuX46_zGlHCUgRHo0RI8o7mAo_lLAdRzsCUjXdT5lrHSNqpCADK615eO5h_22qMYefm1b6aMu8EtnQBK4rKgjr7k8CmyT9tz0QHc7BJftOJwSiA2xsxc9DWhJFoYf1_1EnGsiARxf9iUTWlSt9gokPh9v2ikxrrOq9FOQen85cQ3aneneodScRoF1mUf0fVncUVjdwiO1bl_YG7R0L3e-Jf7442OfL0YkYZsV3vXpB97_bst7wu5gGtRwUtuuiwFPiK4azsLnb8ehZenW1J0bX5NonIKgFK2eesv3NH22DETPSbKQDh4lxZMope8Ey2f-v__ZWaGuk6qn0vL6f-iz7hidOa7iZZ8lcmQohJRP-T3SKAxQ0udNPVhZl5Qfdt2Vb0gjQ2w9BnezeVXPtps37Z19CXszbQBrJwEy6B6pYF15r8m-YcY-lGCUGCQ2Xniscao8gWFm_05a2QSGLzV8Nv3roeMuPGWm4HsWrzboZPwO7xlbgV8jCXZAoMqPiIAsCy-an2OGj6QgFjhmdV-pTKDaDeIi1z9-qQqlxB123gb8WzLRX9-WdyIJVa_UO6UMb1wbmRM84Fg2UfObrpkQ3wkuSx1D5i5WQabIJ4U8GE5SKoxSwET9floKRabNVHx1fvvgw65eJEXBqjYfJDsVvI18G4sBnoH5JVLR-d_oYjxbrbjdYtSdlMPEelXX7HjOEtnMgAJ2va-6WTdlDRe8Z8w4MuN-vpc20FimTVVqVL5-HToK0IxiuvUD8mju-LJNis2r3LFnbmcyB0tl1c_5DgNZ_AFhBo4eShl3Fl0WbedumZFR_q3HReFIdP_0KeRcjh6KWeOvImo0QCG4HUrAHklOOIzy117XYIYIZ8RMW3-QiI2CARavHoqqlSc8t2-0HashM_z_1WUDSReOpBpn7v0s66uQ_PHb1SJgmI2Y8e_K_CjsMESf5kH16lX1njkvY6gNEqDHL2_pyZfWv0fcNC3YMDKvzGW1wQuWX3d7NS3sLYtac01xGXTj4novS7FP6QyrTPH1TLcydDhn1y2rjuLpj8Li5p1-OXrEdR8FT_V9SeDjfr-lt7EoRP8FSjesnKwbW5MPs5gV0HDab_hzTWq_-a9hpsy2I1WYZcb9auwgC3zQAtY9HRpY9Fa9Vx6lbEhggd_OdfUASBWNhfoGHF7faBtBjyJYl2LDKR6Igk4I36vPMLS-lvCWO8TVv8pMQ2jd0IME_K9qmYd0vFRuBM7IIUPen5YWActkvWcIRyw-v0kK8z8jWLWyYfqtqmGdq727fSI2npUi5dl25z87HWFrDdMSpCyeO8rFx56lDjXt2hBDn28FlCEJRr-3KBWcfV3LO8OeIfi0IvKpHYjib5juOM8R9E2HE-XKZEe9yR9QCB0QUUfvTggZxEV8531nHjgjIi7uNAfCS-fcBQo1_E_tCTng7POo99PjOr7K4b06fCi-U_WPJSA3GaYXXvp9YKq8IWMnzs2ZGRRm_Zc85T26EVPfDkZEA7s3v6dr9_3NfQjKE06j-iZQ4WmOaHN9So4LHpPmzPUiBui3ds47fDNKPLKhFowcerpn5N2GPPV-GRMD_R51RuLp1t8FKWb__Q4LuwNMgUknAoGIbxlCLWmsus9zhA41k7crpldt-q4yKvxzQPa-jjjZddac9C5mrPhTYoz_tmTB2jRNVBh2Liyd2HvzDxGaBlCBOg3oYR85TEjMsLTv9yLXmSSXr8k80qtP0SJn7CwZSLemrFX8RTy70IOcHQYFsFm2PyTpBp3sLTkqUE6z-zQhoSp8SvFMuW4KXXH0_scQRBp0Vx2a76GonBKzBPy_OIt0NB-HPkT9yiPhrSy1pAEKFd8WyFZO3p3K8',
          ]
        },
        {
          title : 'Зачем нужны Кольца власти?',
          paragraphs :
          [
            'Во Вторую эпоху множество эльфов еще живут в Средиземье, не стремясь его покинуть. Наоборот, они хотят сделать этот мир таким же прекрасным, как и земной рай Валинор. К тому же эльфам нужно защитить свои владения от зла, которое ждет своего часа. Именно для этого мастер Келебримбор (Чарльз Эдвардс) создает магические кольца, которые призваны фактически остановить ход истории, законсервировать мир, защитить его от увядания. Но кому на самом деле принадлежит власть над кольцами?',
            'Эльфы Второй эпохи не похожи на известных нам по «Хоббиту» и «Властелину колец», готовящихся проститься со Средиземьем. Они ближе к эльфам «Сильмариллиона», воинственным и решительным, творящим историю своими руками.',
            'В сериале мы встретим уже знакомых по предыдущим книгам и фильмам эльфийских героев — Галадриэль (Морвед Кларк) и молодого Элронда (Роберт Арамайо). Ими руководит верховный эльфийский король Гил-Галад (Бенджамин Уокер), о котором во «Властелине колец» Сэм поет грустную песню.',
          ],
        },
        {
          title : 'Бенджамин Уокер, Морвет Кларк, Роберт Арамайо',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu1eW3QZeNS3oBqCOvgYxk_nUm2F-Mcvreg4PhZxzT-cV4f24jbQqXu0-njeRC8MFYHtEsNgZyXVsjoVGw_tYCZgVFC_UrDaeSsDjbz5GAaPZlA9la6Qf_st6SiP_5ypHE9Dpn3oDvctcSMyzRg808AdKhsZP20-zqq2SkkV8_8npBTRs5v63XXvg4w3tpEXz-UT_ZOpWfG4MOfjTLtPr1QJCeKxoIayJPhne0ra950I126QlnFt-szn9MuE2vQ8qiUaEfVX8txxrEjK8fyQGYxiFTRUoBA4snSgbQMzQSifQ8Tu8ypIcWS5KrhK1LHbh15hk1NxoTIEaDvCjBE68mshFRi3HfJU96bFwnz3Ht3L6FU4VKtRfTC2rKFOvswomATNJrrsT7Alue-yitT8lAmeaVLScO6yACvzRIrSdfdhKlFWdte7VnaiS458MlfZiylVP12hnnUycuGhDXPM6xOGA-m76QTy7TTifMjd_hoF2KgTkr1pMcvmtk3MlX6wYCMUWv7ccFx9ZkGINb3ZX4-qn7wc55vwM7Uk4Er-DSKcQU1pvmMOPye1bL3GmfudCFdi21F8rrOEpvdJjNr0NSMi3RZ8VLOWeyuDD718FNfBZJhyUmffunJ6aefB8Q9oWUkDozrsj7rrfeHzTRg2WQNfplWS_WwxxSuyxY1c-7BlLp_Z8hMx3jUsS034-JRbS6yYd1qj23H_diduxTiEaB_IRmA95MH9YzfqMQYTN9CPWGCZXfGhtsmrMI3Mk3K-IWsUVn4cdhc1LItOuDcUV0skkXdUrZY5-L8ubMj2Aitcg4rr_GNOuuJ_7vrHkj5QyFQk3xH2ob-F5HoAyxk1P62p35G7UzEUcilLBr35VpsBqF7yGu5at3f26a4F8ADv14HGrPakDraieS18Tl5y3g7c6ZddtmxwDWa-y8gbsbKjopnQdtU2EHXqC0Nx_x5fBiTdNBHo1juy823gi_mHZJcIgim84oH45H2ve8eVO5kGVqFX0v6k8YPgfAMCHLK6oSaYUrrT9Ru9KkzMuDcWH8dgWboVrJK_cztsJ4v6TqeZwc9ouuLLNuX46_zGlHCUgRHo0RI8o7mAo_lLAdRzsCUjXdT5lrHSNqpCADK615eO5h_22qMYefm1b6aMu8EtnQBK4rKgjr7k8CmyT9tz0QHc7BJftOJwSiA2xsxc9DWhJFoYf1_1EnGsiARxf9iUTWlSt9gokPh9v2ikxrrOq9FOQen85cQ3aneneodScRoF1mUf0fVncUVjdwiO1bl_YG7R0L3e-Jf7442OfL0YkYZsV3vXpB97_bst7wu5gGtRwUtuuiwFPiK4azsLnb8ehZenW1J0bX5NonIKgFK2eesv3NH22DETPSbKQDh4lxZMope8Ey2f-v__ZWaGuk6qn0vL6f-iz7hidOa7iZZ8lcmQohJRP-T3SKAxQ0udNPVhZl5Qfdt2Vb0gjQ2w9BnezeVXPtps37Z19CXszbQBrJwEy6B6pYF15r8m-YcY-lGCUGCQ2Xniscao8gWFm_05a2QSGLzV8Nv3roeMuPGWm4HsWrzboZPwO7xlbgV8jCXZAoMqPiIAsCy-an2OGj6QgFjhmdV-pTKDaDeIi1z9-qQqlxB123gb8WzLRX9-WdyIJVa_UO6UMb1wbmRM84Fg2UfObrpkQ3wkuSx1D5i5WQabIJ4U8GE5SKoxSwET9floKRabNVHx1fvvgw65eJEXBqjYfJDsVvI18G4sBnoH5JVLR-d_oYjxbrbjdYtSdlMPEelXX7HjOEtnMgAJ2va-6WTdlDRe8Z8w4MuN-vpc20FimTVVqVL5-HToK0IxiuvUD8mju-LJNis2r3LFnbmcyB0tl1c_5DgNZ_AFhBo4eShl3Fl0WbedumZFR_q3HReFIdP_0KeRcjh6KWeOvImo0QCG4HUrAHklOOIzy117XYIYIZ8RMW3-QiI2CARavHoqqlSc8t2-0HashM_z_1WUDSReOpBpn7v0s66uQ_PHb1SJgmI2Y8e_K_CjsMESf5kH16lX1njkvY6gNEqDHL2_pyZfWv0fcNC3YMDKvzGW1wQuWX3d7NS3sLYtac01xGXTj4novS7FP6QyrTPH1TLcydDhn1y2rjuLpj8Li5p1-OXrEdR8FT_V9SeDjfr-lt7EoRP8FSjesnKwbW5MPs5gV0HDab_hzTWq_-a9hpsy2I1WYZcb9auwgC3zQAtY9HRpY9Fa9Vx6lbEhggd_OdfUASBWNhfoGHF7faBtBjyJYl2LDKR6Igk4I36vPMLS-lvCWO8TVv8pMQ2jd0IME_K9qmYd0vFRuBM7IIUPen5YWActkvWcIRyw-v0kK8z8jWLWyYfqtqmGdq727fSI2npUi5dl25z87HWFrDdMSpCyeO8rFx56lDjXt2hBDn28FlCEJRr-3KBWcfV3LO8OeIfi0IvKpHYjib5juOM8R9E2HE-XKZEe9yR9QCB0QUUfvTggZxEV8531nHjgjIi7uNAfCS-fcBQo1_E_tCTng7POo99PjOr7K4b06fCi-U_WPJSA3GaYXXvp9YKq8IWMnzs2ZGRRm_Zc85T26EVPfDkZEA7s3v6dr9_3NfQjKE06j-iZQ4WmOaHN9So4LHpPmzPUiBui3ds47fDNKPLKhFowcerpn5N2GPPV-GRMD_R51RuLp1t8FKWb__Q4LuwNMgUknAoGIbxlCLWmsus9zhA41k7crpldt-q4yKvxzQPa-jjjZddac9C5mrPhTYoz_tmTB2jRNVBh2Liyd2HvzDxGaBlCBOg3oYR85TEjMsLTv9yLXmSSXr8k80qtP0SJn7CwZSLemrFX8RTy70IOcHQYFsFm2PyTpBp3sLTkqUE6z-zQhoSp8SvFMuW4KXXH0_scQRBp0Vx2a76GonBKzBPy_OIt0NB-HPkT9yiPhrSy1pAEKFd8WyFZO3p3K8',
          ],
        },
        {
          title : 'Что такое Нуменор?',
          paragraphs :
          [
            'Остров Нуменор — Атлантида мира Толкина, вершина человеческой цивилизации. Он расположен в море между Валинором на западе и Средиземьем на востоке. В награду за подвиги древности нуменорцы благословлены удивительным долголетием. Но что значит этот дар, если после двух-трех веков счастливой жизни все равно приходится умирать?',
            'В «Кольцах власти» мы встретим последнее поколение героев Нуменора, каждому из них предстоит сделать тяжелый выбор. Дворцовые интриги, войны в колониях, темные культы — Нуменор страдает от классических проблем империи. Остров одновременно и на пике своего могущества, и на грани катастрофы. Но предопределена ли его судьба или она зависит от самих нуменорцев?',
            'Среди знакомых персонажей мы увидим далеких предков Арагорна — Элендила (Ллойд Оуэн) и Исилдура (Макс Болдри). Они часто упоминаются во «Властелине колец» как великие герои прошлого и на несколько минут появились в трилогии Питера Джексона. Теперь мы можем лучше узнать их.',
          ]
        },
        {
          title : 'Леон Уэдэм, Синтия Аддай-Робинсон, Тристан Гравель, Ллойд Оуэн, Эма Хорват, Макс Болдри',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu1eW3QZeNS3oBqCOvgYxk_nUm2F-YfuLat4_hUlGWiIAtMjIvbE_DvhOvneEW6ZQwO4R8Pj5ydUcG9BWw_tYCZgVFC_UrDaeSsDjbz5GAaPZlA9la6Qf_st6SiP_5ypHE9Dpn3oDvctcSMyzRg808AdKhsZP20-zqq2SkkV8_8npBTRs5v63XXvg4w3tpEXz-UT_ZOpWfG4MOfjTLtPr1QJCeKxoIayJPhne0ra950I126QlnFt-szn9MuE2vQ8qiUaEfVX8txxrEjK8fyQGYxiFTRUoBA4snSgbQMzQSifQ8Tu8ypIcWS5KrhK1LHbh15hk1NxoTIEaDvCjBE68mshFRi3HfJU96bFwnz3Ht3L6FU4VKtRfTC2rKFOvswomATNJrrsT7Alue-yitT8lAmeaVLScO6yACvzRIrSdfdhKlFWdte7VnaiS458MlfZiylVP12hnnUycuGhDXPM6xOGA-m76QTy7TTifMjd_hoF2KgTkr1pMcvmtk3MlX6wYCMUWv7ccFx9ZkGINb3ZX4-qn7wc55vwM7Uk4Er-DSKcQU1pvmMOPye1bL3GmfudCFdi21F8rrOEpvdJjNr0NSMi3RZ8VLOWeyuDD718FNfBZJhyUmffunJ6aefB8Q9oWUkDozrsj7rrfeHzTRg2WQNfplWS_WwxxSuyxY1c-7BlLp_Z8hMx3jUsS034-JRbS6yYd1qj23H_diduxTiEaB_IRmA95MH9YzfqMQYTN9CPWGCZXfGhtsmrMI3Mk3K-IWsUVn4cdhc1LItOuDcUV0skkXdUrZY5-L8ubMj2Aitcg4rr_GNOuuJ_7vrHkj5QyFQk3xH2ob-F5HoAyxk1P62p35G7UzEUcilLBr35VpsBqF7yGu5at3f26a4F8ADv14HGrPakDraieS18Tl5y3g7c6ZddtmxwDWa-y8gbsbKjopnQdtU2EHXqC0Nx_x5fBiTdNBHo1juy823gi_mHZJcIgim84oH45H2ve8eVO5kGVqFX0v6k8YPgfAMCHLK6oSaYUrrT9Ru9KkzMuDcWH8dgWboVrJK_cztsJ4v6TqeZwc9ouuLLNuX46_zGlHCUgRHo0RI8o7mAo_lLAdRzsCUjXdT5lrHSNqpCADK615eO5h_22qMYefm1b6aMu8EtnQBK4rKgjr7k8CmyT9tz0QHc7BJftOJwSiA2xsxc9DWhJFoYf1_1EnGsiARxf9iUTWlSt9gokPh9v2ikxrrOq9FOQen85cQ3aneneodScRoF1mUf0fVncUVjdwiO1bl_YG7R0L3e-Jf7442OfL0YkYZsV3vXpB97_bst7wu5gGtRwUtuuiwFPiK4azsLnb8ehZenW1J0bX5NonIKgFK2eesv3NH22DETPSbKQDh4lxZMope8Ey2f-v__ZWaGuk6qn0vL6f-iz7hidOa7iZZ8lcmQohJRP-T3SKAxQ0udNPVhZl5Qfdt2Vb0gjQ2w9BnezeVXPtps37Z19CXszbQBrJwEy6B6pYF15r8m-YcY-lGCUGCQ2Xniscao8gWFm_05a2QSGLzV8Nv3roeMuPGWm4HsWrzboZPwO7xlbgV8jCXZAoMqPiIAsCy-an2OGj6QgFjhmdV-pTKDaDeIi1z9-qQqlxB123gb8WzLRX9-WdyIJVa_UO6UMb1wbmRM84Fg2UfObrpkQ3wkuSx1D5i5WQabIJ4U8GE5SKoxSwET9floKRabNVHx1fvvgw65eJEXBqjYfJDsVvI18G4sBnoH5JVLR-d_oYjxbrbjdYtSdlMPEelXX7HjOEtnMgAJ2va-6WTdlDRe8Z8w4MuN-vpc20FimTVVqVL5-HToK0IxiuvUD8mju-LJNis2r3LFnbmcyB0tl1c_5DgNZ_AFhBo4eShl3Fl0WbedumZFR_q3HReFIdP_0KeRcjh6KWeOvImo0QCG4HUrAHklOOIzy117XYIYIZ8RMW3-QiI2CARavHoqqlSc8t2-0HashM_z_1WUDSReOpBpn7v0s66uQ_PHb1SJgmI2Y8e_K_CjsMESf5kH16lX1njkvY6gNEqDHL2_pyZfWv0fcNC3YMDKvzGW1wQuWX3d7NS3sLYtac01xGXTj4novS7FP6QyrTPH1TLcydDhn1y2rjuLpj8Li5p1-OXrEdR8FT_V9SeDjfr-lt7EoRP8FSjesnKwbW5MPs5gV0HDab_hzTWq_-a9hpsy2I1WYZcb9auwgC3zQAtY9HRpY9Fa9Vx6lbEhggd_OdfUASBWNhfoGHF7faBtBjyJYl2LDKR6Igk4I36vPMLS-lvCWO8TVv8pMQ2jd0IME_K9qmYd0vFRuBM7IIUPen5YWActkvWcIRyw-v0kK8z8jWLWyYfqtqmGdq727fSI2npUi5dl25z87HWFrDdMSpCyeO8rFx56lDjXt2hBDn28FlCEJRr-3KBWcfV3LO8OeIfi0IvKpHYjib5juOM8R9E2HE-XKZEe9yR9QCB0QUUfvTggZxEV8531nHjgjIi7uNAfCS-fcBQo1_E_tCTng7POo99PjOr7K4b06fCi-U_WPJSA3GaYXXvp9YKq8IWMnzs2ZGRRm_Zc85T26EVPfDkZEA7s3v6dr9_3NfQjKE06j-iZQ4WmOaHN9So4LHpPmzPUiBui3ds47fDNKPLKhFowcerpn5N2GPPV-GRMD_R51RuLp1t8FKWb__Q4LuwNMgUknAoGIbxlCLWmsus9zhA41k7crpldt-q4yKvxzQPa-jjjZddac9C5mrPhTYoz_tmTB2jRNVBh2Liyd2HvzDxGaBlCBOg3oYR85TEjMsLTv9yLXmSSXr8k80qtP0SJn7CwZSLemrFX8RTy70IOcHQYFsFm2PyTpBp3sLTkqUE6z-zQhoSp8SvFMuW4KXXH0_scQRBp0Vx2a76GonBKzBPy_OIt0NB-HPkT9yiPhrSy1pAEKFd8WyFZO3p3K8'
          ],
        },
        {
          title : 'Что с остальными людьми?',
          paragraphs :
          [
            'Нуменорцы часто приплывают в Средиземье, но оно заселено совсем другими народами. Люди на континенте встречаются не так часто, цивилизация их не развита, жизнь коротка. Среди них предки всадников Рохана и торговцев Эсгарота. Во Вторую эпоху еще живы те клятвопреступники, чьих призраков Арагорн поведет в бой спустя три тысячи лет.',
            'В сериале мы увидим края, которые никогда не были местом действия в книгах Толкина или даже оставались за пределами карты. Конечно, именно здесь создателям особенно нужны оригинальные персонажи, такие как целительница Бронвен (Назанин Бониади) или воин Халбранд (Чарли Викерз). Предполагается, что часть этих героев присоединится к борьбе против новой темной силы, а кто-то станет на ее сторону. Также мы, скорее всего, узнаем, правители каких стран и городов (Харада, Кханда, Руна или Умбара?) получат Кольца власти и превратятся в назгулов — черных всадников.',
          ]
        },
        {
          title : 'Назанин Бониади, Тайро Мухафидин, Исмаэль Крус Кордова, Чарли Викерз',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu1eW3QZeNS3oBqCOvgYxk_nUm2F-QYvbGg5fgDl2X_IgtK3oTSQqC50LrmLxfoMVtU5klfjsvKUsC-BGw_tYCZgVFC_UrDaeSsDjbz5GAaPZlA9la6Qf_st6SiP_5ypHE9Dpn3oDvctcSMyzRg808AdKhsZP20-zqq2SkkV8_8npBTRs5v63XXvg4w3tpEXz-UT_ZOpWfG4MOfjTLtPr1QJCeKxoIayJPhne0ra950I126QlnFt-szn9MuE2vQ8qiUaEfVX8txxrEjK8fyQGYxiFTRUoBA4snSgbQMzQSifQ8Tu8ypIcWS5KrhK1LHbh15hk1NxoTIEaDvCjBE68mshFRi3HfJU96bFwnz3Ht3L6FU4VKtRfTC2rKFOvswomATNJrrsT7Alue-yitT8lAmeaVLScO6yACvzRIrSdfdhKlFWdte7VnaiS458MlfZiylVP12hnnUycuGhDXPM6xOGA-m76QTy7TTifMjd_hoF2KgTkr1pMcvmtk3MlX6wYCMUWv7ccFx9ZkGINb3ZX4-qn7wc55vwM7Uk4Er-DSKcQU1pvmMOPye1bL3GmfudCFdi21F8rrOEpvdJjNr0NSMi3RZ8VLOWeyuDD718FNfBZJhyUmffunJ6aefB8Q9oWUkDozrsj7rrfeHzTRg2WQNfplWS_WwxxSuyxY1c-7BlLp_Z8hMx3jUsS034-JRbS6yYd1qj23H_diduxTiEaB_IRmA95MH9YzfqMQYTN9CPWGCZXfGhtsmrMI3Mk3K-IWsUVn4cdhc1LItOuDcUV0skkXdUrZY5-L8ubMj2Aitcg4rr_GNOuuJ_7vrHkj5QyFQk3xH2ob-F5HoAyxk1P62p35G7UzEUcilLBr35VpsBqF7yGu5at3f26a4F8ADv14HGrPakDraieS18Tl5y3g7c6ZddtmxwDWa-y8gbsbKjopnQdtU2EHXqC0Nx_x5fBiTdNBHo1juy823gi_mHZJcIgim84oH45H2ve8eVO5kGVqFX0v6k8YPgfAMCHLK6oSaYUrrT9Ru9KkzMuDcWH8dgWboVrJK_cztsJ4v6TqeZwc9ouuLLNuX46_zGlHCUgRHo0RI8o7mAo_lLAdRzsCUjXdT5lrHSNqpCADK615eO5h_22qMYefm1b6aMu8EtnQBK4rKgjr7k8CmyT9tz0QHc7BJftOJwSiA2xsxc9DWhJFoYf1_1EnGsiARxf9iUTWlSt9gokPh9v2ikxrrOq9FOQen85cQ3aneneodScRoF1mUf0fVncUVjdwiO1bl_YG7R0L3e-Jf7442OfL0YkYZsV3vXpB97_bst7wu5gGtRwUtuuiwFPiK4azsLnb8ehZenW1J0bX5NonIKgFK2eesv3NH22DETPSbKQDh4lxZMope8Ey2f-v__ZWaGuk6qn0vL6f-iz7hidOa7iZZ8lcmQohJRP-T3SKAxQ0udNPVhZl5Qfdt2Vb0gjQ2w9BnezeVXPtps37Z19CXszbQBrJwEy6B6pYF15r8m-YcY-lGCUGCQ2Xniscao8gWFm_05a2QSGLzV8Nv3roeMuPGWm4HsWrzboZPwO7xlbgV8jCXZAoMqPiIAsCy-an2OGj6QgFjhmdV-pTKDaDeIi1z9-qQqlxB123gb8WzLRX9-WdyIJVa_UO6UMb1wbmRM84Fg2UfObrpkQ3wkuSx1D5i5WQabIJ4U8GE5SKoxSwET9floKRabNVHx1fvvgw65eJEXBqjYfJDsVvI18G4sBnoH5JVLR-d_oYjxbrbjdYtSdlMPEelXX7HjOEtnMgAJ2va-6WTdlDRe8Z8w4MuN-vpc20FimTVVqVL5-HToK0IxiuvUD8mju-LJNis2r3LFnbmcyB0tl1c_5DgNZ_AFhBo4eShl3Fl0WbedumZFR_q3HReFIdP_0KeRcjh6KWeOvImo0QCG4HUrAHklOOIzy117XYIYIZ8RMW3-QiI2CARavHoqqlSc8t2-0HashM_z_1WUDSReOpBpn7v0s66uQ_PHb1SJgmI2Y8e_K_CjsMESf5kH16lX1njkvY6gNEqDHL2_pyZfWv0fcNC3YMDKvzGW1wQuWX3d7NS3sLYtac01xGXTj4novS7FP6QyrTPH1TLcydDhn1y2rjuLpj8Li5p1-OXrEdR8FT_V9SeDjfr-lt7EoRP8FSjesnKwbW5MPs5gV0HDab_hzTWq_-a9hpsy2I1WYZcb9auwgC3zQAtY9HRpY9Fa9Vx6lbEhggd_OdfUASBWNhfoGHF7faBtBjyJYl2LDKR6Igk4I36vPMLS-lvCWO8TVv8pMQ2jd0IME_K9qmYd0vFRuBM7IIUPen5YWActkvWcIRyw-v0kK8z8jWLWyYfqtqmGdq727fSI2npUi5dl25z87HWFrDdMSpCyeO8rFx56lDjXt2hBDn28FlCEJRr-3KBWcfV3LO8OeIfi0IvKpHYjib5juOM8R9E2HE-XKZEe9yR9QCB0QUUfvTggZxEV8531nHjgjIi7uNAfCS-fcBQo1_E_tCTng7POo99PjOr7K4b06fCi-U_WPJSA3GaYXXvp9YKq8IWMnzs2ZGRRm_Zc85T26EVPfDkZEA7s3v6dr9_3NfQjKE06j-iZQ4WmOaHN9So4LHpPmzPUiBui3ds47fDNKPLKhFowcerpn5N2GPPV-GRMD_R51RuLp1t8FKWb__Q4LuwNMgUknAoGIbxlCLWmsus9zhA41k7crpldt-q4yKvxzQPa-jjjZddac9C5mrPhTYoz_tmTB2jRNVBh2Liyd2HvzDxGaBlCBOg3oYR85TEjMsLTv9yLXmSSXr8k80qtP0SJn7CwZSLemrFX8RTy70IOcHQYFsFm2PyTpBp3sLTkqUE6z-zQhoSp8SvFMuW4KXXH0_scQRBp0Vx2a76GonBKzBPy_OIt0NB-HPkT9yiPhrSy1pAEKFd8WyFZO3p3K8',
          ]
        },
        {
          title : 'Откуда здесь хоббиты?',
          paragraphs :
          [
            'Еще один особый народ, связанный с людьми далеким родством, — это хоббиты. Согласно прологу к «Властелину колец», они существуют с Древних Дней, как Толкин называет Первую эпоху. Это значит, что одновременно с падением Нуменора где-то в Средиземье уже скитались предки Бэггинсов и Туков. Но история хоббитов до заселения Шира никому не известна, в том числе и им самим. Малоизвестность хоббитов, скрытого народа — важное обстоятельство для сюжета «Властелина колец», вся интрига в котором основана на том, что Враг не знает о хоббитах. Именно поэтому секретная миссия Фродо и Сэма становится возможной.',
            'Так что перед авторами сериала стоит непростая задача, ведь недостаточно просто создать оригинальных персонажей, таких как семья Брендифут из кочевого племени мохноногов (Маркелла Кавена, Дилан Смит, Сара Звангобани). Древним хоббитам нужно сыграть свою роль в великих событиях Второй эпохи, но так, чтобы остаться незаметными для сильных этого мира.',
          ]
        },
        {
          title : 'Маркелла Кавена, Сара Звангобани, Дилан Смит, Меган Ричардс',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu1eW3QZeNS3oBqCOvgYxk_nUm2F-QYvbGg5fhWlmv-Jw9Ji4jXEaa-0OeyKhayZV4Dsx4I1sfKW87rV2w_tYCZgVFC_UrDaeSsDjbz5GAaPZlA9la6Qf_st6SiP_5ypHE9Dpn3oDvctcSMyzRg808AdKhsZP20-zqq2SkkV8_8npBTRs5v63XXvg4w3tpEXz-UT_ZOpWfG4MOfjTLtPr1QJCeKxoIayJPhne0ra950I126QlnFt-szn9MuE2vQ8qiUaEfVX8txxrEjK8fyQGYxiFTRUoBA4snSgbQMzQSifQ8Tu8ypIcWS5KrhK1LHbh15hk1NxoTIEaDvCjBE68mshFRi3HfJU96bFwnz3Ht3L6FU4VKtRfTC2rKFOvswomATNJrrsT7Alue-yitT8lAmeaVLScO6yACvzRIrSdfdhKlFWdte7VnaiS458MlfZiylVP12hnnUycuGhDXPM6xOGA-m76QTy7TTifMjd_hoF2KgTkr1pMcvmtk3MlX6wYCMUWv7ccFx9ZkGINb3ZX4-qn7wc55vwM7Uk4Er-DSKcQU1pvmMOPye1bL3GmfudCFdi21F8rrOEpvdJjNr0NSMi3RZ8VLOWeyuDD718FNfBZJhyUmffunJ6aefB8Q9oWUkDozrsj7rrfeHzTRg2WQNfplWS_WwxxSuyxY1c-7BlLp_Z8hMx3jUsS034-JRbS6yYd1qj23H_diduxTiEaB_IRmA95MH9YzfqMQYTN9CPWGCZXfGhtsmrMI3Mk3K-IWsUVn4cdhc1LItOuDcUV0skkXdUrZY5-L8ubMj2Aitcg4rr_GNOuuJ_7vrHkj5QyFQk3xH2ob-F5HoAyxk1P62p35G7UzEUcilLBr35VpsBqF7yGu5at3f26a4F8ADv14HGrPakDraieS18Tl5y3g7c6ZddtmxwDWa-y8gbsbKjopnQdtU2EHXqC0Nx_x5fBiTdNBHo1juy823gi_mHZJcIgim84oH45H2ve8eVO5kGVqFX0v6k8YPgfAMCHLK6oSaYUrrT9Ru9KkzMuDcWH8dgWboVrJK_cztsJ4v6TqeZwc9ouuLLNuX46_zGlHCUgRHo0RI8o7mAo_lLAdRzsCUjXdT5lrHSNqpCADK615eO5h_22qMYefm1b6aMu8EtnQBK4rKgjr7k8CmyT9tz0QHc7BJftOJwSiA2xsxc9DWhJFoYf1_1EnGsiARxf9iUTWlSt9gokPh9v2ikxrrOq9FOQen85cQ3aneneodScRoF1mUf0fVncUVjdwiO1bl_YG7R0L3e-Jf7442OfL0YkYZsV3vXpB97_bst7wu5gGtRwUtuuiwFPiK4azsLnb8ehZenW1J0bX5NonIKgFK2eesv3NH22DETPSbKQDh4lxZMope8Ey2f-v__ZWaGuk6qn0vL6f-iz7hidOa7iZZ8lcmQohJRP-T3SKAxQ0udNPVhZl5Qfdt2Vb0gjQ2w9BnezeVXPtps37Z19CXszbQBrJwEy6B6pYF15r8m-YcY-lGCUGCQ2Xniscao8gWFm_05a2QSGLzV8Nv3roeMuPGWm4HsWrzboZPwO7xlbgV8jCXZAoMqPiIAsCy-an2OGj6QgFjhmdV-pTKDaDeIi1z9-qQqlxB123gb8WzLRX9-WdyIJVa_UO6UMb1wbmRM84Fg2UfObrpkQ3wkuSx1D5i5WQabIJ4U8GE5SKoxSwET9floKRabNVHx1fvvgw65eJEXBqjYfJDsVvI18G4sBnoH5JVLR-d_oYjxbrbjdYtSdlMPEelXX7HjOEtnMgAJ2va-6WTdlDRe8Z8w4MuN-vpc20FimTVVqVL5-HToK0IxiuvUD8mju-LJNis2r3LFnbmcyB0tl1c_5DgNZ_AFhBo4eShl3Fl0WbedumZFR_q3HReFIdP_0KeRcjh6KWeOvImo0QCG4HUrAHklOOIzy117XYIYIZ8RMW3-QiI2CARavHoqqlSc8t2-0HashM_z_1WUDSReOpBpn7v0s66uQ_PHb1SJgmI2Y8e_K_CjsMESf5kH16lX1njkvY6gNEqDHL2_pyZfWv0fcNC3YMDKvzGW1wQuWX3d7NS3sLYtac01xGXTj4novS7FP6QyrTPH1TLcydDhn1y2rjuLpj8Li5p1-OXrEdR8FT_V9SeDjfr-lt7EoRP8FSjesnKwbW5MPs5gV0HDab_hzTWq_-a9hpsy2I1WYZcb9auwgC3zQAtY9HRpY9Fa9Vx6lbEhggd_OdfUASBWNhfoGHF7faBtBjyJYl2LDKR6Igk4I36vPMLS-lvCWO8TVv8pMQ2jd0IME_K9qmYd0vFRuBM7IIUPen5YWActkvWcIRyw-v0kK8z8jWLWyYfqtqmGdq727fSI2npUi5dl25z87HWFrDdMSpCyeO8rFx56lDjXt2hBDn28FlCEJRr-3KBWcfV3LO8OeIfi0IvKpHYjib5juOM8R9E2HE-XKZEe9yR9QCB0QUUfvTggZxEV8531nHjgjIi7uNAfCS-fcBQo1_E_tCTng7POo99PjOr7K4b06fCi-U_WPJSA3GaYXXvp9YKq8IWMnzs2ZGRRm_Zc85T26EVPfDkZEA7s3v6dr9_3NfQjKE06j-iZQ4WmOaHN9So4LHpPmzPUiBui3ds47fDNKPLKhFowcerpn5N2GPPV-GRMD_R51RuLp1t8FKWb__Q4LuwNMgUknAoGIbxlCLWmsus9zhA41k7crpldt-q4yKvxzQPa-jjjZddac9C5mrPhTYoz_tmTB2jRNVBh2Liyd2HvzDxGaBlCBOg3oYR85TEjMsLTv9yLXmSSXr8k80qtP0SJn7CwZSLemrFX8RTy70IOcHQYFsFm2PyTpBp3sLTkqUE6z-zQhoSp8SvFMuW4KXXH0_scQRBp0Vx2a76GonBKzBPy_OIt0NB-HPkT9yiPhrSy1pAEKFd8WyFZO3p3K8',
          ],
        },
        {
          title : 'Что происходит под землей?',
          paragraphs :
          [
            'В «Хоббите» Торин и компания — это небольшая группа гномов-беженцев, которых дракон прогнал из их родного дома под Горой. Во «Властелине колец» девять путников спускаются в Морию — заброшенное королевство гномов, захваченное орками и Балрогом.',
            'Но во Вторую эпоху культура гномов в самом расцвете. В «Кольцах власти» мы увидим Кхазад-Дум — Морию до катастрофы, единственное месторождение драгоценного мифрила. По словам шоураннеров, в сериале роль гномов не сводится к комической разрядке.',
            'В подземельях Кхазад-Дума правят принц Дурин IV (Овайн Артур) и его супруга Диса (Софиа Номвете). Сам Толкин лишь бегло упомянул Дурина IV в хрониках, а Дис — это имя сестры Торина Дубощита и матери Фили и Кили. Еще один канонический гном Второй эпохи — мастер Нарви, создавший ворота со знаменитой надписью-загадкой «Скажи „друг“ и войди».',
            'Но известный нам народ Дурина — лишь один из семи гномьих кланов, каждый из которых получил Кольцо власти. Так что ждем от сериала подробной истории гномов Второй эпохи, которую его создатели, надеемся, реконструировали по немногословным наброскам Толкина.',
          ]
        },
        {
          title : 'Овайн Артур и Софиа Номвете',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu1eW3QZeNS3oBqCOvgYxk_nUm2FOcetLeo7vhUlTalI18fjIyCQKq9g77keUWzYQtS4BwIhMqWU8joBWw_tYCZgVFC_UrDaeSsDjbz5GAaPZlA9la6Qf_st6SiP_5ypHE9Dpn3oDvctcSMyzRg808AdKhsZP20-zqq2SkkV8_8npBTRs5v63XXvg4w3tpEXz-UT_ZOpWfG4MOfjTLtPr1QJCeKxoIayJPhne0ra950I126QlnFt-szn9MuE2vQ8qiUaEfVX8txxrEjK8fyQGYxiFTRUoBA4snSgbQMzQSifQ8Tu8ypIcWS5KrhK1LHbh15hk1NxoTIEaDvCjBE68mshFRi3HfJU96bFwnz3Ht3L6FU4VKtRfTC2rKFOvswomATNJrrsT7Alue-yitT8lAmeaVLScO6yACvzRIrSdfdhKlFWdte7VnaiS458MlfZiylVP12hnnUycuGhDXPM6xOGA-m76QTy7TTifMjd_hoF2KgTkr1pMcvmtk3MlX6wYCMUWv7ccFx9ZkGINb3ZX4-qn7wc55vwM7Uk4Er-DSKcQU1pvmMOPye1bL3GmfudCFdi21F8rrOEpvdJjNr0NSMi3RZ8VLOWeyuDD718FNfBZJhyUmffunJ6aefB8Q9oWUkDozrsj7rrfeHzTRg2WQNfplWS_WwxxSuyxY1c-7BlLp_Z8hMx3jUsS034-JRbS6yYd1qj23H_diduxTiEaB_IRmA95MH9YzfqMQYTN9CPWGCZXfGhtsmrMI3Mk3K-IWsUVn4cdhc1LItOuDcUV0skkXdUrZY5-L8ubMj2Aitcg4rr_GNOuuJ_7vrHkj5QyFQk3xH2ob-F5HoAyxk1P62p35G7UzEUcilLBr35VpsBqF7yGu5at3f26a4F8ADv14HGrPakDraieS18Tl5y3g7c6ZddtmxwDWa-y8gbsbKjopnQdtU2EHXqC0Nx_x5fBiTdNBHo1juy823gi_mHZJcIgim84oH45H2ve8eVO5kGVqFX0v6k8YPgfAMCHLK6oSaYUrrT9Ru9KkzMuDcWH8dgWboVrJK_cztsJ4v6TqeZwc9ouuLLNuX46_zGlHCUgRHo0RI8o7mAo_lLAdRzsCUjXdT5lrHSNqpCADK615eO5h_22qMYefm1b6aMu8EtnQBK4rKgjr7k8CmyT9tz0QHc7BJftOJwSiA2xsxc9DWhJFoYf1_1EnGsiARxf9iUTWlSt9gokPh9v2ikxrrOq9FOQen85cQ3aneneodScRoF1mUf0fVncUVjdwiO1bl_YG7R0L3e-Jf7442OfL0YkYZsV3vXpB97_bst7wu5gGtRwUtuuiwFPiK4azsLnb8ehZenW1J0bX5NonIKgFK2eesv3NH22DETPSbKQDh4lxZMope8Ey2f-v__ZWaGuk6qn0vL6f-iz7hidOa7iZZ8lcmQohJRP-T3SKAxQ0udNPVhZl5Qfdt2Vb0gjQ2w9BnezeVXPtps37Z19CXszbQBrJwEy6B6pYF15r8m-YcY-lGCUGCQ2Xniscao8gWFm_05a2QSGLzV8Nv3roeMuPGWm4HsWrzboZPwO7xlbgV8jCXZAoMqPiIAsCy-an2OGj6QgFjhmdV-pTKDaDeIi1z9-qQqlxB123gb8WzLRX9-WdyIJVa_UO6UMb1wbmRM84Fg2UfObrpkQ3wkuSx1D5i5WQabIJ4U8GE5SKoxSwET9floKRabNVHx1fvvgw65eJEXBqjYfJDsVvI18G4sBnoH5JVLR-d_oYjxbrbjdYtSdlMPEelXX7HjOEtnMgAJ2va-6WTdlDRe8Z8w4MuN-vpc20FimTVVqVL5-HToK0IxiuvUD8mju-LJNis2r3LFnbmcyB0tl1c_5DgNZ_AFhBo4eShl3Fl0WbedumZFR_q3HReFIdP_0KeRcjh6KWeOvImo0QCG4HUrAHklOOIzy117XYIYIZ8RMW3-QiI2CARavHoqqlSc8t2-0HashM_z_1WUDSReOpBpn7v0s66uQ_PHb1SJgmI2Y8e_K_CjsMESf5kH16lX1njkvY6gNEqDHL2_pyZfWv0fcNC3YMDKvzGW1wQuWX3d7NS3sLYtac01xGXTj4novS7FP6QyrTPH1TLcydDhn1y2rjuLpj8Li5p1-OXrEdR8FT_V9SeDjfr-lt7EoRP8FSjesnKwbW5MPs5gV0HDab_hzTWq_-a9hpsy2I1WYZcb9auwgC3zQAtY9HRpY9Fa9Vx6lbEhggd_OdfUASBWNhfoGHF7faBtBjyJYl2LDKR6Igk4I36vPMLS-lvCWO8TVv8pMQ2jd0IME_K9qmYd0vFRuBM7IIUPen5YWActkvWcIRyw-v0kK8z8jWLWyYfqtqmGdq727fSI2npUi5dl25z87HWFrDdMSpCyeO8rFx56lDjXt2hBDn28FlCEJRr-3KBWcfV3LO8OeIfi0IvKpHYjib5juOM8R9E2HE-XKZEe9yR9QCB0QUUfvTggZxEV8531nHjgjIi7uNAfCS-fcBQo1_E_tCTng7POo99PjOr7K4b06fCi-U_WPJSA3GaYXXvp9YKq8IWMnzs2ZGRRm_Zc85T26EVPfDkZEA7s3v6dr9_3NfQjKE06j-iZQ4WmOaHN9So4LHpPmzPUiBui3ds47fDNKPLKhFowcerpn5N2GPPV-GRMD_R51RuLp1t8FKWb__Q4LuwNMgUknAoGIbxlCLWmsus9zhA41k7crpldt-q4yKvxzQPa-jjjZddac9C5mrPhTYoz_tmTB2jRNVBh2Liyd2HvzDxGaBlCBOg3oYR85TEjMsLTv9yLXmSSXr8k80qtP0SJn7CwZSLemrFX8RTy70IOcHQYFsFm2PyTpBp3sLTkqUE6z-zQhoSp8SvFMuW4KXXH0_scQRBp0Vx2a76GonBKzBPy_OIt0NB-HPkT9yiPhrSy1pAEKFd8WyFZO3p3K8',
          ]
        },
        {
          title : 'Против кого воюем?',
          paragraphs :
          [
            'Вторая эпоха начинается с относительного мира, сразу после победы над темным божеством Морготом, первым Врагом. Однако созданные им орки остаются в Средиземье. На долгое время они предоставлены сами себе. Но новый Враг приближается, и они снова начинают собираться в армии.',
            'Орки — один из самых известных образов, созданных Толкином. В его книгах мы встречали их только как солдат на войне. Но что представляет собой их повседневная жизнь? Чем они занимаются, если не выполняют приказы воплощенных демонов? Есть ли у них шанс не быть слепыми инструментами зла?',
            'Пока неизвестно, будут ли орки в «Кольцах власти» полноценными персонажами, а не только вражеской армией. Мы не знаем, станут ли создатели сериала раскрывать легенду Толкина, по которой орки — это захваченные в плен и искаженные Врагом эльфы. Никто не может сказать, где прячутся другие, более опасные слуги Моргота — драконы и балроги. В начале новой истории зло ждет в тени, но не спит.',
          ]
        },
        {
          title : '',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu1eW3QZeNS3oBqCOvgYxk_nUm2F-Yevr6s4vhUmDP_cVlIiNraF6W9i-ewdBi4M1lUsBcE0smbV8-6BWw_tYCZgVFC_UrDaeSsDjbz5GAaPZlA9la6Qf_st6SiP_5ypHE9Dpn3oDvctcSMyzRg808AdKhsZP20-zqq2SkkV8_8npBTRs5v63XXvg4w3tpEXz-UT_ZOpWfG4MOfjTLtPr1QJCeKxoIayJPhne0ra950I126QlnFt-szn9MuE2vQ8qiUaEfVX8txxrEjK8fyQGYxiFTRUoBA4snSgbQMzQSifQ8Tu8ypIcWS5KrhK1LHbh15hk1NxoTIEaDvCjBE68mshFRi3HfJU96bFwnz3Ht3L6FU4VKtRfTC2rKFOvswomATNJrrsT7Alue-yitT8lAmeaVLScO6yACvzRIrSdfdhKlFWdte7VnaiS458MlfZiylVP12hnnUycuGhDXPM6xOGA-m76QTy7TTifMjd_hoF2KgTkr1pMcvmtk3MlX6wYCMUWv7ccFx9ZkGINb3ZX4-qn7wc55vwM7Uk4Er-DSKcQU1pvmMOPye1bL3GmfudCFdi21F8rrOEpvdJjNr0NSMi3RZ8VLOWeyuDD718FNfBZJhyUmffunJ6aefB8Q9oWUkDozrsj7rrfeHzTRg2WQNfplWS_WwxxSuyxY1c-7BlLp_Z8hMx3jUsS034-JRbS6yYd1qj23H_diduxTiEaB_IRmA95MH9YzfqMQYTN9CPWGCZXfGhtsmrMI3Mk3K-IWsUVn4cdhc1LItOuDcUV0skkXdUrZY5-L8ubMj2Aitcg4rr_GNOuuJ_7vrHkj5QyFQk3xH2ob-F5HoAyxk1P62p35G7UzEUcilLBr35VpsBqF7yGu5at3f26a4F8ADv14HGrPakDraieS18Tl5y3g7c6ZddtmxwDWa-y8gbsbKjopnQdtU2EHXqC0Nx_x5fBiTdNBHo1juy823gi_mHZJcIgim84oH45H2ve8eVO5kGVqFX0v6k8YPgfAMCHLK6oSaYUrrT9Ru9KkzMuDcWH8dgWboVrJK_cztsJ4v6TqeZwc9ouuLLNuX46_zGlHCUgRHo0RI8o7mAo_lLAdRzsCUjXdT5lrHSNqpCADK615eO5h_22qMYefm1b6aMu8EtnQBK4rKgjr7k8CmyT9tz0QHc7BJftOJwSiA2xsxc9DWhJFoYf1_1EnGsiARxf9iUTWlSt9gokPh9v2ikxrrOq9FOQen85cQ3aneneodScRoF1mUf0fVncUVjdwiO1bl_YG7R0L3e-Jf7442OfL0YkYZsV3vXpB97_bst7wu5gGtRwUtuuiwFPiK4azsLnb8ehZenW1J0bX5NonIKgFK2eesv3NH22DETPSbKQDh4lxZMope8Ey2f-v__ZWaGuk6qn0vL6f-iz7hidOa7iZZ8lcmQohJRP-T3SKAxQ0udNPVhZl5Qfdt2Vb0gjQ2w9BnezeVXPtps37Z19CXszbQBrJwEy6B6pYF15r8m-YcY-lGCUGCQ2Xniscao8gWFm_05a2QSGLzV8Nv3roeMuPGWm4HsWrzboZPwO7xlbgV8jCXZAoMqPiIAsCy-an2OGj6QgFjhmdV-pTKDaDeIi1z9-qQqlxB123gb8WzLRX9-WdyIJVa_UO6UMb1wbmRM84Fg2UfObrpkQ3wkuSx1D5i5WQabIJ4U8GE5SKoxSwET9floKRabNVHx1fvvgw65eJEXBqjYfJDsVvI18G4sBnoH5JVLR-d_oYjxbrbjdYtSdlMPEelXX7HjOEtnMgAJ2va-6WTdlDRe8Z8w4MuN-vpc20FimTVVqVL5-HToK0IxiuvUD8mju-LJNis2r3LFnbmcyB0tl1c_5DgNZ_AFhBo4eShl3Fl0WbedumZFR_q3HReFIdP_0KeRcjh6KWeOvImo0QCG4HUrAHklOOIzy117XYIYIZ8RMW3-QiI2CARavHoqqlSc8t2-0HashM_z_1WUDSReOpBpn7v0s66uQ_PHb1SJgmI2Y8e_K_CjsMESf5kH16lX1njkvY6gNEqDHL2_pyZfWv0fcNC3YMDKvzGW1wQuWX3d7NS3sLYtac01xGXTj4novS7FP6QyrTPH1TLcydDhn1y2rjuLpj8Li5p1-OXrEdR8FT_V9SeDjfr-lt7EoRP8FSjesnKwbW5MPs5gV0HDab_hzTWq_-a9hpsy2I1WYZcb9auwgC3zQAtY9HRpY9Fa9Vx6lbEhggd_OdfUASBWNhfoGHF7faBtBjyJYl2LDKR6Igk4I36vPMLS-lvCWO8TVv8pMQ2jd0IME_K9qmYd0vFRuBM7IIUPen5YWActkvWcIRyw-v0kK8z8jWLWyYfqtqmGdq727fSI2npUi5dl25z87HWFrDdMSpCyeO8rFx56lDjXt2hBDn28FlCEJRr-3KBWcfV3LO8OeIfi0IvKpHYjib5juOM8R9E2HE-XKZEe9yR9QCB0QUUfvTggZxEV8531nHjgjIi7uNAfCS-fcBQo1_E_tCTng7POo99PjOr7K4b06fCi-U_WPJSA3GaYXXvp9YKq8IWMnzs2ZGRRm_Zc85T26EVPfDkZEA7s3v6dr9_3NfQjKE06j-iZQ4WmOaHN9So4LHpPmzPUiBui3ds47fDNKPLKhFowcerpn5N2GPPV-GRMD_R51RuLp1t8FKWb__Q4LuwNMgUknAoGIbxlCLWmsus9zhA41k7crpldt-q4yKvxzQPa-jjjZddac9C5mrPhTYoz_tmTB2jRNVBh2Liyd2HvzDxGaBlCBOg3oYR85TEjMsLTv9yLXmSSXr8k80qtP0SJn7CwZSLemrFX8RTy70IOcHQYFsFm2PyTpBp3sLTkqUE6z-zQhoSp8SvFMuW4KXXH0_scQRBp0Vx2a76GonBKzBPy_OIt0NB-HPkT9yiPhrSy1pAEKFd8WyFZO3p3K8',
          ]
        },
        {
          title : 'Где же сам Властелин колец?',
          paragraphs :
          [
            'В романе Толкина и в кинотрилогии Джексона главный антагонист всегда оставался за кадром. Но именно во Вторую эпоху он стал известен как Властелин колец. В эти времена «Саурон» не только страшное имя. Он принимает непосредственное участие во всех основных событиях, он один из главных героев.',
            'Неудивительно, что фанаты уже давно ищут Саурона среди всех оригинальных персонажей «Колец власти». Мы его еще не видели или он прячется у всех под носом? Саурон описан в книгах Толкина как манипулятор и мастер иллюзий. Удастся ли ему обмануть не только мудрейших из эльфов и сильнейших из людей, но и нас, зрителей?',
          ]
        },
      ],
      card :
      {
        caption : 'с 2022, США',
        title : 'Властелин колец: Кольца власти',
        genre : 'фэнтези, боевик',
        producer: 'Уэйн Йип, Хуан Антонио Байона, Шарлотта Брандстром',
        roles : 'Морвет Кларк, Ленни Генри, Исмаэль Крус Кордова',
        poster:  'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/02c98de1-7684-4158-8a1b-875b88b13db2/200x300',
        rating : '5.6',
      },
    },
  },
  {
    id : 3,
    mainPhoto : 'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cfeh2H/x-d3ZEGvLLWrKw1QORkCk7_QVjD0cgGjaQKKmjswKm3Y2iSZeNI2cYuFeO8JgdgwhesEvpJueP94LJVwzb-IVoc0YiCTaXqg-3gLxS7YwwO6EpZjtGWVcnxVHc23O-Hn1Jc8EfFfOSlMA_zvXxdOJ9e9k-mQ6L17ImIQMI0k2cZNaryrR_kjPunwzVu5UIWdYhld-On_DOx7jAPStv-hZthedhb9m7kox0x1_h-UDefRulpn0_WzsOEmwzbFYpOCgSI07k5wZ3duMgYVcZrBFu1XXTzrsk5ttkMEETt-r6aekn4X-dhybgEGdPBcEwsuFrMTrtmx9D6urs2xDihejsOo-i0OMSq0bjxAU_4TzhUoV5H0Iz2BZL6Iyt_6eqCv3Nh-n3_S_2aMDfo0G5lLIha4Uutbc_jy4yNAsQlvV0aKbv3sTzHvvq48DRxw08bUqVbedCd-SeK4S4Xa8HHk4R0SN53-1nEqjMizMFtYSyUfsp3jWbe18qDuQHKC7ZmJi2u2roe84nDsNQ-SfJUHlembWffsswzr_gyOnfF4oe2VGfyX9RJ7LMVHPbZf24GmXvSYZlhwcLPnY4G7DSrXCY7hvGNNPWyx4nEKFXEazV0qWp51o_NN775DBBiyeWihF5E_XfNfuatNhvA-ERWGaBB03CwZvz20bGyD8cgimcMKbj3mgfXh_2nwx9F6EgnT6dtc9-J-CGO_xQud9HUqbpnWvRW9WHHpCAJwspvdhm0YsNjnlLNzPWilCPGOo9wADWZzoQm_6j0i-8ZY9hXPHybXkXDu_oor_gqCk7AwoeEV2frcvVix6kjN8L6bVY9tFr6Vr5N6ej9la46yzegQi8zh_OaI9-7243rP2LEZi1lq0JF5orHApvmAxRI88mom0Ja93_pdcaJNA7Jy0dlA6Fj9WSEcM739qG2MdkbqXMzGJrzqyPEtcGq2g1Z3kUYRJpBctiozBG36gkGfMvksZx0Qutv9njHngQX6ttZVwy5T-9Wt2TY5syZkC_0GYxhJjGAzpI71r3fjfcoRfxsO0anYlDektcalMIVClzB9LeXRFnnQNV52aEjN8vYXEUegV7-RKRj-OHQmZ8I-CKpVCIpgeWqPcOvw4nyBHPhcR1dpGpN_p_ZD7TNNg520eOhjklM9Gb7eeKTCQDN-XpcB7JiwG--ScDv1ISZNtAxr0IKCIjzijngpvmszgll4kUOUJJLStm11jGD-xQQYMH_vrxSaedn52LKggYU8fZ0YTK2aO5NuFno892snQjJAJduJzGd2awD_p3ajuoCSfJvKmarTV7diNs2uvExJUvE1ZGfWG3Rcc5e3KoxH_HhWHUlhlbcc7ZZ-ebymJAzywKrRDoqut2JIMGs3L3VOlvzaCN0pUl24avfIrLLLRlR6dGlmnR292LVS8OTIgnP_nNOJplE-nGyUOjE1KyfCMw4gUYnPIH3kCPzmt61-jR2w3Q2UKhnUMW_1i-V5BMTY8D3r5xYe-p41VLepQA79Nx2USSSYf9wgHjFxv2ApjTUNb1HASiczKYw3JvWj8AvZ-x3PFqJf0nfh_UijtwINFPo_p6_XEHwQf9q9KEgLcnJRnUSmmbKQZlB5MT2o4QC8SGkZSg6gsuxGNmpxqvLPGPkVTh-uWJX0pD2NLrnFDdc1cSKnHh700HkY8eGPhL01WFRIpRL9l6fWtTo34W4N-UgsVA6K5vEgTjEseStwSNF_1o8Yb9ZR_2__i-0zigXU-XKjLF6UfR5zm7mqSYJ1_tbZxmbS_1VkXjU6f6vni30EIN2HTyM6rQQ-43mvuofbdlxG0SSX0_5sMoimO0MGk3g_aCNfm31UuJTxKQoAuDKRE4cvF7pRb5OxvHjvrAZyRWRTw4tge2pBvq9-4XVIFLFQghEsGdT-KjJKo7aDyFS5PmnuH5w7VjISf-MKTfn-VVDN5ZK0kuRTv300IyEFMUBrHIBFqbIlT7DiP--1itX7VY4ZahddOGV3jK42w0xXu_HhK5kYMhv-2L5rAwWxfd1VQCDSepwtn3b6_e5uS_bF4hgCBuF140F4o7zl-o4RfpoG0a1e1Hup9Y7ssYVNkjZ96u2W2vwbPxT6bk_Lcj7UX0dnn__XIdtzeTpgqEj8QuQTiI2sd2POuq0_4z3DVLCdThknkJ79rPOFrbkDhdV0sKRjF9CzHn1TuSkKBHI3FNAN5lc73SQZdTk94aNC-cYqWQmPY39pwHfmsaJzw1D0G84RYNObdqd4SeY5wQRZ-Dhk7Z6Z9l45Vbijj8MzPdFRSCxV-xvnELj0PquhBfvM4JbESqC7ZEn2rzDmOgvTuxVAlS3ZGfcq9s3kPooCkDs9qGWalDTYs1S_q4qEvLHXXIzv3jIfJpE4cHhhYQH7R6IdioYrNCrEfu34rDKL3PLayl3n2tyzovmN6ngJQlV-cKKpEVG0HD8ce6qNRvK5VFQE5J6zVeeesni8o-ULe0HgUMRGoTviCTDjMGM5x5Q22oYXZdEUu2d1zud3hk0VsTykophYeVfwlLYsS0I09tlegWpWO9RnVHFwtC4uQjpOJBaKy6k0qIN4ovVrPs0c-ZHJHiZd2TOl_0ojvgbLG_U_5CydmX9ffpx_64zD_fnencDk37zcYV4xd3vgpwNxCCgfxgkjf6lAsCx2a3PCXPFWDVugHt026n1IbLbDwFx7siokHd1_HnAQdqsEgzHyW9ZFZla2mGmf_Xq_oK-JvQ1hnEGM57rpzDrrMer4yV43kQEfJpHafu_-S2sxQwoVcj5i7RgVNVE7lXcuwwQ9etcZzy8Sctsu2bI1vGGhyvGIKZ6IByM2II-5Iz7mO05U8hPLFCWZFDVt-IXiuwZAnfR5ay3akn3fept4qoCO_P8RF8bm0bcZ4dtxsPrsp0N1Qe0eycGpd26PMCl54zsKlDhdxlcnUFt4offK7P6KAtFzdmVnFdl12H9ctSJESDJ51FlJZhkyWq0Rsn-_aA',
    category : 'Дом дракона',
    title : 'Таргариены готовятся к игре престолов: что происходит в новой серии «Дома Дракона»',
    data : '29.08.2022 г.',
    views : 6531,
    comments :
    [
      {
        id : 8,
        author :
        {
          firstName : 'Константин',
          lastName : 'Минин',
          mainPhoto : 'https://avatarko.ru/img/kartinka/1/Jack_Vorobei.jpg',
          id : '44444444',
        },
        text : `Первая серия вообще не зашла… Ни одного запоминающегося момента. Из актёров понравились только Мэтт Смит и Рис Эванс. Остальные не впечатлили. Драконы красивые. Темнокожий товарищ в роли Велариона, у которого по книгам валирийская внешность, смотрится очень инородно и не к месту. К сожалению, как и многие современные фильмы/сериалы, очевидно, будет подпорчен толерантными перегибами… На выходе получится второй Ведьмак.`,
        data : '29 августа, 20:07',
        rating : -5,
        answers :
        [
          {
            id : 9,
            author :
            {
                firstName : 'Евгения',
                lastName : 'Петрова',
                mainPhoto : 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
                id : '11111111',
            },
            consumer :
            {
              firstName : 'Кирилл',
              lastName : 'Рогов',
              mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
              id : '172787588',
            },
            text : `Не хватает слова 'повесточка'`,
            data : '30 августа, 03:24',
            rating : -7,
          }
        ]
      },
    ],
    article :
    {
      title : 'Таргариены готовятся к игре престолов: что происходит в новой серии «Дома Дракона»',
      data : '29.08.2022 г.',
      mainPhoto : '',
      summary : 'Король Визерис решает вопрос престолонаследия, его брат Деймон бросает вызов короне, принцесса Рейнира пытается освоиться в роли наследницы — второй эпизод приквела «Игры престолов» углубляется в характеры персонажей. Кинопоиск продолжает делиться впечатлениями от самого ожидаемого телешоу года.',
      blocks :
      [
        {
          title : 'Что происходит во второй серии',
          paragraphs :
          [
            'Мореплаватель и член Малого совета Корлис Веларион (Стив Туссэн) обеспокоен военными действиями на Ступенях — это острова, находящиеся между Вестеросом и материком Эссос, который занимают Вольные города. Ступени захватил жестокий адмирал Триархии (объединенные силы Мира, Лиса и Тироша) по прозвищу Кормилец Крабов, и Корлис хочет от него избавиться. Но король Визерис Таргариен (Пэдди Консидайн) не разрешает активные действия, потому что не хочет ссориться с могущественными Вольными городами. Помощь предлагает Рейнира Таргариен (Милли Олкок). Она хочет отправиться туда верхом на своей драконихе Сиракс, однако и ее отец, и десница Отто Хайтауэр (Рис Иванс) против. Они предлагают ей другое задание — назвать нового главу королевской гвардии, и принцесса останавливает выбор на сире Кристоне Коле (Фабьен Франкель), который недавно победил ее дядю Деймона Таргариена (Мэтт Смит) на рыцарском турнире.',
            'Всех приближенных к трону продолжает терзать вопрос престолонаследия: хотя Визерис и объявил своей наследницей Рейниру, советники настаивают, чтобы король женился после смерти жены в надежде, что новый брак принесет наследника мужского пола. Корлис и его жена Рейнис (Ив Бест), двоюродная сестра Визериса, предлагают королю в качестве новой жены свою малолетнюю дочь Лейну. Это укрепит династию: у Веларионов мощный флот и древние валирийские корни. Против этого выступает Отто, да и дочь короля, Рейнира, встревожена тем, что у отца может появиться новый наследник. Сам король испытывает симпатию не к Лейне, а к Алисенте Хайтауэр (Эмили Кэри), дочери своего десницы, вместе с которой они изучают историю. Смышленая девушка и лучшая подруга Рейниры даже чинит фигурку дракончика, которую Визерис недавно разбил.',
          ]
        },
        {
          title : 'Эмили Кэри',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu1eW3QZeNS3oBqCOvgYxk_nUm2F-YfuLat4_gDk2CkJ11LitrXFqK5iu7gfUfrYloBsktfhJ3OU5zqAGw_tYCZgVFC_UrDaeSsDjbz5GAaPZlA9la6Qf_st6SiP_5ypHE9Dpn3oDvctcSMyzRg808AdKhsZP20-zqq2SkkV8_8npBTRs5v63XXvg4w3tpEXz-UT_ZOpWfG4MOfjTLtPr1QJCeKxoIayJPhne0ra950I126QlnFt-szn9MuE2vQ8qiUaEfVX8txxrEjK8fyQGYxiFTRUoBA4snSgbQMzQSifQ8Tu8ypIcWS5KrhK1LHbh15hk1NxoTIEaDvCjBE68mshFRi3HfJU96bFwnz3Ht3L6FU4VKtRfTC2rKFOvswomATNJrrsT7Alue-yitT8lAmeaVLScO6yACvzRIrSdfdhKlFWdte7VnaiS458MlfZiylVP12hnnUycuGhDXPM6xOGA-m76QTy7TTifMjd_hoF2KgTkr1pMcvmtk3MlX6wYCMUWv7ccFx9ZkGINb3ZX4-qn7wc55vwM7Uk4Er-DSKcQU1pvmMOPye1bL3GmfudCFdi21F8rrOEpvdJjNr0NSMi3RZ8VLOWeyuDD718FNfBZJhyUmffunJ6aefB8Q9oWUkDozrsj7rrfeHzTRg2WQNfplWS_WwxxSuyxY1c-7BlLp_Z8hMx3jUsS034-JRbS6yYd1qj23H_diduxTiEaB_IRmA95MH9YzfqMQYTN9CPWGCZXfGhtsmrMI3Mk3K-IWsUVn4cdhc1LItOuDcUV0skkXdUrZY5-L8ubMj2Aitcg4rr_GNOuuJ_7vrHkj5QyFQk3xH2ob-F5HoAyxk1P62p35G7UzEUcilLBr35VpsBqF7yGu5at3f26a4F8ADv14HGrPakDraieS18Tl5y3g7c6ZddtmxwDWa-y8gbsbKjopnQdtU2EHXqC0Nx_x5fBiTdNBHo1juy823gi_mHZJcIgim84oH45H2ve8eVO5kGVqFX0v6k8YPgfAMCHLK6oSaYUrrT9Ru9KkzMuDcWH8dgWboVrJK_cztsJ4v6TqeZwc9ouuLLNuX46_zGlHCUgRHo0RI8o7mAo_lLAdRzsCUjXdT5lrHSNqpCADK615eO5h_22qMYefm1b6aMu8EtnQBK4rKgjr7k8CmyT9tz0QHc7BJftOJwSiA2xsxc9DWhJFoYf1_1EnGsiARxf9iUTWlSt9gokPh9v2ikxrrOq9FOQen85cQ3aneneodScRoF1mUf0fVncUVjdwiO1bl_YG7R0L3e-Jf7442OfL0YkYZsV3vXpB97_bst7wu5gGtRwUtuuiwFPiK4azsLnb8ehZenW1J0bX5NonIKgFK2eesv3NH22DETPSbKQDh4lxZMope8Ey2f-v__ZWaGuk6qn0vL6f-iz7hidOa7iZZ8lcmQohJRP-T3SKAxQ0udNPVhZl5Qfdt2Vb0gjQ2w9BnezeVXPtps37Z19CXszbQBrJwEy6B6pYF15r8m-YcY-lGCUGCQ2Xniscao8gWFm_05a2QSGLzV8Nv3roeMuPGWm4HsWrzboZPwO7xlbgV8jCXZAoMqPiIAsCy-an2OGj6QgFjhmdV-pTKDaDeIi1z9-qQqlxB123gb8WzLRX9-WdyIJVa_UO6UMb1wbmRM84Fg2UfObrpkQ3wkuSx1D5i5WQabIJ4U8GE5SKoxSwET9floKRabNVHx1fvvgw65eJEXBqjYfJDsVvI18G4sBnoH5JVLR-d_oYjxbrbjdYtSdlMPEelXX7HjOEtnMgAJ2va-6WTdlDRe8Z8w4MuN-vpc20FimTVVqVL5-HToK0IxiuvUD8mju-LJNis2r3LFnbmcyB0tl1c_5DgNZ_AFhBo4eShl3Fl0WbedumZFR_q3HReFIdP_0KeRcjh6KWeOvImo0QCG4HUrAHklOOIzy117XYIYIZ8RMW3-QiI2CARavHoqqlSc8t2-0HashM_z_1WUDSReOpBpn7v0s66uQ_PHb1SJgmI2Y8e_K_CjsMESf5kH16lX1njkvY6gNEqDHL2_pyZfWv0fcNC3YMDKvzGW1wQuWX3d7NS3sLYtac01xGXTj4novS7FP6QyrTPH1TLcydDhn1y2rjuLpj8Li5p1-OXrEdR8FT_V9SeDjfr-lt7EoRP8FSjesnKwbW5MPs5gV0HDab_hzTWq_-a9hpsy2I1WYZcb9auwgC3zQAtY9HRpY9Fa9Vx6lbEhggd_OdfUASBWNhfoGHF7faBtBjyJYl2LDKR6Igk4I36vPMLS-lvCWO8TVv8pMQ2jd0IME_K9qmYd0vFRuBM7IIUPen5YWActkvWcIRyw-v0kK8z8jWLWyYfqtqmGdq727fSI2npUi5dl25z87HWFrDdMSpCyeO8rFx56lDjXt2hBDn28FlCEJRr-3KBWcfV3LO8OeIfi0IvKpHYjib5juOM8R9E2HE-XKZEe9yR9QCB0QUUfvTggZxEV8531nHjgjIi7uNAfCS-fcBQo1_E_tCTng7POo99PjOr7K4b06fCi-U_WPJSA3GaYXXvp9YKq8IWMnzs2ZGRRm_Zc85T26EVPfDkZEA7s3v6dr9_3NfQjKE06j-iZQ4WmOaHN9So4LHpPmzPUiBui3ds47fDNKPLKhFowcerpn5N2GPPV-GRMD_R51RuLp1t8FKWb__Q4LuwNMgUknAoGIbxlCLWmsus9zhA41k7crpldt-q4yKvxzQPa-jjjZddac9C5mrPhTYoz_tmTB2jRNVBh2Liyd2HvzDxGaBlCBOg3oYR85TEjMsLTv9yLXmSSXr8k80qtP0SJn7CwZSLemrFX8RTy70IOcHQYFsFm2PyTpBp3sLTkqUE6z-zQhoSp8SvFMuW4KXXH0_scQRBp0Vx2a76GonBKzBPy_OIt0NB-HPkT9yiPhrSy1pAEKFd8WyFZO3p3K8',
          ]
        },
        {
          paragraphs :
          [
            'Придворный быт нарушает тревожная новость: в прошлой серии Деймон после ссоры покинул своего брата-короля, а теперь выясняется, что попутно он утащил драконье яйцо. Свое действие принц обосновал древними таргариенскими обычаями, мол, у ребенка с колыбели должен быть свой дракон. А скорое появление этого младенца следует из заявления Деймона о том, что он взял в жены Мисарию (Соноя Мидзуно), хотя у него уже есть законная жена Рея Ройс (тут он также аппелирует к валирийским обычаям многоженства). Визерис и его приближенные видят в наглости Деймона угрозу короне, поэтому на Драконий Камень отправляется делегация во главе с Отто. Десница угрожает опальному принцу, однако тот в ответ призывает своего ощетинившегося дракона Караксеса. Взрывоопасный конфликт предотвращает Рейнира, прилетевшая на своей драконихе Сиракс без ведома отца. Принцесса предлагает дяде убить ее и избавиться от нее, как от наследницы, если он так хочет взойти на Железный трон. Но Деймон сдается, отдает ей яйцо и даже признает, что никакого ребенка Мисария пока не носит.',
            'Визериса продолжает мучить вопрос повторной женитьбы. Рейнира говорит отцу, что в первую очередь он должен думать о своем государстве и вступить в брак. Король собирает Малый совет и объявляет о своем решении: его новой женой станет… Алисента. Отто доволен (это и был его хитрый план), Рейнира в шоке от того, что ее лучшая подруга теперь станет ее мачехой. Больше всего разгневан Корлис, дочь которого отверг Визерис. Морской Змей покидает Королевскую Гавань и отправляется с визитом к Деймону. Он предлагает Порочному принцу объединить усилия и выбить Кормильца Крабов со Ступеней, намекая на дальнейшее выгодное сотрудничество.',
          ]
        },
        {
          title : 'Вердикт',
          paragraphs :
          [
            'Вторая серия «Дома Дракона» замедляет темп, набранный первой. Здесь шоураннеры Райан Кондал и Мигель Сапочник познакомили нас с десятком ключевых персонажей, а теперь занялись детализацией характеров. Нежелание Визериса повторно жениться много говорит о нем: обычно королям в мире Джорджа Мартина подобные сантименты чужды. Рейнира своим вольным характером все больше напоминает Дейенерис и немного Джона Сноу, в котором, как мы помним, тоже текла кровь Таргариенов. Корлис оказывается не просто королевским советником и опытным мореходом, но и хитроумным интриганом. Пусть он и сдал этот раунд Отто, но явно строит долгоиграющие планы на будущее, важную роль в которых суждено сыграть Деймону. В следующих эпизодах, очевидно, продолжит закручиваться эта пружина придворных сражений, которые скоро перерастут в полномасштабную гражданскую войну.',
          ]
        }
      ],
      card :
      {
        caption : 'с 2022, США',
        title : 'Дом Дракона',
        genre : 'фэнтези, боевик',
        age : '18+',
        producer: 'Клер Килнер, Мигель Сапочник, Грег Яйтанс',
        roles : 'Пэдди Консидайн, Мэтт Смит, Эмма Д’Арси',
        poster:  'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/4939065f-efa2-4192-a3c2-cec534e79e01/200x300',
        rating : '8.4',
      },
    }
  },
  {
    id : 4,
    mainPhoto : 'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cfeh2H/x-d3ZEGvLLWrKw1QORkCk7_QVjD0cgGjaQKKmjswKm3Y2iSZeNI2cYuFeO8JQZgyB6oHvpJ6uOp4LJQxWWlcgsf3NjXE6Xr07qwf0fsMA5S6UsPjtGWVcnxVHc23O-Hn1Jc8EfFfOSlMA_zvXxdOJ9e9k-mQ6L17ImIQMI0k2cZNaryrR_kjPunwzVu5UIWdYhld-On_DOx7jAPStv-hZthedhb9m7kox0x1_h-UDefRulpn0_WzsOEmwzbFYpOCgSI07k5wZ3duMgYVcZrBFu1XXTzrsk5ttkMEETt-r6aekn4X-dhybgEGdPBcEwsuFrMTrtmx9D6urs2xDihejsOo-i0OMSq0bjxAU_4TzhUoV5H0Iz2BZL6Iyt_6eqCv3Nh-n3_S_2aMDfo0G5lLIha4Uutbc_jy4yNAsQlvV0aKbv3sTzHvvq48DRxw08bUqVbedCd-SeK4S4Xa8HHk4R0SN53-1nEqjMizMFtYSyUfsp3jWbe18qDuQHKC7ZmJi2u2roe84nDsNQ-SfJUHlembWffsswzr_gyOnfF4oe2VGfyX9RJ7LMVHPbZf24GmXvSYZlhwcLPnY4G7DSrXCY7hvGNNPWyx4nEKFXEazV0qWp51o_NN775DBBiyeWihF5E_XfNfuatNhvA-ERWGaBB03CwZvz20bGyD8cgimcMKbj3mgfXh_2nwx9F6EgnT6dtc9-J-CGO_xQud9HUqbpnWvRW9WHHpCAJwspvdhm0YsNjnlLNzPWilCPGOo9wADWZzoQm_6j0i-8ZY9hXPHybXkXDu_oor_gqCk7AwoeEV2frcvVix6kjN8L6bVY9tFr6Vr5N6ej9la46yzegQi8zh_OaI9-7243rP2LEZi1lq0JF5orHApvmAxRI88mom0Ja93_pdcaJNA7Jy0dlA6Fj9WSEcM739qG2MdkbqXMzGJrzqyPEtcGq2g1Z3kUYRJpBctiozBG36gkGfMvksZx0Qutv9njHngQX6ttZVwy5T-9Wt2TY5syZkC_0GYxhJjGAzpI71r3fjfcoRfxsO0anYlDektcalMIVClzB9LeXRFnnQNV52aEjN8vYXEUegV7-RKRj-OHQmZ8I-CKpVCIpgeWqPcOvw4nyBHPhcR1dpGpN_p_ZD7TNNg520eOhjklM9Gb7eeKTCQDN-XpcB7JiwG--ScDv1ISZNtAxr0IKCIjzijngpvmszgll4kUOUJJLStm11jGD-xQQYMH_vrxSaedn52LKggYU8fZ0YTK2aO5NuFno892snQjJAJduJzGd2awD_p3ajuoCSfJvKmarTV7diNs2uvExJUvE1ZGfWG3Rcc5e3KoxH_HhWHUlhlbcc7ZZ-ebymJAzywKrRDoqut2JIMGs3L3VOlvzaCN0pUl24avfIrLLLRlR6dGlmnR292LVS8OTIgnP_nNOJplE-nGyUOjE1KyfCMw4gUYnPIH3kCPzmt61-jR2w3Q2UKhnUMW_1i-V5BMTY8D3r5xYe-p41VLepQA79Nx2USSSYf9wgHjFxv2ApjTUNb1HASiczKYw3JvWj8AvZ-x3PFqJf0nfh_UijtwINFPo_p6_XEHwQf9q9KEgLcnJRnUSmmbKQZlB5MT2o4QC8SGkZSg6gsuxGNmpxqvLPGPkVTh-uWJX0pD2NLrnFDdc1cSKnHh700HkY8eGPhL01WFRIpRL9l6fWtTo34W4N-UgsVA6K5vEgTjEseStwSNF_1o8Yb9ZR_2__i-0zigXU-XKjLF6UfR5zm7mqSYJ1_tbZxmbS_1VkXjU6f6vni30EIN2HTyM6rQQ-43mvuofbdlxG0SSX0_5sMoimO0MGk3g_aCNfm31UuJTxKQoAuDKRE4cvF7pRb5OxvHjvrAZyRWRTw4tge2pBvq9-4XVIFLFQghEsGdT-KjJKo7aDyFS5PmnuH5w7VjISf-MKTfn-VVDN5ZK0kuRTv300IyEFMUBrHIBFqbIlT7DiP--1itX7VY4ZahddOGV3jK42w0xXu_HhK5kYMhv-2L5rAwWxfd1VQCDSepwtn3b6_e5uS_bF4hgCBuF140F4o7zl-o4RfpoG0a1e1Hup9Y7ssYVNkjZ96u2W2vwbPxT6bk_Lcj7UX0dnn__XIdtzeTpgqEj8QuQTiI2sd2POuq0_4z3DVLCdThknkJ79rPOFrbkDhdV0sKRjF9CzHn1TuSkKBHI3FNAN5lc73SQZdTk94aNC-cYqWQmPY39pwHfmsaJzw1D0G84RYNObdqd4SeY5wQRZ-Dhk7Z6Z9l45Vbijj8MzPdFRSCxV-xvnELj0PquhBfvM4JbESqC7ZEn2rzDmOgvTuxVAlS3ZGfcq9s3kPooCkDs9qGWalDTYs1S_q4qEvLHXXIzv3jIfJpE4cHhhYQH7R6IdioYrNCrEfu34rDKL3PLayl3n2tyzovmN6ngJQlV-cKKpEVG0HD8ce6qNRvK5VFQE5J6zVeeesni8o-ULe0HgUMRGoTviCTDjMGM5x5Q22oYXZdEUu2d1zud3hk0VsTykophYeVfwlLYsS0I09tlegWpWO9RnVHFwtC4uQjpOJBaKy6k0qIN4ovVrPs0c-ZHJHiZd2TOl_0ojvgbLG_U_5CydmX9ffpx_64zD_fnencDk37zcYV4xd3vgpwNxCCgfxgkjf6lAsCx2a3PCXPFWDVugHt026n1IbLbDwFx7siokHd1_HnAQdqsEgzHyW9ZFZla2mGmf_Xq_oK-JvQ1hnEGM57rpzDrrMer4yV43kQEfJpHafu_-S2sxQwoVcj5i7RgVNVE7lXcuwwQ9etcZzy8Sctsu2bI1vGGhyvGIKZ6IByM2II-5Iz7mO05U8hPLFCWZFDVt-IXiuwZAnfR5ay3akn3fept4qoCO_P8RF8bm0bcZ4dtxsPrsp0N1Qe0eycGpd26PMCl54zsKlDhdxlcnUFt4offK7P6KAtFzdmVnFdl12H9ctSJESDJ51FlJZhkyWq0Rsn-_aA',
    category : 'Интервью',
    title : 'Вигго Мортенсен — об оптимизме, любви к Дэвиду Кроненбергу и роли во «Властелине колец»',
    data : '31.08.2022 г.',
    views : 1223,
    comments : [],
    article :
    {
      title : 'Вигго Мортенсен — об оптимизме, любви к Дэвиду Кроненбергу и роли во «Властелине колец»',
      data : '31.08.2022 г.',
      mainPhoto : 'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cfeh2H/x-d3ZEGvLLWrKw1QORkCk7_QVjD0cgGjaQKKmjswKm3Y2iSZeNI2cYuFeO8JQZgyB6oHvpJ6uOp4LJQxWWlcgsf3NjXE6Xr07qwf0fsMA5S6UsPjtGWVcnxVHc23O-Hn1Jc8EfFfOSlMA_zvXxdOJ9e9k-mQ6L17ImIQMI0k2cZNaryrR_kjPunwzVu5UIWdYhld-On_DOx7jAPStv-hZthedhb9m7kox0x1_h-UDefRulpn0_WzsOEmwzbFYpOCgSI07k5wZ3duMgYVcZrBFu1XXTzrsk5ttkMEETt-r6aekn4X-dhybgEGdPBcEwsuFrMTrtmx9D6urs2xDihejsOo-i0OMSq0bjxAU_4TzhUoV5H0Iz2BZL6Iyt_6eqCv3Nh-n3_S_2aMDfo0G5lLIha4Uutbc_jy4yNAsQlvV0aKbv3sTzHvvq48DRxw08bUqVbedCd-SeK4S4Xa8HHk4R0SN53-1nEqjMizMFtYSyUfsp3jWbe18qDuQHKC7ZmJi2u2roe84nDsNQ-SfJUHlembWffsswzr_gyOnfF4oe2VGfyX9RJ7LMVHPbZf24GmXvSYZlhwcLPnY4G7DSrXCY7hvGNNPWyx4nEKFXEazV0qWp51o_NN775DBBiyeWihF5E_XfNfuatNhvA-ERWGaBB03CwZvz20bGyD8cgimcMKbj3mgfXh_2nwx9F6EgnT6dtc9-J-CGO_xQud9HUqbpnWvRW9WHHpCAJwspvdhm0YsNjnlLNzPWilCPGOo9wADWZzoQm_6j0i-8ZY9hXPHybXkXDu_oor_gqCk7AwoeEV2frcvVix6kjN8L6bVY9tFr6Vr5N6ej9la46yzegQi8zh_OaI9-7243rP2LEZi1lq0JF5orHApvmAxRI88mom0Ja93_pdcaJNA7Jy0dlA6Fj9WSEcM739qG2MdkbqXMzGJrzqyPEtcGq2g1Z3kUYRJpBctiozBG36gkGfMvksZx0Qutv9njHngQX6ttZVwy5T-9Wt2TY5syZkC_0GYxhJjGAzpI71r3fjfcoRfxsO0anYlDektcalMIVClzB9LeXRFnnQNV52aEjN8vYXEUegV7-RKRj-OHQmZ8I-CKpVCIpgeWqPcOvw4nyBHPhcR1dpGpN_p_ZD7TNNg520eOhjklM9Gb7eeKTCQDN-XpcB7JiwG--ScDv1ISZNtAxr0IKCIjzijngpvmszgll4kUOUJJLStm11jGD-xQQYMH_vrxSaedn52LKggYU8fZ0YTK2aO5NuFno892snQjJAJduJzGd2awD_p3ajuoCSfJvKmarTV7diNs2uvExJUvE1ZGfWG3Rcc5e3KoxH_HhWHUlhlbcc7ZZ-ebymJAzywKrRDoqut2JIMGs3L3VOlvzaCN0pUl24avfIrLLLRlR6dGlmnR292LVS8OTIgnP_nNOJplE-nGyUOjE1KyfCMw4gUYnPIH3kCPzmt61-jR2w3Q2UKhnUMW_1i-V5BMTY8D3r5xYe-p41VLepQA79Nx2USSSYf9wgHjFxv2ApjTUNb1HASiczKYw3JvWj8AvZ-x3PFqJf0nfh_UijtwINFPo_p6_XEHwQf9q9KEgLcnJRnUSmmbKQZlB5MT2o4QC8SGkZSg6gsuxGNmpxqvLPGPkVTh-uWJX0pD2NLrnFDdc1cSKnHh700HkY8eGPhL01WFRIpRL9l6fWtTo34W4N-UgsVA6K5vEgTjEseStwSNF_1o8Yb9ZR_2__i-0zigXU-XKjLF6UfR5zm7mqSYJ1_tbZxmbS_1VkXjU6f6vni30EIN2HTyM6rQQ-43mvuofbdlxG0SSX0_5sMoimO0MGk3g_aCNfm31UuJTxKQoAuDKRE4cvF7pRb5OxvHjvrAZyRWRTw4tge2pBvq9-4XVIFLFQghEsGdT-KjJKo7aDyFS5PmnuH5w7VjISf-MKTfn-VVDN5ZK0kuRTv300IyEFMUBrHIBFqbIlT7DiP--1itX7VY4ZahddOGV3jK42w0xXu_HhK5kYMhv-2L5rAwWxfd1VQCDSepwtn3b6_e5uS_bF4hgCBuF140F4o7zl-o4RfpoG0a1e1Hup9Y7ssYVNkjZ96u2W2vwbPxT6bk_Lcj7UX0dnn__XIdtzeTpgqEj8QuQTiI2sd2POuq0_4z3DVLCdThknkJ79rPOFrbkDhdV0sKRjF9CzHn1TuSkKBHI3FNAN5lc73SQZdTk94aNC-cYqWQmPY39pwHfmsaJzw1D0G84RYNObdqd4SeY5wQRZ-Dhk7Z6Z9l45Vbijj8MzPdFRSCxV-xvnELj0PquhBfvM4JbESqC7ZEn2rzDmOgvTuxVAlS3ZGfcq9s3kPooCkDs9qGWalDTYs1S_q4qEvLHXXIzv3jIfJpE4cHhhYQH7R6IdioYrNCrEfu34rDKL3PLayl3n2tyzovmN6ngJQlV-cKKpEVG0HD8ce6qNRvK5VFQE5J6zVeeesni8o-ULe0HgUMRGoTviCTDjMGM5x5Q22oYXZdEUu2d1zud3hk0VsTykophYeVfwlLYsS0I09tlegWpWO9RnVHFwtC4uQjpOJBaKy6k0qIN4ovVrPs0c-ZHJHiZd2TOl_0ojvgbLG_U_5CydmX9ffpx_64zD_fnencDk37zcYV4xd3vgpwNxCCgfxgkjf6lAsCx2a3PCXPFWDVugHt026n1IbLbDwFx7siokHd1_HnAQdqsEgzHyW9ZFZla2mGmf_Xq_oK-JvQ1hnEGM57rpzDrrMer4yV43kQEfJpHafu_-S2sxQwoVcj5i7RgVNVE7lXcuwwQ9etcZzy8Sctsu2bI1vGGhyvGIKZ6IByM2II-5Iz7mO05U8hPLFCWZFDVt-IXiuwZAnfR5ay3akn3fept4qoCO_P8RF8bm0bcZ4dtxsPrsp0N1Qe0eycGpd26PMCl54zsKlDhdxlcnUFt4offK7P6KAtFzdmVnFdl12H9ctSJESDJ51FlJZhkyWq0Rsn-_aA',
      summary : 'В российский прокат выходит фантастический боди-хоррор «Преступления будущего» Дэвида Кроненберга о недалеком будущем, в котором люди почти перестали чувствовать боль, зато научились отращивать разные и порой неожиданные органы. Герой Вигго Мортенсена использует эту новую возможность тела, чтобы устраивать перформансы с прилюдным извлечением «новинок».',
      blocks :
      [
        {
          paragraphs :
          [
            'Это уже четвертая совместная работа Кроненберга и Мортенсена после «Оправданной жестокости», «Порока на экспорт» и «Опасного метода». В своем интервью Вигго рассказал о том, как сын убедил его сняться во «Властелине колец», а Кроненберг научил оптимизму.',
          ]
        },
        {
          title : 'О работе с Дэвидом Кроненбергом',
          paragraphs :
          [
            'Дэвид мне как-то рассказал, что мы с ним впервые встретились в Каннах в 2001 году, когда я приезжал представлять «Братство кольца». Но я не помню ту встречу. Дело было на очень поздней шумной вечеринке в каком-то замке на холме, и я, вероятно, хорошо проводил там время. (Смеется.) Дэвида на ту вечеринку пригласил его друг, композитор Говард Шор, с которым он снял не один фильм и который написал музыку к «Властелину колец».',
          ],
        },
        {
          title : 'Дэвид Кроненберг и Вигго Мортенсен на съемках фильма «Опасный метод»',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu1eW3QZeNS3oBqCOvgYxk_nUm2F-QYvbGg5fgFx2P2IF0Y2IyHE_S71O6wfBPuOQkGskkJ0cubV8-9Amw_tYCZgVFC_UrDaeSsDjbz5GAaPZlA9la6Qf_st6SiP_5ypHE9Dpn3oDvctcSMyzRg808AdKhsZP20-zqq2SkkV8_8npBTRs5v63XXvg4w3tpEXz-UT_ZOpWfG4MOfjTLtPr1QJCeKxoIayJPhne0ra950I126QlnFt-szn9MuE2vQ8qiUaEfVX8txxrEjK8fyQGYxiFTRUoBA4snSgbQMzQSifQ8Tu8ypIcWS5KrhK1LHbh15hk1NxoTIEaDvCjBE68mshFRi3HfJU96bFwnz3Ht3L6FU4VKtRfTC2rKFOvswomATNJrrsT7Alue-yitT8lAmeaVLScO6yACvzRIrSdfdhKlFWdte7VnaiS458MlfZiylVP12hnnUycuGhDXPM6xOGA-m76QTy7TTifMjd_hoF2KgTkr1pMcvmtk3MlX6wYCMUWv7ccFx9ZkGINb3ZX4-qn7wc55vwM7Uk4Er-DSKcQU1pvmMOPye1bL3GmfudCFdi21F8rrOEpvdJjNr0NSMi3RZ8VLOWeyuDD718FNfBZJhyUmffunJ6aefB8Q9oWUkDozrsj7rrfeHzTRg2WQNfplWS_WwxxSuyxY1c-7BlLp_Z8hMx3jUsS034-JRbS6yYd1qj23H_diduxTiEaB_IRmA95MH9YzfqMQYTN9CPWGCZXfGhtsmrMI3Mk3K-IWsUVn4cdhc1LItOuDcUV0skkXdUrZY5-L8ubMj2Aitcg4rr_GNOuuJ_7vrHkj5QyFQk3xH2ob-F5HoAyxk1P62p35G7UzEUcilLBr35VpsBqF7yGu5at3f26a4F8ADv14HGrPakDraieS18Tl5y3g7c6ZddtmxwDWa-y8gbsbKjopnQdtU2EHXqC0Nx_x5fBiTdNBHo1juy823gi_mHZJcIgim84oH45H2ve8eVO5kGVqFX0v6k8YPgfAMCHLK6oSaYUrrT9Ru9KkzMuDcWH8dgWboVrJK_cztsJ4v6TqeZwc9ouuLLNuX46_zGlHCUgRHo0RI8o7mAo_lLAdRzsCUjXdT5lrHSNqpCADK615eO5h_22qMYefm1b6aMu8EtnQBK4rKgjr7k8CmyT9tz0QHc7BJftOJwSiA2xsxc9DWhJFoYf1_1EnGsiARxf9iUTWlSt9gokPh9v2ikxrrOq9FOQen85cQ3aneneodScRoF1mUf0fVncUVjdwiO1bl_YG7R0L3e-Jf7442OfL0YkYZsV3vXpB97_bst7wu5gGtRwUtuuiwFPiK4azsLnb8ehZenW1J0bX5NonIKgFK2eesv3NH22DETPSbKQDh4lxZMope8Ey2f-v__ZWaGuk6qn0vL6f-iz7hidOa7iZZ8lcmQohJRP-T3SKAxQ0udNPVhZl5Qfdt2Vb0gjQ2w9BnezeVXPtps37Z19CXszbQBrJwEy6B6pYF15r8m-YcY-lGCUGCQ2Xniscao8gWFm_05a2QSGLzV8Nv3roeMuPGWm4HsWrzboZPwO7xlbgV8jCXZAoMqPiIAsCy-an2OGj6QgFjhmdV-pTKDaDeIi1z9-qQqlxB123gb8WzLRX9-WdyIJVa_UO6UMb1wbmRM84Fg2UfObrpkQ3wkuSx1D5i5WQabIJ4U8GE5SKoxSwET9floKRabNVHx1fvvgw65eJEXBqjYfJDsVvI18G4sBnoH5JVLR-d_oYjxbrbjdYtSdlMPEelXX7HjOEtnMgAJ2va-6WTdlDRe8Z8w4MuN-vpc20FimTVVqVL5-HToK0IxiuvUD8mju-LJNis2r3LFnbmcyB0tl1c_5DgNZ_AFhBo4eShl3Fl0WbedumZFR_q3HReFIdP_0KeRcjh6KWeOvImo0QCG4HUrAHklOOIzy117XYIYIZ8RMW3-QiI2CARavHoqqlSc8t2-0HashM_z_1WUDSReOpBpn7v0s66uQ_PHb1SJgmI2Y8e_K_CjsMESf5kH16lX1njkvY6gNEqDHL2_pyZfWv0fcNC3YMDKvzGW1wQuWX3d7NS3sLYtac01xGXTj4novS7FP6QyrTPH1TLcydDhn1y2rjuLpj8Li5p1-OXrEdR8FT_V9SeDjfr-lt7EoRP8FSjesnKwbW5MPs5gV0HDab_hzTWq_-a9hpsy2I1WYZcb9auwgC3zQAtY9HRpY9Fa9Vx6lbEhggd_OdfUASBWNhfoGHF7faBtBjyJYl2LDKR6Igk4I36vPMLS-lvCWO8TVv8pMQ2jd0IME_K9qmYd0vFRuBM7IIUPen5YWActkvWcIRyw-v0kK8z8jWLWyYfqtqmGdq727fSI2npUi5dl25z87HWFrDdMSpCyeO8rFx56lDjXt2hBDn28FlCEJRr-3KBWcfV3LO8OeIfi0IvKpHYjib5juOM8R9E2HE-XKZEe9yR9QCB0QUUfvTggZxEV8531nHjgjIi7uNAfCS-fcBQo1_E_tCTng7POo99PjOr7K4b06fCi-U_WPJSA3GaYXXvp9YKq8IWMnzs2ZGRRm_Zc85T26EVPfDkZEA7s3v6dr9_3NfQjKE06j-iZQ4WmOaHN9So4LHpPmzPUiBui3ds47fDNKPLKhFowcerpn5N2GPPV-GRMD_R51RuLp1t8FKWb__Q4LuwNMgUknAoGIbxlCLWmsus9zhA41k7crpldt-q4yKvxzQPa-jjjZddac9C5mrPhTYoz_tmTB2jRNVBh2Liyd2HvzDxGaBlCBOg3oYR85TEjMsLTv9yLXmSSXr8k80qtP0SJn7CwZSLemrFX8RTy70IOcHQYFsFm2PyTpBp3sLTkqUE6z-zQhoSp8SvFMuW4KXXH0_scQRBp0Vx2a76GonBKzBPy_OIt0NB-HPkT9yiPhrSy1pAEKFd8WyFZO3p3K8',
          ]
        },
        {
          paragraphs :
          [
            'Но наша по-настоящему первая встреча состоялась лишь весной 2004 года в Лос-Анджелесе, когда мы встретились, чтобы обсудить «Оправданную жестокость». «Преступления будущего» — это уже наш четвертый совместный проект. Кстати, у Дэвида уже есть фильм с таким же названием (имеется в виду комедия «Преступления будущего» 1970 года — Прим. ред.), но он никак не связан с его новым проектом, где я сыграл главную роль. Дэвиду просто очень нравится это название, и, как настоящий авангардист, он не считает, что нельзя повторяться, тем более что заимствует он у самого себя. Я тоже считаю, что для нашего фильма это идеальное название.',
            'Дэвид никогда не репетирует, не готовит раскадровок. Он немногословен, но всегда открыт к диалогу с любым членом съемочной группы. Ему нравится приезжать на площадку и смотреть, что делают актеры. Он доверяет тем, кого утвердил на роль. Он очень педантичен в выборе актеров, но после того, как актерский состав утвержден, Дэвид дает всем проявить себя. Он очень быстро работает: кажется, он монтирует все сразу у себя в голове. За 18 лет нашего с ним знакомства он перешел на другой уровень. Технологии за это время сильно продвинулись, и Дэвид стал работать еще лаконичнее, снимая еще меньше дублей. Он всегда четко знает, что ему нужно.',
          ]
        },
        {
          title : 'Об оптимизме и преодолении',
          paragraphs :
          [
            'В чем я черпаю вдохновение, кроме Дэвида Кроненберга? (Смеется.) Даже не знаю. Каждый раз, когда мне кажется, что у меня был плохой день, я думаю, что кому-то сейчас может быть куда хуже! Это своего рода прием коррекции момента. Меня вдохновляют люди типа Дэвида и еще нескольких моих друзей, у которых есть причины жаловаться на жизнь, но они все же так не делают и получают от жизни максимум позитива. Я по сути своей оптимист и, даже когда мне плохо, стараюсь смотреть в будущее. Я склонен думать, что людям свойственно умение находить выход из любой ситуации.',
          ]
        },
        {
          title : '«Преступления будущего»',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu1eW3QZeNS3oBqCOvgYxk_nUm2F-Ycubeo4vhSxGHzJwxNi93TQKa-1u2zfkC8OFYF4hwJhp2dAZiwBWw_tYCZgVFC_UrDaeSsDjbz5GAaPZlA9la6Qf_st6SiP_5ypHE9Dpn3oDvctcSMyzRg808AdKhsZP20-zqq2SkkV8_8npBTRs5v63XXvg4w3tpEXz-UT_ZOpWfG4MOfjTLtPr1QJCeKxoIayJPhne0ra950I126QlnFt-szn9MuE2vQ8qiUaEfVX8txxrEjK8fyQGYxiFTRUoBA4snSgbQMzQSifQ8Tu8ypIcWS5KrhK1LHbh15hk1NxoTIEaDvCjBE68mshFRi3HfJU96bFwnz3Ht3L6FU4VKtRfTC2rKFOvswomATNJrrsT7Alue-yitT8lAmeaVLScO6yACvzRIrSdfdhKlFWdte7VnaiS458MlfZiylVP12hnnUycuGhDXPM6xOGA-m76QTy7TTifMjd_hoF2KgTkr1pMcvmtk3MlX6wYCMUWv7ccFx9ZkGINb3ZX4-qn7wc55vwM7Uk4Er-DSKcQU1pvmMOPye1bL3GmfudCFdi21F8rrOEpvdJjNr0NSMi3RZ8VLOWeyuDD718FNfBZJhyUmffunJ6aefB8Q9oWUkDozrsj7rrfeHzTRg2WQNfplWS_WwxxSuyxY1c-7BlLp_Z8hMx3jUsS034-JRbS6yYd1qj23H_diduxTiEaB_IRmA95MH9YzfqMQYTN9CPWGCZXfGhtsmrMI3Mk3K-IWsUVn4cdhc1LItOuDcUV0skkXdUrZY5-L8ubMj2Aitcg4rr_GNOuuJ_7vrHkj5QyFQk3xH2ob-F5HoAyxk1P62p35G7UzEUcilLBr35VpsBqF7yGu5at3f26a4F8ADv14HGrPakDraieS18Tl5y3g7c6ZddtmxwDWa-y8gbsbKjopnQdtU2EHXqC0Nx_x5fBiTdNBHo1juy823gi_mHZJcIgim84oH45H2ve8eVO5kGVqFX0v6k8YPgfAMCHLK6oSaYUrrT9Ru9KkzMuDcWH8dgWboVrJK_cztsJ4v6TqeZwc9ouuLLNuX46_zGlHCUgRHo0RI8o7mAo_lLAdRzsCUjXdT5lrHSNqpCADK615eO5h_22qMYefm1b6aMu8EtnQBK4rKgjr7k8CmyT9tz0QHc7BJftOJwSiA2xsxc9DWhJFoYf1_1EnGsiARxf9iUTWlSt9gokPh9v2ikxrrOq9FOQen85cQ3aneneodScRoF1mUf0fVncUVjdwiO1bl_YG7R0L3e-Jf7442OfL0YkYZsV3vXpB97_bst7wu5gGtRwUtuuiwFPiK4azsLnb8ehZenW1J0bX5NonIKgFK2eesv3NH22DETPSbKQDh4lxZMope8Ey2f-v__ZWaGuk6qn0vL6f-iz7hidOa7iZZ8lcmQohJRP-T3SKAxQ0udNPVhZl5Qfdt2Vb0gjQ2w9BnezeVXPtps37Z19CXszbQBrJwEy6B6pYF15r8m-YcY-lGCUGCQ2Xniscao8gWFm_05a2QSGLzV8Nv3roeMuPGWm4HsWrzboZPwO7xlbgV8jCXZAoMqPiIAsCy-an2OGj6QgFjhmdV-pTKDaDeIi1z9-qQqlxB123gb8WzLRX9-WdyIJVa_UO6UMb1wbmRM84Fg2UfObrpkQ3wkuSx1D5i5WQabIJ4U8GE5SKoxSwET9floKRabNVHx1fvvgw65eJEXBqjYfJDsVvI18G4sBnoH5JVLR-d_oYjxbrbjdYtSdlMPEelXX7HjOEtnMgAJ2va-6WTdlDRe8Z8w4MuN-vpc20FimTVVqVL5-HToK0IxiuvUD8mju-LJNis2r3LFnbmcyB0tl1c_5DgNZ_AFhBo4eShl3Fl0WbedumZFR_q3HReFIdP_0KeRcjh6KWeOvImo0QCG4HUrAHklOOIzy117XYIYIZ8RMW3-QiI2CARavHoqqlSc8t2-0HashM_z_1WUDSReOpBpn7v0s66uQ_PHb1SJgmI2Y8e_K_CjsMESf5kH16lX1njkvY6gNEqDHL2_pyZfWv0fcNC3YMDKvzGW1wQuWX3d7NS3sLYtac01xGXTj4novS7FP6QyrTPH1TLcydDhn1y2rjuLpj8Li5p1-OXrEdR8FT_V9SeDjfr-lt7EoRP8FSjesnKwbW5MPs5gV0HDab_hzTWq_-a9hpsy2I1WYZcb9auwgC3zQAtY9HRpY9Fa9Vx6lbEhggd_OdfUASBWNhfoGHF7faBtBjyJYl2LDKR6Igk4I36vPMLS-lvCWO8TVv8pMQ2jd0IME_K9qmYd0vFRuBM7IIUPen5YWActkvWcIRyw-v0kK8z8jWLWyYfqtqmGdq727fSI2npUi5dl25z87HWFrDdMSpCyeO8rFx56lDjXt2hBDn28FlCEJRr-3KBWcfV3LO8OeIfi0IvKpHYjib5juOM8R9E2HE-XKZEe9yR9QCB0QUUfvTggZxEV8531nHjgjIi7uNAfCS-fcBQo1_E_tCTng7POo99PjOr7K4b06fCi-U_WPJSA3GaYXXvp9YKq8IWMnzs2ZGRRm_Zc85T26EVPfDkZEA7s3v6dr9_3NfQjKE06j-iZQ4WmOaHN9So4LHpPmzPUiBui3ds47fDNKPLKhFowcerpn5N2GPPV-GRMD_R51RuLp1t8FKWb__Q4LuwNMgUknAoGIbxlCLWmsus9zhA41k7crpldt-q4yKvxzQPa-jjjZddac9C5mrPhTYoz_tmTB2jRNVBh2Liyd2HvzDxGaBlCBOg3oYR85TEjMsLTv9yLXmSSXr8k80qtP0SJn7CwZSLemrFX8RTy70IOcHQYFsFm2PyTpBp3sLTkqUE6z-zQhoSp8SvFMuW4KXXH0_scQRBp0Vx2a76GonBKzBPy_OIt0NB-HPkT9yiPhrSy1pAEKFd8WyFZO3p3K8',
          ]
        },
        {
          paragraphs :
          [
            'У нас с Дэвидом есть общая черта: мы верим в идею адаптации и преодоления. Другими словами, необходимо принимать реальность независимо от того, что это — твое тело или обстоятельства, с которыми приходится сталкиваться во время работы. Используйте то, что у вас есть. К примеру, мы сначала должны были снимать «Преступления будущего» в Торонто, затем планы поменялись, и мы собирались в Венгрию. В связи с продюсерскими нюансами нам пришлось снимать в Греции, а там достаточно жарко, каждый день было почти +45 градусов по Цельсию. Снимали мы в старом здании, где не было кондиционеров, к тому же у меня был сложный пластический грим, перчатки, капюшон и маска на лице. Это было невыносимо! Все мы пили очень много воды, но как-то справились.',
            'Эта жара помогла мне до конца прочувствовать физические проблемы моего героя, а Дэвид смог извлечь пользу из странного насыщенного освещения. По всей Греции тогда были жуткие лесные пожары, все вокруг было в дыму. Эта ситуация добавила некоторой визуальной глубины и текстуры нашему фильму, которой мы вряд ли смогли бы добиться в обычных обстоятельствах. Так, вместо проблемы мы обнаружили преимущество. Я и дома также реагирую на бытовые поломки или отмены планов. Вы можете злиться или пугаться, а можете испытать легкое раздражение и отшутиться.',
          ]
        },
        {
          title : 'О «Властелине колец»',
          paragraphs :
          [
            'Каждый раз, когда я вспоминаю фильмы, в которых снимался, то вспоминаю людей, с которыми мне довелось работать. Я провел в Новой Зеландии много времени, это прекрасная страна! И съемочная группа оказалась потрясающей, мы все друг с другом подружились. Нас было несколько сотен человек, но атмосфера царила такая же, как на независимом проекте с маленькой группой. И фильм мы снимали с таким же настроением. Это очень в духе Питера Джексона, ведь он пришел в большое кино после «Небесных созданий» и еще нескольких независимых проектов. Этот дух был очень заразительным. На этих съемках у меня появилось много друзей, к тому же этот проект открыл для меня новые горизонты. Да, и с Дэвидом я смог познакомиться именно благодаря этой трилогии, ведь и «Оправданную жестокость», и «Властелина колец» поддерживала одна и та же студия New Line. Не думаю, что без успеха трилогии Джексона Дэвид бы позволил мне сыграть одну из главных ролей в его фильме. И я обязан этим Питеру Джексону, как и тем, что он выбрал меня среди многих других актеров.',
          ]
        },
        {
          title :  '«Властелин колец: Возвращение короля»',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu1eW3QZeNS3oBqCOvgYxk_nUm2F-Yevr6s4vgCmGCjJFkbj43aQ_O7gbuwfke8NAwE4R8P0ZyWBp3qUGw_tYCZgVFC_UrDaeSsDjbz5GAaPZlA9la6Qf_st6SiP_5ypHE9Dpn3oDvctcSMyzRg808AdKhsZP20-zqq2SkkV8_8npBTRs5v63XXvg4w3tpEXz-UT_ZOpWfG4MOfjTLtPr1QJCeKxoIayJPhne0ra950I126QlnFt-szn9MuE2vQ8qiUaEfVX8txxrEjK8fyQGYxiFTRUoBA4snSgbQMzQSifQ8Tu8ypIcWS5KrhK1LHbh15hk1NxoTIEaDvCjBE68mshFRi3HfJU96bFwnz3Ht3L6FU4VKtRfTC2rKFOvswomATNJrrsT7Alue-yitT8lAmeaVLScO6yACvzRIrSdfdhKlFWdte7VnaiS458MlfZiylVP12hnnUycuGhDXPM6xOGA-m76QTy7TTifMjd_hoF2KgTkr1pMcvmtk3MlX6wYCMUWv7ccFx9ZkGINb3ZX4-qn7wc55vwM7Uk4Er-DSKcQU1pvmMOPye1bL3GmfudCFdi21F8rrOEpvdJjNr0NSMi3RZ8VLOWeyuDD718FNfBZJhyUmffunJ6aefB8Q9oWUkDozrsj7rrfeHzTRg2WQNfplWS_WwxxSuyxY1c-7BlLp_Z8hMx3jUsS034-JRbS6yYd1qj23H_diduxTiEaB_IRmA95MH9YzfqMQYTN9CPWGCZXfGhtsmrMI3Mk3K-IWsUVn4cdhc1LItOuDcUV0skkXdUrZY5-L8ubMj2Aitcg4rr_GNOuuJ_7vrHkj5QyFQk3xH2ob-F5HoAyxk1P62p35G7UzEUcilLBr35VpsBqF7yGu5at3f26a4F8ADv14HGrPakDraieS18Tl5y3g7c6ZddtmxwDWa-y8gbsbKjopnQdtU2EHXqC0Nx_x5fBiTdNBHo1juy823gi_mHZJcIgim84oH45H2ve8eVO5kGVqFX0v6k8YPgfAMCHLK6oSaYUrrT9Ru9KkzMuDcWH8dgWboVrJK_cztsJ4v6TqeZwc9ouuLLNuX46_zGlHCUgRHo0RI8o7mAo_lLAdRzsCUjXdT5lrHSNqpCADK615eO5h_22qMYefm1b6aMu8EtnQBK4rKgjr7k8CmyT9tz0QHc7BJftOJwSiA2xsxc9DWhJFoYf1_1EnGsiARxf9iUTWlSt9gokPh9v2ikxrrOq9FOQen85cQ3aneneodScRoF1mUf0fVncUVjdwiO1bl_YG7R0L3e-Jf7442OfL0YkYZsV3vXpB97_bst7wu5gGtRwUtuuiwFPiK4azsLnb8ehZenW1J0bX5NonIKgFK2eesv3NH22DETPSbKQDh4lxZMope8Ey2f-v__ZWaGuk6qn0vL6f-iz7hidOa7iZZ8lcmQohJRP-T3SKAxQ0udNPVhZl5Qfdt2Vb0gjQ2w9BnezeVXPtps37Z19CXszbQBrJwEy6B6pYF15r8m-YcY-lGCUGCQ2Xniscao8gWFm_05a2QSGLzV8Nv3roeMuPGWm4HsWrzboZPwO7xlbgV8jCXZAoMqPiIAsCy-an2OGj6QgFjhmdV-pTKDaDeIi1z9-qQqlxB123gb8WzLRX9-WdyIJVa_UO6UMb1wbmRM84Fg2UfObrpkQ3wkuSx1D5i5WQabIJ4U8GE5SKoxSwET9floKRabNVHx1fvvgw65eJEXBqjYfJDsVvI18G4sBnoH5JVLR-d_oYjxbrbjdYtSdlMPEelXX7HjOEtnMgAJ2va-6WTdlDRe8Z8w4MuN-vpc20FimTVVqVL5-HToK0IxiuvUD8mju-LJNis2r3LFnbmcyB0tl1c_5DgNZ_AFhBo4eShl3Fl0WbedumZFR_q3HReFIdP_0KeRcjh6KWeOvImo0QCG4HUrAHklOOIzy117XYIYIZ8RMW3-QiI2CARavHoqqlSc8t2-0HashM_z_1WUDSReOpBpn7v0s66uQ_PHb1SJgmI2Y8e_K_CjsMESf5kH16lX1njkvY6gNEqDHL2_pyZfWv0fcNC3YMDKvzGW1wQuWX3d7NS3sLYtac01xGXTj4novS7FP6QyrTPH1TLcydDhn1y2rjuLpj8Li5p1-OXrEdR8FT_V9SeDjfr-lt7EoRP8FSjesnKwbW5MPs5gV0HDab_hzTWq_-a9hpsy2I1WYZcb9auwgC3zQAtY9HRpY9Fa9Vx6lbEhggd_OdfUASBWNhfoGHF7faBtBjyJYl2LDKR6Igk4I36vPMLS-lvCWO8TVv8pMQ2jd0IME_K9qmYd0vFRuBM7IIUPen5YWActkvWcIRyw-v0kK8z8jWLWyYfqtqmGdq727fSI2npUi5dl25z87HWFrDdMSpCyeO8rFx56lDjXt2hBDn28FlCEJRr-3KBWcfV3LO8OeIfi0IvKpHYjib5juOM8R9E2HE-XKZEe9yR9QCB0QUUfvTggZxEV8531nHjgjIi7uNAfCS-fcBQo1_E_tCTng7POo99PjOr7K4b06fCi-U_WPJSA3GaYXXvp9YKq8IWMnzs2ZGRRm_Zc85T26EVPfDkZEA7s3v6dr9_3NfQjKE06j-iZQ4WmOaHN9So4LHpPmzPUiBui3ds47fDNKPLKhFowcerpn5N2GPPV-GRMD_R51RuLp1t8FKWb__Q4LuwNMgUknAoGIbxlCLWmsus9zhA41k7crpldt-q4yKvxzQPa-jjjZddac9C5mrPhTYoz_tmTB2jRNVBh2Liyd2HvzDxGaBlCBOg3oYR85TEjMsLTv9yLXmSSXr8k80qtP0SJn7CwZSLemrFX8RTy70IOcHQYFsFm2PyTpBp3sLTkqUE6z-zQhoSp8SvFMuW4KXXH0_scQRBp0Vx2a76GonBKzBPy_OIt0NB-HPkT9yiPhrSy1pAEKFd8WyFZO3p3K8',
          ],
        },
        {
          paragraphs :
          [
            'Меня иногда спрашивают, не ощущаю ли я бремени «Властелина колец», но я не понимаю этого вопроса. Во-первых, это был потрясающий опыт. Во-вторых, после Арагорна я сыграл много разных ролей, которые позволили мне не застрять в этом типаже. В-третьих, я смог позволить себе выбирать эти разные роли.',
            'Напомню, я сначала отказался от этого проекта. Мне довольно поздно предложили эту роль, когда остальные актеры уже репетировали и учились фехтовать, ездить верхом и еще много чему. Я как раз закончил сниматься в предыдущем проекте и только что вернулся из поездки по стране со своим сыном Генри, которому тогда было 11 лет. И тут мне говорят, что уже через пару дней надо лететь на съемки в Новую Зеландию, причем надолго. Я не читал Толкина, был не готов лететь и не хотел оказаться слабым звеном. Так и сказал: «Найдите кого-нибудь, кто хотя бы читал эту книгу». Мой сын был рядом. Когда я положил трубку, он заявил, что читал Толкина, и спросил, кого мне предложили сыграть. Я ему говорю: «Арагорна». А он такой: «Это король!» Я в ответ: «Король чего?» Ну, тут он объяснил, что этот герой лишь впоследствии станет королем, что я должен его сыграть, а когда я сказал, что не готов так надолго уехать из дома, заверил меня, что я справлюсь, потому что эта история основана на скандинавской мифологии, которую я знаю. В общем, именно Генри заставил меня изменить решение.',
            'Я лишь позже узнал, что толкинисты — это огромная субкультура, которая стремительно росла в 1960-е, особенно в США и Канаде. Помню, мы как-то разговорились с одним из продюсеров, и он сказал мне, что волнуется за сборы в Азии, особенно в Японии. Пришлось его успокоить, объяснив, что культурный код эльфов в чем-то пересекается с самурайскими традициями, что вряд ли оставит японских зрителей равнодушными. Но в любом случае никто из нас даже представить себе не мог, каким оглушительным будет успех этой экранизации.',
          ]
        },
        {
          title : '«Властелин колец: Возвращение короля»',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu1eW3QZeNS3oBqCOvgYxk_nUm2FOcetLeo7vhYwmPzcVAb2YmGEKLm0-uyfhLuMgwOt05b0szNBc27Umw_tYCZgVFC_UrDaeSsDjbz5GAaPZlA9la6Qf_st6SiP_5ypHE9Dpn3oDvctcSMyzRg808AdKhsZP20-zqq2SkkV8_8npBTRs5v63XXvg4w3tpEXz-UT_ZOpWfG4MOfjTLtPr1QJCeKxoIayJPhne0ra950I126QlnFt-szn9MuE2vQ8qiUaEfVX8txxrEjK8fyQGYxiFTRUoBA4snSgbQMzQSifQ8Tu8ypIcWS5KrhK1LHbh15hk1NxoTIEaDvCjBE68mshFRi3HfJU96bFwnz3Ht3L6FU4VKtRfTC2rKFOvswomATNJrrsT7Alue-yitT8lAmeaVLScO6yACvzRIrSdfdhKlFWdte7VnaiS458MlfZiylVP12hnnUycuGhDXPM6xOGA-m76QTy7TTifMjd_hoF2KgTkr1pMcvmtk3MlX6wYCMUWv7ccFx9ZkGINb3ZX4-qn7wc55vwM7Uk4Er-DSKcQU1pvmMOPye1bL3GmfudCFdi21F8rrOEpvdJjNr0NSMi3RZ8VLOWeyuDD718FNfBZJhyUmffunJ6aefB8Q9oWUkDozrsj7rrfeHzTRg2WQNfplWS_WwxxSuyxY1c-7BlLp_Z8hMx3jUsS034-JRbS6yYd1qj23H_diduxTiEaB_IRmA95MH9YzfqMQYTN9CPWGCZXfGhtsmrMI3Mk3K-IWsUVn4cdhc1LItOuDcUV0skkXdUrZY5-L8ubMj2Aitcg4rr_GNOuuJ_7vrHkj5QyFQk3xH2ob-F5HoAyxk1P62p35G7UzEUcilLBr35VpsBqF7yGu5at3f26a4F8ADv14HGrPakDraieS18Tl5y3g7c6ZddtmxwDWa-y8gbsbKjopnQdtU2EHXqC0Nx_x5fBiTdNBHo1juy823gi_mHZJcIgim84oH45H2ve8eVO5kGVqFX0v6k8YPgfAMCHLK6oSaYUrrT9Ru9KkzMuDcWH8dgWboVrJK_cztsJ4v6TqeZwc9ouuLLNuX46_zGlHCUgRHo0RI8o7mAo_lLAdRzsCUjXdT5lrHSNqpCADK615eO5h_22qMYefm1b6aMu8EtnQBK4rKgjr7k8CmyT9tz0QHc7BJftOJwSiA2xsxc9DWhJFoYf1_1EnGsiARxf9iUTWlSt9gokPh9v2ikxrrOq9FOQen85cQ3aneneodScRoF1mUf0fVncUVjdwiO1bl_YG7R0L3e-Jf7442OfL0YkYZsV3vXpB97_bst7wu5gGtRwUtuuiwFPiK4azsLnb8ehZenW1J0bX5NonIKgFK2eesv3NH22DETPSbKQDh4lxZMope8Ey2f-v__ZWaGuk6qn0vL6f-iz7hidOa7iZZ8lcmQohJRP-T3SKAxQ0udNPVhZl5Qfdt2Vb0gjQ2w9BnezeVXPtps37Z19CXszbQBrJwEy6B6pYF15r8m-YcY-lGCUGCQ2Xniscao8gWFm_05a2QSGLzV8Nv3roeMuPGWm4HsWrzboZPwO7xlbgV8jCXZAoMqPiIAsCy-an2OGj6QgFjhmdV-pTKDaDeIi1z9-qQqlxB123gb8WzLRX9-WdyIJVa_UO6UMb1wbmRM84Fg2UfObrpkQ3wkuSx1D5i5WQabIJ4U8GE5SKoxSwET9floKRabNVHx1fvvgw65eJEXBqjYfJDsVvI18G4sBnoH5JVLR-d_oYjxbrbjdYtSdlMPEelXX7HjOEtnMgAJ2va-6WTdlDRe8Z8w4MuN-vpc20FimTVVqVL5-HToK0IxiuvUD8mju-LJNis2r3LFnbmcyB0tl1c_5DgNZ_AFhBo4eShl3Fl0WbedumZFR_q3HReFIdP_0KeRcjh6KWeOvImo0QCG4HUrAHklOOIzy117XYIYIZ8RMW3-QiI2CARavHoqqlSc8t2-0HashM_z_1WUDSReOpBpn7v0s66uQ_PHb1SJgmI2Y8e_K_CjsMESf5kH16lX1njkvY6gNEqDHL2_pyZfWv0fcNC3YMDKvzGW1wQuWX3d7NS3sLYtac01xGXTj4novS7FP6QyrTPH1TLcydDhn1y2rjuLpj8Li5p1-OXrEdR8FT_V9SeDjfr-lt7EoRP8FSjesnKwbW5MPs5gV0HDab_hzTWq_-a9hpsy2I1WYZcb9auwgC3zQAtY9HRpY9Fa9Vx6lbEhggd_OdfUASBWNhfoGHF7faBtBjyJYl2LDKR6Igk4I36vPMLS-lvCWO8TVv8pMQ2jd0IME_K9qmYd0vFRuBM7IIUPen5YWActkvWcIRyw-v0kK8z8jWLWyYfqtqmGdq727fSI2npUi5dl25z87HWFrDdMSpCyeO8rFx56lDjXt2hBDn28FlCEJRr-3KBWcfV3LO8OeIfi0IvKpHYjib5juOM8R9E2HE-XKZEe9yR9QCB0QUUfvTggZxEV8531nHjgjIi7uNAfCS-fcBQo1_E_tCTng7POo99PjOr7K4b06fCi-U_WPJSA3GaYXXvp9YKq8IWMnzs2ZGRRm_Zc85T26EVPfDkZEA7s3v6dr9_3NfQjKE06j-iZQ4WmOaHN9So4LHpPmzPUiBui3ds47fDNKPLKhFowcerpn5N2GPPV-GRMD_R51RuLp1t8FKWb__Q4LuwNMgUknAoGIbxlCLWmsus9zhA41k7crpldt-q4yKvxzQPa-jjjZddac9C5mrPhTYoz_tmTB2jRNVBh2Liyd2HvzDxGaBlCBOg3oYR85TEjMsLTv9yLXmSSXr8k80qtP0SJn7CwZSLemrFX8RTy70IOcHQYFsFm2PyTpBp3sLTkqUE6z-zQhoSp8SvFMuW4KXXH0_scQRBp0Vx2a76GonBKzBPy_OIt0NB-HPkT9yiPhrSy1pAEKFd8WyFZO3p3K8',
          ],
        },
        {
          title : 'О выборе ролей и проектов',
          paragraphs :
          [
            'Я тщательно взвешиваю свои решения, выбирая проекты. Часто бывает, что актеры не до конца выполняют свои обязательства, некоторых порой невозможно найти, когда приходит время давать интервью и заниматься продвижением фильма. Я очень осторожно беру на себя обязательства, потому что понимаю: каждый проект в моей жизни займет некоторое время. С момента, когда ты говоришь «да», до начала подготовки к съемкам может пройти несколько месяцев, а до премьеры и вовсе несколько лет. Каждый раз, когда мне кажется, что гонорар того стоит, я пытаюсь представить, буду ли готов рассказывать о будущем фильме с удовольствием или мне придется менять тему разговора и отшучиваться, рассказывая о смешных моментах на съемках. Что само по себе неплохо, но может оказаться, что эти забавные моменты будут единственным, о чем я смогу рассказать, потому что больше о фильме сказать нечего. Я действительно очень щепетилен в этом отношении.',
            'Да, я знаю, что в начале карьеры всегда нужны деньги, чтобы как минимум платить за аренду, и ты готов браться за любую работу! И у меня так было, но мне повезло, что все эти годы я мог позволить себе выбирать только те проекты, которые мне очень нравились. В нескольких фильмах я и вовсе снялся без гонорара, а в некоторые даже вложил деньги в качестве продюсера или партнера.',
          ]
        },
      ],
      card :
      {
        caption : '2022, Канада, Великобритания',
        title : 'Преступления будущего',
        genre : 'фантастика, триллер',
        duration : '1 ч 47 мин',
        age : '18+',
        producer: 'Дэвид Кроненберг',
        roles : 'Вигго Мортенсен, Леа Сейду, Кристен Стюарт',
        poster:  'https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/45321a31-4240-495d-abe8-4433ee861626/200x300',
        rating : '5.9',
      },
    },
  },
  {
    id : 5,
    mainPhoto : 'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cfeh2H/x-d3ZEGvLLWrKw1QORkCk7_QVjD0cgGjaQKKmjswKm3Y2iSZeNI2cYuFeO8JgJiwh6gEPoe6LKusLRYlWX1clhL2oWHRaPqgefhdETvNlkDsklf1dGWVcnxVHc23O-Hn1Jc8EfFfOSlMA_zvXxdOJ9e9k-mQ6L17ImIQMI0k2cZNaryrR_kjPunwzVu5UIWdYhld-On_DOx7jAPStv-hZthedhb9m7kox0x1_h-UDefRulpn0_WzsOEmwzbFYpOCgSI07k5wZ3duMgYVcZrBFu1XXTzrsk5ttkMEETt-r6aekn4X-dhybgEGdPBcEwsuFrMTrtmx9D6urs2xDihejsOo-i0OMSq0bjxAU_4TzhUoV5H0Iz2BZL6Iyt_6eqCv3Nh-n3_S_2aMDfo0G5lLIha4Uutbc_jy4yNAsQlvV0aKbv3sTzHvvq48DRxw08bUqVbedCd-SeK4S4Xa8HHk4R0SN53-1nEqjMizMFtYSyUfsp3jWbe18qDuQHKC7ZmJi2u2roe84nDsNQ-SfJUHlembWffsswzr_gyOnfF4oe2VGfyX9RJ7LMVHPbZf24GmXvSYZlhwcLPnY4G7DSrXCY7hvGNNPWyx4nEKFXEazV0qWp51o_NN775DBBiyeWihF5E_XfNfuatNhvA-ERWGaBB03CwZvz20bGyD8cgimcMKbj3mgfXh_2nwx9F6EgnT6dtc9-J-CGO_xQud9HUqbpnWvRW9WHHpCAJwspvdhm0YsNjnlLNzPWilCPGOo9wADWZzoQm_6j0i-8ZY9hXPHybXkXDu_oor_gqCk7AwoeEV2frcvVix6kjN8L6bVY9tFr6Vr5N6ej9la46yzegQi8zh_OaI9-7243rP2LEZi1lq0JF5orHApvmAxRI88mom0Ja93_pdcaJNA7Jy0dlA6Fj9WSEcM739qG2MdkbqXMzGJrzqyPEtcGq2g1Z3kUYRJpBctiozBG36gkGfMvksZx0Qutv9njHngQX6ttZVwy5T-9Wt2TY5syZkC_0GYxhJjGAzpI71r3fjfcoRfxsO0anYlDektcalMIVClzB9LeXRFnnQNV52aEjN8vYXEUegV7-RKRj-OHQmZ8I-CKpVCIpgeWqPcOvw4nyBHPhcR1dpGpN_p_ZD7TNNg520eOhjklM9Gb7eeKTCQDN-XpcB7JiwG--ScDv1ISZNtAxr0IKCIjzijngpvmszgll4kUOUJJLStm11jGD-xQQYMH_vrxSaedn52LKggYU8fZ0YTK2aO5NuFno892snQjJAJduJzGd2awD_p3ajuoCSfJvKmarTV7diNs2uvExJUvE1ZGfWG3Rcc5e3KoxH_HhWHUlhlbcc7ZZ-ebymJAzywKrRDoqut2JIMGs3L3VOlvzaCN0pUl24avfIrLLLRlR6dGlmnR292LVS8OTIgnP_nNOJplE-nGyUOjE1KyfCMw4gUYnPIH3kCPzmt61-jR2w3Q2UKhnUMW_1i-V5BMTY8D3r5xYe-p41VLepQA79Nx2USSSYf9wgHjFxv2ApjTUNb1HASiczKYw3JvWj8AvZ-x3PFqJf0nfh_UijtwINFPo_p6_XEHwQf9q9KEgLcnJRnUSmmbKQZlB5MT2o4QC8SGkZSg6gsuxGNmpxqvLPGPkVTh-uWJX0pD2NLrnFDdc1cSKnHh700HkY8eGPhL01WFRIpRL9l6fWtTo34W4N-UgsVA6K5vEgTjEseStwSNF_1o8Yb9ZR_2__i-0zigXU-XKjLF6UfR5zm7mqSYJ1_tbZxmbS_1VkXjU6f6vni30EIN2HTyM6rQQ-43mvuofbdlxG0SSX0_5sMoimO0MGk3g_aCNfm31UuJTxKQoAuDKRE4cvF7pRb5OxvHjvrAZyRWRTw4tge2pBvq9-4XVIFLFQghEsGdT-KjJKo7aDyFS5PmnuH5w7VjISf-MKTfn-VVDN5ZK0kuRTv300IyEFMUBrHIBFqbIlT7DiP--1itX7VY4ZahddOGV3jK42w0xXu_HhK5kYMhv-2L5rAwWxfd1VQCDSepwtn3b6_e5uS_bF4hgCBuF140F4o7zl-o4RfpoG0a1e1Hup9Y7ssYVNkjZ96u2W2vwbPxT6bk_Lcj7UX0dnn__XIdtzeTpgqEj8QuQTiI2sd2POuq0_4z3DVLCdThknkJ79rPOFrbkDhdV0sKRjF9CzHn1TuSkKBHI3FNAN5lc73SQZdTk94aNC-cYqWQmPY39pwHfmsaJzw1D0G84RYNObdqd4SeY5wQRZ-Dhk7Z6Z9l45Vbijj8MzPdFRSCxV-xvnELj0PquhBfvM4JbESqC7ZEn2rzDmOgvTuxVAlS3ZGfcq9s3kPooCkDs9qGWalDTYs1S_q4qEvLHXXIzv3jIfJpE4cHhhYQH7R6IdioYrNCrEfu34rDKL3PLayl3n2tyzovmN6ngJQlV-cKKpEVG0HD8ce6qNRvK5VFQE5J6zVeeesni8o-ULe0HgUMRGoTviCTDjMGM5x5Q22oYXZdEUu2d1zud3hk0VsTykophYeVfwlLYsS0I09tlegWpWO9RnVHFwtC4uQjpOJBaKy6k0qIN4ovVrPs0c-ZHJHiZd2TOl_0ojvgbLG_U_5CydmX9ffpx_64zD_fnencDk37zcYV4xd3vgpwNxCCgfxgkjf6lAsCx2a3PCXPFWDVugHt026n1IbLbDwFx7siokHd1_HnAQdqsEgzHyW9ZFZla2mGmf_Xq_oK-JvQ1hnEGM57rpzDrrMer4yV43kQEfJpHafu_-S2sxQwoVcj5i7RgVNVE7lXcuwwQ9etcZzy8Sctsu2bI1vGGhyvGIKZ6IByM2II-5Iz7mO05U8hPLFCWZFDVt-IXiuwZAnfR5ay3akn3fept4qoCO_P8RF8bm0bcZ4dtxsPrsp0N1Qe0eycGpd26PMCl54zsKlDhdxlcnUFt4offK7P6KAtFzdmVnFdl12H9ctSJESDJ51FlJZhkyWq0Rsn-_aA',
    category : 'Книги',
    title : '12 граней Тони Сопрано: фрагмент из книги «Персонаж» Роберта Макки',
    data : '23.08.2022 г.',
    views : 421,
    comments : [],
    article :
    {
      title : 'Где скрываются хоббиты, что такое Нуменор и еще 8 вопросов о «Кольцах власти»',
      data : '01.09.2022 г.',
      mainPhoto : 'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cfeh2H/x-d3ZEGvLLWrKw1QORkCk7_QVjD0cgGjaQKKmjswKm3Y2iSZeNI2cYuFeO8JQduwRusE_pK7r_87-NWkDD3I1FI0I3SRqfrgui0KRK5YwlQ5xYK0dGWVcnxVHc23O-Hn1Jc8EfFfOSlMA_zvXxdOJ9e9k-mQ6L17ImIQMI0k2cZNaryrR_kjPunwzVu5UIWdYhld-On_DOx7jAPStv-hZthedhb9m7kox0x1_h-UDefRulpn0_WzsOEmwzbFYpOCgSI07k5wZ3duMgYVcZrBFu1XXTzrsk5ttkMEETt-r6aekn4X-dhybgEGdPBcEwsuFrMTrtmx9D6urs2xDihejsOo-i0OMSq0bjxAU_4TzhUoV5H0Iz2BZL6Iyt_6eqCv3Nh-n3_S_2aMDfo0G5lLIha4Uutbc_jy4yNAsQlvV0aKbv3sTzHvvq48DRxw08bUqVbedCd-SeK4S4Xa8HHk4R0SN53-1nEqjMizMFtYSyUfsp3jWbe18qDuQHKC7ZmJi2u2roe84nDsNQ-SfJUHlembWffsswzr_gyOnfF4oe2VGfyX9RJ7LMVHPbZf24GmXvSYZlhwcLPnY4G7DSrXCY7hvGNNPWyx4nEKFXEazV0qWp51o_NN775DBBiyeWihF5E_XfNfuatNhvA-ERWGaBB03CwZvz20bGyD8cgimcMKbj3mgfXh_2nwx9F6EgnT6dtc9-J-CGO_xQud9HUqbpnWvRW9WHHpCAJwspvdhm0YsNjnlLNzPWilCPGOo9wADWZzoQm_6j0i-8ZY9hXPHybXkXDu_oor_gqCk7AwoeEV2frcvVix6kjN8L6bVY9tFr6Vr5N6ej9la46yzegQi8zh_OaI9-7243rP2LEZi1lq0JF5orHApvmAxRI88mom0Ja93_pdcaJNA7Jy0dlA6Fj9WSEcM739qG2MdkbqXMzGJrzqyPEtcGq2g1Z3kUYRJpBctiozBG36gkGfMvksZx0Qutv9njHngQX6ttZVwy5T-9Wt2TY5syZkC_0GYxhJjGAzpI71r3fjfcoRfxsO0anYlDektcalMIVClzB9LeXRFnnQNV52aEjN8vYXEUegV7-RKRj-OHQmZ8I-CKpVCIpgeWqPcOvw4nyBHPhcR1dpGpN_p_ZD7TNNg520eOhjklM9Gb7eeKTCQDN-XpcB7JiwG--ScDv1ISZNtAxr0IKCIjzijngpvmszgll4kUOUJJLStm11jGD-xQQYMH_vrxSaedn52LKggYU8fZ0YTK2aO5NuFno892snQjJAJduJzGd2awD_p3ajuoCSfJvKmarTV7diNs2uvExJUvE1ZGfWG3Rcc5e3KoxH_HhWHUlhlbcc7ZZ-ebymJAzywKrRDoqut2JIMGs3L3VOlvzaCN0pUl24avfIrLLLRlR6dGlmnR292LVS8OTIgnP_nNOJplE-nGyUOjE1KyfCMw4gUYnPIH3kCPzmt61-jR2w3Q2UKhnUMW_1i-V5BMTY8D3r5xYe-p41VLepQA79Nx2USSSYf9wgHjFxv2ApjTUNb1HASiczKYw3JvWj8AvZ-x3PFqJf0nfh_UijtwINFPo_p6_XEHwQf9q9KEgLcnJRnUSmmbKQZlB5MT2o4QC8SGkZSg6gsuxGNmpxqvLPGPkVTh-uWJX0pD2NLrnFDdc1cSKnHh700HkY8eGPhL01WFRIpRL9l6fWtTo34W4N-UgsVA6K5vEgTjEseStwSNF_1o8Yb9ZR_2__i-0zigXU-XKjLF6UfR5zm7mqSYJ1_tbZxmbS_1VkXjU6f6vni30EIN2HTyM6rQQ-43mvuofbdlxG0SSX0_5sMoimO0MGk3g_aCNfm31UuJTxKQoAuDKRE4cvF7pRb5OxvHjvrAZyRWRTw4tge2pBvq9-4XVIFLFQghEsGdT-KjJKo7aDyFS5PmnuH5w7VjISf-MKTfn-VVDN5ZK0kuRTv300IyEFMUBrHIBFqbIlT7DiP--1itX7VY4ZahddOGV3jK42w0xXu_HhK5kYMhv-2L5rAwWxfd1VQCDSepwtn3b6_e5uS_bF4hgCBuF140F4o7zl-o4RfpoG0a1e1Hup9Y7ssYVNkjZ96u2W2vwbPxT6bk_Lcj7UX0dnn__XIdtzeTpgqEj8QuQTiI2sd2POuq0_4z3DVLCdThknkJ79rPOFrbkDhdV0sKRjF9CzHn1TuSkKBHI3FNAN5lc73SQZdTk94aNC-cYqWQmPY39pwHfmsaJzw1D0G84RYNObdqd4SeY5wQRZ-Dhk7Z6Z9l45Vbijj8MzPdFRSCxV-xvnELj0PquhBfvM4JbESqC7ZEn2rzDmOgvTuxVAlS3ZGfcq9s3kPooCkDs9qGWalDTYs1S_q4qEvLHXXIzv3jIfJpE4cHhhYQH7R6IdioYrNCrEfu34rDKL3PLayl3n2tyzovmN6ngJQlV-cKKpEVG0HD8ce6qNRvK5VFQE5J6zVeeesni8o-ULe0HgUMRGoTviCTDjMGM5x5Q22oYXZdEUu2d1zud3hk0VsTykophYeVfwlLYsS0I09tlegWpWO9RnVHFwtC4uQjpOJBaKy6k0qIN4ovVrPs0c-ZHJHiZd2TOl_0ojvgbLG_U_5CydmX9ffpx_64zD_fnencDk37zcYV4xd3vgpwNxCCgfxgkjf6lAsCx2a3PCXPFWDVugHt026n1IbLbDwFx7siokHd1_HnAQdqsEgzHyW9ZFZla2mGmf_Xq_oK-JvQ1hnEGM57rpzDrrMer4yV43kQEfJpHafu_-S2sxQwoVcj5i7RgVNVE7lXcuwwQ9etcZzy8Sctsu2bI1vGGhyvGIKZ6IByM2II-5Iz7mO05U8hPLFCWZFDVt-IXiuwZAnfR5ay3akn3fept4qoCO_P8RF8bm0bcZ4dtxsPrsp0N1Qe0eycGpd26PMCl54zsKlDhdxlcnUFt4offK7P6KAtFzdmVnFdl12H9ctSJESDJ51FlJZhkyWq0Rsn-_aA',
      summary : 'Что движет одним из самых противоречивых героев в истории кино? И почему сериал «Сопрано» сложнее шекспировского «Гамлета»? На эти вопросы отвечает Роберт Макки в своей новой книге «Персонаж». С разрешения издательства «Альпина нон-фикшн» Кинопоиск публикует отрывок из главы «Многогранный персонаж». Здесь Макки разбирает личность Тони — главного героя сериала «Сопрано» в исполнении Джеймса Гандольфини.',
      blocks :
      [
        {
          paragraphs :
          [
            'Роберт Макки — один из самых известных преподавателей сценарного мастерства: среди его студентов 65 обладателей премии «Оскар» и 200 обладателей премии «Эмми»; это он учил будущих сценаристов «Властелина колец», «Секса в большом городе», «Бэтмэна», «ВАЛЛ-И», «Шрэка» и других знаковых фильмов и сериалов. Его новая книга «Персонаж» завершает трилогию, посвященную искусству сторителлинга. Предыдущие части назывались «История на миллион долларов» и «Диалог».',
          ]
        },
        {
          title : 'Анализ примера. Тони Сопрано',
          paragraphs :
          [
            'Насколько многогранным может быть персонаж? Давайте рассмотрим творение Дэвида Чейза — мафиозного главаря из Нью-Джерси, Тони Сопрано. В сериале «Сопрано» (The Sopranos) вышло 86 серий, и Тони был единственным, кто появлялся в каждой.',
          ]
        },
        {
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu8ZW3UcP4UmNt3TrC8cwRnwxqtQ-AQ6L-vteRXwzOjJwtM0N2GEaG6hO7jf0KyOVhU6EsJg9HAEZDuPhxHwvKZkUJK-FzCTNqcaRPt_XhEOZld8ginXdPYubWxNNEijFQnMIPKsDzqnsuQ7Q5YyVklfIV2bue2yDK1xTkNRcbBvLleeepcxGHkuCwR4PJ4XCa_ZP58nHLey_WskC34Mb12BiSl76Ea9ZXmq84nSudkHX-Vf1vtsf8OqssPCX7H2oyZWmjlcd94zLwVH_zpX0ADmEDXbYJL4OvPs70GzAC3XT0ppOqWFvWs_7HwA3bocB5Mtl1k0ZXcIZHwCxlC4tOkm3hwz0X9TOKHBAHV6W9ALp1W3GWxetbd-7OgGushkEUiLKDpgj31rcqPywNV7nQbcrZMa_ONxyyt5CM0U9nUjb9ydN18zU_3oxUC0elzZAWhdtd0hXvZ6fi9jhHQHZRQDyeC3bUE_YnAt_oYUOt3LWy5Y17nqN4wgPgnEUfr9KKTWlvNVNRpyZkNEN7DfmEdt2LQa5B-x97_m7EM6h2CeCQQqNuOAMSZ1qvMJ3vIeCpysF5f47nfDqrtKxZi2f6BnHJC-l7KSs6vLCvm3EdbHKZL11akYOvi9rClLdE3kEYiB5v5uzrqnuG74ARp83YteLlYavWJ2RaU-DMnaefHn5VTeuV_w1zcrR4AxtxTeAy1ZeNnnkT4xNqxvyjGO4xnGxm60ZQzxrLnndAbcsBKHk6lamj8qN4osMEiMUfZ96KKd3rmf85f4q0uAub4U0A1gEX8Q7pMz_7DvLIH9BSKeSYHv_GHHMC2wZzMKmPZegJOgFtV1pzAAa7HETpoxuKflnpm8X7uSNumHyjVxkZ5OrJ_wWSlR_vmyK6eDsUIoWQmNr_qiQbnh_On1glW-EsBeb55XsWwzAu88ykXccHUh4pqefx_-XjChQ8258leVSCATNVytH3DwNaDnCvXHYh-Gw-n-IEYwKrWu_Qgdfp2Ilu4Q0XOk-QXsNMjB3fK5JyGRVr9YcZf4qQMM_XbZkQxkl_SUrNhw8_xj6cO4hmQfzA3oe2TBMSv-o3pPVPhdSpGmE5L27PrNLT5MxBh0-mJlWN0_Vr0ddWiLRXswlV4D7lF-Gq9Zd7Jz6e0CPQxsXYmF6XOmj7hk_eb6glA7EMLQb9kROWE3Raq7yMMfuHyrIZiaOZy5XrBniIb0fdRciGbQ-hCoWz2zfG-hTDYHIhjDDGf0KEdw7f8t_ojZNp6DVW7WUnivdczn8QmJlHC-KiwdEHaZM1Nyp41N8XgYUwTpU3oU7RDwsDKvIcM8gGTRAgUvO-QG_CIxKX7JG3IdAl9h3pN9rXtL6PeCyJlx9Szlmdaz3v0XtygKhz-435eNadJ4UKWZfbP8bu9JvAchX8iDb_dphn4p8qIyzh47HknW6NuRPuSwhGp7CIEb8H4vot9WtZmwnzumwgZ4eF1ezCme8lvlEza9s2jsBrxOpFiGTus8qcRwp3RmeQ7cuZYP0K5Vmf2ifoKjtwKDV7i_ISRRHDuTMZc-KYdKcXXfXwFl2LwTpZH-dT7hqQD0xODfB4shPeVAeaWwp3sGXbCaCJctEFk4L3BFo3TNzdKwdi-skRr53_hQsebAQ7h53NROYhk6366bt_ozpKlFuYBkmURHKTqjSPgnN279xZy3W4ZTJtubPuz6Cqt3Ac5TOzalJV8QepezlrcuC8019x8UTKDasl-u0_1ztSDlSTAJoVyPymM1bEh87fhk9E9VfhDH0SfYVj2n8sOoMICDmDQ3qiUV23XfMNU148eK_7ZW0Qmk0X_bKNS5ODgvpA2-TWUfzg0mtSBPMiI3qzNDkb4YSdYnnlb_on8DZvdBgpn5d61jF1HzUfrVeKILTrz8nFQHZ1q_1emYdbU7bKEC8Q6r1gdCKLttDjzi9Wp5Rp22Xkdf4dETOa__Q-L0Q00RPPEpalqdOZBy3DDqiMa5cVkUyWmTcxxuUbj6daski_WM6J7AhCZzLI02rfGu_IkVfpkO1qIdkTvteAXjMc7BGvr-66RaXPXUd5D-KcvPs3YeWUwinzcZ7ZY2PHaho43-BmPTwgSpsSIOMGq86zKOXbYTwJwkGJcwrHCDK3aMDFR0f-HrXx6ylzDVMSnCDzw8n5GIKJr1H62Rtzd8pCdDtIdhHMoOp3xpgHEkvO92CN2-VIOZrxMc_OfwQar6AISU-vaorh9atJa6UPZoyMq9eVWTSO5Z_NJgkv01O6YtiXtKpN8OAy79IAE1bXRsOQZTOhmJGy6eknjl9wqsM8OBWHLypWyZ0LWRslWx50TMsL2WGIHqmH1S5NQ39T-mpsvwBGhUgU2jdWLJf2X0Y3DJ2fLTit5qFp0467GJ7PaGzFK-eWDsXVz9VbNSc6lMT7g1nVgAoFly2OwQ9XE1JqCJvUqo3o6FbjtsAbBuuCu0yZW4UYEWYtMRe-a-BuO2SYBUtfBpIRaTdZg1lHdvA8KysBOQiCHZuBvkGHi6fGevTfsEJdaBz-RzLcS4abKje4LasRIN2-oRm_8id4ZluA2DFDv1qCceHX1R8lP2pgzFcfGdGQ8p37Jb49e2Mz0s6UHySOdcys4nu6NHuCS943NFHvSUTt_vXhn9bX9Dbv-DDtozdewnXxPxWLLbtmoHQDp0H5AFbddzl-4T9ju34OwIcc9imA-OqzFkADmvtuG1ghKwEsHYp1ua_mr4w6S2ioKS-nAkbRBYdFk3HDFmj8z1_lbUwS6QNdihEDc19KxpQHMG6VyDR-iyrA81bDHrcADYuxHJFuzZnDDjcobuPgzFmzqyoyWeGXpWs1-7pwoK-_efFwTsXzcbJFa6M30ooITzRy_WwgnoO6ZIMGx1K7pO1fgTAFmhFZN_7TcKrHKLypVwfegtmRy9mzubfWmMz7V4H9-BrxP92OsTPrV1L8',
          ],
        },
        {
          paragraphs :
          [
            'Чтобы показать жизнь человека, вплетенную в густую сеть взаимоотношений, разыгрывающихся в течение 86 экранных часов, таящую в себе десятки событий предыстории, которые уходят корнями на десятки лет назад, в детство Тони, и только и ждут момента, чтобы проявиться, — чтобы наполнить все это временное и сюжетное пространство, требовался один из самых сложных персонажей, когда-либо порожденных любым из повествовательных искусств.',
            'Движемся против часовой стрелки.',
          ]
        },
        {
          title : '1. Совестливость/социопатия',
          paragraphs :
          [
            'Социопат — это человек, лишенный совести, антисоциальная эгоистичная личность, не способная ни на чувство вины, ни на сожаление. Временами Тони являет собой типичного социопата.',
            'А временами его раздирает совершенно макбетовское чувство вины. Его истерзанное сожалениями сердце не дает ему покоя, ноет и доводит до панических атак.',
            'Из-за этого центрального макбетовского противоречия между внешней жестокостью и внутренней совестливостью Тони Сопрано остается одним из самых завораживающих персонажей среди всех, когда-либо создававшихся для книг, экрана или сцены.',
            'Когда нужно убить, Тони убьет без колебаний. Его приступы ярости неукротимы. За свою сериальную жизнь он совершает восемь убийств на экране и невесть сколько за кадром (включая те, что исполнялись чужими руками по его приказу). Он, безусловно, социопатичен, однако для истинного прожженного социопата принадлежность к какому бы то ни было коллективу — даже к мафии — исключена.',
          ]
        },
        {
          title : '«Сопрано»',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu1eW3QZeNS3oBqCOvgYxk_nUm2F-QYvbWq4PgEwGLwdA1OiI_UF6DmgLngf0DsMFhSsxsMgZ2aVJ28BGw_tYCZgVFC_UrDaeSsDjbz5GAaPZlA9la6Qf_st6SiP_5ypHE9Dpn3oDvctcSMyzRg808AdKhsZP20-zqq2SkkV8_8npBTRs5v63XXvg4w3tpEXz-UT_ZOpWfG4MOfjTLtPr1QJCeKxoIayJPhne0ra950I126QlnFt-szn9MuE2vQ8qiUaEfVX8txxrEjK8fyQGYxiFTRUoBA4snSgbQMzQSifQ8Tu8ypIcWS5KrhK1LHbh15hk1NxoTIEaDvCjBE68mshFRi3HfJU96bFwnz3Ht3L6FU4VKtRfTC2rKFOvswomATNJrrsT7Alue-yitT8lAmeaVLScO6yACvzRIrSdfdhKlFWdte7VnaiS458MlfZiylVP12hnnUycuGhDXPM6xOGA-m76QTy7TTifMjd_hoF2KgTkr1pMcvmtk3MlX6wYCMUWv7ccFx9ZkGINb3ZX4-qn7wc55vwM7Uk4Er-DSKcQU1pvmMOPye1bL3GmfudCFdi21F8rrOEpvdJjNr0NSMi3RZ8VLOWeyuDD718FNfBZJhyUmffunJ6aefB8Q9oWUkDozrsj7rrfeHzTRg2WQNfplWS_WwxxSuyxY1c-7BlLp_Z8hMx3jUsS034-JRbS6yYd1qj23H_diduxTiEaB_IRmA95MH9YzfqMQYTN9CPWGCZXfGhtsmrMI3Mk3K-IWsUVn4cdhc1LItOuDcUV0skkXdUrZY5-L8ubMj2Aitcg4rr_GNOuuJ_7vrHkj5QyFQk3xH2ob-F5HoAyxk1P62p35G7UzEUcilLBr35VpsBqF7yGu5at3f26a4F8ADv14HGrPakDraieS18Tl5y3g7c6ZddtmxwDWa-y8gbsbKjopnQdtU2EHXqC0Nx_x5fBiTdNBHo1juy823gi_mHZJcIgim84oH45H2ve8eVO5kGVqFX0v6k8YPgfAMCHLK6oSaYUrrT9Ru9KkzMuDcWH8dgWboVrJK_cztsJ4v6TqeZwc9ouuLLNuX46_zGlHCUgRHo0RI8o7mAo_lLAdRzsCUjXdT5lrHSNqpCADK615eO5h_22qMYefm1b6aMu8EtnQBK4rKgjr7k8CmyT9tz0QHc7BJftOJwSiA2xsxc9DWhJFoYf1_1EnGsiARxf9iUTWlSt9gokPh9v2ikxrrOq9FOQen85cQ3aneneodScRoF1mUf0fVncUVjdwiO1bl_YG7R0L3e-Jf7442OfL0YkYZsV3vXpB97_bst7wu5gGtRwUtuuiwFPiK4azsLnb8ehZenW1J0bX5NonIKgFK2eesv3NH22DETPSbKQDh4lxZMope8Ey2f-v__ZWaGuk6qn0vL6f-iz7hidOa7iZZ8lcmQohJRP-T3SKAxQ0udNPVhZl5Qfdt2Vb0gjQ2w9BnezeVXPtps37Z19CXszbQBrJwEy6B6pYF15r8m-YcY-lGCUGCQ2Xniscao8gWFm_05a2QSGLzV8Nv3roeMuPGWm4HsWrzboZPwO7xlbgV8jCXZAoMqPiIAsCy-an2OGj6QgFjhmdV-pTKDaDeIi1z9-qQqlxB123gb8WzLRX9-WdyIJVa_UO6UMb1wbmRM84Fg2UfObrpkQ3wkuSx1D5i5WQabIJ4U8GE5SKoxSwET9floKRabNVHx1fvvgw65eJEXBqjYfJDsVvI18G4sBnoH5JVLR-d_oYjxbrbjdYtSdlMPEelXX7HjOEtnMgAJ2va-6WTdlDRe8Z8w4MuN-vpc20FimTVVqVL5-HToK0IxiuvUD8mju-LJNis2r3LFnbmcyB0tl1c_5DgNZ_AFhBo4eShl3Fl0WbedumZFR_q3HReFIdP_0KeRcjh6KWeOvImo0QCG4HUrAHklOOIzy117XYIYIZ8RMW3-QiI2CARavHoqqlSc8t2-0HashM_z_1WUDSReOpBpn7v0s66uQ_PHb1SJgmI2Y8e_K_CjsMESf5kH16lX1njkvY6gNEqDHL2_pyZfWv0fcNC3YMDKvzGW1wQuWX3d7NS3sLYtac01xGXTj4novS7FP6QyrTPH1TLcydDhn1y2rjuLpj8Li5p1-OXrEdR8FT_V9SeDjfr-lt7EoRP8FSjesnKwbW5MPs5gV0HDab_hzTWq_-a9hpsy2I1WYZcb9auwgC3zQAtY9HRpY9Fa9Vx6lbEhggd_OdfUASBWNhfoGHF7faBtBjyJYl2LDKR6Igk4I36vPMLS-lvCWO8TVv8pMQ2jd0IME_K9qmYd0vFRuBM7IIUPen5YWActkvWcIRyw-v0kK8z8jWLWyYfqtqmGdq727fSI2npUi5dl25z87HWFrDdMSpCyeO8rFx56lDjXt2hBDn28FlCEJRr-3KBWcfV3LO8OeIfi0IvKpHYjib5juOM8R9E2HE-XKZEe9yR9QCB0QUUfvTggZxEV8531nHjgjIi7uNAfCS-fcBQo1_E_tCTng7POo99PjOr7K4b06fCi-U_WPJSA3GaYXXvp9YKq8IWMnzs2ZGRRm_Zc85T26EVPfDkZEA7s3v6dr9_3NfQjKE06j-iZQ4WmOaHN9So4LHpPmzPUiBui3ds47fDNKPLKhFowcerpn5N2GPPV-GRMD_R51RuLp1t8FKWb__Q4LuwNMgUknAoGIbxlCLWmsus9zhA41k7crpldt-q4yKvxzQPa-jjjZddac9C5mrPhTYoz_tmTB2jRNVBh2Liyd2HvzDxGaBlCBOg3oYR85TEjMsLTv9yLXmSSXr8k80qtP0SJn7CwZSLemrFX8RTy70IOcHQYFsFm2PyTpBp3sLTkqUE6z-zQhoSp8SvFMuW4KXXH0_scQRBp0Vx2a76GonBKzBPy_OIt0NB-HPkT9yiPhrSy1pAEKFd8WyFZO3p3K8',
          ]
        },
        {
          paragraphs :
          [
            'Киллеры — такие, как Антон Чигур в исполнении Хавьера Бардема и Карсон Уэллс в исполнении Вуди Харрельсона из фильма «Старикам тут не место» — охотно работают на мафию, но в ее ряды вступают редко. Мафия — незаконное сообщество, существующее внутри законного, однако она требует от своих членов тех же качеств, которых требует традиционное общество от добропорядочных граждан — преданности, честности, усердия, приверженности семейным ценностям, трезвости, соблюдения законов общины, хороших манер и, самое главное, подчинения авторитетам, то есть тем, кто стоит выше в иерархии власти.',
            'Если вы принадлежите к этому обществу, нарушение его заповедей повлечет за собой чувство вины — вас будет корить и клеймить позором тот самый неотвязный и полный презрения внутренний голос, который называется совестью.',
            'Если, конечно, она у вас есть. И у Тони она совершенно точно имеется. Его совесть трудится без устали, наполняя сны кошмарными образами и загоняя его к психиатру. Эта глубокая грань, образованная противоречием между социопатической черствостью и совестливым самобичеванием, составляет центральную ось внутренней натуры Тони, и от нее, словно спицы в колесе, расходятся все остальные многочисленные грани.',
          ]
        },
        {
          title : '2. Гордость/стыд',
          paragraphs :
          [
            'Он гордится привязанностью своего сына и стыдится его слабоволия и суицидальных наклонностей.',
          ]
        },
        {
          title : '3. Расчет/интуиция',
          paragraphs :
          [
            'Много месяцев Тони играет в Шерлока Холмса, пытаясь найти доносчика, который стучит на него в ФБР. Затем во сне, навеянном пищевым отравлением, ему является рыба, говорящая голосом его давнего друга и преданного семье солдата — Сала «Биг Пусси» Бонпенсьеро. Рыба сообщает, что его подозрения насчет Биг Пусси верны. Биг Пусси и есть информатор ФБР. И Тони убивает своего друга, руководствуясь увиденным во сне.',
          ]
        },
        {
          title : '4. Депрессивный/оптимист',
          paragraphs :
          [
            'В душе Тони борются отчаяние и надежда.',
          ]
        },
        {
          title : '«Сопрано»',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu1eW3QZeNS3oBqCOvgYxk_nUm2F-Ycubeo4vhUxTGmJlBP2YnTQqrphu6zeRm9MAwDt0pY0ZicAc2_BWw_tYCZgVFC_UrDaeSsDjbz5GAaPZlA9la6Qf_st6SiP_5ypHE9Dpn3oDvctcSMyzRg808AdKhsZP20-zqq2SkkV8_8npBTRs5v63XXvg4w3tpEXz-UT_ZOpWfG4MOfjTLtPr1QJCeKxoIayJPhne0ra950I126QlnFt-szn9MuE2vQ8qiUaEfVX8txxrEjK8fyQGYxiFTRUoBA4snSgbQMzQSifQ8Tu8ypIcWS5KrhK1LHbh15hk1NxoTIEaDvCjBE68mshFRi3HfJU96bFwnz3Ht3L6FU4VKtRfTC2rKFOvswomATNJrrsT7Alue-yitT8lAmeaVLScO6yACvzRIrSdfdhKlFWdte7VnaiS458MlfZiylVP12hnnUycuGhDXPM6xOGA-m76QTy7TTifMjd_hoF2KgTkr1pMcvmtk3MlX6wYCMUWv7ccFx9ZkGINb3ZX4-qn7wc55vwM7Uk4Er-DSKcQU1pvmMOPye1bL3GmfudCFdi21F8rrOEpvdJjNr0NSMi3RZ8VLOWeyuDD718FNfBZJhyUmffunJ6aefB8Q9oWUkDozrsj7rrfeHzTRg2WQNfplWS_WwxxSuyxY1c-7BlLp_Z8hMx3jUsS034-JRbS6yYd1qj23H_diduxTiEaB_IRmA95MH9YzfqMQYTN9CPWGCZXfGhtsmrMI3Mk3K-IWsUVn4cdhc1LItOuDcUV0skkXdUrZY5-L8ubMj2Aitcg4rr_GNOuuJ_7vrHkj5QyFQk3xH2ob-F5HoAyxk1P62p35G7UzEUcilLBr35VpsBqF7yGu5at3f26a4F8ADv14HGrPakDraieS18Tl5y3g7c6ZddtmxwDWa-y8gbsbKjopnQdtU2EHXqC0Nx_x5fBiTdNBHo1juy823gi_mHZJcIgim84oH45H2ve8eVO5kGVqFX0v6k8YPgfAMCHLK6oSaYUrrT9Ru9KkzMuDcWH8dgWboVrJK_cztsJ4v6TqeZwc9ouuLLNuX46_zGlHCUgRHo0RI8o7mAo_lLAdRzsCUjXdT5lrHSNqpCADK615eO5h_22qMYefm1b6aMu8EtnQBK4rKgjr7k8CmyT9tz0QHc7BJftOJwSiA2xsxc9DWhJFoYf1_1EnGsiARxf9iUTWlSt9gokPh9v2ikxrrOq9FOQen85cQ3aneneodScRoF1mUf0fVncUVjdwiO1bl_YG7R0L3e-Jf7442OfL0YkYZsV3vXpB97_bst7wu5gGtRwUtuuiwFPiK4azsLnb8ehZenW1J0bX5NonIKgFK2eesv3NH22DETPSbKQDh4lxZMope8Ey2f-v__ZWaGuk6qn0vL6f-iz7hidOa7iZZ8lcmQohJRP-T3SKAxQ0udNPVhZl5Qfdt2Vb0gjQ2w9BnezeVXPtps37Z19CXszbQBrJwEy6B6pYF15r8m-YcY-lGCUGCQ2Xniscao8gWFm_05a2QSGLzV8Nv3roeMuPGWm4HsWrzboZPwO7xlbgV8jCXZAoMqPiIAsCy-an2OGj6QgFjhmdV-pTKDaDeIi1z9-qQqlxB123gb8WzLRX9-WdyIJVa_UO6UMb1wbmRM84Fg2UfObrpkQ3wkuSx1D5i5WQabIJ4U8GE5SKoxSwET9floKRabNVHx1fvvgw65eJEXBqjYfJDsVvI18G4sBnoH5JVLR-d_oYjxbrbjdYtSdlMPEelXX7HjOEtnMgAJ2va-6WTdlDRe8Z8w4MuN-vpc20FimTVVqVL5-HToK0IxiuvUD8mju-LJNis2r3LFnbmcyB0tl1c_5DgNZ_AFhBo4eShl3Fl0WbedumZFR_q3HReFIdP_0KeRcjh6KWeOvImo0QCG4HUrAHklOOIzy117XYIYIZ8RMW3-QiI2CARavHoqqlSc8t2-0HashM_z_1WUDSReOpBpn7v0s66uQ_PHb1SJgmI2Y8e_K_CjsMESf5kH16lX1njkvY6gNEqDHL2_pyZfWv0fcNC3YMDKvzGW1wQuWX3d7NS3sLYtac01xGXTj4novS7FP6QyrTPH1TLcydDhn1y2rjuLpj8Li5p1-OXrEdR8FT_V9SeDjfr-lt7EoRP8FSjesnKwbW5MPs5gV0HDab_hzTWq_-a9hpsy2I1WYZcb9auwgC3zQAtY9HRpY9Fa9Vx6lbEhggd_OdfUASBWNhfoGHF7faBtBjyJYl2LDKR6Igk4I36vPMLS-lvCWO8TVv8pMQ2jd0IME_K9qmYd0vFRuBM7IIUPen5YWActkvWcIRyw-v0kK8z8jWLWyYfqtqmGdq727fSI2npUi5dl25z87HWFrDdMSpCyeO8rFx56lDjXt2hBDn28FlCEJRr-3KBWcfV3LO8OeIfi0IvKpHYjib5juOM8R9E2HE-XKZEe9yR9QCB0QUUfvTggZxEV8531nHjgjIi7uNAfCS-fcBQo1_E_tCTng7POo99PjOr7K4b06fCi-U_WPJSA3GaYXXvp9YKq8IWMnzs2ZGRRm_Zc85T26EVPfDkZEA7s3v6dr9_3NfQjKE06j-iZQ4WmOaHN9So4LHpPmzPUiBui3ds47fDNKPLKhFowcerpn5N2GPPV-GRMD_R51RuLp1t8FKWb__Q4LuwNMgUknAoGIbxlCLWmsus9zhA41k7crpldt-q4yKvxzQPa-jjjZddac9C5mrPhTYoz_tmTB2jRNVBh2Liyd2HvzDxGaBlCBOg3oYR85TEjMsLTv9yLXmSSXr8k80qtP0SJn7CwZSLemrFX8RTy70IOcHQYFsFm2PyTpBp3sLTkqUE6z-zQhoSp8SvFMuW4KXXH0_scQRBp0Vx2a76GonBKzBPy_OIt0NB-HPkT9yiPhrSy1pAEKFd8WyFZO3p3K8',
          ],
        },
        {
          title : '5. Преданность/измены',
          paragraphs :
          [
            'Он предан жене, однако изменяет ей с бесчисленными любовницами.',
          ]
        },
        {
          title : '6. Спокойствие/паника',
          paragraphs :
          [
            'Он логичен и в то же время эмоционален. Он хладнокровен в критической ситуации, но при этом подвержен паническим атакам.',
          ]
        },
        {
          title : '7. Бесстрашие/ужас',
          paragraphs :
          [
            'Когда ему угрожают гангстеры, он не боится, но возможность теракта приводит его в ужас.',
          ]
        },
        {
          title : '8. Презрение/зависть',
          paragraphs :
          [
            'Тони презрительно отзывается о жизни обычных людей и в то же время им завидует.',
          ]
        },
        {
          title : '9. Убийца/спаситель',
          paragraphs :
          [
            'Он ненавидит и убивает людей, но любит и защищает животных.'
          ]
        },
        {
          title : '10. Любовь к женщинам / боязнь женщин',
          paragraphs :
          [
            'Тони — одержимый сексом мачо, которого, однако, преследуют кошмары на тему кастрации.',
          ]
        },
        {
          title : '11. Любовь к семье / ненависть к семье',
          paragraphs :
          [
            'Он ненавидит свою мать и в то же время ее любит; ненавидит своего дядю Джуниора и так же любит, а самое главное, любит и ненавидит себя самого.'
          ]
        },
        {
          title : '«Сопрано»',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu1eW3QZeNS3oBqCOvgYxk_nUm2F-Yevr6s4vgCxGP0LwtMiIrbRfbs0OjjLhe5NwoO4kkOg8iaAMGxWWw_tYCZgVFC_UrDaeSsDjbz5GAaPZlA9la6Qf_st6SiP_5ypHE9Dpn3oDvctcSMyzRg808AdKhsZP20-zqq2SkkV8_8npBTRs5v63XXvg4w3tpEXz-UT_ZOpWfG4MOfjTLtPr1QJCeKxoIayJPhne0ra950I126QlnFt-szn9MuE2vQ8qiUaEfVX8txxrEjK8fyQGYxiFTRUoBA4snSgbQMzQSifQ8Tu8ypIcWS5KrhK1LHbh15hk1NxoTIEaDvCjBE68mshFRi3HfJU96bFwnz3Ht3L6FU4VKtRfTC2rKFOvswomATNJrrsT7Alue-yitT8lAmeaVLScO6yACvzRIrSdfdhKlFWdte7VnaiS458MlfZiylVP12hnnUycuGhDXPM6xOGA-m76QTy7TTifMjd_hoF2KgTkr1pMcvmtk3MlX6wYCMUWv7ccFx9ZkGINb3ZX4-qn7wc55vwM7Uk4Er-DSKcQU1pvmMOPye1bL3GmfudCFdi21F8rrOEpvdJjNr0NSMi3RZ8VLOWeyuDD718FNfBZJhyUmffunJ6aefB8Q9oWUkDozrsj7rrfeHzTRg2WQNfplWS_WwxxSuyxY1c-7BlLp_Z8hMx3jUsS034-JRbS6yYd1qj23H_diduxTiEaB_IRmA95MH9YzfqMQYTN9CPWGCZXfGhtsmrMI3Mk3K-IWsUVn4cdhc1LItOuDcUV0skkXdUrZY5-L8ubMj2Aitcg4rr_GNOuuJ_7vrHkj5QyFQk3xH2ob-F5HoAyxk1P62p35G7UzEUcilLBr35VpsBqF7yGu5at3f26a4F8ADv14HGrPakDraieS18Tl5y3g7c6ZddtmxwDWa-y8gbsbKjopnQdtU2EHXqC0Nx_x5fBiTdNBHo1juy823gi_mHZJcIgim84oH45H2ve8eVO5kGVqFX0v6k8YPgfAMCHLK6oSaYUrrT9Ru9KkzMuDcWH8dgWboVrJK_cztsJ4v6TqeZwc9ouuLLNuX46_zGlHCUgRHo0RI8o7mAo_lLAdRzsCUjXdT5lrHSNqpCADK615eO5h_22qMYefm1b6aMu8EtnQBK4rKgjr7k8CmyT9tz0QHc7BJftOJwSiA2xsxc9DWhJFoYf1_1EnGsiARxf9iUTWlSt9gokPh9v2ikxrrOq9FOQen85cQ3aneneodScRoF1mUf0fVncUVjdwiO1bl_YG7R0L3e-Jf7442OfL0YkYZsV3vXpB97_bst7wu5gGtRwUtuuiwFPiK4azsLnb8ehZenW1J0bX5NonIKgFK2eesv3NH22DETPSbKQDh4lxZMope8Ey2f-v__ZWaGuk6qn0vL6f-iz7hidOa7iZZ8lcmQohJRP-T3SKAxQ0udNPVhZl5Qfdt2Vb0gjQ2w9BnezeVXPtps37Z19CXszbQBrJwEy6B6pYF15r8m-YcY-lGCUGCQ2Xniscao8gWFm_05a2QSGLzV8Nv3roeMuPGWm4HsWrzboZPwO7xlbgV8jCXZAoMqPiIAsCy-an2OGj6QgFjhmdV-pTKDaDeIi1z9-qQqlxB123gb8WzLRX9-WdyIJVa_UO6UMb1wbmRM84Fg2UfObrpkQ3wkuSx1D5i5WQabIJ4U8GE5SKoxSwET9floKRabNVHx1fvvgw65eJEXBqjYfJDsVvI18G4sBnoH5JVLR-d_oYjxbrbjdYtSdlMPEelXX7HjOEtnMgAJ2va-6WTdlDRe8Z8w4MuN-vpc20FimTVVqVL5-HToK0IxiuvUD8mju-LJNis2r3LFnbmcyB0tl1c_5DgNZ_AFhBo4eShl3Fl0WbedumZFR_q3HReFIdP_0KeRcjh6KWeOvImo0QCG4HUrAHklOOIzy117XYIYIZ8RMW3-QiI2CARavHoqqlSc8t2-0HashM_z_1WUDSReOpBpn7v0s66uQ_PHb1SJgmI2Y8e_K_CjsMESf5kH16lX1njkvY6gNEqDHL2_pyZfWv0fcNC3YMDKvzGW1wQuWX3d7NS3sLYtac01xGXTj4novS7FP6QyrTPH1TLcydDhn1y2rjuLpj8Li5p1-OXrEdR8FT_V9SeDjfr-lt7EoRP8FSjesnKwbW5MPs5gV0HDab_hzTWq_-a9hpsy2I1WYZcb9auwgC3zQAtY9HRpY9Fa9Vx6lbEhggd_OdfUASBWNhfoGHF7faBtBjyJYl2LDKR6Igk4I36vPMLS-lvCWO8TVv8pMQ2jd0IME_K9qmYd0vFRuBM7IIUPen5YWActkvWcIRyw-v0kK8z8jWLWyYfqtqmGdq727fSI2npUi5dl25z87HWFrDdMSpCyeO8rFx56lDjXt2hBDn28FlCEJRr-3KBWcfV3LO8OeIfi0IvKpHYjib5juOM8R9E2HE-XKZEe9yR9QCB0QUUfvTggZxEV8531nHjgjIi7uNAfCS-fcBQo1_E_tCTng7POo99PjOr7K4b06fCi-U_WPJSA3GaYXXvp9YKq8IWMnzs2ZGRRm_Zc85T26EVPfDkZEA7s3v6dr9_3NfQjKE06j-iZQ4WmOaHN9So4LHpPmzPUiBui3ds47fDNKPLKhFowcerpn5N2GPPV-GRMD_R51RuLp1t8FKWb__Q4LuwNMgUknAoGIbxlCLWmsus9zhA41k7crpldt-q4yKvxzQPa-jjjZddac9C5mrPhTYoz_tmTB2jRNVBh2Liyd2HvzDxGaBlCBOg3oYR85TEjMsLTv9yLXmSSXr8k80qtP0SJn7CwZSLemrFX8RTy70IOcHQYFsFm2PyTpBp3sLTkqUE6z-zQhoSp8SvFMuW4KXXH0_scQRBp0Vx2a76GonBKzBPy_OIt0NB-HPkT9yiPhrSy1pAEKFd8WyFZO3p3K8',
          ]
        },
        {
          title : '12. Любовь к жизни / любовь к смерти',
          paragraphs :
          [
            'Он наслаждается красотой жизни, однако с каждым совершенным убийством смерть пьянит его все больше и больше.',
            'У Тони Сопрано гораздо больше граней, чем у Гамлета. Шекспир окружает Гамлета ансамблем из десяти персонажей, проводящих на сцене всего четыре часа. Дэвид Чейз помещает Тони в ансамбль из нескольких десятков действующих лиц и дает ему 86 часов на решения, действия, поступки и реакции — социальные, личные, частные, сознательные и подсознательные. Тони — это современная модель сложного персонажа, поскольку его грани пересекают все плоскости бытия.',
            'Однако Тони, в отличие от Гамлета, при всем своем старании не может измениться. Основной драматический вопрос, который поднимает нарратив сериала, — изменится ли Тони, станет ли он более приличным человеком с нравственной точки зрения? Ответ — нет. Такие, как Тони, не способны изменить свое центральное «я» и никогда другими не станут.',
          ]
        },
      ],
      card :
      {
        caption : '1999 – 2007, США',
        title : 'Сопрано',
        genre : 'драма, криминал',
        duration : '55 мин',
        age : '18+',
        producer: 'Тимоти Ван Паттен, Джон Паттерсон, Аллен Култер',
        roles : 'Джеймс Гандольфини, Иди Фалько, Майкл Империоли',
        poster:  'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/c5539203-bd0a-4d93-920a-11be2fbbd778/200x300',
        rating : '8.8',
      },
    },
  },
  {
    id : 6,
    mainPhoto : 'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cfeh2H/x-d3ZEGvLLWrKw1QORkCk7_QVjD0cgGjaQKKmjswKm3Y2iSZeNI2cYuFeO8JgdixR6oEvpNtbOptOMFl2X3cwwdi4nVQfDni-m6fxS9MlYPsB8Nj9GWVcnxVHc23O-Hn1Jc8EfFfOSlMA_zvXxdOJ9e9k-mQ6L17ImIQMI0k2cZNaryrR_kjPunwzVu5UIWdYhld-On_DOx7jAPStv-hZthedhb9m7kox0x1_h-UDefRulpn0_WzsOEmwzbFYpOCgSI07k5wZ3duMgYVcZrBFu1XXTzrsk5ttkMEETt-r6aekn4X-dhybgEGdPBcEwsuFrMTrtmx9D6urs2xDihejsOo-i0OMSq0bjxAU_4TzhUoV5H0Iz2BZL6Iyt_6eqCv3Nh-n3_S_2aMDfo0G5lLIha4Uutbc_jy4yNAsQlvV0aKbv3sTzHvvq48DRxw08bUqVbedCd-SeK4S4Xa8HHk4R0SN53-1nEqjMizMFtYSyUfsp3jWbe18qDuQHKC7ZmJi2u2roe84nDsNQ-SfJUHlembWffsswzr_gyOnfF4oe2VGfyX9RJ7LMVHPbZf24GmXvSYZlhwcLPnY4G7DSrXCY7hvGNNPWyx4nEKFXEazV0qWp51o_NN775DBBiyeWihF5E_XfNfuatNhvA-ERWGaBB03CwZvz20bGyD8cgimcMKbj3mgfXh_2nwx9F6EgnT6dtc9-J-CGO_xQud9HUqbpnWvRW9WHHpCAJwspvdhm0YsNjnlLNzPWilCPGOo9wADWZzoQm_6j0i-8ZY9hXPHybXkXDu_oor_gqCk7AwoeEV2frcvVix6kjN8L6bVY9tFr6Vr5N6ej9la46yzegQi8zh_OaI9-7243rP2LEZi1lq0JF5orHApvmAxRI88mom0Ja93_pdcaJNA7Jy0dlA6Fj9WSEcM739qG2MdkbqXMzGJrzqyPEtcGq2g1Z3kUYRJpBctiozBG36gkGfMvksZx0Qutv9njHngQX6ttZVwy5T-9Wt2TY5syZkC_0GYxhJjGAzpI71r3fjfcoRfxsO0anYlDektcalMIVClzB9LeXRFnnQNV52aEjN8vYXEUegV7-RKRj-OHQmZ8I-CKpVCIpgeWqPcOvw4nyBHPhcR1dpGpN_p_ZD7TNNg520eOhjklM9Gb7eeKTCQDN-XpcB7JiwG--ScDv1ISZNtAxr0IKCIjzijngpvmszgll4kUOUJJLStm11jGD-xQQYMH_vrxSaedn52LKggYU8fZ0YTK2aO5NuFno892snQjJAJduJzGd2awD_p3ajuoCSfJvKmarTV7diNs2uvExJUvE1ZGfWG3Rcc5e3KoxH_HhWHUlhlbcc7ZZ-ebymJAzywKrRDoqut2JIMGs3L3VOlvzaCN0pUl24avfIrLLLRlR6dGlmnR292LVS8OTIgnP_nNOJplE-nGyUOjE1KyfCMw4gUYnPIH3kCPzmt61-jR2w3Q2UKhnUMW_1i-V5BMTY8D3r5xYe-p41VLepQA79Nx2USSSYf9wgHjFxv2ApjTUNb1HASiczKYw3JvWj8AvZ-x3PFqJf0nfh_UijtwINFPo_p6_XEHwQf9q9KEgLcnJRnUSmmbKQZlB5MT2o4QC8SGkZSg6gsuxGNmpxqvLPGPkVTh-uWJX0pD2NLrnFDdc1cSKnHh700HkY8eGPhL01WFRIpRL9l6fWtTo34W4N-UgsVA6K5vEgTjEseStwSNF_1o8Yb9ZR_2__i-0zigXU-XKjLF6UfR5zm7mqSYJ1_tbZxmbS_1VkXjU6f6vni30EIN2HTyM6rQQ-43mvuofbdlxG0SSX0_5sMoimO0MGk3g_aCNfm31UuJTxKQoAuDKRE4cvF7pRb5OxvHjvrAZyRWRTw4tge2pBvq9-4XVIFLFQghEsGdT-KjJKo7aDyFS5PmnuH5w7VjISf-MKTfn-VVDN5ZK0kuRTv300IyEFMUBrHIBFqbIlT7DiP--1itX7VY4ZahddOGV3jK42w0xXu_HhK5kYMhv-2L5rAwWxfd1VQCDSepwtn3b6_e5uS_bF4hgCBuF140F4o7zl-o4RfpoG0a1e1Hup9Y7ssYVNkjZ96u2W2vwbPxT6bk_Lcj7UX0dnn__XIdtzeTpgqEj8QuQTiI2sd2POuq0_4z3DVLCdThknkJ79rPOFrbkDhdV0sKRjF9CzHn1TuSkKBHI3FNAN5lc73SQZdTk94aNC-cYqWQmPY39pwHfmsaJzw1D0G84RYNObdqd4SeY5wQRZ-Dhk7Z6Z9l45Vbijj8MzPdFRSCxV-xvnELj0PquhBfvM4JbESqC7ZEn2rzDmOgvTuxVAlS3ZGfcq9s3kPooCkDs9qGWalDTYs1S_q4qEvLHXXIzv3jIfJpE4cHhhYQH7R6IdioYrNCrEfu34rDKL3PLayl3n2tyzovmN6ngJQlV-cKKpEVG0HD8ce6qNRvK5VFQE5J6zVeeesni8o-ULe0HgUMRGoTviCTDjMGM5x5Q22oYXZdEUu2d1zud3hk0VsTykophYeVfwlLYsS0I09tlegWpWO9RnVHFwtC4uQjpOJBaKy6k0qIN4ovVrPs0c-ZHJHiZd2TOl_0ojvgbLG_U_5CydmX9ffpx_64zD_fnencDk37zcYV4xd3vgpwNxCCgfxgkjf6lAsCx2a3PCXPFWDVugHt026n1IbLbDwFx7siokHd1_HnAQdqsEgzHyW9ZFZla2mGmf_Xq_oK-JvQ1hnEGM57rpzDrrMer4yV43kQEfJpHafu_-S2sxQwoVcj5i7RgVNVE7lXcuwwQ9etcZzy8Sctsu2bI1vGGhyvGIKZ6IByM2II-5Iz7mO05U8hPLFCWZFDVt-IXiuwZAnfR5ay3akn3fept4qoCO_P8RF8bm0bcZ4dtxsPrsp0N1Qe0eycGpd26PMCl54zsKlDhdxlcnUFt4offK7P6KAtFzdmVnFdl12H9ctSJESDJ51FlJZhkyWq0Rsn-_aA',
    category : 'Рецензия',
    title : '«Прощенный» МакДоны-старшего: постколониальный фильм-притча о белых господах в Северной Африке',
    data : '25.08.2022 г.',
    views : 2301,
    comments :
    [
      {
        id : 10,
        author :
        {
          firstName : 'Константин',
          lastName : 'Минин',
          mainPhoto : 'https://avatarko.ru/img/kartinka/1/Jack_Vorobei.jpg',
          id : '44444444',
        },
        text : `По мне, 'Прощённый' - большая удача Джона Майкла МакДоны, что бы там ни писали зарубежные кинокритики. Кроме того, это один из самых актуальных фильмов на сегодняшний день. Я уже молчу о тех вечных темах, которые он затрагивает. Мне нравится, что старший МакДона гнёт свою линию и продолжает то, что начал ещё в 'Голгофе', просто этот фильм ещё более жёсткий и бескомпромиссный. Всё творчество Джона Майкла отсылает к одному из моих любимых авторов - Фланнери О'Коннор, которая исследовала те же темы, что и он. Мартина я тоже очень люблю, он гениальный драматург. Но братья МакДоны разные. Если Мартин снимает больше народное кино, то Джон Майкл скорее авторское. Очень жду новый фильм Мартина 'Банши Инишира', будет интересное противостояние двух братьев, хотя я восхищаюсь ими обоими. А 'Прощённого' однозначно стоит посмотреть, один из лучших фильмов года. Очень рад, что вышла про него отдельная статья.`,
        data : '25 августа, 20:08',
        rating : 9,
      },
      {
        id : 11,
        author :
        {
          firstName : 'Константин',
          lastName : 'Минин',
          mainPhoto : 'https://avatarko.ru/img/kartinka/1/Jack_Vorobei.jpg',
          id : '44444444',
        },
        text : `Хотелось бы знать,почему 'остроумное и парадоксально развлекательное кино' имеет столь низкую оценку публики.`,
        data : '25 августа, 20:54',
        rating : 3,
        answers :
        [
          {
            id : 12,
            author :
            {
                firstName : 'Евгения',
                lastName : 'Петрова',
                mainPhoto : 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
                id : '11111111',
            },
            consumer :
            {
              firstName : 'Кирилл',
              lastName : 'Рогов',
              mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
              id : '172787588',
            },
            text : `Это же Зельвенский, он всегда такой. И обязательно плюнуть в сторону Марвел, это ведь так не баянно!`,
            data : '27 августа, 23:48',
            rating : -2,
          },
          {
            id : 13,
            author :
            {
                firstName : 'Евгения',
                lastName : 'Петрова',
                mainPhoto : 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
                id : '11111111',
            },
            consumer :
            {
              firstName : 'Кирилл',
              lastName : 'Рогов',
              mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
              id : '172787588',
            },
            text : `Три раза перечитал рецензию и так и не нашёл, где Зельвенский плюёт в сторону Марвел.`,
            data : '28 августа, 07:33',
            rating : 2,
          },
        ]
      },
      {
        id : 14,
        author :
        {
          firstName : 'Константин',
          lastName : 'Минин',
          mainPhoto : 'https://avatarko.ru/img/kartinka/1/Jack_Vorobei.jpg',
          id : '44444444',
        },
        text : `Крепкая картина о столкновении двух противоположностей, двух миров. Тема искупления в кино очень важна, но по-настоящему талантливых фильмов по пальцам одной руки. Файнс - великолепен, остальные тоже неплохи. Закрытый финал поданный режиссером подпортил впечатление от картины, в целом очень достойную, оторваться от которой было совсем не просто. Лучше было бы оставить зрителя в глубоком раздумье, подкинув ему мыслишок и открытый финал, пусть сам решает. Но в целом, говорю, кино добротное.`,
        data : '25 августа, 21:27',
        rating : 0,
      },
    ],
    article :
    {
      title : '«Прощенный» МакДоны-старшего: постколониальный фильм-притча о белых господах в Северной Африке',
      data : '25.08.2022 г.',
      mainPhoto : 'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cfeh2H/x-d3ZEGvLLWrKw1QORkCk7_QVjD0cgGjaQKKmjswKm3Y2iSZeNI2cYuFeO8JgdixR6oEvpNtbOptOMFl2X3cwwdi4nVQfDni-m6fxS9MlYPsB8Nj9GWVcnxVHc23O-Hn1Jc8EfFfOSlMA_zvXxdOJ9e9k-mQ6L17ImIQMI0k2cZNaryrR_kjPunwzVu5UIWdYhld-On_DOx7jAPStv-hZthedhb9m7kox0x1_h-UDefRulpn0_WzsOEmwzbFYpOCgSI07k5wZ3duMgYVcZrBFu1XXTzrsk5ttkMEETt-r6aekn4X-dhybgEGdPBcEwsuFrMTrtmx9D6urs2xDihejsOo-i0OMSq0bjxAU_4TzhUoV5H0Iz2BZL6Iyt_6eqCv3Nh-n3_S_2aMDfo0G5lLIha4Uutbc_jy4yNAsQlvV0aKbv3sTzHvvq48DRxw08bUqVbedCd-SeK4S4Xa8HHk4R0SN53-1nEqjMizMFtYSyUfsp3jWbe18qDuQHKC7ZmJi2u2roe84nDsNQ-SfJUHlembWffsswzr_gyOnfF4oe2VGfyX9RJ7LMVHPbZf24GmXvSYZlhwcLPnY4G7DSrXCY7hvGNNPWyx4nEKFXEazV0qWp51o_NN775DBBiyeWihF5E_XfNfuatNhvA-ERWGaBB03CwZvz20bGyD8cgimcMKbj3mgfXh_2nwx9F6EgnT6dtc9-J-CGO_xQud9HUqbpnWvRW9WHHpCAJwspvdhm0YsNjnlLNzPWilCPGOo9wADWZzoQm_6j0i-8ZY9hXPHybXkXDu_oor_gqCk7AwoeEV2frcvVix6kjN8L6bVY9tFr6Vr5N6ej9la46yzegQi8zh_OaI9-7243rP2LEZi1lq0JF5orHApvmAxRI88mom0Ja93_pdcaJNA7Jy0dlA6Fj9WSEcM739qG2MdkbqXMzGJrzqyPEtcGq2g1Z3kUYRJpBctiozBG36gkGfMvksZx0Qutv9njHngQX6ttZVwy5T-9Wt2TY5syZkC_0GYxhJjGAzpI71r3fjfcoRfxsO0anYlDektcalMIVClzB9LeXRFnnQNV52aEjN8vYXEUegV7-RKRj-OHQmZ8I-CKpVCIpgeWqPcOvw4nyBHPhcR1dpGpN_p_ZD7TNNg520eOhjklM9Gb7eeKTCQDN-XpcB7JiwG--ScDv1ISZNtAxr0IKCIjzijngpvmszgll4kUOUJJLStm11jGD-xQQYMH_vrxSaedn52LKggYU8fZ0YTK2aO5NuFno892snQjJAJduJzGd2awD_p3ajuoCSfJvKmarTV7diNs2uvExJUvE1ZGfWG3Rcc5e3KoxH_HhWHUlhlbcc7ZZ-ebymJAzywKrRDoqut2JIMGs3L3VOlvzaCN0pUl24avfIrLLLRlR6dGlmnR292LVS8OTIgnP_nNOJplE-nGyUOjE1KyfCMw4gUYnPIH3kCPzmt61-jR2w3Q2UKhnUMW_1i-V5BMTY8D3r5xYe-p41VLepQA79Nx2USSSYf9wgHjFxv2ApjTUNb1HASiczKYw3JvWj8AvZ-x3PFqJf0nfh_UijtwINFPo_p6_XEHwQf9q9KEgLcnJRnUSmmbKQZlB5MT2o4QC8SGkZSg6gsuxGNmpxqvLPGPkVTh-uWJX0pD2NLrnFDdc1cSKnHh700HkY8eGPhL01WFRIpRL9l6fWtTo34W4N-UgsVA6K5vEgTjEseStwSNF_1o8Yb9ZR_2__i-0zigXU-XKjLF6UfR5zm7mqSYJ1_tbZxmbS_1VkXjU6f6vni30EIN2HTyM6rQQ-43mvuofbdlxG0SSX0_5sMoimO0MGk3g_aCNfm31UuJTxKQoAuDKRE4cvF7pRb5OxvHjvrAZyRWRTw4tge2pBvq9-4XVIFLFQghEsGdT-KjJKo7aDyFS5PmnuH5w7VjISf-MKTfn-VVDN5ZK0kuRTv300IyEFMUBrHIBFqbIlT7DiP--1itX7VY4ZahddOGV3jK42w0xXu_HhK5kYMhv-2L5rAwWxfd1VQCDSepwtn3b6_e5uS_bF4hgCBuF140F4o7zl-o4RfpoG0a1e1Hup9Y7ssYVNkjZ96u2W2vwbPxT6bk_Lcj7UX0dnn__XIdtzeTpgqEj8QuQTiI2sd2POuq0_4z3DVLCdThknkJ79rPOFrbkDhdV0sKRjF9CzHn1TuSkKBHI3FNAN5lc73SQZdTk94aNC-cYqWQmPY39pwHfmsaJzw1D0G84RYNObdqd4SeY5wQRZ-Dhk7Z6Z9l45Vbijj8MzPdFRSCxV-xvnELj0PquhBfvM4JbESqC7ZEn2rzDmOgvTuxVAlS3ZGfcq9s3kPooCkDs9qGWalDTYs1S_q4qEvLHXXIzv3jIfJpE4cHhhYQH7R6IdioYrNCrEfu34rDKL3PLayl3n2tyzovmN6ngJQlV-cKKpEVG0HD8ce6qNRvK5VFQE5J6zVeeesni8o-ULe0HgUMRGoTviCTDjMGM5x5Q22oYXZdEUu2d1zud3hk0VsTykophYeVfwlLYsS0I09tlegWpWO9RnVHFwtC4uQjpOJBaKy6k0qIN4ovVrPs0c-ZHJHiZd2TOl_0ojvgbLG_U_5CydmX9ffpx_64zD_fnencDk37zcYV4xd3vgpwNxCCgfxgkjf6lAsCx2a3PCXPFWDVugHt026n1IbLbDwFx7siokHd1_HnAQdqsEgzHyW9ZFZla2mGmf_Xq_oK-JvQ1hnEGM57rpzDrrMer4yV43kQEfJpHafu_-S2sxQwoVcj5i7RgVNVE7lXcuwwQ9etcZzy8Sctsu2bI1vGGhyvGIKZ6IByM2II-5Iz7mO05U8hPLFCWZFDVt-IXiuwZAnfR5ay3akn3fept4qoCO_P8RF8bm0bcZ4dtxsPrsp0N1Qe0eycGpd26PMCl54zsKlDhdxlcnUFt4offK7P6KAtFzdmVnFdl12H9ctSJESDJ51FlJZhkyWq0Rsn-_aA',
      summary : 'Новая картина Джона Майкла МакДоны доступна на мировых стримингах, и, судя по ее бодрому сарказму, режиссер снова в форме. Его драмеди о трагических последствиях столкновения западного и арабского мира не щадит никого: ни европейцев, ни аборигенов, ни левых, ни правых, ни зрителя.',
      blocks :
      [
        {
          paragraphs :
          [
            'Британская светская пара — доктор Дэвид (Рэйф Файнс) и его жена Джо Хеннингер (Джессика Честейн) — прибывает в Марокко в отпуск. Их старый приятель, богатый декадент (Мэтт Смит), живет здесь во дворце посреди пустыни со своим американским любовником (Калеб Лэндри Джонс), который любит устраивать пышные костюмированные вечеринки. Среди гостей — скучающий плейбой-финансист (Кристофер Эбботт), прогрессивная французская журналистка (Мари-Жозе Кроз), похабник-лорд, русские модели и так далее. На пустынной ночной дороге уставший и не очень трезвый Дэвид насмерть сбивает арабского юношу, который собирался то ли ограбить туристов, то ли продать сувенир.',
            'После двух отличных фильмов, снятых в Ирландии («Однажды в Ирландии» и «Голгофа»), и одного никудышного в Америке («Война против всех») Джон Майкл МакДона, он же МакДона-старший, направился в Африку, впрочем, в компании соотечественников. «Прощенный» — также первый случай, когда он написал для себя сценарий на основе чужого материала, взяв одноименный роман Лоренса Осборна, современного представителя почтенного британского подвида литераторов-путешественников, кочующих по отдаленным уголкам планеты с виной белого человека в котомке.',
          ]
        },
        {
          paragraphs :
          [
            'Что с виной все будет в полном порядке, понятно уже по первым секундам. Хеннингеры подплывают к Танжеру на пароме. «L’Afrique», — веско изрекает полиглот Дэвид и отхлебывает джин-тоник. Джо, отложив томик Андре Жида, утомленно снимает с холеного лица дизайнерские очки. Белые герои фильма — очень обеспеченные, прекрасно образованные снобы, презирающие всех и вся, в том числе, справедливости ради, и самих себя. Их ремарки относительно местного населения и культуры по нынешним временам настолько возмутительны, а взаимные обвинения в фашизме настолько игривы, что быстро становится ясно: это не столько мировоззрение, сколько усталая поза, выученный нигилизм, еще одна привилегия в постколониальную эпоху (между тем один из центральных персонажей, как неожиданно выясняется, в юности был леваком).',
            'Название анонсирует не только угрызения, но прощение, и здесь до самого конца сохраняется интрига. Более того, не исчезает она и с финальными титрами, поскольку развязку можно трактовать по-разному. «Прощенный» начинается как сатирическая комедия, потом превращается в почти что триллер — в конце первого акта на сцене появляется отец погибшего юноши в сопровождении еще пары мужчин и предлагает Дэвиду отправиться с ними в пустыню на похороны (так принято). А затем картина сворачивает в любимый жанр МакДоны — религиозную притчу о грехе, мести и искуплении. Все эти грани фильма вырублены резко, даже грубо, особенно сатирическая: большинство героев выглядят карикатурами на самих себя. Причем смехотворны и бледнолицые, и берберы: приезжие предаются излишествам и сочатся ядом, местные тайком плюют им в стаканы и мечтают о снеге. Культурные клише доведены до абсурда — один слуга-марокканец, например, изъясняется почти исключительно туманными восточными поговорками, на что второй советует ему срочно завести Twitter. Это, конечно, сознательный авторский выбор: на фоне такого гротеска человеческие реакции героев — решение мужа поехать в пустыню с отцом убитого мальчика или измена жены — выглядят особенно странно и выпукло.',
          ]
        },
        {
          title : 'Рэйф Файнс и Мэтт Смит',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu1eW3QZeNS3oBqCOvgYxk_nUm2F-AbubWh4fhQkTP1LgxOiI2FQKK50ei3LRC9Y1xX5hlegZieAcDrV2w_tYCZgVFC_UrDaeSsDjbz5GAaPZlA9la6Qf_st6SiP_5ypHE9Dpn3oDvctcSMyzRg808AdKhsZP20-zqq2SkkV8_8npBTRs5v63XXvg4w3tpEXz-UT_ZOpWfG4MOfjTLtPr1QJCeKxoIayJPhne0ra950I126QlnFt-szn9MuE2vQ8qiUaEfVX8txxrEjK8fyQGYxiFTRUoBA4snSgbQMzQSifQ8Tu8ypIcWS5KrhK1LHbh15hk1NxoTIEaDvCjBE68mshFRi3HfJU96bFwnz3Ht3L6FU4VKtRfTC2rKFOvswomATNJrrsT7Alue-yitT8lAmeaVLScO6yACvzRIrSdfdhKlFWdte7VnaiS458MlfZiylVP12hnnUycuGhDXPM6xOGA-m76QTy7TTifMjd_hoF2KgTkr1pMcvmtk3MlX6wYCMUWv7ccFx9ZkGINb3ZX4-qn7wc55vwM7Uk4Er-DSKcQU1pvmMOPye1bL3GmfudCFdi21F8rrOEpvdJjNr0NSMi3RZ8VLOWeyuDD718FNfBZJhyUmffunJ6aefB8Q9oWUkDozrsj7rrfeHzTRg2WQNfplWS_WwxxSuyxY1c-7BlLp_Z8hMx3jUsS034-JRbS6yYd1qj23H_diduxTiEaB_IRmA95MH9YzfqMQYTN9CPWGCZXfGhtsmrMI3Mk3K-IWsUVn4cdhc1LItOuDcUV0skkXdUrZY5-L8ubMj2Aitcg4rr_GNOuuJ_7vrHkj5QyFQk3xH2ob-F5HoAyxk1P62p35G7UzEUcilLBr35VpsBqF7yGu5at3f26a4F8ADv14HGrPakDraieS18Tl5y3g7c6ZddtmxwDWa-y8gbsbKjopnQdtU2EHXqC0Nx_x5fBiTdNBHo1juy823gi_mHZJcIgim84oH45H2ve8eVO5kGVqFX0v6k8YPgfAMCHLK6oSaYUrrT9Ru9KkzMuDcWH8dgWboVrJK_cztsJ4v6TqeZwc9ouuLLNuX46_zGlHCUgRHo0RI8o7mAo_lLAdRzsCUjXdT5lrHSNqpCADK615eO5h_22qMYefm1b6aMu8EtnQBK4rKgjr7k8CmyT9tz0QHc7BJftOJwSiA2xsxc9DWhJFoYf1_1EnGsiARxf9iUTWlSt9gokPh9v2ikxrrOq9FOQen85cQ3aneneodScRoF1mUf0fVncUVjdwiO1bl_YG7R0L3e-Jf7442OfL0YkYZsV3vXpB97_bst7wu5gGtRwUtuuiwFPiK4azsLnb8ehZenW1J0bX5NonIKgFK2eesv3NH22DETPSbKQDh4lxZMope8Ey2f-v__ZWaGuk6qn0vL6f-iz7hidOa7iZZ8lcmQohJRP-T3SKAxQ0udNPVhZl5Qfdt2Vb0gjQ2w9BnezeVXPtps37Z19CXszbQBrJwEy6B6pYF15r8m-YcY-lGCUGCQ2Xniscao8gWFm_05a2QSGLzV8Nv3roeMuPGWm4HsWrzboZPwO7xlbgV8jCXZAoMqPiIAsCy-an2OGj6QgFjhmdV-pTKDaDeIi1z9-qQqlxB123gb8WzLRX9-WdyIJVa_UO6UMb1wbmRM84Fg2UfObrpkQ3wkuSx1D5i5WQabIJ4U8GE5SKoxSwET9floKRabNVHx1fvvgw65eJEXBqjYfJDsVvI18G4sBnoH5JVLR-d_oYjxbrbjdYtSdlMPEelXX7HjOEtnMgAJ2va-6WTdlDRe8Z8w4MuN-vpc20FimTVVqVL5-HToK0IxiuvUD8mju-LJNis2r3LFnbmcyB0tl1c_5DgNZ_AFhBo4eShl3Fl0WbedumZFR_q3HReFIdP_0KeRcjh6KWeOvImo0QCG4HUrAHklOOIzy117XYIYIZ8RMW3-QiI2CARavHoqqlSc8t2-0HashM_z_1WUDSReOpBpn7v0s66uQ_PHb1SJgmI2Y8e_K_CjsMESf5kH16lX1njkvY6gNEqDHL2_pyZfWv0fcNC3YMDKvzGW1wQuWX3d7NS3sLYtac01xGXTj4novS7FP6QyrTPH1TLcydDhn1y2rjuLpj8Li5p1-OXrEdR8FT_V9SeDjfr-lt7EoRP8FSjesnKwbW5MPs5gV0HDab_hzTWq_-a9hpsy2I1WYZcb9auwgC3zQAtY9HRpY9Fa9Vx6lbEhggd_OdfUASBWNhfoGHF7faBtBjyJYl2LDKR6Igk4I36vPMLS-lvCWO8TVv8pMQ2jd0IME_K9qmYd0vFRuBM7IIUPen5YWActkvWcIRyw-v0kK8z8jWLWyYfqtqmGdq727fSI2npUi5dl25z87HWFrDdMSpCyeO8rFx56lDjXt2hBDn28FlCEJRr-3KBWcfV3LO8OeIfi0IvKpHYjib5juOM8R9E2HE-XKZEe9yR9QCB0QUUfvTggZxEV8531nHjgjIi7uNAfCS-fcBQo1_E_tCTng7POo99PjOr7K4b06fCi-U_WPJSA3GaYXXvp9YKq8IWMnzs2ZGRRm_Zc85T26EVPfDkZEA7s3v6dr9_3NfQjKE06j-iZQ4WmOaHN9So4LHpPmzPUiBui3ds47fDNKPLKhFowcerpn5N2GPPV-GRMD_R51RuLp1t8FKWb__Q4LuwNMgUknAoGIbxlCLWmsus9zhA41k7crpldt-q4yKvxzQPa-jjjZddac9C5mrPhTYoz_tmTB2jRNVBh2Liyd2HvzDxGaBlCBOg3oYR85TEjMsLTv9yLXmSSXr8k80qtP0SJn7CwZSLemrFX8RTy70IOcHQYFsFm2PyTpBp3sLTkqUE6z-zQhoSp8SvFMuW4KXXH0_scQRBp0Vx2a76GonBKzBPy_OIt0NB-HPkT9yiPhrSy1pAEKFd8WyFZO3p3K8',
          ]
        },
        {
          paragraphs :
          [
            'На плечи Файнса тут ложится многое: он практически единственный в фильме, кому приходится играть, а не позировать, и он заставляет нас почувствовать к своему несчастному, все прекрасно понимающему цинику если не симпатию, то что-то вроде нее — искреннее сожаление, что все так случилось. Остальные артисты просто получают удовольствие: высокомерный Смит, маслянистый Эбботт, злющая Честейн… Одна из самых удачных шуток «Прощенного» в том, что его героиня оказывается детской писательницей в многолетнем творческом кризисе.',
            'Для по-настоящему хорошего фильма в «Прощенном» все же не хватает нюансов: ковбойская стрельба МакДоны во все стороны оставляет мало пространства для маневра и зрителю, и самому автору. Однако радостно, что из собственного многолетнего кризиса МакДона, кажется, выбирается. «Прощенный» даже в самые мрачные моменты не перестает быть остроумным и парадоксально развлекательным кино — то ли сафари, то ли Нагорная проповедь.',
          ]
        },
      ],
      card :
      {
        caption : '2022, Великобритания',
        title : 'Прощённый',
        genre : 'драма',
        duration : '1 ч 57 мин',
        producer: 'Джон Майкл МакДона',
        roles : 'Рэйф Файнс, Джессика Честейн, Мэтт Смит',
        poster:  'https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/0360878f-125a-4f28-bb5d-16e46bbe7eb3/200x300',
        rating : '6.3',
      },
    },
  },
  {
    id : 7,
    mainPhoto : 'https://img2.akspic.ru/attachments/originals/8/5/4/2/4/142458-dosug-puteshestvie-televizionnoe_shou-sidyashhij-bashmak-3600x2400.jpg',
    category : 'Индустрия',
    title : 'Обсуждаем финал «Лучше звоните Солу»: почему Сол Гудман интереснее Уолтера Уайта',
    data : '18.08.2022 г.',
    views : 3241,
    comments :
    [
      {
        id : 15,
        author :
        {
          firstName : 'Константин',
          lastName : 'Минин',
          mainPhoto : 'https://avatarko.ru/img/kartinka/1/Jack_Vorobei.jpg',
          id : '44444444',
        },
        text : `Заголовок классный, но статья не понравилась. Создаётся впечатление, что автор статьи недостаточно глубоко понял посыл авторов сериала.
        Во-первых, что касается сцен с вопросами про машину времени. 'Сам он отвечает на собственный вопрос по-разному: сделал бы успешную инвестицию или предотвратил травму колена.' - серьёзно? Вы это так увидели? Предотвратил травму колена?... Джимми сожалеет о том моменте, когда он стал Падучим Джимми (совершил свою первую махинацию, выбрал простое вместо правильного, пошёл на поводу у своей Тени), что в дальнейшем переросло в Сола. Эти две сцены очень чётко демонстрируют путь героя, его изменение.  Первая - с Майком, происходит до всех ключевых событий (до убийства Говарда, до истории с Уолтом, до расставания с Ким и движения героя всё дальше в тьму) - тогда он хочет денег, видя в них власть и решение своих проблем (здравствуй Тень, ложный путь.)  Вторая же сцена - диалог с Уолтом - происходит уже после всего этого пути и звучит, как переоценка этого пути`,
        data : '23 августа, 20:13',
        rating : 35,
        answers :
        [
          {
            id : 16,
            author :
            {
                firstName : 'Евгения',
                lastName : 'Петрова',
                mainPhoto : 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
                id : '11111111',
            },
            consumer :
            {
              firstName : 'Константин',
              lastName : 'Минин',
              mainPhoto : 'https://avatarko.ru/img/kartinka/1/Jack_Vorobei.jpg',
              id : '44444444',
            },
            text : `Тут и Уолт сам раздражённо уточняет: ты хочешь поговорить о машине времени  или о сожалениях? Хочешь поговорить о сожалениях - так и говори, нечего тут абстрактно приплетать машину времени (читаем: не камуфлируй, не прячь за масками, будь честен с самим собой даже в сложном, будь взрослым).

            И тут мы плавно переходит к моей второй претензии к статье: интерпретация финала. Вы предлагаете два варианта : скучный и банальный про совесть, и вашу версию про то, что бездушный Джимми в очередной раз провернул всё для своей выгоды (чтобы сохранить контакт с Ким). Мне кажется есть третий, более глубокий, вариант интерпретации финала: герой в финале переосмысливает свой путь и наконец-то психологически взрослеет, он устал прятаться за масками (Сола, Падучего Джимми, Таковича - эта маска ему   была особенно противна, потому что её-то он сам не выбрал). В финале от отказывается от своих масок и принимает себя истинного - со всеми своими сожалениями, со своей болью и эмоциями.`,
            data : '23 августа, 20:27',
            rating : 14,
          },
          {
            id : 17,
            author :
            {
                firstName : 'Евгения',
                lastName : 'Петрова',
                mainPhoto : 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
                id : '11111111',
            },
            consumer :
            {
              firstName : 'Кирилл',
              lastName : 'Рогов',
              mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
              id : '172787588',
            },
            text : `И тут судьба сыграла злую шутку. Когда Джимми избавился от 'Сола' и обрёл спокойствие в тюрьме.  Для окружающих он не Джимми, он 'Сол'. Им не нужен честный парень Джимми МакГилл, им нужен адвокат-аферюга Сол Гудман.
            Тут он получил наказание. 86 лет(вечное) наказания быть Солом от которого бежал казалось убежал.`,
            data : '23 августа, 21:29',
            rating : 8,
          },
          {
            id : 18,
            author :
            {
                firstName : 'Евгения',
                lastName : 'Петрова',
                mainPhoto : 'https://ulibky.ru/wp-content/uploads/2019/10/avatarki_dlya_vatsap_dlya_devushek_42_28061027.jpg',
                id : '11111111',
            },
            consumer :
            {
              firstName : 'Кирилл',
              lastName : 'Рогов',
              mainPhoto : 'https://sun9-10.userapi.com/impg/R-MkoRP-pOt_BNNPLn5wMSnzCyrB0oWHo3f4OQ/GJM9Ar0lDMA.jpg?size=864x1080&quality=96&sign=141a66ac561501b6a62cebca86037ecc&type=album',
              id : '172787588',
            },
            text : `Тут согласна. Но главное, что внутри он ощущает себя Джимми. И с Ким он может быть Джимми, принявшим себя, - это то, что она в нём и ценит, и за это тоже 'приняла' его обратно. Это для него теперь главное. Даже если он будет Солом для заключённых, он не подменит им себя, теперь он искреннен с собой, знает истинного себя, он вернулся. (Пиф-паф в конце намекает: я могу играть, но я останусь верным себе, не растворюсь в нем.) лично для меня это видится как хэппи энд.`,
            data : '23 августа, 21:57',
            rating : 8,
          },
        ]
      },
      {
        id : 17,
        author :
        {
          firstName : 'Константин',
          lastName : 'Минин',
          mainPhoto : 'https://avatarko.ru/img/kartinka/1/Jack_Vorobei.jpg',
          id : '44444444',
        },
        text : `Но финал же гораздо интереснее, чем интерпретации в статье. Главный герой в конце остается и примиряется со всеми тремя своими ипостасями. Для Ким он снова Джимми —ранимый, любящий, пытающийся исправить все беды, для заключенных он продолжает быть Солом — хитрым и шустрым адвокатом, а для общества в широком смысле он снова становится Джином Таковичем — спокойным и неугрожающим обывателем (именно такую судьбу хотел для Джимми Чак). Классическая идея триединства. Вся сцена в автобусе — это буквально апология ипостаси Сола. Сол Гудман — это защитник незащищаемых, он берется за дела, за которые никогда бы не взялись респектабельные юристы, он помогает самым презираемым членам общества. Невозможно для злодея написать сцену в стиле 'Я — Спартак', она просто не будет работать. И в итоге герой через самопожертвование получает всё, что он так хотел в жизни — уважение (пусть и только от заключенных) и любовь Ким (пусть их и разделяют стены тюрьмы).`,
        data : '26 августа, 16:38',
        rating : 5,
      },
    ],
    article :
    {
      title : 'Обсуждаем финал «Лучше звоните Солу»: почему Сол Гудман интереснее Уолтера Уайта',
      data : '23.08.2022 г.',
      mainPhoto : 'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cfeh2H/x-d3ZEGvLLWrKw1QORkCk7_QVjD0cgGjaQKKmjswKm3Y2iSZeNI2cYuFeO8JgVmwRigFfoY77Ot7uVXwGb3IQsYjd6CFKHng7u2KUfsOV5T5kwKgtGWVcnxVHc23O-Hn1Jc8EfFfOSlMA_zvXxdOJ9e9k-mQ6L17ImIQMI0k2cZNaryrR_kjPunwzVu5UIWdYhld-On_DOx7jAPStv-hZthedhb9m7kox0x1_h-UDefRulpn0_WzsOEmwzbFYpOCgSI07k5wZ3duMgYVcZrBFu1XXTzrsk5ttkMEETt-r6aekn4X-dhybgEGdPBcEwsuFrMTrtmx9D6urs2xDihejsOo-i0OMSq0bjxAU_4TzhUoV5H0Iz2BZL6Iyt_6eqCv3Nh-n3_S_2aMDfo0G5lLIha4Uutbc_jy4yNAsQlvV0aKbv3sTzHvvq48DRxw08bUqVbedCd-SeK4S4Xa8HHk4R0SN53-1nEqjMizMFtYSyUfsp3jWbe18qDuQHKC7ZmJi2u2roe84nDsNQ-SfJUHlembWffsswzr_gyOnfF4oe2VGfyX9RJ7LMVHPbZf24GmXvSYZlhwcLPnY4G7DSrXCY7hvGNNPWyx4nEKFXEazV0qWp51o_NN775DBBiyeWihF5E_XfNfuatNhvA-ERWGaBB03CwZvz20bGyD8cgimcMKbj3mgfXh_2nwx9F6EgnT6dtc9-J-CGO_xQud9HUqbpnWvRW9WHHpCAJwspvdhm0YsNjnlLNzPWilCPGOo9wADWZzoQm_6j0i-8ZY9hXPHybXkXDu_oor_gqCk7AwoeEV2frcvVix6kjN8L6bVY9tFr6Vr5N6ej9la46yzegQi8zh_OaI9-7243rP2LEZi1lq0JF5orHApvmAxRI88mom0Ja93_pdcaJNA7Jy0dlA6Fj9WSEcM739qG2MdkbqXMzGJrzqyPEtcGq2g1Z3kUYRJpBctiozBG36gkGfMvksZx0Qutv9njHngQX6ttZVwy5T-9Wt2TY5syZkC_0GYxhJjGAzpI71r3fjfcoRfxsO0anYlDektcalMIVClzB9LeXRFnnQNV52aEjN8vYXEUegV7-RKRj-OHQmZ8I-CKpVCIpgeWqPcOvw4nyBHPhcR1dpGpN_p_ZD7TNNg520eOhjklM9Gb7eeKTCQDN-XpcB7JiwG--ScDv1ISZNtAxr0IKCIjzijngpvmszgll4kUOUJJLStm11jGD-xQQYMH_vrxSaedn52LKggYU8fZ0YTK2aO5NuFno892snQjJAJduJzGd2awD_p3ajuoCSfJvKmarTV7diNs2uvExJUvE1ZGfWG3Rcc5e3KoxH_HhWHUlhlbcc7ZZ-ebymJAzywKrRDoqut2JIMGs3L3VOlvzaCN0pUl24avfIrLLLRlR6dGlmnR292LVS8OTIgnP_nNOJplE-nGyUOjE1KyfCMw4gUYnPIH3kCPzmt61-jR2w3Q2UKhnUMW_1i-V5BMTY8D3r5xYe-p41VLepQA79Nx2USSSYf9wgHjFxv2ApjTUNb1HASiczKYw3JvWj8AvZ-x3PFqJf0nfh_UijtwINFPo_p6_XEHwQf9q9KEgLcnJRnUSmmbKQZlB5MT2o4QC8SGkZSg6gsuxGNmpxqvLPGPkVTh-uWJX0pD2NLrnFDdc1cSKnHh700HkY8eGPhL01WFRIpRL9l6fWtTo34W4N-UgsVA6K5vEgTjEseStwSNF_1o8Yb9ZR_2__i-0zigXU-XKjLF6UfR5zm7mqSYJ1_tbZxmbS_1VkXjU6f6vni30EIN2HTyM6rQQ-43mvuofbdlxG0SSX0_5sMoimO0MGk3g_aCNfm31UuJTxKQoAuDKRE4cvF7pRb5OxvHjvrAZyRWRTw4tge2pBvq9-4XVIFLFQghEsGdT-KjJKo7aDyFS5PmnuH5w7VjISf-MKTfn-VVDN5ZK0kuRTv300IyEFMUBrHIBFqbIlT7DiP--1itX7VY4ZahddOGV3jK42w0xXu_HhK5kYMhv-2L5rAwWxfd1VQCDSepwtn3b6_e5uS_bF4hgCBuF140F4o7zl-o4RfpoG0a1e1Hup9Y7ssYVNkjZ96u2W2vwbPxT6bk_Lcj7UX0dnn__XIdtzeTpgqEj8QuQTiI2sd2POuq0_4z3DVLCdThknkJ79rPOFrbkDhdV0sKRjF9CzHn1TuSkKBHI3FNAN5lc73SQZdTk94aNC-cYqWQmPY39pwHfmsaJzw1D0G84RYNObdqd4SeY5wQRZ-Dhk7Z6Z9l45Vbijj8MzPdFRSCxV-xvnELj0PquhBfvM4JbESqC7ZEn2rzDmOgvTuxVAlS3ZGfcq9s3kPooCkDs9qGWalDTYs1S_q4qEvLHXXIzv3jIfJpE4cHhhYQH7R6IdioYrNCrEfu34rDKL3PLayl3n2tyzovmN6ngJQlV-cKKpEVG0HD8ce6qNRvK5VFQE5J6zVeeesni8o-ULe0HgUMRGoTviCTDjMGM5x5Q22oYXZdEUu2d1zud3hk0VsTykophYeVfwlLYsS0I09tlegWpWO9RnVHFwtC4uQjpOJBaKy6k0qIN4ovVrPs0c-ZHJHiZd2TOl_0ojvgbLG_U_5CydmX9ffpx_64zD_fnencDk37zcYV4xd3vgpwNxCCgfxgkjf6lAsCx2a3PCXPFWDVugHt026n1IbLbDwFx7siokHd1_HnAQdqsEgzHyW9ZFZla2mGmf_Xq_oK-JvQ1hnEGM57rpzDrrMer4yV43kQEfJpHafu_-S2sxQwoVcj5i7RgVNVE7lXcuwwQ9etcZzy8Sctsu2bI1vGGhyvGIKZ6IByM2II-5Iz7mO05U8hPLFCWZFDVt-IXiuwZAnfR5ay3akn3fept4qoCO_P8RF8bm0bcZ4dtxsPrsp0N1Qe0eycGpd26PMCl54zsKlDhdxlcnUFt4offK7P6KAtFzdmVnFdl12H9ctSJESDJ51FlJZhkyWq0Rsn-_aA',
      summary : 'На прошлой неделе завершился один из главных драматических сериалов последнего десятилетия, приквел и одновременно сиквел (об этом ниже!) «Во все тяжкие». Шесть сезонов мы наблюдали за превращением обаятельного адвоката Джимми Макгилла в беспринципного мошенника Сола Гудмана. Рассказываем, что произошло в финале и почему главный герой «Лучше звоните Солу» в итоге оказался куда интереснее и сложнее, чем Уолтер Уайт.',
      blocks :
      [
        {
          paragraphs :
          [
            'Безжизненная пустыня, машина в каньоне, кусок фольги и стодолларовая банкнота, прилипшая к кактусу, — первые кадры финального эпизода кратко освежают в памяти предыдущие злоключения Джимми Макгилла (Боб Оденкёрк). Он ссорился со своим братом Чаком (Майкл МакКин), помогал решале Майку Эрмантрауту (Джонатан Бэнкс), попал в жернова нарковойны между Лало Саламанкой (Тони Далтон) и Гусом Фрингом (Джанкарло Эспозито) и выбрался из нее живым. А еще нашел любовь всей своей жизни, Ким Уэкслер (Рэй Сихорн), и по пути к богатству и славе потерял ее. Именно разрыв с Ким (подробнее о нем мы рассказывали в предыдущем тексте про сериал) окончательно превратил Джимми в Сола Гудмана — расчетливого криминального адвоката, за плоскими панчлайнами и яркими костюмами которого уже не было видно никакой души.',
            'Финальный эпизод привычно балуется с таймлайнами и наполнен флешбэками и флешфорвардами. Например, Джимми расспрашивает двух собеседников, Майка и Уолтера Уайта (Брайан Крэнстон), что они сделали, если бы получили в свое распоряжение машину времени, какую ошибку в прошлом захотели бы исправить? Сам он отвечает на собственный вопрос по-разному: сделал бы успешную инвестицию или предотвратил травму колена. Это сценарии, достойные эгоистичного Сола Гудмана. Но сам Джимми всерьез сожалеет о двух вещах — ссоре с братом Чаком (он уже мертв, поэтому ничего исправить не получится) и разрыве с Ким, которая отказалась от адвокатской лицензии и стала рядовой американкой со скучной работой и таким же невыразительным партнером. И как раз второе он еще в силах переиграть.',
          ],
        },
        {
          title : 'Боб Оденкёрк',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu1eW3QZeNS3oBqCOvgYxk_nUm2F-Ycubeo4vgDlWP0IFsc3IuAQPfrhe7geULrM1wD4hhcgZqYW5qxAmw_tYCZgVFC_UrDaeSsDjbz5GAaPZlA9la6Qf_st6SiP_5ypHE9Dpn3oDvctcSMyzRg808AdKhsZP20-zqq2SkkV8_8npBTRs5v63XXvg4w3tpEXz-UT_ZOpWfG4MOfjTLtPr1QJCeKxoIayJPhne0ra950I126QlnFt-szn9MuE2vQ8qiUaEfVX8txxrEjK8fyQGYxiFTRUoBA4snSgbQMzQSifQ8Tu8ypIcWS5KrhK1LHbh15hk1NxoTIEaDvCjBE68mshFRi3HfJU96bFwnz3Ht3L6FU4VKtRfTC2rKFOvswomATNJrrsT7Alue-yitT8lAmeaVLScO6yACvzRIrSdfdhKlFWdte7VnaiS458MlfZiylVP12hnnUycuGhDXPM6xOGA-m76QTy7TTifMjd_hoF2KgTkr1pMcvmtk3MlX6wYCMUWv7ccFx9ZkGINb3ZX4-qn7wc55vwM7Uk4Er-DSKcQU1pvmMOPye1bL3GmfudCFdi21F8rrOEpvdJjNr0NSMi3RZ8VLOWeyuDD718FNfBZJhyUmffunJ6aefB8Q9oWUkDozrsj7rrfeHzTRg2WQNfplWS_WwxxSuyxY1c-7BlLp_Z8hMx3jUsS034-JRbS6yYd1qj23H_diduxTiEaB_IRmA95MH9YzfqMQYTN9CPWGCZXfGhtsmrMI3Mk3K-IWsUVn4cdhc1LItOuDcUV0skkXdUrZY5-L8ubMj2Aitcg4rr_GNOuuJ_7vrHkj5QyFQk3xH2ob-F5HoAyxk1P62p35G7UzEUcilLBr35VpsBqF7yGu5at3f26a4F8ADv14HGrPakDraieS18Tl5y3g7c6ZddtmxwDWa-y8gbsbKjopnQdtU2EHXqC0Nx_x5fBiTdNBHo1juy823gi_mHZJcIgim84oH45H2ve8eVO5kGVqFX0v6k8YPgfAMCHLK6oSaYUrrT9Ru9KkzMuDcWH8dgWboVrJK_cztsJ4v6TqeZwc9ouuLLNuX46_zGlHCUgRHo0RI8o7mAo_lLAdRzsCUjXdT5lrHSNqpCADK615eO5h_22qMYefm1b6aMu8EtnQBK4rKgjr7k8CmyT9tz0QHc7BJftOJwSiA2xsxc9DWhJFoYf1_1EnGsiARxf9iUTWlSt9gokPh9v2ikxrrOq9FOQen85cQ3aneneodScRoF1mUf0fVncUVjdwiO1bl_YG7R0L3e-Jf7442OfL0YkYZsV3vXpB97_bst7wu5gGtRwUtuuiwFPiK4azsLnb8ehZenW1J0bX5NonIKgFK2eesv3NH22DETPSbKQDh4lxZMope8Ey2f-v__ZWaGuk6qn0vL6f-iz7hidOa7iZZ8lcmQohJRP-T3SKAxQ0udNPVhZl5Qfdt2Vb0gjQ2w9BnezeVXPtps37Z19CXszbQBrJwEy6B6pYF15r8m-YcY-lGCUGCQ2Xniscao8gWFm_05a2QSGLzV8Nv3roeMuPGWm4HsWrzboZPwO7xlbgV8jCXZAoMqPiIAsCy-an2OGj6QgFjhmdV-pTKDaDeIi1z9-qQqlxB123gb8WzLRX9-WdyIJVa_UO6UMb1wbmRM84Fg2UfObrpkQ3wkuSx1D5i5WQabIJ4U8GE5SKoxSwET9floKRabNVHx1fvvgw65eJEXBqjYfJDsVvI18G4sBnoH5JVLR-d_oYjxbrbjdYtSdlMPEelXX7HjOEtnMgAJ2va-6WTdlDRe8Z8w4MuN-vpc20FimTVVqVL5-HToK0IxiuvUD8mju-LJNis2r3LFnbmcyB0tl1c_5DgNZ_AFhBo4eShl3Fl0WbedumZFR_q3HReFIdP_0KeRcjh6KWeOvImo0QCG4HUrAHklOOIzy117XYIYIZ8RMW3-QiI2CARavHoqqlSc8t2-0HashM_z_1WUDSReOpBpn7v0s66uQ_PHb1SJgmI2Y8e_K_CjsMESf5kH16lX1njkvY6gNEqDHL2_pyZfWv0fcNC3YMDKvzGW1wQuWX3d7NS3sLYtac01xGXTj4novS7FP6QyrTPH1TLcydDhn1y2rjuLpj8Li5p1-OXrEdR8FT_V9SeDjfr-lt7EoRP8FSjesnKwbW5MPs5gV0HDab_hzTWq_-a9hpsy2I1WYZcb9auwgC3zQAtY9HRpY9Fa9Vx6lbEhggd_OdfUASBWNhfoGHF7faBtBjyJYl2LDKR6Igk4I36vPMLS-lvCWO8TVv8pMQ2jd0IME_K9qmYd0vFRuBM7IIUPen5YWActkvWcIRyw-v0kK8z8jWLWyYfqtqmGdq727fSI2npUi5dl25z87HWFrDdMSpCyeO8rFx56lDjXt2hBDn28FlCEJRr-3KBWcfV3LO8OeIfi0IvKpHYjib5juOM8R9E2HE-XKZEe9yR9QCB0QUUfvTggZxEV8531nHjgjIi7uNAfCS-fcBQo1_E_tCTng7POo99PjOr7K4b06fCi-U_WPJSA3GaYXXvp9YKq8IWMnzs2ZGRRm_Zc85T26EVPfDkZEA7s3v6dr9_3NfQjKE06j-iZQ4WmOaHN9So4LHpPmzPUiBui3ds47fDNKPLKhFowcerpn5N2GPPV-GRMD_R51RuLp1t8FKWb__Q4LuwNMgUknAoGIbxlCLWmsus9zhA41k7crpldt-q4yKvxzQPa-jjjZddac9C5mrPhTYoz_tmTB2jRNVBh2Liyd2HvzDxGaBlCBOg3oYR85TEjMsLTv9yLXmSSXr8k80qtP0SJn7CwZSLemrFX8RTy70IOcHQYFsFm2PyTpBp3sLTkqUE6z-zQhoSp8SvFMuW4KXXH0_scQRBp0Vx2a76GonBKzBPy_OIt0NB-HPkT9yiPhrSy1pAEKFd8WyFZO3p3K8'
          ]
        },
        {
          paragraphs :
          [
            'Во второй половине последнего сезона зрителю по большей части показывают черно-белые флешфорварды, где Джимми/Сол отпустил грустные усы и под псевдонимом Джин Такович работает в Cinnabon в Омахе. Преступная натура все равно рвется наружу: в последних сериях Джин проворачивает криминальную схему и с помощью сообщников грабит обеспеченных выпивох в баре. А еще герой становится куда более небрежным и самонадеянным — так его и поймали полицейские.',
            'В последней серии Сол решает по максимуму избежать правосудия: он дурит следствие, кормит его инсайдами о наркоимперии Уолтера Уайта, идет на сделку и даже умудряется скостить свой срок до смешных семи лет (а его обвиняют в рэкете, отмывании денег и участии в смерти двух федеральных агентов!). Но в последний момент печально известный адвокат отказывается от фамилии «Гудман», просит снова называть себя Джимми Макгиллом, берет на себя вину и намеренно получает 86-летний срок. Что же случилось с тем наглым и бессовестным великим комбинатором?',
            'Прелесть финала в том, что однозначно ответить на этот вопрос нельзя.',
            'Версия первая — скучная и каноничная. Джимми действительно раскаялся и понял, что это его единственный шанс воссоединиться с Ким, которая сидит в зале суда и наблюдает за процессом. Старый преступник нащупал свою совесть, почему бы и нет? А заодно устроил последнее красочное шоу.',
          ]
        },
        {
          title : 'Боб Оденкёрк и Рэй Сихорн',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu1eW3QZeNS3oBqCOvgYxk_nUm2F-Mcvreg4PhSkWKjJQhI2o_RQqvqgO6xLhDvNlwE6R0E1J2XBpvrV2w_tYCZgVFC_UrDaeSsDjbz5GAaPZlA9la6Qf_st6SiP_5ypHE9Dpn3oDvctcSMyzRg808AdKhsZP20-zqq2SkkV8_8npBTRs5v63XXvg4w3tpEXz-UT_ZOpWfG4MOfjTLtPr1QJCeKxoIayJPhne0ra950I126QlnFt-szn9MuE2vQ8qiUaEfVX8txxrEjK8fyQGYxiFTRUoBA4snSgbQMzQSifQ8Tu8ypIcWS5KrhK1LHbh15hk1NxoTIEaDvCjBE68mshFRi3HfJU96bFwnz3Ht3L6FU4VKtRfTC2rKFOvswomATNJrrsT7Alue-yitT8lAmeaVLScO6yACvzRIrSdfdhKlFWdte7VnaiS458MlfZiylVP12hnnUycuGhDXPM6xOGA-m76QTy7TTifMjd_hoF2KgTkr1pMcvmtk3MlX6wYCMUWv7ccFx9ZkGINb3ZX4-qn7wc55vwM7Uk4Er-DSKcQU1pvmMOPye1bL3GmfudCFdi21F8rrOEpvdJjNr0NSMi3RZ8VLOWeyuDD718FNfBZJhyUmffunJ6aefB8Q9oWUkDozrsj7rrfeHzTRg2WQNfplWS_WwxxSuyxY1c-7BlLp_Z8hMx3jUsS034-JRbS6yYd1qj23H_diduxTiEaB_IRmA95MH9YzfqMQYTN9CPWGCZXfGhtsmrMI3Mk3K-IWsUVn4cdhc1LItOuDcUV0skkXdUrZY5-L8ubMj2Aitcg4rr_GNOuuJ_7vrHkj5QyFQk3xH2ob-F5HoAyxk1P62p35G7UzEUcilLBr35VpsBqF7yGu5at3f26a4F8ADv14HGrPakDraieS18Tl5y3g7c6ZddtmxwDWa-y8gbsbKjopnQdtU2EHXqC0Nx_x5fBiTdNBHo1juy823gi_mHZJcIgim84oH45H2ve8eVO5kGVqFX0v6k8YPgfAMCHLK6oSaYUrrT9Ru9KkzMuDcWH8dgWboVrJK_cztsJ4v6TqeZwc9ouuLLNuX46_zGlHCUgRHo0RI8o7mAo_lLAdRzsCUjXdT5lrHSNqpCADK615eO5h_22qMYefm1b6aMu8EtnQBK4rKgjr7k8CmyT9tz0QHc7BJftOJwSiA2xsxc9DWhJFoYf1_1EnGsiARxf9iUTWlSt9gokPh9v2ikxrrOq9FOQen85cQ3aneneodScRoF1mUf0fVncUVjdwiO1bl_YG7R0L3e-Jf7442OfL0YkYZsV3vXpB97_bst7wu5gGtRwUtuuiwFPiK4azsLnb8ehZenW1J0bX5NonIKgFK2eesv3NH22DETPSbKQDh4lxZMope8Ey2f-v__ZWaGuk6qn0vL6f-iz7hidOa7iZZ8lcmQohJRP-T3SKAxQ0udNPVhZl5Qfdt2Vb0gjQ2w9BnezeVXPtps37Z19CXszbQBrJwEy6B6pYF15r8m-YcY-lGCUGCQ2Xniscao8gWFm_05a2QSGLzV8Nv3roeMuPGWm4HsWrzboZPwO7xlbgV8jCXZAoMqPiIAsCy-an2OGj6QgFjhmdV-pTKDaDeIi1z9-qQqlxB123gb8WzLRX9-WdyIJVa_UO6UMb1wbmRM84Fg2UfObrpkQ3wkuSx1D5i5WQabIJ4U8GE5SKoxSwET9floKRabNVHx1fvvgw65eJEXBqjYfJDsVvI18G4sBnoH5JVLR-d_oYjxbrbjdYtSdlMPEelXX7HjOEtnMgAJ2va-6WTdlDRe8Z8w4MuN-vpc20FimTVVqVL5-HToK0IxiuvUD8mju-LJNis2r3LFnbmcyB0tl1c_5DgNZ_AFhBo4eShl3Fl0WbedumZFR_q3HReFIdP_0KeRcjh6KWeOvImo0QCG4HUrAHklOOIzy117XYIYIZ8RMW3-QiI2CARavHoqqlSc8t2-0HashM_z_1WUDSReOpBpn7v0s66uQ_PHb1SJgmI2Y8e_K_CjsMESf5kH16lX1njkvY6gNEqDHL2_pyZfWv0fcNC3YMDKvzGW1wQuWX3d7NS3sLYtac01xGXTj4novS7FP6QyrTPH1TLcydDhn1y2rjuLpj8Li5p1-OXrEdR8FT_V9SeDjfr-lt7EoRP8FSjesnKwbW5MPs5gV0HDab_hzTWq_-a9hpsy2I1WYZcb9auwgC3zQAtY9HRpY9Fa9Vx6lbEhggd_OdfUASBWNhfoGHF7faBtBjyJYl2LDKR6Igk4I36vPMLS-lvCWO8TVv8pMQ2jd0IME_K9qmYd0vFRuBM7IIUPen5YWActkvWcIRyw-v0kK8z8jWLWyYfqtqmGdq727fSI2npUi5dl25z87HWFrDdMSpCyeO8rFx56lDjXt2hBDn28FlCEJRr-3KBWcfV3LO8OeIfi0IvKpHYjib5juOM8R9E2HE-XKZEe9yR9QCB0QUUfvTggZxEV8531nHjgjIi7uNAfCS-fcBQo1_E_tCTng7POo99PjOr7K4b06fCi-U_WPJSA3GaYXXvp9YKq8IWMnzs2ZGRRm_Zc85T26EVPfDkZEA7s3v6dr9_3NfQjKE06j-iZQ4WmOaHN9So4LHpPmzPUiBui3ds47fDNKPLKhFowcerpn5N2GPPV-GRMD_R51RuLp1t8FKWb__Q4LuwNMgUknAoGIbxlCLWmsus9zhA41k7crpldt-q4yKvxzQPa-jjjZddac9C5mrPhTYoz_tmTB2jRNVBh2Liyd2HvzDxGaBlCBOg3oYR85TEjMsLTv9yLXmSSXr8k80qtP0SJn7CwZSLemrFX8RTy70IOcHQYFsFm2PyTpBp3sLTkqUE6z-zQhoSp8SvFMuW4KXXH0_scQRBp0Vx2a76GonBKzBPy_OIt0NB-HPkT9yiPhrSy1pAEKFd8WyFZO3p3K8',
          ]
        },
        {
          paragraphs :
          [
            'Версия вторая — интересная и авантюрная (наша). Никакой души у героя нет. Вся его жизнь — череда лихих трюков. Именно он обострил нестабильное психическое состояние своего брата и не проронил ни слезинки, когда тот покончил с собой. Джимми не почувствовал угрызений совести (в отличие от Ким), даже когда по его вине застрелили Говарда Хэмлина (Патрик Фабиан). Из любой ситуации он старается извлечь максимальную прибыль. И в финале его победой становятся не минимальный срок и сделка (чем вообще заняться Солу на свободе под пристальным взглядом правоохранительных органов?), а прощение Ким. И он добивается его, согласившись на 86 лет в тюрьме. Зато все эти годы она будет его навещать, а ведь у Джимми нет ни одной родственной души.',
            'Финальный сезон «Лучше звоните Солу» есть за что поругать. Первая его половина развивалась крайне медленно (подробнее мы писали об этом здесь), камео старых знакомых из «Во все тяжкие» тоже оказалось скорее неудачным: Аарон Пол очень натужно пытался повторить старые интонации Джесси Пинкмана, хотя было видно, что 42-летний актер мало чем похож на юношу, злоупотребляющего веществами, из первых сезонов ВВТ. Но все недостатки искупает амбивалентность финальной серии.',
          ]
        },
        {
          title : 'Боб Оденкёрк',
          photos :
          [
            'https://kinopoisk-ru.clstorage.net/30T1fc382/ea7d9cOrNjG/Q3Tk8wU5L7GvvA_D-dkHBioTlPTm9dNl-wVbGHmxOu1eW3QZeNS3oBqCOvgYxk_nUm2F-Yevr6s4vgExzGlIghN342CRfO6gLmwfBC_NlhS6Etb086bAM7qAGw_tYCZgVFC_UrDaeSsDjbz5GAaPZlA9la6Qf_st6SiP_5ypHE9Dpn3oDvctcSMyzRg808AdKhsZP20-zqq2SkkV8_8npBTRs5v63XXvg4w3tpEXz-UT_ZOpWfG4MOfjTLtPr1QJCeKxoIayJPhne0ra950I126QlnFt-szn9MuE2vQ8qiUaEfVX8txxrEjK8fyQGYxiFTRUoBA4snSgbQMzQSifQ8Tu8ypIcWS5KrhK1LHbh15hk1NxoTIEaDvCjBE68mshFRi3HfJU96bFwnz3Ht3L6FU4VKtRfTC2rKFOvswomATNJrrsT7Alue-yitT8lAmeaVLScO6yACvzRIrSdfdhKlFWdte7VnaiS458MlfZiylVP12hnnUycuGhDXPM6xOGA-m76QTy7TTifMjd_hoF2KgTkr1pMcvmtk3MlX6wYCMUWv7ccFx9ZkGINb3ZX4-qn7wc55vwM7Uk4Er-DSKcQU1pvmMOPye1bL3GmfudCFdi21F8rrOEpvdJjNr0NSMi3RZ8VLOWeyuDD718FNfBZJhyUmffunJ6aefB8Q9oWUkDozrsj7rrfeHzTRg2WQNfplWS_WwxxSuyxY1c-7BlLp_Z8hMx3jUsS034-JRbS6yYd1qj23H_diduxTiEaB_IRmA95MH9YzfqMQYTN9CPWGCZXfGhtsmrMI3Mk3K-IWsUVn4cdhc1LItOuDcUV0skkXdUrZY5-L8ubMj2Aitcg4rr_GNOuuJ_7vrHkj5QyFQk3xH2ob-F5HoAyxk1P62p35G7UzEUcilLBr35VpsBqF7yGu5at3f26a4F8ADv14HGrPakDraieS18Tl5y3g7c6ZddtmxwDWa-y8gbsbKjopnQdtU2EHXqC0Nx_x5fBiTdNBHo1juy823gi_mHZJcIgim84oH45H2ve8eVO5kGVqFX0v6k8YPgfAMCHLK6oSaYUrrT9Ru9KkzMuDcWH8dgWboVrJK_cztsJ4v6TqeZwc9ouuLLNuX46_zGlHCUgRHo0RI8o7mAo_lLAdRzsCUjXdT5lrHSNqpCADK615eO5h_22qMYefm1b6aMu8EtnQBK4rKgjr7k8CmyT9tz0QHc7BJftOJwSiA2xsxc9DWhJFoYf1_1EnGsiARxf9iUTWlSt9gokPh9v2ikxrrOq9FOQen85cQ3aneneodScRoF1mUf0fVncUVjdwiO1bl_YG7R0L3e-Jf7442OfL0YkYZsV3vXpB97_bst7wu5gGtRwUtuuiwFPiK4azsLnb8ehZenW1J0bX5NonIKgFK2eesv3NH22DETPSbKQDh4lxZMope8Ey2f-v__ZWaGuk6qn0vL6f-iz7hidOa7iZZ8lcmQohJRP-T3SKAxQ0udNPVhZl5Qfdt2Vb0gjQ2w9BnezeVXPtps37Z19CXszbQBrJwEy6B6pYF15r8m-YcY-lGCUGCQ2Xniscao8gWFm_05a2QSGLzV8Nv3roeMuPGWm4HsWrzboZPwO7xlbgV8jCXZAoMqPiIAsCy-an2OGj6QgFjhmdV-pTKDaDeIi1z9-qQqlxB123gb8WzLRX9-WdyIJVa_UO6UMb1wbmRM84Fg2UfObrpkQ3wkuSx1D5i5WQabIJ4U8GE5SKoxSwET9floKRabNVHx1fvvgw65eJEXBqjYfJDsVvI18G4sBnoH5JVLR-d_oYjxbrbjdYtSdlMPEelXX7HjOEtnMgAJ2va-6WTdlDRe8Z8w4MuN-vpc20FimTVVqVL5-HToK0IxiuvUD8mju-LJNis2r3LFnbmcyB0tl1c_5DgNZ_AFhBo4eShl3Fl0WbedumZFR_q3HReFIdP_0KeRcjh6KWeOvImo0QCG4HUrAHklOOIzy117XYIYIZ8RMW3-QiI2CARavHoqqlSc8t2-0HashM_z_1WUDSReOpBpn7v0s66uQ_PHb1SJgmI2Y8e_K_CjsMESf5kH16lX1njkvY6gNEqDHL2_pyZfWv0fcNC3YMDKvzGW1wQuWX3d7NS3sLYtac01xGXTj4novS7FP6QyrTPH1TLcydDhn1y2rjuLpj8Li5p1-OXrEdR8FT_V9SeDjfr-lt7EoRP8FSjesnKwbW5MPs5gV0HDab_hzTWq_-a9hpsy2I1WYZcb9auwgC3zQAtY9HRpY9Fa9Vx6lbEhggd_OdfUASBWNhfoGHF7faBtBjyJYl2LDKR6Igk4I36vPMLS-lvCWO8TVv8pMQ2jd0IME_K9qmYd0vFRuBM7IIUPen5YWActkvWcIRyw-v0kK8z8jWLWyYfqtqmGdq727fSI2npUi5dl25z87HWFrDdMSpCyeO8rFx56lDjXt2hBDn28FlCEJRr-3KBWcfV3LO8OeIfi0IvKpHYjib5juOM8R9E2HE-XKZEe9yR9QCB0QUUfvTggZxEV8531nHjgjIi7uNAfCS-fcBQo1_E_tCTng7POo99PjOr7K4b06fCi-U_WPJSA3GaYXXvp9YKq8IWMnzs2ZGRRm_Zc85T26EVPfDkZEA7s3v6dr9_3NfQjKE06j-iZQ4WmOaHN9So4LHpPmzPUiBui3ds47fDNKPLKhFowcerpn5N2GPPV-GRMD_R51RuLp1t8FKWb__Q4LuwNMgUknAoGIbxlCLWmsus9zhA41k7crpldt-q4yKvxzQPa-jjjZddac9C5mrPhTYoz_tmTB2jRNVBh2Liyd2HvzDxGaBlCBOg3oYR85TEjMsLTv9yLXmSSXr8k80qtP0SJn7CwZSLemrFX8RTy70IOcHQYFsFm2PyTpBp3sLTkqUE6z-zQhoSp8SvFMuW4KXXH0_scQRBp0Vx2a76GonBKzBPy_OIt0NB-HPkT9yiPhrSy1pAEKFd8WyFZO3p3K8',
          ]
        },
        {
          paragraphs :
          [
            'Современные сериалы приучили нас к тому, что душа главного героя — открытая книга. Уолтер Уайт был персонажем понятным: обидчивый и мстительный эгоцентрик, который долгие годы носил маску семьянина и обывателя, а затем принялся с чудовищной силой реализовывать свои комплексы. А в «Лучше звоните Солу» шоураннеры Питер Гулд и Винс Гиллиган удивляют драматургическим парадоксом: мы прожили с главным героем несколько лет, но так и не изучили его до конца. Трикстер с множеством масок (Скользкий Джимми, Джимми Макгилл, Сол Гудман, Джин Такович) в итоге провернул самую грандиозную аферу и скрылся за кулисами, оставив нас в сомнениях. Хотя кое-что про него мы все-таки поняли: он действительно любит Ким, иначе зачем ему добровольно отправляться за решетку на долгие десятилетия? Это даже трогательно — грандиозная телевселенная Гулда-Гиллигана (ВВТ, ЛЗС и фильм El Camino) про американскую мечту, непомерные амбиции и жестокие убийства в итоге завершается не перестрелкой и смертью, а пальцами-пистолетами (излюбленный жест Сола) и своеобразным хеппи-эндом. В конце концов, именно любовь, а не закон, смогла покорить бывалого мошенника.',
          ]
        },
      ],
      card :
      {
        caption : '2015 – 2022, США',
        title : 'Лучше звоните Солу',
        genre : 'драма, криминал',
        duration : '46 мин',
        age : '16+',
        producer: 'Винс Гиллиган, Томас Шнауз, Питер Гулд',
        roles : 'Боб Оденкёрк, Джонатан Бэнкс, Рэй Сихорн',
        poster:  'https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/87298984-6286-425f-ab61-9afbf2c78afb/200x300',
        rating : '8.2',
      },
    },
  },
]

const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

const getZeroTime = (time) => time > 9 ? time : `0${time}`

const getData = () => {

  let currentTime = new Date()
  const day = getZeroTime(currentTime.getDate())
  const month = months[currentTime.getMonth()]
  const hours = getZeroTime(currentTime.getHours())
  const minutes = getZeroTime(currentTime.getMinutes())

  return `${day} ${month}, ${hours}:${minutes}`
}

export const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case POSTS_ADD_COMMENT: {
      const { id, author, text } = action.payload

      const newComment = {
        id : state[id].comments.length + 1,
        author : {
          firstName : author.firstName,
          lastName : author.lastName,
          mainPhoto : author.mainPhoto,
          id : author.id,
        },
        text : text,
        data : getData(),
        rating : 0,
      }
      return state.map(post => {
        if (post.id !== id) {
          return post
        } return {
          ...post,
          comments : post.comments.length > 0 ? [...post.comments, newComment] : [newComment],
        }
      })
    }
    case POSTS_INCREASE_RATING: {
      const { postID, commentID, answerID } = action.payload

      if (answerID === undefined) {
        const comments = state[postID].comments.map(comment => {
          if (comment.id !== commentID) {
            return comment
          }
          return {
            ...comment,
            rating : comment.rating + 1
          }
        })

        return state.map(post => {
          if (post.id !== postID) {
            return post
          } return {
            ...post,
            comments
          }
        })
      }
      else {
        const comments = state[action.payload.postID].comments.map(comment => {
          if (comment.id !== action.payload.commentID) {
            return comment
          } else {
            return {
              ...comment,
              answers : comment.answers.map(answer => {
              if (answer.id !== action.payload.answerID) {
                return answer
              } return {
                ...answer,
                rating : answer.rating + 1
                }
              })
            }
          }
        })

        return state.map(post => {
          if (post.id !== action.payload.postID) {
            return post
          } return {
            ...post,
            comments : comments
          }
        })
      }
    }
    case POSTS_DECREASE_RATING: {
      const { postID, commentID, answerID } = action.payload

      if (answerID === undefined) {
        const comments = state[postID].comments.map(comment => {
          if (comment.id !== commentID) {
            return comment
          } else {
            return {
              ...comment,
              rating : comment.rating - 1
            }
          }
        })

        return state.map(post => {
          if (post.id !== action.payload.postID) {
            return post
          } else {
            return {
              ...post,
              comments
            }
          }
        })
      }
      else {
        const comments = state[postID].comments.map(comment => {
          if (comment.id !== commentID) {
            return comment
          } return {
            ...comment,
            answers : comment.answers.map(answer => {
              if (answer.id !== answerID) {
                return answer
              } return {
                ...answer,
                rating : answer.rating - 1
              }
            })
          }
        })

        return state.map(post => {
          if (post.id !== postID) {
            return post
          } return {
            ...post,
            comments : comments
          }
        })
      }
    }
    case POSTS_ADD_ANSWER: {
      console.log(action.payload);
      // const { author, consumer, post, text } = action.payload
      // const { author }

      // const newAnswer = {
      //   id : time.getTime(),
      //   author :
      //   {
      //       firstName : author.firstName,
      //       lastName : author.lastName,
      //       mainPhoto : author.mainPhoto,
      //       id : author.id,
      //   },
      //   consumer :
      //   {
      //     firstName : consumer.firstName,
      //     lastName : consumer.lastName,
      //     mainPhoto : consumer.mainPhoto,
      //     id : consumer.id,
      //   },
      //   text : `${action.payload.text}`,
      //   data : getData(),
      //   rating : 0,
      // }
      //
      // if (action.payload.answer !== null) {
      //   const comments = state[post].comments.map(comment => {
      //     if (comment.id !== action.payload.comment.id) {
      //       return comment
      //     } return {
      //       ...comment,
      //       answers : [...comment.answers, newAnswer]
      //     }
      //   })
      //
      //   return state.map(post => {
      //     if (post.id !== action.payload.post) {
      //       return post
      //     } else {
      //       return {
      //         ...post,
      //         comments : comments
      //       }
      //     }
      //   })
      // } else {
      //   const comments = state[post].comments.map(comment => {
      //     if (comment.id !== action.payload.comment.id) {
      //       return comment
      //     } return {
      //       ...comment,
      //       answers : comment.answers ? [...comment.answers,newAnswer] : [newAnswer]
      //     }
      //   })
      //
      //   return state.map(post => {
      //     if (post.id !== action.payload.post) {
      //       return post
      //     } else {
      //       return {
      //         ...post,
      //         comments : comments
      //       }
      //     }
      //   })
      // }
    }
    default:
      return state
  }
}
