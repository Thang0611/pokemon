const data = [
  {
    id: 1,
    name: 'Pikachu',
    image:
      'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/2b3f6ff00db7a1efae21d85cfb8995eaff2da8d8.png',
    introduction:
      'Những Pikachu có thể tạo ra dòng điện càng mạnh thì túi má càng mềm mại và lớn nhanh. Khi gặp nhau, Pikachu sẽ chào hỏi bằng cách chạm đuôi để truyền điện. Pikachu có túi trữ điện hai bên má. Sống trong rừng sâu, là loài rất thông minh, biết dùng điện để nướng và ăn trái cây cứng.',
    evolutionId: 1,
    level: 1,
  },

  {
    id: 2,
    name: 'Raichu',
    image:
      'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/9c28defa939e230800ec0d0c421d9f82c60df77a.png',
    introduction:
      'Chiếc đuôi dài của Raichu sẽ làm dây nối đất để bảo vệ bản thân trước dòng điện cao thế trong cơ thể. Khi quật chiếc đuôi hình tia sét, nó bắn vào đối thủ dòng điện có điện thế sánh ngang tia sét. Điện kích của Raichu phóng ra lớn hơn một trăm nghìn vôn, mạnh đến nỗi có thể làm bất tỉnh Daiodo sống ở quê tôi chỉ bằng một đòn.',
    evolutionId: 1,
    level: 2,
  },
  {
    id: 3,
    name: 'Hitokage',
    image:
      'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/d0ee81f16175c97770192fb691fdda8da1f4f349.png',
    introduction:
      'Từ khi sinh ra, đuôi của nó đã có một ngọn lửa. Khi ngọn lửa tắt, sinh mệnh của nó cũng chấm dứt. Tính cách ưa thích đồ nóng. Nghe nói khi trời mưa khói sẽ phụt ra từ đuôi của nó.',
    evolutionId: 2,
    level: 1,
  },
  {
    id: 4,
    name: 'Lizardo',
    image:
      'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/285395ca77d82861fd30cea64567021a50c1169c.png',
    introduction:
      'Với bản tính hung bạo, nó sẽ dùng vuốt cào xé và quật cái đuôi lửa vào kẻ địch. Khi chiến đấu, nếu tâm trạng khó chịu, Lizardo sẽ phun ra ngọn lửa hủy diệt thiêu trụi mọi thứ.',
    evolutionId: 2,
    level: 2,
  },
  {
    id: 5,
    name: 'Lizardon',
    image:
      'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/2050f1fd1283f473d7d048f8631712e7e003f802.png',
    introduction:
      'Lizardon khè ra lửa với sức nóng đến đá tảng cũng tan chảy, nó còn có thể gây ra cháy rừng. Nhờ đôi cánh, Lizardon có thể bay cao trên 1.400 mét. Phun lửa nhiệt độ cao.',
    evolutionId: 2,
    level: 3,
  },
  {
    id: 6,
    name: 'Zenigame',
    image:
      'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/5794f0251b1180998d72d1f8568239620ff5279c.png',
    introduction:
      'Chiếc mai của Zenigame không chỉ để tự vệ, mà còn làm giảm tối đa lực cản nước nhờ hình dáng tròn trịa cùng bề mặt nhiều rãnh, giúp chúng bơi nhanh hơn. Chiếc mai của Zenigame không chỉ để tự vệ, mà còn làm giảm tối đa lực cản nước nhờ hình dáng tròn trịa cùng bề mặt nhiều rãnh, giúp chúng bơi nhanh hơn',
    evolutionId: 3,
    level: 1,
  },
  {
    id: 7,
    name: 'Kameil',
    image:
      'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/a3bc17e6215031332462cc64e59b7922ddd14b91.png',
    introduction:
      'Kameil càng cao tuổi thì cái đuôi lớn, rậm lông sẽ càng sậm màu. Những vết xước trên mai là chiến tích minh chứng cho sức mạnh của chúng. Kameil càng cao tuổi thì cái đuôi lớn, rậm lông sẽ càng sậm màu. Những vết xước trên mai là chiến tích minh chứng cho sức mạnh của chúng.',
    evolutionId: 3,
    level: 2,
  },
  {
    id: 8,
    name: 'Kamex',
    image:
      'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/2fe157db59153af8abd636ab03c7df6f28b08242.png',
    introduction:
      'Kamex bắn nước từ hai khẩu súng nhô ra ở mai. Với độ chuẩn xác cực cao, những phát đạn nước có thể nhắm trúng lon rỗng cách xa 50 mét. Kamex bắn nước từ hai khẩu súng nhô ra ở mai. Với độ chuẩn xác cực cao, những phát đạn nước có thể nhắm trúng lon rỗng cách xa 50 mét.',
    evolutionId: 3,
    level: 3,
  },
  {
    id: 9,
    name: 'Rokon',
    image:
      'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/f285c634efd141918f6ad066a6f59c20746d9050.png',
    introduction:
      'Rokon nhỏ có 6 đuôi rất đẹp. Khi trưởng thành, Rokon sẽ mọc ra vài cái đuôi mới. 6 chiếc đuôi của nó càng lớn lông càng đẹp hơn. Khi ôm thì khá ấm áp. Chiếc bụng chứa lửa thiêu đốt có thể khạc ra như cầu lửa. Khi nhỏ, Rokon chỉ có 1 chiếc đuôi trắng, khi lớn lên, chiếc đuôi đó tách ra thành 6 đuôi nhỏ.',
    evolutionId: 4,
    level: 1,
  },
  {
    id: 10,
    name: 'Kyukon',
    image:
      'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/cc96e6a4eee980724ebd725bb8785334d3290074.png',
    introduction:
      'Mỗi chiếc đuôi đều chứa sức mạnh. Người ta đồn đại rằng Kyukon sống đến một nghìn năm. Thông minh nhưng thù dai Nghe nói nếu đùa cợt và nắm đuôi của nó thì sẽ bị nguyền rủa 1.000 năm. Bộ lông hoàng kim của Kyukon thật nguy nga lộng lẫy. Người ta đồn nó sống trường sinh đến ngàn tuổi bí mật là ở 9 chiếc đuôi dài chứa sức mạnh thiêng.',
    evolutionId: 4,
    level: 2,
  },
  {
    id: 11,
    name: 'Arbo',
    image:
      'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/ad90ec632849d032615d707ebe8ad741651eee06.png',
    introduction:
      'Bằng cách tự làm trật khớp hàm, Arbo có thể nuốt chửng cả con mồi to lớn. Chúng cuộn mình nghỉ ngơi sau mỗi lần đánh chén no nê. Chúng rất thích ăn trứng của các Pokémon chim. Vì luôn nuốt chửng cả quả, đôi khi chúng ngất xỉu vì sơ ý mắc nghẹn.',
    evolutionId: 5,
    level: 1,
  },
  {
    id: 12,
    name: 'Arbok',
    image:
      'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/eb3c14ed44c1e4a2ba4c2d7970cddf07cd8ef67f.png',
    introduction:
      'Nghiên cứu gần đây nhất cho thấy, loài Arbok có đến hơn 20 kiểu bài trí hoa văn trên bụng. Chúng dọa đối phương chết đứng bằng hoa văn trên người, rồi nhanh chóng siết chặt cho tới khi chúng ngừng cựa quậy.',
    evolutionId: 5,
    level: 2,
  },
]
module.exports = data
