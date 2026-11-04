import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Explore from "./components/Explore";
import NewRelease from "./components/NewRelease";

import weatherBanner from "./images/spy-x-family.png";

import onePiecePoster from "./images/one-piece.png";
import onePieceBanner from "./images/one-piece.png";

import borutoPoster from "./images/boruto.png";
import borutoBanner from "./images/boruto.png";

import spyPoster from "./images/spy_card.png";
import spyBanner from "./images/spy_card.png";

import attackOnTitanPoster from "./images/attackontitan.png";
import attackOnTitanBanner from "./images/attackontitan.png";

import captainTsubasaPoster from "./images/captsu_card.png";
import captainTsubasaBanner from "./images/captsu_card.png";

import aoashiPoster from "./images/aoashi_card.png";
import aoashiBanner from "./images/aoashi_card.png";

const initialAnime = {
  id: "weather",
  movieName: "Weather With You",
  description:
    "Mùa hè năm đầu cấp Ba, Hodaka bỏ nhà ra đi và đến Tokyo. Tại đây, cậu gặp Hina, cô gái có khả năng khiến trời quang đãng bằng lời cầu nguyện.",
  banner: weatherBanner,
};

const animeList = [
  {
    id: 1,
    movieName: "One Piece",
    episode: "Episode 1018",
    description:
      "One Piece là bộ truyện tranh dành cho thiếu niên của tác giả nổi tiếng Oda Eiichiro. Bộ manga này được chuyển thể thành một series anime nhiều tập hài hước, đặc sắc. Phim Đảo Hải Tặc mở đầu câu chuyện bằng cảnh xử tử vua hải tặc Gol D. Roger. Trước khi chết ông đã tiết lộ rằng mình có một kho báu được giấu ngoài biển. Nếu ai tìm thấy kho báu thì chúng sẽ thuộc về người đó. Rất nhiều người gan dạ đã đổ xô ra biển để tìm kiếm kho báu bí ẩn của vua hải tặc Gol D. Roger.",
    poster: onePiecePoster,
    banner: onePieceBanner,
  },
  {
    id: 2,
    movieName: "Boruto Naruto Next Generations",
    episode: "Episode 250",
    description:
      "Boruto: Naruto Next Generations kể về thế hệ sau của Naruto. Bộ phim vẫn lấy bối cảnh là thế giới Ninja nhưng nhân vật chính lần này lại là Uzumaki Boruto, con trai của Uzumaki Naruto và Hyuga Hinata. Đồng hành cùng Naruto trong lần quay lại này là Sarada Uchiha là con gái của Sasuke Uchiha, Sakura Haruno và Mitsuki-“con” của Orochimaru.",
    poster: borutoPoster,
    banner: borutoBanner,
  },
  {
    id: 3,
    movieName: "Spy X Family",
    episode: "Episode 07",
    description:
      "Bộ phim là phần phim điện ảnh của series anime nổi tiếng Spy x Family. Trong bộ phim lần này, sau khi nhận được yêu cầu thay thế mình trong Chiến dịch Strix, Loid Forger quyết định giúp con gái Anya chiến thắng trong cuộc thi nấu ăn tại Học viện Eden bằng cách nấu bữa ăn yêu thích của hiệu trưởng để tránh bị thay thế khỏi nhiệm vụ mật. Nhưng từ đây, gia đình Forger phát hiện ra bí mật kinh hoàng ảnh hưởng đến hòa bình thế giới.",
    poster: spyPoster,
    banner: spyBanner,
  },
  {
    id: 4,
    movieName: "Shingeki no Kyojin",
    episode: "Episode 28",
    description:
      "Câu chuyện của Đại chiến Titan tập trung vào một nền văn minh bên trong ba bức tường đồ sộ quây tròn đồng tâm, nơi được cho là duy nhất mà nhân loại còn tồn tại. Ba bức tường được đặt tên theo tên ba người con gái của vị vua đầu tiên có tên là Maria, Rose và Sina. Người dân ở đó, được gọi là dân tộc Eldia, đã tin rằng hơn một trăm năm trước, loài người đã bị đẩy đến bờ vực tuyệt chủng sau sự xuất hiện của những người khổng lồ hình dáng con người, được gọi là Titan.",
    poster: attackOnTitanPoster,
    banner: attackOnTitanBanner,
  },
  {
    id: 5,
    movieName: "Captain Tsubasa",
    episode: "Episode 28",
    description:
      "Tsubasa Oozora là nhân vật chính trong bộ truyện này. Khi còn nhỏ, cậu đã thoát chết nhờ một quả bóng bất ngờ. Điều đó đã thúc đẩy cậu trở thành một fan hâm mộ bóng đá. Câu chuyện tập trung vào các trận đấu bóng đá hấp dẫn, đem lại những bất ngờ cho khán giả. Đây là bản làm lại của 'Tsubasa Giấc mơ sân cỏ', với những chi tiết được thêm hoặc bỏ, để cộng thêm nét đặc trưng vào bộ truyện. Bộ phim này đã làm vợi lên kí ức về tuổi thơ của biết bao người.",
    poster: captainTsubasaPoster,
    banner: captainTsubasaBanner,
  },
  {
    id: 6,
    movieName: "Aoashi",
    episode: "Episode 28",
    description:
      "Ashito Aoi là một cầu thủ bóng đá trẻ, đầy khát vọng đến từ một thị trấn vùng nông thôn ở Nhật Bản. Hy vọng vào được một trường trung học với một câu lạc bộ bóng đá giỏi đã tan thành mây khói khi anh gây ra một sự cố trong một trận đấu quan trọng cho đội của mình, dẫn đến việc họ bị loại khỏi giải đấu. Tuy nhiên, anh đã lọt vào mắt xanh của một người quan trọng tình cờ đến thăm từ Tokyo. Mọi chuyện sẽ diễn ra như thế nào đối với Ashito?",
    poster: aoashiPoster,
    banner: aoashiBanner,
  },
];
function App() {
  const [selectedAnime, setSelectedAnime] = useState(initialAnime);

  return (
    <div className="app">
      <Header />

      <Explore anime={selectedAnime} />

      <NewRelease
        animeList={animeList}
        selectedAnime={selectedAnime}
        onSelectAnime={setSelectedAnime}
      />
    </div>
  );
}

export default App;
