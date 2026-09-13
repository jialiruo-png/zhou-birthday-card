const stageData = {
  portraits: [],
  chapters: [
    {
      numeral: '壹', english: 'CHAPTER ONE', title: '杏坛与治学',
      description: '躬耕杏坛，求索不止\n在课堂与研讨之间，见证治学的温度',
      photos: [
        ['stage-fiction-02.webp', '治学同路', '岁月留影', '校园', '因共同的学术理想相聚，在交流与切磋中不断前行。', '', 'contain'],
        ['stage-fiction-04.webp', '学术交流', '岁月留影', '学术会场', '在开放的交流中拓展视野，让思考抵达更远的地方。', '', 'contain'],
        ['stage-fiction-09.webp', '治学同行', '岁月留影', '校园', '师生并肩求索，把严谨、热爱与责任写进共同的成长。', '', 'contain'],
        ['stage-fiction-11.webp', '草坪研讨', '岁月留影', '校园', '课堂之外的轻松讨论，也能让灵感在彼此启发中生长。', '', 'contain']
      ]
    },
    {
      numeral: '贰', english: 'CHAPTER TWO', title: '同行与桃李',
      description: '一程相伴，满庭芳华\n那些并肩走过的日子，汇成桃李芬芳',
      photos: [
        ['stage-fiction-01.webp', '乡野足迹', '岁月留影', '某地乡村', '走进田间地头，在真实世界里观察、提问与思考。', '', 'contain'],
        ['stage-fiction-03.webp', '并肩逐梦', '岁月留影', '校园', '赛场内外彼此支持，青春与师生情谊同样闪闪发光。', '', 'contain'],
        ['stage-fiction-05.webp', '实践同行', '岁月留影', '实践现场', '把课堂所学带到实践一线，在同行中收获成长。', '', 'contain'],
        ['stage-fiction-12.webp', '荣誉时刻', '岁月留影', '校园', '一份份收获见证努力，也珍藏着共同成长的喜悦。', '', 'contain']
      ]
    },
    {
      numeral: '叁', english: 'CHAPTER THREE', title: '生活与欢聚',
      description: '灯火可亲，笑语常在\n平凡而明亮的相聚，织成岁月的温柔底色',
      photos: [
        ['stage-fiction-06.webp', '校园午后', '岁月留影', '校园', '晴朗日光与熟悉笑容，让相聚成为温暖的日常。', '', 'contain'],
        ['stage-fiction-07.webp', '青春礼赞', '岁月留影', '校园', '在欢呼与笑意中定格青春，也为新的旅程送上祝福。', '', 'contain'],
        ['stage-fiction-08.webp', '欢聚迎新', '岁月留影', '校园', '来自不同地方的年轻人欢聚一堂，共享节日的喜悦。', '', 'contain'],
        ['stage-fiction-10.webp', '墨香相聚', '岁月留影', '校园', '在艺术与生活的交汇处，留下从容而明亮的共同记忆。', '', 'contain']
      ]
    }
  ],
  keywords: ['严谨治学', '温暖坚定', '宽厚谦和', '博学笃行', '春风化雨', '亦师亦友', '雍容知性', '心系学生', '从容通透', '诲人不倦', '温柔有力量', '求是深耕', '尊重包容', '桃李春风', '热忱笃行', '亦师亦母'],
  wishes: [
    { name: '顾言川', identity: '师门弟子', text: `您常说“农业经济是大地上的论文”，而您正是那个把论文写在田垄与数据之间的人。每一次调研路上的“下一步”，每一页改满批注的草稿，都让我看见严谨如何与温情共生——您以学术为犁，翻耕思想的土壤，更以倾听为雨，润泽每一个年轻学子的困惑。\n\n今日烛光映照的不止年轮，还有您用脚步丈量过的乡村、用模型推演过的丰收。愿新岁里，您的案头总有一盏不倦的灯，窗前常驻四季的风；愿您深耕的领域，不仅有数据的精准，更有麦浪般的诗意与回响。生日快乐，我敬爱的导师——您教会我们的，早已超越了论文与方程，而是如何敬畏土地，也敬畏时光。` },
    { name: '方致远', identity: '2007 级硕士', text: `祝林老师生日快乐！感谢您一直以来的谆谆教诲与悉心指引，愿您身体康健，万事顺遂，桃李满天下！` },
    { name: '林知衡', identity: '2010 级硕士', text: `愿林老师身体康健，日子从容，喜乐常相随。` },
    { name: '贺景行', identity: '2011 级博士', text: `严处见风范，慈处见仁心。值此花甲华诞，谨祝林老师身心康宁，和乐且湛，萱草长春，桃李满门。` },
    { name: '苏予宁', identity: '2012 级硕士', text: `尊敬的林老师，转眼间毕业已十一载有余，虽不常见面，但求学时您给予我的教导与关怀，始终历历在目、铭记于心。您认真治学、平和处世的人生态度也一直潜移默化指引我的工作与生活，让我受益终身。值此您六十华诞，衷心祝愿您福寿安康，诸事顺遂，喜乐常伴，岁岁皆安。` },
    { name: '秦书瑶', identity: '2013 级博士', text: `非常感谢林老师在科研道路上的悉心指导和温柔包容！您严谨治学的态度和敏锐的学术洞察力一直是我学习的榜样～在这个特殊的日子里，祝林老师生日快乐，科研长青，硕果累累，桃李芬芳！` },
    { name: '沈清扬', identity: '2013 级博士', text: `您以师者的格局引领我们治学，以母亲般的温柔体恤我们成长。幸遇恩师，亦如慈母，感恩这份双重的温暖守护，祝林老师生辰喜乐，福寿安康，岁月安然。` },
    { name: '陆思远', identity: '2015 级硕士', text: `敬爱的林老师，六十岁生日快乐！感谢您教会我如何做成一项研究，做好一篇论文，做精一件事情，您让我懂得如何寻找方向、认识自己、走向更大的世界。您用耐心和关怀教会我如何科学严谨思考，也用您的智慧和远见为我打开一扇又一扇新的大门。您不仅是我的导师，更是我人生的引路人。师恩难忘，祝您身体健康，事事顺心，永远快乐。` },
    { name: '韩砚之', identity: '2015 级博士', text: `全世界最好的林老师，生日快乐！祝您不管多少岁，心态永远 18！新的一岁，愿您少生气，长健康，多发 paper，多多好运！特别感谢您给予我的鼓励和包容，爱您！` },
    { name: '宋云舟', identity: '2016 级博士', text: `从大三到博士毕业，一路走来，能成为林老师的学生是最幸运的事。林老师总是用宽厚的态度支持我的每一个选择，在迷茫时耐心指引，在气馁时坚定地告诉我研究的价值。那些被仔细修改过的论文、被悄悄关照过的生活细节，都是求学路上最踏实的依靠。是林老师让我明白，科研之路可以既有严谨的深度，也有生活的温度。在这个特别的日子里，希望林老师多留一些时间给自己，去赏花、去听风、去拥抱生活里的小确幸。祝林老师和家人事事顺遂、天天开心！🌹🌹` },
    { name: '乔知夏', identity: '2018 级博士', text: `始终感激在林老师的团队里顺利的度过了硕博阶段。林老师一直鼓励，让我可以大胆的探索自己感兴趣的研究方向；林老师耐心指导，也为我牵线相关的研究者，帮助我不断成长进步；在我自觉失败气馁的时候，林老师仍坚持我们的研究一定是有一定价值和意义的，我才得以顺利的毕业，再次再次的感谢。\n\n又一年教师节及林老师的生日之际，祝林老师和家人，万事胜意，生活如花一样的芬芳美好，年年灿烂！` },
    { name: '许星澜', identity: '2018 级硕士', text: `非常幸运能遇到林老师，从本科时候第一次收获您的指导，到后来正式进入师门，感谢林老师一步步引领我向前。对我而言，您不仅教会我做学问，更教我以坚强勇敢的心面对所有困难。无论任何时候回忆起都弥足珍贵，您的从容与智慧是我努力的方向。\n\n衷心祝愿林老师生日快乐，身体健康，桃李满天下，愿您和家人诸事顺遂，生活永远幸福而温暖。` },
    { name: '宁舒然', identity: '2018 级博士', text: `林老师生日快乐，教师节也快乐！很抱歉最近在忙调研，可能没法到现场和大家共同为林老师庆祝，但希望大家玩得开心！\n\n在此给林老师发送一下我没有放进博士论文但一直都写好了的致谢：\n\n感谢我的导师林清和教授。林老师不仅是我在学术道路上的指路人，更是我科研生涯中最重要的启蒙者。从初入师门时的懵懂无知，到第一篇文章的修改和定稿、第一次参加学术会议，再到最终完成学位论文的每个关键节点，在这期间无数次的讨论、数据分析调整、文字修改和返稿中，林老师始终以她严谨治学、精益求精的学术态度耐心教导和引领着我。同时还要特别感谢林老师的包容与开放。我在读期间漂发又穿孔，有时在路上都会引人侧目，但林老师从未表现出任何异样眼光，永远淡然微笑着迎接我的每次变化。这种从容平和的态度和“严于学术，宽于为人”的处世哲学，真正教会了我如何平衡自我表达与专业追求。\n\n最后，再次祝林老师生日快乐，永远健康、幸福！` },
    { name: '周明澈', identity: '2019 级博士', text: `感谢林老师一路以来的悉心引领与温暖鼓励，祝您生日快乐、岁岁安康、阖家幸福、桃李芬芳！` },
    { name: '白清禾', identity: '2020 级硕士', text: `林老师是一位负责、耐心、亲切的老师，祝林老师 60 周岁快乐，身体健康，阖家幸福，万事胜意。` },
    { name: '沈知微', identity: '2020 级博士', text: `林老师，值您六十华诞，回首师门求学岁月，心中常怀对您的无限感恩。\n\n初入师门之时，我只是一名懵懂青涩的学术新人。您治学严谨，一丝不苟，每一篇小论文，您都会留下百余处细致批注，从篇章架构直至标点字句，悉心打磨；又为我争取机会、搭建平台，引领我踏入学术之门。\n\n求学途中，我一度深陷迷茫困顿。是您始终没有放弃停滞不前的我。学业上多方统筹，协调同门相助，陪伴我熬过论文最艰难的阶段；更看见我内心的煎熬，牵挂我的身心状态，一次次开导劝慰，即便在我怀疑自我时，依然选择相信我，倾尽心力托举我完成学业，顺利毕业。\n\n这份恩情早已超越普通传道授业，是困境之中一份珍贵的成全。我既感念与您相遇的幸运，心底也始终留存一份沉甸甸的感念。\n\n岁月悠长，师恩铭刻肺腑。恭贺您六十寿辰，愿您往后岁月身心安泰，福寿绵长，阖家安康。` },
    { name: '许知意', identity: '2021 级硕士', text: `敬爱的林老师，值您六十华诞，谨向您致以最诚挚的生日祝福！求学路上，承蒙林老师悉心教诲，您严谨务实的治学态度、宽厚谦和的待人风范，不仅指引我深耕专业学识，更教会我立身行事的道理，工作后念起林老师的谆谆教诲也受益颇多。六十岁是人生丰盈从容的新起点，衷心祝愿林老师福寿安康，身体康健；桃李芬芳，顺遂常乐；闲暇尽享岁月悠然，岁岁皆安，万事胜意！` },
    { name: '程嘉树', identity: '2022 级博士', text: `印象中，我总是在办公室里跟您唠嗑，从论文框架到人生规划，从课题文章到家长里短。您总像一位温暖而坚定的长辈，用您的“唠叨”和“操心”，把我们从一个个懵懂的学生，培养成能够独当一面的年轻人。感念师恩，在我人生的众多抉择中，始终为我指引前行的方向。祝愿老师六十岁生日快乐，天天开心、事事顺心，永葆热情与活力！` },
    { name: '温若溪', identity: '2023 级博士', text: `初听见关于林老师的消息是我还在读研的时候，那时师姐们来学校参加学术会议，回校后跟我们说遇见了一位十分专业和干练的老师，当时我便埋下了好奇的种子。后来，我非常幸运地成为了林老师的学生，慢慢地发现，在治学严谨、专业干练的另一面，是林老师像长辈一样细心呵护每位学生的成长。尤记得，在日常的科研讨论之余，林老师会询问我是否因科研压力而焦虑、会关心我在海外访学地联培是否安顿妥当、会鼓励我多去海外各地走走看看，也会很早就为我未来可能的发展方向与就业提供建议...当然，我们也会聊一些更具生活气息的话题，在春节期间我们会讨论讨论年味，老师会说“农家做的豆腐才好吃”；在我来到海外访学地月余时，我也会和老师“抱怨”海外的水质似乎会加大头发的掉落概率。在一次次的科研讨论与日常相处中，我渐渐不再像刚入学时一样紧张，因为我知道林老师对我们来说不仅仅是一位传道授业的导师，更像是一位期盼着孩子成长的长辈。能够成为林老师的学生，我深感幸运，也始终心怀感激。值此生日之际，谨祝林老师生日快乐！愿您岁岁安康、事事顺遂，桃李满园，学术之树常青，治学薪火长续！` },
    { name: '叶知行', identity: '2023 级博士', text: `林老师，生日快乐！很幸运能成为您的学生。谢谢您在学业上的耐心指导，也谢谢您一直以来对我们的关心和照顾。和您相处，总能感受到温暖与安心，让我在遇到困难时多了一份勇气。愿新的一岁，您身体健康、生活舒心，忙碌之余也有充足的时间享受生活、做自己喜欢的事。愿我们带给您的快乐，也像您给予我们的温暖一样多！🎂💐` },
    { name: '沈念初', identity: '2023 级硕士', text: `林老师，祝您生日快乐！回想读研的时光，很感恩能够成为您的学生。敬佩您一直保持饱满的热情投入工作，感谢您一直以来对我学业和生活上的关心。愿您岁月添华彩，四时皆安，喜乐常随！` },
    { name: '江屿川', identity: '2024 级硕士', text: `得遇良师，何其有幸！祝林老师六十大寿快乐美满，身体安康，学术常青，一切顺遂！` },
    { name: '顾南乔', identity: '2024 级硕士', text: `祝林老师生日快乐🎂！很感恩求学路上能够遇见您。您待人温暖，做事认真严谨，无论是学业上的指点，还是平日里的关怀，都让我收获良多。愿您往后日子平安顺遂，万事舒心，身体健康，喜乐常伴！` },
    { name: '陈望舒', identity: '2024 级博士', text: `林老师，很庆幸在人生和求学的这段路上能够遇到您，也一直很感谢您对学生的教导、关心和包容。正是因为您的接纳与包容，我才有机会来到学校继续求学与成长。能够加入师门这个温暖有爱又彼此支持的大家庭，我一直觉得十分幸运，也格外珍惜这段难得的缘分。您教给我的不仅是科研上的知识，更是做事的态度、看问题的方式。\n\n六十岁是一个值得纪念的日子。希望未来的日子里，您少一些操劳，多一些轻松和自在。衷心祝愿您身体健康，平安顺遂。祝您往后的每一年，都从容、充实、喜乐。` },
    { name: '唐若安', identity: '2025 级硕士', text: `敬爱的林老师，祝您六十岁生日快乐！作为 2025 级硕士新生，能够加入师门、成为您的学生，我感到非常幸运。您雍容而有气度，始终尊重每一位学生的想法，鼓励我们探索适合自己的方向、勇敢成长。无论面对学业上的困难，还是未来发展的选择，您总能给予我们最坚定、最有力的支持，是我们可以安心依靠的坚实后盾。在师门，我感受到的不仅是严谨与专业，更有像家一样的可靠与温暖。衷心祝愿您身体健康、岁月从容、喜乐常伴，未来的每一天都顺遂如意、幸福美满！` },
    { name: '夏安宁', identity: '2025 级硕士', text: `很幸运能够成为师门的一份子，感谢林老师在求学路上的悉心指引与包容鼓励。祝您生日快乐，岁月从容，喜乐安康，万事皆如意！` },
    { name: '陆星遥', identity: '2026 级博士', text: `愿老师生辰喜乐，身体康健，万事顺遂，桃李芬芳！` },
    { name: '程予安', identity: '2026 级硕士', text: `老师生日快乐，祝您身体健康，诸事顺遂！感谢老师选择了我，也要提前感谢未来三年您对我的指导和栽培，我一定不会辜负老师对我的信任。再次祝老师生日快乐！` }
  ],
  stories: [
    {
      tag: '严谨与鼓励',
      title: '深夜的批注与“打铁还需自身硬”的底气',
      name: '江屿川', identity: '2024 级硕士',
      body: `在撰写专业实践案例与研究报告期间，林老师给予了我和团队（顾南乔、沈念初等）细致的指导。即使到了深夜 23 点，林老师依然会认真审阅并及时反馈具体的修改建议，对话末尾一句“加油干！”总能在关键时刻给我莫大的动力。在林老师的悉心点拨下，报告逻辑与内容得以不断完善，最终顺利获评校级优秀实践成果奖与省级研究生创新成果。

在竞选校级奖学金等荣誉时，林老师不仅耐心帮我梳理汇报思路、指出不足，更叮嘱我“打铁还需自身硬”。这句话不仅缓解了我当时的焦虑，更让我明白把内功练扎实才是立身之本，激励着我放平心态、继续努力。

深夜里的详尽批注与质朴有力的教诲，是我求学期间最温暖也最有力的支持。未来无论在学术探索还是工作岗位上，我都将带着这份严谨与踏实，笃行致远。`
    },
    {
      tag: '陪伴与托举',
      title: '跨越山海的牵挂',
      name: '沈砚舟', identity: '2021 级学生',
      body: `博士求学数载，回望在师门学习和成长的日子，有许多片段始终令我难忘。衷心感谢我的导师林清和教授。一路走来，林老师不仅给予我严谨细致的学术指导，也在生活、成长和求职过程中给予我长辈般的关怀与支持。

在学术上，林老师始终严谨认真、精益求精。从论文选题、研究设计，到实证分析、论文写作与反复修改，每一个环节都倾注了大量心血。很多时候，一篇论文、一份材料经过林老师指导后，我才真正意识到，看似细微的文字和逻辑背后，体现的是做学问应有的严谨与责任。

赴海外联合培养期间，虽然远隔重洋，林老师依然经常关心我的学习、科研和生活情况，鼓励我珍惜机会、开阔视野，也时常叮嘱我照顾好自己。记得有一次感冒生病，林老师得知后多次叮嘱我要注意身体、劳逸结合。几句朴实的嘱咐，让我在异国求学期间感受到了一份格外温暖的牵挂。

博士毕业求职期间，从就业方向的建议，到机会的推荐，再到一次次鼓励，林老师始终设身处地为学生的长远发展考虑。一位好导师对学生的影响，远远不止于帮助完成一篇论文、取得一个学位，更在于教会学生如何做学问、如何做事、如何走好未来的人生道路。

师恩难忘，薪火相传。愿自己未来无论身处何地，都能铭记林老师的教诲，并将曾经从老师那里得到的关怀、责任与温暖继续传递下去。`
    },
    {
      tag: '毕业后的关怀',
      title: '暖心小故事',
      name: '许知意', identity: '2021 级硕士',
      body: `在我毕业工作近一年后，林老师有一次因种业推广研究工作，恰巧到我单位座谈。在忙碌的工作间隙，林老师依然对我的工作、生活关怀备至，不仅细致询问我工作以来的感受、生活近况，还耐心指导我要转换学生思维，适应职场。

林老师语重心长地叮嘱我，年轻人要沉下心来、脚踏实地。这份跨越毕业界限的关怀，让我倍感温暖与感动，也让我在工作遇到困惑的时候重拾信心，坚定踏实前行、不负期许的信念。

林老师用一言一行诠释着师者仁心，这份暖心陪伴成为我人生发展道路上坚实的力量。`
    },
    {
      tag: '尊重与包容',
      title: '严于学术，宽于为人',
      name: '宁舒然', identity: '2018 级博士',
      body: `感谢我的导师林清和教授。林老师不仅是我在学术道路上的指路人，更是我科研生涯中最重要的启蒙者。从初入师门时的懵懂无知，到第一篇文章的修改和定稿、第一次参加学术会议，再到最终完成学位论文的每个关键节点，在无数次的讨论、数据分析调整、文字修改和返稿中，林老师始终以她严谨治学、精益求精的学术态度耐心教导和引领着我。

同时还要特别感谢林老师的包容与开放。我在读期间漂发又穿孔，有时在路上都会引人侧目，但林老师从未表现出任何异样眼光，永远淡然微笑着迎接我的每次变化。

这种从容平和的态度和“严于学术，宽于为人”的处世哲学，真正教会了我如何平衡自我表达与专业追求。最后，再次祝林老师生日快乐，永远健康、幸福！`
    },
    {
      tag: '相信与成全',
      title: '困境中的珍贵成全',
      name: '沈知微', identity: '2020 级博士',
      body: `林老师，值您六十华诞，回首师门求学岁月，心中常怀对您的无限感恩。

初入师门之时，我只是一名懵懂青涩的学术新人。您治学严谨，一丝不苟，每一篇小论文，您都会留下百余处细致批注，从篇章架构直至标点字句，悉心打磨；又为我争取机会、搭建平台，引领我踏入学术之门。

求学途中，我一度深陷迷茫困顿。是您始终没有放弃停滞不前的我。学业上多方统筹，协调同门相助，陪伴我熬过论文最艰难的阶段；更看见我内心的煎熬，牵挂我的身心状态，一次次开导劝慰。即便在我怀疑自我时，您依然选择相信我，倾尽心力托举我完成学业、顺利毕业。

这份恩情早已超越普通传道授业，是困境之中一份珍贵的成全。岁月悠长，师恩铭刻肺腑。恭贺您六十寿辰，愿您往后岁月身心安泰，福寿绵长，阖家安康。`
    }
  ],
  videos: [
    { src: './assets/videos/video-04.mp4', poster: './assets/posters/video-04.jpg', name: '顾怀远', identity: '某高校 · 公共健康学院', duration: '01:28', caption: '二十余载师生情，祝福温暖如初', orientation: 'portrait', ratio: 9 / 16 },
    { src: './assets/videos/video-01.mp4', poster: './assets/posters/video-01.jpg', name: '江屿川', identity: '2024 级硕士生', duration: '00:46', caption: '感恩培养，生日快乐', orientation: 'landscape' },
    { src: './assets/videos/video-02.mp4', poster: './assets/posters/video-02.jpg', name: '沈砚舟', identity: '2021 级学生', duration: '00:52', caption: '感谢一路引领，祝福六十华诞', orientation: 'landscape' },
    { src: './assets/videos/video-03.mp4', poster: './assets/posters/video-03.jpg', name: '周明澈、白清禾及家人', identity: '2019 级博士 · 2020 级硕士', duration: '01:03', caption: '来自师门与家人的温暖祝福', orientation: 'portrait', ratio: 3 / 4 },
    { src: './assets/videos/video-05.mp4', poster: './assets/posters/video-05.jpg', name: '许星澜', identity: '师门成员', duration: '01:19', caption: '一路相伴，从本科到今日的感恩与祝愿', orientation: 'landscape' }
  ]
};

