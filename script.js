const chapters = [
  {
    numeral: '壹', label: '第一章', english: 'CHAPTER ONE', title: '杏坛与治学',
    description: '躬耕杏坛，求索不止<br>在田野与课堂之间，见证治学的温度',
    tone: 'scholar',
    photos: [
      ['photo-01.webp', '课题申报研讨', '2011 年 11 月 25 日', '', '围坐研讨、切磋求真，是一段关于治学初心的珍贵记录。', '供图：胡亦俊'],
      ['photo-02.webp', '早年调研', '早年', '', '从书斋走向田野，在真实世界中寻找问题，也寻找答案。', '时间、地点待补充'],
      ['photo-03.webp', '衢州龙游水产调研', '2018 年 6 月 27 日', '浙江 · 衢州龙游', '师门一行深入一线开展水产调研，把学问写在广阔大地上。', '供图：鄢贞'],
      ['photo-04.webp', '京都大学访学', '2023 年', '日本 · 京都大学', '跨越山海的学术交流，让思考在更开阔的坐标中生长。', '人物、供图待确认'],
      ['photo-05.webp', '与 MIT 团队合影', '2017 年暑假', '', '在交流与碰撞中拓展研究边界，也留下同行的珍贵瞬间。', '供图：杨之颖'],
      ['photo-06.webp', '温哥华农经年会', '2018 年', '加拿大 · 温哥华', '在国际学术舞台上交流新知，步履不停，求索不止。', '供图：唐利群'],
      ['photo-07.webp', '临安太阳镇调研', '2022 年', '杭州 · 临安太阳镇', '走进乡村、倾听现场，让研究始终与现实紧密相连。', '供图：赵文欣'],
      ['photo-08.webp', '海外调研学习', '2025 年', '德国 · 哥廷根大学', '严谨的指导与充分的信任，托举学生走向更远的学术天地。', '供图：陈凯文'],
      ['photo-09.webp', 'MPA 班企业调研合影', '2026 年 5 月 24 日', '浙江蓝美技术股份有限公司', '师生同行，在企业一线观察、提问与思考。', '供图：贾丽婼'],
      ['photo-10.webp', '调研交流分享', '2026 年 5 月 24 日', '浙江蓝美技术股份有限公司', '言传身教，将多年积淀化作现场清晰而温暖的启发。', '供图：贾丽婼']
    ]
  },
  {
    numeral: '贰', label: '第二章', english: 'CHAPTER TWO', title: '同行与桃李',
    description: '一程相伴，满庭芳华<br>那些并肩走过的日子，汇成桃李芬芳',
    tone: 'companions',
    photos: [
      ['photo-11.webp', '2011 届毕业聚餐', '2011 年', '', '从课堂到人生新程，老师的陪伴与祝福始终都在。', '供图：胡亦俊'],
      ['photo-12.webp', '师门合影', '2021 年', '', '一张合影，定格师门相聚的亲切与踏实。', '供图：赵文欣 · 年份待确认'],
      ['photo-13.webp', '毕业聚餐', '2022 年 6 月', '', '在告别与启程之间，把共同成长的岁月珍藏。', '人物、供图待补充'],
      ['photo-14.webp', '教师节相聚', '2023 年', '', '桃李不言，心意自明；每一次相聚都是深深的惦念。', '人物、供图待补充'],
      ['photo-15.webp', '教师节留影', '2024 年', '', '以花与笑容致敬师恩，感谢一路的指引和守护。', '供图：梁玉虎'],
      ['photo-16.webp', '又一年教师节', '2025 年', '', '岁月向前，师生情谊在一次次重逢里历久弥新。', '供图：胡亦俊'],
      ['photo-17.webp', '毕业时刻', '2026 年 6 月', '', '梁玉虎、袁欣婷毕业，带着老师的嘱托奔赴新程。', '供图：梁玉虎'],
      ['photo-18.webp', '毕业留影', '2026 年', '', '求学路上的悉心指引，化作毕业时最笃定的底气。', '供图：梁玉虎'],
      ['photo-19.webp', '师门合照', '2026 年 6 月', '', '一群人、一份共同的归属，笑意里都是家的温度。', '供图：袁欣婷'],
      ['photo-20.webp', '并肩同行', '2026 年 6 月', '', '相聚有时，情谊长久；每一位学生都是师门故事的一页。', '供图：袁欣婷']
    ]
  },
  {
    numeral: '叁', label: '第三章', english: 'CHAPTER THREE', title: '生活与欢聚',
    description: '灯火可亲，笑语常在<br>平凡而明亮的相聚，织成岁月的温柔底色',
    tone: 'celebration',
    photos: [
      ['photo-21.webp', '生日相聚', '2018 年', '', '烛光与笑意相映，那些被惦念的时刻总格外温暖。', '供图：唐利群'],
      ['photo-22.webp', '生日祝福', '2024 年', '', '年年有今日的祝愿，也有始终如一的敬爱与感恩。', '供图：胡亦俊'],
      ['photo-23.webp', '生日留影', '2023 年', '', '在熟悉的笑脸之间，共度一段温暖欢欣的时光。', '供图：胡亦俊'],
      ['photo-24.webp', '露营烧烤', '2023 年', '', '走出课堂，围坐相谈；烟火气里，是师门自在的亲近。', '供图：胡亦俊'],
      ['photo-25.webp', '卡特新年晚会', '2011 年', '', '周老师放声歌唱，张关良老师伴舞，留下生动又可爱的记忆。', '供图：胡亦俊'],
      ['photo-26.webp', '师门记忆', '岁月留影', '', '镜头记下相聚，也记下彼此陪伴的轻松时刻。', '供图：金宇 · 事件待补充'],
      ['photo-27.webp', '师门记忆', '岁月留影', '', '时光流转，熟悉的笑容让每次回望都倍感亲切。', '供图：金宇 · 事件待补充'],
      ['photo-28.webp', '欢聚一堂', '岁月留影', '', '生活的可爱，藏在一次次自然、真挚的相聚之中。', '供图：金宇 · 事件待补充'],
      ['photo-29.webp', '温暖相伴', '岁月留影', '', '亦师亦友的情谊，让师门一直可靠，也一直像家。', '供图：金宇 · 事件待补充'],
      ['photo-30.webp', '笑语长存', '岁月留影', '', '愿往后的每一年，都有这样的欢笑、从容与明亮。', '供图：金宇 · 事件待补充']
    ]
  }
];

