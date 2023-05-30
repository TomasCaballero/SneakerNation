const data = [
    {
        id:1,
        tipo:'Nike Dunk',
        articulo:'Nike Dunk High Retro',
        precio: 125, 
        imgs:{
            img1:'https://live.staticflickr.com/65535/52938667810_5a081945a2_b.jpg',
            img2:'https://live.staticflickr.com/65535/52938274536_6166d6c504_b.jpg',
            img3:'https://live.staticflickr.com/65535/52938667845_1aeaee7f9a_b.jpg',
            img4:'https://live.staticflickr.com/65535/52938667835_52979f059f_b.jpg',
            img5:'https://live.staticflickr.com/65535/52937676962_d7fc7aacf2_z.jpg',
            img6:'https://live.staticflickr.com/65535/52937676977_78eab21246_z.jpg'
        },
        size:{
            siete:7,
            sieteMedio: 7.5,
            ocho:8,
            ochoMedio: 8.5,
            nueve:9,
            nueveMedio: 9.5,
            diez:10,
            diezMedio: 10.5,
            once:11,
            onceMedio: 11.5,
            doce: 12
        }
    },
    {
        id:2,
        tipo:'Air Max',
        articulo:'Nike Air Max 97',
        precio: 160, 
        imgs:{
            img1:'https://live.staticflickr.com/65535/52938754008_171744d476_b.jpg',
            img2:'https://live.staticflickr.com/65535/52938695995_27c2df6913_b.jpg',
            img3:'https://live.staticflickr.com/65535/52938754033_522c234f5d_b.jpg',
            img4:'https://live.staticflickr.com/65535/52938304056_030414bb06_b.jpg',
            img5:'https://live.staticflickr.com/65535/52937705677_a723e1b6b2_b.jpg',
            img6:'https://live.staticflickr.com/65535/52938695970_c12dd852d4_b.jpg'
        },
        size:{
            siete:7,
            sieteMedio: 7.5,
            ocho:8,
            ochoMedio: 8.5,
            nueve:9,
            nueveMedio: 9.5,
            diez:10,
            diezMedio: 10.5,
            once:11,
            onceMedio: 11.5,
            doce: 12
        }
    },
    {
        id:3,
        tipo:'Jordan',
        articulo:'Air Jordan 1 Zoom CMFT 2',
        precio: 150, 
        imgs:{
            img1:'https://live.staticflickr.com/65535/52938712470_08c7d3638e_b.jpg',
            img2:'https://live.staticflickr.com/65535/52938469409_de7019dded_b.jpg',
            img3:'https://live.staticflickr.com/65535/52938712490_d8a60754b1_b.jpg',
            img4:'https://live.staticflickr.com/65535/52937722322_466707866b_b.jpg',
            img5:'https://live.staticflickr.com/65535/52937722327_2e97841515_b.jpg',
            img6:'https://live.staticflickr.com/65535/52938712480_0394b48959_b.jpg'
        },
        size:{
            siete:7,
            sieteMedio: 7.5,
            ocho:8,
            ochoMedio: 8.5,
            nueve:9,
            nueveMedio: 9.5,
            diez:10,
            diezMedio: 10.5,
            once:11,
            onceMedio: 11.5,
            doce: 12
        }
    },
    {
        id:4,
        tipo:'Air Force',
        articulo:"Nike Air Force 1 '07 SE",
        precio: 80, 
        imgs:{
            img1:'https://live.staticflickr.com/65535/52938721615_9c03b1d317_b.jpg',
            img2:'https://live.staticflickr.com/65535/52937731567_58d0fd82f7_b.jpg',
            img3:'https://live.staticflickr.com/65535/52938478814_28a8af4d75_b.jpg',
            img4:'https://live.staticflickr.com/65535/52938721620_dd7892d9c0_b.jpg',
            img5:'https://live.staticflickr.com/65535/52937731562_e6b6441169_b.jpg',
            img6:'https://live.staticflickr.com/65535/52938329596_d9429bbf4c_b.jpg'
        },
        size:{
            siete:7,
            sieteMedio: 7.5,
            ocho:8,
            ochoMedio: 8.5,
            nueve:9,
            nueveMedio: 9.5,
            diez:10,
            diezMedio: 10.5,
            once:11,
            onceMedio: 11.5,
            doce: 12
        }
    },
    {
        id:5,
        tipo:'Nike Dunk',
        articulo:'Nike Dunk High Premium',
        precio: 140, 
        imgs:{
            img1:'https://live.staticflickr.com/65535/52923094469_bb7ef46608_b.jpg',
            img2:'https://live.staticflickr.com/65535/52923324755_22e1f0e503_b.jpg',
            img3:'https://live.staticflickr.com/65535/52923094474_dd946a6ba5_b.jpg',
            img4:'https://live.staticflickr.com/65535/52923391728_e2ac953b4c_b.jpg',
            img5:'https://live.staticflickr.com/65535/52922939271_7e04e9e6a0_b.jpg',
            img6:'https://live.staticflickr.com/65535/52922357427_d03db004ca_b.jpg'
        },
        size:{
            siete:7,
            sieteMedio: 7.5,
            ocho:8,
            ochoMedio: 8.5,
            nueve:9,
            nueveMedio: 9.5,
            diez:10,
            diezMedio: 10.5,
            once:11,
            onceMedio: 11.5,
            doce: 12
        }
    },
    {
        id:6,
        tipo:'Nike Dunk',
        articulo:'Nike Dunk Mid',
        precio: 115, 
        imgs:{
            img1:'https://live.staticflickr.com/65535/52938725615_f213f9311b_b.jpg',
            img2:'https://live.staticflickr.com/65535/52937735167_1c4c0c8e33_b.jpg',
            img3:'https://live.staticflickr.com/65535/52938333206_b45c59a6a6_b.jpg',
            img4:'https://live.staticflickr.com/65535/52938783423_327bb5620b_b.jpg',
            img5:'https://live.staticflickr.com/65535/52938482529_9a84017329_b.jpg',
            img6:'https://live.staticflickr.com/65535/52938482524_bb8f26a400_b.jpg'
        },
        size:{
            siete:7,
            sieteMedio: 7.5,
            ocho:8,
            ochoMedio: 8.5,
            nueve:9,
            nueveMedio: 9.5,
            diez:10,
            diezMedio: 10.5,
            once:11,
            onceMedio: 11.5,
            doce: 12
        }
    },
    {
        id:7,
        tipo:'Air Max',
        articulo:'Nike Air Max 1 Premium 2',
        precio: 126, 
        imgs:{
            img1:'https://live.staticflickr.com/65535/52938800033_2bde1a2876_b.jpg',
            img2:'https://live.staticflickr.com/65535/52938800043_cb741f362c_b.jpg',
            img3:'https://live.staticflickr.com/65535/52938800068_0e959dd45a_b.jpg',
            img4:'https://live.staticflickr.com/65535/52938742450_24cb8b5db4_b.jpg',
            img5:'https://live.staticflickr.com/65535/52938349951_61321e5cdc_b.jpg',
            img6:'https://live.staticflickr.com/65535/52938499589_b7266415aa_b.jpg'
        },
        size:{
            siete:7,
            sieteMedio: 7.5,
            ocho:8,
            ochoMedio: 8.5,
            nueve:9,
            nueveMedio: 9.5,
            diez:10,
            diezMedio: 10.5,
            once:11,
            onceMedio: 11.5,
            doce: 12
        }
    },
    {
        id:8,
        tipo:'Air Max',
        articulo:'Nike Air Max Pulse',
        precio: 150, 
        imgs:{
            img1:'https://live.staticflickr.com/65535/52938499999_86dff008e4_b.jpg',
            img2:'https://live.staticflickr.com/65535/52938742870_7a4bfb7da8_b.jpg',
            img3:'https://live.staticflickr.com/65535/52938350401_c27e79851c_b.jpg',
            img4:'https://live.staticflickr.com/65535/52937752352_55be5fc846_b.jpg',
            img5:'https://live.staticflickr.com/65535/52938500014_1d0147dd25_b.jpg',
            img6:'https://live.staticflickr.com/65535/52937752327_1099f674a3_b.jpg'
        },
        size:{
            siete:7,
            sieteMedio: 7.5,
            ocho:8,
            ochoMedio: 8.5,
            nueve:9,
            nueveMedio: 9.5,
            diez:10,
            diezMedio: 10.5,
            once:11,
            onceMedio: 11.5,
            doce: 12
        }
    },
    {
        id:9,
        tipo:'Jordan',
        articulo:'Air Jordan 1 Mid',
        precio: 87, 
        imgs:{
            img1:'https://live.staticflickr.com/65535/52938350906_b65c19f716_b.jpg',
            img2:'https://live.staticflickr.com/65535/52937753002_4793b1f233_b.jpg',
            img3:'https://live.staticflickr.com/65535/52938743370_1f2f170a0f_b.jpg',
            img4:'https://live.staticflickr.com/65535/52938372371_6a0e84afd4_b.jpg',
            img5:'https://live.staticflickr.com/65535/52938350916_ae0bdbaf91_b.jpg',
            img6:'https://live.staticflickr.com/65535/52938372366_6616b56dd7_b.jpg'
        },
        size:{
            siete:7,
            sieteMedio: 7.5,
            ocho:8,
            ochoMedio: 8.5,
            nueve:9,
            nueveMedio: 9.5,
            diez:10,
            diezMedio: 10.5,
            once:11,
            onceMedio: 11.5,
            doce: 12
        }
    },
    {
        id:10,
        tipo:'Jordan',
        articulo:'Air Jordan 1 Low',
        precio: 93, 
        imgs:{
            img1:'https://live.staticflickr.com/65535/52938825158_b4509ef3e7_b.jpg',
            img2:'https://live.staticflickr.com/65535/52938524279_4587f7d3a5_b.jpg',
            img3:'https://live.staticflickr.com/65535/52938766605_08c4236a3f_b.jpg',
            img4:'https://live.staticflickr.com/65535/52938524264_9eee990258_b.jpg',
            img5:'https://live.staticflickr.com/65535/52937777682_38fab38510_b.jpg',
            img6:'https://live.staticflickr.com/65535/52937777662_9ac42de07c_b.jpg'
        },
        size:{
            siete:7,
            sieteMedio: 7.5,
            ocho:8,
            ochoMedio: 8.5,
            nueve:9,
            nueveMedio: 9.5,
            diez:10,
            diezMedio: 10.5,
            once:11,
            onceMedio: 11.5,
            doce: 12
        }
    },
    {
        id:11,
        tipo:'Air Force',
        articulo:"Nike Air Force 1 '07",
        precio: 110, 
        imgs:{
            img1:'https://live.staticflickr.com/65535/52938533124_794f86da2f_b.jpg',
            img2:'https://live.staticflickr.com/65535/52938383526_89a62741e0_b.jpg',
            img3:'https://live.staticflickr.com/65535/52938533144_cb822f997d_b.jpg',
            img4:'https://live.staticflickr.com/65535/52938533134_733c47643b_b.jpg',
            img5:'https://live.staticflickr.com/65535/52937786662_b7607a537b_b.jpg',
            img6:'https://live.staticflickr.com/65535/52938383486_c3e3a82a1b_b.jpg'
        },
        size:{
            siete:7,
            sieteMedio: 7.5,
            ocho:8,
            ochoMedio: 8.5,
            nueve:9,
            nueveMedio: 9.5,
            diez:10,
            diezMedio: 10.5,
            once:11,
            onceMedio: 11.5,
            doce: 12
        }
    },
    {
        id:12,
        tipo:'Air Force',
        articulo:"Nike Gamma Force",
        precio: 90, 
        imgs:{
            img1:'https://live.staticflickr.com/65535/52938395106_124110c6ba_b.jpg',
            img2:'https://live.staticflickr.com/65535/52938544979_b4af7a03c8_b.jpg',
            img3:'https://live.staticflickr.com/65535/52937798227_e010ea5f9c_b.jpg',
            img4:'https://live.staticflickr.com/65535/52938845348_aae777cbbf_b.jpg',
            img5:'https://live.staticflickr.com/65535/52938786910_abe7599333_b.jpg',
            img6:'https://live.staticflickr.com/65535/52938786900_551ff94b43_b.jpg'
        },
        size:{
            siete:7,
            sieteMedio: 7.5,
            ocho:8,
            ochoMedio: 8.5,
            nueve:9,
            nueveMedio: 9.5,
            diez:10,
            diezMedio: 10.5,
            once:11,
            onceMedio: 11.5,
            doce: 12
        }
    }
];

export default data;