// SEO 配置 - 每個頁面的 meta 資訊
export const SITE_URL = 'https://ready-safe.tw';
export const SITE_NAME = '臺灣全民安全指引';

export interface PageSEO {
  title: string;
  description: string;
  keywords?: string;
  path: string;
}

export const pageSEO: Record<string, PageSEO> = {
  home: {
    title: '臺灣全民安全指引 | 防災準備・災害應對・全民國防',
    description: '當危機來臨時，有準備更安全。完整的防災物資準備清單、災害應對指南、傷患急救處理、假資訊防範技巧，幫助臺灣民眾做好全民國防準備。',
    keywords: '臺灣防災,全民國防,災害應對,防災物資,急救處理,假資訊防範,緊急避難,民防手冊,戰爭準備,台灣安全',
    path: '/',
  },
  supplies: {
    title: '防災物資準備清單 | 臺灣全民安全指引',
    description: '完整的防災物資準備清單：飲用水、食物、醫療用品、通訊設備、重要文件等。教你如何準備72小時緊急避難包，確保家人安全。',
    keywords: '防災物資,避難包,緊急物資,防災準備清單,飲用水儲備,急救包,防災食物',
    path: '/supplies',
  },
  responses: {
    title: '災害應對指南 | 臺灣全民安全指引',
    description: '地震、颱風、戰爭等各種災害的應對方式。學習如何在緊急情況下保護自己和家人，掌握正確的避難程序。',
    keywords: '災害應對,地震避難,颱風準備,緊急避難,防空警報,戰時應對,避難所',
    path: '/responses',
  },
  casualtyCare: {
    title: '傷患急救處理 | 臺灣全民安全指引',
    description: '基本急救技能：止血、包紮、CPR、骨折處理等。在緊急情況下能夠正確處理傷患，爭取寶貴的救援時間。',
    keywords: '急救處理,止血方法,CPR教學,包紮技巧,骨折處理,緊急救護,傷患照護',
    path: '/casualty-care',
  },
  misinformation: {
    title: '假資訊防範 | 臺灣全民安全指引',
    description: '如何辨識和防範假資訊、認知作戰。學習查證技巧，避免在危機時刻被錯誤訊息誤導，保持冷靜判斷。',
    keywords: '假資訊,認知作戰,事實查核,資訊戰,假新聞辨識,媒體識讀,訊息查證',
    path: '/misinformation',
  },
  mental: {
    title: '心理準備與調適 | 臺灣全民安全指引',
    description: '危機時刻的心理準備與調適方法。學習如何在壓力下保持冷靜，幫助自己和家人度過困難時期。',
    keywords: '心理準備,壓力調適,危機心理,創傷處理,心理韌性,情緒管理,災後心理',
    path: '/mental',
  },
  contributions: {
    title: '貢獻一份力 | 臺灣全民安全指引',
    description: '如何在平時和危機時刻貢獻自己的力量。志工服務、社區互助、專業技能分享等方式，一起守護臺灣。',
    keywords: '志工服務,社區互助,民防組織,救災志工,社會貢獻,臺灣團結',
    path: '/contributions',
  },
  emergencyContacts: {
    title: '緊急聯絡資訊 | 臺灣全民安全指引',
    description: '臺灣重要緊急聯絡電話與資源：警察、消防、醫療、政府機關等。緊急時刻快速找到正確的求助管道。',
    keywords: '緊急電話,報警電話,急救電話,政府熱線,災害通報,緊急求助,臺灣急救',
    path: '/emergency-contacts',
  },
  unitedFront: {
    title: '認識敵人 | 臺灣全民安全指引',
    description: '中共是臺灣的敵國與侵略者。了解敵人的統戰手法與滲透策略，保護臺灣民主自由。',
    keywords: '中共敵國,統戰手法,認知作戰,國防意識,民主防衛,臺灣安全,侵略者',
    path: '/united-front',
  },
};

// 生成完整的頁面標題
export function getFullTitle(pageTitle: string): string {
  if (pageTitle.includes(SITE_NAME)) {
    return pageTitle;
  }
  return `${pageTitle} | ${SITE_NAME}`;
}

// 生成完整的 URL
export function getFullUrl(path: string): string {
  return `${SITE_URL}${path}`;
}