const shell = document.querySelector('.app-shell');
const tapZone = document.querySelector('#openTapZone');
const openHint = document.querySelector('#openHint');
const skipButton = document.querySelector('#skipAnimation');
const greeting = document.querySelector('#greeting');
const enterAlbum = document.querySelector('#enterAlbum');
const album = document.querySelector('#album');
const chapterIntro = document.querySelector('#chapterIntro');
const photoCard = document.querySelector('#photoCard');
const albumEnd = document.querySelector('#albumEnd');
const controls = document.querySelector('#albumControls');
const swipeHint = document.querySelector('#swipeHint');
const skipChapter = document.querySelector('#skipChapter');
const previousButton = document.querySelector('#previousPhoto');
const nextButton = document.querySelector('#nextPhoto');
const stage = document.querySelector('#albumStage');

let openingTimer;
let isOpening = false;
let chapterIndex = 0;
let photoIndex = 0;
let albumMode = 'intro';
let touchStartX = 0;
let touchStartY = 0;
let touchStartTime = 0;
let isTransitioning = false;

function showGreeting() {
  window.clearTimeout(openingTimer);
  shell.classList.remove('is-opening', 'is-album');
  shell.classList.add('is-greeting');
  greeting.setAttribute('aria-hidden', 'false');
  album.setAttribute('aria-hidden', 'true');
  skipButton.hidden = true;
  isOpening = false;
}

function openCard() {
  if (isOpening || shell.classList.contains('is-greeting')) return;
  isOpening = true;
  shell.classList.add('is-opening');
  skipButton.hidden = false;
  openingTimer = window.setTimeout(showGreeting, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 280 : 2200);
  try { if (navigator.vibrate) navigator.vibrate(12); } catch (error) { console.debug('Haptic feedback is unavailable.', error); }
}

function bindOpenTrigger(element) {
  element.addEventListener('click', openCard, { passive: true });
  element.addEventListener('touchend', (event) => { event.preventDefault(); openCard(); }, { passive: false });
}

function updateHeader() {
  const chapter = chapters[chapterIndex];
  document.querySelector('#albumChapter').textContent = chapter.label;
  document.querySelector('#albumTitle').textContent = chapter.title;
  document.querySelector('#albumProgress').textContent = albumMode === 'photo'
    ? `${String(chapterIndex * 10 + photoIndex + 1).padStart(2, '0')} / 30`
    : albumMode === 'end' ? '30 / 30' : '引章';
  document.querySelectorAll('.chapter-dots span').forEach((dot, index) => dot.classList.toggle('is-active', index === chapterIndex));
}

function renderChapterIntro(index) {
  chapterIndex = index;
  photoIndex = 0;
  albumMode = 'intro';
  const chapter = chapters[index];
  album.dataset.tone = chapter.tone;
  chapterIntro.hidden = false;
  photoCard.hidden = true;
  albumEnd.hidden = true;
  controls.hidden = true;
  swipeHint.hidden = true;
  skipChapter.hidden = false;
  document.querySelector('#chapterNumeral').textContent = chapter.numeral;
  document.querySelector('#chapterEnglish').textContent = chapter.english;
  document.querySelector('#chapterTitle').textContent = chapter.title;
  document.querySelector('#chapterDescription').innerHTML = chapter.description;
  document.querySelector('#chapterRange').textContent = `照片 ${String(index * 10 + 1).padStart(2, '0')}—${String(index * 10 + 10).padStart(2, '0')}`;
  updateHeader();
  animateStage('forward');
}

function renderPhoto(direction = 'forward') {
  const chapter = chapters[chapterIndex];
  const photo = chapter.photos[photoIndex];
  albumMode = 'photo';
  chapterIntro.hidden = true;
  albumEnd.hidden = true;
  photoCard.hidden = false;
  controls.hidden = false;
  swipeHint.hidden = false;
  skipChapter.hidden = false;
  document.querySelector('#albumPhoto').src = `./assets/photos/${photo[0]}`;
  document.querySelector('#albumPhoto').alt = `${photo[1]}，${photo[2]}`;
  document.querySelector('#photoTitle').textContent = photo[1];
  document.querySelector('#photoTime').textContent = photo[2];
  const place = document.querySelector('#photoPlace');
  place.textContent = photo[3];
  place.hidden = !photo[3];
  document.querySelector('#photoDescription').textContent = photo[4];
  document.querySelector('#photoCredit').textContent = photo[5];
  previousButton.disabled = chapterIndex === 0 && photoIndex === 0;
  nextButton.querySelector('span:first-child').textContent = photoIndex === 9 ? (chapterIndex === 2 ? '看完本章' : '下一章') : '下一张';
  updateHeader();
  animateStage(direction);
  preloadNeighbors();
}

function renderAlbumEnd() {
  albumMode = 'end';
  chapterIntro.hidden = true;
  photoCard.hidden = true;
  albumEnd.hidden = false;
  controls.hidden = true;
  swipeHint.hidden = true;
  skipChapter.hidden = true;
  updateHeader();
  animateStage('forward');
}

function animateStage(direction) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  stage.classList.remove('slide-forward', 'slide-back');
  void stage.offsetWidth;
  stage.classList.add(direction === 'back' ? 'slide-back' : 'slide-forward');
  window.setTimeout(() => stage.classList.remove('slide-forward', 'slide-back'), 420);
}

function startChapter() { photoIndex = 0; renderPhoto('forward'); }

function nextPhoto() {
  if (isTransitioning || albumMode !== 'photo') return;
  isTransitioning = true;
  if (photoIndex < 9) { photoIndex += 1; renderPhoto('forward'); }
  else if (chapterIndex < chapters.length - 1) renderChapterIntro(chapterIndex + 1);
  else renderAlbumEnd();
  window.setTimeout(() => { isTransitioning = false; }, 360);
}

function previousPhoto() {
  if (isTransitioning || albumMode !== 'photo') return;
  if (chapterIndex === 0 && photoIndex === 0) return;
  isTransitioning = true;
  if (photoIndex > 0) { photoIndex -= 1; renderPhoto('back'); }
  else { chapterIndex -= 1; photoIndex = 9; album.dataset.tone = chapters[chapterIndex].tone; renderPhoto('back'); }
  window.setTimeout(() => { isTransitioning = false; }, 360);
}

function jumpToNextChapter() {
  if (chapterIndex < chapters.length - 1) renderChapterIntro(chapterIndex + 1);
  else renderAlbumEnd();
}

