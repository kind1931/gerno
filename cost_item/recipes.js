const defaultRecipes = [
  {
    "job": "연금술사",
    "required_level": "25렙",
    "item_name": "백색가루",
    "yield": "20개",
    "crafting_fee": "1만",
    "ingredients": [
      {
        "name": "백봉령",
        "quantity": "10개"
      },
      {
        "name": "금은화",
        "quantity": "10개"
      },
      {
        "name": "하급정수",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "연금술사",
    "required_level": "45렙",
    "item_name": "금색가루",
    "yield": "20개",
    "crafting_fee": "5만",
    "ingredients": [
      {
        "name": "만년초",
        "quantity": "10개"
      },
      {
        "name": "천상초",
        "quantity": "10개"
      },
      {
        "name": "중급정수",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "연금술사",
    "required_level": "70렙",
    "item_name": "시간의가루",
    "yield": "10개",
    "crafting_fee": "5천",
    "ingredients": [
      {
        "name": "불사조의깃털",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "연금술사",
    "required_level": "80렙",
    "item_name": "푸른색가루",
    "yield": "20개",
    "crafting_fee": "30만",
    "ingredients": [
      {
        "name": "익모초",
        "quantity": "10개"
      },
      {
        "name": "설삼",
        "quantity": "10개"
      },
      {
        "name": "상급정수",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "연금술사",
    "required_level": "100렙",
    "item_name": "연마용 분말가루",
    "yield": "5개",
    "crafting_fee": "100만",
    "ingredients": [
      {
        "name": "푸른색가루",
        "quantity": "10개"
      },
      {
        "name": "금색가루",
        "quantity": "10개"
      },
      {
        "name": "백색가루",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "연금술사",
    "required_level": "110렙",
    "item_name": "안정제",
    "yield": "5개",
    "crafting_fee": "100만",
    "ingredients": [
      {
        "name": "푸른색가루",
        "quantity": "20개"
      },
      {
        "name": "착금감록초",
        "quantity": "20개"
      },
      {
        "name": "이무기비늘",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "연금술사",
    "required_level": "125렙",
    "item_name": "검은색가루",
    "yield": "20개",
    "crafting_fee": "100만",
    "ingredients": [
      {
        "name": "상황버섯",
        "quantity": "10개"
      },
      {
        "name": "바람꽃",
        "quantity": "10개"
      },
      {
        "name": "동자삼",
        "quantity": "10개"
      },
      {
        "name": "생명의정수",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "연금술사",
    "required_level": "130렙",
    "item_name": "유랑인의글귀",
    "yield": "1개",
    "crafting_fee": "200만",
    "ingredients": [
      {
        "name": "검은색가루",
        "quantity": "10개"
      },
      {
        "name": "황룡의비늘",
        "quantity": "2개"
      },
      {
        "name": "팔괘무늬옷감",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "연금술사",
    "required_level": "135렙",
    "item_name": "일장춘몽",
    "yield": "2개",
    "crafting_fee": "300만",
    "ingredients": [
      {
        "name": "검은색가루",
        "quantity": "10개"
      },
      {
        "name": "화룡의불꽃",
        "quantity": "2개"
      },
      {
        "name": "환수의혼",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "연금술사",
    "required_level": "150렙",
    "item_name": "붉은색가루",
    "yield": "10개",
    "crafting_fee": "250만",
    "ingredients": [
      {
        "name": "검은색가루",
        "quantity": "10개"
      },
      {
        "name": "화염초",
        "quantity": "10개"
      },
      {
        "name": "태양초",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "연금술사",
    "required_level": "175렙",
    "item_name": "封도",
    "yield": "1개",
    "crafting_fee": "500만",
    "ingredients": [
      {
        "name": "붉은색가루",
        "quantity": "20개"
      },
      {
        "name": "材도",
        "quantity": "5개"
      },
      {
        "name": "料도",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "연금술사",
    "required_level": "175렙",
    "item_name": "封형",
    "yield": "1개",
    "crafting_fee": "500만",
    "ingredients": [
      {
        "name": "붉은색가루",
        "quantity": "20개"
      },
      {
        "name": "材형",
        "quantity": "5개"
      },
      {
        "name": "料형",
        "quantity": "5개"
      },
      {
        "name": "심연의정수",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "연금술사",
    "required_level": "175렙",
    "item_name": "封모",
    "yield": "1개",
    "crafting_fee": "500만",
    "ingredients": [
      {
        "name": "붉은색가루",
        "quantity": "20개"
      },
      {
        "name": "材모",
        "quantity": "5개"
      },
      {
        "name": "料모",
        "quantity": "5개"
      },
      {
        "name": "심연의정수",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "연금술사",
    "required_level": "180렙",
    "item_name": "封갑",
    "yield": "1개",
    "crafting_fee": "500만",
    "ingredients": [
      {
        "name": "붉은색가루",
        "quantity": "20개"
      },
      {
        "name": "材갑",
        "quantity": "5개"
      },
      {
        "name": "料갑",
        "quantity": "5개"
      },
      {
        "name": "심연의정수",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "연금술사",
    "required_level": "180렙",
    "item_name": "封재",
    "yield": "1개",
    "crafting_fee": "500만",
    "ingredients": [
      {
        "name": "붉은색가루",
        "quantity": "20개"
      },
      {
        "name": "材재",
        "quantity": "5개"
      },
      {
        "name": "料재",
        "quantity": "5개"
      },
      {
        "name": "심연의정수",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "연금술사",
    "required_level": "180렙",
    "item_name": "불사신부",
    "yield": "10개",
    "crafting_fee": "50만",
    "ingredients": [
      {
        "name": "붉은색가루",
        "quantity": "5개"
      },
      {
        "name": "구지선엽초",
        "quantity": "10개"
      },
      {
        "name": "식량(유료)",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "연금술사",
    "required_level": "185렙",
    "item_name": "병법24편-1일",
    "yield": "5개",
    "crafting_fee": "50만",
    "ingredients": [
      {
        "name": "붉은색가루",
        "quantity": "5개"
      },
      {
        "name": "유랑인의글귀",
        "quantity": "1개"
      },
      {
        "name": "식량",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "연금술사",
    "required_level": "195렙",
    "item_name": "물품보관패",
    "yield": "1개",
    "crafting_fee": "1000만",
    "ingredients": [
      {
        "name": "붉은색가루",
        "quantity": "30개"
      },
      {
        "name": "식량",
        "quantity": "30개"
      },
      {
        "name": "강화된목재",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "연금술사",
    "required_level": "195렙",
    "item_name": "오색가루",
    "yield": "10개",
    "crafting_fee": "50만",
    "ingredients": [
      {
        "name": "붉은색가루",
        "quantity": "10개"
      },
      {
        "name": "설련화",
        "quantity": "10개"
      },
      {
        "name": "황금연꽃",
        "quantity": "10개"
      },
      {
        "name": "늪지석균",
        "quantity": "10개"
      },
      {
        "name": "백련초",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "연금술사",
    "required_level": "210렙",
    "item_name": "챠우의날개-1일",
    "yield": "2개",
    "crafting_fee": "50만",
    "ingredients": [
      {
        "name": "오색가루",
        "quantity": "10개"
      },
      {
        "name": "늪지석균",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "연금술사",
    "required_level": "215렙",
    "item_name": "전투티켓(5회)",
    "yield": "1개",
    "crafting_fee": "50만",
    "ingredients": [
      {
        "name": "선조의영혼석(조선)",
        "quantity": "5개"
      },
      {
        "name": "선조의영혼석(일본)",
        "quantity": "5개"
      },
      {
        "name": "선조의영혼석(대만)",
        "quantity": "5개"
      },
      {
        "name": "선조의영혼석(중국)",
        "quantity": "5개"
      },
      {
        "name": "시간의가루",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "연금술사",
    "required_level": "235렙",
    "item_name": "생명의비약",
    "yield": "1개",
    "crafting_fee": "1000만",
    "ingredients": [
      {
        "name": "죽음의비약",
        "quantity": "5개"
      },
      {
        "name": "오색결정",
        "quantity": "5개"
      },
      {
        "name": "생명의뿌리",
        "quantity": "20개"
      },
      {
        "name": "생명의정수",
        "quantity": "10개"
      },
      {
        "name": "시간의가루",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "연금술사",
    "required_level": "240렙",
    "item_name": "현자의지식",
    "yield": "1개",
    "crafting_fee": "1000만",
    "ingredients": [
      {
        "name": "현자의원석(火)",
        "quantity": "10개"
      },
      {
        "name": "현자의원석(水)",
        "quantity": "10개"
      },
      {
        "name": "현자의원석(風)",
        "quantity": "10개"
      },
      {
        "name": "현자의원석(雷)",
        "quantity": "10개"
      },
      {
        "name": "현자의원석(土)",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "40",
    "item_name": "백수정",
    "yield": "5개",
    "crafting_fee": "5만",
    "ingredients": [
      {
        "name": "맑은수정",
        "quantity": "10개"
      },
      {
        "name": "대리석",
        "quantity": "10개"
      },
      {
        "name": "백색가루",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "45",
    "item_name": "사금석",
    "yield": "5개",
    "crafting_fee": "5만",
    "ingredients": [
      {
        "name": "금색가루",
        "quantity": "10개"
      },
      {
        "name": "석류석",
        "quantity": "10개"
      },
      {
        "name": "천년석",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "50",
    "item_name": "월장석",
    "yield": "5개",
    "crafting_fee": "5만",
    "ingredients": [
      {
        "name": "녹주석",
        "quantity": "10개"
      },
      {
        "name": "비취",
        "quantity": "10개"
      },
      {
        "name": "푸른색가루",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "60",
    "item_name": "흑요석",
    "yield": "5개",
    "crafting_fee": "30만",
    "ingredients": [
      {
        "name": "흑연",
        "quantity": "5개"
      },
      {
        "name": "흑빙석",
        "quantity": "5개"
      },
      {
        "name": "검은색가루",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "70",
    "item_name": "적혈석",
    "yield": "5개",
    "crafting_fee": "30만",
    "ingredients": [
      {
        "name": "적혼옥",
        "quantity": "5개"
      },
      {
        "name": "강옥",
        "quantity": "5개"
      },
      {
        "name": "붉은색가루",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "80",
    "item_name": "자수정가락지",
    "yield": "2개",
    "crafting_fee": "50만",
    "ingredients": [
      {
        "name": "자색보주",
        "quantity": "10개"
      },
      {
        "name": "옥",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "90",
    "item_name": "세공된 백수정",
    "yield": "5개",
    "crafting_fee": "100만",
    "ingredients": [
      {
        "name": "백수정",
        "quantity": "5개"
      },
      {
        "name": "백색가루",
        "quantity": "10개"
      },
      {
        "name": "안정제",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "100",
    "item_name": "적혈석가락지",
    "yield": "2개",
    "crafting_fee": "100만",
    "ingredients": [
      {
        "name": "적혈석",
        "quantity": "5개"
      },
      {
        "name": "붉은색가루",
        "quantity": "1개"
      },
      {
        "name": "호박석",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "110",
    "item_name": "세공된 사금석",
    "yield": "5개",
    "crafting_fee": "200만",
    "ingredients": [
      {
        "name": "사금석",
        "quantity": "5개"
      },
      {
        "name": "금색가루",
        "quantity": "10개"
      },
      {
        "name": "안정제",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "120",
    "item_name": "보석제거 도구함",
    "yield": "2개",
    "crafting_fee": "200만",
    "ingredients": [
      {
        "name": "철괴",
        "quantity": "10개"
      },
      {
        "name": "망치",
        "quantity": "3개"
      },
      {
        "name": "끌",
        "quantity": "3개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "125",
    "item_name": "세공된 월장석",
    "yield": "5개",
    "crafting_fee": "200만",
    "ingredients": [
      {
        "name": "월장석",
        "quantity": "5개"
      },
      {
        "name": "푸른색가루",
        "quantity": "10개"
      },
      {
        "name": "안정제",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "130",
    "item_name": "흑요석가락지",
    "yield": "2개",
    "crafting_fee": "200만",
    "ingredients": [
      {
        "name": "흑요석",
        "quantity": "5개"
      },
      {
        "name": "영혼의강철",
        "quantity": "10개"
      },
      {
        "name": "검은색가루",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "135",
    "item_name": "세공된 흑요석",
    "yield": "5개",
    "crafting_fee": "500만",
    "ingredients": [
      {
        "name": "흑요석",
        "quantity": "5개"
      },
      {
        "name": "검은색가루",
        "quantity": "5개"
      },
      {
        "name": "안정제",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "140",
    "item_name": "세공된 적혈석",
    "yield": "5개",
    "crafting_fee": "500만",
    "ingredients": [
      {
        "name": "적혈석",
        "quantity": "5개"
      },
      {
        "name": "붉은색가루",
        "quantity": "5개"
      },
      {
        "name": "안정제",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "145",
    "item_name": "호안석가락지",
    "yield": "2개",
    "crafting_fee": "500만",
    "ingredients": [
      {
        "name": "호안석",
        "quantity": "10개"
      },
      {
        "name": "청동",
        "quantity": "10개"
      },
      {
        "name": "푸른색가루",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "150",
    "item_name": "자운비가락지",
    "yield": "2개",
    "crafting_fee": "700만",
    "ingredients": [
      {
        "name": "자운비옥",
        "quantity": "10개"
      },
      {
        "name": "청동",
        "quantity": "10개"
      },
      {
        "name": "푸른색가루",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "155",
    "item_name": "혼의결정",
    "yield": "2개",
    "crafting_fee": "300만",
    "ingredients": [
      {
        "name": "환수의혼",
        "quantity": "3개"
      },
      {
        "name": "안정제",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "160",
    "item_name": "금강석가락지",
    "yield": "2개",
    "crafting_fee": "500만",
    "ingredients": [
      {
        "name": "금강석",
        "quantity": "5개"
      },
      {
        "name": "황철석",
        "quantity": "10개"
      },
      {
        "name": "금색가루",
        "quantity": "10개"
      },
      {
        "name": "연마용 분말가루",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "165",
    "item_name": "강화된 백수정",
    "yield": "1개",
    "crafting_fee": "1,000만",
    "ingredients": [
      {
        "name": "세공된 백수정",
        "quantity": "5개"
      },
      {
        "name": "백색가루",
        "quantity": "10개"
      },
      {
        "name": "안정제",
        "quantity": "1개"
      },
      {
        "name": "뇌전의결정",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "170",
    "item_name": "강화된 사금석",
    "yield": "1개",
    "crafting_fee": "1,000만",
    "ingredients": [
      {
        "name": "세공된 사금석",
        "quantity": "5개"
      },
      {
        "name": "금색가루",
        "quantity": "10개"
      },
      {
        "name": "안정제",
        "quantity": "1개"
      },
      {
        "name": "바람의결정",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "175",
    "item_name": "강화된 월장석",
    "yield": "1개",
    "crafting_fee": "2,000만",
    "ingredients": [
      {
        "name": "세공된 월장석",
        "quantity": "5개"
      },
      {
        "name": "푸른색가루",
        "quantity": "10개"
      },
      {
        "name": "안정제",
        "quantity": "1개"
      },
      {
        "name": "물의결정",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "180",
    "item_name": "강화된 적혈석",
    "yield": "1개",
    "crafting_fee": "3,000만",
    "ingredients": [
      {
        "name": "세공된 적혈석",
        "quantity": "5개"
      },
      {
        "name": "붉은색가루",
        "quantity": "10개"
      },
      {
        "name": "안정제",
        "quantity": "1개"
      },
      {
        "name": "불의결정",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "195",
    "item_name": "악령지환",
    "yield": "1개",
    "crafting_fee": "3,000만",
    "ingredients": [
      {
        "name": "강화된 백수정",
        "quantity": "2개"
      },
      {
        "name": "강화된 흑요석",
        "quantity": "2개"
      },
      {
        "name": "깨진 옥반지",
        "quantity": "30개"
      },
      {
        "name": "붉은수정",
        "quantity": "30개"
      },
      {
        "name": "연마용 분말가루",
        "quantity": "20개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "195",
    "item_name": "공명의반지",
    "yield": "1개",
    "crafting_fee": "3,000만",
    "ingredients": [
      {
        "name": "강화된 적혈석",
        "quantity": "3개"
      },
      {
        "name": "황룡의비늘",
        "quantity": "10개"
      },
      {
        "name": "화룡의불꽃",
        "quantity": "10개"
      },
      {
        "name": "금강석",
        "quantity": "100개"
      },
      {
        "name": "연마용 분말가루",
        "quantity": "20개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "195",
    "item_name": "사금석반지",
    "yield": "1개",
    "crafting_fee": "3,000만",
    "ingredients": [
      {
        "name": "강화된 사금석",
        "quantity": "5개"
      },
      {
        "name": "태양석",
        "quantity": "50개"
      },
      {
        "name": "암흑의정수",
        "quantity": "20개"
      },
      {
        "name": "흉수의혼",
        "quantity": "20개"
      },
      {
        "name": "연마용 분말가루",
        "quantity": "20개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "215",
    "item_name": "반고의장신구상자",
    "yield": "1개",
    "crafting_fee": "500만",
    "ingredients": [
      {
        "name": "차가운영혼석",
        "quantity": "3개"
      },
      {
        "name": "도도메키의묘안석",
        "quantity": "3개"
      },
      {
        "name": "신의금속",
        "quantity": "1개"
      },
      {
        "name": "시간의가루",
        "quantity": "2개"
      },
      {
        "name": "연마용 분말가루",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "215",
    "item_name": "황룡금침",
    "yield": "1개",
    "crafting_fee": "3,000만",
    "ingredients": [
      {
        "name": "빙백침",
        "quantity": "1개"
      },
      {
        "name": "말벌의침",
        "quantity": "10개"
      },
      {
        "name": "강화된 사금석",
        "quantity": "10개"
      },
      {
        "name": "봉인된힘의조각",
        "quantity": "20개"
      },
      {
        "name": "일각비사의뿔",
        "quantity": "20개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "220",
    "item_name": "청룡의요대",
    "yield": "1개",
    "crafting_fee": "3,000만",
    "ingredients": [
      {
        "name": "강화된 월장석",
        "quantity": "5개"
      },
      {
        "name": "뇌룡주",
        "quantity": "20개"
      },
      {
        "name": "마룡의비늘",
        "quantity": "50개"
      },
      {
        "name": "조각난요대",
        "quantity": "50개"
      },
      {
        "name": "시간의가루",
        "quantity": "20개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "235",
    "item_name": "오색결정",
    "yield": "1개",
    "crafting_fee": "1,000만",
    "ingredients": [
      {
        "name": "오색결정 조각",
        "quantity": "5개"
      },
      {
        "name": "봉인된힘의조각",
        "quantity": "2개"
      },
      {
        "name": "안정제",
        "quantity": "1개"
      },
      {
        "name": "연마용 분말가루",
        "quantity": "40개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "245",
    "item_name": "여와목걸이",
    "yield": "1개",
    "crafting_fee": "5,000만",
    "ingredients": [
      {
        "name": "반고의목걸이(+5)",
        "quantity": "1개"
      },
      {
        "name": "오색결정",
        "quantity": "2개"
      },
      {
        "name": "신의금속",
        "quantity": "2개"
      },
      {
        "name": "시간의가루",
        "quantity": "5개"
      },
      {
        "name": "연마용 분말가루",
        "quantity": "30개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "245",
    "item_name": "여와귀걸이",
    "yield": "1개",
    "crafting_fee": "5,000만",
    "ingredients": [
      {
        "name": "반고의귀걸이(+5)",
        "quantity": "1개"
      },
      {
        "name": "오색결정",
        "quantity": "2개"
      },
      {
        "name": "신의금속",
        "quantity": "2개"
      },
      {
        "name": "시간의가루",
        "quantity": "5개"
      },
      {
        "name": "연마용 분말가루",
        "quantity": "30개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "245",
    "item_name": "항아목걸이",
    "yield": "1개",
    "crafting_fee": "1억",
    "ingredients": [
      {
        "name": "여와의목걸이(+5)",
        "quantity": "1개"
      },
      {
        "name": "오색결정",
        "quantity": "5개"
      },
      {
        "name": "별의정수",
        "quantity": "2개"
      },
      {
        "name": "시간의가루",
        "quantity": "10개"
      },
      {
        "name": "연마용 분말가루",
        "quantity": "50개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "245",
    "item_name": "항아귀걸이",
    "yield": "1개",
    "crafting_fee": "1억",
    "ingredients": [
      {
        "name": "여와의귀걸이(+5)",
        "quantity": "1개"
      },
      {
        "name": "오색결정",
        "quantity": "5개"
      },
      {
        "name": "별의정수",
        "quantity": "2개"
      },
      {
        "name": "시간의가루",
        "quantity": "10개"
      },
      {
        "name": "연마용 분말가루",
        "quantity": "50개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "250",
    "item_name": "세공된 적마노",
    "yield": "-",
    "crafting_fee": "1,000만",
    "ingredients": [
      {
        "name": "적마노",
        "quantity": "10개"
      },
      {
        "name": "붉은색가루",
        "quantity": "10개"
      },
      {
        "name": "안정제",
        "quantity": "1개"
      },
      {
        "name": "성스러운별(火)",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "250",
    "item_name": "세공된 남옥",
    "yield": "-",
    "crafting_fee": "1,000만",
    "ingredients": [
      {
        "name": "남옥",
        "quantity": "10개"
      },
      {
        "name": "백색가루",
        "quantity": "10개"
      },
      {
        "name": "안정제",
        "quantity": "1개"
      },
      {
        "name": "성스러운별(風)",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "250",
    "item_name": "세공된 석웅황",
    "yield": "-",
    "crafting_fee": "1,000만",
    "ingredients": [
      {
        "name": "석웅황",
        "quantity": "10개"
      },
      {
        "name": "금색가루",
        "quantity": "10개"
      },
      {
        "name": "안정제",
        "quantity": "1개"
      },
      {
        "name": "성스러운별(雷)",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "세공사",
    "required_level": "250",
    "item_name": "세공된 벽옥",
    "yield": "-",
    "crafting_fee": "1,000만",
    "ingredients": [
      {
        "name": "벽옥",
        "quantity": "10개"
      },
      {
        "name": "검은색가루",
        "quantity": "10개"
      },
      {
        "name": "안정제",
        "quantity": "1개"
      },
      {
        "name": "성스러운별(水)",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "대장장이",
    "required_level": "45렙",
    "item_name": "청동",
    "yield": "30개",
    "crafting_fee": "10만",
    "ingredients": [
      {
        "name": "구리",
        "quantity": "30개"
      },
      {
        "name": "주석",
        "quantity": "30개"
      }
    ]
  },
  {
    "job": "대장장이",
    "required_level": "70렙",
    "item_name": "철괴",
    "yield": "30개",
    "crafting_fee": "150만",
    "ingredients": [
      {
        "name": "석탄",
        "quantity": "30개"
      },
      {
        "name": "철",
        "quantity": "30개"
      }
    ]
  },
  {
    "job": "대장장이",
    "required_level": "110렙",
    "item_name": "고급별운검",
    "yield": "1개",
    "crafting_fee": "200만",
    "ingredients": [
      {
        "name": "철괴",
        "quantity": "20개"
      },
      {
        "name": "천년석",
        "quantity": "20개"
      },
      {
        "name": "자운비옥",
        "quantity": "20개"
      },
      {
        "name": "흑연",
        "quantity": "20개"
      }
    ]
  },
  {
    "job": "대장장이",
    "required_level": "145렙",
    "item_name": "철제죔쇄",
    "yield": "2개",
    "crafting_fee": "1천만",
    "ingredients": [
      {
        "name": "철괴",
        "quantity": "30개"
      },
      {
        "name": "화룡의불꽃",
        "quantity": "1개"
      },
      {
        "name": "청동",
        "quantity": "30개"
      }
    ]
  },
  {
    "job": "대장장이",
    "required_level": "150렙",
    "item_name": "흑철괴",
    "yield": "30개",
    "crafting_fee": "5백만",
    "ingredients": [
      {
        "name": "철괴",
        "quantity": "20개"
      },
      {
        "name": "흑연",
        "quantity": "20개"
      },
      {
        "name": "석회석",
        "quantity": "20개"
      }
    ]
  },
  {
    "job": "대장장이",
    "required_level": "150렙",
    "item_name": "예래의곡괭이",
    "yield": "1개",
    "crafting_fee": "5백만",
    "ingredients": [
      {
        "name": "흑철괴",
        "quantity": "50개"
      },
      {
        "name": "백금",
        "quantity": "50개"
      },
      {
        "name": "은",
        "quantity": "300개"
      }
    ]
  },
  {
    "job": "대장장이",
    "required_level": "150렙",
    "item_name": "한채의호미",
    "yield": "1개",
    "crafting_fee": "5백만",
    "ingredients": [
      {
        "name": "흑철괴",
        "quantity": "50개"
      },
      {
        "name": "황철석",
        "quantity": "50개"
      },
      {
        "name": "금",
        "quantity": "300개"
      }
    ]
  },
  {
    "job": "대장장이",
    "required_level": "165렙",
    "item_name": "청룡언월도",
    "yield": "1개",
    "crafting_fee": "2천만",
    "ingredients": [
      {
        "name": "흑철괴",
        "quantity": "100개"
      },
      {
        "name": "적혼옥",
        "quantity": "100개"
      },
      {
        "name": "뇌전의결정",
        "quantity": "30개"
      },
      {
        "name": "황룡의비늘",
        "quantity": "3개"
      },
      {
        "name": "도",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "대장장이",
    "required_level": "170렙",
    "item_name": "거한의도끼",
    "yield": "1개",
    "crafting_fee": "2천만",
    "ingredients": [
      {
        "name": "흑철괴",
        "quantity": "100개"
      },
      {
        "name": "황철석",
        "quantity": "100개"
      },
      {
        "name": "땅의결정",
        "quantity": "30개"
      },
      {
        "name": "화룡의불꽃",
        "quantity": "3개"
      },
      {
        "name": "도",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "대장장이",
    "required_level": "175렙",
    "item_name": "늑대의조도",
    "yield": "1개",
    "crafting_fee": "2천만",
    "ingredients": [
      {
        "name": "흑철괴",
        "quantity": "100개"
      },
      {
        "name": "광호발톱",
        "quantity": "20개"
      },
      {
        "name": "도",
        "quantity": "1개"
      },
      {
        "name": "호안석",
        "quantity": "100개"
      },
      {
        "name": "바람의결정",
        "quantity": "30개"
      }
    ]
  },
  {
    "job": "대장장이",
    "required_level": "180렙",
    "item_name": "자룡극",
    "yield": "1개",
    "crafting_fee": "3천만",
    "ingredients": [
      {
        "name": "흑철괴",
        "quantity": "150개"
      },
      {
        "name": "뇌전의결정",
        "quantity": "30개"
      },
      {
        "name": "재",
        "quantity": "1개"
      },
      {
        "name": "이무기비늘",
        "quantity": "20개"
      },
      {
        "name": "샤오링의노리개",
        "quantity": "20개"
      }
    ]
  },
  {
    "job": "대장장이",
    "required_level": "185렙",
    "item_name": "무영은침",
    "yield": "1개",
    "crafting_fee": "3500만",
    "ingredients": [
      {
        "name": "흑철괴",
        "quantity": "200개"
      },
      {
        "name": "푸른수정",
        "quantity": "50개"
      },
      {
        "name": "북해빙정",
        "quantity": "50개"
      },
      {
        "name": "재",
        "quantity": "2개"
      },
      {
        "name": "원주민독침",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "대장장이",
    "required_level": "190렙",
    "item_name": "후마표창",
    "yield": "1개",
    "crafting_fee": "4천만",
    "ingredients": [
      {
        "name": "흑철괴",
        "quantity": "300개"
      },
      {
        "name": "붉은수정",
        "quantity": "50개"
      },
      {
        "name": "불의결정",
        "quantity": "50개"
      },
      {
        "name": "재",
        "quantity": "2개"
      },
      {
        "name": "금강석",
        "quantity": "30개"
      }
    ]
  },
  {
    "job": "대장장이",
    "required_level": "195렙",
    "item_name": "자령부",
    "yield": "1개",
    "crafting_fee": "5천만",
    "ingredients": [
      {
        "name": "흑철괴",
        "quantity": "500개"
      },
      {
        "name": "금강석",
        "quantity": "30개"
      },
      {
        "name": "검은수정",
        "quantity": "20개"
      },
      {
        "name": "불의결정",
        "quantity": "50개"
      },
      {
        "name": "물의결정",
        "quantity": "50개"
      }
    ]
  },
  {
    "job": "대장장이",
    "required_level": "195렙",
    "item_name": "흑철주괴",
    "yield": "20개",
    "crafting_fee": "5백만",
    "ingredients": [
      {
        "name": "흑철괴",
        "quantity": "10개"
      },
      {
        "name": "한철",
        "quantity": "10개"
      },
      {
        "name": "묵철",
        "quantity": "10개"
      },
      {
        "name": "철목",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "대장장이",
    "required_level": "205렙",
    "item_name": "흑웅의갈퀴",
    "yield": "1개",
    "crafting_fee": "2천만",
    "ingredients": [
      {
        "name": "흑철주괴",
        "quantity": "50개"
      },
      {
        "name": "강철손",
        "quantity": "3개"
      },
      {
        "name": "마수의발톱",
        "quantity": "50개"
      },
      {
        "name": "날카로운발톱",
        "quantity": "50개"
      },
      {
        "name": "신의금속",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "대장장이",
    "required_level": "215렙",
    "item_name": "대장군포",
    "yield": "1개",
    "crafting_fee": "3천만",
    "ingredients": [
      {
        "name": "차승자총통",
        "quantity": "1개"
      },
      {
        "name": "오문의대포조각",
        "quantity": "20개"
      },
      {
        "name": "태양의조각",
        "quantity": "10개"
      },
      {
        "name": "흑철주괴",
        "quantity": "100개"
      },
      {
        "name": "봉인된힘의조각",
        "quantity": "20개"
      }
    ]
  },
  {
    "job": "대장장이",
    "required_level": "215렙",
    "item_name": "빛나는 철제죔쇄",
    "yield": "1개",
    "crafting_fee": "3천만",
    "ingredients": [
      {
        "name": "철제죔쇄",
        "quantity": "1개"
      },
      {
        "name": "흑철주괴",
        "quantity": "20개"
      },
      {
        "name": "무지개석",
        "quantity": "20개"
      },
      {
        "name": "오색가루",
        "quantity": "20개"
      }
    ]
  },
  {
    "job": "대장장이",
    "required_level": "215렙",
    "item_name": "철마의편자",
    "yield": "1개",
    "crafting_fee": "3천만",
    "ingredients": [
      {
        "name": "청동심장",
        "quantity": "10개"
      },
      {
        "name": "신의금속",
        "quantity": "5개"
      },
      {
        "name": "고귀한신발장식",
        "quantity": "5개"
      },
      {
        "name": "각성석의조각",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "대장장이",
    "required_level": "235렙",
    "item_name": "땅의 속성 주괴",
    "yield": "1개",
    "crafting_fee": "1천만",
    "ingredients": [
      {
        "name": "땅의원석",
        "quantity": "5개"
      },
      {
        "name": "흑철주괴",
        "quantity": "2개"
      },
      {
        "name": "안정제",
        "quantity": "1개"
      },
      {
        "name": "오색가루",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "혼천의",
    "yield": "1개",
    "crafting_fee": "-",
    "ingredients": [
      {
        "name": "부서진 혼천의 조각(뱀)",
        "quantity": "1개"
      },
      {
        "name": "부서진 혼천의 조각(봉황)",
        "quantity": "1개"
      },
      {
        "name": "부서진 혼천의 조각(소)",
        "quantity": "1개"
      },
      {
        "name": "부서진 혼천의 조각(용)",
        "quantity": "1개"
      },
      {
        "name": "혼돈의파편(火)",
        "quantity": "5개"
      },
      {
        "name": "혼돈의파편(水)",
        "quantity": "5개"
      },
      {
        "name": "혼돈의파편(風)",
        "quantity": "5개"
      },
      {
        "name": "혼돈의파편(雷)",
        "quantity": "5개"
      },
      {
        "name": "혼돈의파편(土)",
        "quantity": "5개"
      },
      {
        "name": "혼돈의파편(强)",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "잿빛 공포의 보옥",
    "yield": "1개",
    "crafting_fee": "1천만",
    "ingredients": [
      {
        "name": "핏빛 공포의 보옥",
        "quantity": "10개"
      },
      {
        "name": "금빛 공포의 보옥",
        "quantity": "10개"
      },
      {
        "name": "녹빛 공포의 보옥",
        "quantity": "10개"
      },
      {
        "name": "물빛 공포의 보옥",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "울부짖는 사암의 심장",
    "yield": "1개",
    "crafting_fee": "1천만",
    "ingredients": [
      {
        "name": "울부짖는 환염의 심장",
        "quantity": "10개"
      },
      {
        "name": "울부짖는 독수의 심장",
        "quantity": "10개"
      },
      {
        "name": "울부짖는 암전의 심장",
        "quantity": "10개"
      },
      {
        "name": "울부짖는 독풍의 심장",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "여명의 유물(火)",
    "yield": "1개",
    "crafting_fee": "10억",
    "ingredients": [
      {
        "name": "염후의 빛바랜 장식",
        "quantity": "100개"
      },
      {
        "name": "[유물] 법륜 파편(거래불가)",
        "quantity": "5개"
      },
      {
        "name": "환생의서",
        "quantity": "1개"
      },
      {
        "name": "성스러운 별(火)",
        "quantity": "30개"
      },
      {
        "name": "봉인의서",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "여명의 유물(風)",
    "yield": "1개",
    "crafting_fee": "10억",
    "ingredients": [
      {
        "name": "운향의 오래된 비녀",
        "quantity": "100개"
      },
      {
        "name": "[유물] 법륜 파편(거래불가)",
        "quantity": "5개"
      },
      {
        "name": "환생의서",
        "quantity": "1개"
      },
      {
        "name": "성스러운 별(風)",
        "quantity": "30개"
      },
      {
        "name": "봉인의서",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "여명의 유물(水)",
    "yield": "1개",
    "crafting_fee": "10억",
    "ingredients": [
      {
        "name": "진묵의 부서진 칼자루",
        "quantity": "100개"
      },
      {
        "name": "[유물] 법륜 파편(거래불가)",
        "quantity": "5개"
      },
      {
        "name": "환생의서",
        "quantity": "1개"
      },
      {
        "name": "성스러운 별(水)",
        "quantity": "30개"
      },
      {
        "name": "봉인의서",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "여명의 유물(雷)",
    "yield": "1개",
    "crafting_fee": "10억",
    "ingredients": [
      {
        "name": "영수의 마모된 철제 발톱",
        "quantity": "100개"
      },
      {
        "name": "[유물] 법륜 파편(거래불가)",
        "quantity": "5개"
      },
      {
        "name": "환생의서",
        "quantity": "1개"
      },
      {
        "name": "성스러운 별(雷)",
        "quantity": "30개"
      },
      {
        "name": "봉인의서",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "적운혼",
    "yield": "1개",
    "crafting_fee": "1천만",
    "ingredients": [
      {
        "name": "심연의 불안정한 정기",
        "quantity": "2개"
      },
      {
        "name": "기억의서판(火)",
        "quantity": "1개"
      },
      {
        "name": "갈라진 암흑 육자명왕의 심장",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "녹영혼",
    "yield": "1개",
    "crafting_fee": "1천만",
    "ingredients": [
      {
        "name": "심연의 불안정한 정기",
        "quantity": "2개"
      },
      {
        "name": "기억의서판(風)",
        "quantity": "1개"
      },
      {
        "name": "갈라진 암흑 마두명왕의 심장",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "청명혼",
    "yield": "1개",
    "crafting_fee": "1천만",
    "ingredients": [
      {
        "name": "심연의 불안정한 정기",
        "quantity": "2개"
      },
      {
        "name": "기억의서판(水)",
        "quantity": "1개"
      },
      {
        "name": "갈라진 암흑 애염명왕의 심장",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "금령혼",
    "yield": "1개",
    "crafting_fee": "1천만",
    "ingredients": [
      {
        "name": "심연의 불안정한 정기",
        "quantity": "2개"
      },
      {
        "name": "기억의서판(雷)",
        "quantity": "1개"
      },
      {
        "name": "갈라진 암흑 공작명왕의 심장",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "혼돈의 돌",
    "yield": "1개",
    "crafting_fee": "500만",
    "ingredients": [
      {
        "name": "오운_소의 비단 두루마기",
        "quantity": "1개"
      },
      {
        "name": "부서진 오운_염의 뿔 조각",
        "quantity": "1개"
      },
      {
        "name": "부서진 오운_전의 창 조각",
        "quantity": "1개"
      },
      {
        "name": "부서진 오운_태의 거울파편",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "강화된 고급 백수정",
    "yield": "1개",
    "crafting_fee": "6,068만",
    "ingredients": [
      {
        "name": "강화된 백수정",
        "quantity": "1개"
      },
      {
        "name": "수집된 영혼",
        "quantity": "119개"
      },
      {
        "name": "바람의인장",
        "quantity": "80개"
      },
      {
        "name": "달의인장",
        "quantity": "52개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "강화된 고급 사금석",
    "yield": "1개",
    "crafting_fee": "6,068만",
    "ingredients": [
      {
        "name": "강화된 사금석",
        "quantity": "1개"
      },
      {
        "name": "수집된 영혼",
        "quantity": "119개"
      },
      {
        "name": "뇌의인장",
        "quantity": "80개"
      },
      {
        "name": "해의인장",
        "quantity": "52개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "강화된 고급 월장석",
    "yield": "1개",
    "crafting_fee": "6,068만",
    "ingredients": [
      {
        "name": "강화된 월장석",
        "quantity": "1개"
      },
      {
        "name": "수집된 영혼",
        "quantity": "119개"
      },
      {
        "name": "물의인장",
        "quantity": "80개"
      },
      {
        "name": "달의인장",
        "quantity": "52개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "강화된 고급 흑요석",
    "yield": "1개",
    "crafting_fee": "6,068만",
    "ingredients": [
      {
        "name": "강화된 흑요석",
        "quantity": "1개"
      },
      {
        "name": "수집된 영혼",
        "quantity": "119개"
      },
      {
        "name": "불의인장",
        "quantity": "80개"
      },
      {
        "name": "해의인장",
        "quantity": "52개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "세공된 고급 적마노",
    "yield": "1개",
    "crafting_fee": "1억 301만",
    "ingredients": [
      {
        "name": "세공된 적마노",
        "quantity": "1개"
      },
      {
        "name": "적마노",
        "quantity": "146개"
      },
      {
        "name": "기억의서판(火)",
        "quantity": "59개"
      },
      {
        "name": "힘의기억",
        "quantity": "146개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "세공된 고급 남옥",
    "yield": "1개",
    "crafting_fee": "1억 301만",
    "ingredients": [
      {
        "name": "세공된 남옥",
        "quantity": "1개"
      },
      {
        "name": "남옥",
        "quantity": "146개"
      },
      {
        "name": "기억의서판(風)",
        "quantity": "59개"
      },
      {
        "name": "힘의기억",
        "quantity": "146개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "세공된 고급 석웅황",
    "yield": "1개",
    "crafting_fee": "1억 301만",
    "ingredients": [
      {
        "name": "세공된 석웅황",
        "quantity": "1개"
      },
      {
        "name": "석웅황",
        "quantity": "146개"
      },
      {
        "name": "기억의서판(雷)",
        "quantity": "59개"
      },
      {
        "name": "힘의기억",
        "quantity": "146개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "세공된 고급 벽옥",
    "yield": "1개",
    "crafting_fee": "1억 301만",
    "ingredients": [
      {
        "name": "세공된 벽옥",
        "quantity": "1개"
      },
      {
        "name": "벽옥",
        "quantity": "146개"
      },
      {
        "name": "기억의서판(水)",
        "quantity": "59개"
      },
      {
        "name": "힘의기억",
        "quantity": "146개"
      }
    ]
  },
{
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고급 항아의목걸이",
    "yield": "1개",
    "crafting_fee": "4억 3,334만",
    "ingredients": [
      {
        "name": "항아의목걸이",
        "quantity": "1개"
      },
      {
        "name": "봉인된힘의조각",
        "quantity": "139개"
      },
      {
        "name": "시간의가루",
        "quantity": "61개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고급 항아의귀걸이",
    "yield": "1개",
    "crafting_fee": "4억 3,334만",
    "ingredients": [
      {
        "name": "항아의귀걸이",
        "quantity": "1개"
      },
      {
        "name": "봉인된힘의조각",
        "quantity": "139개"
      },
      {
        "name": "시간의가루",
        "quantity": "61개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "영혼이 봉인된 호리병",
    "yield": "1개",
    "crafting_fee": "3,000만",
    "ingredients": [
      {
        "name": "철괴리의호리병",
        "quantity": "20개"
      },
      {
        "name": "선조의 영혼석(조선)",
        "quantity": "20개"
      },
      {
        "name": "선조의 영혼석(중국)",
        "quantity": "20개"
      },
      {
        "name": "선조의 영혼석(일본)",
        "quantity": "20개"
      },
      {
        "name": "선조의 영혼석(대만)",
        "quantity": "20개"
      },
      {
        "name": "봉인의서",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "악몽의구슬(火)",
    "yield": "1개",
    "crafting_fee": "500만",
    "ingredients": [
      {
        "name": "검은 기운의 결정체",
        "quantity": "20개"
      },
      {
        "name": "불의속성석",
        "quantity": "1개"
      },
      {
        "name": "불의인장",
        "quantity": "10개"
      },
      {
        "name": "해의인장",
        "quantity": "2개"
      },
      {
        "name": "오색가루",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "악몽의구슬(水)",
    "yield": "1개",
    "crafting_fee": "500만",
    "ingredients": [
      {
        "name": "검은 기운의 결정체",
        "quantity": "20개"
      },
      {
        "name": "물의속성석",
        "quantity": "1개"
      },
      {
        "name": "물의인장",
        "quantity": "10개"
      },
      {
        "name": "달의인장",
        "quantity": "2개"
      },
      {
        "name": "오색가루",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "악몽의구슬(風)",
    "yield": "1개",
    "crafting_fee": "500만",
    "ingredients": [
      {
        "name": "검은 기운의 결정체",
        "quantity": "20개"
      },
      {
        "name": "바람의속성석",
        "quantity": "1개"
      },
      {
        "name": "바람의인장",
        "quantity": "10개"
      },
      {
        "name": "달의인장",
        "quantity": "2개"
      },
      {
        "name": "오색가루",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "악몽의구슬(雷)",
    "yield": "1개",
    "crafting_fee": "500만",
    "ingredients": [
      {
        "name": "검은 기운의 결정체",
        "quantity": "20개"
      },
      {
        "name": "뇌전의속성석",
        "quantity": "1개"
      },
      {
        "name": "뇌의인장",
        "quantity": "10개"
      },
      {
        "name": "해의인장",
        "quantity": "2개"
      },
      {
        "name": "오색가루",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "불타는 사신의 인장(火)",
    "yield": "1개",
    "crafting_fee": "300만",
    "ingredients": [
      {
        "name": "고대 불의 인장(火)",
        "quantity": "20개"
      },
      {
        "name": "사신의 정기(火)",
        "quantity": "5개"
      },
      {
        "name": "작은불의속성석",
        "quantity": "20개"
      },
      {
        "name": "화염석",
        "quantity": "30개"
      },
      {
        "name": "오색가루",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "얼어붙은 사신의 인장(水)",
    "yield": "1개",
    "crafting_fee": "300만",
    "ingredients": [
      {
        "name": "고대 물의 인장(水)",
        "quantity": "20개"
      },
      {
        "name": "사신의 정기(水)",
        "quantity": "5개"
      },
      {
        "name": "작은물의속성석",
        "quantity": "20개"
      },
      {
        "name": "결빙석",
        "quantity": "30개"
      },
      {
        "name": "오색가루",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "역류하는 사신의 인장(風)",
    "yield": "1개",
    "crafting_fee": "300만",
    "ingredients": [
      {
        "name": "고대 바람의 인장(風)",
        "quantity": "20개"
      },
      {
        "name": "사신의 정기(風)",
        "quantity": "5개"
      },
      {
        "name": "작은바람의속성석",
        "quantity": "20개"
      },
      {
        "name": "단풍석",
        "quantity": "30개"
      },
      {
        "name": "오색가루",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "번개치는 사신의 인장(雷)",
    "yield": "1개",
    "crafting_fee": "300만",
    "ingredients": [
      {
        "name": "고대 뇌의 인장(雷)",
        "quantity": "20개"
      },
      {
        "name": "사신의 정기(雷)",
        "quantity": "5개"
      },
      {
        "name": "작은뇌전의속성석",
        "quantity": "20개"
      },
      {
        "name": "뇌정석",
        "quantity": "30개"
      },
      {
        "name": "오색가루",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "격돌하는 사신의 인장(土)",
    "yield": "1개",
    "crafting_fee": "300만",
    "ingredients": [
      {
        "name": "고대 땅의 인장(土)",
        "quantity": "20개"
      },
      {
        "name": "사신의 정기(土)",
        "quantity": "5개"
      },
      {
        "name": "작은땅의속성석",
        "quantity": "20개"
      },
      {
        "name": "땅의정령석",
        "quantity": "30개"
      },
      {
        "name": "오색가루",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "정기의구슬(風)",
    "yield": "1개",
    "crafting_fee": "200만",
    "ingredients": [
      {
        "name": "정기의구슬조각(風)",
        "quantity": "10개"
      },
      {
        "name": "작은바람의속성석",
        "quantity": "5개"
      },
      {
        "name": "단풍석",
        "quantity": "2개"
      },
      {
        "name": "오색가루",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "정기의구슬(雷)",
    "yield": "1개",
    "crafting_fee": "200만",
    "ingredients": [
      {
        "name": "정기의구슬조각(雷)",
        "quantity": "10개"
      },
      {
        "name": "작은뇌전의속성석",
        "quantity": "5개"
      },
      {
        "name": "뇌정석",
        "quantity": "2개"
      },
      {
        "name": "오색가루",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "정기의구슬(水)",
    "yield": "1개",
    "crafting_fee": "200만",
    "ingredients": [
      {
        "name": "정기의구슬조각(水)",
        "quantity": "10개"
      },
      {
        "name": "작은물의속성석",
        "quantity": "5개"
      },
      {
        "name": "결빙석",
        "quantity": "2개"
      },
      {
        "name": "오색가루",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "정기의구슬(火)",
    "yield": "1개",
    "crafting_fee": "200만",
    "ingredients": [
      {
        "name": "정기의구슬조각(火)",
        "quantity": "10개"
      },
      {
        "name": "작은불의속성석",
        "quantity": "5개"
      },
      {
        "name": "화염석",
        "quantity": "2개"
      },
      {
        "name": "오색가루",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "정기의구슬(地)",
    "yield": "1개",
    "crafting_fee": "200만",
    "ingredients": [
      {
        "name": "정기의구슬조각(地)",
        "quantity": "10개"
      },
      {
        "name": "작은땅의속성석",
        "quantity": "5개"
      },
      {
        "name": "땅의정령석",
        "quantity": "2개"
      },
      {
        "name": "오색가루",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "악몽의구슬(土)",
    "yield": "1개",
    "crafting_fee": "500만",
    "ingredients": [
      {
        "name": "검은 기운의 결정체",
        "quantity": "20개"
      },
      {
        "name": "땅의속성석",
        "quantity": "1개"
      },
      {
        "name": "불의인장",
        "quantity": "10개"
      },
      {
        "name": "물의인장",
        "quantity": "10개"
      },
      {
        "name": "바람의인장",
        "quantity": "10개"
      },
      {
        "name": "뇌의인장",
        "quantity": "10개"
      },
      {
        "name": "해의인장",
        "quantity": "2개"
      },
      {
        "name": "달의인장",
        "quantity": "2개"
      },
      {
        "name": "오색가루",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "악몽의결정체(土)",
    "yield": "1개",
    "crafting_fee": "1천만",
    "ingredients": [
      {
        "name": "악몽의결정체(水)",
        "quantity": "5개"
      },
      {
        "name": "악몽의결정체(雷)",
        "quantity": "5개"
      },
      {
        "name": "악몽의결정체(風)",
        "quantity": "5개"
      },
      {
        "name": "악몽의결정체(火)",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "사원서판",
    "yield": "1개",
    "crafting_fee": "1천만",
    "ingredients": [
      {
        "name": "기억의서판(火)",
        "quantity": "1개"
      },
      {
        "name": "기억의서판(水)",
        "quantity": "1개"
      },
      {
        "name": "기억의서판(風)",
        "quantity": "1개"
      },
      {
        "name": "기억의서판(雷)",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "파괴와 혼돈의 이야기(土)",
    "yield": "1개",
    "crafting_fee": "-",
    "ingredients": [
      {
        "name": "파괴와 혼돈의 이야기(火)",
        "quantity": "1개"
      },
      {
        "name": "파괴와 혼돈의 이야기(水)",
        "quantity": "1개"
      },
      {
        "name": "파괴와 혼돈의 이야기(風)",
        "quantity": "1개"
      },
      {
        "name": "파괴와 혼돈의 이야기(雷)",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "호선의인형",
    "yield": "1개",
    "crafting_fee": "1억",
    "ingredients": [
      {
        "name": "정기의구슬(雷)",
        "quantity": "10개"
      },
      {
        "name": "뇌전의속성석",
        "quantity": "10개"
      },
      {
        "name": "호선의번개구슬",
        "quantity": "30개"
      },
      {
        "name": "뇌전구슬",
        "quantity": "1개"
      },
      {
        "name": "황금색알",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "람채화의 인형",
    "yield": "1개",
    "crafting_fee": "1억",
    "ingredients": [
      {
        "name": "얼음구슬",
        "quantity": "5개"
      },
      {
        "name": "람채화의 꽃바구니",
        "quantity": "30개"
      },
      {
        "name": "물의속성석",
        "quantity": "10개"
      },
      {
        "name": "정기의구슬(水)",
        "quantity": "10개"
      },
      {
        "name": "푸른색알",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "하선고의 인형",
    "yield": "1개",
    "crafting_fee": "1억",
    "ingredients": [
      {
        "name": "금골선",
        "quantity": "1개"
      },
      {
        "name": "깨진구슬",
        "quantity": "30개"
      },
      {
        "name": "뇌전의속성석",
        "quantity": "15개"
      },
      {
        "name": "정기의구슬(雷)",
        "quantity": "15개"
      },
      {
        "name": "황금색알",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "장과로의 인형",
    "yield": "1개",
    "crafting_fee": "1억",
    "ingredients": [
      {
        "name": "야마의지팡이",
        "quantity": "1개"
      },
      {
        "name": "부러진 요도",
        "quantity": "30개"
      },
      {
        "name": "불의속성석",
        "quantity": "15개"
      },
      {
        "name": "정기의구슬(火)",
        "quantity": "15개"
      },
      {
        "name": "붉은색알",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "철괴리의 인형",
    "yield": "1개",
    "crafting_fee": "1억",
    "ingredients": [
      {
        "name": "천황봉",
        "quantity": "1개"
      },
      {
        "name": "야차의 부서진 창",
        "quantity": "30개"
      },
      {
        "name": "바람의속성석",
        "quantity": "15개"
      },
      {
        "name": "정기의구슬(風)",
        "quantity": "15개"
      },
      {
        "name": "백은색알",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "한상자의 인형",
    "yield": "1개",
    "crafting_fee": "1억",
    "ingredients": [
      {
        "name": "백연염주",
        "quantity": "1개"
      },
      {
        "name": "루드라의 끊어진 활",
        "quantity": "30개"
      },
      {
        "name": "물의속성석",
        "quantity": "15개"
      },
      {
        "name": "정기의구슬(水)",
        "quantity": "15개"
      },
      {
        "name": "푸른색알",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "종리권의 인형",
    "yield": "1개",
    "crafting_fee": "1억",
    "ingredients": [
      {
        "name": "여의다라니부",
        "quantity": "1개"
      },
      {
        "name": "원망이 깃든 검",
        "quantity": "30개"
      },
      {
        "name": "땅의속성석",
        "quantity": "10개"
      },
      {
        "name": "정기의구슬(地)",
        "quantity": "10개"
      },
      {
        "name": "초록색알",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "홍염강세봉",
    "yield": "1개",
    "crafting_fee": "2억",
    "ingredients": [
      {
        "name": "힘의기억",
        "quantity": "150개"
      },
      {
        "name": "봉인의돌",
        "quantity": "2개"
      },
      {
        "name": "사원서판",
        "quantity": "20개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "청혼상류봉",
    "yield": "1개",
    "crafting_fee": "2억",
    "ingredients": [
      {
        "name": "힘의기억",
        "quantity": "150개"
      },
      {
        "name": "봉인의돌",
        "quantity": "2개"
      },
      {
        "name": "사원서판",
        "quantity": "20개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "무신의 증장천왕",
    "yield": "1개",
    "crafting_fee": "3억",
    "ingredients": [
      {
        "name": "악몽의구슬(雷)",
        "quantity": "3개"
      },
      {
        "name": "악몽의결정체(雷)",
        "quantity": "10개"
      },
      {
        "name": "귀멸의 인형",
        "quantity": "1개"
      },
      {
        "name": "원망이 깃든 갑옷 조각",
        "quantity": "10개"
      },
      {
        "name": "절망이 깃든 투구 조각",
        "quantity": "5개"
      },
      {
        "name": "속성의가루",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "무신의 다문천왕",
    "yield": "1개",
    "crafting_fee": "3억",
    "ingredients": [
      {
        "name": "악몽의구슬(水)",
        "quantity": "3개"
      },
      {
        "name": "악몽의결정체(水)",
        "quantity": "10개"
      },
      {
        "name": "귀멸의 인형",
        "quantity": "1개"
      },
      {
        "name": "원망이 깃든 갑옷 조각",
        "quantity": "10개"
      },
      {
        "name": "절망이 깃든 투구 조각",
        "quantity": "5개"
      },
      {
        "name": "속성의가루",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "무신의 지국천왕",
    "yield": "1개",
    "crafting_fee": "3억",
    "ingredients": [
      {
        "name": "악몽의구슬(火)",
        "quantity": "3개"
      },
      {
        "name": "악몽의결정체(火)",
        "quantity": "10개"
      },
      {
        "name": "귀멸의 인형",
        "quantity": "1개"
      },
      {
        "name": "원망이 깃든 갑옷 조각",
        "quantity": "10개"
      },
      {
        "name": "절망이 깃든 투구 조각",
        "quantity": "5개"
      },
      {
        "name": "속성의가루",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "무신의 광목천왕",
    "yield": "1개",
    "crafting_fee": "3억",
    "ingredients": [
      {
        "name": "악몽의구슬(風)",
        "quantity": "3개"
      },
      {
        "name": "악몽의결정체(風)",
        "quantity": "10개"
      },
      {
        "name": "귀멸의 인형",
        "quantity": "1개"
      },
      {
        "name": "원망이 깃든 갑옷 조각",
        "quantity": "10개"
      },
      {
        "name": "절망이 깃든 투구 조각",
        "quantity": "5개"
      },
      {
        "name": "속성의가루",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "안행진",
    "yield": "1개",
    "crafting_fee": "1천만",
    "ingredients": [
      {
        "name": "심연의정수",
        "quantity": "1개"
      },
      {
        "name": "정기의구슬(雷)",
        "quantity": "3개"
      },
      {
        "name": "조각난 진형서",
        "quantity": "10개"
      },
      {
        "name": "힘의근원",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "어린진",
    "yield": "1개",
    "crafting_fee": "1억",
    "ingredients": [
      {
        "name": "심연의정수",
        "quantity": "2개"
      },
      {
        "name": "정기의구슬(水)",
        "quantity": "3개"
      },
      {
        "name": "정기의구슬(火)",
        "quantity": "3개"
      },
      {
        "name": "조각난 진형서",
        "quantity": "20개"
      },
      {
        "name": "불의결정체",
        "quantity": "10개"
      },
      {
        "name": "물의결정체",
        "quantity": "10개"
      },
      {
        "name": "힘의근원",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "학익진",
    "yield": "1개",
    "crafting_fee": "2억",
    "ingredients": [
      {
        "name": "심연의정수",
        "quantity": "2개"
      },
      {
        "name": "정기의구슬(雷)",
        "quantity": "10개"
      },
      {
        "name": "정기의구슬(風)",
        "quantity": "10개"
      },
      {
        "name": "불안정한 진형서",
        "quantity": "100개"
      },
      {
        "name": "뇌전의결정체",
        "quantity": "20개"
      },
      {
        "name": "바람의결정체",
        "quantity": "20개"
      },
      {
        "name": "힘의근원",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "층진",
    "yield": "1개",
    "crafting_fee": "5억",
    "ingredients": [
      {
        "name": "심연의정수",
        "quantity": "3개"
      },
      {
        "name": "정기의구슬(雷)",
        "quantity": "10개"
      },
      {
        "name": "정기의구슬(火)",
        "quantity": "10개"
      },
      {
        "name": "불안정한 진형서",
        "quantity": "200개"
      },
      {
        "name": "뇌전의결정체",
        "quantity": "30개"
      },
      {
        "name": "불의결정체",
        "quantity": "30개"
      },
      {
        "name": "힘의근원",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "방원진",
    "yield": "1개",
    "crafting_fee": "5억",
    "ingredients": [
      {
        "name": "심연의정수",
        "quantity": "3개"
      },
      {
        "name": "정기의구슬(地)",
        "quantity": "5개"
      },
      {
        "name": "정기의구슬(風)",
        "quantity": "10개"
      },
      {
        "name": "불안정한 진형서",
        "quantity": "300개"
      },
      {
        "name": "악몽의 정수",
        "quantity": "10개"
      },
      {
        "name": "힘의근원",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "불의진법",
    "yield": "1개",
    "crafting_fee": "1천만",
    "ingredients": [
      {
        "name": "심연의정수",
        "quantity": "1개"
      },
      {
        "name": "화염석",
        "quantity": "15개"
      },
      {
        "name": "찢어진 진법서",
        "quantity": "10개"
      },
      {
        "name": "힘의근원",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "물의진법",
    "yield": "1개",
    "crafting_fee": "1천만",
    "ingredients": [
      {
        "name": "심연의정수",
        "quantity": "1개"
      },
      {
        "name": "결빙석",
        "quantity": "15개"
      },
      {
        "name": "찢어진 진법서",
        "quantity": "10개"
      },
      {
        "name": "힘의근원",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "바람의진법",
    "yield": "1개",
    "crafting_fee": "1천만",
    "ingredients": [
      {
        "name": "심연의정수",
        "quantity": "1개"
      },
      {
        "name": "단풍석",
        "quantity": "15개"
      },
      {
        "name": "찢어진 진법서",
        "quantity": "10개"
      },
      {
        "name": "힘의근원",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "뇌의진법",
    "yield": "1개",
    "crafting_fee": "1천만",
    "ingredients": [
      {
        "name": "심연의정수",
        "quantity": "1개"
      },
      {
        "name": "뇌정석",
        "quantity": "15개"
      },
      {
        "name": "찢어진 진법서",
        "quantity": "10개"
      },
      {
        "name": "힘의근원",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "바람정령 몬스터 증서(꿀벌)",
    "yield": "1개",
    "crafting_fee": "500만",
    "ingredients": [
      {
        "name": "정기의구슬(風)",
        "quantity": "5개"
      },
      {
        "name": "바람의정령석",
        "quantity": "20개"
      },
      {
        "name": "단풍석",
        "quantity": "20개"
      },
      {
        "name": "봉인의돌",
        "quantity": "9개"
      },
      {
        "name": "봉인의서",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "불정령 몬스터 증서(새끼불도마뱀)",
    "yield": "1개",
    "crafting_fee": "500만",
    "ingredients": [
      {
        "name": "정기의구슬(火)",
        "quantity": "5개"
      },
      {
        "name": "불의정령석",
        "quantity": "20개"
      },
      {
        "name": "화염석",
        "quantity": "20개"
      },
      {
        "name": "봉인의돌",
        "quantity": "9개"
      },
      {
        "name": "봉인의서",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "물정령 몬스터 증서(어린수인)",
    "yield": "1개",
    "crafting_fee": "500만",
    "ingredients": [
      {
        "name": "정기의구슬(水)",
        "quantity": "5개"
      },
      {
        "name": "물의정령석",
        "quantity": "20개"
      },
      {
        "name": "결빙석",
        "quantity": "20개"
      },
      {
        "name": "봉인의돌",
        "quantity": "9개"
      },
      {
        "name": "봉인의서",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "번개정령 몬스터 증서(삼미호)",
    "yield": "1개",
    "crafting_fee": "500만",
    "ingredients": [
      {
        "name": "정기의구슬(雷)",
        "quantity": "5개"
      },
      {
        "name": "뇌전의정령석",
        "quantity": "20개"
      },
      {
        "name": "뇌정석",
        "quantity": "20개"
      },
      {
        "name": "봉인의돌",
        "quantity": "9개"
      },
      {
        "name": "봉인의서",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "땅정령 몬스터 증서(어린백웅)",
    "yield": "1개",
    "crafting_fee": "500만",
    "ingredients": [
      {
        "name": "정기의구슬(地)",
        "quantity": "5개"
      },
      {
        "name": "땅의정령석",
        "quantity": "20개"
      },
      {
        "name": "땅의속성석",
        "quantity": "5개"
      },
      {
        "name": "봉인의돌",
        "quantity": "9개"
      },
      {
        "name": "봉인의서",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "몬스터 증서(코끼리 주술사)-(거래불가)",
    "yield": "1개",
    "crafting_fee": "2억",
    "ingredients": [
      {
        "name": "원망이 깃든 지팡이",
        "quantity": "50개"
      },
      {
        "name": "귀멸의 인형",
        "quantity": "2개"
      },
      {
        "name": "원기단",
        "quantity": "1개"
      },
      {
        "name": "봉인의돌",
        "quantity": "20개"
      },
      {
        "name": "봉인의서",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "몬스터 증서(원숭이 주술사)-(거래불가)",
    "yield": "1개",
    "crafting_fee": "2억",
    "ingredients": [
      {
        "name": "원한이 깃든 지팡이",
        "quantity": "50개"
      },
      {
        "name": "귀멸의 인형",
        "quantity": "2개"
      },
      {
        "name": "원기단",
        "quantity": "1개"
      },
      {
        "name": "봉인의돌",
        "quantity": "20개"
      },
      {
        "name": "봉인의서",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고급 소탕령(거래불가)",
    "yield": "1개",
    "crafting_fee": "2000만",
    "ingredients": [
      {
        "name": "질긴머리카락",
        "quantity": "5개"
      },
      {
        "name": "불도마뱀의꼬리",
        "quantity": "5개"
      },
      {
        "name": "딱딱한다리껍질",
        "quantity": "5개"
      },
      {
        "name": "검붉은가죽",
        "quantity": "5개"
      },
      {
        "name": "소형 분노의 정수(거래불가)",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "청동검(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "청동검의조각(거래불가)",
        "quantity": "20개"
      },
      {
        "name": "청동",
        "quantity": "300개"
      },
      {
        "name": "아연",
        "quantity": "100개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "철제검(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "철제검 조각(거래불가)",
        "quantity": "20개"
      },
      {
        "name": "철괴",
        "quantity": "500개"
      },
      {
        "name": "주석",
        "quantity": "300개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "청동거울(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "청동거울의조각(거래불가)",
        "quantity": "20개"
      },
      {
        "name": "청동",
        "quantity": "300개"
      },
      {
        "name": "아연",
        "quantity": "100개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "청동방울(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "청동방울의조각(거래불가)",
        "quantity": "20개"
      },
      {
        "name": "청동",
        "quantity": "300개"
      },
      {
        "name": "아연",
        "quantity": "100개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "신검의거푸집",
    "yield": "1개",
    "ingredients": [
      {
        "name": "낡은서판-차원의서",
        "quantity": "10개"
      },
      {
        "name": "낡은서판-생명의서",
        "quantity": "10개"
      },
      {
        "name": "낡은서판-죽음의서",
        "quantity": "10개"
      },
      {
        "name": "낡은서판-마법의서",
        "quantity": "10개"
      },
      {
        "name": "낡은서판-환생의서",
        "quantity": "10개"
      },
      {
        "name": "신성수",
        "quantity": "100개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "용비늘검",
    "yield": "1개",
    "ingredients": [
      {
        "name": "황룡의비늘",
        "quantity": "30개"
      },
      {
        "name": "화룡의불꽃",
        "quantity": "30개"
      },
      {
        "name": "신목의씨앗",
        "quantity": "30개"
      },
      {
        "name": "불꽃씨앗",
        "quantity": "30개"
      },
      {
        "name": "신검의조각",
        "quantity": "30개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "힘의근원",
    "yield": "1개",
    "ingredients": [
      {
        "name": "신수의근원(백호)",
        "quantity": "5개"
      },
      {
        "name": "신수의근원(주작)",
        "quantity": "5개"
      },
      {
        "name": "신수의근원(현무)",
        "quantity": "5개"
      },
      {
        "name": "신수의근원(청룡)",
        "quantity": "5개"
      },
      {
        "name": "신수의근원(기린)",
        "quantity": "5개"
      },
      {
        "name": "심연의정수",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "얇은금판",
    "yield": "1개",
    "ingredients": [
      {
        "name": "금빛 날개조각",
        "quantity": "20개"
      },
      {
        "name": "금강석가락지",
        "quantity": "10개"
      },
      {
        "name": "정제된 황금모래",
        "quantity": "30개"
      },
      {
        "name": "황금고리",
        "quantity": "20개"
      },
      {
        "name": "금장허리띠 조각",
        "quantity": "10개"
      },
      {
        "name": "시간의가루",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "금관장식물",
    "yield": "1개",
    "ingredients": [
      {
        "name": "곡옥 목걸이조각",
        "quantity": "20개"
      },
      {
        "name": "샤오링의 노리개",
        "quantity": "30개"
      },
      {
        "name": "황옥 노리개",
        "quantity": "20개"
      },
      {
        "name": "원화의 비녀",
        "quantity": "20개"
      },
      {
        "name": "황금장신구조각",
        "quantity": "10개"
      },
      {
        "name": "시간의가루",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고급가죽 묶음",
    "yield": "1개",
    "ingredients": [
      {
        "name": "정제된가죽",
        "quantity": "30개"
      },
      {
        "name": "마수의가죽",
        "quantity": "30개"
      },
      {
        "name": "비사의날개가죽",
        "quantity": "30개"
      },
      {
        "name": "사막기린의 가죽",
        "quantity": "30개"
      },
      {
        "name": "설인의 털가죽",
        "quantity": "30개"
      },
      {
        "name": "시간의가루",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "칠흑의주괴",
    "yield": "1개",
    "ingredients": [
      {
        "name": "의천검",
        "quantity": "1개"
      },
      {
        "name": "신의금속",
        "quantity": "10개"
      },
      {
        "name": "어둠의 결정체",
        "quantity": "10개"
      },
      {
        "name": "고대신수의정수",
        "quantity": "30개"
      },
      {
        "name": "생명의정수",
        "quantity": "10개"
      },
      {
        "name": "시간의가루",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고대 주작의 석판(火)(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "조각난 주작의 석판(거래불가)",
        "quantity": "50개"
      },
      {
        "name": "사신의 정기(火)",
        "quantity": "20개"
      },
      {
        "name": "시간의가루",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고대 현무의 석판(水)(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "조각난 현무의 석판(거래불가)",
        "quantity": "50개"
      },
      {
        "name": "사신의 정기(水)",
        "quantity": "20개"
      },
      {
        "name": "시간의가루",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고대 백호의 석판(風)(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "조각난 백호의 석판(거래불가)",
        "quantity": "50개"
      },
      {
        "name": "사신의 정기(風)",
        "quantity": "20개"
      },
      {
        "name": "시간의가루",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고대 청룡의 석판(雷)(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "조각난 청룡의 석판(거래불가)",
        "quantity": "50개"
      },
      {
        "name": "사신의 정기(雷)",
        "quantity": "20개"
      },
      {
        "name": "시간의가루",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고대 기린의 석판(土)(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "조각난 기린의 석판(거래불가)",
        "quantity": "50개"
      },
      {
        "name": "사신의 정기(土)",
        "quantity": "20개"
      },
      {
        "name": "시간의가루",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "빛나는 자마노(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "자마노 조각(거래불가)",
        "quantity": "20개"
      },
      {
        "name": "시간의가루",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "빛나는 홍옥(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "홍옥 조각(거래불가)",
        "quantity": "30개"
      },
      {
        "name": "별의파편(火)(거래불가)",
        "quantity": "20개"
      },
      {
        "name": "시간의가루",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "빛나는 청옥(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "청옥 조각(거래불가)",
        "quantity": "30개"
      },
      {
        "name": "별의파편(水)(거래불가)",
        "quantity": "20개"
      },
      {
        "name": "시간의가루",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "빛나는 녹주석(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "녹주석 조각(거래불가)",
        "quantity": "30개"
      },
      {
        "name": "별의파편(風)(거래불가)",
        "quantity": "20개"
      },
      {
        "name": "시간의가루",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "빛나는 황옥(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "황옥 조각(거래불가)",
        "quantity": "30개"
      },
      {
        "name": "별의파편(雷)(거래불가)",
        "quantity": "20개"
      },
      {
        "name": "시간의가루",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "빛나는 흑요석(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "흑요석 조각(거래불가)",
        "quantity": "30개"
      },
      {
        "name": "별의파편(土)(거래불가)",
        "quantity": "20개"
      },
      {
        "name": "시간의가루",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "불타는 주작의 석판(火)(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "고대 주작의 석판(火)(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "불타는 사신의 인장(火)",
        "quantity": "10개"
      },
      {
        "name": "시간의가루",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "얼어붙은 현무의 석판(水)(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "고대 현무의 석판(水)(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "얼어붙은 사신의 인장(水)",
        "quantity": "10개"
      },
      {
        "name": "시간의가루",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "역류하는 백호의 석판(風)(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "고대 백호의 석판(風)(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "역류하는 사신의 인장(風)",
        "quantity": "10개"
      },
      {
        "name": "시간의가루",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "번개치는 청룡의 석판(雷)(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "고대 청룡의 석판(雷)(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "번개치는 사신의 인장(雷)",
        "quantity": "10개"
      },
      {
        "name": "시간의가루",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "격돌하는 기린의 석판(土)(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "고대 기린의 석판(土)(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "격돌하는 사신의 인장(土)",
        "quantity": "10개"
      },
      {
        "name": "시간의가루",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "업화의 항아리",
    "yield": "1개",
    "ingredients": [
      {
        "name": "성스러운 별(火)",
        "quantity": "10개"
      },
      {
        "name": "성스러운 별(水)",
        "quantity": "10개"
      },
      {
        "name": "성스러운 별(風)",
        "quantity": "10개"
      },
      {
        "name": "성스러운 별(雷)",
        "quantity": "10개"
      },
      {
        "name": "힘의기억",
        "quantity": "20개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "삼인검(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "철제검(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "고대 주작의 석판(火)(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "고대 현무의 석판(水)(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "고대 백호의 석판(風)(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "고대 청룡의 석판(雷)(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "고대 기린의 석판(土)(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "힘의근원",
        "quantity": "5개"
      },
      {
        "name": "1억 지전",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "칠지도(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "청동검(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "청동거울(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "청동방울(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "신검의거푸집",
        "quantity": "1개"
      },
      {
        "name": "용비늘검",
        "quantity": "1개"
      },
      {
        "name": "힘의근원",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "眞 칠지도(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "칠지도(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "칠흑의주괴",
        "quantity": "1개"
      },
      {
        "name": "청동가루(거래불가)",
        "quantity": "20개"
      },
      {
        "name": "신검의거푸집",
        "quantity": "1개"
      },
      {
        "name": "1억 지전",
        "quantity": "1개"
      },
      {
        "name": "힘의근원",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "벽사의 무복(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "벽사의 무복 제조서(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "벽사용 옷감(거래불가)",
        "quantity": "20개"
      },
      {
        "name": "벽사용 허리띠(거래불가)",
        "quantity": "20개"
      },
      {
        "name": "빛나는 자마노(거래불가)",
        "quantity": "10개"
      },
      {
        "name": "황금장신구조각",
        "quantity": "10개"
      },
      {
        "name": "고대 주작의 석판(火)(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "고대 현무의 석판(水)(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "고대 백호의 석판(風)(거래불가)",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "벽사의 머리(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "벽사의 머리 제조서(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "벽사용 옷감(거래불가)",
        "quantity": "20개"
      },
      {
        "name": "벽사용 끈(거래불가)",
        "quantity": "20개"
      },
      {
        "name": "빛나는 자마노(거래불가)",
        "quantity": "5개"
      },
      {
        "name": "황금장신구조각",
        "quantity": "10개"
      },
      {
        "name": "고대 청룡의 석판(雷)(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "고대 기린의 석판(土)(거래불가)",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고대금관(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "청동검(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "청동거울(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "청동방울(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "얇은금판",
        "quantity": "1개"
      },
      {
        "name": "금관장식물",
        "quantity": "1개"
      },
      {
        "name": "힘의근원",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "개마갑주(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "청동검(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "청동거울(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "청동방울(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "얇은금판",
        "quantity": "1개"
      },
      {
        "name": "고급가죽 묶음",
        "quantity": "1개"
      },
      {
        "name": "힘의근원",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "현무피갑",
    "yield": "1개",
    "ingredients": [
      {
        "name": "현무피갑제조서",
        "quantity": "1개"
      },
      {
        "name": "유물조각상부(거래불가)",
        "quantity": "200개"
      },
      {
        "name": "유물조각하부(거래불가)",
        "quantity": "300개"
      },
      {
        "name": "시간의가루",
        "quantity": "50개"
      },
      {
        "name": "신수의근원(현무)",
        "quantity": "10개"
      },
      {
        "name": "힘의근원",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "현무투",
    "yield": "1개",
    "ingredients": [
      {
        "name": "현무투제조서",
        "quantity": "1개"
      },
      {
        "name": "유물조각상부(거래불가)",
        "quantity": "300개"
      },
      {
        "name": "유물조각하부(거래불가)",
        "quantity": "200개"
      },
      {
        "name": "시간의가루",
        "quantity": "30개"
      },
      {
        "name": "신수의근원(현무)",
        "quantity": "10개"
      },
      {
        "name": "힘의근원",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "사인검(火)(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "삼인검(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "불타는 주작의 석판(火)(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "빛나는 홍옥(거래불가)",
        "quantity": "10개"
      },
      {
        "name": "힘의근원",
        "quantity": "5개"
      },
      {
        "name": "1억 지전",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "사인검(風)(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "삼인검(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "역류하는 백호의 석판(風)(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "빛나는 녹주석(거래불가)",
        "quantity": "10개"
      },
      {
        "name": "힘의근원",
        "quantity": "5개"
      },
      {
        "name": "1억 지전",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "사인검(水)(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "삼인검(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "얼어붙은 현무의 석판(水)(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "빛나는 청옥(거래불가)",
        "quantity": "10개"
      },
      {
        "name": "힘의근원",
        "quantity": "5개"
      },
      {
        "name": "1억 지전",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "사인검(雷)(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "삼인검(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "번개치는 청룡의 석판(雷)(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "빛나는 황옥(거래불가)",
        "quantity": "10개"
      },
      {
        "name": "힘의근원",
        "quantity": "5개"
      },
      {
        "name": "1억 지전",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "사인검(土)(거래불가)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "삼인검(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "격돌하는 기린의 석판(土)(거래불가)",
        "quantity": "1개"
      },
      {
        "name": "빛나는 흑요석(거래불가)",
        "quantity": "10개"
      },
      {
        "name": "힘의근원",
        "quantity": "5개"
      },
      {
        "name": "1억 지전",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "천라반지",
    "yield": "1개",
    "ingredients": [
      {
        "name": "업화의 항아리",
        "quantity": "2개"
      },
      {
        "name": "고대신수의정수",
        "quantity": "200개"
      },
      {
        "name": "유물조각상부(거래불가)",
        "quantity": "50개"
      },
      {
        "name": "유물조각하부(거래불가)",
        "quantity": "50개"
      },
      {
        "name": "자마노 조각(거래불가)",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "속성의가루",
    "yield": "1개",
    "crafting_fee": "100만",
    "ingredients": [
      {
        "name": "봉황의깃털",
        "quantity": "1개"
      },
      {
        "name": "작은불의속성석",
        "quantity": "1개"
      },
      {
        "name": "작은물의속성석",
        "quantity": "1개"
      },
      {
        "name": "작은바람의속성석",
        "quantity": "1개"
      },
      {
        "name": "작은뇌전의속성석",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "화염의 팔찌",
    "yield": "1개",
    "ingredients": [
      {
        "name": "불의속성석",
        "quantity": "5개"
      },
      {
        "name": "화염석",
        "quantity": "25개"
      },
      {
        "name": "화염구렁이의가죽",
        "quantity": "25개"
      },
      {
        "name": "홍작의타액",
        "quantity": "25개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "낙수의 팔찌",
    "yield": "1개",
    "ingredients": [
      {
        "name": "물의속성석",
        "quantity": "5개"
      },
      {
        "name": "결빙석",
        "quantity": "25개"
      },
      {
        "name": "거대꼬리지느러미",
        "quantity": "25개"
      },
      {
        "name": "북해빙정",
        "quantity": "25개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "뇌격의 팔찌",
    "yield": "1개",
    "ingredients": [
      {
        "name": "뇌전의속성석",
        "quantity": "5개"
      },
      {
        "name": "뇌정석",
        "quantity": "25개"
      },
      {
        "name": "고독주",
        "quantity": "25개"
      },
      {
        "name": "여의주",
        "quantity": "25개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "풍백의 팔찌",
    "yield": "1개",
    "ingredients": [
      {
        "name": "바람의속성석",
        "quantity": "5개"
      },
      {
        "name": "단풍석",
        "quantity": "25개"
      },
      {
        "name": "망가진 손목띠",
        "quantity": "25개"
      },
      {
        "name": "광효갈기",
        "quantity": "25개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "지령의 팔찌",
    "yield": "1개",
    "ingredients": [
      {
        "name": "땅의속성석",
        "quantity": "5개"
      },
      {
        "name": "정기의구슬(地)",
        "quantity": "5개"
      },
      {
        "name": "악승의염주알",
        "quantity": "25개"
      },
      {
        "name": "정제된가죽",
        "quantity": "25개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "화염의 각반",
    "yield": "1개",
    "ingredients": [
      {
        "name": "불의속성석",
        "quantity": "5개"
      },
      {
        "name": "범자석판(캉)",
        "quantity": "25개"
      },
      {
        "name": "태양의 조각",
        "quantity": "25개"
      },
      {
        "name": "불의결정",
        "quantity": "25개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "낙수의 각반",
    "yield": "1개",
    "ingredients": [
      {
        "name": "물의속성석",
        "quantity": "5개"
      },
      {
        "name": "범자석판(베이)",
        "quantity": "25개"
      },
      {
        "name": "바다의 눈물",
        "quantity": "25개"
      },
      {
        "name": "물의결정",
        "quantity": "25개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "뇌격의 각반",
    "yield": "1개",
    "ingredients": [
      {
        "name": "뇌전의속성석",
        "quantity": "5개"
      },
      {
        "name": "범자석판(마)",
        "quantity": "25개"
      },
      {
        "name": "폭뢰석",
        "quantity": "25개"
      },
      {
        "name": "뇌전의결정",
        "quantity": "25개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "풍백의 각반",
    "yield": "1개",
    "ingredients": [
      {
        "name": "바람의속성석",
        "quantity": "5개"
      },
      {
        "name": "범자석판(방)",
        "quantity": "25개"
      },
      {
        "name": "광기의 뿔",
        "quantity": "25개"
      },
      {
        "name": "바람의결정",
        "quantity": "25개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "지령의 각반",
    "yield": "1개",
    "ingredients": [
      {
        "name": "땅의속성석",
        "quantity": "5개"
      },
      {
        "name": "땅의정령석",
        "quantity": "25개"
      },
      {
        "name": "아가수라의 비늘",
        "quantity": "25개"
      },
      {
        "name": "생명의정수",
        "quantity": "25개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "불타는 사신의 팔찌",
    "yield": "1개",
    "ingredients": [
      {
        "name": "+5 화염의 팔찌",
        "quantity": "1개"
      },
      {
        "name": "불타는 사신의 인장(火)",
        "quantity": "10개"
      },
      {
        "name": "범자석판(캉)",
        "quantity": "50개"
      },
      {
        "name": "불타는 수호신의 심장",
        "quantity": "5개"
      },
      {
        "name": "불의인장",
        "quantity": "25개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "얼어붙은 사신의 팔찌",
    "yield": "1개",
    "ingredients": [
      {
        "name": "+5 낙수의 팔찌",
        "quantity": "1개"
      },
      {
        "name": "얼어붙은 사신의 인장(水)",
        "quantity": "10개"
      },
      {
        "name": "범자석판(베이)",
        "quantity": "50개"
      },
      {
        "name": "얼어붙은 수호신의 심장",
        "quantity": "5개"
      },
      {
        "name": "물의인장",
        "quantity": "25개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "역류하는 사신의 팔찌",
    "yield": "1개",
    "ingredients": [
      {
        "name": "+5 풍백의 팔찌",
        "quantity": "1개"
      },
      {
        "name": "역류하는 사신의 인장(風)",
        "quantity": "10개"
      },
      {
        "name": "범자석판(방)",
        "quantity": "50개"
      },
      {
        "name": "역류하는 수호신의 심장",
        "quantity": "5개"
      },
      {
        "name": "바람의인장",
        "quantity": "25개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "번개치는 사신의 팔찌",
    "yield": "1개",
    "ingredients": [
      {
        "name": "+5 뇌격의 팔찌",
        "quantity": "1개"
      },
      {
        "name": "번개치는 사신의 인장(雷)",
        "quantity": "10개"
      },
      {
        "name": "범자석판(마)",
        "quantity": "50개"
      },
      {
        "name": "번개치는 수호신의 심장",
        "quantity": "5개"
      },
      {
        "name": "뇌의인장",
        "quantity": "25개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "격돌하는 사신의 팔찌",
    "yield": "1개",
    "ingredients": [
      {
        "name": "+5 지령의 팔찌",
        "quantity": "1개"
      },
      {
        "name": "격돌하는 사신의 인장(土)",
        "quantity": "10개"
      },
      {
        "name": "땅의정령석",
        "quantity": "50개"
      },
      {
        "name": "땅의 속성 주괴",
        "quantity": "25개"
      },
      {
        "name": "고대 땅의 인장(土)",
        "quantity": "25개"
      },
      {
        "name": "격돌하는 사신의 팔찌 제조서",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "불타는 사신의 각반",
    "yield": "1개",
    "ingredients": [
      {
        "name": "+5 화염의 각반",
        "quantity": "1개"
      },
      {
        "name": "불타는 사신의 인장(火)",
        "quantity": "10개"
      },
      {
        "name": "범자석판(캉)",
        "quantity": "50개"
      },
      {
        "name": "불타는 수호신의 심장",
        "quantity": "5개"
      },
      {
        "name": "불의인장",
        "quantity": "25개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "얼어붙은 사신의 각반",
    "yield": "1개",
    "ingredients": [
      {
        "name": "+5 낙수의 각반",
        "quantity": "1개"
      },
      {
        "name": "얼어붙은 사신의 인장(水)",
        "quantity": "10개"
      },
      {
        "name": "범자석판(베이)",
        "quantity": "50개"
      },
      {
        "name": "얼어붙은 수호신의 심장",
        "quantity": "5개"
      },
      {
        "name": "물의인장",
        "quantity": "25개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "역류하는 사신의 각반",
    "yield": "1개",
    "ingredients": [
      {
        "name": "+5 풍백의 각반",
        "quantity": "1개"
      },
      {
        "name": "역류하는 사신의 인장(風)",
        "quantity": "10개"
      },
      {
        "name": "범자석판(방)",
        "quantity": "50개"
      },
      {
        "name": "역류하는 수호신의 심장",
        "quantity": "5개"
      },
      {
        "name": "바람의인장",
        "quantity": "25개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "번개치는 사신의 각반",
    "yield": "1개",
    "ingredients": [
      {
        "name": "+5 뇌격의 각반",
        "quantity": "1개"
      },
      {
        "name": "번개치는 사신의 인장(雷)",
        "quantity": "10개"
      },
      {
        "name": "범자석판(마)",
        "quantity": "50개"
      },
      {
        "name": "번개치는 수호신의 심장",
        "quantity": "5개"
      },
      {
        "name": "뇌의인장",
        "quantity": "25개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "격돌하는 사신의 각반",
    "yield": "1개",
    "ingredients": [
      {
        "name": "+5 지령의 각반",
        "quantity": "1개"
      },
      {
        "name": "격돌하는 사신의 인장(土)",
        "quantity": "10개"
      },
      {
        "name": "땅의정령석",
        "quantity": "50개"
      },
      {
        "name": "땅의 속성 주괴",
        "quantity": "25개"
      },
      {
        "name": "고대 땅의 인장(土)",
        "quantity": "25개"
      },
      {
        "name": "격돌하는 사신의 각반 제조서",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "기린의 뿔",
    "yield": "1개",
    "ingredients": [
      {
        "name": "두신의 팔찌",
        "quantity": "1개"
      },
      {
        "name": "원공의 팔찌",
        "quantity": "1개"
      },
      {
        "name": "누에의 목걸이",
        "quantity": "1개"
      },
      {
        "name": "기의 목걸이",
        "quantity": "1개"
      },
      {
        "name": "땅의결정",
        "quantity": "30개"
      },
      {
        "name": "혼마의뿔",
        "quantity": "30개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고급 백호의 발찌",
    "yield": "1개",
    "ingredients": [
      {
        "name": "백호의 발찌",
        "quantity": "1개"
      },
      {
        "name": "신수의근원(백호)",
        "quantity": "10개"
      },
      {
        "name": "봉인된힘의조각",
        "quantity": "50개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고급 청룡의 여의주",
    "yield": "1개",
    "ingredients": [
      {
        "name": "청룡의 여의주",
        "quantity": "1개"
      },
      {
        "name": "신수의근원(청룡)",
        "quantity": "10개"
      },
      {
        "name": "봉인된힘의조각",
        "quantity": "50개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고급 주작의 부리",
    "yield": "1개",
    "ingredients": [
      {
        "name": "주작의 부리",
        "quantity": "1개"
      },
      {
        "name": "신수의근원(주작)",
        "quantity": "10개"
      },
      {
        "name": "봉인된힘의조각",
        "quantity": "50개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고급 현무의 강침",
    "yield": "1개",
    "ingredients": [
      {
        "name": "현무의 강침",
        "quantity": "1개"
      },
      {
        "name": "신수의근원(현무)",
        "quantity": "10개"
      },
      {
        "name": "봉인된힘의조각",
        "quantity": "50개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고급 기린의 뿔",
    "yield": "1개",
    "ingredients": [
      {
        "name": "기린의 뿔",
        "quantity": "1개"
      },
      {
        "name": "신수의근원(기린)",
        "quantity": "10개"
      },
      {
        "name": "봉인된힘의조각",
        "quantity": "50개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "신수부 백호(白虎)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "수호부[인]",
        "quantity": "1개"
      },
      {
        "name": "수호부[해]",
        "quantity": "1개"
      },
      {
        "name": "수호부[자]",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "신수부 청룡(靑龍)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "수호부[진]",
        "quantity": "1개"
      },
      {
        "name": "수호부[오]",
        "quantity": "1개"
      },
      {
        "name": "수호부[묘]",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "신수부 주작(朱雀)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "수호부[유]",
        "quantity": "1개"
      },
      {
        "name": "수호부[신]",
        "quantity": "1개"
      },
      {
        "name": "수호부[미]",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "신수부 현무(玄武)",
    "yield": "1개",
    "ingredients": [
      {
        "name": "수호부[사]",
        "quantity": "1개"
      },
      {
        "name": "수호부[술]",
        "quantity": "1개"
      },
      {
        "name": "수호부[축]",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "천왕검",
    "yield": "1개",
    "ingredients": [
      {
        "name": "고급 기린의 뿔",
        "quantity": "1개"
      },
      {
        "name": "고급 주작의 부리",
        "quantity": "1개"
      },
      {
        "name": "지국천왕의 칼자루",
        "quantity": "50개"
      },
      {
        "name": "화염석",
        "quantity": "50개"
      },
      {
        "name": "각성석",
        "quantity": "2개"
      },
      {
        "name": "힘의근원",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "천왕비",
    "yield": "1개",
    "ingredients": [
      {
        "name": "고급 기린의 뿔",
        "quantity": "1개"
      },
      {
        "name": "고급 현무의 강침",
        "quantity": "1개"
      },
      {
        "name": "다문천왕의 비파조각",
        "quantity": "50개"
      },
      {
        "name": "결빙석",
        "quantity": "50개"
      },
      {
        "name": "각성석",
        "quantity": "2개"
      },
      {
        "name": "힘의근원",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "천왕주",
    "yield": "1개",
    "ingredients": [
      {
        "name": "고급 기린의 뿔",
        "quantity": "1개"
      },
      {
        "name": "고급 청룡의 여의주",
        "quantity": "1개"
      },
      {
        "name": "뇌룡주",
        "quantity": "50개"
      },
      {
        "name": "뇌정석",
        "quantity": "50개"
      },
      {
        "name": "각성석",
        "quantity": "2개"
      },
      {
        "name": "힘의근원",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "천왕극",
    "yield": "1개",
    "ingredients": [
      {
        "name": "고급 기린의 뿔",
        "quantity": "1개"
      },
      {
        "name": "고급 백호의 발찌",
        "quantity": "1개"
      },
      {
        "name": "검게물든 삼지창조각",
        "quantity": "50개"
      },
      {
        "name": "단풍석",
        "quantity": "50개"
      },
      {
        "name": "각성석",
        "quantity": "2개"
      },
      {
        "name": "힘의근원",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고급천왕극",
    "yield": "1개",
    "ingredients": [
      {
        "name": "천왕극",
        "quantity": "1개"
      },
      {
        "name": "불안정한바람의정기",
        "quantity": "10개"
      },
      {
        "name": "검게물든 삼지창조각",
        "quantity": "100개"
      },
      {
        "name": "단풍석",
        "quantity": "100개"
      },
      {
        "name": "각성석",
        "quantity": "3개"
      },
      {
        "name": "바람의속성석",
        "quantity": "10개"
      },
      {
        "name": "정기의구슬(風)",
        "quantity": "10개"
      },
      {
        "name": "1억 지전",
        "quantity": "3개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고급천왕주",
    "yield": "1개",
    "ingredients": [
      {
        "name": "천왕주",
        "quantity": "1개"
      },
      {
        "name": "불안정한뇌의정기",
        "quantity": "10개"
      },
      {
        "name": "뇌룡주",
        "quantity": "100개"
      },
      {
        "name": "뇌정석",
        "quantity": "100개"
      },
      {
        "name": "각성석",
        "quantity": "3개"
      },
      {
        "name": "뇌전의속성석",
        "quantity": "10개"
      },
      {
        "name": "정기의구슬(雷)",
        "quantity": "10개"
      },
      {
        "name": "1억 지전",
        "quantity": "3개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고급천왕검",
    "yield": "1개",
    "ingredients": [
      {
        "name": "천왕검",
        "quantity": "1개"
      },
      {
        "name": "불안정한불의정기",
        "quantity": "10개"
      },
      {
        "name": "지국천왕의 칼자루",
        "quantity": "100개"
      },
      {
        "name": "화염석",
        "quantity": "100개"
      },
      {
        "name": "각성석",
        "quantity": "3개"
      },
      {
        "name": "불의속성석",
        "quantity": "10개"
      },
      {
        "name": "정기의구슬(火)",
        "quantity": "10개"
      },
      {
        "name": "1억 지전",
        "quantity": "3개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고급천왕비",
    "yield": "1개",
    "ingredients": [
      {
        "name": "천왕비",
        "quantity": "1개"
      },
      {
        "name": "불안정한물의정기",
        "quantity": "10개"
      },
      {
        "name": "다문천왕의 비파조각",
        "quantity": "100개"
      },
      {
        "name": "결빙석",
        "quantity": "100개"
      },
      {
        "name": "각성석",
        "quantity": "3개"
      },
      {
        "name": "물의속성석",
        "quantity": "10개"
      },
      {
        "name": "정기의구슬(水)",
        "quantity": "10개"
      },
      {
        "name": "1억 지전",
        "quantity": "3개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "증장천왕부",
    "yield": "1개",
    "ingredients": [
      {
        "name": "신수부 청룡(靑龍)",
        "quantity": "1개"
      },
      {
        "name": "황금색알",
        "quantity": "1개"
      },
      {
        "name": "뇌전의속성석",
        "quantity": "5개"
      },
      {
        "name": "정기의구슬(雷)",
        "quantity": "3개"
      },
      {
        "name": "1억 지전",
        "quantity": "3개"
      },
      {
        "name": "힘의근원",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "광목천왕부",
    "yield": "1개",
    "ingredients": [
      {
        "name": "신수부 백호(白虎)",
        "quantity": "1개"
      },
      {
        "name": "백은색알",
        "quantity": "1개"
      },
      {
        "name": "바람의속성석",
        "quantity": "5개"
      },
      {
        "name": "정기의구슬(風)",
        "quantity": "3개"
      },
      {
        "name": "1억 지전",
        "quantity": "3개"
      },
      {
        "name": "힘의근원",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "지국천왕부",
    "yield": "1개",
    "ingredients": [
      {
        "name": "신수부 주작(朱雀)",
        "quantity": "1개"
      },
      {
        "name": "붉은색알",
        "quantity": "1개"
      },
      {
        "name": "불의속성석",
        "quantity": "5개"
      },
      {
        "name": "정기의구슬(火)",
        "quantity": "3개"
      },
      {
        "name": "1억 지전",
        "quantity": "3개"
      },
      {
        "name": "힘의근원",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "다문천왕부",
    "yield": "1개",
    "ingredients": [
      {
        "name": "신수부 현무(玄武)",
        "quantity": "1개"
      },
      {
        "name": "푸른색알",
        "quantity": "1개"
      },
      {
        "name": "물의속성석",
        "quantity": "5개"
      },
      {
        "name": "정기의구슬(水)",
        "quantity": "3개"
      },
      {
        "name": "1억 지전",
        "quantity": "3개"
      },
      {
        "name": "힘의근원",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "각성 지국천왕부",
    "yield": "1개",
    "ingredients": [
      {
        "name": "지국천왕부",
        "quantity": "1개"
      },
      {
        "name": "붉은색알",
        "quantity": "2개"
      },
      {
        "name": "각성석",
        "quantity": "5개"
      },
      {
        "name": "기억의서판(火)",
        "quantity": "100개"
      },
      {
        "name": "힘의기억",
        "quantity": "100개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "각성 증장천왕부",
    "yield": "1개",
    "ingredients": [
      {
        "name": "증장천왕부",
        "quantity": "1개"
      },
      {
        "name": "황금색알",
        "quantity": "2개"
      },
      {
        "name": "각성석",
        "quantity": "5개"
      },
      {
        "name": "기억의서판(雷)",
        "quantity": "100개"
      },
      {
        "name": "힘의기억",
        "quantity": "100개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "각성 광목천왕부",
    "yield": "1개",
    "ingredients": [
      {
        "name": "광목천왕부",
        "quantity": "1개"
      },
      {
        "name": "백은색알",
        "quantity": "2개"
      },
      {
        "name": "각성석",
        "quantity": "5개"
      },
      {
        "name": "기억의서판(風)",
        "quantity": "100개"
      },
      {
        "name": "힘의기억",
        "quantity": "100개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "각성 다문천왕부",
    "yield": "1개",
    "ingredients": [
      {
        "name": "다문천왕부",
        "quantity": "1개"
      },
      {
        "name": "푸른색알",
        "quantity": "2개"
      },
      {
        "name": "각성석",
        "quantity": "5개"
      },
      {
        "name": "기억의서판(水)",
        "quantity": "100개"
      },
      {
        "name": "힘의기억",
        "quantity": "100개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "명왕갑",
    "yield": "1개",
    "ingredients": [
      {
        "name": "고급 궁기의깃털",
        "quantity": "1개"
      },
      {
        "name": "악몽의구슬(水)",
        "quantity": "2개"
      },
      {
        "name": "악몽의 정수",
        "quantity": "20개"
      },
      {
        "name": "악몽의 인장",
        "quantity": "75개"
      },
      {
        "name": "악몽의결정체(水)",
        "quantity": "100개"
      },
      {
        "name": "혼의결정",
        "quantity": "75개"
      },
      {
        "name": "봉인의서",
        "quantity": "5개"
      },
      {
        "name": "각성석",
        "quantity": "3개"
      },
      {
        "name": "1억 지전",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "명왕궁",
    "yield": "1개",
    "ingredients": [
      {
        "name": "고급 혼돈의가시",
        "quantity": "1개"
      },
      {
        "name": "악몽의구슬(雷)",
        "quantity": "2개"
      },
      {
        "name": "악몽의 정수",
        "quantity": "20개"
      },
      {
        "name": "악몽의 인장",
        "quantity": "75개"
      },
      {
        "name": "악몽의결정체(雷)",
        "quantity": "100개"
      },
      {
        "name": "혼의결정",
        "quantity": "75개"
      },
      {
        "name": "봉인의서",
        "quantity": "5개"
      },
      {
        "name": "각성석",
        "quantity": "3개"
      },
      {
        "name": "1억 지전",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "명왕검",
    "yield": "1개",
    "ingredients": [
      {
        "name": "고급 도철의뿔",
        "quantity": "1개"
      },
      {
        "name": "악몽의구슬(火)",
        "quantity": "2개"
      },
      {
        "name": "악몽의 정수",
        "quantity": "20개"
      },
      {
        "name": "악몽의 인장",
        "quantity": "75개"
      },
      {
        "name": "악몽의결정체(火)",
        "quantity": "100개"
      },
      {
        "name": "혼의결정",
        "quantity": "75개"
      },
      {
        "name": "봉인의서",
        "quantity": "5개"
      },
      {
        "name": "각성석",
        "quantity": "3개"
      },
      {
        "name": "1억 지전",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "명왕극",
    "yield": "1개",
    "ingredients": [
      {
        "name": "고급 도올의송곳니",
        "quantity": "1개"
      },
      {
        "name": "악몽의구슬(風)",
        "quantity": "2개"
      },
      {
        "name": "악몽의 정수",
        "quantity": "20개"
      },
      {
        "name": "악몽의 인장",
        "quantity": "75개"
      },
      {
        "name": "악몽의결정체(風)",
        "quantity": "100개"
      },
      {
        "name": "혼의결정",
        "quantity": "75개"
      },
      {
        "name": "봉인의서",
        "quantity": "5개"
      },
      {
        "name": "각성석",
        "quantity": "3개"
      },
      {
        "name": "1억 지전",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "명왕월",
    "yield": "1개",
    "ingredients": [
      {
        "name": "아이라바타의 상아",
        "quantity": "1개"
      },
      {
        "name": "악몽의 정수",
        "quantity": "50개"
      },
      {
        "name": "악몽의 인장",
        "quantity": "75개"
      },
      {
        "name": "악령의 파편",
        "quantity": "75개"
      },
      {
        "name": "악령의 심장",
        "quantity": "75개"
      },
      {
        "name": "혼의결정",
        "quantity": "75개"
      },
      {
        "name": "봉인의서",
        "quantity": "5개"
      },
      {
        "name": "각성석",
        "quantity": "3개"
      },
      {
        "name": "1억 지전",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고급 명왕갑",
    "yield": "1개",
    "ingredients": [
      {
        "name": "명왕갑",
        "quantity": "1개"
      },
      {
        "name": "현무의석상(200레벨)",
        "quantity": "2개"
      },
      {
        "name": "부서진 산호궁",
        "quantity": "100개"
      },
      {
        "name": "악몽의결정체(水)",
        "quantity": "100개"
      },
      {
        "name": "혼의결정",
        "quantity": "100개"
      },
      {
        "name": "봉인의돌",
        "quantity": "5개"
      },
      {
        "name": "봉인의서",
        "quantity": "5개"
      },
      {
        "name": "1억 지전",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고급 명왕극",
    "yield": "1개",
    "ingredients": [
      {
        "name": "명왕극",
        "quantity": "1개"
      },
      {
        "name": "백호의석상(200레벨)",
        "quantity": "2개"
      },
      {
        "name": "예리한 언월도 조각",
        "quantity": "100개"
      },
      {
        "name": "악몽의결정체(風)",
        "quantity": "100개"
      },
      {
        "name": "혼의결정",
        "quantity": "100개"
      },
      {
        "name": "봉인의돌",
        "quantity": "5개"
      },
      {
        "name": "봉인의서",
        "quantity": "5개"
      },
      {
        "name": "1억 지전",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고급 명왕검",
    "yield": "1개",
    "ingredients": [
      {
        "name": "명왕검",
        "quantity": "1개"
      },
      {
        "name": "주작의석상(200레벨)",
        "quantity": "2개"
      },
      {
        "name": "악몽을 피우는 씨앗",
        "quantity": "100개"
      },
      {
        "name": "악몽의결정체(火)",
        "quantity": "100개"
      },
      {
        "name": "혼의결정",
        "quantity": "100개"
      },
      {
        "name": "봉인의돌",
        "quantity": "5개"
      },
      {
        "name": "봉인의서",
        "quantity": "5개"
      },
      {
        "name": "1억 지전",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고급 명왕궁",
    "yield": "1개",
    "ingredients": [
      {
        "name": "명왕궁",
        "quantity": "1개"
      },
      {
        "name": "청룡의석상(200레벨)",
        "quantity": "2개"
      },
      {
        "name": "악몽귀의 팔찌",
        "quantity": "100개"
      },
      {
        "name": "악몽의결정체(雷)",
        "quantity": "100개"
      },
      {
        "name": "혼의결정",
        "quantity": "100개"
      },
      {
        "name": "봉인의돌",
        "quantity": "5개"
      },
      {
        "name": "봉인의서",
        "quantity": "5개"
      },
      {
        "name": "1억 지전",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "고급 명왕월",
    "yield": "1개",
    "ingredients": [
      {
        "name": "명왕월",
        "quantity": "1개"
      },
      {
        "name": "현무의석상(200레벨)",
        "quantity": "1개"
      },
      {
        "name": "백호의석상(200레벨)",
        "quantity": "1개"
      },
      {
        "name": "주작의석상(200레벨)",
        "quantity": "1개"
      },
      {
        "name": "청룡의석상(200레벨)",
        "quantity": "1개"
      },
      {
        "name": "혼의결정",
        "quantity": "150개"
      },
      {
        "name": "봉인의돌",
        "quantity": "5개"
      },
      {
        "name": "봉인의서",
        "quantity": "5개"
      },
      {
        "name": "1억 지전",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "각성 명왕장",
    "yield": "1개",
    "ingredients": [
      {
        "name": "고급 명왕검",
        "quantity": "1개"
      },
      {
        "name": "적운혼",
        "quantity": "50개"
      },
      {
        "name": "화룡의석상(200레벨)",
        "quantity": "1개"
      },
      {
        "name": "각성석",
        "quantity": "5개"
      },
      {
        "name": "무색의 기운 파편",
        "quantity": "200개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "각성 명왕혼검",
    "yield": "1개",
    "ingredients": [
      {
        "name": "고급 명왕극",
        "quantity": "1개"
      },
      {
        "name": "녹영혼",
        "quantity": "50개"
      },
      {
        "name": "풍룡의석상(200레벨)",
        "quantity": "1개"
      },
      {
        "name": "각성석",
        "quantity": "5개"
      },
      {
        "name": "무색의 기운 파편",
        "quantity": "200개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "각성 명왕갑",
    "yield": "1개",
    "ingredients": [
      {
        "name": "고급 명왕갑",
        "quantity": "1개"
      },
      {
        "name": "청명혼",
        "quantity": "50개"
      },
      {
        "name": "수룡의석상(200레벨)",
        "quantity": "1개"
      },
      {
        "name": "각성석",
        "quantity": "5개"
      },
      {
        "name": "무색의 기운 파편",
        "quantity": "200개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "각성 명왕궁",
    "yield": "1개",
    "ingredients": [
      {
        "name": "고급 명왕궁",
        "quantity": "1개"
      },
      {
        "name": "금령혼",
        "quantity": "50개"
      },
      {
        "name": "뇌룡의석상(200레벨)",
        "quantity": "1개"
      },
      {
        "name": "각성석",
        "quantity": "5개"
      },
      {
        "name": "무색의 기운 파편",
        "quantity": "200개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "진각 명왕장",
    "yield": "1개",
    "crafting_fee": "1억",
    "ingredients": [
      {
        "name": "각성 명왕장",
        "quantity": "1개"
      },
      {
        "name": "진각의 핵(火)(거래불가)",
        "quantity": "70개"
      },
      {
        "name": "정화된 선기(火)",
        "quantity": "50개"
      },
      {
        "name": "각성석",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "진각 명왕혼검",
    "yield": "1개",
    "crafting_fee": "1억",
    "ingredients": [
      {
        "name": "각성 명왕혼검",
        "quantity": "1개"
      },
      {
        "name": "진각의 핵(風)(거래불가)",
        "quantity": "70개"
      },
      {
        "name": "정화된 선기(風)",
        "quantity": "50개"
      },
      {
        "name": "각성석",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "진각 명왕갑",
    "yield": "1개",
    "crafting_fee": "1억",
    "ingredients": [
      {
        "name": "각성 명왕갑",
        "quantity": "1개"
      },
      {
        "name": "진각의 핵(水)(거래불가)",
        "quantity": "70개"
      },
      {
        "name": "정화된 선기(水)",
        "quantity": "50개"
      },
      {
        "name": "각성석",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "진각 명왕궁",
    "yield": "1개",
    "crafting_fee": "1억",
    "ingredients": [
      {
        "name": "각성 명왕궁",
        "quantity": "1개"
      },
      {
        "name": "진각의 핵(雷)(거래불가)",
        "quantity": "70개"
      },
      {
        "name": "정화된 선기(雷)",
        "quantity": "50개"
      },
      {
        "name": "각성석",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "금강야차명왕부",
    "yield": "1개",
    "crafting_fee": "-",
    "ingredients": [
      {
        "name": "신수부 현무(玄武)",
        "quantity": "1개"
      },
      {
        "name": "푸른색알",
        "quantity": "1개"
      },
      {
        "name": "악몽의구슬(水)",
        "quantity": "2개"
      },
      {
        "name": "얼어붙은 사신의 인장(水)",
        "quantity": "2개"
      },
      {
        "name": "1억 지전",
        "quantity": "3개"
      },
      {
        "name": "힘의근원",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "군다리명왕부",
    "yield": "1개",
    "crafting_fee": "-",
    "ingredients": [
      {
        "name": "신수부 청룡(靑龍)",
        "quantity": "1개"
      },
      {
        "name": "황금색알",
        "quantity": "1개"
      },
      {
        "name": "악몽의구슬(雷)",
        "quantity": "2개"
      },
      {
        "name": "번개치는 사신의 인장(雷)",
        "quantity": "2개"
      },
      {
        "name": "1억 지전",
        "quantity": "3개"
      },
      {
        "name": "힘의근원",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "대위덕명왕부",
    "yield": "1개",
    "crafting_fee": "-",
    "ingredients": [
      {
        "name": "신수부 백호(白虎)",
        "quantity": "1개"
      },
      {
        "name": "백은색알",
        "quantity": "1개"
      },
      {
        "name": "악몽의구슬(風)",
        "quantity": "2개"
      },
      {
        "name": "역류하는 사신의 인장(風)",
        "quantity": "2개"
      },
      {
        "name": "1억 지전",
        "quantity": "3개"
      },
      {
        "name": "힘의근원",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "항삼세명왕부",
    "yield": "1개",
    "crafting_fee": "-",
    "ingredients": [
      {
        "name": "신수부 주작(朱雀)",
        "quantity": "1개"
      },
      {
        "name": "붉은색알",
        "quantity": "1개"
      },
      {
        "name": "악몽의구슬(火)",
        "quantity": "2개"
      },
      {
        "name": "불타는 사신의 인장(火)",
        "quantity": "2개"
      },
      {
        "name": "1억 지전",
        "quantity": "3개"
      },
      {
        "name": "힘의근원",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "부동명왕부",
    "yield": "1개",
    "crafting_fee": "-",
    "ingredients": [
      {
        "name": "신수부 현무(玄武)",
        "quantity": "1개"
      },
      {
        "name": "신수부 청룡(靑龍)",
        "quantity": "1개"
      },
      {
        "name": "신수부 백호(白虎)",
        "quantity": "1개"
      },
      {
        "name": "신수부 주작(朱雀)",
        "quantity": "1개"
      },
      {
        "name": "격돌하는 사신의 인장(土)",
        "quantity": "2개"
      },
      {
        "name": "잿빛 공포의 보옥",
        "quantity": "5개"
      },
      {
        "name": "울부짖는 사암의 심장",
        "quantity": "5개"
      },
      {
        "name": "봉인의서",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "먹으로 그려진 깃털(거래불가)",
    "yield": "1개",
    "crafting_fee": "1천만",
    "ingredients": [
      {
        "name": "솔거의 붓(거래불가)",
        "quantity": "40개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "힘이 담긴 솔거의 그림(거래불가)",
    "yield": "1개",
    "crafting_fee": "1천만",
    "ingredients": [
      {
        "name": "정제된 도깨비의 불(거래불가)",
        "quantity": "1개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "도깨비의 기운",
    "yield": "1개",
    "crafting_fee": "1억",
    "ingredients": [
      {
        "name": "솔거의 붓(거래불가)",
        "quantity": "25개"
      },
      {
        "name": "도깨비의 방망이(거래불가)",
        "quantity": "25개"
      },
      {
        "name": "불의속성석",
        "quantity": "5개"
      },
      {
        "name": "물의속성석",
        "quantity": "5개"
      },
      {
        "name": "뇌전의속성석",
        "quantity": "5개"
      },
      {
        "name": "바람의속성석",
        "quantity": "5개"
      },
      {
        "name": "땅의속성석",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "설녀의 기운",
    "yield": "1개",
    "crafting_fee": "3억",
    "ingredients": [
      {
        "name": "설녀의 부러진 얼음창(거래불가)",
        "quantity": "25개"
      },
      {
        "name": "도깨비의 기운",
        "quantity": "1개"
      },
      {
        "name": "불의정령석",
        "quantity": "20개"
      },
      {
        "name": "물의정령석",
        "quantity": "20개"
      },
      {
        "name": "뇌전의정령석",
        "quantity": "20개"
      },
      {
        "name": "바람의정령석",
        "quantity": "20개"
      },
      {
        "name": "땅의정령석",
        "quantity": "20개"
      },
      {
        "name": "각성석",
        "quantity": "3개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "탐의 기운",
    "yield": "1개",
    "crafting_fee": "3억",
    "ingredients": [
      {
        "name": "탐의 비늘(거래불가)",
        "quantity": "25개"
      },
      {
        "name": "설녀의 기운",
        "quantity": "1개"
      },
      {
        "name": "정기의구슬(火)",
        "quantity": "2개"
      },
      {
        "name": "정기의구슬(水)",
        "quantity": "2개"
      },
      {
        "name": "정기의구슬(雷)",
        "quantity": "2개"
      },
      {
        "name": "정기의구슬(風)",
        "quantity": "2개"
      },
      {
        "name": "정기의구슬(地)",
        "quantity": "2개"
      },
      {
        "name": "각성석",
        "quantity": "3개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "바람의결정",
    "yield": "1개",
    "crafting_fee": "30만",
    "ingredients": [
      {
        "name": "결정조각(風)",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "불의결정",
    "yield": "1개",
    "crafting_fee": "30만",
    "ingredients": [
      {
        "name": "결정조각(火)",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "물의결정",
    "yield": "1개",
    "crafting_fee": "30만",
    "ingredients": [
      {
        "name": "결정조각(水)",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "뇌전의결정",
    "yield": "1개",
    "crafting_fee": "30만",
    "ingredients": [
      {
        "name": "결정조각(雷)",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "땅의결정",
    "yield": "1개",
    "crafting_fee": "30만",
    "ingredients": [
      {
        "name": "결정조각(土)",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "봉인된힘의조각",
    "yield": "1개",
    "crafting_fee": "50만",
    "ingredients": [
      {
        "name": "봉인된힘의파편",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "각성석",
    "yield": "1개",
    "crafting_fee": "100만",
    "ingredients": [
      {
        "name": "각성석의 조각",
        "quantity": "20개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "불의속성석",
    "yield": "1개",
    "crafting_fee": "200만",
    "ingredients": [
      {
        "name": "작은불의속성석",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "물의속성석",
    "yield": "1개",
    "crafting_fee": "200만",
    "ingredients": [
      {
        "name": "작은물의속성석",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "바람의속성석",
    "yield": "1개",
    "crafting_fee": "200만",
    "ingredients": [
      {
        "name": "작은바람의속성석",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "뇌전의속성석",
    "yield": "1개",
    "crafting_fee": "200만",
    "ingredients": [
      {
        "name": "작은뇌전의속성석",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "땅의속성석",
    "yield": "1개",
    "crafting_fee": "200만",
    "ingredients": [
      {
        "name": "작은땅의속성석",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "오색결정 조각",
    "yield": "1개",
    "crafting_fee": "300만",
    "ingredients": [
      {
        "name": "오색결정 가루",
        "quantity": "10개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "물의정령옥",
    "yield": "1개",
    "crafting_fee": "300만",
    "ingredients": [
      {
        "name": "물의정령석",
        "quantity": "30개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "불의정령옥",
    "yield": "1개",
    "crafting_fee": "300만",
    "ingredients": [
      {
        "name": "불의정령석",
        "quantity": "30개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "바람의정령옥",
    "yield": "1개",
    "crafting_fee": "300만",
    "ingredients": [
      {
        "name": "바람의정령석",
        "quantity": "30개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "뇌전의정령옥",
    "yield": "1개",
    "crafting_fee": "300만",
    "ingredients": [
      {
        "name": "뇌전의정령석",
        "quantity": "30개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "땅의정령옥",
    "yield": "1개",
    "crafting_fee": "300만",
    "ingredients": [
      {
        "name": "땅의정령석",
        "quantity": "30개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "균형의파편(火)",
    "yield": "1개",
    "crafting_fee": "10만",
    "ingredients": [
      {
        "name": "혼돈의파편(火)",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "균형의파편(水)",
    "yield": "1개",
    "crafting_fee": "10만",
    "ingredients": [
      {
        "name": "혼돈의파편(水)",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "균형의파편(風)",
    "yield": "1개",
    "crafting_fee": "10만",
    "ingredients": [
      {
        "name": "혼돈의파편(風)",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "균형의파편(雷)",
    "yield": "1개",
    "crafting_fee": "10만",
    "ingredients": [
      {
        "name": "혼돈의파편(雷)",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "균형의파편(土)",
    "yield": "1개",
    "crafting_fee": "10만",
    "ingredients": [
      {
        "name": "혼돈의파편(土)",
        "quantity": "5개"
      }
    ]
  },
  {
    "job": "통합제작",
    "required_level": "-",
    "item_name": "균형의파편(強)",
    "yield": "1개",
    "crafting_fee": "10만",
    "ingredients": [
      {
        "name": "혼돈의파편(強)",
        "quantity": "5개"
      }
    ]
  },



















  {
    "job": "강화",
    "required_level": "-",
    "item_name": "세공된 석웅황(강화)",
    "yield": "-",
    "crafting_fee": "100만",
    "ingredients": [
      {
        "name": "석웅황",
        "quantity": "5개"
      },
      {
        "name": "힘의기억",
        "quantity": "5개"
      },
      {
        "name": "기억의서판(雷)",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "강화",
    "required_level": "-",
    "item_name": "세공된 적마노(강화)",
    "yield": "-",
    "crafting_fee": "100만",
    "ingredients": [
      {
        "name": "적마노",
        "quantity": "5개"
      },
      {
        "name": "힘의기억",
        "quantity": "5개"
      },
      {
        "name": "기억의서판(火)",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "강화",
    "required_level": "-",
    "item_name": "세공된 남옥(강화)",
    "yield": "-",
    "crafting_fee": "100만",
    "ingredients": [
      {
        "name": "남옥",
        "quantity": "5개"
      },
      {
        "name": "힘의기억",
        "quantity": "5개"
      },
      {
        "name": "기억의서판(風)",
        "quantity": "2개"
      }
    ]
  },
  {
    "job": "강화",
    "required_level": "-",
    "item_name": "세공된 벽옥(강화)",
    "yield": "-",
    "crafting_fee": "100만",
    "ingredients": [
      {
        "name": "벽옥",
        "quantity": "5개"
      },
      {
        "name": "힘의기억",
        "quantity": "5개"
      },
      {
        "name": "기억의서판(水)",
        "quantity": "2개"
      }
    ]
  },
]

// HTML의 초기화 함수가 선언되어 있다면 즉시 전달
if (typeof initRecipes === 'function') {
  initRecipes(defaultRecipes);
}