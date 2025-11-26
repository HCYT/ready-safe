export interface ManualSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
  content?: SectionContent;
}

export interface SectionContent {
  intro?: string;
  subsections: SubSection[];
}

export interface SubSection {
  title: string;
  content?: string; // Markdown-like text or plain text
  items?: ChecklistItem[];
  subsections?: SubSection[]; // Nested subsections
}

export interface ChecklistItem {
  label: string;
  description?: string;
}

export const manualData: ManualSection[] = [
  {
    id: 'supplies',
    title: '物資準備',
    description: '日常居家儲備與緊急避難包，災難時的生存關鍵。',
    icon: 'Backpack',
    path: '/supplies',
    content: {
      intro: '準備充足的物資是應對危機的第一步。請根據家庭和個人需求，準備居家儲備和緊急避難包。',
      subsections: [
        {
          title: '日常居家儲備',
          content: '以家庭為單位，準備至少 7 天份。標記物品有效日期，方便管理。每半年檢查，食物快過期的先吃，壞了的東西要換。',
          subsections: [
            {
              title: '水和食物',
              items: [
                { label: '飲用水', description: '每人每日至少準備 3 公升。' },
                { label: '不用煮的主食', description: '提供基本飽足感，如罐頭、即食飯、米餅、口糧餅乾等。' },
                { label: '能量點心', description: '快速補充熱量，如營養棒、果乾、堅果、巧克力、糖果等。' },
                { label: '簡單煮的主食', description: '環境允許時可簡單烹煮，如調理包、米、泡麵、乾麵條等。' },
                { label: '基本調味料', description: '基本調味補充營養，如油、鹽、糖等。' },
              ]
            },
            {
              title: '衛生用品',
              items: [
                { label: '口罩' },
                { label: '衛生紙' },
                { label: '消毒濕紙巾、酒精噴霧' },
                { label: '女性生理用品（如有需要）' },
                { label: '濾水工具' },
                { label: '急救箱', description: '包含藥膏、繃帶、紗布等醫療用品' },
                { label: '常用藥物、個人處方藥' },
                { label: '備用眼鏡、拋棄式隱形眼鏡（如有需要）' },
              ]
            },
            {
              title: '生活防災用品',
              items: [
                { label: '手電筒、頭燈（含電池）', description: '小範圍局部照明，移動時方便使用。' },
                { label: 'LED 手提燈（含電池）', description: '照明範圍廣，可照亮整個空間。' },
                { label: '可攜式收音機', description: '無網路時仍可接收資訊。' },
                { label: '乾電池', description: '生活工具電源，準備時注意電池型號。' },
                { label: '充電線', description: '手機等設備充電用。' },
                { label: '充飽的行動電源', description: '停電時的備用電源。' },
                { label: '小型手搖發電機', description: '行動電源沒電時，用來緊急充電。' },
                { label: '工作手套（防切割、耐磨）', description: '搬東西、清理時保護雙手。' },
                { label: '塑膠袋', description: '隔離垃圾保持衛生、防水包裹物品等多種用途。' },
                { label: '保鮮膜', description: '包裹食物、覆蓋傷口等多種用途。' },
                { label: '卡式爐、卡式瓦斯罐', description: '停電時可簡單烹煮。' },
                { label: '布質膠帶', description: '隔絕、固定封裝或簡易修復用途。' },
              ]
            },
            {
              title: '照護用品（依需求準備）',
              items: [
                { label: '嬰兒用品', description: '奶粉、奶瓶、紙尿褲等。' },
                { label: '寵物用品', description: '寵物食品、排泄用品、牽繩、飼主聯絡資訊等。' },
                { label: '年長者用品', description: '銀髮友善食品、假牙清潔劑、助聽器電池等。' },
              ]
            }
          ]
        },
        {
          title: '緊急避難包',
          content: '以個人為單位，準備至少 1 到 3 天份。準備一個後背包裝物資，作為個人防災包。一般建議男性 15 公斤、女性 10 公斤。',
          subsections: [
            {
              title: '水和食物',
              items: [
                { label: '飲用水', description: '2 瓶，每瓶 600 毫升。' },
                { label: '不用煮的主食', description: '提供基本飽足感，如罐頭、即食飯、米餅、口糧餅乾等。' },
                { label: '能量點心', description: '快速補充熱量，如營養棒、果乾、堅果、巧克力、糖果等。' },
              ]
            },
            {
              title: '衛生用品',
              items: [
                { label: '口罩' },
                { label: '衛生紙' },
                { label: '消毒濕紙巾、酒精噴霧' },
                { label: '女性生理用品（如有需要）' },
                { label: '小條毛巾', description: '簡單個人清潔用。' },
                { label: '外傷藥膏、基本包紮用品' },
                { label: '常用藥物、個人處方藥' },
                { label: '眼鏡、拋棄式隱形眼鏡（如有需要）' },
                { label: '體溫計' },
              ]
            },
            {
              title: '生活防災用品',
              items: [
                { label: '手電筒、頭燈（含電池）', description: '小範圍局部照明，移動時方便使用。' },
                { label: '哨子', description: '用來發出求救訊號。' },
                { label: '可攜式收音機', description: '無網路時仍可接收資訊。' },
                { label: '避難地圖與聯絡資訊（紙本）', description: '包含與家人約定的會合地點、重要親友聯絡方式、政府重要專線。' },
                { label: '輕便的雨衣與外套', description: '防雨保暖用。' },
                { label: '輕便保暖毯或小型睡袋', description: '如太空毯、鋁箔毯等，小體積不占空間。' },
                { label: '防中暑用品', description: '如帽子、雨傘、防曬乳等。' },
                { label: '身分證（影本）', description: '紙本用防水夾鏈袋裝好。' },
                { label: '健保卡（影本）', description: '紙本用防水夾鏈袋裝好。' },
                { label: '存摺（影本）', description: '紙本用防水夾鏈袋裝好。' },
                { label: '少量現金' },
                { label: '乾電池' },
                { label: '充電線' },
                { label: '充飽的行動電源' },
                { label: '小型手搖發電機' },
                { label: '工作手套（防切割、耐磨）' },
                { label: '塑膠袋' },
                { label: '頭盔', description: '保護頭部用，建議掛在逃生包外。' },
                { label: '簡單紙筆' },
                { label: '可重複使用的餐具' },
                { label: '打火機、火柴' },
                { label: '瑞士刀、開罐器等簡易小工具' },
                { label: '鞋子（輕便耐走）' },
              ]
            },
            {
              title: '照護用品（依需求準備）',
              items: [
                { label: '嬰兒用品', description: '奶粉、奶瓶、紙尿褲等。' },
                { label: '寵物用品', description: '寵物食品、排泄用品、牽繩、飼主聯絡資訊等。' },
                { label: '年長者用品', description: '銀髮友善食品、假牙清潔劑、助聽器電池等。' },
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: 'responses',
    title: '災害應對',
    description: '空襲、地震、颱風等不同災害的應對原則。',
    icon: 'ShieldAlert',
    path: '/responses',
    content: {
      subsections: [
        {
          title: '空襲',
          content: '### 如何察覺\n- 手機收到防空警報簡訊\n- 聽到防空警報聲\n\n### 如何行動\n1. **保持冷靜，拿起緊急避難包**：平時就準備好緊急避難包，災難發生時才能馬上用。\n2. **前往避難場所**：\n   - **室內**：進入地下室或離窗戶較遠的房間，不要搭電梯。\n   - **車上**：靠邊停車，下車進入附近室內避難。\n   - **戶外空曠處**：找堅固的掩蔽處躲藏，或選擇附近較低的地方，就地趴下。\n   - **戶外非空曠處**：自行進入有「防空避難」標示的地方，或聽從指引避難。\n3. **保持「防空避難姿勢」**：\n   - 在室內就靠牆「坐下」、在戶外就「趴下」，背對爆炸方向。\n   - 身體微拱縮小受波及的身體面積，保護內臟。\n   - 雙手抱頭、遮住眼睛耳朵防止強光、碎片或音波傷害感官。\n   - 嘴巴微張平衡爆炸時的壓力，減少對耳膜和肺部的傷害。\n4. **等待防空警報解除**：等聽到「防空警報解除聲」（持續長聲 90 秒），才能解除防空避難姿勢。\n5. **空襲後若災情嚴重，帶著緊急避難包避難**：依照救災人員指示疏散前往避難處所或救濟站。'
        },
        {
          title: '軍事侵略',
          content: '### 如何察覺\n- 重要基礎設施遭破壞、大規模網路癱瘓。\n- 敵國巡航繞臺、實彈操演、無人機侵擾。\n- 對岸宣布停止兩岸交通、商業活動。\n- 敵國發動攻擊、武裝侵略或滲透破壞。\n\n### 如何行動\n1. **保持冷靜，確認備戰物資充足**：確認日常居家儲備和緊急避難包準備充足。\n2. **若戰爭發生，留意四周軍隊活動**：發現疑似軍隊活動，請儘速離開；若無法離開，請隱蔽於安全處。勿拍照錄影上傳我軍動態。\n3. **戰爭時若失去網路，收聽廣播接收資訊**：\n   - 北部：FM 94.3, 101.3, 104.9, 106.5\n   - 中部：FM 94.5, 104.5, 105.1\n   - 南部：FM 93.1, 101.3, 104.9, 107.3\n   - 東部：FM 94.3, 101.3, 104.3, 104.5, 105.3, 106.3\n   - 澎湖：AM 846, 1269\n   - 金馬：FM 91.5, 107.3\n4. **戰爭時若失去住家，到親友家或救濟站避難**。\n5. **戰爭時若物資短缺，到物資配售站**。\n6. **戰爭期間，勿相信投降假消息**。'
        }
      ]
    }
  },
  {
    id: 'casualty-care',
    title: '傷患處理',
    description: '基本急救常識，受傷時能自救救人。',
    icon: 'HeartPulse',
    path: '/casualty-care',
    content: {
      subsections: [
        {
          title: '大量出血',
          content: '1. **直接加壓止血法**：用乾淨紗布或衣物直接壓在傷口上，用力壓住直到止血。\n2. **抬高傷肢**：將受傷部位抬高超過心臟高度。\n3. **止血帶止血法**：若直接加壓無效，可使用止血帶（或寬布條）綁在傷口上方（近心端），並標記使用時間。'
        },
        {
          title: '燒燙傷',
          content: '1. **沖**：用流動冷水沖洗傷口 15-30 分鐘。\n2. **脫**：在水中小心脫去衣物，若黏住不可強行撕下。\n3. **泡**：繼續浸泡在冷水中 15-30 分鐘。\n4. **蓋**：用乾淨毛巾或紗布覆蓋傷口。\n5. **送**：儘速送醫。'
        },
        {
          title: '失去意識（CPR + AED）',
          content: '1. **叫**：確認意識。\n2. **叫**：請人撥打 119 並取得 AED。\n3. **C (Compress)**：胸外按壓，兩手交疊，掌根置於兩乳頭連線中央，用力壓、快快壓（每分鐘 100-120 下）。\n4. **A (Airway)**：暢通呼吸道。\n5. **B (Breathing)**：人工呼吸（若不願意或不會，可持續胸外按壓）。\n6. **D (Defibrillation)**：使用 AED，聽從語音指示操作（開、貼、插、電）。'
        }
      ]
    }
  },
  {
    id: 'misinformation',
    title: '假資訊防範',
    description: '分辨正確資訊，不被謠言誤導。',
    icon: 'EyeOff',
    path: '/misinformation',
    content: {
      intro: '不製造、不輕信、不轉傳、要查證！',
      subsections: [
        {
          title: '防範原則',
          content: '- **保持戒心**：不輕易轉發，多方查證（行政院即時新聞澄清專區、事實查核中心）。\n- **保護個資**：\n  - 不明的連結、QR code 別亂點。\n  - Wi-Fi 和藍牙不用時關掉。\n  - 敏感資料用完就刪。\n  - 避免使用有資安疑慮的 App (如 TikTok, 小紅書等) 和設備。\n  - 定期更新密碼與軟體。\n- **牢記**：若遭受軍事侵略，任何有關國家戰敗或政府投降的消息都是假消息！'
        }
      ]
    }
  },
  {
    id: 'mental',
    title: '心理準備',
    description: '做好心理建設，危機時不慌亂。',
    icon: 'Brain',
    path: '/mental',
    content: {
      subsections: [
        {
          title: '讓自己做好準備',
          content: '- 平時做好物資與知識準備，降低恐懼。\n- 維持良好生活習慣，保持健康。\n- 控制資訊攝取量，避免焦慮。\n- 多和親友討論感受，降低孤獨感。\n- 有需要時尋求專業心理協助。'
        },
        {
          title: '讓孩子一起做好準備',
          content: '- 與孩子一起準備物資，學習自救。\n- 鼓勵孩子查證資訊，培養識別力。\n- 誠實解釋危機狀況，讓孩子了解真實。\n- 傾聽孩子焦慮，邀請對話。\n- 規劃家庭活動，適時放鬆。'
        }
      ]
    }
  },
  {
    id: 'contributions',
    title: '貢獻一份力',
    description: '加入民防或國軍，守護家園。',
    icon: 'Users',
    path: '/contributions',
    content: {
      subsections: [
        {
          title: '成為民間互助力量',
          content: '- **參加防災士課程**：培養防災技能。\n- **加入民防團隊**：洽詢各地派出所、消防隊或民防組織。'
        },
        {
          title: '加入國軍幫忙',
          content: '- **主動報名志願役**：線上或現場報名。\n- **後備軍人與替代役備役男**：收到召集令時準時報到。'
        }
      ]
    }
  }
];