function preloadNeighbors() {
  const targets = [];
  if (photoIndex < 9) targets.push(chapters[chapterIndex].photos[photoIndex + 1][0]);
  if (photoIndex > 0) targets.push(chapters[chapterIndex].photos[photoIndex - 1][0]);
  targets.forEach((name) => { const image = new Image(); image.src = `./assets/photos/${name}`; });
}

function openAlbum() {
  chapterIndex = 0;
  shell.classList.add('is-album');
  greeting.setAttribute('aria-hidden', 'true');
  album.setAttribute('aria-hidden', 'false');
  renderChapterIntro(0);
}

bindOpenTrigger(tapZone);
bindOpenTrigger(openHint);
skipButton.addEventListener('click', showGreeting);
enterAlbum.addEventListener('click', openAlbum);
document.querySelector('#startChapter').addEventListener('click', startChapter);
document.querySelector('#restartAlbum').addEventListener('click', () => renderChapterIntro(0));
nextButton.addEventListener('click', nextPhoto);
previousButton.addEventListener('click', previousPhoto);
skipChapter.addEventListener('click', jumpToNextChapter);

stage.addEventListener('touchstart', (event) => {
  if (albumMode !== 'photo' || event.target.closest('button')) return;
  const touch = event.changedTouches[0];
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
  touchStartTime = Date.now();
}, { passive: true });

stage.addEventListener('touchend', (event) => {
  if (albumMode !== 'photo' || !touchStartTime) return;
  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - touchStartX;
  const deltaY = touch.clientY - touchStartY;
  const duration = Date.now() - touchStartTime;
  touchStartTime = 0;
  if (Math.abs(deltaX) < Math.abs(deltaY) * 1.25) return;
  if (Math.abs(deltaX) > 56 || (Math.abs(deltaX) > 34 && duration < 260)) {
    if (deltaX < 0) nextPhoto(); else previousPhoto();
  }
}, { passive: true });

document.addEventListener('keydown', (event) => {
  if (!shell.classList.contains('is-album') || shell.classList.contains('is-heartfelt')) return;
  if (event.key === 'ArrowRight') nextPhoto();
  if (event.key === 'ArrowLeft') previousPhoto();
});

window.addEventListener('pageshow', (event) => { if (event.persisted && isOpening) showGreeting(); });

const previewState = new URLSearchParams(window.location.search).get('preview');
if (previewState === 'greeting') showGreeting();
if (previewState === 'album') { showGreeting(); openAlbum(); }
if (previewState === 'photo') { showGreeting(); openAlbum(); startChapter(); }


const heartKeywords = [
  ['严谨治学', 'large'], ['温暖坚定', 'large'], ['宽厚谦和', 'medium'], ['博学笃行', 'medium'],
  ['雍容知性', 'medium'], ['心系学生', 'large'], ['从容通透', 'small'], ['诲人不倦', 'medium'],
  ['温柔有力量', 'large'], ['求是深耕', 'small'], ['尊重包容', 'medium'], ['桃李春风', 'small'],
  ['热忱笃行', 'small'], ['亦师亦母', 'medium']
];

