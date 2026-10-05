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
    "required_level": "100",
    "item_name": "봉인된 힘의조각",
    "yield": "10개",
    "crafting_fee": "5000",
    "ingredients": [
      {
        "name": "봉인의돌",
        "quantity": "1개"
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
        "name": "봉인된 힘의조각",
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
        "name": "오색결정조각",
        "quantity": "5개"
      },
      {
        "name": "봉인된 힘의조각",
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
    "item_name": "땅의속성주괴",
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
    "item_name": "오색결정조각",
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