const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');

const bot = new TelegramBot('6623345637:AAHxCNrD05-Wy6IgPY7Kimc2PxY1bKZLfRU', { polling: true });

const adminChatId = 5796080247;

let voiceOptionClicked = false; 

const askQuestions = (chatId, questions) => {
  const askQuestion = (index) => {
    if (index < questions.length) {
      bot.sendMessage(chatId, questions[index], { reply_markup: { force_reply: true } })
        .then((response) => {
          const messageId = response.message_id;
          bot.onReplyToMessage(chatId, messageId, (reply) => {
            bot.forwardMessage(adminChatId, chatId, reply.message_id);
            askQuestion(index + 1);
          });
        });
    } else {
        const translatedText = 'زۆر سپاس بەڕێز بۆ وەڵام دانەوەی هەموو پرسیارەکان. وەڵامەکانی تۆ گەشتوە بە کاک سەرکەوت لە زووترین کات وەڵامت دەداتەوە. دەتوانی لە ڕێگەی کلیک کردن لەم ناوەوە(@SarkawtDxn) بکەونە پەیوەندی ڕاستەوخۆ لەگەڵ بەڕێزیان.';
        bot.sendMessage(chatId, translatedText);
      }
      
  };

  askQuestion(0);
};

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const fullName = msg.from.first_name + ' ' + msg.from.last_name;

  const greetingMessage = ` سڵاو بەڕێز ${fullName} بەخێربێت بۆ پرۆژەی ژیانت تکایە کلیک لە دوگمەی (ناسینی پرۆژە) بکە بۆ دەست پێکردن.`;


  const buttons = [
    [
      { text: 'ناسینی پرۆژە', callback_data: 'project_notification' },
      { text: 'دەمەوێت دەست بکەم بە کار کردن', callback_data: 'button_2' },
    ],
    [
      { text: 'بینینی کەسانی سەرکەوتو', url: 'https://t.me/+nm57J6RBeLRhMDNi' },
      { text: 'سۆشیاڵ میدیاکانمان', callback_data: 'button_4' },
    ],
  ];

  bot.on('callback_query', (callbackQuery) => {
    const chatId = callbackQuery.message.chat.id;

    switch (callbackQuery.data) {
case 'project_notification':
  const options = [
      [
          { text: 'ناسینی پرۆژە بە دەنگ', callback_data: 'voice_option' },
          { text: 'سۆشیاڵ میدیاکانمان', callback_data: 'text_option' },
      ]
  ];

  bot.sendMessage(chatId, 'هەڵبژاردنێک هەڵبژێرە', {
      reply_markup: {
          inline_keyboard: options,
      },
  });
  break;


        bot.sendMessage(chatId, 'هەڵبژاردنێک هەڵبژێرە', {
          reply_markup: {
            inline_keyboard: [options],
          },
        });
        break;

      case 'text_option':
        
  const textOptionValue = `
  باس کردنی پرۆژەی زیرەک  
سلاو بەرێزم ئەم کاتەت باش ئێمە لە کۆمپانیای DXN لەگەلتین بۆ رونکردنەوەی پرۆژەکەمان  
کۆمپانیای DXN کۆمپانیاێکی نیودەوڵەتیە لەلایەن دکتۆر لیم سویجین دامەزراوە لە سالی 1993. زیاتر لە 105 ولات ئۆفیس و لقی سەرەکیمان هەیە وە لە کوردستانیش لە هەر چوار پارێزگاکە ئۆفیسی سەرەکیمان هەیە. ئەم کۆمپانیایە کار دەکات لە فرۆشی راستەوخۆ.  
ئەم کۆمپانیایە کۆمەلێک بەرهەمی سروشتی هەیە کە پێداویستی رۆژانەی خەلکە. هەمووی کوالێتی  بەرزوو سەد لە سەد سروشتین.  
بەرهەمە کانیش بریتین لە چوار کۆمەلە  
کۆمەلەی یەکەم . برهەمی پاراستنی کەسی وەک سابون شامپۆ مەحجون وە کۆمەلێک بەرهەمی تر  
کۆمەلەی دووەم . تەواوکەری خۆراکین ئەم کۆمەلەیە ئیش لەسەر تەندروستی ناوەوەی مرۆڤ دەکەن لە نەخۆشیە گەورەکان و بچوکەکان دەیان پارێزن.  
کۆمەلەی سێیەم . خواردنەوەکان وەک قاوەو  
شەربەتەکان. 
 
کۆمەلەی چوارەم . جوانکاری پێست وەک کرێمەکانی روخسار و  پاکەرەوەکان  
کارکردنی بەرێزت چۆنە لەو کۆمپانیایە وە چۆن قازانج دەکەی.  
ئەندامی کۆمپانیا سێ سەرچاوەی قازانجی هەیە . 
یەکەم بەرهەمێک دەکڕێ بۆ نمونە بە 10000هەزار دەتوانێ بە 15000 هەزار یاخوت زیاتر بی فرۆشیتەوە. 
قازانجی دووەم ئەم بەرهەمەی دەی کڕی خالوو پۆینتی لەسەرە واتا هەر بەرهەمێک جۆرە خالێکی لەسەرە بە پێی نرخی بەرهەمەکە وە لە سەر ئەم خالانە مانگانە داهات وەر دەگری لە شەریکە.  
قازانجی سێیەم . تۆ کەسانی وەک خۆت دەکەیتە ئەندام لەسەر ناوی خۆت ئەوانیش بە هەمان شێوەی تۆ فرۆش دەکەن و خاڵ کۆ دەکەنەوە قازانجی خۆیان وەر دەگرن وە لە رێگەی ئەم کەسانەوە قازانجوو خاڵ بۆ تۆ دێ بێ ئەوەی لە خاڵ و قازانجی ئەوان کەم بکا بەڵکو  کۆمپانیا پێت دەدات لە قازانجی خۆی.  
تێبینی . ئەگەری زەرەر کردن %0  وە هیچ بڕە پارەێک نادەی بۆ ئەندام بون وە دەتوانی لە ڕێگەی ئۆنلاینەوە بەرهەمەکان بفرۆشی تەنها تۆ لەسەرتە وەسل بکەی هەموو شتێک شەریکە جێ بە جێی دەکات  
تۆ چوار خال بەدەست دێنی لەگەل کۆمپانیا   
1- تەندروستی  
2-ئازادی لە کات و شوێن  
3- داهاتی بەرز  
4- گەشتی نێودەولەتی  
ئەگەر دەتەوێ ژیانی خۆت و خانەوادەکەت بگۆری وەببیتە خاوەن پرۆژەی خۆت وە بێیتە ژینگەێکی ئەرێنێ و سەرکەوتو ئێمە دەتوانی یارمەتیت بدەین تا دەگەیتە باشترین ئاست  
بۆ وەرگرتنی زانیاری و بون بە ئەندام بون بە ئەندام وەرنە قۆناخی دواتر
`;


        bot.sendMessage(chatId, textOptionValue);
        break;

      case 'voice_option':
        if (!voiceOptionClicked) {
          voiceOptionClicked = false;

          const audioFilePath = 'C:/Users/ZETTA/Downloads/mahdyvoice.mp3';

          try {
            const audioBuffer = fs.readFileSync(audioFilePath);
            bot.sendVoice(chatId, audioBuffer);
            console.log('Voice message sent successfully.');
          } catch (error) {
            console.error('Error sending voice message:', error);
          }
        }
        break;

      case 'button_2':
        if (callbackQuery.from.username) {
          const questions = [
            'ناوت چیە؟',
            'تەمەنت چەندە؟',
            'لە کوێ دەژیت؟',
            'ئایا بڕوانامەت هەیە؟',
            'ئایا کاتە بەتاڵەکانت بە چیەوە سەرف دەکەی؟',
          ];
          askQuestions(chatId, questions);
        } else {
          const buttonText = 'کلیک لێرە بکە';
          const buttonCallback = 'send_images';

          bot.sendMessage(chatId, 'تکایە ببورە بەڕێز تۆ ناوی بەکار ‌هێنەرت نیە لەبەر ئەم هۆکارەش وەڵاماکانی تۆ ناگات بە کاک سەرکەوت تکایە لە ڕێگەی دوگمەی خوارەو ناوی بەکار هێنەر دروست بکە ' + buttonText, {
            reply_markup: {
              inline_keyboard: [
                [{ text: buttonText, callback_data: buttonCallback }],
              ],
            },
          });
        }
        break;

      case 'send_images':
        const imagePaths = [
          'C:/Users/ZETTA/Downloads/not1.jpg',
          'C:/Users/ZETTA/Downloads/not2.jpg',
          'C:/Users/ZETTA/Downloads/not3.jpg',
          'C:/Users/ZETTA/Downloads/not4.jpg',
        ];

        const sendImage = (index) => {
          if (index < imagePaths.length) {
            const imagePath = imagePaths[index];

            bot.sendPhoto(chatId, imagePath)
              .then(() => {
                setTimeout(() => sendImage(index + 1), 500);
              })
              .catch((error) => {
                console.error('Error sending image:', error);
              });
          } else {
            bot.sendMessage(chatId, 'لە ڕێگەی ئەم وێنانەوە ناوی بەکار ‌هێنەر دروست بکە');
          }
        };

        sendImage(0);
        break;

      case 'button_3':
        [
          { text: 'Open Link', url: 'https://t.me/+nm57J6RBeLRhMDNi' },
        ]
        
        break;

      case 'button_4':
        const facebookLink = 'https://t.me/sarkawtdxn';
        const tiktokLink = 'https://www.tiktok.com/@sarkawthalaq?_t=8hbV6bP8p2E&_r=1';
        const instagramLink = 'https://www.facebook.com/profile.php?id=100014909527142&mibextid=ZbWKwL';
        const whatsappLink = 'https://wa.me/9647502354041';




        const socialMediaButtons = [
          [{ text: 'Telegram', url: facebookLink }],
          [{ text: 'TikTok', url: tiktokLink }],
          [{ text: 'Facebook', url: instagramLink }],
          [{ text: 'WhatsApp', url: whatsappLink }],
        ];

        bot.sendMessage(chatId, 'هەڵبژاردنێک  هەڵبژێرە', {
          reply_markup: {
            inline_keyboard: socialMediaButtons,
          },
        });
        break;

      default:
        break;
    }
  });

  const copyrightMessage = `\n\n\n© ${new Date().getFullYear()} Kosar Tarkhany & Aso Jabary. All Rights Reserved`;

  const combinedMessage = greetingMessage + copyrightMessage;

  bot.sendMessage(chatId, combinedMessage, {
    reply_markup: {
      inline_keyboard: buttons,
    },
  });
});