const selectedWishes = [
  { name: '陈凯文', identity: '2024 级硕士', text: `得遇良师，何其有幸！祝周老师六十大寿快乐美满，身体安康，学术常青，一切顺遂！` },
  { name: '赵文欣', identity: '2021 级硕士', text: `敬爱的周老师，值您六十华诞，谨向您致以最诚挚的生日祝福！求学路上，承蒙周老师悉心教诲，您严谨务实的治学态度、宽厚谦和的待人风范，不仅指引我深耕专业学识，更教会我立身行事的道理，工作后念起周老师的谆谆教诲也受益颇多。六十岁是人生丰盈从容的新起点，衷心祝愿周老师福寿安康，身体康健；桃李芬芳，顺遂常乐；闲暇尽享岁月悠然，岁岁皆安，万事胜意！` },
  { name: '叶俊焘', identity: '周门弟子', text: `您常说“农业经济是大地上的论文”，而您正是那个把论文写在田垄与数据之间的人。每一次调研路上的“下一步”，每一页改满批注的草稿，都让我看见严谨如何与温情共生——您以学术为犁，翻耕思想的土壤，更以倾听为雨，润泽每一个年轻学子的困惑。\n\n今日烛光映照的不止年轮，还有您用脚步丈量过的乡村、用模型推演过的丰收。愿新岁里，您的案头总有一盏不倦的灯，窗前常驻四季的风；愿您深耕的领域，不仅有数据的精准，更有麦浪般的诗意与回响。生日快乐，我敬爱的导师——您教会我们的，早已超越了论文与方程，而是如何敬畏土地，也敬畏时光。` },
  { name: '张仕都', identity: '2007 级硕士', text: `祝周老师生日快乐！感谢您一直以来的谆谆教诲与悉心指引，愿您身体康健，万事顺遂，桃李满天下！` },
  { name: '张劲萧', identity: '2010 级硕士', text: `愿周老师身体康健，日子从容，喜乐常相随。` },
  { name: '李凯', identity: '2011 级博士', text: `严处见风范，慈处见仁心。值此花甲华诞，谨祝周老师身心康宁，和乐且湛，萱草长春，桃李满门。` },
  { name: '章迎迎', identity: '2012 级硕士', text: `尊敬的周老师，转眼间毕业已十一载有余，虽不常见面，但求学时您给予我的教导与关怀，始终历历在目、铭记于心。您认真治学、平和处世的人生态度也一直潜移默化指引我的工作与生活，让我受益终身。值此您六十华诞，衷心祝愿您福寿安康，诸事顺遂，喜乐常伴，岁岁皆安。` },
  { name: '刘青', identity: '2013 级博士', text: `非常感谢周老师在科研道路上的悉心指导和温柔包容！您严谨治学的态度和敏锐的学术洞察力一直是我学习的榜样～在这个特殊的日子里，祝周老师生日快乐，科研长青，硕果累累，桃李芬芳！` },
  { name: '唐利群', identity: '2013 级博士', text: `您以师者的格局引领我们治学，以母亲般的温柔体恤我们成长。幸遇恩师，亦如慈母，感恩这份双重的温暖守护，祝周老师生辰喜乐，福寿安康，岁月安然。` },
  { name: '高霈', identity: '2015 级硕士', text: `敬爱的周老师，六十岁生日快乐！感谢您教会我如何做成一项研究，做好一篇论文，做精一件事情，您让我懂得如何寻找方向、认识自己、走向更大的世界。您用耐心和关怀教会我如何科学严谨思考，也用您的智慧和远见为我打开一扇又一扇新的大门。您不仅是我的导师，更是我人生的引路人。师恩难忘，祝您身体健康，事事顺心，永远快乐。` },
  { name: '武宗励', identity: '2015 级博士', text: `全世界最好的周老师，生日快乐！祝您不管多少岁，心态永远 18！新的一岁，愿您少生气，长健康，多发 paper，多多好运！特别感谢您给予我的鼓励和包容，爱您！` },
  { name: '王煜', identity: '2016 级博士', text: `从大三到博士毕业，一路走来，能成为周老师的学生是最幸运的事。周老师总是用宽厚的态度支持我的每一个选择，在迷茫时耐心指引，在气馁时坚定地告诉我研究的价值。那些被仔细修改过的论文、被悄悄关照过的生活细节，都是求学路上最踏实的依靠。是周老师让我明白，科研之路可以既有严谨的深度，也有生活的温度。在这个特别的日子里，希望周老师多留一些时间给自己，去赏花、去听风、去拥抱生活里的小确幸。祝周老师和家人事事顺遂、天天开心！🌹🌹` },
  { name: '黄好', identity: '2018 级博士', text: `始终感激在周老师的团队里顺利的度过了硕博阶段。周老师一直鼓励，让我可以大胆的探索自己感兴趣的研究方向；周老师耐心指导，也为我牵线相关的研究者，帮助我不断成长进步；在我自觉失败气馁的时候，周老师仍坚持我们的研究一定是有一定价值和意义的，我才得以顺利的毕业，再次再次的感谢。\n\n又一年教师节及周老师的生日之际，祝周老师和家人，万事胜意，生活如花一样的芬芳美好，年年灿烂！` },
  { name: '李祎', identity: '2018 级硕士', text: `非常幸运能遇到周老师，从本科时候第一次收获您的指导，到后来正式进入师门，感谢周老师一步步引领我向前。对我而言，您不仅教会我做学问，更教我以坚强勇敢的心面对所有困难。无论任何时候回忆起都弥足珍贵，您的从容与智慧是我努力的方向。\n\n衷心祝愿周老师生日快乐，身体健康，桃李满天下，愿您和家人诸事顺遂，生活永远幸福而温暖。` },
  { name: '沈云', identity: '2018 级博士', text: `周老师生日快乐，教师节也快乐！很抱歉最近在忙调研，可能没法到现场和大家共同为周老师庆祝，但希望大家玩得开心！\n\n在此给周老师发送一下我没有放进博士论文但一直都写好了的致谢：\n\n感谢我的导师周洁红教授。周老师不仅是我在学术道路上的指路人，更是我科研生涯中最重要的启蒙者。从初入师门时的懵懂无知，到第一篇文章的修改和定稿、第一次参加学术会议，再到最终完成学位论文的每个关键节点，在这期间无数次的讨论、数据分析调整、文字修改和返稿中，周老师始终以她严谨治学、精益求精的学术态度耐心教导和引领着我。同时还要特别感谢周老师的包容与开放。我在读期间漂发又穿孔，有时在路上都会引人侧目，但周老师从未表现出任何异样眼光，永远淡然微笑着迎接我的每次变化。这种从容平和的态度和“严于学术，宽于为人”的处世哲学，真正教会了我如何平衡自我表达与专业追求。\n\n最后，再次祝周老师生日快乐，永远健康、幸福！` },
  { name: '金宇', identity: '2019 级博士', text: `感谢周老师一路以来的悉心引领与温暖鼓励，祝您生日快乐、岁岁安康、阖家幸福、桃李芬芳！` },
  { name: '张晶', identity: '2020 级硕士', text: `周老师是一位负责、耐心、亲切的老师，祝周老师 60 周岁快乐，身体健康，阖家幸福，万事胜意。` },
  { name: '魏珂', identity: '2020 级博士', text: `周老师，值您六十华诞，回首师门求学岁月，心中常怀对您的无限感恩。\n\n初入师门之时，我只是一名懵懂青涩的学术新人。您治学严谨，一丝不苟，每一篇小论文，您都会留下百余处细致批注，从篇章架构直至标点字句，悉心打磨；又为我争取机会、搭建平台，引领我踏入学术之门。\n\n求学途中，我一度深陷迷茫困顿。是您始终没有放弃停滞不前的我。学业上多方统筹，协调同门相助，陪伴我熬过论文最艰难的阶段；更看见我内心的煎熬，牵挂我的身心状态，一次次开导劝慰，即便在我怀疑自我时，依然选择相信我，倾尽心力托举我完成学业，顺利毕业。\n\n这份恩情早已超越普通传道授业，是困境之中一份珍贵的成全。我既感念与您相遇的幸运，心底也始终留存一份沉甸甸的感念。\n\n岁月悠长，师恩铭刻肺腑。恭贺您六十寿辰，愿您往后岁月身心安泰，福寿绵长，阖家安康。` },
  { name: '胡亦俊', identity: '2022 级博士', text: `印象中，我总是在办公室里跟您唠嗑，从论文框架到人生规划，从课题文章到家长里短。您就像农经之母，用您的“唠叨”和“操心”，把我们从一个个懵懂的学生，培养成独当一面的各界精英。感念师恩，在我人生的众多抉择中，始终为我指引前行的方向。祝愿老师六十岁生日快乐，天天开心、事事顺心，永葆热情与活力！` },
  { name: '钭露露', identity: '2023 级博士', text: `初听见关于周老师的消息是我还在读研的时候，那时师姐们来浙大参加学术会议，回校后跟我们说遇见了一位十分专业和干练的老师，当时我便埋下了好奇的种子。后来，我非常幸运地成为了周老师的学生，慢慢地发现，在治学严谨、专业干练的另一面，是周老师像长辈一样细心呵护每位学生的成长。尤记得，在日常的科研讨论之余，周老师会询问我是否因科研压力而焦虑、会关心我在哥廷根联培是否安顿妥当、会鼓励我多去欧洲各国走走看看，也会很早就为我未来可能的发展方向与就业提供建议...当然，我们也会聊一些更具生活气息的话题，在春节期间我们会讨论讨论年味，老师会说“农家做的豆腐才好吃”；在我来到哥廷根月余时，我也会和老师“抱怨”德国的水质似乎会加大头发的掉落概率。在一次次的科研讨论与日常相处中，我渐渐不再像刚入学时一样紧张，因为我知道周老师对我们来说不仅仅是一位传道授业的导师，更像是一位期盼着孩子成长的长辈。能够成为周老师的学生，我深感幸运，也始终心怀感激。值此生日之际，谨祝周老师生日快乐！愿您岁岁安康、事事顺遂，桃李满园，学术之树常青，求是薪火长续！` },
  { name: '徐子龙', identity: '2023 级博士', text: `周老师，生日快乐！很幸运能成为您的学生。谢谢您在学业上的耐心指导，也谢谢您一直以来对我们的关心和照顾。和您相处，总能感受到温暖与安心，让我在遇到困难时多了一份勇气。愿新的一岁，您身体健康、生活舒心，忙碌之余也有充足的时间享受生活、做自己喜欢的事。愿我们带给您的快乐，也像您给予我们的温暖一样多！🎂💐` },
  { name: '袁欣婷', identity: '2023 级硕士', text: `周老师，祝您生日快乐！回想读研的时光，很感恩能够成为您的学生。敬佩您一直保持饱满的热情投入工作，感谢您一直以来对我学业和生活上的关心。愿您岁月添华彩，四时皆安，喜乐常随！` },
  { name: '杨小能', identity: '2024 级硕士', text: `祝周老师生日快乐🎂！很感恩求学路上能够遇见您。您待人温暖，做事认真严谨，无论是学业上的指点，还是平日里的关怀，都让我收获良多。愿您往后日子平安顺遂，万事舒心，身体健康，喜乐常伴！` },
  { name: '尹宗硕', identity: '2024 级博士', text: `周老师，很庆幸在人生和求学的这段路上能够遇到您，也一直很感谢您对学生的教导、关心和包容。正是因为您的接纳与包容，我才有机会来到浙大继续求学与成长。能够加入周门这个温暖有爱又彼此支持的大家庭，我一直觉得十分幸运，也格外珍惜这段难得的缘分。您教给我的不仅是科研上的知识，更是做事的态度、看问题的方式。\n\n六十岁是一个值得纪念的日子。希望未来的日子里，您少一些操劳，多一些轻松和自在。衷心祝愿您身体健康，平安顺遂。祝您往后的每一年，都从容、充实、喜乐。` },
  { name: '贾丽婼', identity: '2025 级硕士', text: `敬爱的周老师，祝您六十岁生日快乐！作为 2025 级硕士新生，能够加入周门、成为您的学生，我感到非常幸运。您雍容而有气度，始终尊重每一位学生的想法，鼓励我们探索适合自己的方向、勇敢成长。无论面对学业上的困难，还是未来发展的选择，您总能给予我们最坚定、最有力的支持，是我们可以安心依靠的坚实后盾。在师门，我感受到的不仅是严谨与专业，更有像家一样的可靠与温暖。衷心祝愿您身体健康、岁月从容、喜乐常伴，未来的每一天都顺遂如意、幸福美满！` },
  { name: '王璐', identity: '2025 级硕士', text: `很幸运能够成为周门的一份子，感谢周老师在求学路上的悉心指引与包容鼓励。祝您生日快乐，岁月从容，喜乐安康，万事皆如意！` },
  { name: '豆泽欣', identity: '2026 级博士', text: `愿老师生辰喜乐，身体康健，万事顺遂，桃李芬芳！` }
];

