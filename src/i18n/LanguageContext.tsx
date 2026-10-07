import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'vi' | 'zh';

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (typeof translations)[Lang];
};

const translations = {
  en: {
    name: 'Tin Le Thanh',
    nameUpper: 'TIN LE THANH',
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      tagline: 'Data Science | Get to know me!',
      cta: 'View My Projects',
      ctaContact: 'Contact Me',
    },
    about: {
      title: 'About',
      summaryTitle: 'Professional Summary',
      summaryP1:
        'I graduated with a degree in Data Science, and my current focus is on Analytics Engineering, with a strong interest in Technology and AI. I enjoy working hands-on with data — structuring and transforming data, improving data workflows, and building reliable, analytics-ready datasets.',
      summaryP2:
        'I am also exploring how AI can support data workflows and automation, making data processes more efficient, scalable, and practical. I am always open to new opportunities, collaborations, and meaningful connections.',
      summaryBold1: 'Data Science',
      summaryBold2: 'Analytics Engineering',
      school: 'Ho Chi Minh City University of Transport (UTH)',
      major: 'Major: Data Science',
      gpa: 'Cumulative GPA:',
      aboutMe: 'About Me',
      experienceTitle: 'My Experience',
      experienceBody:
        'A Data Science graduate with a solid technical foundation in SQL, Python, and Power BI. I have experience building automated data pipelines and interactive dashboards to drive data-informed decisions. Focused on delivering real business value through data cleaning, exploratory analysis (EDA), and visualization.',
      skillsetTitle: 'My Skillset',
      skillsetBody:
        'I focus on accuracy and data optimization. Core skills include Python (Pandas/NumPy, automated data collection), SQL (complex queries, CTEs, Window Functions for large-scale data), and Power BI (DAX, Data Modeling, dashboard design). I also apply Prompt Engineering, Git/GitHub, and web tools (Node.js) to support my work.',
      goalsTitle: 'My Goals',
      goalsBody:
        'I am looking for opportunities to apply my expertise in real-world projects. I want to partner with teams to create positive change through data, while continuously learning the latest advances in AI and Data to take on harder challenges.',
      resume: 'Resume',
      download: 'Download',
    },
    experience: {
      title: 'Experience',
      role: 'Social Media Data Analyst',
      company: 'Reputyze Asia · Internship',
      period: 'May 2026 - Oct 2026',
      months: '6 months',
      roleType: 'Data Analyst Intern',
      onsite: 'On-site',
      highlights: 'Highlights',
      b1: 'Supported the development and operation of data collection workflows across Facebook, TikTok, and Threads, along with daily data quality checks.',
      b2: 'Contributed to monitoring and alert workflows, including a Telegram Bot for negative sentiment and content alerts.',
      b3: 'Developed a Chrome Extension for sentiment labeling and researched the use of Qwen2.5-7B on RunPod for sentiment classification.',
      b4: 'Researched and experimented with MySQL, PostgreSQL, ClickHouse, and Elasticsearch for social media data storage, querying, and search.',
      b5: 'Conducted research on CDP, CRM dashboards, and social media APIs, while supporting data and content preparation for proposals and pitching.',
      b6: 'Supported market research and business reporting, including research on the Vietnam retail market in Q3 2026.',
    },
    projects: {
      title: 'Featured Projects',
      filterAll: 'All',
      filterData: 'Data',
      filterDashboard: 'Dashboard',
      filterMl: 'ML',
      code: 'GitHub',
      live: 'Live demo',
      empty: 'No projects in this category yet.',
      p1b1:
        'Identified logistics bottlenecks averaging 5.25 days by designing an ELT pipeline that processed 51,290 raw records into a normalized 3NF database using advanced T-SQL (CTEs, Window Functions).',
      p1b2:
        'Proposed 3 personalized marketing strategies to optimize ad spend and reduce churn by training a K-Means model to segment 38,995 customers based on RFM behavior.',
      p1b3:
        'Delivered real-time insights on $7.81M revenue and 46.22% margin through a multi-page interactive Streamlit dashboard built with Plotly.',
      p2b1:
        'Built an automated Python web-crawling system collecting 163,000+ listings from 4 major platforms, cutting manual effort by ~90%.',
      p2b2:
        'Improved data quality through rigorous cleaning and EDA on a large dataset to identify market segments and regional price distribution.',
      p2b3:
        'Developed a high-performance Power BI dashboard with dynamic filters and DAX measures to visualize property trends for stakeholders.',
      p3b1:
        'Consolidated 20 years of historical price data for 7 essential commodities and standardized multi-source datasets with Power Query for 100% consistency.',
      p3b2:
        'Designed deep-dive visualizations with DAX to uncover correlations between long-term price swings and major economic events (e.g. COVID-19, 2008 Financial Crisis).',
      p3b3:
        'Provided actionable insights on market volatility and risk.',
    },
    skills: {
      title: 'Technical Skills',
    },
    contact: {
      title: 'Contact',
      intro:
        'If you are interested in collaboration, data science projects, or looking for a strong candidate, I am always open to connect. Messages are sent directly to my personal email for a timely response.',
      phone: 'Phone',
      locationLabel: 'Work location',
      locationValue: 'Ho Chi Minh City',
      nameLabel: 'Full name',
      namePlaceholder: 'Enter your name',
      nameError: 'Please enter your name',
      emailLabel: 'Reply email',
      emailPlaceholder: 'you@email.com',
      emailRequired: 'Please enter your email',
      emailInvalid: 'Invalid email',
      linkLabel: 'Document / JD link',
      linkPlaceholder: 'Paste Google Drive, Dropbox link... (optional)',
      messageLabel: 'Message',
      messagePlaceholder: 'What would you like to discuss?',
      messageError: 'Please enter a message',
      send: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Sent successfully!',
      successBody: 'Thanks for reaching out. Tin will reply soon!',
      close: 'Close',
      sendError: 'Failed to send email: ',
    },
    footer: {
      blurb:
        'Data Science professional passionate about applying the latest advances in AI and data research to real-world problems. Always seeking opportunities to learn and grow in Data Science.',
      quickLinks: 'Quick Links',
      connect: 'Connect',
      rights: 'All rights reserved.',
    },
  },
  vi: {
    name: 'Lê Thành Tin',
    nameUpper: 'LÊ THÀNH TIN',
    nav: {
      home: 'Trang chủ',
      about: 'Giới thiệu',
      experience: 'Kinh nghiệm',
      projects: 'Dự án',
      skills: 'Kỹ năng',
      contact: 'Liên hệ',
    },
    hero: {
      tagline: 'Data Science | Tìm hiểu về tôi!',
      cta: 'Xem Dự Án Của Tôi',
      ctaContact: 'Liên Hệ',
    },
    about: {
      title: 'About',
      summaryTitle: 'Tóm tắt chuyên môn',
      summaryP1:
        'Tôi tốt nghiệp chuyên ngành Khoa học Dữ liệu, hiện tập trung vào Analytics Engineering, với sự quan tâm mạnh mẽ tới Công nghệ và AI. Tôi thích làm việc trực tiếp với dữ liệu — tổ chức, biến đổi dữ liệu, cải thiện quy trình và xây dựng các bộ dữ liệu ổn định, sẵn sàng cho phân tích.',
      summaryP2:
        'Tôi cũng đang tìm hiểu cách AI hỗ trợ quy trình dữ liệu và tự động hóa, giúp các thao tác hiệu quả, dễ mở rộng và thực tế hơn. Tôi luôn sẵn sàng với những cơ hội mới, sự hợp tác và những kết nối ý nghĩa.',
      summaryBold1: 'Khoa học Dữ liệu',
      summaryBold2: 'Analytics Engineering',
      school: 'Trường Đại học Giao thông Vận tải TP.HCM (UTH)',
      major: 'Chuyên ngành: Khoa học dữ liệu',
      gpa: 'GPA tích lũy:',
      aboutMe: 'About Me',
      experienceTitle: 'My Experience',
      experienceBody:
        'Là sinh viên Khoa học Dữ liệu với nền tảng kỹ thuật vững chắc về SQL, Python và Power BI. Tôi có kinh nghiệm xây dựng các luồng dữ liệu tự động (automated data pipelines) và dashboard tương tác để thúc đẩy quyết định dựa trên dữ liệu. Tập trung vào việc tạo ra giá trị thực tế cho doanh nghiệp thông qua làm sạch dữ liệu, phân tích khám phá (EDA) và trực quan hóa.',
      skillsetTitle: 'My Skillset',
      skillsetBody:
        'Tôi chú trọng vào độ chính xác và tối ưu hóa dữ liệu. Kỹ năng chuyên môn bao gồm Python (Pandas/NumPy, thu thập dữ liệu tự động), SQL (truy vấn phức tạp, CTE, Window Functions cho dữ liệu lớn), và Power BI (DAX, Data Modeling, thiết kế dashboard). Ngoài ra, tôi còn ứng dụng Prompt Engineering, Git/GitHub và các công cụ Web (Node.js) để hỗ trợ công việc.',
      goalsTitle: 'My Goals',
      goalsBody:
        'Tôi đang tìm kiếm cơ hội làm việc trong môi trường thực tế để áp dụng chuyên môn vào dự án thực tiễn. Tôi mong muốn đồng hành cùng doanh nghiệp để tạo ra những thay đổi tích cực từ dữ liệu. Đồng thời, tôi luôn chủ động học hỏi những tiến bộ mới nhất trong lĩnh vực AI và Dữ liệu để sẵn sàng chinh phục các thử thách khó khăn.',
      resume: 'Resume',
      download: 'Download',
    },
    experience: {
      title: 'Experience',
      role: 'Social Media Data Analyst',
      company: 'Reputyze Asia · Thực tập',
      period: '05/2026 - 10/2026',
      months: '6 tháng',
      roleType: 'Thực tập sinh Data Analyst',
      onsite: 'Tại văn phòng',
      highlights: 'Điểm nổi bật',
      b1: 'Hỗ trợ phát triển và vận hành quy trình thu thập dữ liệu trên Facebook, TikTok và Threads, kèm kiểm tra chất lượng dữ liệu hàng ngày.',
      b2: 'Tham gia xây dựng quy trình giám sát và cảnh báo, bao gồm Telegram Bot cho cảnh báo sentiment tiêu cực và nội dung.',
      b3: 'Phát triển Chrome Extension hỗ trợ gắn nhãn sentiment và nghiên cứu mô hình Qwen2.5-7B trên RunPod cho phân loại sentiment.',
      b4: 'Nghiên cứu và thử nghiệm MySQL, PostgreSQL, ClickHouse và Elasticsearch cho lưu trữ, truy vấn và tìm kiếm dữ liệu mạng xã hội.',
      b5: 'Nghiên cứu CDP, CRM dashboard và social media APIs, đồng thời hỗ trợ chuẩn bị dữ liệu và nội dung cho đề xuất và pitching.',
      b6: 'Hỗ trợ nghiên cứu thị trường và báo cáo kinh doanh, bao gồm nghiên cứu thị trường bán lẻ Việt Nam quý 3/2026.',
    },
    projects: {
      title: 'Featured Projects',
      filterAll: 'Tất cả',
      filterData: 'Data',
      filterDashboard: 'Dashboard',
      filterMl: 'ML',
      code: 'GitHub',
      live: 'Xem demo',
      empty: 'Chưa có dự án trong danh mục này.',
      p1b1:
        'Phân tích và phát hiện điểm nghẽn logistics kéo dài trung bình 5.25 ngày bằng cách thiết kế đường ống dẫn dữ liệu ELT, xử lý 51.290 bản ghi thô vào cơ sở dữ liệu chuẩn hóa 3NF sử dụng T-SQL nâng cao (CTEs, Window Functions).',
      p1b2:
        'Đề xuất 3 chiến lược tiếp thị cá nhân hóa giúp tối ưu hóa chi phí quảng cáo và giảm tỷ lệ khách hàng rời bỏ bằng cách huấn luyện mô hình K-Means để phân khúc 38.995 khách hàng dựa trên hành vi RFM.',
      p1b3:
        'Cung cấp cho stakeholders các thông tin chuyên sâu theo thời gian thực về doanh thu 7.81 triệu USD và biên lợi nhuận 46.22% thông qua dashboard Streamlit tương tác đa trang được xây dựng bằng Plotly.',
      p2b1:
        'Xây dựng hệ thống web-crawling tự động bằng Python thu thập hơn 163.000 tin đăng từ 4 nền tảng lớn, giảm 90% thời gian so với phương pháp thủ công.',
      p2b2:
        'Tối ưu hóa chất lượng dữ liệu thông qua làm sạch nghiêm ngặt và EDA trên tập dữ liệu lớn nhằm xác định phân khúc thị trường và phân bổ giá theo từng khu vực.',
      p2b3:
        'Phát triển Power BI dashboard hiệu suất cao, tích hợp bộ lọc động (dynamic filters) và các hàm DAX để trực quan hóa xu hướng tài sản cho stakeholders.',
      p3b1:
        'Tổng hợp dữ liệu giá lịch sử trong 20 năm của 7 mặt hàng thiết yếu, chuẩn hóa các tập dữ liệu từ nhiều nguồn thông qua Power Query để đảm bảo tính nhất quán 100%.',
      p3b2:
        'Thiết kế các biểu đồ trực quan hóa dữ liệu chuyên sâu bằng DAX để tìm ra sự tương quan giữa biến động giá dài hạn với các sự kiện kinh tế lớn (VD: COVID-19, Khủng hoảng tài chính 2008).',
      p3b3:
        'Cung cấp các insight thực tiễn (actionable insights) có giá trị về mức độ biến động và rủi ro của thị trường.',
    },
    skills: {
      title: 'Technical Skills',
    },
    contact: {
      title: 'Contact',
      intro:
        'Nếu bạn quan tâm đến cơ hội hợp tác, dự án khoa học dữ liệu hoặc đang tìm một ứng viên phù hợp, tôi luôn sẵn sàng trao đổi. Mọi thông tin sẽ được chuyển trực tiếp đến email cá nhân của tôi để phản hồi sớm nhất.',
      phone: 'Điện thoại',
      locationLabel: 'Khu vực làm việc',
      locationValue: 'TP. Hồ Chí Minh',
      nameLabel: 'Họ và tên',
      namePlaceholder: 'Nhập tên của bạn',
      nameError: 'Vui lòng nhập họ tên',
      emailLabel: 'Email nhận phản hồi',
      emailPlaceholder: 'email@cua-ban.com',
      emailRequired: 'Vui lòng nhập email',
      emailInvalid: 'Email không hợp lệ',
      linkLabel: 'Link tài liệu / JD',
      linkPlaceholder: 'Dán link Google Drive, Dropbox... (Nếu có)',
      messageLabel: 'Tin nhắn',
      messagePlaceholder: 'Bạn muốn trao đổi về điều gì?',
      messageError: 'Vui lòng nhập nội dung tin nhắn',
      send: 'Gửi Tin Nhắn',
      sending: 'Đang gửi...',
      successTitle: 'Đã gửi thành công!',
      successBody: 'Cảm ơn bạn đã nhắn tin. Tin sẽ phản hồi sớm nhé!',
      close: 'Đóng',
      sendError: 'Lỗi gửi mail: ',
    },
    footer: {
      blurb:
        'Data Science với đam mê ứng dụng những tiến bộ mới nhất trong nghiên cứu trí tuệ nhân tạo và dữ liệu để giải quyết các vấn đề thực tế. Luôn tìm kiếm cơ hội để học hỏi và phát triển trong lĩnh vực Data Science.',
      quickLinks: 'Liên kết nhanh',
      connect: 'Kết nối',
      rights: 'All rights reserved.',
    },
  },
  zh: {
    name: 'Tin Thanh Le',
    nameUpper: 'TIN THANH LE',
    nav: {
      home: '首页',
      about: '关于我',
      experience: '工作经历',
      projects: '精选项目',
      skills: '专业技能',
      contact: '联系我',
    },
    hero: {
      tagline: 'Data Science | 欢迎了解我！',
      cta: '查看我的项目',
      ctaContact: '联系我',
    },
    about: {
      title: '关于我',
      summaryTitle: '个人概述',
      summaryP1:
        '我毕业于 Data Science 专业，目前专注于 Analytics Engineering，对前沿科技与 AI 充满热情。我热衷于直接与数据打交道——构建与转换数据，优化数据处理流程，并打造高可靠性、随时可供分析的数据集。',
      summaryP2:
        '我同时也在探索 AI 如何赋能数据工作流与自动化，使数据处理更加高效、具备可扩展性并兼具实用价值。我始终乐于拥抱新的工作机会、跨界合作与有价值的连接。',
      summaryBold1: 'Data Science',
      summaryBold2: 'Analytics Engineering',
      school: '胡志明市交通大学 (UTH)',
      major: '专业：Data Science',
      gpa: '累计 GPA：',
      aboutMe: '关于我',
      experienceTitle: '我的经历',
      experienceBody:
        '拥有扎实的 SQL、Python 与 Power BI 技术基础的 Data Science 毕业生。具备构建自动化数据流 (data pipelines) 与交互式 Dashboard 的实战经验，助力企业实现数据驱动决策。专注于通过数据清洗、探索性分析 (EDA) 与可视化来创造真实的业务价值。',
      skillsetTitle: '核心技能',
      skillsetBody:
        '我高度重视数据的准确性与流程优化。核心技能涵盖 Python（Pandas/NumPy、自动化数据采集）、SQL（针对大规模数据的复杂查询、CTEs 与窗口函数 Window Functions）以及 Power BI（DAX、数据建模、Dashboard 设计）。此外，我还将 Prompt Engineering、Git/GitHub 以及 Web 开发工具（Node.js）灵活应用于日常开发中。',
      goalsTitle: '未来目标',
      goalsBody:
        '我正在寻找能在真实商业项目中发挥专业技能的机会。我希望与优秀团队携手，通过数据带来积极变革，同时持续紧跟 AI 与数据领域的最新突破，勇敢迎接更具挑战性的任务。',
      resume: '个人简历',
      download: '下载简历',
    },
    experience: {
      title: '工作经历',
      role: '社交媒体数据分析师',
      company: 'Reputyze Asia · 实习',
      period: '2026年5月 - 2026年10月',
      months: '6个月',
      roleType: 'Data Analyst Intern',
      onsite: '现场办公 (On-site)',
      highlights: '核心成果',
      b1: '参与开发并维护跨 Facebook、TikTok 与 Threads 的自动化数据采集工作流，负责日常数据质量质检。',
      b2: '主导监控与告警流程，搭建用于负面舆情与敏感内容预警的 Telegram Bot。',
      b3: '独立开发用于情感标注的 Chrome Extension，并探索在 RunPod 上基于 Qwen2.5-7B 进行情感分类微调。',
      b4: '调研并实践 MySQL、PostgreSQL、ClickHouse 与 Elasticsearch 在海量社交数据存储、检索与复杂查询中的应用。',
      b5: '深入调研 CDP、CRM Dashboard 与社交媒体 API，协助准备商业提案与竞标 (pitching) 所需的数据和内容。',
      b6: '支持市场调研与商业洞察报告，主导2026年第三季度越南零售市场专项分析。',
    },
    projects: {
      title: '精选项目',
      filterAll: '全部',
      filterData: 'Data',
      filterDashboard: 'Dashboard',
      filterMl: 'ML',
      code: 'GitHub',
      live: 'Live demo',
      empty: '当前分类下暂无项目。',
      p1b1:
        '设计并实现 ELT Pipeline，利用高级 T-SQL（CTEs、Window Functions）将 51,290 条原始订单数据标准化为 3NF 架构，精准定位平均耗时 5.25 天的物流瓶颈。',
      p1b2:
        '基于 RFM 行为特征训练 K-Means 聚类模型，对 38,995 名客户进行精准分群，提出 3 项个性化营销策略以优化广告投放并降低客户流失率。',
      p1b3:
        '使用 Plotly 与 Streamlit 搭建多页面交互式 Dashboard，为 781 万美元营收与 46.22% 利润率提供实时业务洞察。',
      p2b1:
        '搭建自动化 Python 爬虫系统，从 4 个主流平台采集 163,000+ 条房产信息，降低人工采集成本约 90%。',
      p2b2:
        '通过严格的数据清洗与深入的探索性分析 (EDA)，精准识别不同市场细分群体与区域价格分布特征。',
      p2b3:
        '开发高性能 Power BI Dashboard，结合动态筛选器与 DAX 度量值，直观呈现房地产市场趋势。',
      p3b1:
        '整合 7 种核心大宗商品过去 20 年的历史价格数据，借助 Power Query 标准化多源异构数据集，保证 100% 数据一致性。',
      p3b2:
        '使用 DAX 设计深度可视化图表，揭示长期价格波动与重大宏观经济事件（如 COVID-19、2008年金融危机）之间的强相关性。',
      p3b3:
        '为市场波动与风险管理提供切实可行的策略洞察。',
    },
    skills: {
      title: '专业技能',
    },
    contact: {
      title: '联系我',
      intro:
        '如果您对商业合作、Data Science 项目感兴趣，或正在寻找一位优秀的人才，欢迎随时与我联系。信息将直达我的个人邮箱，我会尽快回复您。',
      phone: '电话',
      locationLabel: '工作地点',
      locationValue: 'Ho Chi Minh City',
      nameLabel: '姓名',
      namePlaceholder: '请输入您的姓名',
      nameError: '请输入您的姓名',
      emailLabel: '回复邮箱',
      emailPlaceholder: 'you@email.com',
      emailRequired: '请输入您的邮箱',
      emailInvalid: '邮箱格式不正确',
      linkLabel: '文档 / 职位描述链接 (JD)',
      linkPlaceholder: '粘贴 Google Drive、Dropbox 链接...（选填）',
      messageLabel: '留言内容',
      messagePlaceholder: '您希望交流什么内容？',
      messageError: '请输入留言内容',
      send: '发送消息',
      sending: '正在发送...',
      successTitle: '发送成功！',
      successBody: '感谢您的来信。Tin 会尽快给您回复！',
      close: '关闭',
      sendError: '邮件发送失败：',
    },
    footer: {
      blurb:
        '热衷于将 AI 与数据科学最新研究成果应用于解决实际业务问题的 Data Science 专业人士。持续追求在数据科学领域的深耕与突破。',
      quickLinks: '快速链接',
      connect: '社交连接',
      rights: '保留所有权利。',
    },
  },
} as const;

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'portfolio_lang';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'vi' || saved === 'en' || saved === 'zh') return saved;
      } catch {
        // bỏ qua nếu bị chặn cookie/storage
      }
    }
    return 'en';
  });

  const setLang = (nextLang: Lang) => {
    setLangState(nextLang);
    try {
      localStorage.setItem(STORAGE_KEY, nextLang);
    } catch {
      // bỏ qua lỗi private mode/quota
    }
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang: () => {
        const order: Lang[] = ['vi', 'en', 'zh'];
        const next = order[(order.indexOf(lang) + 1) % order.length];
        setLang(next);
      },
      t: translations[lang],
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