const PHOTO_ASSET_VERSION = '20260912';

function stagePhotoSrc(file) {
  return `./assets/photos/${file}?v=${PHOTO_ASSET_VERSION}`;
}

function preloadStagePhotos() {
  const files = [
    ...stageData.portraits.map((photo) => photo[0]),
    ...stageData.chapters.flatMap((chapter) => chapter.photos.map((photo) => photo[0]))
  ];
  [...new Set(files)].forEach((file) => {
    const image = new Image();
    image.decoding = 'async';
    image.src = stagePhotoSrc(file);
  });
}

const app = document.querySelector('#stageApp');
const standby = document.querySelector('#standby');
const showScene = document.querySelector('#showScene');
const canvas = document.querySelector('#sceneCanvas');
const startButton = document.querySelector('#startShow');
const controls = document.querySelector('#showControls');
const previousButton = document.querySelector('#previousScene');
const playButton = document.querySelector('#togglePlayback');
const nextButton = document.querySelector('#nextScene');
const muteButton = document.querySelector('#toggleMute');
const fullscreenButton = document.querySelector('#toggleFullscreen');
const restartButton = document.querySelector('#restartShow');
const resumeMediaButton = document.querySelector('#resumeMedia');
const mediaGate = document.querySelector('#mediaGate');
const stageBgm = document.querySelector('#stageBgm');
const stageVideo = document.querySelector('#stageVideo');
const stageEyebrow = document.querySelector('#stageEyebrow');
const stageChapter = document.querySelector('#stageChapter');
const stageClock = document.querySelector('#stageClock');
const stageIndex = document.querySelector('#stageIndex');
const stageProgress = document.querySelector('#stageProgress');
const stageNotice = document.querySelector('#stageNotice');