const mentorStories = [
  {
    tag: '严谨与鼓励',
    title: '深夜的批注与“打铁还需自身硬”的底气',
    summary: '深夜 23 点的细致批注、一句“加油干！”，以及“打铁还需自身硬”的叮嘱，成为求学路上温暖而有力的支持。',
    name: '陈凯文', identity: '2024 级硕士',
    body: `在撰写专业实践案例与研究报告期间，周老师给予了我和团队（杨小能、袁欣婷等）细致的指导。即使到了深夜 23 点，周老师依然会认真审阅并及时反馈具体的修改建议，对话末尾一句“加油干！”总能在关键时刻给我莫大的动力。在周老师的悉心点拨下，报告逻辑与内容得以不断完善，最终顺利获评浙江大学优秀实践成果一等奖与浙江省专业学位研究生优秀创新成果。

在竞选“文奇奖学金”等荣誉时，周老师不仅耐心帮我梳理汇报思路、指出不足，更叮嘱我“打铁还需自身硬”。这句话不仅缓解了我当时的焦虑，更让我明白把内功练扎实才是立身之本，激励着我放平心态、继续努力。

深夜里的详尽批注与质朴有力的教诲，是我求学期间最温暖也最有力的支持。未来无论在学术探索还是工作岗位上，我都将带着这份严谨与踏实，笃行致远。`
  },
  {
    tag: '陪伴与托举',
    title: '跨越山海的牵挂',
    summary: '从论文选题到德国联合培养，再到博士毕业求职，老师的指导从不止于科研，更像长辈般守护每一次成长。',
    name: '梁玉虎', identity: '2021 级学生',
    body: `博士求学数载，回望在周门学习和成长的日子，有许多片段始终令我难忘。衷心感谢我的导师周洁红教授。一路走来，周老师不仅给予我严谨细致的学术指导，也在生活、成长和求职过程中给予我长辈般的关怀与支持。

在学术上，周老师始终严谨认真、精益求精。从论文选题、研究设计，到实证分析、论文写作与反复修改，每一个环节都倾注了大量心血。很多时候，一篇论文、一份材料经过周老师指导后，我才真正意识到，看似细微的文字和逻辑背后，体现的是做学问应有的严谨与责任。

赴德国联合培养期间，虽然远隔重洋，周老师依然经常关心我的学习、科研和生活情况，鼓励我珍惜机会、开阔视野，也时常叮嘱我照顾好自己。记得有一次感冒生病，周老师得知后多次叮嘱我要注意身体、劳逸结合。几句朴实的嘱咐，让我在异国求学期间感受到了一份格外温暖的牵挂。

博士毕业求职期间，从就业方向的建议，到机会的推荐，再到一次次鼓励，周老师始终设身处地为学生的长远发展考虑。一位好导师对学生的影响，远远不止于帮助完成一篇论文、取得一个学位，更在于教会学生如何做学问、如何做事、如何走好未来的人生道路。

师恩难忘，薪火相传。愿自己未来无论身处何地，都能铭记周老师的教诲，并将曾经从老师那里得到的关怀、责任与温暖继续传递下去。`
  },
  {
    tag: '毕业后的关怀',
    title: '暖心小故事',
    summary: '毕业近一年后再见，老师依然细致询问工作与生活，叮嘱年轻人沉下心、脚踏实地，让迷茫重新变得坚定。',
    name: '赵文欣', identity: '2021 级硕士',
    body: `在我毕业工作近一年后，周老师有一次因种业推广研究工作，恰巧到我单位座谈。在忙碌的工作间隙，周老师依然对我的工作、生活关怀备至，不仅细致询问我工作以来的感受、生活近况，还耐心指导我要转换学生思维，适应职场。

周老师语重心长地叮嘱我，年轻人要沉下心来、脚踏实地。这份跨越毕业界限的关怀，让我倍感温暖与感动，也让我在工作遇到困惑的时候重拾信心，坚定踏实前行、不负期许的信念。

周老师用一言一行诠释着师者仁心，这份暖心陪伴成为我人生发展道路上坚实的力量。`
  },
  {
    tag: '尊重与包容',
    title: '严于学术，宽于为人',
    summary: '从第一篇文章到学位论文，老师严谨耐心；面对学生鲜明的自我表达，她始终从容微笑，以尊重诠释包容。',
    name: '沈云', identity: '2018 级博士',
    body: `感谢我的导师周洁红教授。周老师不仅是我在学术道路上的指路人，更是我科研生涯中最重要的启蒙者。从初入师门时的懵懂无知，到第一篇文章的修改和定稿、第一次参加学术会议，再到最终完成学位论文的每个关键节点，在无数次的讨论、数据分析调整、文字修改和返稿中，周老师始终以她严谨治学、精益求精的学术态度耐心教导和引领着我。

同时还要特别感谢周老师的包容与开放。我在读期间漂发又穿孔，有时在路上都会引人侧目，但周老师从未表现出任何异样眼光，永远淡然微笑着迎接我的每次变化。

这种从容平和的态度和“严于学术，宽于为人”的处世哲学，真正教会了我如何平衡自我表达与专业追求。最后，再次祝周老师生日快乐，永远健康、幸福！`
  },
  {
    tag: '相信与成全',
    title: '困境中的珍贵成全',
    summary: '在学业最艰难的阶段，老师没有放弃停滞不前的学生，而是协调帮助、耐心开导，用相信托举她完成学业。',
    name: '魏珂', identity: '2020 级博士',
    body: `周老师，值您六十华诞，回首师门求学岁月，心中常怀对您的无限感恩。

初入师门之时，我只是一名懵懂青涩的学术新人。您治学严谨，一丝不苟，每一篇小论文，您都会留下百余处细致批注，从篇章架构直至标点字句，悉心打磨；又为我争取机会、搭建平台，引领我踏入学术之门。

求学途中，我一度深陷迷茫困顿。是您始终没有放弃停滞不前的我。学业上多方统筹，协调同门相助，陪伴我熬过论文最艰难的阶段；更看见我内心的煎熬，牵挂我的身心状态，一次次开导劝慰。即便在我怀疑自我时，您依然选择相信我，倾尽心力托举我完成学业、顺利毕业。

这份恩情早已超越普通传道授业，是困境之中一份珍贵的成全。岁月悠长，师恩铭刻肺腑。恭贺您六十寿辰，愿您往后岁月身心安泰，福寿绵长，阖家安康。`
  }
];

