// get dom
let card = document.querySelector(".js-card");
let cardBefore = document.querySelector(".js-card-before");
let cardAfter = document.querySelector(".js-card-after");
let txt = document.querySelector(".js-txt");
let count = document.querySelector(".js-count");

// flip card
card.addEventListener("click", () => {
  card.classList.toggle("active");
});

// set height
let height = cardBefore.offsetHeight;
cardAfter.style.height = height + "px";
card.style.height = height + "px";

// data
let quotes = [
  "Hãy đặt hi vọng vào Chúa và bắt đầu một ngày bằng suy nghĩ tích cực. Còn lại mọi thứ sẽ tự động xảy đến với bạn. Ngày mới tốt lành!",
  "Mỗi bài học đều đáng quý. Hãy chắc chắn rằng bạn học được điều mới mẻ mỗi ngày. Chúc bạn một ngày ý nghĩa!",
  "Bạn sẽ nhận rằng ước mơ không khó thực hiện nếu bạn rời khỏi chiếc giường êm ấm và bắt đầu hành động để biến nó thành sự thực. Chúc bạn ngày mới thành công!",
  "Sự khác biệt giữa một ngày tuyệt vời và ngày kinh hoàng phụ thuộc vào cái nhìn của bạn, vì thử thách cũng chính là cơ hội. Mọi thứ rồi sẽ tốt đẹp cả thôi.",
  "Ngày mới giống như tờ giấy trắng. Bạn sẽ là người sẽ vẽ lên đó, vì thế hãy vẽ sao cho khôn ngoan. Chào buổi sáng!",
  "Cuộc sống quá ngắn ngủi và từng phút giây đều đáng quý, vì thế hãy sống trọn từng khoảnh khắc. Bắt đầu mỗi ngày bằng suy nghĩ lạc quan và nụ cười hiện diện trên gương mặt bạn nha. Chúc buổi sáng ,tốt lành!",
  "Những tia nắng của ngày hôm nay cho bạn thấy cơ hội mới để thực hiện giấc mơ đã ấp ủ bấy lâu. Hãy nắm bắt cơ hội, làm việc chăm chỉ và theo đuổi ước mơ của mình nha!",
  "Điều tuyệt vời nhất khi ở bên cạnh người tốt không phải bạn nhận được gì từ họ mà bạn sẽ càng trở nên tốt hơn. Chúc ngày mới tốt lành!",
  "Cho dù điều gì xảy ra chăng nữa, hãy cứ thoải mái và mỉm cười bạn nha! Cuộc sống không phải là những điều kiện cần phải giải quyết mà là những món quà để thưởng thức. Chúc ngày mới tốt lành!",
  "Điều tuyệt vời nhất khi ở bên cạnh người tốt không phải bạn nhận được gì từ họ mà bạn sẽ càng trở nên tốt hơn. Chúc ngày mới tốt lành!",
  "Hãy luôn thức dậy với nụ cười trên môi để biết rằng hôm nay bạn sẽ đi đến gần hơn với những ước mơ, hoài bão của mình.",
  "điều kiện vẫn cứ đến trên con đường chúng ta đi, bất kể nó là gì thì chỉ cần chúng ta đối mặt, mọi chuyện rồi sẽ ổn thôi. Ngày mới tốt lành!",
  "Tôi sẽ không chúc bạn giàu có hay may mắn. Chỉ mong sao bạn có một ngày vui vẻ!",
  "Thứ làm đẹp cho đời tuyệt vời nhất chính là: một lời nói chân thành, một ánh nhìn dịu dàng, một đôi tay nhân ái, một khuôn mặt luôn rạng rỡ nụ cười và một trái tìm giàu lòng yêu thương. Hãy dùng ,nó mỗi ngày để cuộc sống tốt đẹp hơn bạn nha. Chúc ngày mới tốt lành!",
  "Mỗi buổi sáng là một khởi đầu mới, mong ước mới, hy vọng mới. Mỗi ngày đang tới là một ngày tuyệt vời cho mỗi chúng ta. Anh hãy nhận lời chúc này cho một ngày hoàn hảo nha! Good morning!Hãy gửi ,lời chào ngày",
  "Mỗi ngày mới đến là một lời nhắc nhở của Chúa rằng chúng ta còn cơ hội để làm nhiều điều tốt đẹp hơn ở đời sống. Mong rằng một ngày tuyệt vời sẽ đến với bạn!",
  "Đừng để nỗi lo âu của ngày hôm qua làm phai mờ vẻ đẹp của ngày hôm nay. Chúc cậu một ngày may mắn!",
  "Ngày hôm nay luôn là một ngày tuyệt vời để tạo một ngày hôm qua tốt đẹp hơn cho ngày mai. Hãy sống trọn vẹn cho ngày hôm nay bạn nha!",
  "Ranh giới giữa một ngày tốt lành và ngày tồi tệ rất mỏng manh, chính thái độ của chúng ta quyết định ngày hôm nay có tươi đẹp hay không. Vì thế, hãy luôn mỉm cười bạn nha, chúc ngày mới tốt lành!",
  "Người ta nói rằng một nụ cười là hệ thống siêu ánh sáng cho khuôn mặt, hệ thống làm mát cho cái đầu và hệ thống sưởi ấm cho trái tim. vì thế, bạn hãy mỉm cười mỗi ngày bạn nha! Ngày mới vui vẻ!",
  "Kho báu lớn nhất trong cuộc đời chúng ta là bạn bè và thân nhân. Hãy luôn quý trọng và lưu tâm đến họ. Chúc bạn buổi sáng tốt lành!",
  "Cuộc sống quá ngắn ngủi và từng phút giây đều đáng quý, vì thế hãy sống trọn từng khoảnh khắc. Bắt đầu mỗi ngày bằng suy nghĩ lạc quan và nụ cười hiện diện trên gương mặt bạn nha. Chúc buổi sáng ,tốt lành!",
  "Cuộc sống rất ngắn. Đừng lãng phí nó bởi nỗi buồn. Hãy là chính mình, luôn vui vẻ, tự do và trở thành bất cứ gì bạn muốn.",
  "Chúc buổi sáng tốt lành! Chúc bạn có một ngày tràn ngập những khoảnh khắc hào hứng và tuyệt vời.",
  "Tất cả những ai vững niềm tin thì nhất định sẽ gặp may mắn và thành công.",
  "Trên thế giới này chỉ có 2 loại người hạnh phúc: Thứ nhất là kẻ điên và thứ hai là trẻ con. Hãy bị điên để thực hiện những điều mà bạn mong muốn và hãy trẻ con để tận hưởng những gì bạn có. Buổi ,sáng tốt lành nha!",
  "“ Những cơ hội trong cuộc đời cũng giống như những buổi hoàng hôn. Nếu bạn chờ quá lâu, bạn sẽ đánh mất chúng” – William Arthur Ward",
  "Dù cuộc sống có xấu hay tốt thì bạn cũng nên thức dậy vào mỗi sáng và cảm thấy biết ơn vì bạn vẫn được sống và là duy nhất.",
  "Bạn sẽ chẳng có ngày hôm nay một lần nào nữa. vì thế, hãy thức dậy và tận hưởng nó đi nào.",
  "“Bạn không cần phải hoàn hảo để bắt đầu nhưng bạn phải bắt đầu để có được sự hoàn hảo” – Zig ziglar.",
  "“Mỗi ngày của chúng ta đều rất đắt giá. Khi bạn dành một ngày để sống tức là bạn đã mất đi một ngày trong cuộc đời. vì thế, hãy sống mỗi ngày thật ý nghĩa nhất nha!” – Jim Rohn.",
  "Đây không những là một ngày mới, đây là một cơ hội khác để bạn biến ước mơ thành hiện thực. Hãy dậy thôi và bắt đầu một buổi sáng tràn đầy năng lượng.",
  "Hôm nay sẽ là một ngày đẹp trời. Hãy thức dậy và mỉm cười bạn nha!",
  "Hãy thiết lập mục tiêu mà bạn muốn rồi nhảy ra khỏi giường ngay thôi nào.",
  "Mỗi ngày mới là một sức mạnh và suy nghĩ khác đi. Hãy thức dậy vào mỗi buổi sáng và nói với bản thân rằng “Tôi khả năng làm được.",
  "“Hãy mỉm cười trong gương. Hãy làm điều đó mỗi ngày và bạn sẽ bắt đầu thấy một sự thay đổi ngay lớn trong cuộc đời mình” – Yoko Ono.",
  "“Bạn sẽ chẳng bao giờ thay đổi ngay cuộc sống của mình cho đến khi bạn thay đổi ngay một vài điều bạn làm mỗi ngày. Bí mật của sự thành công được tìm thấy trong tập tính mỗi ngày của bạn” – John ,C. Maxwell.",
  "Hãy nhớ rằng những điều bạn làm hôm nay sẽ làm nên những điều kỳ diệu cho ngày hôm sau.",
  "“Hãy bắt đầu nơi mà bạn đang đứng. Hãy dùng những điều mà bạn đang có. Hãy làm những gì bạn khả năng” – Arthur Ashe.",
];

// calc & set Text
let quoteData = localStorage.getItem("QuoteData")
let from = new Date("07/20/2022");
let to = new Date();
const ONE_DAY = 24 * 60 * 60 * 1000;
const diffDays = Math.floor(Math.abs((from - to) / ONE_DAY));
let randomNum = diffDays % quotes.length;

count.textContent = `#DAY${diffDays}`
txt.textContent = quotes[randomNum].replace(/“/g, '').replace(/”/g, '');


// img