const STATIC_TIMINGS = { opening: 15000, chapter: 4500, photo: 4000, words: 6000, wish: 8000, story: 8000, videoIntro: 5000, achievements: 120000, closing: 20000 };
let timeline = [];
let currentIndex = 0;
let isRunning = false;
let isPaused = false;
let isMuted = false;
let elapsedBeforePause = 0;
let sceneStartedAt = 0;
let currentDuration = 0;
let animationFrame = 0;
let noticeTimer = 0;
let controlsTimer = 0;
let activeVideoUrl = '';
let videoController = null;
let videoFailed = false;
let storyScroll = null;
let achievementScroll = null;
let currentPhotoNumber = 0;

function buildTimeline() {
  const items = [{ type: 'opening', duration: STATIC_TIMINGS.opening, eyebrow: 'OPENING', chapter: '岁月有光' }];
  if (stageData.portraits.length) {
    items.push({ type: 'chapter', duration: STATIC_TIMINGS.chapter, eyebrow: 'PORTRAIT PRELUDE', chapter: '先看见林老师', numeral: '序', description: '在三段岁月展开之前\n先留住几帧属于她自己的光' });
    stageData.portraits.forEach((photo) => items.push({ type: 'photo', duration: STATIC_TIMINGS.photo, eyebrow: 'PORTRAIT PRELUDE', chapter: '人物序章', photo }));
  }
  stageData.chapters.forEach((chapter) => {
    items.push({ type: 'chapter', duration: STATIC_TIMINGS.chapter, eyebrow: chapter.english, chapter: chapter.title, numeral: chapter.numeral, description: chapter.description });
    chapter.photos.forEach((photo) => items.push({ type: 'photo', duration: STATIC_TIMINGS.photo, eyebrow: chapter.english, chapter: chapter.title, photo }));
  });
  items.push({ type: 'words', duration: STATIC_TIMINGS.words, eyebrow: 'WORDS FROM THE HEART', chapter: '文字心意' });
  stageData.wishes.forEach((wish) => items.push({ type: 'wish', duration: Math.min(20000, Math.max(STATIC_TIMINGS.wish, wish.text.length * 40)), eyebrow: 'BLESSINGS', chapter: '全员祝福', wish }));
  stageData.stories.forEach((story) => items.push({ type: 'story', duration: Math.min(45000, Math.max(18000, story.body.length * 48)), eyebrow: 'MENTOR STORIES', chapter: '师生故事', story }));
  items.push({ type: 'videoIntro', duration: STATIC_TIMINGS.videoIntro, eyebrow: 'BLESSINGS IN MOTION', chapter: '祝福视频' });
  stageData.videos.forEach((video, index) => items.push({ type: 'video', duration: 0, eyebrow: 'BLESSINGS IN MOTION', chapter: '祝福视频', video, videoIndex: index }));
  items.push({ type: 'achievements', duration: STATIC_TIMINGS.achievements, eyebrow: 'A LIFE OF SCHOLARSHIP', chapter: '治学长卷' });
  items.push({ type: 'closing', duration: STATIC_TIMINGS.closing, eyebrow: 'WITH LOVE & GRATITUDE', chapter: '谨以此页 · 敬贺华诞' });
  return items;
}