const heartfelt = document.querySelector('#heartfelt');
const keywordScene = document.querySelector('#keywordScene');
const wishScene = document.querySelector('#wishScene');
const storyScene = document.querySelector('#storyScene');
const storyModal = document.querySelector('#storyModal');
let heartSceneIndex = 0;
let wishIndex = 0;
let storyIndex = 0;

function renderKeywords() {
  const cloud = document.querySelector('#keywordCloud');
  if (cloud.children.length) return;
  heartKeywords.forEach(([word, size], index) => {
    const span = document.createElement('span');
    span.className = `keyword keyword--${size}`;
    span.textContent = word;
    span.style.setProperty('--delay', `${index * 55}ms`);
    cloud.appendChild(span);
  });
}

function renderDots(containerId, total, active) {
  const container = document.querySelector(containerId);
  container.replaceChildren();
  container.classList.toggle('is-track', total > 10);
  if (total > 10) {
    const progress = document.createElement('span');
    progress.style.setProperty('--progress', `${((active + 1) / total) * 100}%`);
    container.appendChild(progress);
    return;
  }
  for (let index = 0; index < total; index += 1) {
    const dot = document.createElement('span');
    dot.classList.toggle('is-active', index === active);
    container.appendChild(dot);
  }
}

function renderWish(direction = 'forward') {
  const wish = selectedWishes[wishIndex];
  document.querySelector('#wishText').textContent = wish.text;
  document.querySelector('#wishName').textContent = wish.name;
  document.querySelector('#wishIdentity').textContent = wish.identity;
  document.querySelector('#wishCounter').textContent = `${String(wishIndex + 1).padStart(2, '0')} / ${String(selectedWishes.length).padStart(2, '0')}`;
  document.querySelector('#previousWish').disabled = wishIndex === 0;
  document.querySelector('#nextWish').disabled = wishIndex === selectedWishes.length - 1;
  renderDots('#wishDots', selectedWishes.length, wishIndex);
  const card = document.querySelector('#wishCard');
  const wishText = document.querySelector('#wishText');
  const scrollHint = document.querySelector('#wishScrollHint');
  card.classList.remove('is-scrollable');
  scrollHint.hidden = true;
  wishText.scrollTop = 0;
  window.requestAnimationFrame(() => {
    const isScrollable = wishText.scrollHeight > wishText.clientHeight + 2;
    card.classList.toggle('is-scrollable', isScrollable);
    scrollHint.hidden = !isScrollable;
  });
  card.classList.remove('card-forward', 'card-back');
  void card.offsetWidth;
  card.classList.add(direction === 'back' ? 'card-back' : 'card-forward');
}

function renderStory(direction = 'forward') {
  const story = mentorStories[storyIndex];
  document.querySelector('#storyTag').textContent = story.tag;
  document.querySelector('#storyTitle').textContent = story.title;
  document.querySelector('#storySummary').textContent = story.summary;
  document.querySelector('#storyName').textContent = story.name;
  document.querySelector('#storyIdentity').textContent = story.identity;
  document.querySelector('#storyCounter').textContent = `${String(storyIndex + 1).padStart(2, '0')} / ${String(mentorStories.length).padStart(2, '0')}`;
  document.querySelector('#previousStory').disabled = storyIndex === 0;
  document.querySelector('#nextStory').disabled = storyIndex === mentorStories.length - 1;
  renderDots('#storyDots', mentorStories.length, storyIndex);
  const card = document.querySelector('#storyCard');
  card.classList.remove('card-forward', 'card-back');
  void card.offsetWidth;
  card.classList.add(direction === 'back' ? 'card-back' : 'card-forward');
}

