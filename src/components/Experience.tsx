import { Briefcase } from 'lucide-react';

const tagClass =
  'text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-semibold border border-slate-200 transition-all duration-300';

const Experience = () => {
  return (
    <section className="scroll-mt-24">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-800 uppercase tracking-wide">Kinh Nghiệm</h2>
        <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto mt-4"></div>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-slate-200 hover:shadow-xl transition duration-300 group">
        <div className="p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="bg-blue-50 text-blue-700 p-3 rounded-xl shrink-0 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105">
              <Briefcase size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition leading-snug">
                Social Media Data Analyst
              </h3>
              <p className="text-slate-700 font-medium mt-1">Reputyze Asia · Internship</p>
              <p className="text-sm text-slate-500 mt-1">May 2026 - Oct 2026 · 6 tháng</p>
              <p className="text-sm text-slate-500">Data Analyst Intern · Tại văn phòng</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-5">
            <span className={`${tagClass} group-hover:bg-blue-50 group-hover:text-blue-700 group-hover:border-blue-100`}>Social Listening</span>
            <span className={`${tagClass} group-hover:bg-purple-50 group-hover:text-purple-700 group-hover:border-purple-100`}>Sentiment Analysis</span>
            <span className={`${tagClass} group-hover:bg-cyan-50 group-hover:text-cyan-700 group-hover:border-cyan-100`}>Social Media Data Collection</span>
            <span className={`${tagClass} group-hover:bg-emerald-50 group-hover:text-emerald-700 group-hover:border-emerald-100`}>Data Quality</span>
            <span className={`${tagClass} group-hover:bg-orange-50 group-hover:text-orange-700 group-hover:border-orange-100`}>Retail Market Research</span>
            <span className={`${tagClass} group-hover:bg-rose-50 group-hover:text-rose-700 group-hover:border-rose-100`}>Customer Data Platform</span>
          </div>

          <ul className="text-slate-600 text-sm mt-6 space-y-2.5 list-disc list-outside ml-5">
            <li>Supported the development and operation of data collection workflows across <strong>Facebook</strong>, <strong>TikTok</strong>, and <strong>Threads</strong>, along with daily data quality checks.</li>
            <li>Contributed to monitoring and alert workflows, including a <strong>Telegram Bot</strong> for negative sentiment and content alerts.</li>
            <li>Developed a <strong>Chrome Extension</strong> for sentiment labeling and researched the use of <strong>Qwen2.5-7B</strong> on <strong>RunPod</strong> for sentiment classification.</li>
            <li>Researched and experimented with <strong>MySQL</strong>, <strong>PostgreSQL</strong>, <strong>ClickHouse</strong>, and <strong>Elasticsearch</strong> for social media data storage, querying, and search.</li>
            <li>Conducted research on <strong>CDP</strong>, <strong>CRM dashboards</strong>, and <strong>social media APIs</strong>, while supporting data and content preparation for proposals and pitching.</li>
            <li>Supported market research and business reporting, including research on the <strong>Vietnam retail market in Q3 2026</strong>.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