function node(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function showNotice(message, timeout = 3200) {
  window.clearTimeout(noticeTimer);
  stageNotice.textContent = message;
  stageNotice.classList.add('is-visible');
  noticeTimer = window.setTimeout(() => stageNotice.classList.remove('is-visible'), timeout);
}

function updateHeader(scene) {
  stageEyebrow.textContent = scene.eyebrow;
  stageChapter.textContent = scene.chapter;
  stageIndex.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(timeline.length).padStart(2, '0')}`;
}

function renderOpening() {
  const scene = node('div', 'opening-scene scene-enter');
  scene.innerHTML = '<div class="opening-scene__seal"><div class="opening-scene__ring"><span>林</span></div></div><div class="opening-scene__copy"><p class="kicker">TO OUR DEAREST MENTOR</p><h3>敬爱的林老师：</h3><blockquote>六十载春华秋实，您以严谨治学启迪求知，以温厚仁心守护成长。您的教诲如灯，照亮我们探索学问、奔赴人生的方向；您的关怀如春风，让师门始终温暖而坚定。<br>愿您岁月常欢、身体康健、桃李芬芳，所行皆坦途，所愿皆如意！</blockquote><p class="opening-scene__signature">师门弟子 敬贺 · 2026 年 9 月 12 日</p></div>';
  canvas.appendChild(scene);
}

function renderChapter(sceneData) {
  const scene = node('div', 'chapter-scene scene-enter');
  const number = node('div', 'chapter-scene__number', sceneData.numeral);
  const content = node('div', 'chapter-scene__content');
  const english = node('p', '', sceneData.eyebrow);
  const title = node('h3', '', sceneData.chapter);
  const description = node('p', '', sceneData.description);
  content.append(english, title, description);
  scene.append(number, content);
  canvas.appendChild(scene);
}

function renderPhoto(sceneData) {
  currentPhotoNumber = timeline.slice(0, currentIndex + 1).filter((item) => item.type === 'photo').length;
  const [file, title, time, place, description, credit, mode] = sceneData.photo;
  const scene = node('div', 'photo-scene scene-enter');
  const visual = node('div', 'photo-scene__visual');
  if (mode === 'cover') visual.classList.add('is-cover');
  if (mode === 'left') visual.classList.add('is-left');
  if (mode === 'right') visual.classList.add('is-right');
  if (mode === 'portrait-focus') visual.classList.add('is-portrait-focus');
  if (mode === 'group-bottom') visual.classList.add('is-group-bottom');
  const image = node('img');
  image.loading = 'eager';
  image.decoding = 'async';
  image.src = stagePhotoSrc(file);
  image.alt = title;
  visual.appendChild(image);
  const copy = node('div', 'photo-scene__copy');
  copy.appendChild(node('p', 'photo-scene__number', `MEMORY ${String(currentPhotoNumber).padStart(2, '0')} / 30`));
  copy.appendChild(node('h3', '', title));
  const metaText = [time, place].filter(Boolean).join(' · ');
  if (metaText) copy.appendChild(node('p', 'photo-scene__meta', metaText));
  copy.appendChild(node('p', 'photo-scene__desc', description));
  if (credit) copy.appendChild(node('p', 'photo-scene__credit', credit));
  scene.append(visual, copy);
  canvas.appendChild(scene);
}

function renderWords() {
  const scene = node('div', 'words-scene scene-enter');
  const heading = node('div', 'words-scene__heading');
  heading.innerHTML = '<p>IN EVERYONE\'S EYES</p><h3>大家眼中的<br>林老师</h3><small>一份份心意，汇成共同的答案</small>';
  const wall = node('div', 'keyword-wall');
  stageData.keywords.forEach((word) => wall.appendChild(node('span', '', word)));
  scene.append(heading, wall);
  canvas.appendChild(scene);
}

function renderWish(sceneData) {
  const scene = node('div', 'wish-scene scene-enter');
  const card = node('article', 'wish-stage-card');
  card.appendChild(node('blockquote', '', sceneData.wish.text));
  const footer = node('footer', '', sceneData.wish.name);
  footer.appendChild(node('small', '', sceneData.wish.identity));
  card.appendChild(footer);
  scene.appendChild(card);
  canvas.appendChild(scene);
}

function renderStory(sceneData) {
  const scene = node('div', 'story-stage scene-enter');
  const title = node('div', 'story-stage__title');
  title.appendChild(node('p', 'tag', sceneData.story.tag.toUpperCase()));
  title.appendChild(node('h3', '', sceneData.story.title));
  title.appendChild(node('p', '', `${sceneData.story.name} · ${sceneData.story.identity}`));
  const body = node('div', 'story-stage__body', sceneData.story.body);
  storyScroll = body;
  scene.append(title, body);
  canvas.appendChild(scene);
}

function renderVideoIntro() {
  const scene = node('div', 'chapter-scene scene-enter');
  const number = node('div', 'chapter-scene__number', '伍');
  const content = node('div', 'chapter-scene__content');
  content.innerHTML = '<p>BLESSINGS IN MOTION</p><h3>让祝福，被听见</h3><p>五段跨越山海的问候<br>将在这里依次展开</p>';
  scene.append(number, content);
  canvas.appendChild(scene);
}

function renderVideo(sceneData) {
  const scene = node('div', 'video-stage scene-enter');
  const screen = node('div', 'video-stage__screen');
  const fallbackRatio = sceneData.video.ratio || 16 / 9;
  screen.style.setProperty('--video-ratio', String(fallbackRatio));
  screen.classList.toggle('is-portrait', fallbackRatio < 1);
  stageVideo.hidden = false;
  stageVideo.poster = sceneData.video.poster;
  screen.append(stageVideo, node('span', 'video-stage__badge', `VIDEO ${String(sceneData.videoIndex + 1).padStart(2, '0')} / 05`));
  const loading = node('p', 'video-stage__loading', '正在加载祝福视频…');
  loading.id = 'stageVideoLoading';
  screen.appendChild(loading);
  const copy = node('div', 'video-stage__copy');
  copy.appendChild(node('p', 'index', sceneData.video.duration));
  copy.appendChild(node('h3', '', sceneData.video.name));
  copy.appendChild(node('p', 'identity', sceneData.video.identity));
  copy.appendChild(node('p', 'caption', sceneData.video.caption));
  scene.append(screen, copy);
  canvas.appendChild(scene);
  prepareAndPlayVideo(sceneData.video);
}

function achievementEntries(title, items, formatter) {
  const section = node('section', 'achievement-section');
  section.appendChild(node('h4', '', title));
  const list = node('div', 'achievement-list');
  items.forEach((item) => {
    const row = node('div', 'achievement-item');
    row.append(node('time', '', String(item.year || '—')), node('div', '', formatter(item)));
    list.appendChild(row);
  });
  section.appendChild(list);
  return section;
}

function renderAchievements() {
  const data = window.achievementData;
  const scene = node('div', 'achievement-stage scene-enter');
  const scroll = node('div', 'achievement-scroll');
  const inner = node('div', 'achievement-scroll__inner');
  const hero = node('section', 'achievement-hero');
  const heroTitle = node('div');
  heroTitle.innerHTML = `<p>A LIFE OF SCHOLARSHIP</p><h3>${data.profile.name}教授 · 治学长卷</h3>`;
  hero.append(heroTitle, node('p', 'intro', data.profile.intro));
  inner.appendChild(hero);
  const stats = node('div', 'achievement-stats');
  [['著作',data.stats.books],['论文',data.stats.papers],['科研项目',data.stats.projects],['荣誉',data.stats.awards],['咨政成果',data.stats.reports]].forEach(([label,value]) => {
    const stat = node('div', 'achievement-stat');
    stat.append(node('strong', '', String(value)), node('span', '', label));
    stats.appendChild(stat);
  });
  inner.appendChild(stats);
  inner.appendChild(achievementEntries('代表著作', data.books, (item) => item.text));
  inner.appendChild(achievementEntries('代表论文', data.papers.slice(0, 24), (item) => item.text));
  inner.appendChild(achievementEntries('代表科研项目', data.projects.slice(0, 15), (item) => item.text));
  inner.appendChild(achievementEntries('荣誉奖励', data.awards, (item) => item.text));
  inner.appendChild(achievementEntries('咨政成果', data.reports, (item) => item.text || `${item.title}；${item.meta}`));
  scroll.appendChild(inner);
  scene.append(scroll, node('p', 'achievement-auto-tip', '长卷正在自动展开 · 空格键可暂停阅读'));
  canvas.appendChild(scene);
  achievementScroll = scroll;
}

function renderClosing() {
  const scene = node('div', 'closing-scene scene-enter');
  const content = node('div', 'closing-scene__content');
  content.innerHTML = '<div class="closing-scene__seal">寿</div><h3>岁月有光 · 师者如兰</h3><p class="closing-scene__wish">愿岁月常欢，身体康健，桃李芬芳<br>所行皆坦途，所愿皆如意</p><p class="closing-scene__credits"><strong>内容设计、网页制作</strong>：唐若安<br><strong>素材收集</strong>：陆星河、唐若安<br><strong>筹备组支持</strong>：赵清妍、贺景行、程嘉树、周明澈、陆星河、唐若安、夏安宁</p>';
  scene.appendChild(content);
  canvas.appendChild(scene);
}

function cleanupVideo() {
  if (videoController) videoController.abort();
  videoController = null;
  stageVideo.pause();
  stageVideo.removeAttribute('src');
  stageVideo.load();
  stageVideo.hidden = true;
  if (activeVideoUrl) URL.revokeObjectURL(activeVideoUrl);
  activeVideoUrl = '';
  videoFailed = false;
}

async function prepareAndPlayVideo(videoData) {
  videoController = new AbortController();
  const loading = document.querySelector('#stageVideoLoading');
  try {
    const response = await fetch(videoData.src, { signal: videoController.signal, cache: 'force-cache' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const blob = await response.blob();
    if (videoController.signal.aborted) return;
    activeVideoUrl = URL.createObjectURL(blob);
    stageVideo.src = activeVideoUrl;
    stageVideo.muted = isMuted;
    stageVideo.load();
    if (loading) loading.remove();
    if (!isPaused) {
      try {
        await stageVideo.play();
      } catch (playbackError) {
        console.debug('Video needs another user gesture.', playbackError);
        mediaGate.hidden = false;
      }
    }
  } catch (error) {
    if (error.name === 'AbortError') return;
    console.error('Video playback failed:', videoData.name, error);
    if (loading) loading.textContent = '视频加载失败，5 秒后自动播放下一段';
    videoFailed = true;
    currentDuration = 5000;
    elapsedBeforePause = 0;
    sceneStartedAt = performance.now();
  }
}

async function playBgm() {
  if (isMuted || isPaused || !isRunning) return;
  stageBgm.volume = 0.24;
  stageBgm.muted = false;
  try {
    await stageBgm.play();
  } catch (error) {
    mediaGate.hidden = false;
    console.debug('Background music needs another user gesture.', error);
  }
}

function sceneUsesVideo() {
  return timeline[currentIndex] && timeline[currentIndex].type === 'video';
}

function resetCanvas() {
  cleanupVideo();
  storyScroll = null;
  achievementScroll = null;
  canvas.replaceChildren();
}

function enterScene(index) {
  if (!timeline.length) return;
  currentIndex = Math.min(Math.max(index, 0), timeline.length - 1);
  const scene = timeline[currentIndex];
  app.dataset.scene = scene.type;
  resetCanvas();
  currentDuration = scene.duration;
  elapsedBeforePause = 0;
  sceneStartedAt = performance.now();
  updateHeader(scene);
  if (scene.type !== 'video') playBgm();
  if (scene.type === 'opening') renderOpening();
  if (scene.type === 'chapter') renderChapter(scene);
  if (scene.type === 'photo') renderPhoto(scene);
  if (scene.type === 'words') renderWords();
  if (scene.type === 'wish') renderWish(scene);
  if (scene.type === 'story') renderStory(scene);
  if (scene.type === 'videoIntro') renderVideoIntro();
  if (scene.type === 'video') {
    stageBgm.pause();
    renderVideo(scene);
  }
  if (scene.type === 'achievements') renderAchievements();
  if (scene.type === 'closing') renderClosing();
  playButton.textContent = isPaused ? '▶' : 'Ⅱ';
  playButton.setAttribute('aria-label', isPaused ? '继续放映' : '暂停放映');
}

function nextScene() {
  if (currentIndex >= timeline.length - 1) {
    pauseShow();
    showNotice('放映结束 · 按 R 重新开始', 8000);
    return;
  }
  enterScene(currentIndex + 1);
}

function previousScene() {
  enterScene(currentIndex - 1);
}

function currentElapsed(now = performance.now()) {
  return elapsedBeforePause + (isPaused ? 0 : now - sceneStartedAt);
}

function updateClock(totalMilliseconds) {
  const totalSeconds = Math.max(0, Math.floor(totalMilliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  stageClock.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function playbackLoop(now) {
  animationFrame = window.requestAnimationFrame(playbackLoop);
  if (!isRunning || isPaused) return;
  const scene = timeline[currentIndex];
  if (!scene) return;
  if (scene.type === 'video' && !videoFailed) {
    const duration = Number.isFinite(stageVideo.duration) ? stageVideo.duration : 0;
    const progress = duration ? stageVideo.currentTime / duration : 0;
    stageProgress.style.width = `${Math.min(progress * 100, 100)}%`;
    updateClock(stageVideo.currentTime * 1000);
    return;
  }
  const elapsed = currentElapsed(now);
  const progress = currentDuration ? Math.min(elapsed / currentDuration, 1) : 0;
  stageProgress.style.width = `${progress * 100}%`;
  updateClock(elapsed);
  if (scene.type === 'story' && storyScroll) {
    const holdStart = 5000;
    const holdEnd = 5000;
    const scrollDuration = Math.max(currentDuration - holdStart - holdEnd, 1);
    const scrollProgress = Math.min(Math.max((elapsed - holdStart) / scrollDuration, 0), 1);
    const eased = scrollProgress < .5 ? 2 * scrollProgress * scrollProgress : 1 - Math.pow(-2 * scrollProgress + 2, 2) / 2;
    storyScroll.scrollTop = (storyScroll.scrollHeight - storyScroll.clientHeight) * eased;
  }
  if (scene.type === 'achievements' && achievementScroll) {
    const holdStart = 7000;
    const holdEnd = 8000;
    const scrollDuration = Math.max(currentDuration - holdStart - holdEnd, 1);
    const scrollProgress = Math.min(Math.max((elapsed - holdStart) / scrollDuration, 0), 1);
    const eased = scrollProgress < .5 ? 2 * scrollProgress * scrollProgress : 1 - Math.pow(-2 * scrollProgress + 2, 2) / 2;
    achievementScroll.scrollTop = (achievementScroll.scrollHeight - achievementScroll.clientHeight) * eased;
  }
  if (currentDuration && elapsed >= currentDuration) nextScene();
}

function pauseShow() {
  if (!isRunning || isPaused) return;
  elapsedBeforePause = currentElapsed();
  isPaused = true;
  stageBgm.pause();
  stageVideo.pause();
  playButton.textContent = '▶';
  playButton.setAttribute('aria-label', '继续放映');
  showNotice('放映已暂停');
}

function resumeShow() {
  if (!isRunning || !isPaused) return;
  isPaused = false;
  sceneStartedAt = performance.now();
  playButton.textContent = 'Ⅱ';
  playButton.setAttribute('aria-label', '暂停放映');
  if (sceneUsesVideo() && !videoFailed) {
    stageVideo.play().catch(() => { mediaGate.hidden = false; });
  } else {
    playBgm();
  }
  showNotice('继续自动放映');
}

function togglePause() {
  if (isPaused) resumeShow(); else pauseShow();
}

function toggleMute() {
  isMuted = !isMuted;
  stageBgm.muted = isMuted;
  stageVideo.muted = isMuted;
  muteButton.textContent = isMuted ? '×' : '♪';
  muteButton.setAttribute('aria-label', isMuted ? '取消静音' : '静音');
  showNotice(isMuted ? '已静音' : '声音已开启');
}

async function toggleFullscreen(forceEnter = false) {
  try {
    if (!document.fullscreenElement || forceEnter) {
      if (!document.fullscreenElement) await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  } catch {
    showNotice('请按 F11 或使用浏览器菜单进入全屏', 5000);
  }
}

function startShow() {
  if (isRunning) return;
  timeline = buildTimeline();
  currentPhotoNumber = 0;
  isRunning = true;
  isPaused = false;
  app.classList.add('is-running');
  standby.setAttribute('aria-hidden', 'true');
  showScene.setAttribute('aria-hidden', 'false');
  controls.hidden = false;
  stageBgm.volume = 0.24;
  stageBgm.muted = isMuted;
  toggleFullscreen(true);
  enterScene(0);
}

function restartShow() {
  timeline = buildTimeline();
  currentPhotoNumber = 0;
  isPaused = false;
  mediaGate.hidden = true;
  enterScene(0);
  playBgm();
  showNotice('已重新开始放映');
}

stageVideo.addEventListener('loadedmetadata', () => {
  const screen = document.querySelector('.video-stage__screen');
  if (!screen || !stageVideo.videoWidth || !stageVideo.videoHeight) return;
  const ratio = stageVideo.videoWidth / stageVideo.videoHeight;
  screen.style.setProperty('--video-ratio', String(ratio));
  screen.classList.toggle('is-portrait', ratio < 1);
});
stageVideo.addEventListener('ended', () => {
  if (sceneUsesVideo()) nextScene();
});
stageVideo.addEventListener('error', () => {
  if (!sceneUsesVideo() || videoFailed) return;
  videoFailed = true;
  currentDuration = 5000;
  elapsedBeforePause = 0;
  sceneStartedAt = performance.now();
  showNotice('当前视频播放失败，将自动跳过', 4500);
});

startButton.addEventListener('click', startShow);
previousButton.addEventListener('click', previousScene);
playButton.addEventListener('click', togglePause);
nextButton.addEventListener('click', nextScene);
muteButton.addEventListener('click', toggleMute);
fullscreenButton.addEventListener('click', () => toggleFullscreen());
restartButton.addEventListener('click', restartShow);
resumeMediaButton.addEventListener('click', async () => {
  mediaGate.hidden = true;
  if (sceneUsesVideo()) await stageVideo.play(); else await playBgm();
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') { event.preventDefault(); togglePause(); }
  if (event.key === 'ArrowRight') nextScene();
  if (event.key === 'ArrowLeft') previousScene();
  if (event.key.toLowerCase() === 'm') toggleMute();
  if (event.key.toLowerCase() === 'f') toggleFullscreen();
  if (event.key.toLowerCase() === 'r') restartShow();
});

document.addEventListener('mousemove', () => {
  controls.classList.add('is-visible');
  window.clearTimeout(controlsTimer);
  controlsTimer = window.setTimeout(() => controls.classList.remove('is-visible'), 2200);
});

document.addEventListener('visibilitychange', () => {
  if (document.hidden && isRunning && !isPaused) pauseShow();
});

preloadStagePhotos();
animationFrame = window.requestAnimationFrame(playbackLoop);
window.addEventListener('beforeunload', () => {
  window.cancelAnimationFrame(animationFrame);
  cleanupVideo();
});