function showHeartScene(index, direction = 'forward') {
  heartSceneIndex = index;
  [keywordScene, wishScene, storyScene].forEach((scene, sceneIndex) => { scene.hidden = sceneIndex !== index; });
  document.querySelectorAll('#heartProgress span').forEach((dot, dotIndex) => dot.classList.toggle('is-active', dotIndex === index));
  const activeScene = [keywordScene, wishScene, storyScene][index];
  activeScene.classList.remove('heart-enter-forward', 'heart-enter-back');
  void activeScene.offsetWidth;
  activeScene.classList.add(direction === 'back' ? 'heart-enter-back' : 'heart-enter-forward');
  if (index === 0) renderKeywords();
  if (index === 1) renderWish();
  if (index === 2) renderStory();
}

function openHeartfelt() {
  shell.classList.add('is-heartfelt');
  heartfelt.setAttribute('aria-hidden', 'false');
  album.setAttribute('aria-hidden', 'true');
  showHeartScene(0);
}

function closeHeartfelt() {
  shell.classList.remove('is-heartfelt');
  heartfelt.setAttribute('aria-hidden', 'true');
  album.setAttribute('aria-hidden', 'false');
}

function openStory() {
  const story = mentorStories[storyIndex];
  document.querySelector('#modalStoryTag').textContent = story.tag.toUpperCase();
  document.querySelector('#modalStoryTitle').textContent = story.title;
  document.querySelector('#modalStoryMeta').textContent = `${story.name} · ${story.identity}`;
  const body = document.querySelector('#modalStoryBody');
  body.replaceChildren();
  story.body.split('\n\n').forEach((paragraph) => {
    const p = document.createElement('p');
    p.textContent = paragraph;
    body.appendChild(p);
  });
  storyModal.classList.add('is-open');
  storyModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  document.querySelector('#closeStory').focus();
}

function closeStory() {
  storyModal.classList.remove('is-open');
  storyModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  document.querySelector('#storyCard').focus();
}

document.querySelector('#enterHeartfelt').addEventListener('click', openHeartfelt);
document.querySelector('#toWishes').addEventListener('click', () => showHeartScene(1));
document.querySelector('#toStories').addEventListener('click', () => showHeartScene(2));
document.querySelector('#heartBack').addEventListener('click', () => {
  if (heartSceneIndex > 0) showHeartScene(heartSceneIndex - 1, 'back'); else closeHeartfelt();
});
document.querySelector('#previousWish').addEventListener('click', () => { if (wishIndex > 0) { wishIndex -= 1; renderWish('back'); } });
document.querySelector('#nextWish').addEventListener('click', () => { if (wishIndex < selectedWishes.length - 1) { wishIndex += 1; renderWish(); } });
document.querySelector('#previousStory').addEventListener('click', () => { if (storyIndex > 0) { storyIndex -= 1; renderStory('back'); } });
document.querySelector('#nextStory').addEventListener('click', () => { if (storyIndex < mentorStories.length - 1) { storyIndex += 1; renderStory(); } });
document.querySelector('#storyCard').addEventListener('click', openStory);
document.querySelector('#closeStory').addEventListener('click', closeStory);
document.querySelector('#closeStoryBottom').addEventListener('click', closeStory);
document.querySelector('.story-modal__backdrop').addEventListener('click', closeStory);
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && storyModal.classList.contains('is-open')) closeStory(); });

if (previewState === 'heart' || previewState === 'wishes' || previewState === 'stories') {
  showGreeting();
  shell.classList.add('is-album');
  openHeartfelt();
  if (previewState === 'wishes') {
    const requestedWish = Number(new URLSearchParams(window.location.search).get('wish'));
    if (Number.isInteger(requestedWish) && requestedWish >= 1 && requestedWish <= selectedWishes.length) wishIndex = requestedWish - 1;
    showHeartScene(1);
  }
  if (previewState === 'stories') showHeartScene(2);
}


const blessingVideos = [
  {
    src: './assets/videos/video-yin-upright.mp4', poster: './assets/posters/video-yin-upright.jpg',
    name: '尹世久', identity: '山东女子学院 · 健康养老学院', duration: '01:28',
    caption: '二十余载师生情，祝福温暖如初', orientation: 'portrait', focus: 'lower'
  },
  {
    src: './assets/videos/video-01.mp4', poster: './assets/posters/video-01.jpg',
    name: '陈凯文', identity: '2024 级硕士生', duration: '00:46',
    caption: '感恩培养，生日快乐', orientation: 'landscape'
  },
  {
    src: './assets/videos/video-02.mp4', poster: './assets/posters/video-02.jpg',
    name: '梁玉虎', identity: '2021 级学生', duration: '00:52',
    caption: '感谢一路引领，祝福六十华诞', orientation: 'landscape'
  },
  {
    src: './assets/videos/video-03.mp4', poster: './assets/posters/video-03.jpg',
    name: '金宇、张晶及家人', identity: '2019 级博士 · 2020 级硕士', duration: '01:03',
    caption: '来自师门与家人的温暖祝福', orientation: 'portrait'
  }
];

const videoGallery = document.querySelector('#videoGallery');
const blessingVideo = document.querySelector('#blessingVideo');
const videoPlay = document.querySelector('#videoPlay');
const videoPlayLabel = document.querySelector('#videoPlayLabel');
const videoStatus = document.querySelector('#videoStatus');
const videoCard = document.querySelector('#videoCard');
const credits = document.querySelector('#credits');
const nextVideoButton = document.querySelector('#nextVideo');
let videoIndex = 0;
let preparedVideoIndex = -1;
let activeVideoUrl = '';
let videoLoadController = null;
let isVideoLoading = false;

function releaseVideoSource() {
  if (videoLoadController) videoLoadController.abort();
  videoLoadController = null;
  isVideoLoading = false;
  blessingVideo.pause();
  blessingVideo.removeAttribute('src');
  blessingVideo.load();
  if (activeVideoUrl) URL.revokeObjectURL(activeVideoUrl);
  activeVideoUrl = '';
  preparedVideoIndex = -1;
}

function pauseCurrentVideo(reset = true) {
  blessingVideo.pause();
  if (reset && preparedVideoIndex === videoIndex) {
    try { blessingVideo.currentTime = 0; } catch (error) { console.debug('Video position is not ready.', error); }
  }
  videoPlay.hidden = false;
  videoPlay.disabled = false;
  videoPlayLabel.textContent = preparedVideoIndex === videoIndex ? '点击播放' : '点击加载并播放';
}

function renderVideo(direction = 'forward') {
  releaseVideoSource();
  const item = blessingVideos[videoIndex];
  const frame = document.querySelector('#videoFrame');
  blessingVideo.poster = item.poster;
  videoStatus.textContent = '';
  videoPlay.hidden = false;
  videoPlay.disabled = false;
  videoPlayLabel.textContent = '点击加载并播放';
  frame.classList.toggle('is-portrait', item.orientation === 'portrait');
  frame.classList.toggle('is-focus-lower', item.focus === 'lower');
  document.querySelector('#videoCounter').textContent = `${String(videoIndex + 1).padStart(2, '0')} / ${String(blessingVideos.length).padStart(2, '0')}`;
  document.querySelector('#videoNumber').textContent = `VIDEO ${String(videoIndex + 1).padStart(2, '0')}`;
  document.querySelector('#videoName').textContent = item.name;
  document.querySelector('#videoIdentity').textContent = item.identity;
  document.querySelector('#videoDurationBadge').textContent = item.duration;
  document.querySelector('#videoCaption').textContent = item.caption;
  document.querySelector('#previousVideo').disabled = videoIndex === 0;
  const isLastVideo = videoIndex === blessingVideos.length - 1;
  nextVideoButton.disabled = false;
  nextVideoButton.setAttribute('aria-label', isLastVideo ? '查看筹备组名单' : '下一段视频');
  nextVideoButton.querySelector('span:first-child').textContent = isLastVideo ? '筹备组名单' : '下一段';
  document.querySelectorAll('#videoDots span').forEach((dot, index) => dot.classList.toggle('is-active', index === videoIndex));
  videoCard.classList.remove('card-forward', 'card-back');
  void videoCard.offsetWidth;
  videoCard.classList.add(direction === 'back' ? 'card-back' : 'card-forward');
}

async function prepareVideo() {
  if (preparedVideoIndex === videoIndex && blessingVideo.src) return true;
  if (isVideoLoading) return false;
  const requestedIndex = videoIndex;
  const item = blessingVideos[requestedIndex];
  isVideoLoading = true;
  videoPlay.disabled = true;
  videoPlayLabel.textContent = '正在加载视频…';
  videoStatus.textContent = '首次播放需要先加载视频，请稍候';
  const controller = new AbortController();
  videoLoadController = controller;

  try {
    const response = await fetch(item.src, { signal: controller.signal, cache: 'force-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const blob = await response.blob();
    if (requestedIndex !== videoIndex) return false;
    activeVideoUrl = URL.createObjectURL(blob);
    preparedVideoIndex = requestedIndex;
    blessingVideo.src = activeVideoUrl;
    blessingVideo.load();
    videoStatus.textContent = '';
    videoPlayLabel.textContent = '点击播放';
    return true;
  } catch (error) {
    if (error.name === 'AbortError') return false;
    console.debug('Blob loading failed, falling back to the direct video URL.', error);
    if (requestedIndex !== videoIndex) return false;
    blessingVideo.src = item.src;
    blessingVideo.load();
    preparedVideoIndex = requestedIndex;
    videoStatus.textContent = '加载较慢时，请稍候后再次点击';
    videoPlayLabel.textContent = '重试播放';
    return true;
  } finally {
    if (videoLoadController === controller) {
      isVideoLoading = false;
      videoPlay.disabled = false;
      videoLoadController = null;
    }
  }
}

function openVideos() {
  if (storyModal.classList.contains('is-open')) closeStory();
  shell.classList.add('is-videos');
  heartfelt.setAttribute('aria-hidden', 'true');
  videoGallery.setAttribute('aria-hidden', 'false');
  renderVideo();
}

function closeVideos() {
  releaseVideoSource();
  shell.classList.remove('is-credits', 'is-videos');
  credits.setAttribute('aria-hidden', 'true');
  videoGallery.setAttribute('aria-hidden', 'true');
  heartfelt.setAttribute('aria-hidden', 'false');
  showHeartScene(2, 'back');
}

function openCredits() {
  releaseVideoSource();
  shell.classList.add('is-credits');
  videoGallery.setAttribute('aria-hidden', 'true');
  credits.setAttribute('aria-hidden', 'false');
}

function closeCredits() {
  shell.classList.remove('is-credits');
  credits.setAttribute('aria-hidden', 'true');
  videoGallery.setAttribute('aria-hidden', 'false');
  renderVideo('back');
}

document.querySelector('#toVideos').addEventListener('click', openVideos);
document.querySelector('#videoBack').addEventListener('click', closeVideos);
document.querySelector('#creditsBack').addEventListener('click', closeCredits);
document.querySelector('#previousVideo').addEventListener('click', () => {
  if (videoIndex > 0) { videoIndex -= 1; renderVideo('back'); }
});
nextVideoButton.addEventListener('click', () => {
  if (videoIndex < blessingVideos.length - 1) {
    videoIndex += 1;
    renderVideo();
  } else {
    openCredits();
  }
});
videoPlay.addEventListener('click', async () => {
  const ready = await prepareVideo();
  if (!ready) return;
  try {
    await blessingVideo.play();
    videoPlay.hidden = true;
    videoStatus.textContent = '';
  } catch (error) {
    console.debug('A second tap may be required by the browser after loading.', error);
    videoPlay.hidden = false;
    videoPlayLabel.textContent = '点击播放';
    videoStatus.textContent = '视频已加载，请再次点击播放';
  }
});
blessingVideo.addEventListener('play', () => { videoPlay.hidden = true; videoStatus.textContent = ''; });
blessingVideo.addEventListener('ended', () => { videoPlay.hidden = false; videoPlayLabel.textContent = '重新播放'; });
blessingVideo.addEventListener('error', () => {
  if (!blessingVideo.getAttribute('src')) return;
  videoPlay.hidden = false;
  videoPlayLabel.textContent = '重新加载';
  videoStatus.textContent = '视频暂时没有加载成功，请点击重试';
});
document.addEventListener('visibilitychange', () => { if (document.hidden) pauseCurrentVideo(false); });

if (previewState === 'videos' || previewState === 'credits') {
  showGreeting();
  shell.classList.add('is-album');
  openHeartfelt();
  const requestedVideo = Number(new URLSearchParams(window.location.search).get('video'));
  if (Number.isInteger(requestedVideo) && requestedVideo >= 1 && requestedVideo <= blessingVideos.length) videoIndex = requestedVideo - 1;
  openVideos();
  if (previewState === 'credits') openCredits();
}
